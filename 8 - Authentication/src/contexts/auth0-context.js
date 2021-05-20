import createAuth0Client from '@auth0/auth0-spa-js'
import React, { createContext, useState, useEffect, useContext } from 'react'

export const Auth0Context = createContext()
export const useAuth0 = () => useContext(Auth0Context)

export function Auth0Provider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [auth0client, setAuth0client] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    initAuth0()

    async function initAuth0() {
      //initialize client
      const auth0 = await createAuth0Client({
        domain: 'setredeyes.us.auth0.com',
        client_id: 'QlPLy16ol6wCZxGwPXqLRWqLkBcWs1WW',
        redirect_uri: window.location.origin
      })
      setAuth0client(auth0)

      //handle redirect when user comes back
      if (window.location.search.includes('code=') &&
          window.location.search.includes('state=')
      ) {
        try {
          await auth0.handleRedirectCallback()
        } catch (err) {
          alert(err)
        }

        window.location.replace(window.location.pathname)
      }

      //is a user authenticated
      const isAuthenticated = await auth0.isAuthenticated()
      setIsAuthenticated(isAuthenticated)

      //go grab the user
      if (isAuthenticated) {
        const user = await auth0.getUser()
        setUser(user)
      }
      setIsLoading(false)
    }
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        login: (...props) => auth0client.loginWithRedirect(...props),
        logout: (...props) => auth0client.logout(...props),
        getToken: (...props) => auth0client.getTokenSilently(...props)
      }}
    >
      {children}
    </Auth0Context.Provider>
  )
}

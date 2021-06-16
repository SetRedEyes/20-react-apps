import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSignupForm } from './SignupFormContext'
import { Animator } from './Animator'

export const SocialForm = () => {
  const {register, handleSubmit, formState: { errors }} = useForm()

  const history = useHistory()

  const { social, setSocial } = useSignupForm()

  const onSubmit = (data) => {
    setSocial(data)
    history.push('/review')
  }

  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>How can we find you on social?</h2>

        <input
          type='text'
          name='twitter'
          placeholder="What's your Twitter?"
          defaultValue={social.twitter}
          {...register('twitter', { required: true })}
        />
        <p>{errors.twitter && 'Twitter is required.'}</p>

        <input
          type='text'
          name='facebook'
          placeholder="What's your Facebook?"
          defaultValue={social.facebook}
          {...register('facebook', {
            required: true
          })}
        />
        <p>{errors.facebook && 'Facebook is required.'}</p>

        <input type='submit' value='next' />
      </form>
    </Animator>
  )
}

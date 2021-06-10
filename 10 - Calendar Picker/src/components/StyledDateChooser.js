import React from 'react'
import styled from 'styled-components'
import '../App.css'

export const DateChooser=({ choosingType, setChoosingType, startDate, endDate }) => (
    <StyledDateChooser>
      <StyledDateChooserButton
        onClick={() => setChoosingType('start')}
        isChoosing={choosingType === 'start'}
      >
        Start Date <span>{startDate}</span>
      </StyledDateChooserButton>
      <StyledDateChooserButton
        onClick={() => setChoosingType('end')}
        isChoosing={choosingType === 'end'}
      >
        End Date <span>{endDate}</span>
      </StyledDateChooserButton>
    </StyledDateChooser>
  )


const StyledDateChooser = styled.div`
  display: flex;
  margin-bottom: 20px;
`


const StyledDateChooserButton = styled.button`
  color: #0b204c;
  text-transform: uppercase;
  flex: 1;
  padding: 15px;
  background: none;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid rgba(11, 32, 76, 0.2);
  outline: none;
  border-color: ${(props) => (props.isChoosing ? `#0b204c` : 'none')};

  span {
    display: block;
    min-height: 60px;
    font-size: 50px;
  }
`


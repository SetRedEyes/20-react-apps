import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import './App.css'
import { DateChooser } from './components/StyledDateChooser'

const calendarDates = Array(31)
  .fill(0)
  .map((_, i) => i + 1)

export default function App() {
  const [choosingType, setChoosingType] = useState('start')
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [hoverDate, setHoverDay] = useState(null)

  const updateDate = (choosenDay) => {
    //handle if a user chose before our current range
    if (startDate && choosenDay < startDate) {
      setStartDate(choosenDay)
      return setChoosingType('end')
    }

    //handle if a user chose after our current range
    if (endDate && choosenDay > endDate) {
      setEndDate(choosenDay)
      return setChoosingType('end')
    }

    if (choosingType === 'start') {
      setStartDate(choosenDay)
      return setChoosingType('end')
    }

    if (choosingType === 'end') {
      setEndDate(choosenDay)
    }
  }

  const checkInBetween = (day) => {
    if (startDate && !endDate) return day > startDate && day < hoverDate
    return day > startDate && day < endDate
  }
  return (
    <>
      <DateChooser
        endDate={endDate}
        startDate={startDate}
        choosingType={choosingType}
        setChoosingType={setChoosingType}
      />

      <StyledCalendar>
        {calendarDates.map((day, index) => {
          let isSelected = day === startDate || day === endDate
          let isInBetween = checkInBetween(day)
          return (
            <StyledCalendarDay
              isInBetween={isInBetween}
              isSelected={isSelected}
              key={index}
              onClick={() => updateDate(day)}
              onMouseOver={() => setHoverDay(day)}
            >
              {day}
            </StyledCalendarDay>
          )
        })}
      </StyledCalendar>
    </>
  )
}

const StyledCalendar = styled.div`
  max-width: 400px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background: #0b204c;
  color: #fff;
  padding: 20px;
`

const StyledCalendarDay = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: 0.3s ease background;
  border: none;
  outline: none;
  cursor: pointer;
  color: #8096c1;
  background: none;

  ${(props) =>
    props.isInBetween &&
    css`
      background: #254381;
      color: #eee;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background: #1a1a1a !important;
      color: #eee;
    `}

  &:hover {
    color: #eee;
    background: #254381;
  }
`

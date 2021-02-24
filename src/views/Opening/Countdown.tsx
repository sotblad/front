import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useRouteMatch } from 'react-router-dom'
import moment from 'moment/moment'

const Countdown = () => {
  const openingDate2 = moment('2021-03-01T10:00:00Z')
  const calculateTimeLeft = () => {
    const difference = openingDate2.diff(moment.utc())
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>,
    )
  })

  return (
    <CountdownContainer>
      <p>
        Opening on {openingDate2.toString()}
        <CountdownLabel>
          {timerComponents.length ? timerComponents.concat('left') : <span>Time&apos;s up, it&apos; open!</span>}
        </CountdownLabel>
      </p>
      <hr />
      <p>
        <strong>
          Read the{' '}
          <a href="https://koaladefi.medium.com/launch-announcement-95676a357cf9" target="_blank" rel="noreferrer">
            Announcement ↠
          </a>
        </strong>
      </p>
    </CountdownContainer>
  )
}

export default Countdown

const CountdownContainer = styled.div`
  tab-size: 4;
  font-family: inherit;
  line-height: inherit;
  text-rendering: optimizelegibility;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  border: 0 solid #e5e7eb;
  box-sizing: border-box !important;
  margin-bottom: 1rem;
  padding: 0.75rem;
  text-align: center;
  --tw-bg-opacity: 1;
  background-color: #313530;
  box-shadow: 0 0 40px 3px #fc0; /* middle yellow */
  border-radius: 10px;
`
const CountdownLabel = styled.span`
  font-family: inherit;
  text-rendering: optimizelegibility;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  --tw-space-y-reverse: 0;
  text-align: center;
  border: 0 solid #e5e7eb;
  --tw-shadow: 0 0 transparent;
  --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 transparent;
  --tw-ring-shadow: 0 0 transparent;
  box-sizing: border-box !important;
  border-radius: 0.25rem;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 0.5rem;
  padding: 0.25rem;
  white-space: nowrap;
  --tw-bg-opacity: 1;
  background-color: #41aa29;
`

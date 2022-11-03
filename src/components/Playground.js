/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, { useState } from 'react'

export default function Playground(props) {
  // useState allows to set internal state
  // it is a function taht takes desired initial state
  // returns an array with 2 things: the state itself and stage changer 
  // NO DECLARING VARIABLES TO HOLD STATES (with let)

  // const theArray = useState(0)
  // const count = theArray[0]
  // const setCount = theArray[1]

    const [count, setCount] = useState(0)
    const [spinnerOn, setSpinnerOn] = useState(true)
    const [weapon, setWeapon] = useState('scissors')

    if (spinnerOn){
      return (
        <div className='container'>
          Loading...  
          <button onClick={event => setSpinnerOn(false)}>TURN SPINNER OFF</button>
        </div>
      )
    }


  return (
  <div className='container'>
    <h3>Playground for {props.cohort}</h3>
    <div>The count is {count}</div>
    <button onClick={event => { setCount(count + 1) }}>Increase</button>
    
    <div>The spinner is {spinnerOn ? 'ON' : 'OFF'} </div>
    <button onClick={event => { setSpinnerOn(!spinnerOn)}}>Toggle spinner</button>
    

    <div>The current weapon {weapon}</div>

    <button onClick={event => { setWeapon('scissors')}}>pick scissors</button>
    <button onClick={event => { setWeapon('rock')}}>pick rock</button>
    <button onClick={event => { setWeapon('paper')}}>pick paper</button>

    
  </div>
  )
} 
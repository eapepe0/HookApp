import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'



export const HooksApp = () => {
  return (
    <div className='container'>
        <h1 className='title'>HooksApp</h1>
            <hr />
        <h2>useState</h2>
            <hr />
        <CounterApp />
            <hr />
        <CounterWithCustomHook />
    </div>
  )
}

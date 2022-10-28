import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { Card } from './03-examples/Card'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'



export const HooksApp = () => {
  return (
    <div className='container'>
        <h1 className='title'>HooksApp</h1>
            <hr />
        {/* <h2>useState</h2> */}
            <hr />
        {/* <CounterApp /> */}
            <hr />
        {/* <CounterWithCustomHook /> */}
            <hr />
            <br /><br />
        {/* <h2>useEffect</h2> */}
        <hr />
            {/* <SimpleForm />     */}    
        <hr />
            {/* <FormWithCustomHook /> */}
        <hr />
       <MultipleCustomHooks />

{/*         <Card />  */}
    </div>
  )
}

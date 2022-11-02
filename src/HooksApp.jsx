import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { Card } from './03-examples/Card'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
<<<<<<< HEAD
import { FocusApp } from './04-useRef/FocusApp'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayout/Layout'
import { CopyApp } from './04-useRef/CopyApp'
import { MediaPlayer } from './04-useRef/MediaPlayer'
import { ScrollAnimation } from './04-useRef/ScrollAnimation'
import { LoadingApp } from './04-useRef/LoadingApp'
=======
import { FocusScreen } from './04-useRef/FocusScreen'
>>>>>>> 725185fb0508c3f5ab991d37a899cca0f63f9a12



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
       {/* <MultipleCustomHooks /> */}

<<<<<<< HEAD
        {/* <FocusScreen /> */}
        {/* <Layout /> */}
        {/* <FocusApp /> */}
        {/* <CopyApp /> */}
        {/* <MediaPlayer /> */}
        {/* <ScrollAnimation /> */}
        <LoadingApp />
=======
        <FocusScreen />
>>>>>>> 725185fb0508c3f5ab991d37a899cca0f63f9a12
    </div>
  )
}

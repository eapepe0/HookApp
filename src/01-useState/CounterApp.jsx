import { useState } from "react"

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30,
    })

    const {counter1 ,counter2, counter3} = counter;
  return (
    <div className="container-fluid">
        <h3>Counter1:   {counter1} </h3>
        <h3>Counter2:   {counter2} </h3>
        <h3>Counter3:   {counter3} </h3>
        <hr />

        <button className="btn btn-primary"
         onClick={
            ()=>setCounter({...counter,
               counter1 : counter1 + 1,}
            )
        }
         >Counter 1: +1</button>
        <button className="btn btn-primary"
         onClick={
            ()=>setCounter({...counter,
               counter2 : counter2 + 1,}
            )
        }
         >Counter 2 : +1</button>

        <button className="btn btn-primary"
         onClick={
            ()=>setCounter({...counter,
               counter3 : counter3 + 1,}
            )
        }
         >Counter 3 : +1</button>
    </div>
  )
}

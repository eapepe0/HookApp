import React, {useState} from "react";
import { Card } from "./Card";

export const LoadingApp = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Show / Hide</button>
        {show && <Card />}
      
    </div>
  );
};

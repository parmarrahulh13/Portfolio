
import { useState } from "react";

function Feature(){
   const [open , setOpen ] = useState(false);
    return (

       <div className="Accordion">
         <h3>Frequently Asked Questions</h3>
        <p>What technologies do you use? </p>
        <p onClick={()=> setOpen(!open)}>+</p>
        {open && <p>this is react function</p> }
       </div>
    );
};

export default Feature;
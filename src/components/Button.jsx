import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ value, width, backgorund, color, callback }) => {
    return (
        <div>
            <button onClick={callback} style={{ width: width, backgroundColor: backgorund, color: color, padding: '10px 10px',marginTop:'5px', borderEndEndRadius: '10px', border: "1px solid rgb(89,205,153,0.682)" }}>{value} </button>
           
        </div>
    )
}

export default Button

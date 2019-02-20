import React, { useState, useEffect } from 'react';

export const Ip = (props) => {

    const [IPvisibility, setIPvisibility] = useState(false)
    
    const handleShow = () => setIPvisibility(!IPvisibility)
    return (
        <div className='ip-wrap'>
            <div className='ip-add'>
                <div>Your IP Address</div>
                <div className={IPvisibility ? 'add' : 'hide-add'}>{props.address[0] == '' ? 'Not sure yet...' : props.address[0]}</div>
                <button onClick={() => handleShow()}>{IPvisibility ? 'Hide' : 'Show'}</button>
            </div>
        </div>
    )
}
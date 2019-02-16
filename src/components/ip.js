import React, { useState, useEffect } from 'react';

export function Ip() {

    const todaysDate = new Date
    const [add, setAdd] = useState('')
    const [IPvisibility, setIPvisibility] = useState(false)
    const unchanged = 1

    useEffect(() => {
        fetch('https://portfoliopython.herokuapp.com/visitors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date: todaysDate.toLocaleString() })
        }).then(response => { return response.json() })
            .then(responseData => { return setAdd(responseData) })
    }, [unchanged])

    const handleShow = () => setIPvisibility(!IPvisibility)
    return (
        <div className='ip-wrap'>
            <div className='ip-add'>
                <div>Your IP Address</div>
                <div className={IPvisibility ? 'add' : 'hide-add'}>{add[0] == '' ? 'Not sure yet...' : add[0]}</div>
                <button onClick={() => handleShow()}>{IPvisibility ? 'Hide' : 'Show'}</button>
            </div>
            <div className='visits'>
                <div>Your visit total: <span>{add[0] == '' ? 'Not sure yet...' : add[1]}</span></div>
                <p>(since 2/12/19)</p> 
                <p>(Every page refresh counts toward visit total)</p>
            </div>
        </div>
    )
}
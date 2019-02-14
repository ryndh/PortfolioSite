import React from 'react';

export function Navbar() {

    const click = (e) => {
        switch (e.target.name) {
            case 'home':
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
                break
            case 'proj':
                window.scrollTo({
                    top: 800,
                    behavior: "smooth",
                })
                break
            case 'contact':
                window.scrollTo({
                    top: window.innerWidth > 700 ? 2450 : 2700,
                    behavior: "smooth",
                })
                break
        }
    }
    return (
        <div className='navbar'>
            <a onClick={(e) => click(e)} name='home' className='link' >Home</a>
            <a onClick={(e) => click(e)} name='proj' className='link' >Projects</a>
            <a onClick={(e) => click(e)} name='contact' className='link' >Contact</a>
        </div>
    )
}
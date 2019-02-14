import React from 'react';

export function Banner() {
    let size = { backgroundSize: `${100 + (window.pageYOffset / 20)}%` }
    let sizePhone = { backgroundSize: `${120 + (window.pageYOffset / 20)}%` }
    let width = window.innerWidth;

    return (
        <div className='top' style={width < 700 ? sizePhone : null} style={size}>
            <p className='ryan'><span>Ryan Hull</span></p>
            <p className='dev'><span>Full Stack Developer</span></p>
        </div>
    )
}
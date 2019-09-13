import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import Banner from '../components/banner'

window.scrollTo = jest.fn()

test('Banner exists', function(){
 expect(Banner).toBeInstanceOf(Function)
}) 

test('Check that About Me link exists', () => {
    const { getByText } = render(<Banner/>)
    expect(getByText(/About Me/i)).toBeInTheDocument()
})

// TODO: this doesn't really work, but has some decent stuff in it. write test for another component.
// test('Test that state updates on click', () => {
//     const mockedClickFunction = jest.fn()
//     act(() => {
//        render(<Banner/>)
//     })
//     const button = document.querySelector('[data-test-about]')
//     button.onClick = mockedClickFunction //Doesn't work. Fi
//     button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
//     expect(mockedClickFunction).toHaveBeenCalledTimes(1)
// })
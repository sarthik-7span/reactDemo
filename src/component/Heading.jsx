import React from 'react'

function Heading(props) {
    return (
        <><h1 className='text-3xl font-bold text-center'><span className='text-green-500'>{props.heading}</span></h1></>
    )
}

export default Heading
import React from 'react'
import './style2.scss'

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
}) => {
    const checkButtonSize = SIZES[0];
    return (<button className={`btn ${checkButtonSize} `} onClick={onClick} type={type}>
        {children}
    </button>)
}
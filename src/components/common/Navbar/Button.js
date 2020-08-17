import React from 'react';
import './style.scss';

const SIZES = [
    'nav-btn--medium',
    'nav-btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
}) => {
    const checkButtonSize = SIZES[0];
    return (<button className={`nav-btn ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
    </button>)
}
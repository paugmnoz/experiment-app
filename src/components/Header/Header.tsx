import * as React from 'react';

import './Header.scss';

interface HeaderProps {
    title: string;
    text?: string;
    img?: string;
}

export const Header = ({ title, text, img }: HeaderProps) => {
    return <header className="header">
        <img src={img} />
        <h1>{title}</h1>
        {text && <p>{text}</p>}
    </header>;
}
import React from 'react';

export function Menu() {
    let showMenu = () => {
        document.querySelector('.navigation').classList.toggle('active');
        document.querySelector('.menu').classList.toggle('hide');
        document.querySelector('.close').classList.toggle('show');
    }
    return (
        <div className="menu">
            <a className="logo flex-1" href="./index.html">Laptop Research</a>
            <div>
                <a onClick={showMenu}>
                    <i className="material-icons menu">menu</i>
                    <i className="material-icons close">close</i>
                </a>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#takeTest">Take Test</a></li>
                    <li><a href="#compareTool">Compare Tool</a></li>
                </ul>
            </nav>
        </div>
    )
}
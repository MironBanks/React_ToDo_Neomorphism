import React from 'react';
import { FaEarlybirds } from 'react-icons/fa'

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="todo_logo" />
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li>
                            <FaEarlybirds />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
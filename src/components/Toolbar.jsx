import React from 'react';

const Toolbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <h1>Good Morning, Dylan</h1>
            </div>

            <div className="list-nav">
                <ul>
                    <li><a href="">Tasks</a></li>
                    <li><a href="">Calendar</a></li>
                    <li><a href="">Completed Tasks</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Toolbar
import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = ({ onClick }) => {
    return (
        <button className="chronicle-button" onClick={onClick}>
            <span>
                <em>Submit</em>
            </span>
            <span>
                <em>Submit</em>
            </span>
        </button>
    );
};

export default ButtonComponent;

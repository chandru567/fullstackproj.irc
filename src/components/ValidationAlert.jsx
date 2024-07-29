// src/components/ValidationAlert.jsx
import React from 'react';

const ValidationAlert = ({ message }) => {
    return (
        <div style={{ color: 'red' }}>
            {message}
        </div>
    );
};

export default ValidationAlert;

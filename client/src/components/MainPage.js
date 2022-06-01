import React, { useState } from 'react';
import '../styles/styles.css';
import ActionButtons from './ActionButtons';
// import Form from "./LoginForm"

export default function MainPage () {
    return(
        <div className='parentWrapper'>
            <div>
                <h2>Actions</h2>
             </div>
            <ActionButtons /> 
        </div>
     )
}; 



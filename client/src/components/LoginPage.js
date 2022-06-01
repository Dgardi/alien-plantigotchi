import React, { useState } from 'react';
import '../styles/styles.css';
import LoginForm from "./LoginForm"

export default function LoginPage() {
    return (
        <div className="parentWrapper">
            <div>
                <h2>Log in or sign up</h2>
                <div>
                    {/* add in images here */}
                </div>
            </div>
            <LoginForm />
        </div>
    )
};



import React, { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleEmailChange = (event) => setEmail(event.target.value);

    const handlePasswordChange = (event) => setPassword(event.target.value);

    return (
        <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        inputmode="email" 
                        autoComplete="username" 
                    />
                </fieldset>

                <fieldset>
                    <label for="password">Senha</label>
                    <input password="password" type="password" autoComplete="current-password" value={password} onChange={handlePasswordChange} />
                </fieldset>
                <button type="submit">Entrar</button>
        </form>
    );
}
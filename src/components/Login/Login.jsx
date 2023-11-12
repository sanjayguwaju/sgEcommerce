import React from 'react';

const Login = () => {
    return (
        <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

const Register = () => {
    return (
        <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    );
};

export { Login, Register };
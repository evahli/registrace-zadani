import { useState, useEffect } from "react";

interface UserStructure {
    username: string,
    email: string,
    password: string,
    passwordConfirm: string,
}

export const Registration = () => {

    const [user, setUser] = useState<UserStructure>({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUser((prevUser) => ({ ...prevUser, [name]: value, }))
    }

    useEffect(() => {
        if (user.username === '' && user.email.includes('@')) {
            const usernameFromEmail = user.email.split('@')[0].trim()
            setUser((prevUser) => ({ ...prevUser, username: usernameFromEmail, }))
        }
    }, [user.email])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <p><label>Email: <input onChange={handleInputChange} name="email" type="text" value={user.email} /></label></p>
                <p><label>Username: <input onChange={handleInputChange} name="username" type="text" value={user.username} /></label></p>
                <p><label>Password: <input onChange={handleInputChange} name="password" type="password" value={user.password} /></label></p>
                <p><label>Confirm password: <input onChange={handleInputChange} name="passwordConfirm" type="password" value={user.passwordConfirm} /></label></p>
                <button type="submit">REGISTER</button>
            </form>
        </div>
    )
}
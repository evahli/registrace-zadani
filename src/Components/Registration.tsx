import { useState } from "react";

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
        setUser(prevUser => {
            const updatedUser = { ...prevUser, [name]: value };
            if (updatedUser.username === '' && updatedUser.email.includes('@')) {
                updatedUser.username = updatedUser.email.split('@')[0].trim();
            }
            return updatedUser;
        });
    }



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user);
        setUser({
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <p><label>Email: <input onChange={handleInputChange} name="email" type="email" value={user.email} /></label></p>
                <p><label>Username: <input onChange={handleInputChange} name="username" type="text" value={user.username} /></label></p>
                <p><label>Password: <input onChange={handleInputChange} name="password" type="password" value={user.password} /></label></p>
                <p><label>Confirm password: <input onChange={handleInputChange} name="passwordConfirm" type="password" value={user.passwordConfirm} /></label></p>
                <button type="submit">REGISTER</button>
            </form>
        </div>
    )
}

import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { authService } from "../services";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../authentication/auth";
import Nav from "../components/Nav";


interface DataRegister {
    name: string
    email: string;
    password: string;
}

export const Register = () => {
    const [error, setError] = useState<boolean>(false);
    const [registed, setRegisted] = useState<boolean>(false);
    const { token } = useAuth();
    const { handleSubmit, register } = useForm<DataRegister>();
    const onSubmit = async (data: DataRegister) => {
        setError(false);
        const res = await authService.register(data.name, data.email, data.password);

        setError(!res)
        if (res) {
            setRegisted(true)
        }
    }
    if (token) {
        return <Redirect to="/" />;
    }
    if (registed) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <Nav />

            <div className="login">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label>Name</label>
                    <input type="name"  {...register('name')} />

                    <label>Email</label>
                    <input type="email" {...register('email')} />

                    <label>Password</label>
                    <input type="password" {...register('password')} />

                    <button className="btn" type="submit">Register</button>

                    <Link style={{ color: '#000', fontSize: 17, textDecoration: 'none' }} to="/login"> Login </Link>
                </form>

            </div>
        </>


    );
};

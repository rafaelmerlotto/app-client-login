
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, Link } from 'react-router-dom';
import { useAuth } from '../authentication/auth';
import Nav from '../components/Nav';


interface LoginData {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const [err, setErr] = useState<boolean>(false);
  const { token, login } = useAuth();
  const { handleSubmit, register } = useForm<LoginData>();
  const onSubmit = async (data: LoginData) => {
    setErr(false);
    const res = await login(data.email, data.password);
    setErr(!res);
  };
  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <>
    <Nav/>
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="email" {...register('email')} />

        <label>Password</label>
        <input type="password"   {...register('password')} />

        <button className='btn' type='submit'>Login</button>

        <Link style={{ color: '#000', fontSize: 17, textDecoration: 'none' }} to="/register"> Register </Link>
      </form>
    </div>

    </>

  );
};


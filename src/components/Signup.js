/* eslint-disable no-alert */
import { useRef } from 'react';

const Signup = ({ setCurrUser, setShow }) => {
  const formRef = useRef();
  const signup = async (userInfo, setCurrUser) => {
    const url = 'https://blue-dreams-back-end.herokuapp.com/signup';
    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      localStorage.setItem('token', response.headers.get('Authorization'));
      setCurrUser(data);
    } catch (error) {
      alert('error', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        name: data.name,
        email: data.email,
        admin: data.admin,
        license: data.license,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    };
    signup(userInfo, setCurrUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Name:
        {' '}
        <input type="name" name="name" placeholder="name" />
        <br />
        Email:
        {' '}
        <input type="email" name="email" placeholder="email" />
        <br />
        Email:
        {' '}
        <input type="email" name="email" placeholder="email" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="password" />
        <br />
        Password confirmation:
        {' '}
        <input type="password_confirmation" name="password_confirmation" placeholder="password_confirmation" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered,
        <a href="#login" onClick={handleClick}>Login</a>
        {' '}
        here.
      </div>
    </div>
  );
};
export default Signup;

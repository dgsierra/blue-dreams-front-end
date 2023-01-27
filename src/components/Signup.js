/* eslint-disable no-alert */
import { useRef } from 'react';

const Signup = ({ setCurrUser, setShow }) => {
  const formRef = useRef();
  const signup = async (userInfo, setCurrUser) => {
    const url = 'https://blue-dreams-back-end.herokuapp.com/signup';
    try {
      const response = await fetch(url, {
        method: 'POST',
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
      console.log('error', error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    signup(userInfo, setCurrUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div className="mt-5 bg-primary w-50 mx-auto">
      <form ref={formRef} onSubmit={handleSubmit}>
      <label className="form-label ms-auto text-light mt-3">Email:</label>
        {' '}
        <input type="email" name="email" placeholder="email" className="form-control mt-2 w-50 mx-auto" required />
        <br />
        <label className="form-label ms-auto text-light">Password:</label>
        {' '}
        <input type="password" name="password" placeholder="password" className="form-control mt-2 w-50 mx-auto" required />
        <br />
        <input type="submit" value="Submit" className="btn btn-danger text-decoration-none mt-1 ms-3 mb-5" />
        <a href="#login" onClick={handleClick} className="btn btn-success text-decoration-none mt-1 ms-3 mb-5">Login</a>
      </form>
    </div>
  );
};
export default Signup;

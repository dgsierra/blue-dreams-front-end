/* eslint-disable no-alert */
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/reducer/user';

const Signup = ({ setCurrUser, setShow }) => {
  const dispatch = useDispatch();
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
      data.token = response.headers.get('Authorization');
      dispatch(signUp(data));
      console.log('data', data);
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
    <div className="mt-5 bg-primary w-50 mx-auto">
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label ms-auto text-light mt-3">
          <input type="name" name="name" placeholder="name" />
        </label>

        <label htmlFor="email" className="form-label ms-auto text-light mt-3">
          <input type="email" name="email" placeholder="email" className="form-control mt-2 w-50 mx-auto" required />
        </label>
        <label htmlFor="password" className="form-label ms-auto text-light">
          <input type="password" name="password" placeholder="password" className="form-control mt-2 w-50 mx-auto" required />
        </label>

        <input type="submit" value="Submit" className="btn btn-danger text-decoration-none mt-1 ms-3 mb-5" />
        <a href="#login" onClick={handleClick} className="btn btn-success text-decoration-none mt-1 ms-3 mb-5">Login</a>
        <label htmlFor="password_confirmation" className="form-label ms-auto text-light">
          <input type="password_confirmation" name="password_confirmation" placeholder="password_confirmation" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Signup;

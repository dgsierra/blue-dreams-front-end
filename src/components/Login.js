import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/reducer/user';

const Login = ({ setCurrUser, setShow }) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const login = async (userInfo, setCurrUser) => {
    const url = 'https://blue-dreams-back-end.herokuapp.com/login';
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
      if (!response.ok) { throw data.error; }

      localStorage.setItem('token', response.headers.get('Authorization'));
      data.token = response.headers.get('Authorization');
      dispatch(signUp(data));
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
    login(userInfo, setCurrUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <div className="mt-5 p-5 mx-auto">
      <form ref={formRef} onSubmit={handleSubmit} className="bg-primary w-50 mx-auto p-5">
        <label className="form-label ms-2 text-light mt-3">Email:</label>
        {' '}
        <input type="email" name="email" placeholder="email" className="form-control mt-2 mx-auto" required />
        <br />
        <label className="form-label ms-2 text-light">Password:</label>
        {' '}
        <input type="password" name="password" placeholder="password" className="form-control mt-2 mx-auto" required />
        <br />
        <input type="submit" value="Login" className="btn btn-success ms-2 mt-1 mb-2" />
        <a href="#signup" onClick={handleClick} className="btn btn-danger text-decoration-none mt-1 ms-3 mb-2">Signup</a>
      </form>
    </div>
  );
};
export default Login;

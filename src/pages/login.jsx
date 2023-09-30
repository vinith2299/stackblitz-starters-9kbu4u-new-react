import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import '../css/login.css';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = (data) => {
    // alert('hello' + name);
    console.log(data);
  };
  return (
    <form id="loginform" onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>
          <i className="fa-solid fa-right-to-bracket"></i> Username{' '}
        </label>
        <input
          type="text"
          className="input"
          {...register('username', {
            required: {
              value: true,
              message: 'usernameis required',
            },
            minLength: {
              value: 3,
              message: 'username atleast have 3 character',
            },
            maxLength: {
              value: 10,
              message: 'username not execd 10 characters ',
            },
          })}
        />
      </div>
      <div>
        <label>
          <i className="fa-solid fa-unlock"></i> Password{' '}
        </label>
        <input type="password" className="input" {...register('password')} />
      </div>
      <div>
        {/* <button onClick={onsubmit}>login</button> */}
        {/* <button onClick={onsubmit()}>login</button> */}
        <button>
          {' '}
          <i className="fa-solid fa-right-to-bracket"></i> login
        </button>
      </div>
    </form>
  );
}

export default Login;

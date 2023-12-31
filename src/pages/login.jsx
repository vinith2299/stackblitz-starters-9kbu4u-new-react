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
    let commentsData = {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
    console.log(data);
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responsedata) => {
        // data=responsedata;
        setdata(responsedata);
        console.log(responsedata);
      });
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
        <small>{errors.username && errors.username.message}</small>
      </div>
      <div>
        <label>
          <i className="fa-solid fa-unlock"></i> Password{' '}
        </label>
        <input
          type="password"
          className="input"
          {...register('password', {
            required: {
              value: true,
              message: 'password is required',
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                'Minimum eight characters, at least one letter and one number',
            },
            // minLength: {
            //   value: 3,
            //   message: 'password atleast have 6 character with alphanumeric',
            // },
            // maxLength: {
            //   value: 10,
            //   message: 'password not execd 10 characters ',
            // },
          })}
        />
        <small>{errors.password && errors.password.message}</small>
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

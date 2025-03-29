import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/constant";
import { useAuth } from "../hooks/useAuth";
import Header from "./Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}login`, {
        email,
        password,
      });
      login(response.data.token);
      navigate("/users");
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  return (
    <>
      <Header />
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <form
          onSubmit={handleSubmit}
          className='bg-white p-8 rounded shadow-md w-full max-w-sm'
        >
          <h2 className='text-2xl mb-4 font-bold text-center'>Login</h2>
          {error && <p className='text-red-500 text-center mb-2'>{error}</p>}
          <input
            type='email'
            placeholder='Email'
            className='w-full mb-2 p-2 border rounded'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='w-full mb-4 p-2 border rounded'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className='bg-fuchsia-400 w-full text-white py-2 rounded hover:bg-fuchsia-600'>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

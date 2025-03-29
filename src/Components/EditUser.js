import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import updateUser from "../utils/update";

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedUser = {
      first_name: firstName,
      last_name: lastName,
      email,
    };

    try {
      await updateUser(user.id, updatedUser, () => navigate("/users"));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleUpdate}
        className='bg-white p-6 rounded shadow-md w-full max-w-sm'
      >
        <h2 className='text-xl font-bold mb-4'>Edit User</h2>
        <label className='text-sm text-gray-600 mb-2'>First Name</label>

        <input
          type='text'
          placeholder='First Name'
          className='w-full mb-2 p-2 border rounded'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label className='text-sm text-gray-600 mb-2'>Last Name</label>

        <input
          type='text'
          placeholder='Last Name'
          className='w-full mb-2 p-2 border rounded'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label className='text-sm text-gray-600 mb-2'>Email</label>
        <input
          type='email'
          placeholder='Email'
          className='w-full mb-4 p-2 border rounded'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className='bg-fuchsia-400 w-full text-white py-2 rounded hover:bg-fuchsia-600'>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;

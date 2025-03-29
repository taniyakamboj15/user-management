// src/components/UserCard.js

import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className='bg-white shadow rounded p-4 flex flex-col items-center '>
      <img
        src={user.avatar}
        alt={user.first_name}
        className='rounded-full w-24 mb-2'
      />
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <p>{user.email}</p>
      <div className='mt-2 flex gap-2'>
        <button
          onClick={() => navigate(`/edit/${user.id}`, { state: user })}
          className='px-4 py-1 bg-fuchsia-400 text-white rounded hover:bg-fuchsia-700 hover:cursor-pointer active:scale-95'
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className='px-4 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600 hover:cursor-pointer active:scale-95'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;

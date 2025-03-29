import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constant";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import Swal from "sweetalert2";
import Shimmer from "./Shimmer";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const usersPerPage = 6;

  const fetchUsersByPage = async (page) => {
    try {
      const response = await axios.get(`${BASE_URL}users?page=${page}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch users.",
      });
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}users?page=1&per_page=100`);
      return response.data.data;
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch all users.",
      });
      return [];
    }
  };

  useEffect(() => {
    if (!isSearching) fetchUsersByPage(page);
  }, [page, isSearching]);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setFilteredUsers([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const users = allUsers.length ? allUsers : await fetchAllUsers();
    if (allUsers.length === 0) setAllUsers(users);

    const filtered = users.filter((user) =>
      `${user.first_name} ${user.last_name} ${user.email}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    setFilteredUsers(filtered);
    setPage(1);
    setTotalPages(Math.ceil(filtered.length / usersPerPage));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}users/${id}`);
      if (isSearching) {
        const updatedFiltered = filteredUsers.filter((user) => user.id !== id);
        setFilteredUsers(updatedFiltered);
      } else {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
      }
      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "User deleted successfully.",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete user.",
      });
    }
  };

  const displayedUsers = isSearching
    ? filteredUsers.slice((page - 1) * usersPerPage, page * usersPerPage)
    : users;
  if (users.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4 font-serif text-slate-700'>
        Users
      </h1>
      <SearchBar onSearch={handleSearch} />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {displayedUsers.map((user) => (
          <UserCard key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </div>
      {!isSearching && (
        <div className='flex justify-center mt-4 gap-2'>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${
                page === i + 1 ? "bg-cyan-600 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;

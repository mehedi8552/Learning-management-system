import React, { useEffect, useState } from 'react';

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users
    fetch('/viewAllUsers', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">View All Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name} ({user.email}) - {user.role}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default ViewAllUsers;

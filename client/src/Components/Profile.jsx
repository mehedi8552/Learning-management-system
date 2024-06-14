import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  console.log(profile);
  useEffect(() => {
    // Fetch user profile data
    fetch('http://localhost:3000/viewProfile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => setProfile(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      {profile ? (
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Role:</strong> {profile.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

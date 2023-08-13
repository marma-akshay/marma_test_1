import React from 'react';

function Profile() {
  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      <div className="profile-details">
        <h2>Account Information</h2>
        <p>Username: JohnDoe</p>
        <p>Email: john.doe@example.com</p>
        {/* Add more user details */}
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
        {/* Add more actions */}
      </div>
      {/* Add more sections for preferences, subscriptions, etc. */}
    </div>
  );
}

export default Profile;

import UserProfileForm from "./UserProfileForm";
import React, { useState } from "react";
import './styles.scss'

const UserProfile = () => {
  const [editMode, setEditmode] = useState(false);
  const changeToFalse = () => {
    setEditMode(false)
  } 
  return (
    <div className="user-profile-container">
    <UserProfileForm changeToFalse={changeToFalse} />
    </div>
  )
};

export default UserProfile;

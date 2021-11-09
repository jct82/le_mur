import UserProfileForm from "./UserProfileForm";
import React, { useState } from "react";
import './styles.scss'
import { submitUserLogin } from "../../actions/users";

const UserProfile = () => {

  const [isSubmitted, setIsSubmitted] = useState(false)
  function submitUserProfileForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="user-profile-container">
    {!isSubmitted}
      <UserProfileForm />
    </div>
  )
};

export default UserProfile;

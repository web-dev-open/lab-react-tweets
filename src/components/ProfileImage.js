import React from "react";

function ProfileImage(props) {
  return (
    <>
      <img src={props.profileImage} className="profile" alt="profile" />
    </>
  );
}

export default ProfileImage;

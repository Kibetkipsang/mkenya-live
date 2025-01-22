import React from 'react'

const ProfileHeading = ({ profilePicture, name, bio, isFollowing, followClick }) => {
    return(
        <div className="profile-heading">
        <img src={profilePicture} alt={name} className="profile-picture" />
        <h2>{name}</h2>
        <p>{bio}</p>
        <button onClick={followClick}>{isFollowing ? "Unfollow" : "Follow"}</button>
        </div>
    )
}

export default ProfileHeading;
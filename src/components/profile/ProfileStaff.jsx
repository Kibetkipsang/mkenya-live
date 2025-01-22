import React from 'react'

const ProfileStaff = ({postCount, followerCount, followingCount}) => {
    return(
        <div className="profileStaff">
        <div>
        {postCount} Posts
        </div>
        <div>
        {followerCount} Followers
        </div>
        <div>
        {followingCount} Following
        </div>
        </div>
    )
}
export default ProfileStaff;
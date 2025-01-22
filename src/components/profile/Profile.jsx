import React from 'react'
import ProfileHeading from './ProfileHeading'
import ProfileStaff from './ProfileStaff'
import ProfilePosts from './ProfilePosts'

const Profile = ( {user} ) => {

    const handleClick = () => {
        alert(`You ${user.isFollowing ? "unfollowed" : "followed"} ${user.name}`)
    }
    return(
        <div className="profile">
            <ProfileHeading 
            profilePicture={user.profilePicture}
            name={user.name}
            bio={user.bio}
            isFollowing={user.isFollowing}
            onFollowClick={handleClick}
            />
            <ProfileStaff 
            postCount={user.postCount}
            followerCount={user.followerCount}
            followingCount={user.followingCount}
            />
            <ProfilePosts posts={user.posts} onPostClick={(postId) => alert(`You clicked ${postId}`)} />
        </div>
    )
}

export default Profile;
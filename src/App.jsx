import React, { useState, useEffect } from "react";
import Profile from "./components/profile/Profile.jsx";
import Notifications from "./components/notifications/Notifications.jsx";
import Newsfeed from "./components/newsfeed/NewsFeed.jsx";
import Comments from "./components/comments/comments.jsx";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://randomuser.me/api/"),
      fetch("https://randomuser.me/api/?results=5"),
      fetch("https://randomuser.me/api/?results=3"),
      fetch("https://randomuser.me/api/?results=4"),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then(([userData, postsData, notificationsData, commentsData]) => {
        const randomUser = userData.results[0];
        setUser({
          profilePicture: randomUser.picture.large,
          name: `${randomUser.name.first} ${randomUser.name.last}`,
          bio: "Farmer specialised in flowers",
          isFollowing: false,
          postCount: Math.floor(Math.random() * 100),
          followerCount: Math.floor(Math.random() * 1000),
          followingCount: Math.floor(Math.random() * 500),
          posts: [],
        });

        const randomPosts = postsData.results.map((user, index) => ({
          id: index + 1,
          author: `${user.name.first} ${user.name.last}`,
          content: `Hello, my name is ${user.name.first}!`,
          likes: Math.floor(Math.random() * 100),
          comments: Math.floor(Math.random() * 50),
          timestamp: `${Math.floor(Math.random() * 24)} hours ago`,
        }));
        setPosts(randomPosts);

        const randomNotifications = notificationsData.results.map((user, index) => ({
          id: index + 1,
          type: ["like", "comment", "follow"][Math.floor(Math.random() * 3)],
          sender: `${user.name.first} ${user.name.last}`,
          timestamp: `${Math.floor(Math.random() * 24)} hours ago`,
          isRead: Math.random() > 0.5,
        }));
        setNotifications(randomNotifications);

        const randomComments = commentsData.results.map((user, index) => ({
          id: index + 1,
          author: `${user.name.first} ${user.name.last}`,
          content: `Great post, ${user.name.first}!`,
          timestamp: `${Math.floor(Math.random() * 24)} hours ago`,
        }));
        setComments(randomComments);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
     
      <div className="component-box">
        <Profile user={user} />
      </div>
      <div className="component-box">
        <Notifications notifications={notifications} />
      </div>
      <div className="component-box">
        <Newsfeed posts={posts} />
      </div>
      <div className="component-box">
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default App;
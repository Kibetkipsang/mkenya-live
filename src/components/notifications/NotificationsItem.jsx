import React from 'react';

const NotificationItem = ({ type, sender, time, isRead, onClick }) => {
  return (
    <div
      className={`notification-item ${isRead ? "" : "unread"}`}
      onClick={onClick}
    >
      <strong>{sender}</strong> {type} your post. <small>{time}</small>
    </div>
  );
};

export default NotificationItem;
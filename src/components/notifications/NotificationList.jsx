import React from 'react'
import NotificationItem from './NotificationsItem';

const NotificationList = ({ notifications, onMarkAllAsRead }) => {
    return(
        <div className= "notification-list">
         <button onClick={onMarkAllAsRead}>Mark All As Read</button>
         {notifications.map((notification) => (<NotificationItem key={notification.id} {...notification} />))}
        </div>
    )
}

export default NotificationList;
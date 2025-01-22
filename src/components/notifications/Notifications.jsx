import React  from 'react'
import NotificationList from "./NotificationList"

const Notifications = ({ notifications }) => {
    
const handleMarkAllAsRead =()=>{
alert('All notifications read!')
}

    return(
        <div className="notifications">
            <h2>Notifications</h2>
            <NotificationList notifications={notifications} onMarkAllAsRead={handleMarkAllAsRead}/>
        </div>
    )
}

export default Notifications;
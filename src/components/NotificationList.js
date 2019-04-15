import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import {toJS} from 'mobx';
import Notification from './Notification';

export default inject('store')(
observer (
class NotificationList extends Component {


    async componentDidMount(){

       await this.props.store.fetchNotifications()
    }

    
    getNotifications = () => {
      const notifications =  toJS(this.props.store.filteredNotification)
     return  notifications.map((notfication,index) => <Notification key={index} notification ={notfication}/>)
        
    }

    render(){
        return(
        <div className="content-container">
        <div className="list-body">
        {
            this.props.store.filteredNotificationCount === 0 &&
            <div className="list-item list-item--message">
            <span>No notifications</span>
          </div> 
        }
      {this.props.store.filteredNotificationCount > 0 && this.getNotifications()}
        </div>
       </div>
    );
    }
}))

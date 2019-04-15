import React, { Component } from 'react';

export default class Notification extends Component {

    render(){
        const {date,information,color} = this.props.notification;
          
        return (
            <div className="list-item" style={{'borderLeftColor': color}} >
           <p className="list-item__title">{date}</p>
           <p className="list-item__sub-title">{information}</p>
        </div>
        )
 
    }

}
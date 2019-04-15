import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

export default inject('store')(
observer (
class NotificationListFilters extends Component {

    onTextChange = (e) => {
        this.props.store.setSearchFilter(e.target.value)
      };

      onCheckedChange = (e) => {
        this.props.store.setOnlyActive(e.target.checked)
      };

    render() {
        return (
          <div className="content-container">
            <div className="input-group">
              <div className="input-group__item">
              <input
              type="text"
              placeholder="Search Notifications"
              value={this.props.store.searchFilter}
              onChange={this.onTextChange}
            />
            </div>
            <div className="input-group__item">
            <label >
            <input
            checked={this.props.store.onlyActive}
            onChange={this.onCheckedChange}
              type="checkbox"/>
              Show only active
          </label>
            </div>
            </div>
            </div>)
        }
}))
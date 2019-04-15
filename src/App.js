import React, { Component } from 'react';
import NotificationStore from './NotificationStore'
import { Provider} from 'mobx-react';
import NotificationListHeader from './components/NotificationListHeader';
import NotificationListFilters from './components/NotificationListFilters';
import NotificationList from './components/NotificationList';


import './styles/styles.scss';

class App extends Component {

   store = new NotificationStore();


  render() {
    return (
      <Provider store={this.store}>
       <div>
       <NotificationListHeader/>
       <NotificationListFilters/>
       <NotificationList/>
      </div>
      </Provider>
    );
  }
}

export default App;

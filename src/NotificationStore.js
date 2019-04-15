import {
    flow,
    decorate,
    observable,
    computed,
    action,
    configure
} from "mobx"


// don't allow state modifications outside actions
configure({
    enforceActions: "observed"
});


export default class NotificationStore {
    notifications = []
    state = "pending"
    onlyActive = false
    searchFilter = ''

   

    fetchNotifications = flow(function* () {

        console.log('in fetch proj')
        this.notifications = []
        this.state = "pending"
        try {
            const projects = yield this.fetchnotificationsSomehow()

            this.state = "done"
            this.notifications = projects.notifications
        } catch (error) {
            this.state = "error"
        }
    })

    fetchnotificationsSomehow = async () => {
        const res = await fetch('/api/v1/getNotifications');

        return await res.json();
    }

    setOnlyActive(isOnlyActive){
        this.onlyActive = isOnlyActive;
    }

    setSearchFilter(searchTerm){
        this.searchFilter = searchTerm;
    }


    get filteredNotification() {
    
        return this.notifications.filter((notification) => ((!this.onlyActive || notification.active === this.onlyActive)) &&
        notification.information.toLowerCase().includes(this.searchFilter.toLowerCase()))

    }
    
    get filteredNotificationCount() {
          
        return this.filteredNotification.length
      
    } 
}

decorate(NotificationStore, {
    notifications: observable,
    state: observable,
    onlyActive: observable,
    searchFilter: observable,
    setOnlyActive : action,
    setSearchFilter : action,
    filteredNotification: computed,
    filteredNotificationCount : computed
})
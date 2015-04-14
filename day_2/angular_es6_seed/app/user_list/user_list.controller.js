class UserListController {

  constructor() {
  }

  onClick(user) {
    console.log("on user clicked", user)
  }
}

UserListController.$inject = [];

export default UserListController;
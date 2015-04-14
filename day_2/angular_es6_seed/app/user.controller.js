class UserController {
  constructor(UserService) {
    this.UserService = UserService;
    this.loading = true;
    this.init();
  }

  init() {
    this.UserService.getUsers().then(users => {
      this.users = users;
      this.loading = false;
    });
  }
}

UserController.$inject = ['UserService'];

export default UserController;
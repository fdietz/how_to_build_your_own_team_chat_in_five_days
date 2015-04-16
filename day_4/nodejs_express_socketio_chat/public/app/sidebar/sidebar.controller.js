import Auth from "../auth";

class SidebarController {

  constructor() {
  }

  currentUser() {
    return Auth.getCurrentUser();
  }
}

SidebarController.$inject = [];

export default SidebarController;

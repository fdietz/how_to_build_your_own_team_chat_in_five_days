import './vendor';

import UserController from './user.controller';
import UserService from './user.service';

import userListModule from './user_list/user_list.module';

let mainModule = angular.module('mainApp', [userListModule.name])
  .controller(UserController.name, UserController)
  .service(UserService.name, UserService);

export default mainModule;
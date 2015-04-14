import userListDirective from './user_list.directive';
import ReverseNameService from "./reverse_name.service";

export default angular.module('userList', [])
  .directive('userList', userListDirective)
  .service(ReverseNameService.name, ReverseNameService);
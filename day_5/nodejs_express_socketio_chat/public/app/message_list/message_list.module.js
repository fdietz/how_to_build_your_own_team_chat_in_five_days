import messageListDirective from './message_list.directive';
import relativeDateFilter from './relative_date.filter';

export default angular.module('MessageList', [])
  .directive('messageList', messageListDirective)
  .filter('relativeDate', relativeDateFilter);

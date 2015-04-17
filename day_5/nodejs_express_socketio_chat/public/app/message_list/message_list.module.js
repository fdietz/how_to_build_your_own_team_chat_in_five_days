import messageListDirective from './message_list.directive';

export default angular.module('MessageList', [])
  .directive('messageList', messageListDirective);

import messageListDirective from './message_list.directive';
import relativeDateFilter from './relative_date.filter';
import formattedMessageDirective from "./formatted_message.directive";

export default angular.module('MessageList', [])
  .directive('messageList', messageListDirective)
  .directive('formattedMessage', formattedMessageDirective)
  .filter('relativeDate', relativeDateFilter);

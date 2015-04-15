import messageFormDirective from './message_form.directive';
import submitFormOnReturnDirective from './submit_form_on_return.directive';

export default angular.module('MessageForm', [])
  .directive('messageForm', messageFormDirective)
  .directive('submitFormOnReturn', submitFormOnReturnDirective);

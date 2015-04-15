import template from "./message_list.html!text";
import MessageListController from "./message_list.controller";

function messageListDirective() {
  return {
    restrict: "E",
    replace: true,
    template: template,
    scope: true,
    bindToController: true,
    controllerAs: "ctrl",
    controller: MessageListController
  };
}

messageListDirective.$inject = [];

export default messageListDirective;

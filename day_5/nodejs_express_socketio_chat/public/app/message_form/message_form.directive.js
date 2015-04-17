import template from "./message_form.html!text";
import MessageFormController from "./message_form.controller";

function messageFormDirective() {
  return {
    restrict: "E",
    replace: true,
    scope: {},
    template: template,
    bindToController: true,
    controllerAs: "ctrl",
    controller: MessageFormController
  };
}

messageFormDirective.$inject = [];

export default messageFormDirective;

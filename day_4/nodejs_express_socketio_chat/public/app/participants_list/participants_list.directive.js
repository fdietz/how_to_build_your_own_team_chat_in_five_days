import template from "./participants_list.html!text";
import ParticipantsListController from "./participants_list.controller";

function paticipantsListDirective() {
  return {
    restrict: "E",
    replace: true,
    template: template,
    scope: true,
    bindToController: true,
    controllerAs: "ctrl",
    controller: ParticipantsListController
  };
}

paticipantsListDirective.$inject = [];

export default paticipantsListDirective;

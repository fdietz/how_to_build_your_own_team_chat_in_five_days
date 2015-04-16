import template from "./sidebar.html!text";
import SidebarController from "./sidebar.controller";

function sidebarDirective() {
  return {
    restrict: "E",
    replace: true,
    scope: true,
    template: template,
    bindToController: true,
    controllerAs: "ctrl",
    controller: SidebarController
  };
}

sidebarDirective.$inject = [];

export default sidebarDirective;

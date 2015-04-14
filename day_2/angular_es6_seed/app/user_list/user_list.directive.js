import template from "./user_list_directive.html!text";
import UserListController from "./user_list.controller";

function userListDirective(ReverseNameService) {
  return {
    restrict: "E",
    scope: {
      users: "="
    },
    template: template,
    bindToController: true,
    controllerAs: "ctrl",
    controller: UserListController,
    link: function($scope, element) {
      element.on("mouseover", "li", function(event) {
        let name = $(event.currentTarget).find(".primary").text();
        let reverseName = ReverseNameService.reverse(name);

        console.log("hover... ", name, "reverse", reverseName);
      });
    }
  };
}

userListDirective.$inject = ["ReverseNameService"];

export default userListDirective;
import template from "./avatar.html!text";

function avatarDirective() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      user: "="
    },
    template: template,
  };
}

avatarDirective.$inject = [];

export default avatarDirective;

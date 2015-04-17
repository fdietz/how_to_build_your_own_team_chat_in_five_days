import _ from "underscore";
import template from "./message_list.html!text";
import MessageListController from "./message_list.controller";

/**
* We use MutationObserver which listens on child node add/remove changes
* to scroll to the bottom of the list if new messages are added.
*
* Additionally, if the user scrolled to a differend position of the list
* we won't scroll to the bottom.
**/
function messageListDirective() {
  return {
    restrict: "E",
    replace: true,
    template: template,
    scope: {},
    bindToController: true,
    controllerAs: "ctrl",
    controller: MessageListController,
    link: function($scope, element) {

      var alreadyAtBottom = true;

      function scrollToBottom() {
        if (alreadyAtBottom) {
          element.scrollTop(element.prop("scrollHeight"));
        }
      }

      function isAtBottom() {
        var scrollTop = element.scrollTop();
        var maxHeight = element.prop("scrollHeight") - element.prop("clientHeight");

        return scrollTop >= maxHeight;
      }

      // https://developer.mozilla.org/en/docs/Web/API/MutationObserver
      var observer = new window.MutationObserver(scrollToBottom);

      observer.observe(element[0], { childList: true });

      var throttledOnScrollHandler = _.throttle(function() {
        alreadyAtBottom = isAtBottom();
      }, 250);

      element.on("scroll", throttledOnScrollHandler);

      $scope.$on("$destroy", () => {
        element.off("scroll", throttledOnScrollHandler);
        observer.disconnect();
      });
    }
  };
}

messageListDirective.$inject = [];

export default messageListDirective;

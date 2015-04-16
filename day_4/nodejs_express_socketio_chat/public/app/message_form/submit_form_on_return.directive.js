function submitFormOnReturn() {
  var RETURN_KEY = 13;

  function shouldHandleKeydownEvent(event) {
    return event.keyCode === RETURN_KEY && !event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey;
  }

  return {
    restrict: "A",
    link: function($scope, element) {
      element.on("keydown", function(event) {
        if (shouldHandleKeydownEvent(event)) {
          element.closest("form").triggerHandler("submit");
          return false;
        }
      });
    }
  };
}

submitFormOnReturn.$inject = [];

export default submitFormOnReturn;

import FormatMessageService from "./format_message.service";

function formattedMessage() {
  return {
    restrict: "A",
    scope: {
      "formattedMessage" : "="
    },
    link: function($scope, element, attrs) {
      var unwatch = $scope.$watch("formattedMessage", function(str) {
        if (str) {
          str = FormatMessageService.breakNewLine(str);
          str = FormatMessageService.autoLink(str);
          element.html(str);

          unwatch();
        }
      });
    }
  };
}

formattedMessage.$inject = [];

export default formattedMessage;

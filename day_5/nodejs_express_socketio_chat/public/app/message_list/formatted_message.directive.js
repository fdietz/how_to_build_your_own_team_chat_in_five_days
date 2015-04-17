import FormatMessageService from "./format_message.service";

function formattedMessage() {
  return {
    restrict: "A",
    scope: {
      "formattedMessage" : "="
    },
    link: function($scope, element, attrs) {
      $scope.$watch("formattedMessage", function(str) {
        if (str) {
          str = FormatMessageService.breakNewLine(str);
          console.log('str', str)
          str = FormatMessageService.autoLink(str);
          console.log('str autolink', str)
          element.html(str);
        }
      });
    }
  };
}

formattedMessage.$inject = [];

export default formattedMessage;

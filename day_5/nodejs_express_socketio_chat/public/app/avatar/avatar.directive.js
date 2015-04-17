import template from "./avatar.html!text";

function avatarDirective() {
  let colorMapping = {};

  return {
    restrict: "E",
    replace: true,
    scope: {
      user: "="
    },
    template: template,
    link: function($scope) {

      // http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
      function randomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      var unwatch = $scope.$watch("user", function(user) {
        console.log("user", user)

        if (user) {
          $scope.initials = (user.name[0] || "A");

          if (!colorMapping[user.id]) colorMapping[user.id] = randomColor();
          $scope.color    = colorMapping[user.id];

          unwatch();
        }
      });
    }
  };
}

avatarDirective.$inject = [];

export default avatarDirective;

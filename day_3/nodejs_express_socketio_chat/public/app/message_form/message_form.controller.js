import Auth from "../auth";

class MessageFormController {

  constructor($http) {
    this.$http = $http;
  }

  sendMessage(message) {
    let params = { message: message, name: Auth.getCurrentUser().name, created_at: new Date().toISOString() };

    this.$http.post("/message", params ).then(() => {
    }, (reason) => {
      console.log("error", reason)
    }).finally( () => {
      this.message = "";
    });
  }

}

MessageFormController.$inject = ["$http"];

export default MessageFormController;
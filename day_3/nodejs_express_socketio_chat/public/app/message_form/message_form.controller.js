import Auth from "../auth";

class MessageFormController {

  constructor($http) {
    this.$http = $http;
  }

  sendMessage(message) {
    let params = {
      message: message,
      created_at: new Date().toISOString(),
      user: {
        name: Auth.getCurrentUser().name
      }
    };

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
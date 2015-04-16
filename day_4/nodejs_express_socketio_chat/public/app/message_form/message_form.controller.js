import Auth from "../auth";

class MessageFormController {

  constructor($http) {
    this.$http = $http;
  }

  sendMessage(message) {
    let params = {
      message:    message,
      created_at: new Date().toISOString(),
      user_id:    Auth.getCurrentUser().id
    };

    this.$http.post("/messages", params).then(
      () => {
        this.message = "";
      },
      (reason) => {
        console.log("error", reason);
      }
    );

  }

}

MessageFormController.$inject = ["$http"];

export default MessageFormController;
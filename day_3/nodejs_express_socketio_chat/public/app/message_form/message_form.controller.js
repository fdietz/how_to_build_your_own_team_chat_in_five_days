class MessageFormController {

  constructor($http) {
    this.$http = $http;
  }

  sendMessage(message) {
    let params = { message: message, name: "Guest", created_at: new Date().toISOString() };

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
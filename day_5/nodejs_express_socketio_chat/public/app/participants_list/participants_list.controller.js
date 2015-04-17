class ParticipantsListController {

  constructor(WebSocket) {
    this.participants = [];
    this.WebSocket = WebSocket;

    this.register();
  }

  register() {
    this.WebSocket.on('new_connection', (data) => {
      this.handleNewConnection(data.participants);
    });
  }

  handleNewConnection(participants) {
    this.participants = participants;
  }

}

ParticipantsListController.$inject = ["WebSocket"];

export default ParticipantsListController;
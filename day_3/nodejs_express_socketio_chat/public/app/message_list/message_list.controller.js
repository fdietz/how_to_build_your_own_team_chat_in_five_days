class MessageListController {

  constructor(WebSocket) {
    this.messages = [];
    this.WebSocket = WebSocket;

    this.register();
  }

  register() {
    this.WebSocket.on('incoming_message', (data) => {
      this.handleNewMessage(data);
    });

    this.WebSocket.on('new_connection', (data) => {
      this.handleNewConnection(data);
    });

    this.WebSocket.on('user_disconnected', (data) => {
      this.handleUserDisconnected(data);
    });
  }

  handleNewMessage(data) {
    this.messages.push({ message: data.message, name: data.name, created_at: data.created_at, type: "message" });
  }

  handleUserDisconnected(data) {
    this.messages.push({ message: `User ${data.name} disconnected`, name: "System", created_at: data.created_at, type: "notification" });
  }

  handleNewConnection(data) {
    this.messages.push({ message: `User ${data.name} joined`, name: "System", created_at: data.created_at, type: "notification" });
  }

}

MessageListController.$inject = ["WebSocket"];

export default MessageListController;

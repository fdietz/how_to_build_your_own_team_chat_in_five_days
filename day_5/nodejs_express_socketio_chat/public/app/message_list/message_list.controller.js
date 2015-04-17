import Auth from "../auth";

class MessageListController {

  constructor(WebSocket) {
    this.messages = [];

    this.WebSocket = WebSocket;

    this.register();
  }

  register() {
    this.WebSocket.on('incoming_message', (data) => {
      this.handleIncomingMessage(data);
    });

    this.WebSocket.on('new_connection', (data) => {
      this.handleNewConnection(data);
    });

    this.WebSocket.on('user_disconnected', (data) => {
      this.handleUserDisconnected(data);
    });
  }

  handleIncomingMessage(data) {
    this.messages.push({ message: data.message, user: data.user, created_at: data.created_at, type: "message" });
  }

  handleUserDisconnected(data) {
    this.messages.push({ message: `User ${data.user.name} disconnected`, name: "System", created_at: data.created_at, type: "notification" });
  }

  handleNewConnection(data) {
    if (Auth.getCurrentUser()) {
      this.messages.push({ message: `User ${data.user.name} joined`, name: "System", created_at: data.created_at, type: "notification" });
    } else {
      this.messages = data.messages;
    }
  }

}

MessageListController.$inject = ["WebSocket"];

export default MessageListController;

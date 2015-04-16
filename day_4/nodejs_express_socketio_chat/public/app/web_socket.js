import Auth from "./auth";

export default class WebSocket {

  constructor($rootScope) {
    this.$rootScope = $rootScope;
    this.init();
  }

  init() {
    let host = window.location.origin;
    console.log("WEBSOCKET connecting to", host);

    this.socket = io.connect(host);

    this.socket.on('connect', () => {
      let sessionId = this.socket.io.engine.id;

      console.log("WEBSOCKET connected with session id", sessionId);

      this.socket.emit('new_user', { id: sessionId });

      this.socket.on('new_connection', (data) => {
        if (data.user.id === sessionId) {
          this.$rootScope.$apply(() => {
            Auth.setCurrentUser(data.user);
          });
        }
      });
    });

    this.socket.on('error', (error) => {
      console.log("WEBSOCKET - error", error)
    });
  }

  on(key, callback) {
    this.socket.on(key, (data) => {
      console.log("on", key, data)
      this.$rootScope.$apply(() => {
        callback(data)
      });
    });
  }
}

WebSocket.$inject = ['$rootScope'];
import './vendor';

import WebSocket from './web_socket';

import MessageListModule from './message_list/message_list.module';
import MessageFormModule from './message_form/message_form.module';
import ParticipantsListModule from './participants_list/participants_list.module';
import SidebarModule from './sidebar/sidebar.module';

let mainModule = angular.module('mainApp', [
    MessageListModule.name,
    MessageFormModule.name,
    ParticipantsListModule.name,
    SidebarModule.name
  ]).service(WebSocket.name, WebSocket);

export default mainModule;
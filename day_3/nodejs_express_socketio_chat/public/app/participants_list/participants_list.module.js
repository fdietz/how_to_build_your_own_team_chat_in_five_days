import participantsListDirective from './participants_list.directive';

export default angular.module('ParticipantsList', [])
  .directive('participantsList', participantsListDirective);

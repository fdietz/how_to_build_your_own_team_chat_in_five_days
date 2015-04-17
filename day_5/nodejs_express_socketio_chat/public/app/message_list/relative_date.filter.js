import moment from "moment";

export default function relativeDateFilter() {
  return function(dateString) {
    return moment(dateString).fromNow();
  };
};

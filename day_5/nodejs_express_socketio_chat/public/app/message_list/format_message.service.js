import Autolinker from "autolinker";

export default class FormatMessageService {

  static breakNewLine(str) {
    return str.replace(/(\r|\n)/g, '<br>');
  }

  static autoLink(str) {
    return Autolinker.link(str, {
      newWindow: true,
      className: "auto-link",
      twitter: false,
      hashtag: false
    });
  }

}
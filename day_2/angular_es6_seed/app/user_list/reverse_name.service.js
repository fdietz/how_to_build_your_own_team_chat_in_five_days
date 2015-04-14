class ReverseNameService {

  constructor() {}

  reverse(str) {
    return str.split("").reverse().join("");
  }
}

ReverseNameService.$inject = [];

export default ReverseNameService;
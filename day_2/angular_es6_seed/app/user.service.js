class UserService {

  constructor($http) {
    this.$http = $http;
  }

  getUsers() {
    return this.$http.get('https://api.github.com/users').then(r => r.data);
  }

};

UserService.$inject = ['$http'];

export default UserService;

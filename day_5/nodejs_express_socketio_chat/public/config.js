System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.15",
    "babel": "npm:babel-core@5.1.9",
    "babel-runtime": "npm:babel-runtime@5.1.9",
    "core-js": "npm:core-js@0.8.3",
    "jquery": "github:components/jquery@2.1.3",
    "moment": "github:moment/moment@2.10.2",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.8.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});


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
    "autolinker": "npm:autolinker@0.17.1",
    "babel": "npm:babel-core@5.1.9",
    "babel-runtime": "npm:babel-runtime@5.1.9",
    "core-js": "npm:core-js@0.8.3",
    "jquery": "github:components/jquery@2.1.3",
    "moment": "github:moment/moment@2.10.2",
    "text": "github:systemjs/plugin-text@0.0.2",
    "underscore": "npm:underscore@1.8.3",
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.1.2"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:autolinker@0.17.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.1.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@0.8.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});


'use strict';

const path = require('path');

module.exports = app => {
  loadModel(app);
};
function loadModel(app) {
  const modelPaths = app.loader.getLoadUnits().map(unit => {
    return path.join(unit.path, 'app/model');
  });
  app.loader.loadToContext(modelPaths, 'model', {
    call: true,
    fieldClass: 'modelClasses',
  });
}
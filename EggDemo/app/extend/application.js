'use strict';
class Model {
  parse(data) {
    if (!data) return null
    else return JSON.stringify(data);
  }
}
module.exports = {
  Model,
};
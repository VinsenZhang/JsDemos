'use strict';

module.exports = {
  json(code, data, status = 200) {
    const json = data ? { data } : {};
    Object.assign(json, code);
    this.response.status = status;
    this.response.body = json;
  },
};
'use strict';

module.exports = app =>{
  class UserModel extends app.Model{
    async getList() {
      const result = await app.mysql.select('user');
      return this.parse(result)
    }
  }
  return UserModel;
};
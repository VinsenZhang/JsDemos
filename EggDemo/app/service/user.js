'use strict';

module.exports = app => {
  class UserService extends app.Service {
    async getList() {
      const users = await this.ctx.model.user.getList();
      console.log(users);
      if (users && users.length !== 0) {
        return { data: users }
      }
    }
  }
  return UserService;
};
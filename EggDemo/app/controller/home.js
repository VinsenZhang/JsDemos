'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      this.ctx.body = await this.ctx.service.user.getList();
    }
  }
  return HomeController;
};

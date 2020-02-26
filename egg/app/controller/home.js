'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'music';
  }
  async deatil() {
    const { ctx } = this;
    ctx.body = 'detail';
  }
}

module.exports = HomeController;

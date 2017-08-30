'use strict';
import db from '../utils/db_utils'

class IndexController {
  async index(){
    const users = await db.query('select * from user');
    return JSON.stringify(users);
  }
}

export default new IndexController;

/**
 * Created by lyy on 2017/7/28.
 */
var User = require('../lib/mongo').User;

module.exports = {
    //注册一个用户
    create: function create(user) {
        return User.create(user).exec();
    }
};
/**
 * Created by lyy on 2017/7/27.
 */
module.exports = {
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            //req.flash显示未登录通知
            req.flash('error', '未登录');
            return res.redirect('/signin');
        }
        next();
    },
    checkNoLogin: function checkNoLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录');
            return res.redirect('back');    //返回之前的页面
        }
        next();
    }
};
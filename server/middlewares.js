export const localsMiddleware = (req, res, next) => {
    console.log(req);
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUser = req.session.user || {};
    console.log(req.session.user);
    next();
};
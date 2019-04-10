const check = require('../check-permission')

module.exports = (ctx, permissionSet) => {
    if (!permissionSet || permissionSet.length === 0) {
        return true;
    }

    if (!ctx.isAuthenticated()) {
        return false;
    }

    if (ctx.req.user.roles.includes("super")) {
        return true;
    }

    const callback = (perm) =>  perm === "user" || 
        (ctx.req.user.roles && ctx.req.user.roles.includes(perm));
    return  permissionSet.some(check(ctx, callback));        
}

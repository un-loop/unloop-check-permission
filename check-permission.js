module.exports = (ctx, callback) => perm =>
    typeof perm === "function" ?
        perm(ctx.req.user, ctx.request.body, ctx.params) :
        callback(perm);

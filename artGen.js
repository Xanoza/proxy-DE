exports.genRes = (context, events, done) => {
  context.vars['restaurant_id'] = Math.round(Math.random() * 9999999);
  return done();
}
module.exports = (app) => {
  app.setValue = app.set.bind(app);

  app.getValue = (path) => app.get(path);

  require("./app-constants")(app);
  app.use(app.getValue("log"));
  require("./static-middleware")(app);
  require("./parsing-middleware")(app);
  require("./cors-middleware")(app);
  require("./authentication-middleware")(app);
};

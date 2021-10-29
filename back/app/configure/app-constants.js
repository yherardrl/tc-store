const path = require("path");
const morgan = require("morgan");
const logMiddleware = morgan("tiny");

const rootPath = path.join(__dirname, "../../");
const indexPath = path.join(rootPath, "./public/index.html");

module.exports = (app) => {
  app.setValue("projectRoot", rootPath);
  app.setValue("indexHTMLPath", indexPath);
  app.setValue("log", logMiddleware);
};

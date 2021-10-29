const path = require("path");
const express = require("express");

module.exports = (app) => {
  const root = app.getValue("projectRoot");
  const publicPath = path.join(root, "./public");
  app.use(express.static(publicPath));
};

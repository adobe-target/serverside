const Component = require("../components/catalog").AB;
const render = require("../services/rendering-service");

module.exports = (req, res) => {
  const payload = {
    mbox: "z1-serverside-ab"
  };

  render(Component, payload, req, res);
};

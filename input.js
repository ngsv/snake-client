const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_DOWN_KEY, messages } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write(MOVE_UP_KEY);
  }
  if (key === 'a') {
    connection.write(MOVE_LEFT_KEY);
  }
  if (key === 's') {
    connection.write(MOVE_DOWN_KEY);
  }
  if (key === 'd') {
    connection.write(MOVE_RIGHT_KEY);
  }
  if (key === 'q') {
    connection.write(messages["q"]);
  }
  if (key === 'e') {
    connection.write(messages["e"]);
  }
};

handleUserInput();

module.exports = {
  setupInput
};

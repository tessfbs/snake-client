
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
}

const handleUserInput = (command) => {
  if(command === "\u0003" ){
    console.log("detected ctrl + c ")
    process.exit();
  }
  if(command === "\u0077" ){
    console.log("Move: up")
    connection.write("Move: up");
    }
  if(command === "\u0061" ){
    console.log("Move: left")
    connection.write("Move: left");
  }
  if(command === "\u0073" ){
    console.log("Move: down")
    connection.write("Move: down");
  }
  if(command === "\u0064" ){
    console.log("Move: right")
    connection.write("Move: right");
  }
};

module.exports = setupInput;
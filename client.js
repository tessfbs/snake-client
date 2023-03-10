const net = require("net");
const { IP, PORT } = require("./constants");
  
  const connect = ()  => {

    // establishes a connection with the game server
        //create a net.socket
    const conn = net.createConnection({
      host: IP,  // IP address from server,
      port: PORT // PORT number from server here,
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    //connecting and sending message
    conn.on("connect", () => {
      console.log("Successfully connected to game server");
      conn.write("Name: TS");
      
    });

  
    //Receiving data and console.log it for the player
    conn.on("data", (data) => {
      console.log("Server says:", data)
    })



    return conn;
  };

  module.exports = connect;
  



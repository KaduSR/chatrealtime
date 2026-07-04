const http = require("http"); const { Server } = require("socket.io");
const server = http.createServer((req, res) => { res.writeHead(200, {"Content-Type": "text/plain"}); res.end("ChatRealTime Server Running\n"); });
const io = new Server(server, { cors: { origin: "*" } });
io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);
  socket.on("message", (data) => { io.emit("message", { ...data, id: socket.id }); });
  socket.on("disconnect", () => console.log("Cliente saiu:", socket.id));
});
server.listen(3001, () => console.log("ChatRealTime rodando na porta 3001"));

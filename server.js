import { createServer } from "http"
import app from './src/index.js'


const server = createServer(app)

const PORT = 3030

server.listen(PORT, () => {
    console.log(`we are listening on port : http://localhost:${PORT/pets}`)
});

import express, { json } from "express";

const app = express()
app.use(json())

app.get("/pets", (req, res) => {
    res.send("All the pets I loved before!")
})
export default app;
/**-----------------------info-------------------
*
* The app.listen(..) method called was moved to server.js
* so that jest exists after a test run
*
//---------------------------------------------- **/

// const PORT = 3030
// app.listen(PORT, () => {
//     console.log(`We are listening on port: http://localhost${PORT}/pets`)
// })


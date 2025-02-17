import { AppRequest, AppResponse } from "./Src/Utils/type"

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:AppRequest, res:AppResponse) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
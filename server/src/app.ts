import express from 'express'
import blogRouter from './Routers/Blog'
import connect from "./DB/connect";
import cors from  'cors'
import {palindrome} from "./Routers/Test";



const app = express();
app.use(cors({origin: true}))

connect;
app.use(express.json()) //allows parsing incoming request to json
app.use(blogRouter)
const port  = process.env.PORT  || 5000;

app.listen(port, () => {
    console.log('listening on port ' + port)
})


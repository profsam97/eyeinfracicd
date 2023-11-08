import mongoose from "mongoose" 
const connect = mongoose;

connect.connect(process.env.MONGO_URL as string)

export default connect;
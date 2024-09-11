import mongoose from "mongoose";

const ConnectDb = () => {
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"KarnatakaGovt"
}).then(()=>console.log("Database Connected")).catch((e)=>console.log(e))
};
export default ConnectDb;
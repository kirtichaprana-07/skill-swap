
import mongoose from 'mongoose';

async function connectTOMongoDb(url){
    return mongoose.connect(url);
}

export default connectTOMongoDb;
// const mongo_url = process.env.MONGO_URI

// mongoose.connect(mongo_url)
//      .then(()=>{
//         console.log('MongoDb connected..')
//      }).catch((err)=>{
//         console.log("mongoDb connection error",err)
//      })

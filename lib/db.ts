import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_DB_URI


console.log("Mongo uri is ",MONGO_URI);

declare global {
    var mongooseCache:{
        conn:typeof mongoose | null,
        promise:Promise<typeof mongoose> | null
    }
}

let cached = global.mongooseCache;

if (!cached){
    cached = global.mongooseCache = {conn:null,promise:null}
}

export const connectToDatabase = async()=>{
    if(!MONGO_URI) throw new Error("MONGODB_URI must be set within .env")
    if(cached.conn) return cached.conn
    if(!cached.promise){
        cached.promise = mongoose.connect(MONGO_URI,{bufferCommands:false,serverSelectionTimeoutMS:2000})
    }
    try {
        cached.conn = await cached.promise
    } catch (error) {
        cached.promise = null;
        throw error
    }
    console.log(`connected to database ${process.env.NODE_ENV} ${MONGO_URI}`)
    return cached.conn!
}

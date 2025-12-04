import mongoose,{Schema,Document,Model} from "mongoose";

export interface IUser extends Document {
    name:string;
    email:string;
    password:string;
    role:"customer"|"admin";
    address?:{
        country?:string;
        city?:string;
        phone?:string;
        street?:string;
        postalCode?:string;
    }
    createdAt:Date;
    updatedAt:Date;
}

const UserSchema:Schema<IUser> = new Schema({

    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    role:{
        type:String,
        enum:["customer","admin"],
        default:"customer",
    },
    address:{
        country:{type:String},
        city:{type:String},
         phone: { type: String },
      street: { type: String },
      postalCode: { type: String },
    }

},{timestamps:true});

const User:Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User",UserSchema);
export default User;
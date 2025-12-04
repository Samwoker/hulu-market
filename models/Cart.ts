import {Schema,model,Document,Types} from "mongoose";

export interface ICart extends Document{
    userId:Types.ObjectId;
    productId:Types.ObjectId;
    quantity:number;
    selectedColor?:string;
    selectedSize?:string;
    addedAt:Date;
}

const cartSchema = new Schema<ICart>({
    userId:{
        type:Schema.Types.ObjectId,ref:"User",required:true,   
    },
    productId:{type:Schema.Types.ObjectId , ref:"Product",required:true},
    quantity:{type:Number,default:1},
    selectedColor:{type:String},
    selectedSize:{type:String}
},{
    timestamps:{createdAt:"addedAt",updatedAt:false}
})

const Cart = model<ICart>("Cart",cartSchema);

export default Cart;

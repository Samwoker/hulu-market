
import {Schema , model , Document ,Types} from "mongoose";

export interface IWishlist extends Document{
    userId:Types.ObjectId;
    productId:Types.ObjectId;
    createdAt:Date;
}

const wishlistSchema = new Schema<IWishlist>({
    userId:{type:Schema.Types.ObjectId,ref:"User",required:true},
    productId:{type:Schema.Types.ObjectId,ref:"Product",required:true}
},{
    timestamps:{createdAt:true,updatedAt:false}
})

const Wishlist = model<IWishlist>("Wishlist",wishlistSchema)
export default Wishlist;
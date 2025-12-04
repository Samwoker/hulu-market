
import {Schema,model,Document,Types} from "mongoose";

export interface ICompareItem extends Document{
    userId:Types.ObjectId;
    productId:Types.ObjectId;
    createdAt:Date;
}

const compareItemSchema = new Schema<ICompareItem>({
    userId:{type:Schema.Types.ObjectId,ref:"User",required:true},
    productId:{type:Schema.Types.ObjectId,ref:"Product",required:true}
},{
    timestamps:{createdAt:true,updatedAt:false}
})

const CompareItem= model<ICompareItem>("CompareItem",compareItemSchema)

export default CompareItem;

import {Schema , model , Types} from "mongoose";

export interface IProduct {
    title:string;
    description:string;
    price:number;
    oldPrice?:number;
    discountPercent?:number;
    stock:number;
    categoryId:Types.ObjectId;
    brandId:Types.ObjectId;
    images:string[];
    colors:string[];
    sizes:string[];
    isNew:boolean;
    isOnSale:boolean;
    createdAt:Date;
    updatedAt:Date;
}

const productSchema = new Schema<IProduct> ({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    oldPrice:{
        type:Number,
    },
    discountPercent:{
        type:Number,
    },
    stock:{
        type:Number,required:true
    },
    categoryId:{
        type:Schema.Types.ObjectId,ref:"Category"
    },
    brandId:{
        type:Schema.Types.ObjectId,ref:"Brand"
    },
    images:[{type:String}],
    colors:[{type:String}],
    sizes:[{type:String}],
    isNew:{type:Boolean,default:false},
    isOnSale:{type:Boolean,default:false}


},{
    timestamps:true
})
 const Product = model<IProduct>("Product",productSchema)
 export default Product;

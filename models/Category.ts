import { Schema, model, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  parentId?: string;
  createdAt: Date;
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    parentId: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);
const Category = model<ICategory>("Category", categorySchema);
export default Category;

import { EntitySchema } from 'typeorm';
import { Product } from '../product.entity';

export const ProductSchema = new EntitySchema<Product>({
  name: 'Product',
  target: Product,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    status: {
      type: "enum",
      enum: ["pendding", "active", "sold"],
      default: "pendding"
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  }
});
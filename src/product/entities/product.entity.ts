import { Column, PrimaryGeneratedColumn } from "typeorm";

export type StatusList = "pendding" | "active" | "sold";

export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: ["pendding", "active", "sold"],
        default: "pendding"
    })
    status: StatusList;

    @Column()
    name: string;
  
    @Column()
    description: string;

    @Column()
    price: string;
  
    @Column({ default: true })
    isActive: boolean;  
}

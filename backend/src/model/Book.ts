import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({nullable: true})
    author!: string;

    @Column({nullable: true})
    cover!: string

    @Column()
    publishedAt!: Date;

}
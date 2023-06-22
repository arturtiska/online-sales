import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity({ name: 'address' })
export class AddressEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;
    @Column({ name: 'user_id', nullable: false })
    userId: number;
    @Column({ name: 'complement', nullable: true })
    complement: number;
    @Column({ name: 'number', nullable: false })
    numberAddress: number;
    @Column({ name: 'cpf', nullable: false })
    cpf: string;
    @Column({ name: 'city_id', nullable: false })
    cityId: number;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
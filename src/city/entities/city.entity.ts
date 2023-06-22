import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity({ name: 'city' })
export class CityEntinty {
    @PrimaryGeneratedColumn('rowid')
    id: number;
    @Column({ name: 'state_id', nullable: false })
    stateId: number;
    @Column({ name: 'name', nullable: false })
    name: string;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}


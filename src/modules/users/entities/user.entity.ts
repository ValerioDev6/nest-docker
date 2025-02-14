import { Column, Entity, OneToMany } from 'typeorm';
import { UsersProjectsEntity } from './userProjects.entity';
import { BaseEntity } from '../../../config/base.entity';
import { IUser } from '../../../../dist/interfaces/user.interface';
import { ROLES } from '../../../constants/roles';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  age: number;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  username: string;
  @Column()
  passoword: string;
  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;

  @OneToMany(() => UsersProjectsEntity, (userProjects) => userProjects.project)
  projectsIncludes: UsersProjectsEntity[];
}

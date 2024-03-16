import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from 'sequelize';
import { sequelize } from '../configuration/database';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare createdAt: CreationOptional<Date>;
    declare email: string;
    declare firstName: string;
    declare id: CreationOptional<number>;
    declare lastName: string;
    declare password: string;
    declare updatedAt: CreationOptional<Date>;
    declare username: string;
}

User.init(
    {
        createdAt: DataTypes.DATE,
        email: { type: new DataTypes.STRING(128), allowNull: false },
        firstName: { type: new DataTypes.STRING(128), allowNull: false },
        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        lastName: { type: new DataTypes.STRING(128), allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        updatedAt: DataTypes.DATE,
        username: { type: new DataTypes.STRING(128), allowNull: false },
    },
    { tableName: 'users', sequelize },
);

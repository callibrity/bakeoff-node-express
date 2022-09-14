import {DataTypes, InferAttributes, InferCreationAttributes, Model} from 'sequelize'
import sequelizeConnection from '../config'

class Artist extends Model<InferAttributes<Artist>, InferCreationAttributes<Artist>> {
    declare id: string
    declare name: string
    declare genre: string
}


Artist.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: sequelizeConnection,
        tableName: 'artist',
        timestamps: false
    }
);


export default Artist
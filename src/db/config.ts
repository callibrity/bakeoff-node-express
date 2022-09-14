import {Dialect, Sequelize} from 'sequelize'

const dbHost = process.env.DB_HOST as string || "localhost"
const envPort = parseInt(process.env.DB_PORT || '')
const dbPort = Number.isInteger(envPort) ? envPort : 5432
const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbPassword = process.env.DB_PASS
const dbDriver = process.env.DB_DRIVER as Dialect || "postgres"

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: dbDriver,
    logging: false
})

export default sequelizeConnection
import Artist from './models/Artist'

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
    Artist.sync({ alter: isDev })
}
export default dbInit
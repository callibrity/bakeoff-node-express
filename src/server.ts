import * as dotenv from 'dotenv'
import express, {Application} from 'express'
import dbInit from "./db/init";
import router from "./routes";

dotenv.config()


const app: Application = express()

dbInit()

app.use(express.json());
app.use('/api', router)
app.listen(process.env.PORT || 8080)
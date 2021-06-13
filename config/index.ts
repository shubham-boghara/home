import dotenv from "dotenv"
import config from "./config.json"
dotenv.config();

type Security = {
    secretKey: string
    expiresIn: string
}

type Server = {
    port: number
}

type Db = {
    database : string
}

const {DB_DATABASE} = process.env

const db:Db ={ 
   database : DB_DATABASE
}

const { security, server } = config

export const $db:Db = db
export const $security:Security = security
export const $server:Server = server
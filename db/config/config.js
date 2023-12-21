import 'dotenv/config'

export const DB_CONFIG = {
    HOST: process.env.HOST,
    PORT: 5432,
    USER: process.env.USER,
    PASS: process.env.PASS,
    DB: 'dc', // dripstore
    DIALECT: 'postgres',
}
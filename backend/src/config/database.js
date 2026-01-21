import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;

// console.log(dbHost, dbUser, dbName, dbPassword);

const sequelize = new Sequelize({
    dialect : 'mysql',
    database : dbName,
    username : dbUser,
    password : dbPassword,
    host : dbHost
});

export default sequelize;
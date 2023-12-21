import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./config/config.js";

// postgres://admin:ce4xiSNKYkil1QKqXpxKZLVf0Oj4VAT8@dpg-clkin8sjtl8s73e5tb0g-a.oregon-postgres.render.com/dc_oa42
const URL_RENDER = `${DB_CONFIG.DIALECT}://${DB_CONFIG.USER}:${DB_CONFIG.PASS}@${DB_CONFIG.HOST}/${DB_CONFIG.DB}`
console.log(`[URL_RENDER]`);
export const connection = new Sequelize(URL_RENDER,
  {
    pool: {
      max: 5, // maximo de conexoes suportados 
      min: 0, // minimo de conexoes suportados
      acquire: 30000, // tempo maximo, em ms(milisegundos) que o pool tenta conectar antes de gerar o erro
      idle: 10000, // tempo maximo, em ms(milisegundos) que o pool pode ser confirmado antes de ser estabelecido
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, //Configuração
      },
      keepAlive: true
    }
  });

try {
  await connection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
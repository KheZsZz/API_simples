import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: 3306,
  },
});
if(!db.connect()){
  console.log("Erro conecção");
}

export default async function queryDB({query, values}:any) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (e:any) {
    Error(e.message);
  }
}
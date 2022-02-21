# @Entenda

Esse projeto foi feito para eu entender como o `Next.js` projeta uma API...

# @Start
Antes de tudo cerifique que você tenha instalado o Node.js e o VsCode

Pós instalção no propt digite:
* npx create-next-app --nameApp --typescript

feito isso entre na pasta...

## @serveless-mysql

Instale o serveless-mysql no seu projeto com o comando:
* npm i serverless-mysql --save

## @Lib

Na Raiz do projeto crie uma pasta chamada "Lib", dentro dela criar um aquivo com o nome que desejar com a extenção ".ts".

digite os comandos:

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


Crie uma função de query:

export default async function queryDB({query, values[]}:any) {
  try {
    const results = await db.query(query, values[]);
    await db.end();
    return results;
  } catch (e:Error) {
    Error(e.message);
  }
}

* OBS: Não intendo muito de typescrit por isso o tipo de entrada é Any... Se alguém pude me ajudar =)

# @env.local

Na raiz do seu projeto crie um arquivo chamado env.local nele ira todas as suas variaveis de ambiente... Não sei porquê, mas quando se usa "" no arquivo buga tudo e não reconhece as variaveis.

Então digite:

MYSQL_HOST = localhost
MYSQL_DATABASE = database_post
MYSQL_USERNAME = root
MYSQL_PASSWORD = 
MYSQL_PORT = 3306

* OBS: vale lembrar que o banco já deve estar criado e sendo executado sendo localmente ou hospedado...

# @Continua... =)

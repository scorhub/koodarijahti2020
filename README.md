---------------------------
About Project

This is project for Vincit summer recruiment <i>Koodarijahti 2020</i>. Assigment in finnish can be found here: https://koodarijahti.fi/Ennakkotehtava_2020_Painikepeli.pdf

<b>The project is made with following:</b><br>
Frontend: React with <i>React Router Dom</i> and <i>axios</i>. In basic structure I used also <i>Html</i> and <i>Css</i>.<br>
Backend: Node.js with following packages; <i>bcryptjs</i>, <i>dotenv</i>, <i>express</i>, <i>jest</i>, <i>@hapi/joi</i>, <i>express-joi-validation</i>, <i>jsonwebtoken</i>, <i>knex</i> and <i>nodemon</i>.<br>
Database runs on MySQL server, migrations run with <i>knex</i>.

---------------------------
Live version

Live version of the project can be played at https://buttongame.nodeeli3.net/

---------------------------
Folder structure of the project

├─ back<br>
│  ├─ bin<br>
│  ├─ <i>build</i>      # Compiled files (not uploaded to GitHub, you can clone project and make your own build)<br>
│  ├─ models<br>
│  ├─ mw                # Middleware files<br>
│  ├─ public<br>
│  ├─ routes<br>
│  ├─ tests             # Test files<br>
│  └─ utils<br>
├─ database             # knex database folder<br>
│  ├─ migrations<br>
│  └─ seeds<br>
├─ front<br>
│   ├─ public<br>
│   │  ├─ css<br>
│   │  └─ img<br>
│   └─ src               # Source files<br>
│      ├─ pages          # Specific pages, each language in own folder<br>
│      │  ├─ en          # English pages<br>
│      │  └─ fi          # Finnish pages<br>
│      └─ serv<br>
└─ README.md

---------------------------
Installation guide for Windows

Clone this repositary to your local device with git-client or download the zip-package and uzip it. Run command <b>npm install</b> in <i>front</i>, <i>back</i> and <i>database</i> folders with Command Prompt to install depencies. After that run <b>npm run build</b> in <i>front</i> and move the created <i>build</i> folder into the root of the <i>back</i>.
<br><br>
Set up SQL-database (with Xampp or similiar) and create <i>knexfile.js</i> at the root of the <i>database</i>. Configurate settings inside the <i>knexfile.js</i> to match your database settings. Example configuratoin can be found at the bottom of the file.<br>
<br>
Now navigate inside of the <i>database</i> and run migrations & seeds with following commands: <b>npx knex migrate:latest</b> & <b>npx knex seed:run</b>. Finally create <i>.env</i> file in the root of the <i>back</i> and insert the following information: 
<br>
DB_HOST = localhost<br>
DB_USER = root<br>
DB_PASS =                       # Leave password empty if using Xampp, otherwise change it to match real one<br>
DB_DATABASE = koodarijahti2020<br>
DB_TYPE = mysql<br>
PORT = 3001<br>
SECRET = supersecret<br>
<br>
You can now start the application by running the command <b>npm run watch</B> in <i>back</i>.

---------------------------
Knexfile.js Configuration (for local mysql database)

Here are <i>knexfile.js</i> configuration for using it with XAMPP:<br>
<br>
module.exports = {<br>
  development: {<br>
    client: 'mysql',<br>
    connection: {<br>
      user: 'root',<br>
      password: '',                   # Leave password empty if using Xampp, otherwise change it to match real one<br>
      database: 'koodarijahti2020'<br>
    }
  }
};
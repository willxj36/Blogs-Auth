import * as mysql from 'mysql';

const pool = mysql.createPool({ //change to dotenv stuff
    host: 'localhost',
    port: 3306,
    user: 'blogapp',
    password: 'password123',
    database: 'blogs'
});
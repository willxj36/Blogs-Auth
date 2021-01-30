import * as mysql from 'mysql';

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'blogapp',
    password: 'password123',
    database: 'blogs'
});
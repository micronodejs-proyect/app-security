const mysql = require('mysql2');

const con = mysql.createConnection({
    user: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_DATABASE_SECURITY,
    host: process.env.DB_MYSQL_HOST,
    port: process.env.DB_MYSQL_PORT
})

const authRepository = {
    getUsersByCredentials: async (userName, password) => {
        const sql = `SELECT * FROM usercredential WHERE username='${userName}' AND password='${password}';`
        const response = await new Promise((resolve, reject) =>{
            con.query(sql, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
        
        return response;
    }
}

module.exports = authRepository;
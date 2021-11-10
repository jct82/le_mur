const Core = require('./core');
const db = require('../database');

module.exports = class User extends Core {

    static tableName = 'user';   

   //static method to find a user by email
    static async findByEmail(mail) {
        // Here we use db.query and not Core.fecthone to avoid the Core Error : "No Data found with this filter" 
        const data = await db.query(`SELECT * FROM "user" WHERE email = $1`, [mail]);
        return data.rows[0];
    }

    //static method to find a user by ids
    static async findByIds(ids) {
        const data = await Core.fetch(`SELECT id, "name", "lastname" FROM "user" WHERE id in (${ids});`);
        return data;
    }

    // method to save a new user in database
    async save() {
        
        const data =  await Core.fetchOne(`INSERT INTO "user" (name, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING id;`,
        [this.name, this.lastname, this.email, this.password]);
        return data;

           
    }

     // method to save a new user informations in database
     async update(userId) {
        
        const data =  await Core.fetchOne(`UPDATE "user" SET name=$1, lastname=$2, password=$3 WHERE id = $4 RETURNING *;`,
        [this.name, this.lastname, this.password, userId]);
        return data;

           
    }
}

   

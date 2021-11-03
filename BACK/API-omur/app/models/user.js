const Core = require('./core');

module.exports = class User extends Core {

    static tableName = 'user';   

   //static method to find a user by email
    static async findByEmail(mail) {
        const data = await Core.fetchOne(`SELECT * FROM "user" WHERE email = $1`, [mail]);
        return data;
    }

    // method to save a new user in database
    async save() {
        
        await Core.fetchOne(`INSERT INTO "user" (name, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *;`,
        [this.name, this.lastname, this.email, this.password]);

           
    }
}

   

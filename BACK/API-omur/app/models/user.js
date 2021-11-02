const Core = require('./core');

module.exports = class User extends Core {

    static tableName = 'user';

    // method to find all the users

    static async findAll() {
        const data = await Core.fetch(`SELECT * FROM "user";`);

        return data.map(d => new User(d));
    }

   

    // method to save a new user in database
    async save() {
        
        await Core.fetchOne(`INSERT INTO "user" (name, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *;`,
        [this.name, this.lastname, this.email, this.password]);

           
    }
}

   

const Core = require('./core');

module.exports = class User extends Core {

    static tableName = 'user';

    static async findAll() {
        const data = await Core.fetch(`SELECT * FROM "user";`);

        return data.map(d => new User(d));
    }

   
}
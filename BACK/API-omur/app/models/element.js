const Core = require('./core');

module.exports = class Element extends Core {

    static tableName = 'element';   

//    //static method to find a user by email
//     static async findByEmail(mail) {
//         const data = await Core.fetchOne(`SELECT * FROM "user" WHERE email = $1`, [mail]);
//         return data;
//     }

//     //static method to find a user by ids
//     static async findByIds(ids) {
//         const data = await Core.fetch(`SELECT * FROM "user" WHERE id= ANY(ARRAY$1)`, [ids]);
//         return data;
//     }

    // method to save a new user in database
    async save(wallId, ownerId) {
        
        await Core.fetchOne(`INSERT INTO "element" (name, description, type, src, wall_id, owner_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
        [this.name, this.description, this.type, this.src, wallId, ownerId ]);

           
    }
}

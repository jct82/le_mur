const Core = require('./core');

module.exports = class Element extends Core {

    static tableName = 'element';   

   //static method to find an element by its wall_id
    static async findByWallId(wallId) {
        const data = await Core.fetch(`SELECT * FROM "element" WHERE wall_id = $1`, [wallId]);
        return data;
    }


    // method to save a new user in database
    async save(wallId, owner_id) {
        
        const data = await Core.fetchOne(`INSERT INTO "element" (name, description, type, src, wall_id, owner_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
        [this.name, this.description, this.type, this.src, wallId, owner_id ]);
        return data

    
    }
    
}

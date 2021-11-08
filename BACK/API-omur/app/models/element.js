const Core = require('./core');

module.exports = class Element extends Core {

    static tableName = 'element';   

   //static method to find an element by its wall_id
    static async findByWallId(wallId) {
        const data = await Core.fetch(`SELECT * FROM "element" WHERE wall_id = $1`, [wallId]);
        return data;
    }


    // method to save a new element in database
    async save(wallId, ownerId) {
        
        const data = await Core.fetchOne(`INSERT INTO "element" (name, description, type, src, link, position, wall_id, owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
        [this.name, this.description, this.type, this.src, this.link, this.position, wallId, ownerId ]);
        return data

    }
    // method to save a new element in database
    async update(wallId, elementId) {
        
        const data = await Core.fetchOne(`UPDATE element SET "name"=$1, description=$2, "type"=$3, src=$4, "link"=$5, position=$6 WHERE wall_id=$7 AND id=$8 RETURNING *;`,
        [this.name, this.description, this.type, this.src, this.link, this.position, wallId, elementId ]);
        return data

    
    }
    
}

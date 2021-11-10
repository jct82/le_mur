const Core = require('./core');
const db = require('../database');

module.exports = class Wall extends Core {

    static tableName = 'wall';

    //static method to find a wall by title
    static async findByTitle(title) {
        const data = await Core.fetchOne(`SELECT * FROM "wall" WHERE title = $1`, [title]);
        return data;
    }

    
    // static async findWallsWithUserInfo(userId) {
    //     const data = await Core.fetch(`
    //     SELECT wall.id, title, title_color, photo, description, name, lastname, email, pdf, owner_id, wall.created_at, wall.updated_at 
    //     FROM "wall"  
    //     JOIN "user" on "user".id = wall.owner_id 
    //     JOIN "participate" on wall.id = participate.wall_id 
    //     WHERE user_id=$1
    //     GROUP BY wall.id, title, photo, description, title_color, pdf, owner_id, name, lastname, email, wall.created_at, wall.updated_at;`,
    //     [userId]);
    //     return data;
    // }
    //static method to get walls with user informations
    static async findWallsWithUserInfo(userId) {
        const data = await Core.fetch(`
        SELECT wall.id, title, title_color, photo, description, pdf, owner_id, wall.created_at, wall.updated_at 
        FROM "wall"  
        JOIN "user" on "user".id = wall.owner_id 
        JOIN "participate" on wall.id = participate.wall_id 
        WHERE user_id=$1
        GROUP BY wall.id, title, photo, description, title_color, pdf, owner_id, name, lastname, email, wall.created_at, wall.updated_at;`,
        [userId]);
        return data;
    }
    //static method to get walls with all collabs informations
    static async findCollabsInfoByWallId(wallIds) {
        const data = await Core.fetch(`
        SELECT "user".id, wall.id as "wallId", "name", "lastname" FROM "user"
        JOIN participate ON participate.user_id="user".id
        JOIN wall ON wall.id = "participate".wall_id
        WHERE wall.id in (${wallIds});`);
        return data;
    }

    
    // method to save a new wall in database
    async saveInWall(userId) {
        
        await Core.fetchOne(`INSERT INTO "wall" (title, description, photo, owner_id, title_color) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
        [this.title, this.description, this.photo,userId, this.title_color]);

           
    }
    // method to save a wall_id and collab_id in "participate" in database
    async saveWallInParticipate(wallId,collabId) {
        
        await Core.fetchOne(`INSERT INTO "participate" (wall_id, user_id) VALUES ($1, $2) RETURNING *;`,
        [wallId, collabId]);

           
    }

    // method to delete a wall from bdd
    static async deleteWallById(id) {
        // Here we use db.query and note Core.fecthOne to avoid the CoreError   if (rows.length === 0) {throw new NoDataError(this.tableName); }
        const query = {text:`DELETE FROM wall where id = $1;`,
        values:[id]}
        return await db.query(query)

                  
    }

     // method to modify an existing wall in database
    async update(wallId) {
        
        const data = await Core.fetchOne(`UPDATE "wall" SET title=$1, description=$2, photo=$3, title_color=$4 WHERE id =$5 RETURNING *;`,
        [this.title, this.description, this.photo, this.title_color, wallId]);
        return data

           
    }

    // method to delete collaborators of a wall in database
    async deleteCollabs(wallId) {
        
        const data = await Core.fetch(`DELETE FROM "participate" WHERE wall_id = $1 RETURNING *;`,
        [wallId]);
        return data

           
    }

}


   

const Core = require('./core');
const db = require('../database');

module.exports = class Wall extends Core {

    static tableName = 'wall';

    //static method to find a wall by title
    static async findByTitle(title) {
        const data = await Core.fetchOne(`SELECT * FROM "wall" WHERE title = $1`, [title]);
        return data;
    }

    //static method to get walls with user informations
    static async findWallsWithUserInfo(userId) {
        const data = await Core.fetch(`
        SELECT wall.id, title, title_color, photo, description, name, lastname, email, pdf, owner_id, wall.created_at, wall.updated_at 
        FROM "wall"  
        JOIN "user" on "user".id = wall.owner_id 
        JOIN "participate" on wall.id = participate.wall_id 
        WHERE user_id=$1 or owner_id=$1 
        GROUP BY wall.id, title, photo, description, title_color, pdf, owner_id, name, lastname, email, wall.created_at, wall.updated_at;`,
        [userId]);
        return data;
    }

    // REQUETE SUR PGADMI : SELECT * FROM "wall"  JOIN "user" on "user".id = wall.owner_id JOIN "participate" on wall.id = participate.wall_id WHERE user_id=1 or owner_id=1;
    

    // static async findWallsWithUserInfo(userId) {
    //     const data = await Core.fetch(`SELECT wall.id, title, title_color, description, photo, pdf, owner_id, wall.created_at, wall.updated_at, name, lastname, email
    //     FROM wall
    //     JOIN "user" on "user".id = wall.owner_id`);
    //     return data;
    // }

   
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
        
        const query = {text:`DELETE FROM wall where id = $1;`,
        values:[id]}
        return await db.query(query)

                  
    }
}


   

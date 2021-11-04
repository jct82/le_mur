const Core = require('./core');

module.exports = class Wall extends Core {

    static tableName = 'wall';

   
    // method to save a new wall in database
    async saveInWall(userId) {
        
        await Core.fetchOne(`INSERT INTO "wall" (title, description, owner_id) VALUES ($1, $2, $3) RETURNING *;`,
        [this.title, this.description,userId]);

           
    }

    async saveWallInParticipate(collabId) {
        
        await Core.fetchOne(`INSERT INTO "participate" (wall_id, user_id) VALUES ($1, $2) RETURNING *;`,
        [this.id, collabId]);

           
    }
}

   

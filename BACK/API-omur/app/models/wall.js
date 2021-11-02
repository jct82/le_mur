const Core = require('./core');

module.exports = class Wall extends Core {

    static tableName = 'wall';

   
    // method to save a new wall in database
    async saveWall() {
        
        await Core.fetchOne(`INSERT INTO "wall" (title, description) VALUES ($1, $2) RETURNING *;`,
        [this.title, this.description]);

           
    }
}

   

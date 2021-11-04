const pool = require('./database');

const datamapper = {
    getAllUsers: async () => {
        const query = {
            text:`SELECT * FROM "user"`
        };
        return await pool.query(query);
    },

};

module.exports = datamapper;
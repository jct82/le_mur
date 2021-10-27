const db = require('../database');

// custom error
class NoDataError extends Error {
    constructor(entity = 'data', filter = 'filter') {
        super();
        this.message = `no ${entity} found with this ${filter}`;
    }
}

module.exports = class CoreModel {

    static NoDataError = NoDataError;

    // hop, on factorise
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    // méthode qui permettent d'aller directement à l'essentiel ;-)
    // et qui évite d'importer le connecteur dans tous les models
    static async fetch(...args) {
        const { rows } = await db.query(...args);
        /*
        équivalent à
        const result = await db.query(query);
        const rows = result.rows;
        */

        if (rows.length === 0) {
            throw new NoDataError(this.tableName);
        }

        return rows;
    }

    // si on sait déjà qu'on ne veut qu'un seul enregistrement
    static async fetchOne(...args) {
        // ça revient à appeler fetch, sauf qu'on récupère un seul objet
        // au lieu d'un array d'objets
        return (await this.fetch(...args))[0];
    }

    static async findOne(id) {
        const data = this.fetchOne(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);
        return await new this(data);
    }

    static async findAll() {
        const data = await Core.fetch(`SELECT * FROM ${this.tableName};`);
        return data.map(d => new this(d));
    }
}
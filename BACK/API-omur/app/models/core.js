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

    // constructor factorisation 
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    
    // method that avoid to import db connector in every models
    static async fetch(...args) {
        const { rows } = await db.query(...args);
        /*
        this is like 
        const result = await db.query(query);
        const rows = result.rows;
        */

        if (rows.length === 0) {
            throw new NoDataError(this.tableName);
        }

        return rows;
    }

    //same method but for just one line
    static async fetchOne(...args) {
        // we get just one object instead of array of objects
        return (await this.fetch(...args))[0];
    }

    //static method to find one registration. available for all models
    static async findOne(id) {
        const data = this.fetchOne(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);
        return await new this(data);
    }
    //static method to find all registrations. available for all models
    static async findAll() {
        const data = await Core.fetch(`SELECT * FROM ${this.tableName};`);
        return data.map(d => new this(d));
    }
}
/**
 * ReadChaincode.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { 
      type: 'number', 
      autoIncrement: true, 
    },

    keys: {
      type: 'json'
    },

    // reference to transaction
    transaction: {
      model: 'transaction',
      unique: true,
      required: true,
    }

  },

};


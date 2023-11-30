'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tourist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Tourist.init({
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    biography: {
      type: DataTypes.STRING,
      allowNull: false
    },
    interests: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    country: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      validate: {
        isINT: { msg: "Must be an integer"
          
        }
      }
    },
    
  }, {
    sequelize,
    modelName: 'tourist',
  });
  return Tourist;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tourist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.tourist.belongsTo(models.user);
    }
  }
  tourist.init({
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
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        isINT: { msg: "Must be an integer"},
        
      },
      unique: true
    },
  }, {
    sequelize,
    modelName: 'tourist',
  });
  return tourist;
};
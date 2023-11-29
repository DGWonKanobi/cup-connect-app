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
    full_name: DataTypes.STRING,
    biography: DataTypes.STRING,
    interests: DataTypes.STRING,
    country: DataTypes.STRING,
    age: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tourist',
  });
  return tourist;
};
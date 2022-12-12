import  sequelize  from "../Config/db.sequelize.js";
import { DataTypes, Model } from "sequelize";

// Write new class and extends it with SQ's Model class
class ArtistModel extends Model {}

// Initializing model
ArtistModel.init(
  {
    // Defines field properties
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "untitled",
    },
  },
  {
    sequelize, // Sequelize object
    modelName: "artist", // table name
    freezeTableName: true, // Lock table names to singular
    underscored: true, // Use underscores instead of camelcase
    createdAt: true, // Omit createdAt field
    updatedAt: true, // Omit updatedAt field
  }
);

export default ArtistModel;

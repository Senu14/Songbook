import { sequelize } from "../config/db.sequelize.js";
import { DataTypes, Model,} from "sequelize";

class ArtistModel extends Model{}
 ArtistModel.init({
	id:{
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name:{
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'untitled'
	},
	
}, { 
     sequelize,
	ModelNme:'artist',
	freezeTableName: true,
	underscored: true,
	// createdAt: 'created',
	// updatedAt: false
 })
 export default ArtistModel;

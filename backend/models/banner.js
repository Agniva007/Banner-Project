const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Banner extends Model {
        static associate(models) {
           // TODO:
        }
    }

    Banner.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.BIGINT,
            },
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            timer: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            link: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            is_visible: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        },
        {
            sequelize,
            modelName: 'Banner',
            tableName: 'banner',
            timestamps: true,
            createdAt: 'CREATED_DT',
            updatedAt: 'UPDATED_DT'
        }
    );
    return Banner;
}
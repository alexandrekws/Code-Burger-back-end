import Sequelize, { Model } from "sequelize";


class Product extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            path: Sequelize.STRING,
            offer: Sequelize.BOOLEAN,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `https://code-burger-back-p54t257c9-alexandrekws.vercel.app/${this.path}`
                },
            },      
        },
        {
            sequelize,
        });

        return this
    }

    static associate(models){
        this.belongsTo(models.Category, { 
        foreignKey: 'category_id', 
        as: 'category',
        })
    }
}

export default Product
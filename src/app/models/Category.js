import Sequelize, { Model } from "sequelize";


class Category extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            path: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `https://code-burger-back-end.vercel.app/${this.path}`
                },
            },      
        },
        {
            sequelize,
        });

        return this
    }
}

export default Category
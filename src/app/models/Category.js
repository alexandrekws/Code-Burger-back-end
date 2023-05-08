import Sequelize, { Model } from "sequelize";


class Category extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            path: Sequelize.STRING,
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
}

export default Category
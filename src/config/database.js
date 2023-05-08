module.exports = {
    dialect: 'postgres',
    dialectModule: require('pg'),
    host:'containers-us-west-196.railway.app',
    port: 5526,
    username: 'postgres',
    password: 'AgPhu1OZPBnh71HsneiD',
    database: 'railway',
    define: {
        timespamps: true,
        underscored: true,
        underscoredAll: true,
    },
}
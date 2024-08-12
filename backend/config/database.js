module.exports = {
    url: `mysql://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    dialect: 'mysql',
};
export default () => ({
    postgres: {
        host: process.env.POSTGRES_DB_HOST,
        user: process.env.POSTGRES_DB_USER,
        password: process.env.POSTGRES_DB_PASSWORD,
        database: process.env.POSTGRES_DB_DATABASE
    },
})

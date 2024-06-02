const { db } = require('@vercel/postgres');

async function createRolesTable(client) {
    try {
        // Create the "roles" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS roles (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE
            );
        `;

        console.log(`Created "roles" table`);

        // Insert default roles
        await client.sql`
            INSERT INTO roles (name) VALUES 
            ('User'),
            ('Admin');
        `;

        console.log(`Inserted default roles`);

        return createTable;
    } catch (error) {
        console.error('Error creating "roles" table:', error);
        throw error;
    }
}

async function createUsersTable(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                surname VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                role_id INTEGER NOT NULL DEFAULT 1 REFERENCES roles(id)
            );
        `;

        console.log(`Created "users" table`);

        return createTable
    } catch (error) {
        console.error('Error creating "users" table:', error);
        throw error;
    }
}

async function createRequestHistoryTable(client) {
    try {
        // Create the "request_history" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS request_history (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                user_id UUID REFERENCES users(id),
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                method VARCHAR(10) NOT NULL,
                route VARCHAR(255) NOT NULL,
                body JSONB,
                result JSONB
            );
        `;

        console.log(`Created "request_history" table`);

        return createTable;
    } catch (error) {
        console.error('Error creating "request_history" table:', error);
        throw error;
    }
}



async function main() {
    const client = await db.connect();

    await createRolesTable(client);
    await createUsersTable(client);
    await createRequestHistoryTable(client);

    await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

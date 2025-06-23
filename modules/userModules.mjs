import { sql } from "../dbConnection.mjs";


//Create user
export const createUser = async (newUser) => {
  const { username, email, password } = newUser;

  try {
    const [user] = await sql`
      INSERT INTO users
      (username, email, password)
      VALUES 
      (${username}, ${email}, ${password})
      RETURNING *;
    `;
    return user;
  } catch (err) {
    console.error('Error inserting user:', err);
    throw new Error('Failed to create user');
  }
};

//Get user by username

export const getUserByUserName = async (username) => {
  const [user] = await sql`
    SELECT * FROM users
    WHERE users.username = ${username}
    `;

  return user;
};

//get user by id

export const getUserByID = async (id) => {
    const [user] = await sql `
    SELECT id, email, role FROM users
    WHERE users.id = ${id}
    `;

    return user
}
import { Query } from '../';

const get = async () => Query('SELECT id, name FROM authors')

const getOneEmail = async (email: string) => Query('SELECT * FROM authors WHERE email LIKE ? LIMIT 1', [email]);

const getOneId = async (id: number) => Query('SELECT * FROM authors WHERE id = ? LIMIT 1', [id]);

const post = async (name: string, email: string) => Query('INSERT INTO authors SET name = ?, email = ?', [name, email]); //likely need some changes

const put = async (name: string, email: string, id: number) => Query('UPDATE authors SET name = ?, email = ? WHERE id = ?', [name, email, id]); //likely needs some changes

const deleter = async (id: number) => Query('DELETE FROM authors WHERE id = ?', [id]);

export default { get, getOneEmail, getOneId, post, put, deleter };

//post, put, delete requests were going to be fancy features to do a little extra, but now will just be placeholders for after the auth section
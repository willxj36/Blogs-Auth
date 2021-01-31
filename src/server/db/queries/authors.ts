import { Query } from '../';
import { User } from '../../../utils/models';

const get = async () => Query('SELECT id, name FROM authors')

const getOneEmail = async (email: string) => Query('SELECT * FROM authors WHERE email LIKE ? LIMIT 1', [email]);

const getOneId = async (id: number) => Query('SELECT * FROM authors WHERE id = ? LIMIT 1', [id]);

const post = async (user: User) => Query('INSERT INTO authors (name, email, password) VALUES ?', [user]);

const put = async (user: User) => Query('UPDATE authors SET (name, email, password) VALUES ? WHERE id = ?', [user]);

const deleter = async (id: number) => Query('DELETE FROM authors WHERE id = ?', [id]);

export default { get, getOneEmail, getOneId, post, put, deleter };
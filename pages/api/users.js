import { createUser } from '../../lib/redis';

export default async function handler(req, res) {
    const data = req.body;
    const id = await createUser(data);

    res.status(200).json({ id });
}
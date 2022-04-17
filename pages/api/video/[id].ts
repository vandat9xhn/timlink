// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    id: string;
    name: string;
    des: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const id = req.query['id'] as string;

    res.status(200).json({ id: id, name: 'hai huoc', des: 'xuan bac tu long' });
}

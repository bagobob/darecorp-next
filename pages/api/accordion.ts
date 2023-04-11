// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { accordionDetails } from 'data/accordion_detail';
import type { NextApiRequest, NextApiResponse } from 'next';

export type AccordionItem = {
    title: string;
    content: string;
}

export type AccordionLayoutItem = {
    title: string;
    accordion: Array<AccordionItem>
    img: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AccordionLayoutItem[]>
) {
    res.status(200).json(accordionDetails)
}

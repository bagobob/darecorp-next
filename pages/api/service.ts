// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { serviceData } from 'data/service-data';
import type { NextApiRequest, NextApiResponse } from 'next';

export type FeatureItem = {
    icon: IconProp;
    title: string;
    description: string;
}

export type ServiceItem = {
    name: string;
    hero_title: string;
    hero_subtitle: string;
    hero_image: string;
    title: string;
    subtitle: string;
    description: string;
    feature: Array<FeatureItem>;
    subDescription: string;
    secondTitle: string;
    secondContent: string;
    img: string;
    alt: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ServiceItem[]>
) {
    res.status(200).json(serviceData)
}

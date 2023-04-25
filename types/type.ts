import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
    feature: Array<{
        icon: IconProp;
        title: string;
        description: string;
    }>;
    secondTitle: string;
    secondContent: string;
    img: string;
    alt: string;
}

export type AccordionItem = {
    title: string;
    content: string;
}

export type AccordionLayoutItem = {
    title: string;
    accordion: Array<AccordionItem>
    img: string;
}
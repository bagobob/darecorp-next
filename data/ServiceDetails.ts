import { faCloud, faLock, faServer } from '@fortawesome/free-solid-svg-icons';

export const MarketingService = {
    value: [
        {
            title: "web_app",
            firstText: "first_text_web",
            secondText: "second_text_web",
            img: "/images/web_dev.png",
            id: "service_web_development",
            link: "web-development"
        },
        {
            title: "marketing_digital",
            firstText: "first_text_marketing",
            secondText: "second_text_marketing",
            img: "/images/app_development.png",
            id: "service_marketing_digital",
            link: "marketing-digital"
        },
    ]
}

export const ServiceDetails = {
    value: [
        {
            name: 'web-development',
            hero_title: 'web_app',
            hero_subtitle: 'subtitle_web_hero_component',
            hero_image: 'web.jpg',
            title: 'web_app',
            subtitle: "web_objective",
            feature: [
                {
                    icon: faLock,
                    title: "web_first_service",
                    description: "web_first_service_content"
                },
                {
                    icon: faLock,
                    title: "web_second_service",
                    description: "web_second_service_content"
                },
                {
                    icon: faLock,
                    title: "web_third_service",
                    description: "web_third_service_content"
                },
                {
                    icon: faLock,
                    title: "web_fourth_service",
                    description: "web_fourth_service_content"
                },
                {
                    icon: faLock,
                    title: "web_fifth_service",
                    description: "web_fifth_service_content"
                },
            ],
            secondTitle: 'the_result',
            secondContent: 'web_result',
            img: 'dev_web.jpg',
            alt: 'darecorp-web-development-service-page'
        },
        {
            name: 'marketing-digital',
            hero_title: 'marketing_digital',
            hero_subtitle: 'subtitle_marketing_hero_component',
            hero_image: 'marketing_hero_component.avif',
            title: 'Marketing Digital',
            subtitle: "marketing_result",
            feature: [
                {
                    icon: faServer,
                    title: "marketing_first_service",
                    description: "marketing_first_service_content"
                },
                {
                    icon: faServer,
                    title: "marketing_second_service",
                    description: "marketing_second_service_content"
                },
                {
                    icon: faServer,
                    title: "marketing_third_service",
                    description: "marketing_third_service_content"
                },
                {
                    icon: faServer,
                    title: "marketing_fourth_service",
                    description: "marketing_fourth_service_content"
                },
                {
                    icon: faServer,
                    title: "marketing_fifth_service",
                    description: "marketing_fifth_service_content"
                },
            ],
            secondTitle: 'the_result',
            secondContent: 'marketing_result',
            img: 'marketing.png',
            alt: 'darecorp-marketing-digital-service-page'
        }
    
    ]
}
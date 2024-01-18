declare module "*.png";

declare module "*.pdf";

declare module "AboutCards" {
    interface Card {
        title: string;
        image: string;
        description: string;
        link: string;
        url: string;
    }
    interface AboutCardsProps {
        cards: Card[];
    }
    const AboutCards: React.FunctionComponent<AboutCardsProps>;
    export default AboutCards;
}

declare module "Disclaimer" {
    const Disclaimer: React.FunctionComponent;
    export default Disclaimer;
}

declare module "EduDetails" {
    const EduDetails: React.FunctionComponent;
    export default EduDetails;
}

declare module "Footer" {
    const Footer: React.FunctionComponent;
    export default Footer;
}

declare module "Header" {
    const Header: React.FunctionComponent;
    export default Header;
}

declare module "HomeTitle" {
    const HomeTitle: React.FunctionComponent;
    export default HomeTitle;
}

declare module "ProjectCards" {
    interface Card {
        title: string;
        image: string;
        description: string;
        technologies: Array<string>;
        links: Array<Array<string>>;
    }
    interface ProjectCardsProps {
        cards: Card[];
    }
    const ProjectCards: React.FunctionComponent<ProjectCardsProps>;
    export default ProjectCards;
}

declare module "Reveal" {
    interface Props {
        children: JSX.Element;
    }
    const Reveal: React.FunctionComponent<Props>;
    export default Reveal;
}

declare module '*.png'

declare module 'Footer' {
  const Footer: React.FunctionComponent;
  export default Footer;
}

declare module 'CardList' {
  interface Card {
    title: string;
    image: string;
    description: string;
    link: string;
    url: string;
  }
  interface CardListProps {
    cards: Card[];
  }
  const CardList: React.FunctionComponent<CardListProps>;
  export default CardList;
}

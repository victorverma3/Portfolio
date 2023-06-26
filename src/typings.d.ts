declare module '*.png'

declare module '*.pdf'

declare module 'Footer' {
  const Footer: React.FunctionComponent;
  export default Footer;
}

declare module 'CList' {
  interface Card {
    title: string;
    image: string;
    description: string;
    link: string;
    url: string;
  }
  interface CListProps {
    cards: Card[];
  }
  const CList: React.FunctionComponent<CListProps>;
  export default CList;
}

export interface ComicEntity {
  id: number;
  title: string;
  description: string;
  issueNumber: number;
  pageCount: number;
  prices: {
    type: string;
    price: number;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    name: string;
  };
  dates: {
    type: string;
    date: string;
  }[];
  creators: {
    items: {
      name: string;
      role: string;
    }[];
  };
}

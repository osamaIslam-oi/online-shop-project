export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: number;
  color: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

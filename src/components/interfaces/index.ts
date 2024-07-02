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

export interface IFromInput {
  id: string;
  name: string;
  label: string;
  type: string;
}

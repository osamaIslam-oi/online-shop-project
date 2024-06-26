import Image from "./Image";
import Button from "./UI/Button";
import { IProduct } from "./interfaces";
import { txtSlicer } from "./utils/function";

interface iProps {
  product: IProduct;
}

const card = ({ product }: iProps) => {
  const { title, description, imageURL, price, category } = product;
  return (
    <div className="flex flex-col max-w-sm p-2 mx-auto border rounded md:max-w-lg">
      <Image src={imageURL} alt={title} className="mb-2 rounded-md" />

      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-500 rounded-full"></span>
        <span className="w-5 h-5 bg-indigo-600 rounded-full"></span>
        <span className="w-5 h-5 bg-indigo-700 rounded-full"></span>
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image
          src={category.imageURL}
          alt={category.name}
          className="object-center w-10 h-10 rounded-full"
        />
      </div>

      <div className="flex items-center justify-between mt-5 space-x-2">
        <Button className=" text-white bg-indigo-600 rounded-md p-2.5">
          Edit
        </Button>
        <Button className="  text-white bg-red-600 rounded-md p-2.5">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default card;

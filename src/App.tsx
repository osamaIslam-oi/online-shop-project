import { ChangeEvent, useState } from "react";
import Card from "./components/Card";
import Modal from "./components/UI/Modal";
import { fromInputLists, productList } from "./components/data";
import { Button } from "@headlessui/react";
import Input from "./components/UI/Input";
import { IProduct } from "./components/interfaces";

function App() {
  /*-----  State -----*/
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    color: [],
    category: {
      name: "",
      imageURL: "",
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  /*-----  Handler -----*/
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  /*-----  Render -----*/
  const renderProductList = productList.map((product) => (
    <Card key={product.id} product={product} />
  ));

  const renderInputList = fromInputLists.map((input) => (
    <div className="flex flex-col ">
      <label
        className="mb-2 text-sm font-medium text-gray-700"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));

  return (
    <>
      <main className="container mx-auto">
        <Button
          className="text-white bg-indigo-600 hover:bg-indigo-400 rounded-md p-2.5"
          onClick={openModal}
        >
          ADD
        </Button>

        <div className="grid grid-cols-1 gap-3 p-1 rounded-md md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderProductList}
        </div>
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title="ADD A NEW PROJECT"
        >
          <div className="space-y-3">
            {renderInputList}
            <form className="flex items-center space-x-3">
              <Button className="text-black bg-gray-400 hover:bg-gray-300 rounded-md p-2.5 w-full">
                Cancel
              </Button>
              <Button className="text-white bg-indigo-600 hover:bg-indigo-400 rounded-md p-2.5 w-full">
                Submit
              </Button>
            </form>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default App;

import { useState } from "react";
import Card from "./components/Card";
import Modal from "./components/UI/Modal";
import { productList } from "./components/data";
import { Button } from "@headlessui/react";

function App() {
  /*-----  State -----*/
  const [isOpen, setIsOpen] = useState(false);

  /*-----  Handler -----*/
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  /*-----  Render -----*/
  const renderProductList = productList.map((product) => (
    <Card key={product.id} product={product} />
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
          <div className="flex items-center space-x-3">
            <Button className="text-black bg-gray-400 hover:bg-gray-300 rounded-md p-2.5">
              Cancel
            </Button>
            <Button className="text-white bg-indigo-600 hover:bg-indigo-400 rounded-md p-2.5">
              Submit
            </Button>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default App;

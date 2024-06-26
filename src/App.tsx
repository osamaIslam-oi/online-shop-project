import Card from "./components/Card";
import { productList } from "./components/data";

function App() {
  const renderProductList = productList.map((product) => (
    <Card key={product.id} product={product} />
  ));

  return (
    <>
      <main className="container mx-auto">
        <div className="grid grid-cols-1 gap-3 p-1 rounded-md md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderProductList}
        </div>
      </main>
    </>
  );
}

export default App;

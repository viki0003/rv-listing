import Routing from "./Routes/route";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./App.css";
import { ProductsApiProvider } from "./ApiContext/ProductApi";

function App() {
  return (
    <>
      <ProductsApiProvider>
        <Routing />
      </ProductsApiProvider>
    </>
  );
}

export default App;

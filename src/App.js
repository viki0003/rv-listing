import Routing from "./Routes/route";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./App.css";
import { ProductsApiProvider } from "./ApiContext/ProductApi";
import { BrandImagesProvider } from "./ApiContext/BrandImagesContext";
import { ElementSettingsProvider } from "./ApiContext/ElementSettingsContext";

function App() {
  return (
    <>
      <ProductsApiProvider>
        <BrandImagesProvider>
          <ElementSettingsProvider>
            <Routing />
          </ElementSettingsProvider>
        </BrandImagesProvider>
      </ProductsApiProvider>
    </>
  );
}

export default App;

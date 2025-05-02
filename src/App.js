import Routing from "./Routes/route";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./App.css";
import { ProductsApiProvider } from "./ApiContext/ProductApi";
import { BrandImagesProvider } from "./ApiContext/BrandImagesContext";
import { ElementSettingsProvider } from "./ApiContext/ElementSettingsContext";
import { SuggestedRVProvider } from "./ApiContext/SuggestedRVContext";

function App() {
  return (
    <>
      <SuggestedRVProvider>
        <ProductsApiProvider>
          <BrandImagesProvider>
            <ElementSettingsProvider>
              <Routing />
            </ElementSettingsProvider>
          </BrandImagesProvider>
        </ProductsApiProvider>
      </SuggestedRVProvider>
    </>
  );
}

export default App;

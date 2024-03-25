import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
    product.barcode.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1

  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ additionalMargin }) => {
        // Check if selected is a range
        if (selected.includes("-")) {
          const [min, max] = selected.split("-").map(Number);
          const margin = parseFloat(additionalMargin);
          return margin > min && margin <= max;
        }
        // Else, compare directly with additionalMargin
        return additionalMargin === selected;
      });
    }

    return filteredProducts.map(
      ({ img, currentMargin, websiteMargin, websiteSource, websiteMRP, currentMRP, url, additionalMargin, title, barcode, currentPrice, websitePrice }) => {

        const formattedCurrentMargin = parseFloat(currentMargin).toFixed(2);
        const formattedWebsiteMargin = parseFloat(websiteMargin).toFixed(2);
        const formattedAdditionalMargin = parseFloat(additionalMargin).toFixed(2);

        return (<Card
          key={Math.random()}
          img={img}
          currentMargin={formattedCurrentMargin}
          websiteMargin={formattedWebsiteMargin}
          websiteSource={websiteSource}
          websiteMRP={websiteMRP}
          currentMRP={currentMRP}
          url={url}
          additionalMargin={formattedAdditionalMargin}
          title={title}
          barcode={barcode}
          currentPrice={currentPrice}
          websitePrice={websitePrice}
        />)
      
      })
    
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </>
  );
}

export default App;
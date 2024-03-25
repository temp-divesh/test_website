import { BsFillBagFill } from "react-icons/bs";

// const Card = ({ img, currentMargin, websiteMargin, websiteSource, websiteMRP, currentMRP, url, additionalMargin, title, barcode }) => {
//   return (
//     <>
//       <section className="card">
//         <img src={img} alt={title} className="card-img" />
//         <div className="card-details">
//           <a href={url} className="card-title" target="_blank" rel="noopener noreferrer">{title}</a>
//           <section className="card-reviews">
//             Additional Margin: 
//             <span className="total-reviews">{additionalMargin}%</span>
//           </section>
//           <section className="card-price">
//             <div className="price">
//               {websiteSource}
//             </div>
//           </section>
//           <section className="card-extra-details">
//             <p><strong>Current Margin:</strong> {currentMargin}</p>
//             <p><strong>Website Margin:</strong> {websiteMargin}</p>
//             <p><strong>Current MRP:</strong> {currentMRP}</p>
//             <p><strong>Website MRP:</strong> {websiteMRP}</p>
//             <p><strong>Barcode:</strong> {barcode}</p>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// };

const Card = ({ img, currentMargin, websiteMargin, websiteSource, websiteMRP, currentMRP, url, additionalMargin, title, barcode, currentPrice, websitePrice }) => {
  return (
    <div className="card">
      <div className="column image-column">
        <img src={img} alt={title} className="card-img" />
      </div>
      <div className="column details-column">
        <div className="card-details">
          <a href={url} className="card-title" target="_blank" rel="noopener noreferrer">{title}</a>
          <br></br><br></br>
          <div className="card-extra-details">
            <table>
              <tbody>
                <tr>
                  <td><strong>Current Margin:</strong></td>
                  <td>{currentMargin}%</td>
                </tr>
                <tr>
                  <td><strong>Website Margin:</strong></td>
                  <td>{websiteMargin}%</td>
                </tr>
                <tr>
                  <td><strong>Additional Margin:</strong></td>
                  <td>{additionalMargin}%</td>
                </tr>
                <tr>
                  <td><strong>Current MRP | Website MRP:</strong></td>
                  <td>{currentMRP} | {websiteMRP}</td>
                </tr>
                <tr>
                  <td><strong>Purchase Price | Website Price:</strong></td>
                  <td>{currentPrice} | {websitePrice}</td>
                </tr>
                <tr>
                  <td><strong>Barcode:</strong></td>
                  <td>{barcode}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;
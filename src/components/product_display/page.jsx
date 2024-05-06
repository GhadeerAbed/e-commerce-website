import star_icon from "../../../public/Assets/star_icon.png";
import Image from "next/image";
import ProductImages from "../../components/product_images/page";
const ProductDisplay = ({ product }) => {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <div>
      <div>
        <div>
          <ProductImages
            images={[
              product.image,
              product.image,
              product.image,
              product.image,
            ]}
          />
        </div>
        <div>
          <Image src={product.image} alt="image" />
        </div>
      </div>
      <div>
        <h1>{product.name}</h1>
        <div>
          <ProductImages
            images={[star_icon, star_icon, star_icon, star_icon, star_icon]}
          />
          <p>(122)</p>
        </div>
        <div>
          <div>${product.old_price}</div>
          <div>${product.new_price}</div>
        </div>
        <div>
          A lightweight , usually knitted , plover shirt , close fitting and
          short .
        </div>
        <div>
          <h1>Select Size</h1>
          {sizes.map((size, index) => (
            <div key={index}>{size}</div>
          ))}
        </div>
        <button>ADD TO CART</button>
        <p>
          <span>category : </span> Women , T-Shirt , Crop Top
        </p>
        <p>
          <span>Tags : </span> Modern , Latest{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

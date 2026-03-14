import { useCart } from "../cart/data/useCart";
import { useItem } from "./useItem";



const ItemPage = () => {
  let product = useItem();
  let {addToCart} = useCart();

  const discountedPrice = product.discount
    ? (product.price * (100 - product.discount)) / 100
    : product.price;

  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="mt-16 sm:mt-20 flex flex-col md:flex-row gap-6 sm:gap-10 p-4 sm:p-6 bg-white">
      
      <div className="shrink-0 w-full md:w-1/3 h-56 sm:h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-6 grow">

        <div className="flex flex-col gap-1">
          <p className="text-gray-500 font-semibold">{product.brand}</p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">Sizes:</p>
          <div className="flex flex-wrap gap-2">
            {sizes.map(size => (
              <button
                key={size}
                className="px-3 py-1 border rounded-md hover:bg-gray-200 transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl flex-wrap">
          {product.discount ? (
            <>
              <p className="line-through text-gray-400">
                {product.price} {product.currency}
              </p>
              <p className="text-red-500 font-bold">{discountedPrice.toFixed(2)} {product.currency}</p>
            </>
          ) : (
            <p className="font-bold text-gray-800">{product.price} {product.currency}</p>
          )}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full sm:w-fit px-6 py-3 bg-[#00d1b2] text-white font-semibold rounded-lg hover:bg-[#00b89c] active:scale-95 transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ItemPage;
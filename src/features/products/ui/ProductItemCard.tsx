import { useNavigate } from "react-router";
import { Product } from "../api/productsApi";
import { useHistoryContext } from "../../profile/context/HistoryContext";
import { useCart } from "../../cart/hooks/useCart";



type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const {addToVisited} = useHistoryContext()

  const { addToCart, isInCart } = useCart();

  let isInCartBool = isInCart(product.id);

  const discountedPrice = product.discount
    ? (product.price * (100 - product.discount)) / 100
    : product.price;


  return (
    <div className="relative flex flex-col gap-3 p-3 sm:p-4 max-w-full sm:max-w-60 select-none border-0 transition">
      
      {product.discount && (
        <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-linear-to-tr from-teal-400 to-teal-500 rounded-full">
            -{product.discount}%
          </span>
        </div>
      )}

      <div className="flex justify-center items-center w-full">
        <img
          onClick={() =>{
            addToVisited(product.id);
            navigate('/items/' + product.id);
          } }
          src={product.image}
          className="h-44 sm:h-55 w-full object-contain hover:p-1 transition"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-sm sm:text-sm font-bold">{product.title}</h3>
        <p className="text-xs text-gray-600 leading-snug line-clamp-2">{product.description}</p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
        {product.discount ? (
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm font-bold text-green-600">
              ${discountedPrice.toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="text-sm font-bold text-gray-800">${product.price.toFixed(2)}</span>
        )}

        <button
          disabled={isInCartBool}
          onClick={() => addToCart(product)}
          className={"px-3 py-2 text-xs font-semibold bg-teal-500 text-white rounded-lg transition-colors cursor-pointer hover:bg-teal-600 disabled:bg-gray-500 whitespace-nowrap"}
        >
          {isInCartBool ? "В кошику" : "Купити"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
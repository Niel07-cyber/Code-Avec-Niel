
import { ShoppingCartComponent } from "@/components/ShoppingCart";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Shopping Cart</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Review your items and proceed to checkout
          </p>
        </div>
        <ShoppingCartComponent />
      </div>
    </div>
  );
};

export default Cart;

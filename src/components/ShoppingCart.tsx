
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  CreditCard,
  Tag,
  Gift
} from "lucide-react";
import { CheckoutForm } from "./CheckoutForm";

interface CartItem {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  type: 'course' | 'bundle';
  instructor: string;
  thumbnail: string;
  quantity: number;
}

export const ShoppingCartComponent = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "Complete React Development Course",
      price: 79.99,
      originalPrice: 199.99,
      type: 'course',
      instructor: "John Smith",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=60&fit=crop",
      quantity: 1
    },
    {
      id: "2",
      title: "Web Development Bundle",
      price: 149.99,
      originalPrice: 299.99,
      type: 'bundle',
      instructor: "Tech Academy",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=60&fit=crop",
      quantity: 1
    },
    {
      id: "3",
      title: "Python Machine Learning Course",
      price: 89.99,
      originalPrice: 179.99,
      type: 'course',
      instructor: "Dr. Sarah Wilson",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=60&fit=crop",
      quantity: 1
    },
    {
      id: "4",
      title: "Advanced JavaScript & Node.js",
      price: 94.99,
      originalPrice: 189.99,
      type: 'course',
      instructor: "Michael Chen",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=60&fit=crop",
      quantity: 1
    }
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save20") {
      setAppliedCoupon("SAVE20 - 20% off");
      setCouponCode("");
    } else if (couponCode.toLowerCase() === "student") {
      setAppliedCoupon("STUDENT - 15% off");
      setCouponCode("");
    } else {
      alert("Invalid coupon code");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const couponDiscount = appliedCoupon ? subtotal * 0.2 : 0;
  const total = subtotal - couponDiscount;

  const handlePaymentSuccess = () => {
    alert("Payment successful! Thank you for your purchase.");
    setCartItems([]);
    setShowCheckout(false);
  };

  if (showCheckout) {
    return (
      <CheckoutForm
        total={total}
        onBack={() => setShowCheckout(false)}
        onPaymentSuccess={handlePaymentSuccess}
      />
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="w-full dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-900 dark:text-white text-lg sm:text-xl">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Shopping Cart ({cartItems.length} items)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full sm:w-16 h-32 sm:h-10 object-cover rounded"
              />
              <div className="flex-1 w-full">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">by {item.instructor}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className={item.type === 'bundle' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'}>
                    {item.type === 'bundle' ? <Gift className="h-3 w-3 mr-1" /> : null}
                    {item.type}
                  </Badge>
                  {item.originalPrice && (
                    <span className="text-xs text-gray-500 line-through dark:text-gray-400">
                      ${item.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between w-full sm:w-auto sm:flex-col sm:items-end space-y-2 sm:space-y-2">
                <div className="flex items-center space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8 p-0 dark:border-gray-600"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium w-8 text-center text-gray-900 dark:text-white">
                    {item.quantity}
                  </span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 p-0 dark:border-gray-600"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="font-semibold text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <Separator className="dark:bg-gray-600" />

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <Button onClick={applyCoupon} variant="outline" className="dark:border-gray-600 w-full sm:w-auto">
              <Tag className="h-4 w-4 mr-1" />
              Apply
            </Button>
          </div>

          {appliedCoupon && (
            <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/30 rounded-md">
              <span className="text-sm text-green-700 dark:text-green-300">✅ {appliedCoupon}</span>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => setAppliedCoupon(null)}
                className="text-green-700 dark:text-green-300"
              >
                Remove
              </Button>
            </div>
          )}

          <Separator className="dark:bg-gray-600" />

          <div className="space-y-2">
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {couponDiscount > 0 && (
              <div className="flex justify-between text-green-600 dark:text-green-400">
                <span>Discount:</span>
                <span>-${couponDiscount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => setShowCheckout(true)}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Proceed to Checkout
          </Button>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            30-day money-back guarantee • Secure payment • Instant access
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

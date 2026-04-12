import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import "./Verify.css";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url, setCartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await axios.post(url + "api/order/verify", {
          success,
          orderId,
        });

        if (response.data.success) {
          // Payment confirmed — clear local cart and go to My Orders
          setCartItems({});
          navigate("/myorders");
        } else {
          // Payment failed or cancelled — back to cart
          navigate("/cart");
        }
      } catch (error) {
        console.error("Verification error:", error);
        navigate("/cart");
      }
    };

    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="verify-spinner"></div>
      <p>Verifying your payment, please wait...</p>
    </div>
  );
};

export default Verify;
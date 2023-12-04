import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const localStorageData = JSON.parse(localStorage.getItem("enrolledItem"));

  const totalPrice = localStorageData.price;
  console.log(totalPrice);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          enrollemail: user.email,
          enrollprice: totalPrice,
          transactionId: paymentIntent.id,
          enrolldate: new Date(),
          enrollstatus: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved");
        console.log("payment saved", res.data);
        // refetch();
        if (res.data?.insertedId) {
          const combinedObject = { ...payment, ...localStorageData };
          console.log(combinedObject);
          const enrollRes = await axiosSecure.post(
            "/enrollClass",
            combinedObject
          );

          // Check if the enrollment was successful
          if (enrollRes.data?.enrollmentId) {
            console.log("Enrollment successful");

            // Remove local storage data
            localStorage.removeItem("enrolledItem");
          } else {
            console.error("Enrollment failed");
          }
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Payment successfully Done",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/myEnrollClass");
        } else {
          console.error("Payment not inserted successfully");
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div className="mb-4">
        <label
          htmlFor="cardElement"
          className="block text-sm font-medium text-gray-700"
        >
          Card Details
        </label>
        <div className="mt-1">
          <CardElement
            id="cardElement"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Pay
      </button>

      <p className="text-red-600 mt-2">{error}</p>

      {transactionId && (
        <p className="text-green-600 mt-2">
          Your transaction id: {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;

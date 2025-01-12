import DashboardContainer from "../../../components/dashboardContainer/DashboardContainer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)

const Payment = () => {
  return (
    <DashboardContainer>
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="min-w-96 w-[600px]">
          <h3 className="uppercase text-3xl font-semibold text-center mb-6">Payment</h3>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm/>
            </Elements>
          </div>
        </div>
      </section>
    </DashboardContainer>
  );
};

export default Payment;

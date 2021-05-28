import { loadStripe } from '@stripe/stripe-js'; // Lib do stripe para o front-end

export async function getStripeJs() {
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return stripeJs;
}
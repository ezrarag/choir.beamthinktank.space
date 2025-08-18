import Stripe from 'stripe'

// Only create client if environment variables are available
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

export const stripe = stripeSecretKey 
  ? new Stripe(stripeSecretKey, { apiVersion: '2023-10-16' })
  : null

export const createCheckoutSession = async (amount: number, metadata: any) => {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'BEAM Choir Foundation Donation',
              description: 'Supporting vocal arts and music education',
            },
            unit_amount: amount * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata,
    })

    return session
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

import createStripe from 'stripe-client'

const stripe = createStripe(
  'pk_test_51Kq3XgDWUpSYzEBP95iHqmupa6m3eOkYU2ZbfRJhi5xBgJsBRDkkYRujfpstJ4YSnBUTvzr5PW910E4qgdPmyv4J00IIY4bAlR'
)

export const cardTokenRequest = (card) => stripe.createToken({ card })

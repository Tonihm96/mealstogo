import createStripe from 'stripe-client'
import { host } from '../../utils/env'

const stripe = createStripe(
  'pk_test_51Kq3XgDWUpSYzEBP95iHqmupa6m3eOkYU2ZbfRJhi5xBgJsBRDkkYRujfpstJ4YSnBUTvzr5PW910E4qgdPmyv4J00IIY4bAlR'
)

export const cardTokenRequest = (card) => stripe.createToken({ card })

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({ token, name, amount }),
    method: 'POST'
  }).then((res) => {
    if (res.status > 200) {
      console.log(res.statusText)
      return Promise.reject('Something went wrong processing your payment.')
    }
    return res.json()
  })
}

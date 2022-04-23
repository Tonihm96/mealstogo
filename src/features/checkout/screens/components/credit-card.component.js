import React from 'react'
import { LiteCreditCardInput } from 'react-native-credit-card-input'
import { cardTokenRequest } from '../../../../services/checkout/checkout.service'

export const CreditCardInput = ({ name, onSuccess, onError }) => {
  const onChange = async (formData) => {
    const { values, status } = formData
    const isIncomplete = Object.values(status).includes('incomplete')
    const expiry = values.expiry.split('/')
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name
    }
    if (!isIncomplete) {
      // tenta fazer a request do token do cartão de crédito
      try {
        const info = await cardTokenRequest(card)
        onSuccess(info)
      } catch (err) {
        // captura erro retornado pela api do stripe
        onError(err)
      }
    }
  }
  return <LiteCreditCardInput onChange={onChange} />
}

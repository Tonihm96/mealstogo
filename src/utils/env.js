const liveHost = 'https://us-central1-mealstogo-7c4a7.cloudfunctions.net'
const localHost = 'http://192.168.0.200:5001/mealstogo-7c4a7/us-central1'

export const isDevelopment = process.env.NODE_ENV === 'development'

export const host = isDevelopment ? localHost : liveHost

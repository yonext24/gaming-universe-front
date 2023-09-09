/* eslint-disable @typescript-eslint/consistent-type-assertions */

export const isProduction = process.env.NODE_ENV === 'production'

export const mainUrl = isProduction ? '' : 'http://localhost:5000'

export const endpoints = {
  PRODUCTS: {
    url: ''
  },

  AUTH: {
    LOGOUT: {
      URL: mainUrl + '/auth/session',
      OPTIONS: {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
      } as RequestInit
    },
    CHECK_SESSION: {
      URL: mainUrl + '/auth/session',
      OPTIONS: {
        method: 'GET',
        credentials: 'include'
      } as RequestInit
    }
  }

}

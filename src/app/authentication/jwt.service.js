
export default class JWTService {
  constructor ($window) {
    this.$window = $window
  }

  setAccessToken (token) {
    // this.$window.localStorage.setItem('token_date', Date.now())
    this.$window.localStorage.setItem('access_token', token)
  }

  setRefreshToken (token) {
    this.$window.localStorage.setItem('refresh_token', token)
  }

  getAccessToken () {
    // let date = this.$window.localStorage.getItem('token_date')

    // On teste la validité du token
    // Si la dernière requête était il y a plus de 30 min (1800000 ms)
    // on supprime le token, sinon on actualise la date
    /* if (date && Date.now() - parseInt(date) > 1800000) {
      this.$window.localStorage.removeItem('token')
    } else {
      this.$window.localStorage.setItem('token_date', Date.now())
    } */

    return this.$window.localStorage.getItem('access_token')
  }

  getRefreshToken () {
    return this.$window.localStorage.getItem('refresh_token')
  }

  removeAccessToken () {
    this.$window.localStorage.removeItem('access_token')
  }

  removeRefreshToken () {
    this.$window.localStorage.removeItem('refresh_token')
  }

  removeTokens () {
    this.removeAccessToken()
    this.removeRefreshToken()
  }
}

JWTService.$inject = ['$window']

import route from './routes'

export default function config ($httpProvider, $stateProvider, $urlRouterProvider) {
  // Add Authorization header with JWT if user is authenticated
  $httpProvider.interceptors.push(['JWTService', '$injector', (JWTService, $injector) => {
    return {
      request: config => {
        let token = JWTService.getAccessToken()
        if (token != null) {
          config.headers.authorization = 'Bearer ' + token
        }

        return config
      },
      responseError: rejection => {
        if (rejection.status === 401) {
          let AuthService = $injector.get('AuthService')
          if (JWTService.getRefreshToken() != null) {
            AuthService.refresh()
          } else {
            AuthService.logout()
          }
        }
      }
    }
  }])

  // Application routes
  route($stateProvider)
  $urlRouterProvider.otherwise('/')
}

config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider']

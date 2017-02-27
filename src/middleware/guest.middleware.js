
export default function GuestMiddleware ($state, AuthService) {
  AuthService.check().then(() => {
    if ($state.$current.parent.abstract) {
      $state.go('home')
    } else {
      $state.go($state.current)
    }
  })
}

GuestMiddleware.$inject = ['$state', 'AuthService']

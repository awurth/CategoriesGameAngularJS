
export default function TopbarDirective ($state, AuthService) {
  return {
    restrict: 'E',
    template: require('./topbar.directive.html'),
    link: (scope) => {
      scope.logout = () => {
        AuthService.logout()
        $state.go('home')
      }
    }
  }
}

TopbarDirective.$inject = ['$state', 'AuthService']

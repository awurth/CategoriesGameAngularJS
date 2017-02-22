
import HomeController from 'app/home/home.controller'
import LoginController from 'app/authentication/login.controller'
import RegisterController from 'app/authentication/register.controller'

export default function route ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('app/home/home.html'),
      controller: HomeController,
      controllerAs: 'home'
    })
    .state('login', {
      url: '/login',
      template: require('app/authentication/login.html'),
      controller: LoginController,
      controllerAs: 'login'
    })
    .state('register', {
      url: '/register',
      template: require('app/authentication/register.html'),
      controller: RegisterController,
      controllerAs: 'register'
    })
}

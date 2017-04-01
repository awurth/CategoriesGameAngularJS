import GuestMiddleware from 'middleware/guest.middleware'
import AuthMiddleware from 'middleware/auth.middleware'

import HomeController from 'app/home/home.controller'
import LoginController from 'app/authentication/login.controller'
import RegisterController from 'app/authentication/register.controller'

import AccountGamesController from 'app/account/account.games.controller'

import SubjectsController from 'app/subject/subjects.controller'
import AddSubjectController from 'app/subject/subjects.add.controller'
import EditSubjectController from 'app/subject/subjects.edit.controller'

import GamesController from 'app/game/games.controller'
import CreateGameController from 'app/game/games.create.controller'
import PlayGameController from 'app/game/games.play.controller'

export default function route ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('app/home/home.html'),
      controller: HomeController,
      controllerAs: 'Home'
    })
    .state('login', {
      url: '/login',
      template: require('app/authentication/login.html'),
      controller: LoginController,
      controllerAs: 'Login',
      onEnter: GuestMiddleware
    })
    .state('register', {
      url: '/register',
      template: require('app/authentication/register.html'),
      controller: RegisterController,
      controllerAs: 'Register',
      onEnter: GuestMiddleware
    })
    .state('account', {
      abstract: true,
      url: '/account',
      onEnter: AuthMiddleware
    })
    .state('account.games', {
      url: '/games',
      template: require('app/account/account.games.html'),
      controller: AccountGamesController,
      controllerAs: 'AccountGames'
    })
    .state('subjects', {
      abstract: true,
      url: '/subjects',
      onEnter: AuthMiddleware
    })
    .state('subjects.all', {
      url: '',
      template: require('app/subject/subjects.html'),
      controller: SubjectsController,
      controllerAs: 'Subjects'
    })
    .state('subjects.add', {
      url: '/add',
      template: require('app/subject/subjects.add.html'),
      controller: AddSubjectController,
      controllerAs: 'AddSubject'
    })
    .state('subjects.edit', {
      url: '/:id/edit',
      template: require('app/subject/subjects.edit.html'),
      controller: EditSubjectController,
      controllerAs: 'EditSubject'
    })
    .state('games', {
      abstract: true,
      url: '/games'
    })
    .state('games.all', {
      url: '',
      template: require('app/game/games.html'),
      controller: GamesController,
      controllerAs: 'Games',
      onEnter: AuthMiddleware
    })
    .state('games.create', {
      url: '/new',
      template: require('app/game/games.create.html'),
      controller: CreateGameController,
      controllerAs: 'CreateGame',
      onEnter: AuthMiddleware
    })
    .state('games.play', {
      url: '/:id',
      template: require('app/game/games.play.html'),
      controller: PlayGameController,
      controllerAs: 'PlayGame'
    })
}

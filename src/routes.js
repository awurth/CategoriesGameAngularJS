
import HomeController from 'app/home/home.controller'
import LoginController from 'app/authentication/login.controller'
import RegisterController from 'app/authentication/register.controller'
import SubjectsController from 'app/subject/subjects.controller'
import AddSubjectController from 'app/subject/subjects.add.controller'
import EditSubjectController from 'app/subject/subjects.edit.controller'
import GamesController from 'app/game/games.controller'

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
      controllerAs: 'Login'
    })
    .state('register', {
      url: '/register',
      template: require('app/authentication/register.html'),
      controller: RegisterController,
      controllerAs: 'Register'
    })
    .state('subjects', {
      abstract: true,
      url: '/subjects'
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
      controllerAs: 'Games'
    })
}

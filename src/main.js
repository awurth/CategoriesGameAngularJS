import 'assets/app.scss'

import angular from 'angular'
import resource from 'angular-resource'
import router from 'angular-ui-router'

import config from './config'
import JWTService from 'app/authentication/jwt.service'
import AuthService from 'app/authentication/authentication.service'
import User from 'app/user/user'

import Subject from 'app/subject/subject'
import TopbarDirective from 'app/topbar/topbar.directive'
import FormErrorsDirective from 'app/common/form-errors.directive'
import FieldErrorDirective from 'app/common/field-error.directive'

export default angular.module('app', [resource, router])
  .constant('API', {
    url: 'http://localhost/private/find-the-words/public/api'
  })
  .factory('User', User)
  .service('JWTService', JWTService)
  .service('AuthService', AuthService)
  .config(config)
  .factory('Subject', Subject)
  .directive('topbar', TopbarDirective)
  .directive('formErrors', FormErrorsDirective)
  .directive('fieldError', FieldErrorDirective)

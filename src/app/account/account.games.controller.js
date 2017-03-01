
export default class AccountGamesController {
  constructor (AuthService, UserGame, Game) {
    this.AuthService = AuthService
    this.UserGame = UserGame
    this.Game = Game

    this.user = AuthService.getUser()
    this.loadGames()
  }

  formatSubjects (subjects) {
    let string = ''
    subjects.forEach((subject, index) => {
      string += subject.name + (index === subjects.length - 1 ? '' : ', ')
    })

    return string
  }

  parseDate (date) {
    return Date.parse(date)
  }

  loadGames () {
    this.UserGame.query({ user_id: this.user.id }, games => {
      this.games = games
    })
  }

  deleteGame (game) {
    this.Game.delete({ id: game.id }, () => {
      this.loadGames()
    })
  }
}

AccountGamesController.$inject = ['AuthService', 'UserGame', 'Game']

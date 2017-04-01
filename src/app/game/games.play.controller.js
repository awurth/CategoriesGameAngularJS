
export default class PlayGameController {
  constructor ($stateParams, AuthService, Game, GameRound) {
    this.$stateParams = $stateParams
    this.AuthService = AuthService
    this.Game = Game
    this.GameRound = GameRound

    this.user = AuthService.getUser()
    this.loadGame()
  }

  loadGame () {
    this.Game.get({ id: this.$stateParams.id }, game => {
      this.game = game
      this.owner = game.user_id === this.user.id
    })

    this.loadRounds()
  }

  loadRounds () {
    this.GameRound.query({ game_id: this.$stateParams.id, user_id: this.user.id }, rounds => {
      this.rounds = rounds
    })
  }

  createRound () {
    this.GameRound.save({ game_id: this.game.id }, () => {
      this.loadRounds()
    })
  }

  saveAnswer (round, subject, answer) {
    this.GameRound.patch({
      game_id: this.$stateParams.id,
      round_id: round.id,
      subject_id: subject.id
    }, {
      value: answer
    })
  }

  getValue (values, subject) {
    let value = ''
    values.forEach(v => {
      if (v.subject_id === subject.id) {
        value = v.value
      }
    })

    return value
  }
}

PlayGameController.$inject = ['$stateParams', 'AuthService', 'Game', 'GameRound']


export default class CreateGameController {
  constructor ($state, Game, Subject) {
    this.$state = $state
    this.Game = Game
    this.Subject = Subject

    this.game = {
      subjects: []
    }

    this.loadSubjects()
  }

  loadSubjects () {
    this.Subject.query(subjects => {
      this.subjects = subjects
    })
  }

  create () {
    this.Game.save(this.game, () => {
      this.$state.go('home')
    }, response => {
      this.errors = response.data
    })
  }
}

CreateGameController.$inject = ['$state', 'Game', 'Subject']

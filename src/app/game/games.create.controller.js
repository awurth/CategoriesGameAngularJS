
export default class CreateGameController {
  constructor ($state, $resource, API, Game, Subject) {
    this.$state = $state
    this.$resource = $resource
    this.API = API
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
    this.Game.save(this.game, (response, headers) => {
      this.$resource(this.API.url + headers('Location')).get((game) => {
        this.$state.go('games.play', { id: game.id })
      })
    }, response => {
      this.errors = response.data
    })
  }
}

CreateGameController.$inject = ['$state', '$resource', 'API', 'Game', 'Subject']

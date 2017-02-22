
export default class GamesController {
  constructor (Game) {
    this.Game = Game

    this.loadGames()
  }

  formatSubjects (subjects) {
    let string = ''
    subjects.forEach((subject, index) => {
      string += subject.name + (index === subjects.length - 1 ? '' : ', ')
    })

    return string
  }

  loadGames () {
    this.Game.query(games => {
      this.games = games
    })
  }

  deleteGame (game) {
    this.Game.delete({ id: game.id }, () => {
      this.loadGames()
    })
  }
}

GamesController.$inject = ['Game']

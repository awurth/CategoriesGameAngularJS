
export default function GameRound ($resource, API) {
  return $resource(API.url + '/games/:game_id/rounds/:round_id', {
    game_id: '@game_id',
    round_id: '@round_id'
  }, {
    update: { method: 'PUT' },
    patch: { method: 'PATCH' }
  })
}

GameRound.$inject = ['$resource', 'API']

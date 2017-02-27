
export default function UserGame ($resource, API) {
  return $resource(API.url + '/users/:user_id/games/:game_id', {
    user_id: '@user_id',
    game_id: '@game_id'
  }, {
    update: { method: 'PUT' }
  })
}

UserGame.$inject = ['$resource', 'API']

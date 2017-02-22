
export default function Subject ($resource, API) {
  return $resource(API.url + '/subjects/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  })
}

Subject.$inject = ['$resource', 'API']

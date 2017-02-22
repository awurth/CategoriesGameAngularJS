
export default class EditSubjectController {
  constructor ($state, $stateParams, Subject) {
    this.$state = $state
    this.$stateParams = $stateParams
    this.Subject = Subject

    this.loadSubject()
  }

  loadSubject () {
    this.Subject.get({ id: this.$stateParams.id }, subject => {
      this.subject = subject
    }, () => {
      this.$state.go('subjects.all')
    })
  }

  update () {
    this.Subject.update(this.subject, () => {
      this.$state.go('subjects.all')
    }, response => {
      this.errors = response.data
    })
  }
}

EditSubjectController.$inject = ['$state', '$stateParams', 'Subject']

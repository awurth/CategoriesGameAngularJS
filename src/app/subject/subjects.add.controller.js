
export default class AddSubjectController {
  constructor ($state, Subject) {
    this.$state = $state
    this.Subject = Subject

    this.subject = {
      name: ''
    }
  }

  save () {
    this.Subject.save(this.subject, () => {
      this.$state.go('subjects.all')
    }, response => {
      this.errors = response.data
    })
  }
}

AddSubjectController.$inject = ['$state', 'Subject']


export default class SubjectsController {
  constructor (Subject) {
    this.Subject = Subject

    this.subjects = []
    this.loadSubjects()
  }

  loadSubjects () {
    this.Subject.query((subjects) => {
      this.subjects = subjects
    })
  }

  deleteSubject (subject) {
    this.Subject.delete(subject, () => {
      this.loadSubjects()
    })
  }
}

SubjectsController.$inject = ['Subject']

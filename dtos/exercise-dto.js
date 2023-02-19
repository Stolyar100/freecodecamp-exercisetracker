class ExerciseDto {
  constructor(username, exercise) {
    const { description, duration, date, _id } = exercise
    const dateString = date.toDateString()

    this.username = username
    this.description = description
    this.duration = duration
    this.date = dateString
    this._id = _id
  }
}

export default ExerciseDto

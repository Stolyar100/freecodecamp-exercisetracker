class ExerciseDto {
  constructor(user, exercise) {
    const { description, duration, date } = exercise
    const { username, _id } = user
    const dateString = new Date(date).toDateString()

    this.username = username
    this.description = description
    this.duration = duration
    this.date = dateString
    this._id = _id
  }
}

export default ExerciseDto

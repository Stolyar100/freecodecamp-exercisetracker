class LogDto {
  constructor(user, exercises) {
    const { username, _id } = user
    const exercisesCount = exercises.length

    this.username = username
    this._id = _id
    this.count = exercisesCount
    this.log = exercises
  }
}

export default LogDto

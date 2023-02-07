const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const trainerSchema = new Schema({
  username: {
    type: String,
    required: "A username is required",
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: "An email is required",
    unique: true,
    match: [/.+@.+\..+/, "Must match an email format"]
  },
  password: {
    type: String,
    required: "A password is required",
    minlength: 7,
  },
  pokemon: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pokemon'
    }
  ]
})

trainerSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

trainerSchema.methods.isCorrectPassword = function(password) {
  return bcrypt.compare(password, this.password)
}

const Trainer = model('Trainer', trainerSchema)

module.exports = Trainer
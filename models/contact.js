import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  form: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  }
})

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)

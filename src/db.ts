const mongoose = require('mongoose')

export default async () => {
  await mongoose.connect(
    'mongodb+srv://damir:qwer1234@cluster0.vmuus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  console.log('MongoDB connected')
}

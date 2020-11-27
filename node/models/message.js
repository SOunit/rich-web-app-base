const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/messages', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once('open', () => {
    console.log('mongo db connect');
  })
  .on('error', (error) => {
    console.warn('Warning', error);
  });

const Schema = mongoose.Schema;
const MessageSchema = new Schema({ message: String });
const Message = mongoose.model('message', MessageSchema);

module.exports = Message;

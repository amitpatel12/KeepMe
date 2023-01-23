const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
// mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://amitpatel12:amitpatel12@cluster0.szzrgme.mongodb.net/KeepMe?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, err =>{console.log(err);}
  );
 

  // mongodb+srv://amitpatel12:amitpatel12@cluster0.szzrgme.mongodb.net/KeepMe?retryWrites=true&w=majority
  // mongodb+srv://amitpatel12:<password>@cluster0.szzrgme.mongodb.net/KeepMe?retryWrites=true&w=majority
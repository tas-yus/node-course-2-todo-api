const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove(() => {
//
// });

todo.findOneAndRemove({_id: '598d34d19e194febe012a53c'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('598d34d19e194febe012a53c').then((todo) => {
  console.log(todo);
});

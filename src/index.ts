import {User} from './models/User';

const user = new User({name: 'myname', age: 20});

user.on('change', ()=>{
  console.log('Change1')
});
user.on('change', ()=>{
  console.log('Change2')
});
user.on('save', ()=>{
  'Save triggered'
});

user.trigger('change');

/* user.set({name: 'newname', age: 35});

console.log(user.get('name'));

console.log(user.get('age')); */
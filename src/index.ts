import axios from 'axios';
import {User} from './models/User';

//const user = new User({id:1});

//user.fetch();    

//user. set({name:'ALESSANDRO', age:88});
const user = new User({ name: 'new record', age:0});
user.save();

/* axios.post('http://localhost:3000/users', {
  name:'name',
  age:20

}); */

//axios.get('http://localhost:3000/users/1');

/* import {User} from './models/User';

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

user.trigger('change'); */

/* user.set({name: 'newname', age: 35});

console.log(user.get('name'));

console.log(user.get('age')); */
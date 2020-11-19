import axios, { AxiosResponse } from 'axios';
// we created an interface with option properties
interface UserProps {
  id?:number,
  name?: string,
  age?:number
}

// create a type alias
type Callback = () =>void;

// created a class User
export class User {

  // events is going to be an object, we do not know what the different keys are going to be,
  // but we do know they will be strings and all this different keys are going to point at values
  // that are an array of Callback functions
  events: {[key: string]: Callback[]}= {};

  // the constructor has a data arguments who cointains the interface with the interested props
  constructor(private data: UserProps){}

  // we created a get method to retrieces the properties
  get(propName:string): (number | string){
    return this.data[propName];
  }

  // created a set method
  // This basically says:
  // take all the properties on update and alle the values on there and just copy paste over
  // onto this.data and override all the properties on this.data
  set(update: UserProps):void{
    Object.assign(this.data, update);
  }

  // creating the method on with a string as the first argument and a function as the second
  // we are saying that Callback is going to be a function with no argument and no return value
  on(eventName: string, callback: Callback): void{
    const handlers= this.events[eventName] || []; 
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName:string):void{
    const handlers = this.events[eventName];

    if(!handlers|| handlers.length ===0){
      return;
    }

    handlers.forEach(callback =>{
      callback();
    })
  }

  fetch():void{
    // request of the current user using the id
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
    .then((response: AxiosResponse):void=>{
      this.set(response.data);
    })
  }

  save():void{

    const id = this.get('id');
    if (id){
      //put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    }else{
      //post
      axios.post('http://localhost:3000/users',this.data);
    }
  }
}
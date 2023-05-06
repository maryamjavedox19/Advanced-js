//GETTERS AND SETTERS 

// const person={
//     firstName: 'mosh',
//     lastName: 'mark',
//     get fullName(){
//     return `${person.firstName} ${person.lastName}`
// },

// set fullName(value){
//     const part=value.split(' ');
//     this.firstName=part[0];
//     this.lastName=part[1];
// }
// };

// person.fullName="john smith";
// console.log(person);


// with var scope is not limited to its block it is limited to its function instead

function start(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);
}

start();

// var declared globally attach variable to window object
var color='red';


// cloning an object
const circle={
    radius:1,
    draw(){
        console.log('draw');
    }
};

//CLONING WITH OLD METHOD

// const another={};
// for(let key in circle)
// another[key]=circle[key];
// console.log(another);

//CLONING WITH NEW METHOD
// const another=Object.assign({
//     color:'yellow'          //this will have circle object and additional property color yellow
// }, circle);                 //if dont want additional property leave the bracket empty
// console.log(another);


//ANOTHER WAY TO CLONE OBJECT
const another={ ...circle};
console.log(another);



//THIS KEYWORD
//method->obj
// const video={
//     title: 'a',
//     play(){
//         console.log(this);    //referencing to object itself
//     }
// };

// video.stop=function(){      //stop is a method in video object
//     console.log(this);
// };

// video.stop();

// play()  //when we call the stand alone function outside of an object this by default return the reference of global oject(window obj)


//BIND METHOD
// const person={
//     name: "mosh",
//     walk(){
//         console.log(this);
// }
// }

// person.walk();
// const walk=person.walk.bind(person);    //bind method can set value of this permanently
// walk();    //so we can call it here w/o reference to person object




//function -> global (window, global)
// const video={
//     title: 'a',
//     play(){
//         console.log(this);  
//     }
// };

// function playVideo(){      //we get window object
//     console.log(this);
// };

// playVideo();



//constructor function
// const video={
//     title: 'a',
//     play(){
//         console.log(this);  
//     }
// };

// function Video(title){   
//     this.title=title;          //will reference a new empty object
//     console.log(this);
// };

// const v=new Video('b');




const video={
        title: 'a',
        tags:['a', 'b', 'c'],
        showTag(){
           this.tags.forEach(function(tag){
            console.log(this.title, tag);
           }, this);
        }
    };

    video.showTag();




//TEMPLATE LITERALS
const name="ali";
const templit=`this is my
'first' message to ${name}`;          //to break line
console.log(templit);   



//ARRAY FILTER
//to get positive numbers:
// const numbers=[1,-1,2,3];
// const filtered=numbers.filter(value=>value>=0);
// console.log(filtered);



// MAP

//MAPING INTO STRINGS
// const numbers=[1,-1,2,3];
// const filtered=numbers.filter(n => n>=0);
// const items=filtered.map(n => '<Li>' + n + '</Li>');
// const html= '<ul>' + items.join('') + '</ul>';    //to make it a string
// console.log(html);


////MAPING INTO OBJECTS
// const numbers=[1,-1,2,3];
// const filtered=numbers.filter(n => n>=0);
// const items=filtered.map(n => {
//     const obj={value: n};
//     return obj;
// });

// console.log(items);



//SAME AS ABOVE BUT SHORTER
// const numbers=[1,-1,2,3];
// const filtered=numbers.filter(n => n>=0);
// //for returning object we have to put in parenthesis
// const items=filtered.map(n => ({value: n}));              //if we have only one statement we can exclude the return keyword 
// console.log(items);


//CHAIN METHOD 
// const numbers=[1,-1,2,3];
// const items=numbers
// .filter(n => n>=0)
// .map(n => ({value: n}))
// .filter(obj=>obj.value>1)
// .map(obj => obj.value);
// console.log(items);



//ARRAY REDUCE
// const numbers=[1,-1,2,3];
// //CALCULATING SUM OF ALL THESE NUMBERS
// let sum=0;
// for(let n of numbers)
//     sum+=n;

//     console.log(sum);



//using reduce method
const numbers=[1,-1,2,3];  
const sum=numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
}, 0);  //0 is initial value, if we don't set initial value it will automatically set the first value of array to initial value

console.log(sum);




const jobs=[
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false}
];

// const activejobs=jobs.filter(function(job) {return job.isActive;});
const activejobs=jobs.filter(job => job.isActive);



const person={
    talk(){
        var self=this;
        setTimeout(()=>{         //arrow functions dont rebind the this keyword, if we had used a normal function it would have give window object 
            console.log("this", this);
        }, 1000);
    }
};
person.talk();



//DESTRUCTURNG OBJECT
const adress={
    street:'',
    country:'',
    city:''
};
// const street=adress.street;
// const city=adress.city;
// const country=adress.country;

const {street, city, country: ct}=adress;  //equivalent to above three lines 



//SPREAD 
const first=[1,2,3];
const second=['a', 'b', 'c'];
const combined=[...first, 'x', ...second, 'y'];
console.log(combined);




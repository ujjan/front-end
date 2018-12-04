
const arr = [1,2,3,4,5]

arr.push(6);

console.log(arr)

ayaz = {
    name: 'ali',
    age:    25
};

console.log(ayaz);


str = '12.6030';
str2 = 'ayaz';

result = str.concat(' ',str2);
console.log(result);

str = Number(str);

str = Math.ceil(Math.random()*100 +1);
console.log(Number(str));
console.log(typeof str);
console.log(str.toFixed(2)); 

const name = 'ayaz';
const age = 32;
const city = 'karlskoga';


html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li></li>
    </ul>
`;

document.body.innerHTML = html



const person = {
    firstName: 'ayaz',
    lastName: 'sli',
    age: 31,
    hobbies:['bobycar', 'games','gym'],
    collection:{
        games: 'GOT',
        phones: 'samsung'
    },
    getBirthday: function(){
        return 1986;
    }
}


function myName( firstName = 'Ayaz', lastName= 'Ali'){
    return `My full name is: ${firstName} ${lastName}`;
}

//console.log(myName());

// IIFEs Functions

 (function(name){
    console.log(`Hello Mr. ${name}`)
})('Ayaz Ujjan'); 

todo = {
    add: function(){
        console.log('add');
    }
}

todo.delete = function(){
    console.log('Delete');
}

//console.log(todo)
//window.location.href = "http://google.com"
//window.location.reload();



console.log(window.navigator.appVersion); 


document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(2)').style.color = 'red';



const lis = document.getElementsByClassName('collection-item');

lis[0].style.color = 'blue';
lis[3].textContent = 'I am changed'


const tags = document.getElementsByTagName('ul')

console.log(tags)


const uls = document.querySelector('ul');
const odd = document.querySelectorAll('li:nth-child(odd)');

const even = document.querySelectorAll('li:nth-child(even)');

odd.forEach(function(odd, index){
    odd.textContent = `${ index }: NAH`;
    odd.style.background = '#ccc'
});

even.forEach(function(even, index){
    even.textContent = `${ index }: YEEEEH`;
    even.style.background = '#f4f4f4';
});

const li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-li';
li.setAttribute('title','new-item');

li.appendChild(document.createTextNode('Hello baby'));

let link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.href = '#';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

uls.appendChild(li);




 const li2 = document.createElement('li');
 li2.className = 'collection-item';
 li2.appendChild(document.createTextNode('Baby'));

 const link2 = document.createElement('a');
 link2.className = 'delete-item secondary-content';
 link2.href = '#';
 link2.innerHTML = '<i class="fa fa-remove"></i>'
 li2.appendChild(link2);

 uls.appendChild(li2);


 const newheading = document.createElement('h2');
 newheading.className = 'task-title';
 newheading.appendChild(document.createTextNode('Tast List'));

 const oldheading = document.getElementById('task-title')

 const parent = document.querySelector('.card-action');

 parent.replaceChild(newheading, oldheading);




console.log(oldheading);

const lis2 = document.querySelectorAll('li');
const uls2 = document.querySelector('ul');

uls2.removeChild(lis2[5 ]); 




// ADD ITEM
document.querySelector('.btn').addEventListener('click', function(e){

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.id = 'new-li';
    li.setAttribute('title','new-item');
    let value = document.getElementById('task').value;
    li.appendChild(document.createTextNode(value));

    let link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.href = '#';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    const ul = document.querySelector('ul');
    ul.appendChild(li);

    e.preventDefault();


}); 

// REMOVE ALL

document.querySelector('.clear-tasks').addEventListener('click', function(e){
    const ul = document.querySelector('ul');
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    e.preventDefault();

});


// delete via cross (X) 
const deleteItem = document.querySelector('.container');

deleteItem.addEventListener('click', delItem);

function delItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
    
}


// store at local storage

document.querySelector('.btn').addEventListener('click', function(e){

    const task = document.getElementById('task').value;

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

    e.preventDefault();
});

const store =JSON.parse(localStorage.getItem('tasks')) ;


store.forEach(function(task){
    console.log(task);
});
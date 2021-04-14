const books = [
    {author:"J.R.R Tolkien",title:"The Hobbit",citita: true},
    {author:"Warwick Deeping",title:"Sorrell si fiul",citita: false},
    {author:"Voltaire",title:"Candid sau optimismul",citita: false},
    {author:"Martha Hall Kelly",title:"Trandafirii pierduti",citita: true},
    {author:"Hector Malot",title:"Singur pe lume",citita: true},
    {author:"Nicoara Potcoava",title:"Mihail Sadoveanu",citita: false}


];

const container = document.getElementById('container');
const list = document.createElement('ul');


list.setAttribute('id','list');

for(let book of books ) {
    const listItem = document.createElement('li');
    let img = document.createElement('img');
    img.src = 'https://image.shutterstock.com/image-photo/small-book-hand-on-white-260nw-101725723.jpg';
   
    book.image = img.src  ;
    listItem.innerHTML = book.title + ' wrote by ' + book.author; 
    listItem.appendChild(img);
    list.appendChild(listItem);
    if(book.citita) {
        listItem.style.color = "red";
    }
    else listItem.style.color = "blue";
}
container.appendChild(list);

console.log(books);
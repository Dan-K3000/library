let myLibrary = [];
const newBook = document.forms['newBook'];
const list = document.querySelector("#page2 ul");

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const author = newBook.querySelector('input[id="author"]').value;
  const title = newBook.querySelector('input[id="title"]').value;
  const pages = newBook.querySelector('input[id="pages"]').value;
  const read = newBook.querySelector('input[id="read"]').checked;
  const book = new Book(author, title, pages, read);
  myLibrary.push(book);
  pushToDOM(myLibrary[myLibrary.length-1]);
  newBook.reset();
}

newBook.addEventListener('submit', function(e){
  e.preventDefault();
  addBookToLibrary();

});


function pushToDOM(book){
  const li = document.createElement('li');

  const inlineRead = document.createElement('input');
  inlineRead.type = 'checkbox';
  inlineRead.className = 'checkBox';
  inlineRead.checked = book.read;

  const inlineTitle = document.createElement('span');
  inlineTitle.textContent = book.title;

  const inlineAuthor = document.createElement('span');
  inlineAuthor.textContent = book.author;

  const inlinePages = document.createElement('span');
  inlinePages.textContent = book.pages;

  const inlineDeleteBtn = document.createElement('span');
  inlineDeleteBtn.className = "deleteBtn";
  inlineDeleteBtn.textContent = "x";
  inlineDeleteBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });

  li.appendChild(inlineRead);
  li.appendChild(inlineTitle);
  li.appendChild(inlineAuthor);
  li.appendChild(inlinePages);
  li.appendChild(inlineDeleteBtn);
  list.appendChild(li);
}

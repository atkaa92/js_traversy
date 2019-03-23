class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addToBookList(book) {
        const list = document.getElementById('book-list')
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(tr);
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    deleteBook(target) {
        if (target.className = 'delete') {
            target.parentElement.parentElement.remove()
        }
    }

    showAlert(msg,className) {
        const div = document.createElement('div')
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg))
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000);
    }
}

class Store {
    static getBooks(){
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        const ui = new UI();
        books.forEach(function(book) {
            ui.addToBookList(book);
        })
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, i) {
            if (book.isbn === isbn) {
                books.splice(i, 1)
            }
        })
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', function(e) {
    Store.displayBooks()
})

document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);
    const ui = new UI();
    if (title == '' || author == '' || isbn == '') {
        ui.showAlert('Please fill in all fields', 'error')
    }else{
        ui.addToBookList(book);
        Store.addBook(book)
        ui.clearFields();
        ui.showAlert('Book added', 'success')
    }
})

document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target)
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
    ui.showAlert('Book deleted', 'success')
    e.preventDefault();
})
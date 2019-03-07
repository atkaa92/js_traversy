function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

UI.prototype.addToBookList = function(book) {
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

UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.deleteBook = function(target) {
    if (target.className = 'delete') {
        target.parentElement.parentElement.remove()
    }
}

UI.prototype.showAlert = function(msg,className) {
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
        ui.clearFields();
        ui.showAlert('Book added', 'success')
    }
})

document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target)
    ui.showAlert('Book deleted', 'success')
    e.preventDefault();
})

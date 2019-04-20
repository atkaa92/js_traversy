class UI  {
    constructor(){
        this.container = document.querySelector('.postsContainer')
        this.posts = document.querySelector('#posts')
        this.titleInput = document.querySelector('#title')
        this.bodyInput = document.querySelector('#body')
        this.idInput = document.querySelector('#id')
        this.submitBtn = document.querySelector('.post-submit')
        this.cardForm = document.querySelector('.card-form')
        this.forSatae = 'add'
    }

    showPosts(posts) {
        let output = ''
        posts.forEach(post => {
            output += `<div class="card mb-3">
                            <div class="card-body">
                                <h4 class="card-title">${post.title}</h4>
                                <p class="card-text">${post.body}</p>
                                <a href="#" class="edit card-link" data-id="${post.id}">
                                    <i class="fa fa-pencil"></i>
                                </a>
                                <a href="#" class="delete card-link" data-id="${post.id}">
                                    <i class="fa fa-remove"></i>
                                </a>
                            </div>
                        </div>`
        });
        this.posts.innerHTML = output
    }

    showAlert(message, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        this.container.insertBefore(div, this.posts);
        setTimeout(() => this.clearAlert(), 3000);
    }

    clearAlert() {
        if(document.querySelector('.alert')) document.querySelector('.alert').remove()
    }

    clearFields() {
        this.titleInput.value = ''
        this.bodyInput.value = ''
        this.idInput.value = ''
    }

    fillForm(data) {
        this.titleInput.value = data.title
        this.bodyInput.value = data.body
        this.idInput.value = data.id
        this.chanegFormState('edit')
    }

    chanegFormState(type) {
        if (type == 'edit') {
            this.submitBtn.textContent = 'Update Post'
            this.submitBtn.className = 'post-submit btn btn-warning btn-block'
            if(!document.querySelector('.post-cancel')) {
                const button = document.createElement('button');
                button.className = 'post-cancel btn btn-light btn-block';
                button.appendChild(document.createTextNode('Cancel Edit'));
                const cardForm = document.querySelector('.card-form');
                const formEnd = document.querySelector('.form-end');
                cardForm.insertBefore(button, formEnd);
              }
        }else{
            this.submitBtn.textContent = 'Post It'
            this.submitBtn.className = 'post-submit btn btn-primary btn-block'
            document.querySelector('.post-cancel').remove();
            this.clearFields()
        }
    }
}


const ui = new UI()
export default ui
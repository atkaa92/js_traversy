import http from "./http";
import ui from "./ui";

document.addEventListener('DOMContentLoaded', getPosts)
ui.submitBtn.addEventListener('click', submitPost);
ui.container.addEventListener('click', deletePost);
ui.container.addEventListener('click', enableEdit);
ui.cardForm.addEventListener('click', disableEdit);


function getPosts() {
    http.get('http://localhost:3000/posts')
    .then(posts => ui.showPosts(posts))
    .catch(err => console.log(err))
}

function submitPost() {
    const title = ui.titleInput.value
    const body = ui.bodyInput.value
    const id = ui.idInput.value;
    const data = {title, body}
    if(title === '' || body === '') {
        ui.showAlert('Please fill in all fields', 'alert alert-danger');
    } else {
        if (id != '') {
            http.put(`http://localhost:3000/posts/${id}`, data)
            .then(res => { 
                ui.showAlert('Post updated', 'alert alert-success')
                ui.chanegFormState('add')
                getPosts()
            })
            .catch(err => { console.log(err) })
        } else {
            http.post('http://localhost:3000/posts', data)
            .then(res => { 
                ui.showAlert('Post added', 'alert alert-success')
                ui.clearFields()
                getPosts()
            })
            .catch(err => { console.log(err) })
        }
    }
}

function deletePost(e) {
    e.preventDefault()
    if(e.target.classList.contains('fa-remove')){
        const id = e.target.parentElement.dataset.id
        if(confirm('Are you sure')){
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(res => { 
                ui.showAlert('Post deleted', 'alert alert-success')
                getPosts()
            })
            .catch(err => { console.log(err) })
        }
    };
}

function enableEdit(e) {
    e.preventDefault()
    if(e.target.classList.contains('fa-pencil')){
        const id = e.target.parentElement.dataset.id
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        const body = e.target.parentElement.previousElementSibling.textContent
        const data = {id, title, body}
        ui.fillForm(data)
    };
}

function disableEdit(e) {
    e.preventDefault()
    if(e.target.classList.contains('post-cancel')){
        ui.chanegFormState('add')
    };
}
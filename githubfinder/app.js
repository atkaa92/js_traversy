const gitHub = new GitHub();
const ui = new UI();
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    let userText = e.target.value;
    if (userText != '') {
        gitHub.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                ui.showAlert('User not found', 'alert alert-danger')
            }else{
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
        })
    }else{
        ui.clearProfile()
    }
})
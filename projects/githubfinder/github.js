class GitHub {
    constructor(){
        this.client_id = '874a8f4fcf71b122a61d';
        this.client_secret = '737072d4969e7118022e07918f4d89cbc1b45821';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        let profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        let profile =  await profileRes.json();
        let profileRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        let repos = await profileRepo.json();
        return {
            profile,
            repos
        }
    }
}
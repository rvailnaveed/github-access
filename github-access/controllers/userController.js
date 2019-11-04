exports.get_user = (req, res) => {
    var user = req.params.user;
    var name = "";
 
    fetch('https://api.github.com/users/' + user)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log(response.status);
                    return;
                }
                response.json().then(function(data) {
                    name = data.name
                    res.render('user', { title: 'Welcome, ' + name, name: name });
                });
            }   

        )
        .catch(function(err) {
            console.log('Fetch error :-S', err);
        });
};

exports.get_repos = (req, res) => {
    var user = req.params.user;

    fetch('https://api.github.com/users/' + user + '/repos')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log(response.status);
                    return;
                }
                response.json().then(function(data) {
                    res.send(data);
                });
            }   

        )
        .catch(function(err) {
            console.log('Fetch error :-S', err);
        });
};

exports.get_commits = (req, res) => {
    var user = req.params.user;
    
    fetch('https://api.github.com/users/' + user + '/repos')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log(response.status);
                    return;
                }
                response.json().then(function(data) {
                    res.send(data);
                });
            }   

        )
        .catch(function(err) {
            console.log('Fetch error :-S', err);
        });
};
var fetch = require('node-fetch');
//var plotly = require('plotly')


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
                response.json().then(data => {
                    name = data.name
                    res.render('user', { title: 'Welcome, ' + name, name: name });
                });
            }   

        )
        .catch(function(err) {
            console.log('Fetch error :-S', err);
        });
};


exports.get_repos_graph = (req, res) => {
    var user = req.params.user;
    
    fetch('https://api.github.com/users/' + user + '/repos')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log(response.status);
                    return;
                }
                response.json().then(function(data) {
                    var amount = Object.keys(data).length;
                    var repos = [];
                    for(var i = 0; i < amount; i++){
                        repos.push(data[i].name);
                    }
                    console.log(repos)
                    res.render('user', { title: "User Insights", amount: amount });
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
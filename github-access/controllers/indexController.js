var fetch = require('node-fetch');

exports.index = (req, res) => {
    res.render('index', { title: 'Github Access' });
};

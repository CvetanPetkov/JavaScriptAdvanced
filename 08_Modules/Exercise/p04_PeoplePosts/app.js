(function () {
    let Person = require('./models/Person');
    let Post = require('./models/Post');

    let aleks = new Person('Aleks', 30);
    let post = new Post('Neshto si', 'Text wow', 'Aleks');

    aleks.addSelector('#test');
    post.addSelector('.posts.Aleks');
})();

result.Person = require('./models/Person');
result.Post = require('./models/Post');
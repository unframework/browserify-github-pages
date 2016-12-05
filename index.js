window.onload = function () {
    document.body.style.textAlign = 'center';
    document.body.style.fontSize = '32pt';
    document.body.style.paddingTop = '200px';

    document.body.appendChild(document.createTextNode('Hello World!'));

    var link = document.createElement('a');
    link.href = 'https://github.com/unframework/browserify-github-pages';
    link.style.display = 'block';
    link.style.fontSize = '18pt';
    link.appendChild(document.createTextNode('See deployment quickstart instructions'));
    document.body.appendChild(link);
};

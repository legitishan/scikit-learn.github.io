(() => {
    var latestStable = '0.21';
    var goodPaths = ['stable', 'dev', latestStable];
    var showWarning = (msg) => {
        $('.body[role=main]').prepend(
            '<p style="' +
            [
                'padding: 1em',
                'font-size: 1.5em',
                'border: 1px solid red',
                'background: pink',
                'width: 100%',
            ].join('; ') +
            '">' + msg + '</p>')
    };
    if (location.hostname == 'scikit-learn.org') {
        var versionPath = location.pathname.split('/')[1];
        if (!goodPaths.includes(versionPath)) {
            showWarning('You are looking at documentation for an old release of ' +
                        'Scikit-learn (version ' + versionPath + '). Try the ' +
                        '<a href="https://scikit-learn.org">latest release</a> or ' +
                        '<a href="https://scikit-learn.org/dev">development</a> ' +
                        'versions.')
        } else if (versionPath == 'dev') {
            showWarning('You are looking at documentation for the unstable ' +
                        'development version of Scikit-learn. See also the ' +
                        '<a href="https://scikit-learn.org">latest release</a> ' +
                        'version.')
        }
    }
})()

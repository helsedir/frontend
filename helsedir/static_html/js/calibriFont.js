    (function() {
        var path = '//easy.myfonts.net/v2/js?sid=153684(font-family=Calibri)&sid=153690(font-family=Calibri+Bold)&sid=153694(font-family=Calibri+Italic)&sid=153695(font-family=Calibri+Bold+Italic)&key=jCMxLGQRUy',
            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
            trial = document.createElement('script');
        trial.type = 'text/javascript';
        trial.async = true;
        trial.src = protocol + path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(trial);
    })();

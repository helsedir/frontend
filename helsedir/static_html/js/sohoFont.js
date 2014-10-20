(function () {
    var path = '//easy.myfonts.net/v2/js?sid=212833(font-family=Soho+Gothic+Pro+Light)&sid=212835(font-family=Soho+Gothic+Pro+Regular)&sid=212837(font-family=Soho+Gothic+Pro+Medium)&sid=212839(font-family=Soho+Gothic+Pro+Bold)&key=MhNolmVtaS',
        protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
        trial = document.createElement('script');
    trial.type = 'text/javascript';
    trial.async = true;
    trial.src = protocol + path;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(trial);
})();
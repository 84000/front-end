<?php 

    $content_template = array_key_exists('template', $_GET) ? $_GET['template'] : 'home';

    // Get the stylesheet
    $xsl = new DOMDocument;
    $xsl->load('../xslt/84000-html.xsl');

    // Initiate the processor
    $processor = new XSLTProcessor;
    $processor->importStyleSheet($xsl);

    // Set local parameters
    $processor->setParameter('', 'lang', isset($_GET['lang']) && $_GET['lang'] == 'zh' ? 'zh' : 'en' );
    $active_url = 'http://84000.co' . substr($_SERVER['REQUEST_URI'], strlen('/test-pages'));
    $processor->setParameter('', 'active-url', $active_url);
    $processor->setParameter('', 'local-comms-url', '/test-pages');
    $processor->setParameter('', 'local-reading-room-url', 'http://read.84000-translate.org');
    $processor->setParameter('', 'local-front-end-url', '');
    $processor->setParameter('', 'default-search-form-target', 'comms');

    // Get the xml - header
    $headerXML = new DOMDocument;
    $headerXML->load('../xslt/84000-header.xml');

    // Get the xml - footer
    $footerXML = new DOMDocument;
    $footerXML->load('../xslt/84000-footer.xml');

?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="84000 is a non-profit global initiative to translate the words of the Buddha and make them available to everyone.">
        <title>84000 | Translating the Words of the Buddha</title>
        <link href="/css/84000-comms.css" rel="stylesheet">
        <link href="/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
        <link href="/js/lightbox2-master/src/css/lightbox.css" rel="stylesheet">
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/manifest.json"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffffff"/>
        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>

    </head>

    <body id="top">

<?php
    
    // Output header
    echo $processor->transformToXML($headerXML);

    // Include content
    include($content_template . ".php");
    
    // Output footer
    echo $processor->transformToXML($footerXML);

?>

        <script type="text/javascript">
            function downloadJSAtOnload() {
                var element = document.createElement("script");
                element.src = "/js/84000-fe.min.js";
                document.body.appendChild(element);
            }
            if (window.addEventListener)
                window.addEventListener("load", downloadJSAtOnload, false);
            else if (window.attachEvent)
                window.attachEvent("onload", downloadJSAtOnload);
            else window.onload = downloadJSAtOnload;
        </script>

    </body>
</html>

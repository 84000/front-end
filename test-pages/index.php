<?php 

    $content_template = array_key_exists('template', $_GET) ? $_GET['template'] : 'home';

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
        <nav class="navbar navbar-default">

            <div class="brand-header">
                <div class="container">
                    <div class="navbar-header">
                        <div class="navbar-brand center-vertical">

                            <a href="/test-pages/" class="logo">
                                <img src="/imgs/logo.png">
                            </a>

                            <span class="tag-line">
                                Translating the words of the Buddha
                            </span>

                            <span class="nav-button">
                                <button id="navigation-button" class="btn-round navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                </button>
                            </span>

                        </div>
                    </div>
                </div>
                
            </div>

            <div class="container">
                <div id="navbar" class="navbar-collapse collapse" aria-expanded="false">
                    
                    <?php

                    // Get the stylesheet
                    $xsl = new DOMDocument;
                    $xsl->load('../navigation/navigation.xsl');

                    // Initiate the processor
                    $processor = new XSLTProcessor;
                    $processor->importStyleSheet($xsl);

                    // Get the xml
                    $xml = new DOMDocument;
                    $xml->load('../navigation/navigation.xml');

                    //$processor->setParameter('', 'lang', 'zh');
                    $active_url = 'http://84000.co' . substr($_SERVER['REQUEST_URI'], strlen('/test-pages'));
                    $processor->setParameter('', 'active-url', $active_url);
                    $processor->setParameter('', 'local-comms-url', '/test-pages');
                    $processor->setParameter('', 'local-reading-room-url', 'http://read.84000-translate.org');

                    echo $processor->transformToXML($xml);

                    ?>

                    <form class="navbar-form navbar-right">
                        
                        <div id="search-controls" class="input-group">
                            <input type="text" name="s" class="form-control" placeholder="Search..."/>
                            <span class="input-group-btn">
                                <button class="btn btn-primary" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>

                        <div id="language-links">
                            <a href="/test-pages/">English</a> | <a href="/test-pages/ch">中文</a>
                        </div>

                    </form>

                    <div class="navbar-right">
                        <div id="social" class="center-vertical">
                            <span>Follow our work</span>
                            <a href="mailto:info@84000.co" target="_blank"><i class="fa fa-envelope-square" aria-hidden="true"></i></a>
                            <a href="http://www.facebook.com/Translate84000" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                            <a href="https://twitter.com/Translate84000" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                            <a href="http://www.youtube.com/Translate84000" target="_blank"><i class="fa fa-youtube-square" aria-hidden="true"></i></a>
                            <span>Chat</span>
                            <a href="http://mp.weixin.qq.com/s/Y0K4_5CzA9oLtdflsJZfSQ" target="_blank"><i class="fa fa-weixin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>

        </nav>

        <?php 

            include($content_template . ".php");

        ?>

        <div class="hidden-print">
            <div id="link-to-top-container" class="fixed-btn-container">
                <a href="#top" id="link-to-top" class="btn-round scroll-to-anchor" title="Return to the top of the page">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </a>
            </div>
        </div>

        <footer xmlns="http://www.w3.org/1999/xhtml" class="hidden-print">
            <div class="container" itemscope="itemscope" itemtype="http://schema.org/Organization">
                Copyright © 2011-2018 <span itemprop="name">84000: Translating the Words of the Buddha</span> - All Rights Reserved
                <br/>Contact: <a href="mailto:info@84000.co" itemprop="email">info@84000.co</a> | Website: <a href="http://84000.co" itemprop="url">http://84000.co</a>
            </div>
        </footer>

        <span id="media_test">
            <span class="visible-xs"></span>
            <span class="visible-sm"></span>
            <span class="visible-md"></span>
            <span class="visible-lg"></span>
            <span class="visible-print"></span>
            <span class="visible-mobile"></span>
            <span class="visible-desktop"></span>
            <span class="event-hover"></span>
        </span>

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

<?php 

    $content_template = array_key_exists('template', $_GET) ? $_GET['template'] : 'home';

    function reading_room_domain(){
        $host_array = explode(".", $_SERVER['HTTP_HOST']);
        $host_array[0] = "read";
        return  implode(".", $host_array);
    }

?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="84000 is a non-profit global initiative to translate the words of the Buddha and make them available to everyone.">
        <title>84000 | Translating the Words of the Buddha</title>
        <link href="/css/84000-wordpress.css" rel="stylesheet">
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
                    <ul class="nav navbar-nav">
                        <li class="home<?php if($content_template === "home") echo ' active' ?>"><a href="/test-pages/">Home</a></li>
                        <li class="news dropdown-toggle-container <?php if(array_search($content_template, ['news','post']) > -1) echo 'active' ?>">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                News
                                <span>
                                    <i class="fa fa-plus"></i>
                                    <i class="fa fa-minus"></i>
                                </span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="<?php if($content_template === "news") echo 'active' ?>">
                                    <a href="?template=news">All news</a>
                                </li>
                                <li>
                                    <a href="?template=news">Announcements</a>
                                </li>
                                <li>
                                    <a href="?template=news">Events</a>
                                </li>
                                <li>
                                    <a href="?template=news">People</a>
                                </li>
                                <li>
                                    <a href="?template=news">In Depth</a>
                                </li>
                                <li>
                                    <a href="?template=news">Newsletters</a>
                                </li>
                            </ul>
                        </li>
                        <li class="reading-room">
                            <a href="http://<?php echo reading_room_domain() ?>">Reading Room</a>
                        </li>
                        <li class="about dropdown-toggle-container <?php if($content_template === "about") echo 'active' ?>">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                About
                                <span>
                                    <i class="fa fa-plus"></i>
                                    <i class="fa fa-minus"></i>
                                </span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="<?php if($content_template === "about") echo 'active' ?>">
                                    <a href="?template=about">Vison</a>
                                </li>
                                <li>
                                    <a href="?template=about">Urgency</a>
                                </li>
                                <li>
                                    <a href="?template=about">Origin</a>
                                </li>
                                <li>
                                    <a href="?template=about">Progress</a>
                                </li>
                                <li>
                                    <a href="?template=about">Global Impact</a>
                                </li>
                                <li>
                                    <a href="?template=about">Work Flow</a>
                                </li>
                                <li>
                                    <a href="?template=about">Translations</a>
                                </li>
                                <li>
                                    <a href="?template=about">Copyright</a>
                                </li>
                                <li>
                                    <a href="?template=about">Reading Room</a>
                                </li>
                                <li>
                                    <a href="?template=about">Team</a>
                                </li>
                                <li>
                                    <a href="?template=about">Translators</a>
                                </li>
                                <li>
                                    <a href="?template=about">Sponsors</a>
                                </li>
                                <li>
                                    <a href="?template=about">Endorsements</a>
                                </li>
                                <li>
                                    <a href="?template=about">Quotes</a>
                                </li>
                                <li>
                                    <a href="?template=about">Contact</a>
                                </li>
                            </ul>
                        </li>
                        <li class="resources dropdown-toggle-container <?php if($content_template === "resources") echo 'active' ?>">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                Resources
                                <span>
                                    <i class="fa fa-plus"></i>
                                    <i class="fa fa-minus"></i>
                                </span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="?template=resources">Training</a>
                                </li>
                                <li>
                                    <a href="?template=resources">Grants</a>
                                </li>
                                <li class="<?php if($content_template === "resources") echo 'active' ?>">
                                    <a href="?template=resources">Tools</a>
                                </li>
                                <li>
                                    <a href="?template=resources">Others</a>
                                </li>
                            </ul>
                        </li>
                        <li class="how-to-help dropdown-toggle-container <?php if(array_search($content_template, ['sponsor-page','sponsor-sutra','84000-circle', 'subscribe'])  > -1) echo 'active' ?>">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                How you can help
                                <span>
                                    <i class="fa fa-plus"></i>
                                    <i class="fa fa-minus"></i>
                                </span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="<?php if($content_template === "sponsor-page") echo 'active' ?>">
                                    <a href="?template=sponsor-page">Sponsor a Page</a>
                                </li>
                                <li class="<?php if($content_template === "sponsor-sutra") echo 'active' ?>">
                                    <a href="?template=sponsor-sutra">Sponsor a Sutra</a>
                                </li>
                                <li class="<?php if($content_template === "84000-circle") echo 'active' ?>">
                                    <a href="?template=84000-circle">84000 Circle</a>
                                </li>
                                <li>
                                    <a href="?template=sponsor-page">Shop &amp; Give</a>
                                </li>
                                <li class="<?php if($content_template === "subscribe") echo 'active' ?>">
                                    <a href="?template=subscribe">Subscribe to Our Newsletter</a>
                                </li>
                                <li>
                                    <a href="?template=sponsor-page">FAQ</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

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

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description"
            content="84000 is a non-profit global initiative to translate the words of the Buddha and make them available to everyone." />
        <title>84000 | Translating the Words of the Buddha</title>
        <link href="/css/84000-comms.css" rel="stylesheet" />
        <link href="/css/ie10-viewport-bug-workaround.css" rel="stylesheet" />
        <link href="/js/lightbox2-master/src/css/lightbox.css" rel="stylesheet" />
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffffff" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <style type="text/css">
            .home { 
                background-image: linear-gradient(100deg, rgb(86, 110, 144) 5%, rgb(183, 108, 30) 35%, rgb(117, 45, 40) 60%, rgb(77, 98, 83) 95%);
            }
            #title-band {
                padding-top: 55px;
                border-top: 1px solid #626262;
            }
            #title-band h2 { color: #fff; }
            #title-band p { color: #ddd; }
            #latest {
                margin-top: 30px;
            }
            #latest .panel {
                background-color: rgba(255,255,255,.8);
                border-radius: 10px;
            }
            #latest h5 {
                color: rgb(117, 45, 40);
            }
            #latest h3 {
                color: #333;
                margin-top: 0px
            }
            #latest .source-titles {
                color: #5b5b5c;
            }
            #latest .quote {
                border-left: 1px solid #cb9786;
                text-align: left;
            }
            #latest blockquote {
                border-left: 0px;
            }
            #latest .quote p {
                color: #333;
            }
            #about-band {
                background-color: #fff;
                padding-top: 30px;
                padding-bottom: 30px;
                /*background-image: linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(230, 230, 230) 100%);*/
                background-color: #fff;
            }
            #about-band .rubrik p {
                max-width: 280px;
                margin: 0px auto;
                color: #888;
            }
            #about-band .thumbnail {
                width: 240px;
                height: 240px;
                margin: 0px auto;
                border-radius: 120px;
            }
            #about-band .vision .thumbnail {
                border: 5px solid rgb(86, 110, 144);
            }
            #about-band .urgency .thumbnail {
                border: 5px solid rgb(183, 108, 30);
            }
            #about-band .progress .thumbnail {
                border: 5px solid rgb(117, 45, 40);
            }
            #about-band .thumbnail img {
                object-fit: cover;
            }
            #news-band {
                background-image: url('/imgs/pattern256.jpg');
                padding-bottom: 15px;
            }
            #news-band > .container{ position: relative; }
            #news-band h2 {
                margin-top: 0px;
                color: #fff;
                text-align: center;
                text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.77);
                font-size: 2em;
                background-color: #0c3e5c;
                padding-top: 10px;
                padding-bottom: 5px;
                margin-bottom: 30px;
            }
            #movie-band {
                /*background-image: linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(230, 230, 230) 100%);*/
                background-color: rgb(255, 255, 255);
                padding: 30px 0px;
            }
            #movie-band iframe {
                border: 5px solid rgb(255, 255, 255);
            }
            .shadow {
                box-shadow: #aaa 0px 5px 11px 3px;
            }
            .carousel-control i {
                position: absolute;
                top: 40%;
            }
            .carousel-control.left, .carousel-control.right {
                background-image: none;
            }
            .carousel-control.left i {
                left: 0px;
            }
            .carousel-control.right i {
                right: 0px;
            }
            .divider {
                height: 1px;
            }
            .btn-lg {
                font-size: 17px;
            }
            .news-banner, .announcement-banner, .news-image {
                width: 100%;
                height: 140px;
            }
            .news-banner, .announcement-banner {
                display: table;
            }
            .news-banner {
                background-color: rgb(183, 108, 30);
            }
            .announcement-banner {
                background-color: rgb(77, 98, 83);
            }
            .news-banner span, .announcement-banner span {
                display: table-cell;
                color: #fff;
                vertical-align: middle;
                text-align: center;
                text-shadow: 0px 2px 3px rgba(0,0,0,.3);
                font-size: 1.3em;
                padding: 15px;
                line-height: 1.3em;
            }
            .announcement-banner small {
                font-size: 15px;
                line-height: 1em;
                color: rgba(255,255,255,.7);

            }
        </style>

    </head>

    <body id="top">

        <nav class="navbar navbar-default">
            <div class="brand-header">
                <div class="container">
                    <div class="navbar-header">
                        <div class="navbar-brand center-vertical">

                            <a href="http://84000.co" class="logo">
                                <img src="/imgs/logo.png" alt="84000 logo" />
                            </a>

                            <div class="tag-line">
                                <span class="text-en">Translating the words of the Buddha</span>
                            </div>

                            <div class="nav-button">
                                <button id="navigation-button"
                                    class="btn-round navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false"
                                    aria-controls="navbar">
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                </button>
                            </div>

                            <div class="languages visible-desktop">
                                <div class="center-vertical pull-right">
                                    <span>
                                        <a href="/test-pages">English</a> | <a href="/test-pages/ch">中文</a>
                                    </span>
                                    <form method="get" role="search" name="searchformTop" class="navbar-form navbar-right" action="/test-pages/">
                                        <div id="search-controls" class="input-group">
                                            <input type="text" name="search" class="form-control"
                                                placeholder="Search..." />
                                            <input type="submit" value="Submit" class="hidden" />
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-primary dropdown-toggle"
                                                    data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <i class="fa fa-search"></i>
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a class="on-click-submit text-en"
                                                            href="http://read.84000-translate.org/search.html">
                                                            Search the Reading Room
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="on-click-submit text-en" href="/test-pages/">
                                                            Search the Website
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div id="navbar" class="navbar-collapse collapse" role="navigation"
                    aria-label="Main navigation" aria-expanded="false">
                    <ul class="nav navbar-nav">
                        <li class="home active">
                            <a href="/test-pages/">Home</a>
                        </li>
                        <li class="news dropdown-toggle-container">
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false" href="#news">News<span><i
                                        class="fa fa-plus"></i><i class="fa fa-minus"
                                ></i></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="/test-pages/news">All News</a>
                                </li>
                                <li>
                                    <a href="/test-pages/category/announcements">Announcements</a>
                                </li>
                                <li>
                                    <a href="/test-pages/category/events">Events</a>
                                </li>
                                <li>
                                    <a href="/test-pages/category/people">People</a>
                                </li>
                                <li>
                                    <a href="/test-pages/category/in-depth">In Depth</a>
                                </li>
                                <li>
                                    <a href="/test-pages/category/newsletters">Newsletters</a>
                                </li>
                            </ul>
                        </li>
                        <li class="reading-room dropdown-toggle-container">
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false" href="#reading-room"
                                >Reading Room<span><i class="fa fa-plus"></i><i class="fa fa-minus"
                                    ></i></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="http://read.84000-translate.org/section/lobby.html">The Collection</a>
                                </li>
                                <li>
                                    <a href="http://read.84000-translate.org/section/all-translated.html">All Translated Texts</a>
                                </li>
                                <li>
                                    <a href="http://read.84000-translate.org/search.html">Search The Reading Room</a>
                                </li>
                            </ul>
                        </li>
                        <li class="resources dropdown-toggle-container">
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false" href="#resources"
                                        >Resources<span><i class="fa fa-plus"></i><i
                                        class="fa fa-minus"></i></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="/test-pages/resources/teachings-on-sutra/">Teachings on Sūtra</a>
                                </li>
                                <li>
                                    <a href="/test-pages/resources/commentaries">Commentaries</a>
                                </li>
                                <li>
                                    <a href="/test-pages/resources/resounding">Resounding</a>
                                </li>
                                <li>
                                    <a href="/test-pages/resources/translator-training">Translator Training</a>
                                </li>
                                <li>
                                    <a href="/test-pages/resources/tools-and-resources">Translators' Tools</a>
                                </li>
                                <li>
                                    <a href="/test-pages/resources/other-resources">Web Resources</a>
                                </li>
                                <li>
                                    <a href="/test-pages/resources/quotes">Quotes</a>
                                </li>
                            </ul>
                        </li>
                        <li class="about dropdown-toggle-container">
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false" href="#about"
                                        >About<span><i class="fa fa-plus"></i><i class="fa fa-minus"
                                    ></i></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="/test-pages/about/vision">Vision</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/urgency">Urgency</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/origin">Origin</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/progress">Progress</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/impact">Global Impact</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/grants">Grants</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/work-flow">Work Flow</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/copyright">Copyright</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/team">Team</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/translators">Translators</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/sponsors">Sponsors</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/partnerships">Partnerships</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/endorsements">Endorsements</a>
                                </li>
                                <li>
                                    <a href="/test-pages/about/contact">Contact</a>
                                </li>
                            </ul>
                        </li>
                        <li class="how-to-help dropdown-toggle-container">
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false" href="#how-to-help">How
                                You Can Help<span><i class="fa fa-plus"></i><i class="fa fa-minus"
                                    ></i></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="/test-pages/how-you-can-help/sponsor-a-page">Sponsor a Page</a>
                                </li>
                                <li>
                                    <a href="/test-pages/how-you-can-help/sponsor-a-sutra">Sponsor a Sūtra</a>
                                </li>
                                <li>
                                    <a href="/test-pages/how-you-can-help/become-a-donor">Become a Donor</a>
                                </li>
                                <li>
                                    <a href="/test-pages/how-you-can-help/shop-n-give">Shop and Give</a>
                                </li>
                                <li>
                                    <a href="/test-pages/how-you-can-help/spread-the-word/">Subscribe to our Newsletter</a>
                                </li>
                                <li>
                                    <a href="/test-pages/how-you-can-help/faq">FAQ</a>
                                </li>
                            </ul>
                        </li>
                        <li class="languages visible-mobile">
                            <div class="center-vertical">
                                <a href="/test-pages">English</a> | <a href="/test-pages/ch">中文</a>
                            </div>
                        </li>
                        <li class="search visible-mobile">
                            <form method="get" role="search" name="searchformTop" class="navbar-form navbar-right" action="/test-pages/">
                                <div id="search-controls" class="input-group">
                                    <input type="text" name="search" class="form-control"
                                        placeholder="Search..." />
                                    <input type="submit" value="Submit" class="hidden" />
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-primary dropdown-toggle"
                                            data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <i class="fa fa-search"></i>
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li>
                                                <a class="on-click-submit text-en"
                                                    href="http://read.84000-translate.org/search.html">
                                                    Search the Reading Room
                                                </a>
                                            </li>
                                            <li>
                                                <a class="on-click-submit text-en" href="/test-pages/">
                                                    Search the Website
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </li>
                        <li class="social">
                            <div id="social" class="center-vertical">
                                <span class="text-en">Follow our work:</span>
                                <a target="_blank" href="/test-pages/how-you-can-help/spread-the-word/"
                                    title="Subscribe to our newsletter">
                                    <i aria-hidden="true" class="fa fa-envelope-square"></i>
                                </a>
                                <a target="_blank" href="http://www.facebook.com/Translate84000"
                                    title="Follow us on Facebook">
                                    <i aria-hidden="true" class="fa fa-facebook-square"></i>
                                </a>
                                <a target="_blank" href="https://twitter.com/Translate84000"
                                    title="Follow us on Twitter">
                                    <i aria-hidden="true" class="fa fa-twitter-square"></i>
                                </a>
                                <a target="_blank" href="http://www.youtube.com/Translate84000"
                                    title="Subscribe to our Youtube channel">
                                    <i aria-hidden="true" class="fa fa-youtube-square"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                    
                    
                </div>
            </div>
        </nav>
        
        <div class="home">
            <div id="title-band">
                <div class="container text-center">
                    <div>
                        <img src="/imgs/logo.png" alt="84000 logo" />
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3">
                            <h2>84000 is a global non-profit initiative focused on preserving the words of the Buddha</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <p>As a grant giving translation body and online publication house, we leverage and integrate new technologies to make our digital library of the Buddha’s wisdom as accessible and beneficial as possible to readers, practitioners, and scholars around the world.</p>
                        </div>
                    </div>
                    <div id="latest">

                        <div class="panel">
                            <div class="panel-body">
                                <div id="publications-carousel" class="carousel slide">

                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner" role="listbox">

                                        <div class="item active" data-match-height="publications">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <h5>Our latest Publication</h5>
                                                    <h3>Distinguishing Phenomena and What Is Meaningful</h3>
                                                    <ul class="list-inline inline-dots source-titles">
                                                        <li class="text-bo">ཆོས་དང་དོན་རྣམ་པར་འབྱེད་པ།</li>
                                                        <li class="text-sa">Dharmārtha­vibhaṅga</li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 quote">
                                                    <blockquote>
                                                        <p>
                                                            "Still, ordinary beings think that such insubstantial things are substantial; they think that impermanent things are permanent, repulsive things are beautiful, unclean things are clean, and unreal things are real."
                                                        </p>
                                                        <footer>
                                                            <a href="#">1.19. Distinguishing Phenomena and What Is Meaningful</a> | <a href="#">The 84000 Reading Room</a>
                                                        </footer>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="item" data-match-height="publications">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <h5>Published Tuesday, 2nd July 2019</h5>
                                                    <h3>The Perfection of Generosity</h3>
                                                    <ul class="list-inline inline-dots source-titles">
                                                        <li class="text-bo">སྦྱིན་པའི་ཕ་རོལ་ཏུ་ཕྱིན་པ།</li>
                                                        <li class="text-sa">Dāna­pāramitā</li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 quote">
                                                    <blockquote>
                                                        <p>
                                                            "Still, ordinary beings think that such insubstantial things are substantial; they think that impermanent things are permanent, repulsive things are beautiful, unclean things are clean, and unreal things are real."
                                                        </p>
                                                        <footer>
                                                            <a href="#">1.19. The Perfection of Generosity</a> | <a href="#">The 84000 Reading Room</a>
                                                        </footer>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="item" data-match-height="publications">
                                            <div class="row">
                                                <div class="col-sm-12 top-margin">
                                                    <h3>View all of our publications</h5>
                                                    <a href="#" class="btn btn-danger btn-lg">84000 Online Reading Room</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <!-- Controls -->
                                    <a class="left carousel-control" href="#publications-carousel" role="button" data-slide="prev">
                                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#publications-carousel" role="button" data-slide="next">
                                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                        <span class="sr-only">Next</span>
                                    </a>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="about-band">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm-4 rubrik vision">
                            <div class="thumbnail">
                                <img src="/imgs/Boroburdo by Toto Iwantoro 23.jpg">
                            </div>
                            <h2>Vision</h2>
                            <p>Our 100 year vision is to preserve a living tradition for future generations. Read more about our vision, goals and the scope of our work.</p>
                        </div>
                        <div class="col-sm-4 rubrik urgency">
                            <div class="thumbnail">
                                <img src="/imgs/DSC_0212.jpg">
                            </div>
                            <h2>Urgency</h2>
                            <p>Knowledge of Classical Tibetan is rapidly disappearing. Read more about the urgency of translation as a means of preservation.</p>
                        </div>
                        <div class="col-sm-4 rubrik progress">
                            <div class="thumbnail">
                                <img src="/imgs/chart.png">
                            </div>
                            <h2>Progress</h2>
                            <p>As of 2010 only 5% of the Kangyur - the Words of the Buddha, or sutras, had been translated into modern languages. Take a look at our current progress.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!--<div class="divider"></div>-->

            <div id="news-band">
                <h2>84000 News</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="panel panel-default" data-match-height="news-item">
                                <div class="panel-heading">
                                    ANNOUNCEMENTS
                                </div>
                                <div class="news-banner">
                                    <span>Job Vacany: Editor</span>
                                </div>
                                <div class="panel-body">
                                    <div class="text-muted small">
                                        30 Aug 2019
                                    </div>
                                    <div class="description">
                                        <p>
                                            Translating the Words of the Buddha formally invites applications for the full-time contract position of Editor. The appointment will run from November 2019 to October 2021 (2 years) with the possibility of extension.
                                            <br>
                                            <a href="#">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="panel panel-default" data-match-height="news-item">
                                <div class="panel-heading">
                                    ANNOUNCEMENTS
                                </div>
                                <div class="news-image thumbnail">
                                    <img src="http://84000.co/wp-content/uploads/4-Milton-Glaser--313x190.png">
                                </div>
                                <div class="panel-body">
                                    <div class="text-muted small">
                                        23 Aug 2019
                                    </div>
                                    <div class="description">
                                        <p>
                                            84000 is thrilled to announce that Mr. Milton Glaser—a recipient of the National Medal of the Arts, awarded by President Barack Obama—will be adjudicating submissions for our Design for Wisdom: Doodle for 84000 contest, running through October 1, 2019!
                                            <br>
                                            <a href="#">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="panel panel-default" data-match-height="news-item">
                                <div class="panel-heading">
                                    ANNOUNCEMENTS
                                </div>
                                <div class="announcement-banner">
                                    <span>
                                        <small>New Publication</small>
                                        <br>
                                        Distinguishing Phenomena and What is Meaningful
                                    </span>
                                </div>
                                <div class="panel-body">
                                    <div class="text-muted small">
                                        4 Aug 2019
                                    </div>
                                    <div class="description">
                                        <p>
                                            On the auspicious occasion of Chökor Düchen, the first turning of the wheel of dharma, 84000 is pleased to announce its newest publication, Distinguishing Phenomena and What is Meaningful.
                                            <br>
                                            <a href="#">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="panel panel-default" data-match-height="news-item">
                                <div class="panel-heading">
                                    ANNOUNCEMENTS
                                </div>
                                <div class="news-image thumbnail">
                                    <img src="http://84000.co/wp-content/uploads/Doodle-BASE-IMAGE-e1564628368337.jpg">
                                </div>
                                <div class="panel-body">
                                    <div class="text-muted small">
                                        23 Aug 2019
                                    </div>
                                    <div class="description">
                                        <p>
                                            84000 is thrilled to announce that Mr. Milton Glaser—a recipient of the National Medal of the Arts, awarded by President Barack Obama—will be adjudicating submissions for our Design for Wisdom: Doodle for 84000 contest, running through October 1, 2019!
                                            <br>
                                            <a href="#">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="panel panel-default" data-match-height="news-item">
                                <div class="panel-heading">
                                    PEOPLE
                                </div>
                                <div class="news-image thumbnail">
                                    <img src="http://84000.co/wp-content/uploads/F1000026-285x190.jpg">
                                </div>
                                <div class="panel-body">
                                    <div class="text-muted small">
                                        23 Aug 2019
                                    </div>
                                    <div class="description">
                                        <p>
                                            84000 is thrilled to announce that Mr. Milton Glaser—a recipient of the National Medal of the Arts, awarded by President Barack Obama—will be adjudicating submissions for our Design for Wisdom: Doodle for 84000 contest, running through October 1, 2019!
                                            <br>
                                            <a href="#">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="panel panel-default" data-match-height="news-item">
                                <div class="panel-heading">
                                    EVENTS
                                </div>
                                <div class="news-image thumbnail">
                                    <img src="http://84000.co/wp-content/uploads/Shanghai1-IMG_1625-338x190.jpg">
                                </div>
                                <div class="panel-body">
                                    <div class="text-muted small">
                                        23 Aug 2019
                                    </div>
                                    <div class="description">
                                        <p>
                                            84000 is thrilled to announce that Mr. Milton Glaser—a recipient of the National Medal of the Arts, awarded by President Barack Obama—will be adjudicating submissions for our Design for Wisdom: Doodle for 84000 contest, running through October 1, 2019!
                                            <br>
                                            <a href="#">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="panel panel-default" data-match-height="news-item">
                                <div class="panel-heading">
                                    ANNOUNCEMENTS
                                </div>
                                <div class="announcement-banner">
                                    <span>
                                        <small>New Publication</small>
                                        <br>
                                        Distinguishing Phenomena and What is Meaningful
                                    </span>
                                </div>
                                <div class="panel-body">
                                    <div class="text-muted small">
                                        4 Aug 2019
                                    </div>
                                    <div class="description">
                                        <p>
                                            On the auspicious occasion of Chökor Düchen, the first turning of the wheel of dharma, 84000 is pleased to announce its newest publication, Distinguishing Phenomena and What is Meaningful.
                                            <br>
                                            <a href="#">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="panel panel-default" data-match-height="news-item">
                                <div class="panel-heading">
                                    More News
                                </div>
                                <div class="panel-body">
                                    <ul class="list-unstyled underline">
                                        <li>
                                            <a href="#">All News</a>
                                        </li>
                                        <li>
                                            <a href="#">Announcements</a>
                                        </li>
                                        <li>
                                            <a href="#">Events</a>
                                        </li>
                                        <li>
                                            <a href="#">People</a>
                                        </li>
                                        <li>
                                            <a href="#">In-depth</a>
                                        </li>
                                        <li>
                                            <a href="#">Newsletters</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="movie-band">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="embed-responsive embed-responsive-16by9 shadow">
                                <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/cLmRgUAPmVM?showinfo=1&rel=0&vq=hd720"></iframe>
                            </div>
                        </div>
                        <div class="col-sm-4 text-center">
    
                            <p class="top-margin">
                                With the help of our 108 <a href="/about/sponsors/">founding sponsors</a> and thousands of individual donors, we provide funding to the translators who are working to safeguard these important teachings for future generations.
                            </p>


                            <table id="translation-stats">
                                <tbody>
                                <tr>
                                    <td>70000</td><th>Kangyur pages to be translated</th></tr>
                                <tr>
                                    <td>11472</td><th>Pages translated</th></tr>
                                <tr>
                                    <td>21188</td><th>Pages in translation</th></tr>
                                </tbody>
                            </table>

                            <div class="text-center">
                                <a href="/page-onetime" target="_blank" class="btn btn-primary">Sponsor a page now</a>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <footer class="hidden-print">
            <div class="container" itemscope="itemscope" itemtype="http://schema.org/Organization">
                <div>
                    <span class="text-en">Copyright © 2011-2018 </span>
                    <span itemprop="name">
                        <span class="text-en">84000: Translating the Words of the Buddha</span>
                    </span>
                    <span class="text-en"> - All Rights Reserved</span>
                </div>
                <ul class="list-inline inline-dots">
                    <li>
                        <span class="text-en">Contact: </span>
                        <a itemprop="email" href="mailto:info@84000.co">
                            <span class="text-en">info@84000.co</span>
                        </a>
                    </li>
                    <li>
                        <span class="text-en">Website: </span>
                        <a itemprop="email" href="http://84000.co">
                            <span class="text-en">http://84000.co</span>
                        </a>
                    </li>
                    <li>
                        <a itemprop="url" href="http://84000.co/about/privacy-policy">
                            <span class="text-en">Privacy Policy</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
        <div class="hidden-print">
            <div id="link-to-top-container" class="fixed-btn-container">
                <a href="#top" class="btn-round scroll-to-anchor link-to-top"
                    title="Return to the top of the page">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </a>
            </div>
        </div>
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

        <script>
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

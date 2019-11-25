
<?php

    /* Variations to images - can be removed once agreed */
    $backgrounds = array(
        'DEGE5-BLUR.JPG',
        'DJKR-reading.jpg',
        'LTWA1-BLUR.jpg',
        'LTWA2-BLUR.jpg',
        'DJKR-resounding-BLUR.jpg',
        'Dege5.JPG',
        'Monk-reading.jpg',
        'LTWA1.jpg',
        'LTWA2.jpg'
    );

    $background_image = "linear-gradient(100deg, rgb(86, 110, 144) 5%, rgb(183, 108, 30) 35%, rgb(117, 45, 40) 60%, rgb(77, 98, 83) 95%)";
    if(isset($_GET['bg']) && intval($_GET['bg']) >= 0 && intval($_GET['bg']) < count($backgrounds)) {
        $background_image = "url('/imgs/backgrounds/" . $backgrounds[intval($_GET['bg'])] . "')";
    }

    $circles_imgs = array(
        "/imgs/1068.jpg",
        "/imgs/DSC_0212.jpg",
        "/imgs/Boroburdo by Toto Iwantoro 23.jpg",
        "/imgs/Everest-SQ.jpg",
        "/imgs/Gen-Jamspal-reads-Prajnaparamita_Ladakh-2010.jpg"
    );

    $about_bg = "background-color: #fff;";

    if(isset($_GET['circles']) && $_GET['circles'] == 'illustrations') {
        $circles_imgs = array(
            "/imgs/illustrations/profile-sq.jpg",
            "/imgs/illustrations/GEM-STATIC-sq.jpg",
            "/imgs/illustrations/circle-sq.jpg",
            "/imgs/illustrations/wave-cropped-sq.jpg",
            "/imgs/illustrations/wave-cropped-sq.jpg"
        );
        $about_bg = "background: url('/imgs/illustrations/bg.jpg') ;";
    }

?>

<style type="text/css">
    body {
        background-color: #003f5f;
        background-image: url('/imgs/background-pattern-transparent.svg');
        background-size: 80px;
        background-repeat: repeat;
    }
    #title-band {
        /*linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(149, 69, 0, 0.47) 50%, rgba(255, 255, 255, 0.0) 90%), */
        background-image: <?php echo $background_image ?>;
        background-size: cover;
        background-position: 50% 40%;
    }
    #title-band > .container {
        padding-top: 50px;
        padding-bottom: 25px;
    }
    #title-band h2 {
        color: #fff;
    }
    #title-band p {
        color: #fff;
    }
    #title-band .img-container {
        margin-top: -50px;
    }
    #title-band .img-container img {
        height: 100px;
    }
    .title-box, .title-box-addon {
        background-color: rgba(12, 63, 94, 0.9);
        /*background-color: rgba(0, 0, 0, 0.65);*/
        padding: 0px 25px 15px 25px;
    }
    .title-box {
        border-radius: 5px 5px 0px 0px;
        margin-top: 50px;
    }
    .title-box-addon {
        content: ' ';
        border-radius: 0px 0px 5px 5px;
        height: 20px;
    }
    #latest .panel {
        margin-top: 0px;
        border-radius: 0px;
    }
    #latest .panel {
        background-color: rgba(255,255,255,.9);
        margin-bottom: 0px;
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
        border-left: 1px solid #bbb;
        text-align: left;
    }
    @media only screen and (max-width: 920px) {
        #latest .quote {
            border-left: none;
            text-align: center;
        }
    }
    #latest blockquote {
        border-left: 0px;
        padding: 11px 0px;
    }
    #latest .quote p {
        color: #333;
    }
    #latest .quote footer, #latest .quote a {
        color: #566e90;
    }
    #latest .item {
        padding: 0px 30px;
    }
    #latest .item .vertical-pad {
        padding-top: 40px;
    }
    #about-band {
        <?php echo $about_bg ?>
        padding-top: 50px;
        padding-bottom: 20px;
    }
    #about-band .rubrik {
        max-width: 380px;
        margin: 0px auto 40px auto;
    }
    #about-band .rubrik p {
        color: #707070;
    }
    #about-band .thumbnail {
        width: 220px;
        height: 220px;
        margin: 0px auto;
        border-radius: 120px;
        border: 7px solid #b76c1e;
    }
    #about-band .urgency .thumbnail {
        border-color: #566e90; 
    }
    #about-band .urgency h2 {
        color: #566e90; 
    }
    #about-band .sponsorship .thumbnail {
        border-color: #752d28; 
    }
    #about-band .sponsorship h2 {
        color: #752d28; 
    }
    #about-band .progress .thumbnail {
        border-color: #4d6253; 
    }
    #about-band .progress h2 {
        color: #4d6253; 
    }
    #about-band .grants .thumbnail {
        border-color: #003f5f; 
    }
    #about-band .grants h2 {
        color: #003f5f; 
    }
    #about-band .thumbnail img {
        object-fit: cover;
    }
    #news-band {
        padding-top: 15px;
        padding-bottom: 35px;
    }
    #news-band > .container { position: relative; }
    #news-band h2 {
        color: #e5e5e5;
        margin-bottom: 25px;
        text-align: center;
        text-transform: uppercase;
    }
    #news-band .panel-default > .panel-heading {
        /*background-color: #fdfaf1;
        border-bottom: 1px solid #dadada;*/
        background-color: #ffffff;
        color: #999999;
        text-align: center;
        text-transform: uppercase;
    }
    #news-band .thumbnail img {
        object-fit: cover;
    }
    #movie-band {
        /*background-image: linear-gradient(180deg, rgb(255, 255, 255) 50%, rgb(230, 230, 230) 100%);*/
        background-color: #ffffff;
        padding: 50px 0px;
    }
    .text-shadow {
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.9);
    }
    .panel {
        overflow: hidden;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 6px 0px;
    }
    @media only screen and (max-width: 600px) {
        .panel {
            margin-bottom: 22px;
        }
    }
    .carousel-control i {
        position: absolute;
        top: 45%;
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
    .page-divider {
        position: relative;
    }
    .page-divider:after {
        content: '';
        background-image: url('/imgs/page-divider.svg');
        position: absolute;
        top: -3px;
        left: 39%;
        width: 22%;
        height: 6px;
        background-position: center;
        background-repeat-x: no-repeat;
        background-size: cover;
    }
    @media only screen and (max-width: 1200px) {
        .page-divider:after {
            left: 25%;
            width: 50%;
        }
    }
    .divider {
        height: 1px;
    }
    .btn-lg {
        font-size: 17px;
    }
    .news-banner, .announcement-banner, .news-image {
        width: 100%;
        height: 160px;
    }
    .news-banner, .announcement-banner {
        display: table;
    }
    .news-banner {
        background-color: rgb(183, 108, 30);
        background-image: url('/imgs/background-pattern-transparent.svg');
        background-size: 40px;
        background-repeat: repeat;
    }
    .announcement-banner {
        background-color: rgb(77, 98, 83);
        background-image: url('/imgs/background-pattern-transparent.svg');
        background-size: 40px;
        background-repeat: repeat;
    }
    .news-banner span, .announcement-banner span {
        display: table-cell;
        color: #fff;
        vertical-align: middle;
        text-align: center;
        font-size: 1.3em;
        padding: 15px;
        line-height: 1.3em;
    }
    .announcement-banner small {
        font-size: 15px;
        line-height: 1em;
        color: rgb(255,255,255);
    }
    body > footer {
        border-top: 0;
        background: transparent;
    }
    body > footer, body > footer a {
        color: rgb(255, 255, 255);
    }
</style>

<div class="home">
    <div id="title-band" class="clearfix">
        <div class="container text-center">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 title-box">
                    <div class="img-container">
                        <img src="/imgs/logo.svg" alt="84000 logo" />
                    </div>
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <h2 class="text-shadow">84000 is a global non-profit initiative focused on preserving the words of the Buddha</h2>
                        </div>
                    </div>
                    <p class="text-shadow">As a grant giving translation body and online publication house, we leverage and integrate new technologies to make our digital library of the Buddha’s wisdom as accessible and beneficial as possible to readers, practitioners, and scholars around the world.</p>
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
                                        <div class="col-md-6">
                                            <h5>Our latest Publication</h5>
                                            <h3>Distinguishing Phenomena and What Is Meaningful</h3>
                                            <ul class="list-inline inline-dots source-titles">
                                                <li class="text-bo">ཆོས་དང་དོན་རྣམ་པར་འབྱེད་པ།</li>
                                                <li class="text-sa">Dharmārtha­vibhaṅga</li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 quote">
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
                                        <div class="col-md-6">
                                            <h5>Published Tuesday, 2nd July 2019</h5>
                                            <h3>The Perfection of Generosity</h3>
                                            <ul class="list-inline inline-dots source-titles">
                                                <li class="text-bo">སྦྱིན་པའི་ཕ་རོལ་ཏུ་ཕྱིན་པ།</li>
                                                <li class="text-sa">Dāna­pāramitā</li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 quote">
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
                                        <div class="col-md-12">
                                            <h5>View all of our publications</h5>
                                            <div class="vertical-pad">
                                                <a href="#" class="btn btn-danger btn-lg">Visit our Online Reading Room</a>
                                            </div>
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
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 title-box-addon">
                </div>
            </div>
        </div>
    </div>
    
    <div id="about-band">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-offset-1 col-md-10 col-lg-offset-0 col-lg-12">
                    <div class="row text-center">
                        <div class="col-md-6 col-lg-4">
                            <div class="rubrik vision">
                                <div class="thumbnail">
                                    <img src="<?php echo $circles_imgs[0] ?>">
                                </div>
                                <h2>Vision</h2>
                                <p>Our 100 year vision is to preserve a living tradition for future generations. Read more about our vision, goals and the scope of our work.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="rubrik urgency">
                                <div class="thumbnail">
                                    <img src="<?php echo $circles_imgs[1] ?>">
                                </div>
                                <h2>Urgency</h2>
                                <p>Knowledge of Classical Tibetan is rapidly disappearing. Read more about the urgency of translation as a means of preservation.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="rubrik sponsorship">
                                <div class="thumbnail">
                                    <img src="<?php echo $circles_imgs[2] ?>">
                                </div>
                                <h2>Sponsorship</h2>
                                <p>Sponsor a page of translation today, and become a part of this historic movement to ensure these gems of wisdom live on for future generations.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-lg-offset-2">
                            <div class="rubrik progress">
                                <div class="thumbnail">
                                    <img src="<?php echo $circles_imgs[3] ?>">
                                </div>
                                <h2>Progress</h2>
                                <p>As of 2010 only 5% of the Kangyur - the Words of the Buddha, or sutras, had been translated into modern languages. Take a look at our current progress.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-0">
                            <div class="rubrik grants">
                                <div class="thumbnail">
                                    <img src="<?php echo $circles_imgs[4] ?>">
                                </div>
                                <h2>Grants</h2>
                                <p>Currently supporting 297 translators, editors and consultants, 84000's translation grant cycle opens annually for new applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--<div class="divider"></div>-->

    <div id="news-band">
        <div class="container">
            <h2>84000 News</h2>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="panel panel-default" data-match-height="news-item">
                        <div class="panel-heading">
                            ANNOUNCEMENTS
                        </div>
                        <div class="news-banner text-shadow">
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
                <div class="col-sm-6 col-md-4 col-lg-3">
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
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="panel panel-default" data-match-height="news-item">
                        <div class="panel-heading">
                            ANNOUNCEMENTS
                        </div>
                        <div class="announcement-banner text-shadow">
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
                <div class="col-sm-6 col-md-4 col-lg-3">
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
                <div class="col-sm-6 col-md-4 col-lg-3">
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
                <div class="col-sm-6 col-md-4 col-lg-3">
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
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="panel panel-default" data-match-height="news-item">
                        <div class="panel-heading">
                            ANNOUNCEMENTS
                        </div>
                        <div class="announcement-banner text-shadow">
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
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="panel panel-default" data-match-height="news-item">
                        <div class="panel-heading">
                            More News
                        </div>
                        <div class="panel-body text-center">
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
                <div class="col-md-6 col-lg-9">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/cLmRgUAPmVM?showinfo=1&rel=0&vq=hd720"></iframe>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 text-center top-margin">

                    <p>
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
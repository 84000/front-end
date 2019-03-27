<div class="container">

    <div class="row">
        <div class="col-md-9 col-md-merge-right">
            <div class="panel panel-default panel-how-you-can-help foreground">

                <div class="panel-img-header has-img thumbnail">
                    <img src="/imgs/Tree_offwhite.jpg" data-max-horizontal-crop="100" data-max-vertical-crop="80">
                    <h1>Subscribe to our newsletter</h1>
                </div>
                
                <div class="panel-body">

                    <form class="form-horizontal">

                         <div class="form-group">
                            <label for="fname" class="col-sm-3 control-label">First name</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="fname" placeholder="">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="lname" class="col-sm-3 control-label">Last name</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="lname" placeholder="">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputEmail3" class="col-sm-3 control-label">Email</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="cname" class="col-sm-3 control-label">Chinese name</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="cname" placeholder="">
                            </div>
                        </div>
                       
                        <div class="form-group">
                            <div class="col-sm-offset-3 col-sm-9">
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="language"> English
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="language"> 我想訂閱 84000中文電訊（繁體）
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-3 col-sm-9">
                                <button type="submit" class="btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </form>

                </div>

                <div class="panel-footer">
                    <p class="text-muted">84000 is a 501(c)(3) nonprofit organization incorporated in Colorado, USA. Donations are tax-deductible to the full extent allowed by U.S. law. 84000′s federal tax I.D. number is 45-4302237. Donations made from outside of the USA are subject to the laws of the country from which they are made. 84000 is pleased to honor the Donor Bill of Rights.</p>
                </div>

                <div class="panel-footer sharing">
                    Share this page: 
                    <a href="#" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href="#" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                    <a href="#" target="_blank"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
                </div>
                
            </div>
        </div>
        <div class="col-md-3 col-md-merge-left col-md-pad-top">
            <?php 

                include("sponsor-stats.php");

            ?>
        </div>

    </div>

</div>
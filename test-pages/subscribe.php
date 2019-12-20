<div class="container">

    <div class="row">
        <div class="col-md-9 col-md-merge-right">
            <div class="panel panel-default main-panel panel-how-you-can-help foreground">

                <div class="panel-img-header has-img thumbnail">
                    <img src="/imgs/illustrations/Tree_offwhite.jpg" alt="header image" class="stretch">
                    <h1>Subscribe to our newsletter</h1>
                </div>
                
                <div class="panel-body">

                    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class="form-horizontal">

                        <input name="oid" type="hidden" value="00Di0000000iQGg">
                        <input name="retURL" type="hidden" value="https://84000.co/how-you-can-help/subscribed">
                        <input id="lead_source" name="lead_source" type="hidden" value="Web">
                        <input id="company" name="company" type="hidden" value="Self">
                        <input id="00Ni000000CCgKc" name="00Ni000000CCgKc" type="hidden" value="1">

                        <div class="form-group">
                            <label for="first_name" class="col-sm-4 control-label">First name</label>
                            <div class="col-sm-8 col-md-4">
                                <input type="text" name="first_name" class="form-control" id="first_name" placeholder="" required="required">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="last_name" class="col-sm-4 control-label">Last name</label>
                            <div class="col-sm-8 col-md-4">
                                <input type="text" name="last_name" class="form-control" id="last_name" placeholder="" required="required">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="col-sm-4 control-label">Email</label>
                            <div class="col-sm-8 col-md-6">
                                <input type="email" name="email" class="form-control" id="email" placeholder="" required="required">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-4 col-sm-8">
                                <div class="center-vertical">
                                    <div>
                                        <button type="submit" class="btn btn-primary">Subscribe</button>
                                    </div>
                                    <div class="small text-muted">
                                        我想訂閱 84000中文電訊（繁體）<a href="/ch-how-you-can-help/ch-spread-the-word">Subscribe here instead</a>.
                                    </div>
                                </div>
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
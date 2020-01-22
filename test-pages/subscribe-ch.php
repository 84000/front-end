<div class="container">

    <div class="row">
        <div class="col-md-9 col-md-merge-right">
            <div class="panel panel-default main-panel panel-how-you-can-help foreground">

                <div class="panel-img-header has-img thumbnail">
                    <img src="/imgs/illustrations/Tree_offwhite.jpg" alt="header image" class="stretch">
                    <h1>訂閱電訊</h1>
                </div>
                
                <div class="panel-body">

                    <div class="alert alert-info alert-dismissible fade in text-center small" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <p>This form is also available in <a href="/how-you-can-help/spread-the-word" class="alert-link">English</a></p>
                    </div>

                    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class="form-horizontal">

                        <input name="oid" type="hidden" value="00Di0000000iQGg">
                        <input name="retURL" type="hidden" value="https://84000.co/how-you-can-help/subscribed">
                        <input name="lead_source" type="hidden" value="Web">
                        <input name="company" type="hidden" value="Self">
                        <input name="00Ni000000CCgKm" type="hidden" value="1">

                        <div class="form-group">
                            <label for="last_name" class="col-xs-3 col-sm-4 control-label">姓</label>
                            <div class="col-xs-2 col-sm-2">
                                <input type="text" name="last_name" class="form-control" id="last_name" placeholder="" required="required">
                            </div>
                            <label for="first_name" class="col-xs-1 col-sm-1 control-label">名</label>
                            <div class="col-xs-3 col-sm-3">
                                <input type="text" name="first_name" class="form-control" id="first_name" placeholder="" required="required">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="col-xs-3 col-sm-4 control-label">電子信箱</label>
                            <div class="col-xs-9 col-sm-8">
                                <input type="email" name="email" class="form-control" id="email" placeholder="" required="required">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-xs-offset-3 col-xs-9 col-sm-offset-4 col-sm-8">
                                <button type="submit" class="btn btn-primary">訂閱電訊</button>
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
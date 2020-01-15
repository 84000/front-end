<div class="container">

    <div class="row">
        <div class="col-md-9 col-md-merge-right">
            <div class="panel panel-default main-panel panel-how-you-can-help foreground">

                <?php if($_GET['response'] == 'failed') { ?>
                    <div class="panel-heading danger text-center">
                        <p>Unfortunately your donation was not successful. If you think you think you may have made a mistake then please try filling out the form again.</p>
                    </div>
                <?php } else { ?>
                    <?php if($_GET['lang'] !== 'zh') { ?>
                        <div class="alert alert-success alert-dismissible fade in text-center" role="alert">
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            Prefer this in <a href="?lang=zh" class="alert-link">Chinese</a>?
                        </div>
                    <?php } ?>
                <?php } ?>

                <div class="panel-img-header thumbnail has-img">
                    <img src="/imgs/DSCN0799-2.jpg" alt="header image" class="stretch">
                    <h1>Sponsor a Page</h1>
                </div>

                <div class="panel-body">
                    <blockquote>
                        <p>It is entirely possible that the survival of the Buddhadharma could depend on it being translated into other languages.</p>
                        <footer>Dzongsar Khyentse Rinpoche</footer>
                    </blockquote>

                    <h3>Support our translation work</h2>
                    <p>From US$5 a word to US$250 a page, you can sponsor the translation of the words of the Buddha, either as a one-time or a recurring donation. </p>
                    <p>As of November 2017, all <strong>recurring</strong> donations are matched one-for-one by our Matching Funds sponsors. <strong>That means you donate $100, we get $200.</strong></p>

                    <hr>

                    <div class="row">
                        <div class="col-lg-10">

                            <form action="https://faas.cloud.clickandpledge.com" method="POST" class="form-horizontal labels-left">

                                <input id="ItemID1" name="ItemID1" type="hidden" value="1">
                                <input id="ItemName1" name="ItemName1" type="hidden" value="Donation">
                                <input id="SKU1" name="SKU1" type="hidden" value="DON">
                                <input id="Quantity1" name="Quantity1" type="hidden" value="1">
                                <!-- Update these to live urls!!! -->
                                <input id="OnSuccessUrl" name="OnSuccessUrl" type="hidden" value="https://fe.84000-translate.org/test-pages/donate-success">
                                <input id="OnDeclineUrl" name="OnDeclineUrl" type="hidden" value="https://fe.84000-translate.org/test-pages/donate-failed">
                                <input id="OnErrorUrl" name="OnErrorUrl" type="hidden" value="https://fe.84000-translate.org/test-pages/donate-failed">
                                <input id="AccountGuid" name="AccountGuid" type="hidden" value="167f92fe-b51a-4ab2-b2de-746c189f5397">
                                <input id="AccountID" name="AccountID" type="hidden" value="27894">
                                <input id="WID" name="WID" type="hidden" value="75113">
                                <input id="RefID" name="RefID" type="hidden" value="Website">
                                <input id="Tracker" name="Tracker" type="hidden" value="Website">
                                <input id="SendReceipt" name="SendReceipt" type="hidden" value="1">
                                <!-- Update orderMode for Production -->
                                <input id="OrderMode" name="OrderMode" type="hidden" value="Test">
                                <!-- <input id="OrderMode" name="OrderMode" type="hidden" value="Production"> -->
                                <input id="TransactionType" name="TransactionType" type="hidden" value="Payment">
                                <input id="DecimalMarkMode" name="DecimalMark" type="hidden" value="US">
                                <input id="UnitDeductible1" name="UnitDeductible1" type="hidden" value="100%">

                                

                                <div class="form-group">
                                    <label for="amount1" class="col-sm-4 control-label">Select amount</label>
                                    <div class="col-sm-8">
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="UnitPrice1" value="5" id="amount1" data-hide-on-checked="#otherAmountContainer" required="required">
                                                US$5 = a word
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="UnitPrice1" value="25" data-hide-on-checked="#otherAmountContainer" required="required">
                                                US$25 = a verse
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="UnitPrice1" value="50" data-hide-on-checked="#otherAmountContainer" required="required">
                                                US$50 = a sentence
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="UnitPrice1" value="125" data-hide-on-checked="#otherAmountContainer" required="required">
                                                US$125 = half a page
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="UnitPrice1" value="250" data-hide-on-checked="#otherAmountContainer" checked="checked" required="required">
                                                US$250 = a page
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="UnitPrice1" value="500" data-hide-on-checked="#otherAmountContainer" required="required">
                                                US$500 = 2 pages
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="UnitPrice1" value="500" data-hide-on-checked="#otherAmountContainer" required="required">
                                                US$1000 = 4 pages
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="UnitPrice1" value="" id="amountOther" data-show-on-checked="#otherAmountContainer">
                                                Other amount
                                            </label>
                                        </div>
                                    </div>

                                </div>

                                <div class="form-group collapse persist" id="otherAmountContainer">
                                    <label for="otherAmount" class="col-sm-4 control-label">Enter US$ amount</label>
                                    <div class="col-sm-4">
                                        <input type="text" class="form-control" name="Other1" id="otherAmount" placeholder="" data-set-value-on-change="#amountOther">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="Single" class="col-sm-4 control-label">One-time or recurring</label>
                                    <div class="col-sm-8">
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="Installment" checked="checked" id="Single" checked="checked" data-hide-on-checked="#recurringIntevalContainer" required="required">
                                                This is a one-time donation
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="Installment" id="Recurring" value="999" data-show-on-checked="#recurringIntevalContainer" required="required">
                                                I want to double the impact by making a recurring donation
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group collapse persist" id="recurringIntevalContainer">
                                    <label for="recurringInteval" class="control-label sr-only">Recurr</label>
                                    <div class="col-sm-offset-4 col-sm-4">
                                        <select id="recurringInteval" name="Periodicity" class="form-control">
                                            <option value="Month" selected="selected">Monthly</option>
                                            <option value="Quarter">Quarterly</option>
                                            <option value="Year">Anually</option>
                                        </select>
                                    </div>
                                </div>

                                <hr>

                                <div class="form-group">
                                    <div class="col-lg-12">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" data-show-on-checked="#dedicationContainer"> 
                                                Dedicate this donation to someone
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="collapse persist" id="dedicationContainer">

                                    <div class="form-group">
                                        <label for="occasion" class="col-sm-4 control-label">Occasion</label>
                                        <div class="col-sm-8">
                                            <input name="FieldName3400" type="hidden" value="HonorType">
                                            <select id="occasion" name="FieldValue3400" class="form-control">
                                                <option value="Celebration">In celebration of someone (e.g. anniversary, birthday, graduation etc.)</option>
                                                <option value="Honor">In the name of someone</option>
                                                <option value="Memorial">In memory of someone (deceased)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="dedicationName" class="col-sm-4 control-label">Dedicated to</label>
                                        <div class="col-sm-8">
                                            <input type="hidden" name="FieldName3401" value="Honoree">
                                            <input type="text" name="FieldValue3401" class="form-control" id="dedicationName" placeholder="">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-lg-12">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" data-show-on-checked="#ecardContainer"> 
                                                    Send an eCard
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="collapse persist" id="ecardContainer">

                                        <div class="form-group">
                                            <label for="ecardName" class="col-sm-4 control-label">eCard Recipient</label>
                                            <div class="col-sm-8">
                                                <input type="hidden" name="FieldName3402" value="Notify">
                                                <input type="text" name="FieldValue3402" class="form-control" id="ecardName" placeholder="e.g. Anne Jones">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="ecardEmail" class="col-sm-4 control-label">Recipient email</label>
                                            <div class="col-sm-8">
                                                <input type="hidden" name="FieldName3404" value="NotificationEmail">
                                                <input type="email" name="FieldValue3404" class="form-control" id="ecardEmail" placeholder="e.g. ann.jones@example.com">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="ecardMessage" class="col-sm-4 control-label">Message</label>
                                            <div class="col-sm-8">
                                                <input type="hidden" name="FieldName3406" value="HonorComment">
                                                <textarea name="FieldValue3406" class="form-control" id="ecardMessage" placeholder="" rows="4"></textarea>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <hr>

                                
                                <?php if($_GET['lang'] !== 'zh') { ?>

                                    <!-- English name -->
                                    <div class="form-group">
                                        <input autocomplete="off" name="FieldName2600" type="hidden" value="Title">
                                        <label for="title" class="col-sm-4 control-label">Title</label>
                                        <div class="col-sm-3">
                                            <select name="FieldValue2600" id="title" class="form-control">
                                                <option value=""></option>
                                                <option value="mr">Mr.</option>
                                                <option value="ms">Ms.</option>
                                                <option value="mrs">Mrs.</option>
                                                <option value="dr">Dr.</option>
                                                <option value="prof">Prof.</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="fname" class="col-sm-4 control-label">First name</label>
                                        <div class="col-sm-6">
                                            <input type="text" name="BillingFirstName" class="form-control" id="fname" placeholder="" required="required">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="lname" class="col-sm-4 control-label">Family name</label>
                                        <div class="col-sm-6">
                                            <input type="text" name="BillingLastName" class="form-control" id="lname" placeholder="" required="required">
                                        </div>
                                    </div>

                                <?php } else { ?>

                                    <!-- Chinese name -->
                                    <div class="form-group">
                                        <label for="chineseName" class="col-sm-4 control-label">Name</label>
                                        <div class="col-sm-6">
                                            <input type="hidden" name="FieldName26009" value="ChineseName">
                                            <input type="text" name="FieldValue26009" class="form-control" id="chineseName" placeholder="" required="required">
                                        </div>
                                    </div>

                                <?php } ?>

                                <div class="form-group">
                                    <input type="hidden" id="BillingPhone" name="BillingPhone" size="30">
                                    <label for="phone" class="col-xs-12 col-sm-4 control-label">Tel. <small class="text-muted">(optional)</small></label>
                                    <div class="col-xs-5 col-sm-3">
                                        <?php include('select-country-phone.php') ?>
                                    </div>
                                    <div class="col-xs-7 col-sm-5">
                                        <input type="tel" name="callingmainphone" class="form-control" id="phoneLocal" placeholder="e.g. 897 654 321" pattern="\d{5,14}" data-merge-values-on-change="#BillingPhone">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="email" class="col-sm-4 control-label">Email address</label>
                                    <div class="col-sm-8">
                                        <input type="email" name="BillingEmail" class="form-control" id="email" placeholder="e.g. ann.jones@example.com" required="required">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-offset-4 col-md-8">
                                        <div class="checkbox">
                                            <label>
                                                <?php if($_GET['lang'] !== 'zh') { ?>

                                                    <!-- English newsletter -->
                                                    <input type="hidden" name="FieldName24001" value="GetNewsletterEnglish">
                                                    <input type="checkbox" name="FieldValue24001" value="yes"> Add me to the mailing list

                                                <?php } else { ?>

                                                    <!-- Chinese newsletter -->
                                                    <input type="hidden" name="FieldName24002" value="GetNewsletterTraditional">
                                                    <input type="checkbox" name="FieldValue24002" value="yes">  我想訂閱 84000中文電訊（繁體）
                                                
                                                <?php } ?>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-offset-4 col-sm-8">
                                        <div class="checkbox">
                                            <label>
                                                <input autocomplete="off" name="FieldName24004" type="hidden" value="MarkAsAnonymous">
                                                <input type="checkbox" name="FieldValue24004" value="yes"> Make this an anonymous donation
                                            </label>
                                        </div>
                                        <p class="text-muted small">We nevertheless require your personal details to process payment.</p>
                                    </div>
                                </div>

                                <?php include('payment-options.php') ?>

                                <hr>

                                <div class="form-group">
                                    <div class="col-sm-offset-4 col-sm-8">
                                        <input type="submit" class="btn btn-primary" value="Submit Your Donation">
                                    </div>
                                </div>
                            
                            </form>
                        </div>
                    </div>  
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

<div class="modal fade" id="iframe-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <!-- iframe added in code -->
        </div>
    </div>
</div>

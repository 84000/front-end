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
                    <h1>Download Dāna</h1>
                </div>
                
                <div class="panel-body">
                    <blockquote>
                        <p>It is entirely possible that the survival of the Buddhadharma could depend on it being translated into other languages.</p>
                        <footer>Dzongsar Khyentse Rinpoche</footer>
                    </blockquote>

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

                        <div class="row">

                            <div class="col-lg-7">

                                <!-- <h4 class="no-top-margin">I would like to offer the following dāna for my download:</h4> -->

                                <div class="form-group">
                                    <label for="amount1" class="col-sm-4 control-label">Select amount</label>
                                    <div class="col-sm-8">
                                        <?php foreach (['5', '10', '15', '20', '25', 'other'] as $key => $amount) { ?>
                                            <div class="radio">
                                                <label>
                                                    <?php if($amount == 'other') { ?>
                                                        <input type="radio" name="UnitPrice1" id="amountOther" value="" data-show-on-checked="#otherAmountContainer" required="required"> 
                                                        Other amount
                                                    <?php } else { ?>
                                                        <input type="radio" name="UnitPrice1" id="amount<?php echo $amount ?>" value="<?php echo $amount ?>" data-hide-on-checked="#otherAmountContainer" required="required"> 
                                                        <?php echo "US$".$amount; ?>
                                                    <?php } ?>
                                                </label>
                                            </div>
                                        <?php } ?>
                                    </div>
                                </div>

                                <div class="form-group collapse persist" id="otherAmountContainer">
                                    <label for="otherAmount" class="col-sm-4 control-label">Enter US$ amount</label>
                                    <div class="col-sm-4">
                                        <input type="text" class="form-control" name="Other1" id="otherAmount" placeholder="" data-set-value-on-change="#amountOther">
                                    </div>
                                </div>

                                <?php if($_GET['lang'] !== 'zh') { ?>

                                    <!-- English name -->

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
                                        <div class="col-sm-8">
                                            <input type="hidden" name="FieldName26009" value="ChineseName">
                                            <input type="text" name="FieldValue26009" class="form-control" id="chineseName" placeholder="" required="required">
                                        </div>
                                    </div>

                                <?php } ?>

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

                                <?php include('payment-options.php') ?>

                                <hr>

                                <div class="form-group">
                                    <div class="col-sm-offset-4 col-sm-8">
                                        <input type="submit" class="btn btn-primary" value="Submit Your Donation">
                                    </div>
                                </div>

                                <div class="alert alert-warning text-center small">
                                    <p>All donations are considered unrestricted contributions, enabling 84000 to carry out their goals of translation and global access efficiently and effectively</p>    
                                </div>

                            </div>

                            <hr class="hidden-lg">

                            <div class="col-lg-5 border-left-lg">

                                <h3 class="no-top-margin">What is Dāna?</h3>
                                <p><em>Dāna</em> is the practice of voluntarily giving, the cultivation of generosity, the donation of alms, material, energy, or wisdom. In its broadest form, it is considered one of the most fundamental of all Buddhist practices.</p>
                                <p>Ensuring that successive generations around the world will be able to easily access and understand the Buddha’s wisdom is 84000’s gift to humanity. And our Download Dāna initiative is a reminder, to all friends and supporters who appreciate our gift, to give back in return—one download at a time.</p>
                                <p>Dāna is one of the first topics in the Buddha’s graduated talks. It counteracts attachment, greed, miserliness, covetousness, and is the opposite of taking what is not given. It is also, as the first of the six or ten pāramitās (perfections) in theMahāyāna tradition, the first step on the bodhisattva’s path to awakening. And all schools of Buddhism recognize that an act of giving is of most benefit when, coupled with wisdom, one practices generosity with a view that something wholesome will come of it. The nature and quantity of the gift itself is often considered less important.</p>
                                <p>So no matter who you are, where you are, and what amount you give we encourage you to use our Download Dāna option as an opportunity to cultivate your own practice, and to help us continue to give the gift of wisdom to the world.</p>
                                
                                <h3>What will we use it for?</h3>
                                <p>Your donation will help to fund the costs of improving the functionality and features of online Reading Room to make the Buddha’s words accessible to all who have even one ounce of curiosity.</p>
                                
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

<div class="modal fade" id="iframe-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <!-- iframe added in code -->
        </div>
    </div>
</div>

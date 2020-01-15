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
                        <div class="alert alert-info alert-dismissible fade in text-center" role="alert">
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

                                <h4 class="no-top-margin">I would like to offer the following dāna for my download:</h4>

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

                                <hr>

                                <div class="form-group">
                                    <div class="col-md-offset-4 col-md-8 col-lg-offset-0 col-lg-12">
                                        <div class="checkbox">
                                            <label>
                                                <input autocomplete="off" name="FieldName24004" type="hidden" value="MarkAsAnonymous">
                                                <input type="checkbox" name="FieldValue24004" value="yes"> Make this an anonymous donation
                                            </label>
                                        </div>
                                        <p class="text-muted small">We nevertheless require your personal details to process payment.</p>
                                    </div>
                                </div>

                                <?php if($_GET['lang'] !== 'zh') { ?>

                                    <!-- English name -->
                                    <div class="form-group">
                                        <input autocomplete="off" name="FieldName2600" type="hidden" value="Title">
                                        <label for="title" class="col-sm-4 control-label">Title</label>
                                        <div class="col-sm-4">
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
                                        <div class="col-sm-7">
                                            <input type="hidden" name="FieldName26009" value="ChineseName">
                                            <input type="text" name="FieldValue26009" class="form-control" id="chineseName" placeholder="" required="required">
                                        </div>
                                    </div>

                                <?php } ?>

                                <div class="form-group">
                                    <input type="hidden" id="BillingPhone" name="BillingPhone" size="30">
                                    <label for="phone" class="col-xs-12 col-sm-4 control-label">Tel. (optional)</label>
                                    <div class="col-sm-3">
                                        <?php include('select-country-phone.php') ?>
                                    </div>
                                    <div class="col-sm-5">
                                        <input type="tel" name="callingmainphone" class="form-control" id="phoneLocal" placeholder="" pattern="\d{5,14}" data-merge-values-on-change="#BillingPhone">
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

                                <div class="tabs-container top-margin">

                                    <input type="hidden" name="PaymentType" id="paymentType" value="CreditCard">

                                    <ul class="nav nav-tabs" role="tablist">
                                        <li role="presentation" class="active">
                                            <a href="#payment-cc" aria-controls="payment-cc" role="tab" data-toggle="tab" data-onclick-set='{"#paymentType": "CreditCard"}' data-input-required="#cardName,#cardNumber,#cvvNumber,#expiryYear">
                                                Credit Card
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#payment-ft" aria-controls="payment-ft" role="tab" data-toggle="tab" data-onclick-set='{"#paymentType": "Check"}' data-input-required="#accountName,#routingNumber,#accountNumber">
                                                Electronic Funds Transfer
                                            </a>
                                        </li>
                                    </ul>

                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="payment-cc">

                                            <div class="form-group">
                                                <label for="cardName" class="col-sm-4 control-label">Name on card</label>
                                                <div class="col-sm-8">
                                                    <input type="text" name="NameOnCard" class="form-control" id="cardName" placeholder="" required="required">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="cardNumber" class="col-sm-4 control-label">Card Number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" name="CardNumber" class="form-control" id="cardNumber" placeholder="" required="required" pattern="\d{16,19}">
                                                </div>
                                            </div>

                                            <div class="form-group vertical-align">
                                                <label for="cvvNumber" class="col-sm-4 control-label">CVV Number</label>
                                                <div class="col-sm-8">
                                                    <div class="center-vertical">
                                                        <span>
                                                            <input type="number" name="Cvv2" class="form-control" id="cvvNumber" placeholder="" required="required" pattern="\d{3,4}" style="width:100px;">
                                                        </span>
                                                        <span>
                                                            <a href="#iframe-modal" class="small" data-toggle="modal" data-target="#iframe-modal" data-href="https://www.cvvnumber.com/cvv.html">
                                                                What is a CVV number?
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="expiryMonth" class="col-xs-12 col-sm-4 control-label">Expiry</label>
                                                <div class="col-xs-6 col-sm-4">
                                                    <select id="expiryMonth" name="ExpirationMonth" class="form-control">
                                                        <option value="01">January</option>
                                                        <option value="02">February</option>
                                                        <option value="03">March</option>
                                                        <option value="04">April</option>
                                                        <option value="05">May</option>
                                                        <option value="06">June</option>
                                                        <option value="07">July</option>
                                                        <option value="08">August</option>
                                                        <option value="09">September</option>
                                                        <option value="10">October</option>
                                                        <option value="11">November</option>
                                                        <option value="12">December</option>
                                                    </select>
                                                </div>
                                                <div class="col-xs-6 col-sm-4">
                                                    <input type="number" name="ExpirationYear" id="expiryYear" class="form-control" placeholder="YYYY" pattern="\d{4}">
                                                </div>
                                            </div>

                                        </div>

                                        <div role="tabpanel" class="tab-pane" id="payment-ft">
                                            
                                            <div class="form-group">
                                                <label for="accountType" class="col-sm-4 control-label">Account Type</label>
                                                <div class="col-sm-4">
                                                    <div class="radio">
                                                        <label>
                                                            <input type="radio" name="AccountType" value="CheckingAccount" id="accountType" checked="checked"> Checking
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="radio">
                                                        <label>
                                                            <input type="radio" name="accountType" value="SavingsAccount"> Savings
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="accountName" class="col-sm-4 control-label">Name on account</label>
                                                <div class="col-sm-8">
                                                    <input type="text" name="NameOnAccount" class="form-control" id="accountName" placeholder="">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="routingNumber" class="col-sm-4 control-label">Routing number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" name="RoutingNumber" class="form-control" id="routingNumber" placeholder="">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="accountNumber" class="col-sm-4 control-label">Account number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" name="AccountNumber" class="form-control" id="accountNumber" placeholder="">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="address1" class="col-sm-4 control-label">Billing address</label>
                                            <div class="col-sm-8">
                                                <input type="text" name="BillingAddress1" class="form-control" id="address1" placeholder="" required="required">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="address2" class="col-sm-4 control-label sr-only">Address 2</label>
                                            <div class="col-sm-offset-4 col-sm-8">
                                                <input type="text" name="BillingAddress2" class="form-control" id="address2" placeholder="">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="addressCity" class="col-sm-4 control-label">City</label>
                                            <div class="col-sm-5">
                                                <input type="text" name="BillingCity" class="form-control" id="addressCity" placeholder="">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="addressCountry" class="col-sm-4 control-label">Country</label>
                                            <div class="col-sm-8">

                                                <?php include('select-country-address.php') ?>

                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="addressState" class="col-sm-4 control-label">State / province</label>
                                            <div class="col-sm-5">
                                                <input type="text" name="BillingStateProvince" class="form-control" id="addressState" placeholder="">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="addressZip" class="col-sm-4 control-label">Postcode / Zip</label>
                                            <div class="col-sm-5">
                                                <input type="text" name="BillingPostalCode" class="form-control" id="addressZip" placeholder="" required="required">
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <hr>

                                <div class="form-group">
                                    <div class="col-sm-offset-4 col-sm-8">
                                        <input type="submit" class="btn btn-primary" value="Submit Your Donation">
                                    </div>
                                </div>
                            </div>

                            <hr class="hidden-lg">

                            <div class="col-lg-5 border-left-lg">

                                <div class="alert alert-warning text-center small">
                                    <p>All donations are considered unrestricted contributions, enabling 84000 to carry out their goals of translation and global access efficiently and effectively</p>    
                                </div>

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

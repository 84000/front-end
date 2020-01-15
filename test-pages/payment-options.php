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
                <div class="col-sm-8">
                    <div class="radio">
                        <div class="center-vertical">
                            <div>
                                <label>
                                    <input type="radio" name="AccountType" value="CheckingAccount" id="accountType" checked="checked"> Checking
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" name="AccountType" value="SavingsAccount"> Savings
                                </label>
                            </div>
                        </div>
                        
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
            <label for="address2" class="col-sm-4 control-label">Line 2 <small class="text-muted">(optional)</small></label>
            <div class="col-sm-8">
                <input type="text" name="BillingAddress2" class="form-control" id="address2" placeholder="">
            </div>
        </div>

        <div class="form-group">
            <label for="addressCity" class="col-sm-4 control-label">City <small class="text-muted">(optional)</small></label>
            <div class="col-sm-8">
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
            <label for="addressState" class="col-sm-4 control-label">State <small class="text-muted">(optional)</small></label>
            <div class="col-sm-6">
                <input type="text" name="BillingStateProvince" class="form-control" id="addressState" placeholder="">
            </div>
        </div>

        <div class="form-group">
            <label for="addressZip" class="col-sm-4 control-label">Postcode / Zip</label>
            <div class="col-sm-4">
                <input type="text" name="BillingPostalCode" class="form-control" id="addressZip" placeholder="" required="required">
            </div>
        </div>

    </div>

</div>
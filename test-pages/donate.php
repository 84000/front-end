<div class="container">

    <div class="row">
        <div class="col-md-9 col-md-merge-right">
            <div class="panel panel-default main-panel panel-how-you-can-help foreground">

                <div class="panel-img-header">
                    <h1>Download Dāna!</h1>
                </div>
                
                <div class="panel-body">

                    <form action="?template=donate" method="POST" class="form-horizontal labels-left">

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
                                                        <input type="radio" name="amount" id="amountOther" value="other" data-show-on-checked="#otherAmountContainer" required="required"> 
                                                        Other amount
                                                    <?php } else { ?>
                                                        <input type="radio" name="amount" id="amount<?php echo $amount ?>" value="<?php echo $amount ?>" data-hide-on-checked="#otherAmountContainer" required="required"> 
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
                                        <input type="text" class="form-control" id="otherAmount" placeholder="">
                                    </div>
                                </div>

                                <hr>

                                <div class="form-group">
                                    <div class="col-md-offset-4 col-md-8 col-lg-offset-0 col-lg-12">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" name="anonymous"> Make this an anonymous donation
                                            </label>
                                        </div>
                                        <p class="text-muted small">We nevertheless require your personal details to process payment.</p>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="title" class="col-sm-4 control-label">Title</label>
                                    <div class="col-sm-4">
                                        <select name="title" id="title" class="form-control">
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
                                    <div class="col-sm-7">
                                        <input type="text" class="form-control" id="fname" placeholder="" required="required">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="lname" class="col-sm-4 control-label">Family name</label>
                                    <div class="col-sm-7">
                                        <input type="text" class="form-control" id="lname" placeholder="" required="required">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="phone" class="col-xs-12 col-sm-4 control-label">Tel. (optional)</label>
                                    <div class="col-sm-3">

<select id="phoneCode" name="callingcountryCode" class="form-control">
    <optgroup label="Common countries">
        <option data-countrycode="US" value="1">USA (+1)</option>
    </optgroup>
    <optgroup label="All countries">
        <option data-countrycode="DZ" value="213">Algeria (+213)</option>
        <option data-countrycode="AD" value="376">Andorra (+376)</option>
        <option data-countrycode="AO" value="244">Angola (+244)</option>
        <option data-countrycode="AI" value="1264">Anguilla (+1264)</option>
        <option data-countrycode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
        <option data-countrycode="AR" value="54">Argentina (+54)</option>
        <option data-countrycode="AM" value="374">Armenia (+374)</option>
        <option data-countrycode="AW" value="297">Aruba (+297)</option>
        <option data-countrycode="AU" value="61">Australia (+61)</option>
        <option data-countrycode="AT" value="43">Austria (+43)</option>
        <option data-countrycode="AZ" value="994">Azerbaijan (+994)</option>
        <option data-countrycode="BS" value="1242">Bahamas (+1242)</option>
        <option data-countrycode="BH" value="973">Bahrain (+973)</option>
        <option data-countrycode="BD" value="880">Bangladesh (+880)</option>
        <option data-countrycode="BB" value="1246">Barbados (+1246)</option>
        <option data-countrycode="BY" value="375">Belarus (+375)</option>
        <option data-countrycode="BE" value="32">Belgium (+32)</option>
        <option data-countrycode="BZ" value="501">Belize (+501)</option>
        <option data-countrycode="BJ" value="229">Benin (+229)</option>
        <option data-countrycode="BM" value="1441">Bermuda (+1441)</option>
        <option data-countrycode="BT" value="975">Bhutan (+975)</option>
        <option data-countrycode="BO" value="591">Bolivia (+591)</option>
        <option data-countrycode="BA" value="387">Bosnia Herzegovina (+387)</option>
        <option data-countrycode="BW" value="267">Botswana (+267)</option>
        <option data-countrycode="BR" value="55">Brazil (+55)</option>
        <option data-countrycode="BN" value="673">Brunei (+673)</option>
        <option data-countrycode="BG" value="359">Bulgaria (+359)</option>
        <option data-countrycode="BF" value="226">Burkina Faso (+226)</option>
        <option data-countrycode="BI" value="257">Burundi (+257)</option>
        <option data-countrycode="KH" value="855">Cambodia (+855)</option>
        <option data-countrycode="CM" value="237">Cameroon (+237)</option>
        <option data-countrycode="CA" value="1">Canada (+1)</option>
        <option data-countrycode="CV" value="238">Cape Verde Islands (+238)</option>
        <option data-countrycode="KY" value="1345">Cayman Islands (+1345)</option>
        <option data-countrycode="CF" value="236">Central African Republic (+236)</option>
        <option data-countrycode="CL" value="56">Chile (+56)</option>
        <option data-countrycode="CN" value="86">China (+86)</option>
        <option data-countrycode="CO" value="57">Colombia (+57)</option>
        <option data-countrycode="KM" value="269">Comoros (+269)</option>
        <option data-countrycode="CG" value="242">Congo (+242)</option>
        <option data-countrycode="CK" value="682">Cook Islands (+682)</option>
        <option data-countrycode="CR" value="506">Costa Rica (+506)</option>
        <option data-countrycode="HR" value="385">Croatia (+385)</option>
        <option data-countrycode="CU" value="53">Cuba (+53)</option>
        <option data-countrycode="CY" value="90392">Cyprus North (+90392)</option>
        <option data-countrycode="CY" value="357">Cyprus South (+357)</option>
        <option data-countrycode="CZ" value="42">Czech Republic (+42)</option>
        <option data-countrycode="DK" value="45">Denmark (+45)</option>
        <option data-countrycode="DJ" value="253">Djibouti (+253)</option>
        <option data-countrycode="DM" value="1809">Dominica (+1809)</option>
        <option data-countrycode="DO" value="1809">Dominican Republic (+1809)</option>
        <option data-countrycode="EC" value="593">Ecuador (+593)</option>
        <option data-countrycode="EG" value="20">Egypt (+20)</option>
        <option data-countrycode="SV" value="503">El Salvador (+503)</option>
        <option data-countrycode="GQ" value="240">Equatorial Guinea (+240)</option>
        <option data-countrycode="ER" value="291">Eritrea (+291)</option>
        <option data-countrycode="EE" value="372">Estonia (+372)</option>
        <option data-countrycode="ET" value="251">Ethiopia (+251)</option>
        <option data-countrycode="FK" value="500">Falkland Islands (+500)</option>
        <option data-countrycode="FO" value="298">Faroe Islands (+298)</option>
        <option data-countrycode="FJ" value="679">Fiji (+679)</option>
        <option data-countrycode="FI" value="358">Finland (+358)</option>
        <option data-countrycode="FR" value="33">France (+33)</option>
        <option data-countrycode="GF" value="594">French Guiana (+594)</option>
        <option data-countrycode="PF" value="689">French Polynesia (+689)</option>
        <option data-countrycode="GA" value="241">Gabon (+241)</option>
        <option data-countrycode="GM" value="220">Gambia (+220)</option>
        <option data-countrycode="GE" value="7880">Georgia (+7880)</option>
        <option data-countrycode="DE" value="49">Germany (+49)</option>
        <option data-countrycode="GH" value="233">Ghana (+233)</option>
        <option data-countrycode="GI" value="350">Gibraltar (+350)</option>
        <option data-countrycode="GR" value="30">Greece (+30)</option>
        <option data-countrycode="GL" value="299">Greenland (+299)</option>
        <option data-countrycode="GD" value="1473">Grenada (+1473)</option>
        <option data-countrycode="GP" value="590">Guadeloupe (+590)</option>
        <option data-countrycode="GU" value="671">Guam (+671)</option>
        <option data-countrycode="GT" value="502">Guatemala (+502)</option>
        <option data-countrycode="GN" value="224">Guinea (+224)</option>
        <option data-countrycode="GW" value="245">Guinea - Bissau (+245)</option>
        <option data-countrycode="GY" value="592">Guyana (+592)</option>
        <option data-countrycode="HT" value="509">Haiti (+509)</option>
        <option data-countrycode="HN" value="504">Honduras (+504)</option>
        <option data-countrycode="HK" value="852">Hong Kong (+852)</option>
        <option data-countrycode="HU" value="36">Hungary (+36)</option>
        <option data-countrycode="IS" value="354">Iceland (+354)</option>
        <option data-countrycode="IN" value="91">India (+91)</option>
        <option data-countrycode="ID" value="62">Indonesia (+62)</option>
        <option data-countrycode="IR" value="98">Iran (+98)</option>
        <option data-countrycode="IQ" value="964">Iraq (+964)</option>
        <option data-countrycode="IE" value="353">Ireland (+353)</option>
        <option data-countrycode="IL" value="972">Israel (+972)</option>
        <option data-countrycode="IT" value="39">Italy (+39)</option>
        <option data-countrycode="JM" value="1876">Jamaica (+1876)</option>
        <option data-countrycode="JP" value="81">Japan (+81)</option>
        <option data-countrycode="JO" value="962">Jordan (+962)</option>
        <option data-countrycode="KZ" value="7">Kazakhstan (+7)</option>
        <option data-countrycode="KE" value="254">Kenya (+254)</option>
        <option data-countrycode="KI" value="686">Kiribati (+686)</option>
        <option data-countrycode="KP" value="850">Korea North (+850)</option>
        <option data-countrycode="KR" value="82">Korea South (+82)</option>
        <option data-countrycode="KW" value="965">Kuwait (+965)</option>
        <option data-countrycode="KG" value="996">Kyrgyzstan (+996)</option>
        <option data-countrycode="LA" value="856">Laos (+856)</option>
        <option data-countrycode="LV" value="371">Latvia (+371)</option>
        <option data-countrycode="LB" value="961">Lebanon (+961)</option>
        <option data-countrycode="LS" value="266">Lesotho (+266)</option>
        <option data-countrycode="LR" value="231">Liberia (+231)</option>
        <option data-countrycode="LY" value="218">Libya (+218)</option>
        <option data-countrycode="LI" value="417">Liechtenstein (+417)</option>
        <option data-countrycode="LT" value="370">Lithuania (+370)</option>
        <option data-countrycode="LU" value="352">Luxembourg (+352)</option>
        <option data-countrycode="MO" value="853">Macao (+853)</option>
        <option data-countrycode="MK" value="389">Macedonia (+389)</option>
        <option data-countrycode="MG" value="261">Madagascar (+261)</option>
        <option data-countrycode="MW" value="265">Malawi (+265)</option>
        <option data-countrycode="MY" value="60">Malaysia (+60)</option>
        <option data-countrycode="MV" value="960">Maldives (+960)</option>
        <option data-countrycode="ML" value="223">Mali (+223)</option>
        <option data-countrycode="MT" value="356">Malta (+356)</option>
        <option data-countrycode="MH" value="692">Marshall Islands (+692)</option>
        <option data-countrycode="MQ" value="596">Martinique (+596)</option>
        <option data-countrycode="MR" value="222">Mauritania (+222)</option>
        <option data-countrycode="YT" value="269">Mayotte (+269)</option>
        <option data-countrycode="MX" value="52">Mexico (+52)</option>
        <option data-countrycode="FM" value="691">Micronesia (+691)</option>
        <option data-countrycode="MD" value="373">Moldova (+373)</option>
        <option data-countrycode="MC" value="377">Monaco (+377)</option>
        <option data-countrycode="MN" value="976">Mongolia (+976)</option>
        <option data-countrycode="MS" value="1664">Montserrat (+1664)</option>
        <option data-countrycode="MA" value="212">Morocco (+212)</option>
        <option data-countrycode="MZ" value="258">Mozambique (+258)</option>
        <option data-countrycode="MN" value="95">Myanmar (+95)</option>
        <option data-countrycode="NA" value="264">Namibia (+264)</option>
        <option data-countrycode="NR" value="674">Nauru (+674)</option>
        <option data-countrycode="NP" value="977">Nepal (+977)</option>
        <option data-countrycode="NL" value="31">Netherlands (+31)</option>
        <option data-countrycode="NC" value="687">New Caledonia (+687)</option>
        <option data-countrycode="NZ" value="64">New Zealand (+64)</option>
        <option data-countrycode="NI" value="505">Nicaragua (+505)</option>
        <option data-countrycode="NE" value="227">Niger (+227)</option>
        <option data-countrycode="NG" value="234">Nigeria (+234)</option>
        <option data-countrycode="NU" value="683">Niue (+683)</option>
        <option data-countrycode="NF" value="672">Norfolk Islands (+672)</option>
        <option data-countrycode="NP" value="670">Northern Marianas (+670)</option>
        <option data-countrycode="NO" value="47">Norway (+47)</option>
        <option data-countrycode="OM" value="968">Oman (+968)</option>
        <option data-countrycode="PW" value="680">Palau (+680)</option>
        <option data-countrycode="PA" value="507">Panama (+507)</option>
        <option data-countrycode="PG" value="675">Papua New Guinea (+675)</option>
        <option data-countrycode="PY" value="595">Paraguay (+595)</option>
        <option data-countrycode="PE" value="51">Peru (+51)</option>
        <option data-countrycode="PH" value="63">Philippines (+63)</option>
        <option data-countrycode="PL" value="48">Poland (+48)</option>
        <option data-countrycode="PT" value="351">Portugal (+351)</option>
        <option data-countrycode="PR" value="1787">Puerto Rico (+1787)</option>
        <option data-countrycode="QA" value="974">Qatar (+974)</option>
        <option data-countrycode="RE" value="262">Reunion (+262)</option>
        <option data-countrycode="RO" value="40">Romania (+40)</option>
        <option data-countrycode="RU" value="7">Russia (+7)</option>
        <option data-countrycode="RW" value="250">Rwanda (+250)</option>
        <option data-countrycode="SM" value="378">San Marino (+378)</option>
        <option data-countrycode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
        <option data-countrycode="SA" value="966">Saudi Arabia (+966)</option>
        <option data-countrycode="SN" value="221">Senegal (+221)</option>
        <option data-countrycode="CS" value="381">Serbia (+381)</option>
        <option data-countrycode="SC" value="248">Seychelles (+248)</option>
        <option data-countrycode="SL" value="232">Sierra Leone (+232)</option>
        <option data-countrycode="SG" value="65">Singapore (+65)</option>
        <option data-countrycode="SK" value="421">Slovak Republic (+421)</option>
        <option data-countrycode="SI" value="386">Slovenia (+386)</option>
        <option data-countrycode="SB" value="677">Solomon Islands (+677)</option>
        <option data-countrycode="SO" value="252">Somalia (+252)</option>
        <option data-countrycode="ZA" value="27">South Africa (+27)</option>
        <option data-countrycode="ES" value="34">Spain (+34)</option>
        <option data-countrycode="LK" value="94">Sri Lanka (+94)</option>
        <option data-countrycode="SH" value="290">St. Helena (+290)</option>
        <option data-countrycode="KN" value="1869">St. Kitts (+1869)</option>
        <option data-countrycode="SC" value="1758">St. Lucia (+1758)</option>
        <option data-countrycode="SD" value="249">Sudan (+249)</option>
        <option data-countrycode="SR" value="597">Suriname (+597)</option>
        <option data-countrycode="SZ" value="268">Swaziland (+268)</option>
        <option data-countrycode="SE" value="46">Sweden (+46)</option>
        <option data-countrycode="CH" value="41">Switzerland (+41)</option>
        <option data-countrycode="SI" value="963">Syria (+963)</option>
        <option data-countrycode="TW" value="886">Taiwan (+886)</option>
        <option data-countrycode="TJ" value="7">Tajikstan (+7)</option>
        <option data-countrycode="TH" value="66">Thailand (+66)</option>
        <option data-countrycode="TG" value="228">Togo (+228)</option>
        <option data-countrycode="TO" value="676">Tonga (+676)</option>
        <option data-countrycode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
        <option data-countrycode="TN" value="216">Tunisia (+216)</option>
        <option data-countrycode="TR" value="90">Turkey (+90)</option>
        <option data-countrycode="TM" value="7">Turkmenistan (+7)</option>
        <option data-countrycode="TM" value="993">Turkmenistan (+993)</option>
        <option data-countrycode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
        <option data-countrycode="TV" value="688">Tuvalu (+688)</option>
        <option data-countrycode="UG" value="256">Uganda (+256)</option>
        <option data-countrycode="GB" value="44">United Kingdom (+44)</option>
        <option data-countrycode="UA" value="380">Ukraine (+380)</option>
        <option data-countrycode="AE" value="971">United Arab Emirates (+971)</option>
        <option data-countrycode="UY" value="598">Uruguay (+598)</option>
        <!-- <option data-countrycode="US" value="1">USA (+1)</option> -->
        <option data-countrycode="UZ" value="7">Uzbekistan (+7)</option>
        <option data-countrycode="VU" value="678">Vanuatu (+678)</option>
        <option data-countrycode="VA" value="379">Vatican City (+379)</option>
        <option data-countrycode="VE" value="58">Venezuela (+58)</option>
        <option data-countrycode="VN" value="84">Vietnam (+84)</option>
        <option data-countrycode="VG" value="84">Virgin Islands - British (+1284)</option>
        <option data-countrycode="VI" value="84">Virgin Islands - US (+1340)</option>
        <option data-countrycode="WF" value="681">Wallis &amp; Futuna (+681)</option>
        <option data-countrycode="YE" value="969">Yemen (North)(+969)</option>
        <option data-countrycode="YE" value="967">Yemen (South)(+967)</option>
        <option data-countrycode="ZM" value="260">Zambia (+260)</option>
        <option data-countrycode="ZW" value="263">Zimbabwe (+263)</option>
    </optgroup>
</select>

                                    </div>
                                    <div class="col-sm-5">
                                        <input type="tel" class="form-control" id="phoneLocal" placeholder="" pattern="\d{5,14}">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="email" class="col-sm-4 control-label">Email address</label>
                                    <div class="col-sm-8">
                                        <input type="email" class="form-control" id="email" placeholder="" required="required">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-offset-4 col-md-8">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" name="subscribe"> Add me to the mailing list
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="tabs-container top-margin">

                                    <ul class="nav nav-tabs" role="tablist">
                                        <li role="presentation" class="active">
                                            <a href="#payment-cc" aria-controls="payment-cc" role="tab" data-toggle="tab" data-input-required="#cardName,#cardNumber,#cvvNumber">Credit Card</a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#payment-ft" aria-controls="payment-ft" role="tab" data-toggle="tab" data-input-required="#accountName,#routingNumber,#accountNumber">Electronic Funds Transfer</a>
                                        </li>
                                    </ul>

                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="payment-cc">

                                            <div class="form-group">
                                                <label for="cardName" class="col-sm-4 control-label">Name on card</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="cardName" placeholder="" required="required">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="cardNumber" class="col-sm-4 control-label">Card Number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="cardNumber" placeholder="" required="required" pattern="\d{16,19}">
                                                </div>
                                            </div>

                                            <div class="form-group vertical-align">
                                                <label for="cvvNumber" class="col-sm-4 control-label">CVV Number</label>
                                                <div class="col-sm-8">
                                                    <div class="center-vertical">
                                                        <span>
                                                            <input type="number" class="form-control" id="cvvNumber" placeholder="" required="required" pattern="\d{3,4}" style="width:100px;">
                                                        </span>
                                                        <span>
                                                            <a href="#iframe-modal" class="small" data-toggle="modal" data-target="#iframe-modal" data-href="http://www.cvvnumber.com/cvv.html">
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
                                                    <select id="expiryYear" name="ExpirationYear" class="form-control">
                                                        <option value="20">2020</option>
                                                        <option value="21">2021</option>
                                                        <option value="22">2022</option>
                                                        <option value="23">2023</option>
                                                        <option value="24">2024</option>
                                                        <option value="25">2025</option>
                                                        <option value="26">2026</option>
                                                        <option value="27">2027</option>
                                                        <option value="28">2028</option>
                                                        <option value="29">2029</option>
                                                        <option value="30">2030</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>

                                        <div role="tabpanel" class="tab-pane" id="payment-ft">
                                            
                                            <div class="form-group">
                                                <label for="accountType" class="col-sm-4 control-label">Account Type</label>
                                                <div class="col-sm-4">
                                                    <div class="radio">
                                                        <label>
                                                            <input type="radio" name="accountType" value="1" checked="checked"> Checking
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="radio">
                                                        <label>
                                                            <input type="radio" name="accountType" value="2"> Savings
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="accountName" class="col-sm-4 control-label">Name on account</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="accountName" placeholder="">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="routingNumber" class="col-sm-4 control-label">Routing number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="routingNumber" placeholder="">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="accountNumber" class="col-sm-4 control-label">Account number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="accountNumber" placeholder="">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="address1" class="col-sm-4 control-label">Billing address</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" id="address1" placeholder="" required="required">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="address2" class="col-sm-4 control-label sr-only">Address 2</label>
                                            <div class="col-sm-offset-4 col-sm-8">
                                                <input type="text" class="form-control" id="address2" placeholder="">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="addressCity" class="col-sm-4 control-label">City</label>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control" id="addressCity" placeholder="">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="addressCountry" class="col-sm-4 control-label">Country</label>
                                            <div class="col-sm-8">

<select id="addressCountry" name="BillingCountryCode" class="form-control">
    <optgroup label="Common coutries">
        <option value="840">USA</option>
    </optgroup>
    <optgroup label="All coutries">
        <option value="004">Afghanistan</option>
        <option value="008">Albania</option>
        <option value="012">Algeria</option>
        <option value="016">American Samoa</option>
        <option value="020">Andorra</option>
        <option value="024">Angola</option>
        <option value="010">Antarctica</option>
        <option value="028">Antigua and Barbuda</option>
        <option value="032">Argentina</option>
        <option value="051">Armenia</option>
        <option value="533">Aruba</option>
        <option value="036">Australia</option>
        <option value="040">Austria</option>
        <option value="031">Azerbaijan Rep.</option>
        <option value="044">Bahamas </option>
        <option value="048">Bahrain</option>
        <option value="050">Bangladesh</option>
        <option value="052">Barbados</option>
        <option value="112">Belarus</option>
        <option value="056">Belgium</option>
        <option value="084">Belize</option>
        <option value="204">Benin</option>
        <option value="060">Bermuda</option>
        <option value="064">Bhutan</option>
        <option value="068">Bolivia</option>
        <option value="070">Bosnia</option>
        <option value="072">Botswana</option>
        <option value="076">Brazil</option>
        <option value="096">Brunei</option>
        <option value="100">Bulgaria</option>
        <option value="854">Burkina Faso</option>
        <option value="108">Burundi</option>
        <option value="116">Cambodia</option>
        <option value="120">Cameroon</option>
        <option value="124">Canada</option>
        <option value="132">Cape Verde Islands</option>
        <option value="136">Cayman Islands</option>
        <option value="140">Central African Republic</option>
        <option value="148">Chad</option>
        <option value="152">Chile</option>
        <option value="156">China People's Republic</option>
        <option value="170">Columbia</option>
        <option value="174">Comoros</option>
        <option value="178">Congo</option>
        <option value="184">Cook Islands</option>
        <option value="188">Costa Rica</option>
        <option value="191">Croatia</option>
        <option value="192">Cuba</option>
        <option value="196">Cyprus</option>
        <option value="203">Czech Republic</option>
        <option value="208">Denmark</option>
        <option value="262">Djibouti</option>
        <option value="214">Dominican Republic</option>
        <option value="218">Ecuador</option>
        <option value="818">Egypt</option>
        <option value="222">El Salvador</option>
        <option value="226">Equatorial Guinea Malabo</option>
        <option value="232">Eritrea</option>
        <option value="233">Estonia</option>
        <option value="231">Ethiopia</option>
        <option value="242">Fiji Islands</option>
        <option value="246">Finland</option>
        <option value="250">France</option>
        <option value="254">French Guiana</option>
        <option value="258">French Polynesia</option>
        <option value="266">Gabon</option>
        <option value="270">Gambia</option>
        <option value="268">Georgia</option>
        <option value="276">Germany</option>
        <option value="288">Ghana</option>
        <option value="292">Gibraltar</option>
        <option value="300">Greece</option>
        <option value="304">Greenland</option>
        <option value="308">Grenada</option>
        <option value="312">Guadeloupe</option>
        <option value="316">Guam</option>
        <option value="320">Guatemala</option>
        <option value="324">Guinea</option>
        <option value="328">Guyana</option>
        <option value="332">Haiti</option>
        <option value="340">Honduras</option>
        <option value="344">Hong Kong</option>
        <option value="348">Hungary</option>
        <option value="352">Iceland</option>
        <option value="356">India</option>
        <option value="360">Indonesia</option>
        <option value="364">Iran</option>
        <option value="368">Iraq</option>
        <option value="372">Ireland</option>
        <option value="376">Israel</option>
        <option value="380">Italy</option>
        <option value="388">Jamaica</option>
        <option value="392">Japan</option>
        <option value="400">Jordan</option>
        <option value="398">Kazakhstan</option>
        <option value="404">Kenya</option>
        <option value="296">Kiribati</option>
        <option value="410">Korea, Republic of</option>
        <option value="414">Kuwait</option>
        <option value="417">Kyrgystan</option>
        <option value="428">Latvia</option>
        <option value="422">Lebanon</option>
        <option value="426">Lesotho</option>
        <option value="430">Liberia</option>
        <option value="434">Libya</option>
        <option value="438">Liechtenstein</option>
        <option value="440">Lithuania</option>
        <option value="442">Luxembourg</option>
        <option value="446">Macao</option>
        <option value="807">Macedonia</option>
        <option value="450">Madagascar</option>
        <option value="454">Malawi</option>
        <option value="458">Malaysia</option>
        <option value="462">Maldives</option>
        <option value="466">Mali</option>
        <option value="470">Malta</option>
        <option value="584">Marshall Islands</option>
        <option value="474">Martinique</option>
        <option value="478">Mauritania</option>
        <option value="480">Mauritius</option>
        <option value="484">Mexico</option>
        <option value="583">Micronesia</option>
        <option value="498">Moldova</option>
        <option value="492">Monaco</option>
        <option value="496">Mongolia</option>
        <option value="499">Montenegro</option>
        <option value="500">Montserrat</option>
        <option value="504">Morocco</option>
        <option value="508">Mozambique</option>
        <option value="104">Myanmar</option>
        <option value="516">Namibia</option>
        <option value="520">Nauru</option>
        <option value="524">Nepal</option>
        <option value="528">Netherlands</option>
        <option value="530">Netherlands Antilles</option>
        <option value="540">New Caledonia</option>
        <option value="554">New Zealand</option>
        <option value="558">Nicaragua</option>
        <option value="562">Niger</option>
        <option value="566">Nigeria</option>
        <option value="570">Niue</option>
        <option value="580">Northern Mariana Islands</option>
        <option value="578">Norway</option>
        <option value="512">Oman</option>
        <option value="586">Pakistan</option>
        <option value="585">Palau</option>
        <option value="591">Panama</option>
        <option value="598">Papua New Guinea</option>
        <option value="600">Paraguay</option>
        <option value="604">Peru</option>
        <option value="608">Phillippines</option>
        <option value="616">Poland</option>
        <option value="620">Portugal</option>
        <option value="634">Qatar</option>
        <option value="642">Romania</option>
        <option value="643">Russian Federation</option>
        <option value="646">Rwanda</option>
        <option value="654">Saint Helena</option>
        <option value="659">Saint Kitts and Nevis</option>
        <option value="666">Saint Pierre and Miquelon</option>
        <option value="674">San Marino</option>
        <option value="678">Sao Tome and Principe</option>
        <option value="682">Saudi Arabia</option>
        <option value="686">Senegal</option>
        <option value="688">Serbia</option>
        <option value="690">Seychelles</option>
        <option value="694">Sierra Leone</option>
        <option value="702">Singapore</option>
        <option value="703">Slovakia</option>
        <option value="705">Slovenia</option>
        <option value="090">Solomon Islands</option>
        <option value="706">Somalia</option>
        <option value="710">South Africa</option>
        <option value="724">Spain</option>
        <option value="144">Sri Lanka</option>
        <option value="736">Sudan</option>
        <option value="740">Suriname</option>
        <option value="748">Swaziland</option>
        <option value="752">Sweden</option>
        <option value="756">Switzerland</option>
        <option value="760">Syria</option>
        <option value="158">Taiwan</option>
        <option value="762">Tajikistan</option>
        <option value="834">Tanzania</option>
        <option value="764">Thailand</option>
        <option value="772">Tokelau</option>
        <option value="768">Tonga</option>
        <option value="780">Trinidad and Tobago</option>
        <option value="788">Tunisia</option>
        <option value="792">Turkey</option>
        <option value="795">Turkmenistan</option>
        <option value="798">Tuvalu</option>
        <option value="800">Uganda</option>
        <option value="804">Ukraine</option>
        <option value="784">United Arab Emirates</option>
        <option value="826">United Kingdom</option>
        <!-- <option value="840">United States of America</option>-->
        <option value="858">Uruguay</option>
        <option value="860">Uzbekistan</option>
        <option value="548">Vanuatu</option>
        <option value="336">Vatican City</option>
        <option value="862">Venzuela</option>
        <option value="704">Vietnam</option>
        <option value="876">Wallis and Futuna</option>
        <option value="016">Western Samoa</option>
        <option value="887">Yemen, People's Demo. Rep. Of</option>
        <option value="807">Yugoslavia</option>
        <option value="894">Zambia</option>
        <option value="716">Zimbabwe</option>
    </optgroup>
</select>

                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="addressState" class="col-sm-4 control-label">State / province</label>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control" id="addressState" placeholder="">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="addressZip" class="col-sm-4 control-label">Postcode / Zip</label>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control" id="addressZip" placeholder="" required="required">
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

                                <div class="alert alert-warning text-center">
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

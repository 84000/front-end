<?php /*
<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">Join Us</h3>
    </div>
    <div class="panel-body">
        <p>With the help of our 108 <a href="#">founding sponsors</a> and thousands of individual donors, we provide funding to the translators who are working to safeguard these important teachings for future generations.</p>
        <table id="translation-stats">
            <tbody>
                <tr>
                    <td>70000</td>
                    <th>Kangyur pages to be translated</th>
                </tr>
                <tr>
                    <td>13495</td>
                    <th>Pages have been sponsored</th>
                </tr>
                <tr>
                    <td>56505</td>
                    <th>Pages to go</th>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <a href="/test-pages/?template=sponsor-page" class="btn btn-primary">Sponsor a page now</a>
        </div>
    </div>
</div>*/ ?>
<?php 
    $rr_host = "https://read.84000.co";
    switch ($_SERVER['SERVER_NAME']) {
        case 'fe.84000.local':
            $rr_host = "http://read.84000.local";
            break;
        case 'fe.84000-translate.org':
            $rr_host = "https://read.84000-translate.org";
        case 'trans84000.staging.wpengine.com':
            $rr_host = "https://read.84000-translate.org";
            break;
        default:
            #default already set
            break;
    }
?>
<div id="project-progress-loading" data-onload-replace='{"#project-progress-loading":"<?php echo $rr_host; ?>/widget/progress-panel.html#panel"}'>

    <div class="panel panel-default">
        <div class="panel-body loading"></div>
    </div>

</div>
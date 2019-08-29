$.noConflict();
jQuery(document).ready(function($) {
	
	// Disable page while processing js
	// -------------------------------------
	(function ($) { 
		$.wait = function (text, cancel) {
			var $body = self==top ? $("body") : window.parent.$("body");
			if(cancel){
				if($("#wait").length){
					$("#wait").fadeOut(500, function(){
						$(this).remove();
						$body.removeClass("wait");
					});
				}
				else {
					$body.removeClass("wait");
				}
			}
			else{
			    if(!$body.hasClass("wait")){
			    	var $wait = $("<span>", {"id": "wait"}).text(text);
			    	var $window = $(window);
			    	$body.addClass("wait");
					$body.append($wait);
					$wait.css({"top": (($window.height() - $wait.outerHeight()) / 2) + "px", "left": (($window.width() - $wait.outerWidth()) / 2) + "px"});
			    }
			    else {
			    	$("#wait").text(text);
			    }
			}
		}
	}($));
	$.wait("", true);

	// Use cache for loading scripts
	// ---------------------------------
	$.ajaxSetup({
		cache: true
	});

	// Media size
	// --------------------------------------
	(function ($) { 
		$.mediaSize = function () {
			var size = 'lg';
			var sizes = ['xs','sm','md','lg'];
			for (var i = sizes.length - 1; i >= 0; i--) {
				if($('#media_test .visible-'+sizes[i]+":visible").length){
					size = sizes[i];
					break;
				};
			};
			var media = 'screen';
			var medias = ['print','screen'];
			for (var i = medias.length - 1; i >= 0; i--) {
				if($('#media_test .visible-'+medias[i]+":visible").length){
					media = medias[i];
					break;
				};
			};
			var mode = 'desktop';
			var modes = ['mobile', 'desktop'];
			for (var i = modes.length - 1; i >= 0; i--) {
				if($('#media_test .visible-'+modes[i]+":visible").length){
					mode = modes[i];
					break;
				};
			};
			var hover = $('#media_test .event-hover:visible').length ? 'hover' : '';
			$('html')
				.removeClass(sizes.join(' '))
				.removeClass(medias.join(' '))
				.removeClass(modes.join(' '))
				.removeClass('hover')
				.addClass(size)
				.addClass(media)
				.addClass(mode)
				.addClass(hover);
		}
	}($));
	$.mediaSize();

	// Detect if an element is in view
	// ---------------------------------------
	(function ($) { 
		$.fn.elementInView = function (){

		    var $window = $(window);
		    var docViewTop = $window.scrollTop();
		    var docViewBottom = docViewTop + $window.height();

		    if(!this.offset()) return "missing";

		    var elementTop = this.offset().top;
		    var elementBottom = elementTop + this.height();
		    var position = "inView";

		    if(elementTop > docViewTop && elementTop < docViewBottom){
		        position = "topInView";
		    }
		    else if(elementBottom <= docViewTop){
		        position = "above";
		    }
		    else if(elementTop >= docViewBottom){
		        position = "below";
		    }
		    //console.log("elementTop:"+elementTop+",elementBottom:"+elementBottom+",docViewTop:"+docViewTop+",docViewBottom:"+docViewBottom+"="+position);
		    return position;
		};
	}($));

	// Handle links to the old reading room.
	// ------------ DO NOT REMOVE ------------
	// Unfortunately we can't use apache for 
	// this as GWT used hash based links
	// ---------------------------------------
	
	function legacyLink(){

		// A hash in the root indicates a link to 
		// the old reading room.
		// --------------------------------------
		// Test cases:
		// /old-app/#!ReadingRoom/UT22084-051-004/0
		// /#UT22084-044-005/title
		// /#UT22084-044-005/introduction
		// /#!ReadingRoom/UT22084-046-001/0
		// /#section-O1JC114941JC12924
		// /#lobby
		// /#ReadingRoom.html
		// /#translatedTextList
		// /#download-request/UT22084-062-012
		// /#download/UT22084-062-012

		if(
			window.location.hash 							// Has a hash
			&& (
				window.location.pathname == '/' 			// It is in the url root
				|| window.location.pathname == '/old-app/'	// It is directed to the old, old app
			)
		){
			var hash = window.location.hash;
			var hashSplit = hash.split('/');
			var pageId = "";
			var pageIdSplit = [];
			var pageUri = "";
			for (var i = hashSplit.length - 1; i >= 0; i--) {
				if(hashSplit[i].toLowerCase().indexOf("translatedtextlist") > -1){
					pageUri = '/section/all-translated.html';
					break;
				}
				if(hashSplit[i].toLowerCase().indexOf("ut22") > -1){
					pageId = hashSplit[i].replace('#','');
					pageUri = '/translation/' + pageId + '.html';
					if(hashSplit.length == 2 && hashSplit[1] !== pageId){
						pageUri += '#' + hashSplit[1];
					}
					break;
				}
				if(hashSplit[i].toLowerCase().indexOf("o1jc") > -1){
					pageId = hashSplit[i].replace('#','');
					pageIdSplit = pageId.split('-');
					if(pageIdSplit.length == 2 ){
						pageUri = '/section/' + pageIdSplit[1] + '.html';
					}
					break;
				}
			};

			if(pageUri){
				location.href = pageUri;
				return true;
			}
		}

		// If not redirecting then return false
		// ------------------------------------
		return false;
	}

	// Make multiple elements the same height
	// ------------------------------------------
	(function ($) { 
		$.matchHeights = function ($element) {
			if($('html').hasClass('screen')){

				var heights = {};

				// set heights to auto
				$element.find("[data-match-height]").height('auto');

				// Match to a particular element
				$element.find("[data-match-height].match-this-height:visible").each(function(){
					var $this = $(this);
					heights[$this.data('match-height')] = $this.outerHeight();
				});

				// Match to the tallest in the group
				if($.isEmptyObject(heights)){
					$element.find("[data-match-height]:visible").each(function(){
						var $this = $(this);
						var this_height = $this.outerHeight();
						var height_group = $this.data('match-height');
						if(!heights[height_group] || this_height > heights[height_group]){
							heights[height_group] = this_height;
						}
					});
				}

				$.each(heights, function(group, val) {
					$("[data-match-height='" + group + "']").each(function(){
						var $this = $(this);
						if(!$this.data('match-height-media') || $('html').is($this.data('match-height-media'))){
							$this.height(val + 'px');
						}
					});
				});
			}
		}
	}($));

	// Render a section that is hidden with .render-in-viewport
	// --------------------------------------------------------
	(function ($) { 
		$.fn.render = function (callback) {
			var $element = $(this);
			$.wait("Rendering this section...");
	    	setTimeout(function(){
	    		if($element.hasClass('render-in-viewport')){

					// render the node
			    	$element.removeClass('render-in-viewport');

			    	// delete the preview node
			    	$element.siblings(".unrendered-preview").remove();
			    	$element.siblings("a.render").remove();

			    	// add an option to collapse it again
			    	$link = $("<a>", {"href": "#" + $element.attr("id"), "class": "preview show-on-scroll", "title": "Collapse this section"});
			    	$btn = $("<span>", {"class": "btn-round"});
			    	$icon = $("<i>", {"class": "fa fa-times"});
			    	$btn.append($icon);
			    	$link.hide().append($btn);
			    	$element.append($link);
			    	$link.fadeIn(500);

			    	// Match heights on newly visible
			    	$.matchHeights($element);

			    	// Do other scroll events
			    	$(window).trigger("scroll");

			    	// Do other callbacks
			    	if(callback){
			    		callback();
			    	}
				}
	    		$.wait("", true);
	        },100);
	    }
	}($));

	// Create a preview for a section
	// The content is hidden with .render-in-viewport
	// --------------------------------------------------------
	(function($){
		$.fn.unrenderedPreview = function (){

			var $element = $(this);
		    var $section = $element.parent();

		    if($section.length){

		    	var $previewContent;

		    	//Don't preview things that are very short
		    	// --------------------------------------

		    	if($section.attr('id') == "notes"){
		    		if($element.find("div.footnote").length > 5){
		    			$previewContent = $element.find("div.footnote").slice(0,5).clone();
		    		}
		    	}
		    	else if($section.attr('id') == "glossary"){
		    		if($element.find("div.glossary-item").length > 2){
		    			$previewContent = $element.find("div.glossary-item").slice(0,2).clone();
		    		}
		    	}
		    	else {

		    		// Add nodes until there's x characters in the preview
		    		// ------------------------------------------------------

		    		$previewContent = $();
		    		var longSection = false;
		    		var previewHTML = "";
		    		var child;
		    		
		    		$element.children().each(function(index){
		    			$child = $(this).clone();
		    			previewHTML += $child.html().replace(/<\/?[^>]+(>|$)/g, "");
		    			$previewContent = $previewContent.add($child);

		    			if(previewHTML.length > 700){
		    				longSection = true;
		    				return false;
		    			}
		    		});

		    		// If it's not very long cancel the preview
		    		// --------------------------------------------------
		    		if(!longSection){
		    			$previewContent = "";
		    		}
		    	}

		    	if($previewContent){

		    		// Add a preview to the DOM
		    		// ----------------------------------

		    		var $preview = $("<div>", {"class": "unrendered-preview"});

			    	$preview.append($previewContent);
			    	
			    	$preview.find(".glossarize, .glossarize-complete, .glossary-item").each(function(){
			    		$(this).addClass("ignore");
			    	});
			    	
			    	$preview.find(".glossary-item .occurences").each(function(){
			    		$(this).addClass("hidden");
			    	});

			    	$preview.find("[id]").each(function(){
			    		$(this).attr("id", '');
			    	});

			    	$section.append($preview);

			    	if(!$element.attr("id")){
			    		$element.attr("id", $section.attr('id') + "-content")
			    	}

			    	$link = $("<a>", {"href": "#" + $element.attr("id"), "class": "render log-click", "title": "Expand this section"});
			    	$btn = $("<span>", {"class": "btn-round"});
			    	$icon = $("<i>", {"class": "fa fa-angle-down"});
			    	$btn.append($icon);
			    	$link.append($btn);
			    	$section.append($link);
					
					var previewHeight = $preview.height();
					var previewLimit = 350;
					$preview.height(((previewHeight < previewLimit ? previewHeight : previewLimit) - 50) + 'px');

					$element.addClass('render-in-viewport');

					// Remove the button that triggered this
		    		// -------------------------------------
					$element.find("a.preview").remove();
		    	}
		    	else {

		    		// The content is short, just show it
		    		// ----------------------------------
		    		$element.removeClass('render-in-viewport');
		    	}
		    }
		}
	}($));

	// Render sections as they come into view
    // -----------------------------------------------------------
    /*
    (function ($) { 
		$.renderInViewport = function () {
			$('.screen section > .render-in-viewport').each(function(){

				// If there's no preview then we can ignore this one
				// -------------------------------------------------
			    var $element = $(this);
			    var $visible = $element.siblings(".unrendered-preview");

			    if($visible.length){

			    	// Use this to check it's in the viewport (the child element is hidden)
			    	// --------------------------------------------------------------------
			    	var elementInViewStatus = $visible.elementInView();
			    	if(elementInViewStatus == 'topInView'){
				    	$element.render();
					}
					else if(elementInViewStatus == 'below'){
						return false;
					}

			    }
			});
	    };
	}($));*/

	// Click to render a section
	// ------------------------------------------
	$(document).on("click", "a.render", function (e) {
		e.preventDefault();
		$($(this).attr("href")).render();
	});

	// Click to hide a section and show a preview
	// -------------------------------------------
	$(document).on("click", "a.preview", function (e) {
		e.preventDefault();
		$($(this).attr("href")).unrenderedPreview();
	});

	// On load create previews for unrendered sections
    // -----------------------------------------------------------
	$('.screen section > .render-in-viewport:hidden').each(function(){
		$(this).unrenderedPreview();
	});

	// Flash a button
	// --------------------------------------
	(function ($) { 
		$.fn.pulse = function () {
			var $button = this;
			// Let other updates happen
			setTimeout(function(){
				// Flash the button
	    	    $button.addClass("pulse");
	    	    // Let the transition happen
	    	    setTimeout(function(){
	    	    	// Un-flash the button
	    	    	$button.removeClass("pulse");
	    	    },750);
    	    },100);
		}
	}($));

	// Scroll to an anchor
	// -----------------------------------------
	(function ($) { 
		$.scrollToAnchor = function (hash, delay, parent, offset, callback) {

			if(!legacyLink() && $("html.screen").length) {

				var $target;
				if(!hash) hash = window.location.hash;
				if(hash) $target = $(hash);

				if($target){

					// Compile the scroll function, with callback.
					// -------------------------------------------
					if(!delay) delay = 0;
					if(!parent) parent = "html, body";

					var scrollToAnchorScroll = function(){
						if(!offset) offset = $target.offset();
						if(offset){
							$(parent).delay(delay).animate({ scrollTop: (offset.top - 30) }, "slow", callback);
						}
						else {
							if(callback){
								callback();
							}
						}
					}

					// The content may be hidden. Show it first.
					// -----------------------------------------
					var $collapsed = $target.closest(".collapse");
					var $unrendered = $target.closest(".render-in-viewport");
					var $tabbed = $target.closest(".tab-pane").length ? $('[href="#'+$target.closest(".tab-pane").attr('id')+'"]') : new Array ;

					if($collapsed.length){
						$collapsed.on('shown.bs.collapse', function () {
							scrollToAnchorScroll();
						});
						// Close sibling panels
						$collapsed.parents('.panel-group').find(".collapse.in").collapse('hide');
						// Show this panel
						$collapsed.collapse('show');
					}
					else if($unrendered.length){
						$unrendered.render(function(){
							scrollToAnchorScroll();
						});
					}
					else if($tabbed.length){
						$tabbed.on('shown.bs.tab', function () {
							scrollToAnchorScroll();
						});
						$tabbed.tab('show');
					}
					else {
						scrollToAnchorScroll();
					}

				}
				else {
					if(callback){
						callback();
					}
				}
			}
		}
	}($));

	var rewindHistory = new Array;

	$(document).on("click",'a.scroll-to-anchor', function() {

		// Check it's on this page
		// -------------------------------------------
		if (window.location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && window.location.hostname == this.hostname) {
			
			var $this = $(this);

			if($this.not(".pop-up")){

				// Rewind functionality
				// -------------------------------------------
				$target = $(this.hash);

				var $buttonContainer = $("#rewind-btn-container");
				var $button = $buttonContainer.find("button");
				var currentLocation = $.currentLocation();
				
				if(currentLocation !== undefined && 'hash' in currentLocation){
					//console.log("rewindHistory.push: " + currentLocation.hash);
					rewindHistory.push(currentLocation.hash);
				}
				$buttonContainer.removeClass("hidden");
				$button.pulse();

			}

			if($this.has("[data-mark]")){

				// Mark elements in the text
				// -------------------------------------------
				var selector = $this.data("mark");
				selector = (this.hash != selector) ? this.hash + " " + selector : selector;
				var $targets = $(selector);

				$targets
					.removeClass("mark")
					.removeClass("ease-all")
					.addClass("mark");

				setTimeout(function(){
					$targets.addClass("ease-all").removeClass("mark");
					setTimeout(function(){
						$targets.removeClass("ease-all");
					},2000);
				},3000);

			}

			// Smooth scroll to the hash
			// -------------------------------------------
			$.scrollToAnchor(this.hash);

			return false;
		}
	});

	// Show/hide scroll to top link
	// --------------------------------------
	$(window).scroll(function () {
		if($(document).scrollTop() > 200){
			$(".link-to-top").addClass("in");
		}
		else if($(document).scrollTop() < 200){
			$(".link-to-top").removeClass("in");
		}
	});

	// Add behaviour...
	// Cancel empty hash links
	// --------------------------------------
	$(document).on("click", "a[href='#']", function(e) {
		return false;
	});

	// Add behaviour...
	// Nav dropdown - only with hover
	// ---------------------------------------
	$(document).on("mouseover", "html.hover .dropdown-toggle-container", function(e) {
		$(this).addClass("open");
	});
	$(document).on("mouseout", "html.hover .dropdown-toggle-container.open", function(e) {
		$(this).removeClass("open");
	});

/*
	// Image sizing
	// DEPRECATED in favour of object-fit property
	// --------------------------------------
	(function ($) { 
		$.fn.centerWithMargins = function () {
			this.each(function(){
				var $this = $(this);
				$this.css({
					'margin-top': 0,
					'margin-bottom': 0,
					'margin-left': 0,
					'margin-right': 0,
					'width': '',
					'height': ''
				});
				var $viewport = $this.parents(".thumbnail");
				var viewport_width = parseFloat($viewport.outerWidth());
				var viewport_height = parseFloat($viewport.outerHeight());
				var image_width = parseFloat($this.width());
				var image_height = parseFloat($this.height());
				var image_ratio = image_width/image_height;
				var min_width_margin = -300;
				var min_height_margin = -300;
				if($this.data("max-horizontal-crop")){
					min_width_margin = -(parseInt($this.data("max-horizontal-crop")));
				}
				if($this.data("max-vertical-crop")){
					min_height_margin = -(parseInt($this.data("max-vertical-crop")));
				}
				var width_margin = (viewport_width-image_width)/2;
				var height_margin = (viewport_height-image_height)/2;
				if(width_margin < min_width_margin){
					image_width = viewport_width - (min_width_margin * 2);
					width_margin = min_width_margin;
					image_height = image_width/image_ratio;
					height_margin = (viewport_height-image_height)/2;
				}
				if(height_margin < min_height_margin){
					image_height = viewport_height - (min_height_margin * 2);
					height_margin = min_height_margin;
					image_width = image_height*image_ratio;
					width_margin = (viewport_width-image_width)/2;
				}
				var css = {
					'margin-top': height_margin.toFixed(0) + "px",
					'margin-bottom': height_margin.toFixed(0) + "px",
					'margin-left': width_margin.toFixed(0) + "px",
					'margin-right': width_margin.toFixed(0) + "px",
					'width': image_width.toFixed(0) + "px",
					'height': image_height.toFixed(0) + "px"
				};
				//console.log(css);
				$this.css(css);
			});
			return this;
		};
	}($));

	// Size image on loading image
	// --------------------------------------
	$('.thumbnail img').on("load", function () {
		$(this).centerWithMargins();
	});
	
	// Size images on loading page
	// --------------------------------------
	$('.thumbnail img').centerWithMargins();
*/
	// Lightbox
	// -------------------------------------------------------
	if($('html').hasClass('screen') && $('[data-lightbox="slideshow"]').length) {
		$.when(
		    $.getScript("/js/lightbox2-master/src/js/lightbox.js" ),
		    $.Deferred(function( deferred ){
		        $( deferred.resolve );
		    })
		).done(function(){

		});
	}

	// Get the location of this script
	// --------------------------------------
	var getScriptDomain = (function() {
		/*
		No longer working!
	    var scriptSrc = $('script[src*="/84000.js"]').attr('src');
	    var srcChunks = scriptSrc ? scriptSrc.split('/') : [] ;
	    return function() { return srcChunks[0] == "http:" ? srcChunks.slice(0,3).join('/') : "" ; };
	    */
	    return function() { return "http://cached-fe.84000.co"; };
	})();

	// Bookmarks functionality
	// --------------------------------------
	if($('html').hasClass('screen')){
		
		(function ($) { 

			// Get current bookmarks from the cookie
	    	// --------------------------------------
	    	$.getBookmarks = function () {
	    	
	    	    var bookmarks = Cookies.get('bookmarks');
	    	    
	    	    if(bookmarks){
	    	        bookmarks = JSON.parse(bookmarks);
	    	    }
	    			
	    	    if(!(bookmarks instanceof Object)){
	    	        bookmarks = new Array();
	    	    }
	    	    
	    	    return bookmarks;
	    	}
    	}($));

    	(function ($) { 

    		// Get the domain
	    	// --------------------------------------
	    	$.getDomain = function () {
	    		var hostname = window.location.hostname;
	    		var domain = hostname.split('.').reverse()[1] + "." + hostname.split('.').reverse()[0];
	    		//console.log(domain);
	    		return domain;
	    	}
	    }($));

    	(function ($) { 

    		// Compile bookmark data object for an element
	    	// -------------------------------------------
	    	$.fn.bookmarkData = function () {
	    		var location = window.location.href;
	    	    var locationSplit = location.split("#");
	    	    var page = locationSplit[0];
	    	    var href = this.attr('href');
	    	    var hrefSplit = href.split("#");
	    	    var targetId = hrefSplit[hrefSplit.length - 1];
	    	    var hash = targetId ? "#" + targetId : "#top";
	    	    var pageTitle = $("#front-matter h1").text();
	    	    var sectionTitle = this.parents("section, aside").find("h3, h4").first().text();
	    	    var milestoneTitle = this.text();
	    	    var title = pageTitle + (sectionTitle ? " / " + sectionTitle : "") + (milestoneTitle ? " / " + milestoneTitle : "");
	    	    return {'page': page, 'hash': hash, 'title': title};
	    	}
    	}($));

    	(function ($) { 

    		// Bookmark some bookmarkData
	    	// -------------------------------------------
	    	$.bookmark = function (bookmarkData) {

	    	    var bookmarks = $.getBookmarks();
	    	    
	    	    // Check if it's there already
	    	    // -------------------------------------------
	    	    var found = false;
	    	    for(var i = 0; i < bookmarks.length; i++){
	    	        if(bookmarks[i].page == bookmarkData.page && bookmarks[i].hash == bookmarkData.hash){
	    	           found = true;
	    	        }
	    	    }

	    	    // Add bookmark to array
	    	    // -------------------------------------------
	    	    if(!found){
	    	        bookmarks.push(bookmarkData);
	    	    }
	    	    
	    	    // Add array to cookie
	    	    // -------------------------------------------
	    	    Cookies.set('bookmarks', JSON.stringify(bookmarks), { expires: 365, domain: $.getDomain() });
	    	    
	    	    // Reload bookmarks
	    	    // -------------------------------------------
	    	    $.loadBookmarks();

	    	    // Flash the button
	    	    // -------------------------------------------
	    	    $(window).scroll();
	    	    $("#bookmarks-btn-container .badge-notification").pulse();
	    	}
    	}($));

    	(function ($) { 

    		// Load bookmarks into DOM
	    	// -------------------------------------------
    		$.loadBookmarks = function () {
    			
    			// get bookmarks from cookies
    			
	    	    var location = window.location.href;
	    	    locationSplit = location.split("#");
	    	    var page = locationSplit[0];
    			var bookmarks = $.getBookmarks();
    			
    			var $tbody = $("table#bookmarks-list tbody");
    			var $tfoot = $("table#bookmarks-list tfoot");
    			
    			$tbody.empty();
    			$tfoot.empty();

    			if(bookmarks.length){

         			// show them in the list
         			for(var i = 0; i < bookmarks.length; i++){
         			    
         			    var href = bookmarks[i].page + bookmarks[i].hash;
         			    var cssClass = (bookmarks[i].page == page) ? "scroll-to-anchor" : "";
         			    
         			    var $link = $("<a>", {"href": href, "class": cssClass}).text(bookmarks[i].title);
         			    var $removeLink = $("<a>", {"href": href, "class": "remove-bookmark", "title": "Remove this bookmark"}).html('<i class="fa fa-minus-circle"></i>');
         			    
						var $trow = $("<tr>");
						var $tcell1 = $("<td>");
						var $tcell2 = $("<td>");

						$tcell1.append($link);
						$tcell2.append($removeLink);

						$trow.append($tcell1);
						$trow.append($tcell2);
						$tbody.append($trow);
         			}

         			var $row = $("<tr>").append($("<td>", {"colspan": "2"}).text("Please note that bookmarks are stored as Cookies. Clearing cookies for this site will delete your bookmarks."));
         			$tfoot.append($row);

         		}
    			else {
    				var $row = $("<tr>").append($("<td>", {"colspan": "2"}).text("You don't have any bookmarks yet. Select milestones on the left of the text to bookmark that passage."));
         			$tfoot.append($row);
    			}
    			
    			$('#bookmarks-btn .badge').text(bookmarks.length);
    			
    		}
    	}($));

		// Load bookmarks into DOM on page load
	    // -------------------------------------------
    	$.loadBookmarks();
    	

    	// Add a bookmark on clicking a milestone
	    // -------------------------------------------
    	$(document).on("click",'a.milestone', function(e) {
    	  	
            e.preventDefault();
    	    
    	    $.bookmark($(this).bookmarkData());

    	});
    	
    	// Remove a bookmark on clicking a link
	    // -------------------------------------------
    	$(document).on("click",'a.remove-bookmark', function(e) {
    	    
            e.preventDefault();
            e.stopPropagation();
    	    
    	    var href = $(this).attr('href');
    	    var bookmarks = $.getBookmarks();
    	    
    	    // Remove the bookmark
    	    for(var i = 0; i < bookmarks.length; i++){
    	        if(bookmarks[i].page + bookmarks[i].hash == href){
    	             bookmarks.splice(i, 1);
    	        }
    	    }
    	    // Set the cookie
    	    Cookies.set('bookmarks', JSON.stringify(bookmarks), { expires: 365, domain: $.getDomain() });

    	    // Reload bookmarks
    	    $.loadBookmarks();
    	});

		// Save the location for the next visit
		// -----------------------------------------
		(function ($) { 
			$.currentLocation = function () {

				var currentLocation;

			    $(".translation :not(.unrendered-preview, render-in-viewport) a.milestone:visible").each(function(index){
			    	
			    	var $this = $(this);
			    	if($this.elementInView() == "topInView"){
			    		currentLocation = $this.bookmarkData();
			    		return false; // Exit the loop
			    	}
				});

				return currentLocation;
			}
		}($));

		(function ($) { 
			$.saveCurrentLocation = function () {

				var currentLocation = $.currentLocation();
				if(currentLocation !== undefined && 'hash' in currentLocation){

					Cookies.remove('lastLocation', { domain: $.getDomain() });

			    	Cookies.set('lastLocation', JSON.stringify(currentLocation), { expires: 31, domain: $.getDomain() });
				}
			}
		}($));

		// Show the option to return to the last location
		// ----------------------------------------------
		(function ($) { 
    		$.lastLocationOption = function () {
    			
    			// get bookmarks from cookies
    			
	    	    var lastLocation = Cookies.get('lastLocation');
	    	    
	    	    if(lastLocation){

	    	        lastLocation = JSON.parse(lastLocation);

	    	        if(lastLocation.page){

	    	        	// Check it's not already bookmarked
	    	        	var bookmarks = $.getBookmarks()
	    	        	var bookmarked = false;
	    	        	for (var i = bookmarks.length - 1; i >= 0; i--) {
	    	        		if(bookmarks[i].page == lastLocation.page && bookmarks[i].hash == lastLocation.hash){
	    	        			bookmarked = true;
	    	        			break;
	    	        		}
	    	        	}

	    	        	if(!bookmarked)
	    	        	{
	    	        		// Check it's not on screen
					    	if(['inView', 'topInView'].indexOf($(lastLocation.hash).elementInView()) < 0)
	    	        		{

	    	        			// Offer some options
			    	        	$alert = $("#page-alert");

			    	        	$alert.find(".container").append(
				    	        		$("<div>", {"class": "small"}).text("You were reading:")
				    	        	).append(
				    	        		$("<div>").text(lastLocation.title)
				    	        	).append(
				    	        		$("<ul>", {"class": "list-inline inline-dots no-bottom-margin"})
					    	        		.append($("<li>").append(
					    	        			$("<a>", {"href": lastLocation.page + lastLocation.hash, "class": "scroll-to-anchor small"})
						    	        			.text("go there")
						    	        			.on("click", function(e){
											    		$(this).parents("#page-alert").collapse('hide');
											    	})
					    	        		))
					    	        		.append($("<li>").append(
					    	        			$("<a>", {"href": lastLocation.page + lastLocation.hash, "class": "small"})
						    	        			.text("bookmark it")
						    	        			.on("click", function(e){
						    	        				e.preventDefault();
						    	        				$.bookmark(lastLocation);
											    		$(this).parents("#page-alert").collapse('hide');
											    	})
					    	        		))
					    	        		.append($("<li>").append(
					    	        			$("<a>", {"href": lastLocation.page + lastLocation.hash, "class": "small"})
						    	        			.text("forget it")
						    	        			.on("click", function(e){
						    	        				e.preventDefault();
											    		$(this).parents("#page-alert").collapse('hide');
											    	})
					    	        		))
				    	        	);

			    	        	// Only show it once
								Cookies.remove('lastLocation', { domain: $.getDomain() });

						    	$alert.collapse('show');
						    }
	    	        	}
	    	        }
	    	    }
    		}
    	}($));
	}

	// Close button for a collapse element
	// --------------------------------------
	$(document).on("click",'.collapse .close', function(e) {
	
        e.preventDefault();
        e.stopPropagation();
        
		// Close the footer
        $(this).parents('.collapse').collapse('hide');
        
	});

	// Set pop-up footer max-height
	// --------------------------------------
	(function ($) { 
		$.popupFooterHeight = function () {

			// Footer should not be more than 50% of the viewport
			$(".fixed-footer .fix-height").each(function(){
				$(this).css({"max-height": ($(window).height() * 0.5) + "px"});
			});

		}
	}($));

	// Set footer max-height on loading the page
	// -----------------------------------------
	$.popupFooterHeight();

	// Pop-up footer
	// -----------------------------------------
	$(document).on("click",'a.pop-up', function(e) {
	
        e.preventDefault();
        e.stopPropagation();
        
        var $this = $(this);
        var $popupFooter = $('#popup-footer');

        $('.collapse').not($popupFooter).collapse('hide');
        $popupFooter.removeClass('in');
        
        var doPopUp = function(){

        	// Trigger pre-events
	        $this.trigger("prepare");

	        // The target of the link
	        var $target = $($this.attr("href"));

	        // Parse that content
	        if($target.hasClass('glossarize')){
	        	parseParagraph($target);
	        }
	        $target.find(".glossarize, .glossarize-complete").each(function(){
	        	parseParagraph($(this));
	        });

	        // Get the content from the target
	        var $content = $target.clone();

	        // Reset the id
	        $content.attr("id", "");

	        // Copy content to the footer
	        $('#popup-footer .data-container').html($content);

	        // Show the footer
			$popupFooter.collapse('show');

			$popupFooter.on('shown.bs.collapse', function () {
				$.matchHeights($(this));
			});

        }

        // Is this the first call to the glossary?
        if($this.hasClass("glossary-link")){
	        $.wait("Loading the glossary...");
	    	setTimeout(function(){
	    		doPopUp();
	        	$.wait("", true);

	        },100);
	    }
	    else {
        	// Just do it
        	doPopUp();
        }
	});

	// Pop-out sidebar
	// -----------------------------------------
	$(document).on("click",'a.show-sidebar', function(e) {
	
        e.preventDefault();
        e.stopPropagation();

        var selector = $(this).attr('href');
        var $sidebar = $(selector);
        var h_padding = (20 * 2);

        $('.collapse').not($sidebar).collapse('hide');
        $sidebar.removeClass('in');
        
        if(selector == "#contents-sidebar" &&  !$sidebar.hasClass("loaded")){
        	var $toc = $("#contents  .contents-table");
        	$sidebar.find(".data-container").html($toc.clone());
        	$sidebar.addClass("loaded");
        	$sidebar.find('[data-toggle="collapse"]').each(function(){
        		var $this = $(this);
        		var href = $this.attr('href');
        		var $target = $sidebar.find(href);
        		$this.attr('href', href.replace('#', '#sidebar-'));
        		$this.attr('aria-controls', href.replace('#', 'sidebar-'));
        		$target.attr('id', href.replace('#', 'sidebar-'));
        	});
        }

        $('.lg ' + selector + ' .container').width(parseInt($(window).width() * 0.35) - h_padding);
        $('.md ' + selector + ' .container').width(parseInt($(window).width() * 0.6) - h_padding);
        $('.sm ' + selector + ' .container').width(parseInt($(window).width() * 0.75) - h_padding);
        $('.xs ' + selector + ' .container').width(parseInt($(window).width()) - h_padding);

		$sidebar.collapse('toggle');
	});

	// Close sidebar on clicking something in it
	// -----------------------------------------
	$(document).on("click",'.fixed-sidebar a:not(.remove-bookmark, [data-toggle="collapse"])', function(e) {

		$(this).parents(".fixed-sidebar").collapse('hide');

	});

	// Find instances of the glossary items in the text 
    // and link them to the glossary.
    // -----------------------------------------------------------
    if($('html').hasClass('screen')){

    	if($("#glossary .glossary-item").length){

    		// Extend contains selector to ignore case
    		// ----------------------------------------
			$.expr[":"].contains = $.expr.createPseudo(function(arg) {
			    return function( elem ) {
			        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
			    };
			});

            var isWorking = false;

            // What we are parsing
            // ------------------------------
            var $allGlossaries = $("#glossary .glossary-item:not(.ignore)"),
                $allMatchable = $(".glossarize-section .glossarize:not(.ignore), .glossarize-section .glossarize-complete:not(.ignore)");

            var countWords = function(term){
                var words = term.split(' ');
                return words.length;
            };

            // Prioritise glossary items
            // ------------------------------
            // Do a fake .slice() to apply .sort() to jQuery array
            var $allGlossariesPrioritised = $allGlossaries.slice(0).sort(function(a, b) {
            	if(!a.wordCount){
            		a.wordCount = countWords($(a).find(".term").first().text());
            	}
            	if(!b.wordCount){
            		b.wordCount = countWords($(b).find(".term").first().text());
            	}
            	return b.wordCount - a.wordCount;
			});

            var escapeRegExp = function(stringToGoIntoTheRegex) {
                
	                // Prioritise glossary items
	            	// ------------------------------
                    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                    
                },
                glossarize = function($glossaries, $matchable, callback){
                
					// Highlight instances of the glossary items in each
					// paragraph with a link to the glossary.
					// -------------------------------------------------
					$glossaries.each(function(){

					    var $glossary = $(this);

					    $glossary.find('.term').each(function(){
					    	if($glossary.data("match") == "marked"){

					    		// Markup marked glossaries
					    		glossaryMarked($(this), $glossary, $matchable);
						    }
						    else {

						    	// Markup matching glossaries
						    	glossaryMatch($(this), $glossary, $matchable);

						    }
					    });
					});
					if(callback){
					   callback(arguments[3], arguments[4]);
					}
                   
                },
                glossaryRegEx = function(term){

                	// Unfortunately JS doesn't consider accented characters as "word" characters.
			    	// Therefore cannot use the \b or \w metacharacters. We have to enumerate all word boundaries ourselves.
			    	// -----------------------------------------------------------------------------------------------------
                	return new RegExp("(^|\\s|‘|'|“|:|;|—|\"|\\(|\\[|>)(" + escapeRegExp(term.toLowerCase()) + ")($|\\s|\\.|,|:|;|\\!|\\?|—|’\\W|'\\W|”|\"|\\)|\\]|<|s$|s\\W|s<|es$|es\\W|es<|’s$|’s\\W|’s<|'s$|'s\\W|'s<|s’$|s’\\W|s’<|s'$|s'\\W|s'<)","gi");
                },
                glossaryMarked = function($term, $glossary, $matchable){
                	
                	// Glossarise the marked up terms and replace with links
                	// -------------------------------------------------
			    	var glossaryId = $glossary.attr("id");
			        var regEx = glossaryRegEx($term.text());
			        
			        $matchable
			        	.find("span.term")
			        	.filter(function(){ 
			        		
			        		var $this = $(this);
			        		var this_ref = $this.data('ref');
			        		if(this_ref){
			        			//console.log(this_ref + " ? " + glossaryId + " = " + (this_ref == glossaryId).toString());
			        			return this_ref == glossaryId;
			        		}
			        		//console.log($term.text() + " ? " + $(this).text() + " = " + $(this).text().match(regEx));
			        		return $this.text().match(regEx);
			        		//return $(this).text().toLowerCase() == $term.text().toLowerCase(); 
			        	})
			        	.each(function(spanIndex){

				        	var $span = $(this);
				        	$span.replaceWith('<a href="#' + glossaryId + '" class="glossary-link pop-up">' + $span.html().replace('glossarize', '') + '</a>');
			        	
			        });
                },
                glossaryMatch = function($term, $glossary, $matchable){

                	// Glossarise any matches in the text
                	// -------------------------------------------------
			    	var term = $term.text();
			    	var glossaryId = $glossary.attr("id");
			        
			        $matchable.each(function(){
			        	var $this = $(this);
			        	if($this.hasClass('glossarize')){
			        		var regEx = glossaryRegEx(term);
			        		$this.replaceText(regEx, '$1<a href="#' + glossaryId + '" class="glossary-link pop-up">$2<\/a>$3');
			        	}
			        	else if($this.hasClass('glossarize-complete')){
			        		var regEx = new RegExp("^(" + escapeRegExp(term) + ")$","gi");
			        		$this.replaceText(regEx, '<a href="#' + glossaryId + '" class="glossary-link pop-up">$1<\/a>');
			        	}
			        	
			        });
                },
                glossaryBackLink = function($glossaries, callback){
                
                    // Create a list of links in the glossary to its 
                    // occurences in the text
                    // ----------------------------------------------------
                    $glossaries.filter(':not(.backlinked)').each(function(){
                        
                        var $glossaryItem = $(this);
                        var glossaryId = $glossaryItem.attr("id");

                    	// Create a list
                        var $list = $("<ul>", {"class": "list-inline"});

                        // Find references to this glossary in the text
                        $allMatchable.has("a[href='#" + glossaryId + "']").each(function(refIndex){
                        	
                            var $paragraph = $(this);
                            var paragraph_id = $paragraph.attr("id");
                            if(!paragraph_id){
                            	paragraph_id = $paragraph.parents("[id]").attr("id");
                            }

                            if(!$list.find("a[href='#" + paragraph_id + "']").length)
                            {
                            	// Create a link to it
                                var linkAttributes = {
                                	"href": "#" + paragraph_id, 
                                	"class": "scroll-to-anchor", 
                                	"data-mark": "a[href='#" + glossaryId + "']"
                                };
                                var $link = $("<a>", linkAttributes).text($list.find("li").length + 1);
                                // Create a list item
                                var $item = $("<li>");
                                // Append the link to the item
                                $item.append($link);
                                // Append the item to the list
                                $list.append($item);
                            }
                            
                        });
						
						var countOccurences = $list.find("li").length;
						var occurencesDesc = countOccurences == 1 ? "1 passage contains this term" : countOccurences + " passages contain this term";
						$glossaryItem.find(".occurences h6").text(occurencesDesc);
                        
                        // Append the list to the glossary
                        $glossaryItem.find(".occurences").append($list);
                            
                    });
                    
                    if(callback){
                        callback();
                    }
                    
                },
                prepGlossary = function($glossary){

                	// First glossarize terms with a higher priority
                	// -------------------------------------------------

                	var $terms = $glossary.find(".term");
                	var priority = countWords($terms.first().text());
                    var regExs = new Array();

                	$terms.each(function(index){
                		regExs.push(glossaryRegEx($(this).text()));
                	});

                    var $higherPriority = 
                    	$allGlossariesPrioritised
                    		.filter(':not(.backlinked)')
                    		.filter(function() {
                    			return parseInt($(this)[0].wordCount) > parseInt($glossary[0].wordCount);
							})
                    		.filter(function(){
                    			var matchingTerm = false;
                    			var $otherGlossTerms = $(this).find(".term");
                    			$otherGlossTerms.each(function(){
                    				var otherTermText = $(this).text();
                    				for (var i = regExs.length - 1; i >= 0; i--) {
	                    				if (otherTermText.match(regExs[i])) {
	                    					matchingTerm = true;
	                    					break;
	                    				};
	                    			}
                    				if(matchingTerm){
                    					return false;
                    				}
                    			});
                    			return matchingTerm;
                    		});

					$higherPriority.each(function(){
						var $otherGlossary = $(this);

						glossarize($otherGlossary, $allMatchable.filter(':not(.glossarized)'), glossaryBackLink, $otherGlossary, function(){ 
                        	isWorking = false;
                        	$otherGlossary.addClass("backlinked");
                        });
					});
                },
                parseParagraph = function($paragraph){
                
                    // Parse a particular paragraph
                    // --------------------------------------
                    
                    if(!isWorking){
                        isWorking = true;
                        glossarize($allGlossariesPrioritised, $paragraph, function(){ 
                        	isWorking = false; 
                            $paragraph.addClass("glossarized")
                        });
                    }
                    
			    },
			    parseGlossary = function($glossary){
			        
                    // Parse a particular glossary
                    // --------------------------------------
                    
                    if(!isWorking){
                        isWorking = true;
                        prepGlossary($glossary);
						glossarize($glossary, $allMatchable.filter(':not(.glossarized)'), glossaryBackLink, $glossary, function(){ 
                        	isWorking = false;
                        	$glossary.addClass("backlinked");
                        });
                    }
                    
			    },
			    hideTermsTimeout;

			(function ($){

				// Show or hide the glossary links using .mute-glossary
				// ----------------------------------------------------
				$.showGlossaryLinks = function(){

					var $translation = $(".translation");

			    	$translation.removeClass("mute-glossary");

 			    	clearTimeout(hideTermsTimeout);

 			    	hideTermsTimeout = setTimeout(function(){
 			    		$translation.addClass("mute-glossary");
 			    	}, 1000);
			    }
			}($));

			(function ($) { 

				// Glossarize paragraphs that have become visible
        		// ----------------------------------------------
    			$.glossarizeVisibleParagraphs = function () {
    
        			if (isWorking) return false;
        				
        			$allMatchable.filter(':not(.glossarized)').each(function(){
        			
        			    var $paragraph = $(this);
     			    	var elementInViewStatus = $paragraph.elementInView();

     			    	$.showGlossaryLinks();
     			    	
     					if(['inView', 'topInView'].indexOf(elementInViewStatus) >= 0){
                            parseParagraph($paragraph);
     					}
     					else if(elementInViewStatus == 'below'){
     					    // This allows us to break on the first
     					    // non-visible after a visible.
     					    return false;
     					}
        			    
     				});
     				
    			}
    		}($));
    		
    		(function ($) { 

    			// Back link glossaries that have become visible
        		// ---------------------------------------------
    			$.backlinkVisibleGlossaries = function () {
    
        			if (isWorking) return false;

        			$allGlossaries.filter(':not(.backlinked)').each(function(){
        			
        			    var $glossaryItem = $(this);
     			    	var elementInViewStatus = $glossaryItem.elementInView();
     			    	
     					if(['inView', 'topInView'].indexOf(elementInViewStatus) >= 0){
                            parseGlossary($glossaryItem);
     					}
     					else if(elementInViewStatus == 'below'){
     					    // This allows us to break on the first
     					    // non-visible after a visible.
     					    return false;
     					}
        			    
     				});
     				
    			}
    		}($));
     		
     		// Also implement on showing in pop-up footer:
     		// Call prepare event on clicking a glossary link
     		// ----------------------------------------------
            $(document).on("prepare",'a.glossary-link', function(e) {
               parseGlossary($($(this).attr("href")));
           	});
	     		
    	}
         
    }

    // Detect when user stops scrolling
	// ---------------------------------------
	(function ($) { 
		$.fn.scrollEnd = function(callback, timeout) {  
			var $this = this;
			$this.scroll(function(){
				if ($this.data('scrollTimeout')) {
					clearTimeout($this.data('scrollTimeout'));
				}
				$this.data('scrollTimeout', setTimeout(callback, timeout));
			});
		};
	}($));


    // When a user stops scrolling...
	// -------------------------------------------
	$(window).scrollEnd(function () {

		// Render the first visible section
		// --------------------------------------------
		// $.renderInViewport();

		// Glossarize the currently visible elements
		// --------------------------------------------
		if(typeof $.glossarizeVisibleParagraphs === 'function'){ $.glossarizeVisibleParagraphs(); };
		if(typeof $.backlinkVisibleGlossaries === 'function'){ $.backlinkVisibleGlossaries(); } ;
		
	}, 700);

	// Add behaviour...
	// Window scroll, fade in controls
	// -------------------------------------------
	$(window).on('scroll', function(){
		var $this = $(this) ;
		// Clear any existing timeout
		if($this.data('showOnScroll')){
			clearTimeout($this.data('showOnScroll'));
		}
		// Set new time out to hide again
		$this.data('showOnScroll', setTimeout(function() { $('.show-on-scroll, .xs .show-on-scroll-xs').fadeOut(); }, 3600));
		// Show what's marked to show
		$this.on('scroll', function(){ $('.show-on-scroll, .show-on-scroll-xs').fadeIn(); });
	});

	// On load...
	// Trigger scroll behaviour
	// -------------------------------------------
	$(window).scroll();

	// Note unsaved changes to a form
	// -------------------------------------------
	$(document).on("change", "form.form-update input, form.form-update select, form.form-update textarea", function(e){
		$(this).addClass("unsaved-changes");
	});

	// Don't inhibit the window unload if it's a submit
	// ------------------------------------------------
	$(document).on("click", "form.form-update *[type='submit']", function(e){
		$(this).parents("form.form-update").find(".unsaved-changes").removeClass("unsaved-changes");
	});

	// On closing the window...
	// -------------------------------------------
	$(window).on("beforeunload", function(e) { 

		// Check for unsaved changes on a form
		// -------------------------------------------
		if($("form .unsaved-changes").length){
			return "You have some unsaved changes";
		}

		// Save the current text/location
		// -------------------------------------------
	    if(typeof $.saveCurrentLocation === 'function'){ $.saveCurrentLocation(); };
	});

	// Add behaviour...
    // Get the href content via ajax and put it in the specified element
    // ----------------------------------------------------------------- 
    $(document).on("click", "[data-ajax-target]", function(e){
        
        e.preventDefault();
        e.stopPropagation();
        
        var $this = $(this);
        var source = $this.attr('href');
        var target = $this.data('ajax-target');
        var $target = $(target);

        if($target.is('.replace')){
        	$target.html("").removeClass('loaded');
        }

        if(target.indexOf("#popup-footer-source") !== -1){
        	var $popupFooter = $('#popup-footer-source');
        	$('.collapse').not($popupFooter).collapse('hide');
        	$popupFooter.removeClass('in');
        	$.wait("Loading the source text...");
	    	setTimeout(function(){
	    		$.get(source, function(data) {
	        		$(target).html($(data).find('.ajax-data > *'));
	                $popupFooter.collapse('show');
	            });
	        	$.wait("", true);
	        },100);
        }
        else if(!$target.is('.loaded')){
        	$.wait("Loading content...");
        	setTimeout(function(){
	    		$.get(source, function(data) {
	                $target.html(data).collapse('show').addClass('loaded');
	            });
	        	$.wait("", true);
	        },100);
        }
        else{
            $target.collapse('toggle');
        }
        
    });

    // Add behaviour...
    // Print a page in a link
    // ----------------------------------------------------------------- 
    $(document).on("click", "a.print-href", function(e){

    	e.preventDefault();

    	var url = $(this).attr('href');

    	var $iframe = $("#print-iframe");

    	if(! $iframe.length)
    	{
    		$iframe = $("<iframe id='print-iframe' style='position:absolute;width:100%;height:100px;left:0px;top:-100px;z-index:-1;'>")
    	}

    	$iframe.attr("src", url).appendTo("body").on("load", function(){
	    	var iframe = document.getElementById('print-iframe');
			var iframeWindow = iframe.contentWindow? iframe.contentWindow : iframe.contentDocument.defaultView;
	    	iframeWindow.print();
	    });

	});

	// Add behaviour...
    // Show the print preview
    // ----------------------------------------------------------------- 
    $(document).on("click", "a.print-preview", function(e){

    	e.preventDefault();
    	window.print();

	});

    // Add behaviour...
    // Before showing the print preview
    // ----------------------------------------------------------------- 
	var beforePrintFunc = function() {

		// Un-collapse divs
		// -----------------------------
	    $('.collapse.print-expand').each(function(){
    		$(this).attr('style', '');
    	});
	}
	// Add listener for chrome
	// -----------------------------
	window.matchMedia('print').addListener(function(mql) {
	    if (mql.matches) {
	        beforePrintFunc();
	    }
	});
	window.onbeforeprint = beforePrintFunc;

    // Add behaviour...
    // Filter on change
    // ----------------------------------------------------------------- 
    $(document).on("change",".filter-form input, .filter-form select", function(e){
	    $(this).parents("form").submit();
	});

    // Add behaviour...
    // Set selected text on mouseup
    // ----------------------------------------------------------------- 
	$(document).on("mouseup", "[data-mouseup-set-input]", function() {
		var selection = '';
		if (window.getSelection) {
	        selection = window.getSelection();
	    } else if (document.getSelection) {
	        selection = document.getSelection();
	    } else if (document.selection) {
	        selection = document.selection.createRange().text;
	    }
	    $($(this).data("mouseup-set-input")).val(selection);
    });
    $(document).on("mouseup", "[data-mouseup-clear-input]", function() {
		$($(this).data("mouseup-clear-input")).val('');
    });

    // Add behaviour...
    // Submit form on click
    // ----------------------------------------------------------------- 
    $(document).on("click","form .on-click-submit", function(e){
    	e.preventDefault();
    	var $this = $(this);
    	var $form = $this.parents("form");
	    $form.attr("action", $this.attr("href")).find('input[type="submit"]').click();
	});

    // Add behaviour...
    // Submit form on mouseup
    // ----------------------------------------------------------------- 
	$(document).on("mouseup", "[data-mouseup-submit]", function() {
	    $($(this).data("mouseup-submit")).submit();
    });

	// Add behaviour...
    // Show only the first line of content
    // ----------------------------------------------------------------- 
    $(".collapse-one-line").each(function() {
    	var $this = $(this);
    	$this.data("collapse-one-line-height", $this.height()).addClass('one-line');
    });
    $(document).on("mouseover", ".collapse-one-line", function(e){
    	e.preventDefault();
    	var $this = $(this);
    	$this.height($this.data('collapse-one-line-height')).removeClass('one-line');
    });
    $(document).on("mouseout", ".collapse-one-line", function(e){
    	e.preventDefault();
    	var $this = $(this);
    	$this.addClass('one-line').css({"height" : ""});
    });


    // Add behaviour...
    // Replace matches in text.
    // ------------------------------------------------------------------
    RegExp.escape= function(s) {
	    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	};
    (function ($) { 
		$.fn.replaceMatchesWithThis = function ($replacement) {
			var $target = $(this);
			var targetHtml = $target.html();
			var regEx = new RegExp(RegExp.escape($replacement.text()),"gi");
			updatedTargetHtml = targetHtml.replace(regEx, $replacement[0].outerHTML);
			$target.html(updatedTargetHtml);
			return targetHtml != updatedTargetHtml;
		}
	}($));

    // Add behaviour...
    // Replace on load
    // ----------------------------------------------------------------- 
	$("[data-onload-replace]").each(function() {

		var $this = $(this);
		var values = $this.data("onload-replace");
		var keys = Object.keys(values);
		for(var i=0; i<keys.length; i++){
			var $target = $(keys[i]);
			var $value = $(values[keys[i]]);
			if($value.text()){
				if($target.replaceMatchesWithThis($value)){
					$($value.attr('href')).addClass("replaced");
				}
			}
		}

    });

    // Add behaviour...
    // Mark on load
    // ----------------------------------------------------------------- 
	$("[data-onload-mark]").each(function() {

		var $this = $(this);
		var $target = $($this.data("onload-mark"));
		var text = $this.val();
		if(text){
			$target.replaceMatchesWithThis($("<span>", {"class": "mark"}).text(text));
		}

    });

	// Add behaviour...
	// Mark on click
	// ---------------------------------------------------
	$(document).on("click", "[data-onclick-mark]", function(e) {

    	e.preventDefault();
    	var $this = $(this);
		var values = $this.data("onclick-mark");
		var keys = Object.keys(values);
		for(var i=0; i<keys.length; i++){
			var $target = $(keys[i]);
			var $value = $(values[keys[i]]);
			$target.html($target.text());
			if($value.text()){
				var $valueMark = $("<span>", {"class": "mark"}).text($value.text());
				if($target.replaceMatchesWithThis($valueMark)){
					$($value.attr('href')).addClass("marked");
				}
			}
		}

    });

	// Add behaviour...
	// Set on click
	// ---------------------------------------------------
	$(document).on("click", "[data-onclick-set]", function(e) {

		e.preventDefault();
		var $this = $(this);
		var values = $this.data("onclick-set");
		var keys = Object.keys(values);
		for(var i=0; i<keys.length; i++){
			var $target = $(keys[i]);
			if($target.is(':checkbox')) {
				$target.attr('checked', !$target.prop('checked'))
			}
			else {
				var $value = $(values[keys[i]]);
				$target.val($value.text());
			}
			
		}

	});

	// Add behaviour...
	// Bold on click
	// ---------------------------------------------------
	$(document).on("click", "[data-onclick-bold]", function(e) {

		e.preventDefault();
		var targets = $(this).data("onclick-bold");
		$(".mark.bold").removeClass("bold");
		for(var i=0; i<targets.length; i++){
			var $target = $(targets[i]);
			$target.addClass("bold");
		};
		
	});

    // Add behaviour...
    // On showing a tab...
    // ----------------------------------------------
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

		// Match heights on hidden content
		//------------------------------------------
		$.matchHeights($(document));
	});

	// Add behaviour...
	// Track some clicks
	// -----------------------------------------
	$('a.log-click').on('click', function (e) {
		//console.log(this.pathname + this.hash);
		if (typeof ga === "function") { 
		    ga('send', 'pageview', this.pathname + this.hash);
		}
	});

	// Add behaviour...
	// Rewind button
	// -----------------------------------------
	$("#rewind-btn-container button").on('click', function (e) {
		var $button = $(this);
		if(rewindHistory.length){
			var lastLocation = rewindHistory.pop();
			//console.log("lastLocation: " + lastLocation);
			$.scrollToAnchor(lastLocation);
			if(!rewindHistory.length){
				$button.parents("#rewind-btn-container").addClass("hidden");
			}
		}
	});

	// Add behaviour...
	// Body click event
	// ------------------------------------------
	$(document).on("click",'body', function(e) {
	
		// Close things
        $('.collapse').collapse('hide');

        // show glossary highlights
        if(typeof $.showGlossaryLinks === 'function'){ $.showGlossaryLinks(); };
        
	});

	// Add behaviour...
	// Stop propagation to body click
	// --------------------------------------
	$(document).on("click",'.collapse', function(e) {
	
		e.stopPropagation();
        
	});

	// Add behaviour
	// Initialise popovers
	// ------------------------------------------
	$(document).on("click", '[data-toggle="popover"]', function(e){
		e.preventDefault();
		var options = {
			title : function () {return $($(this).attr("href") + " .title").text();},
			content: function () {return $($(this).attr("href") + " .content").html();},
			html: true,
			container: $(this).data("container")
		};
		$(this).popover(options).popover("show");
	});

	// Add behaviour
	// Option to propagate new form controls
	// ------------------------------------------
	$(document).on("click", '.add-nodes-container a.add-nodes', function(e){
		e.preventDefault();
		var $container = $(this).parents('.add-nodes-container');
		var $groups = $container.find('.add-nodes-group');
		var groups_count = $groups.length;
		var $new_group = $groups.first().clone();
		$new_group.find("input, select, textarea").each(function(){
			var $control = $(this);
			var name_split = $control.attr('name').split('-');
			$control.attr('name', name_split.slice(0, name.length - 1).join('-') + '-' + parseInt(groups_count + 1));
			if($control[0].tagName == 'select'){
				$control.selectedValue = '';
			}
			else {
				$control.val("");
			}
			
		});
		$new_group.insertAfter($groups.last());
		
	});

	// Add behaviour...
	// Proof-of-concept!!!
	// Text to speech
	// --------------------------------------
	// <script src="//vws.responsivevoice.com/v/e?key=nXM8DugR"/>
	/*
	$.fn.ignore = function(sel){
		return this.clone().find(sel||">*").remove().end();
	};
	$(document).on("click", '.text-to-speech', function(e){
		responsiveVoice.speak($("#summary p").ignore('.milestone').text());
	});*/

	// On loading the page...
	// Redirect to a different page
	// ------------------------------------------
	$("a.redirect-onload").each(function(e){
		location.href = $(this).attr("href");
	});

	// On loading the page...
	// Scroll to the hash location
	// -------------------------------------------
	$.scrollToAnchor(window.location.hash, 0, null, null, function(){
		// Add callback...
		// Show the last location option on loading the page
		// --------------------------------------------------
    	if($("#page-alert").length && typeof $.lastLocationOption === 'function'){
    		$.lastLocationOption();
    	}
	});

	// On loading the page...
	// Close temporary alerts
	// -----------------------------------------
	$(".alert.alert-temporary").delay(2000).slideUp(400);
	

	// On loading the page...
	// Position blockquote in header
	// -----------------------------------------
	$(".panel.main-panel > .panel-img-header.has-img+.panel-body > blockquote:first-child").each(function(){
		if(!$("html.xs").length){
			var $this = $(this);
			$this.css({'top': -($this.outerHeight()) });
		}
	});

	// On loading the page...
	// Log an error
	// ------------------------------------------
	$(".client-error").each(function(e){
		$.ajax({
			url: "/log-error.html",
			method: "POST",
			data: {'url' : window.location.href}
		});
	});

	// On loading the page...
	// Flash a button
	// ------------------------------------------
	$('[data-onload-pulse]').each(function(e){
		var $this = $(this);
		setInterval(function(){
			$this.pulse();
		}, $this.data('onload-pulse'));
		
	});

	// Affix nav
	// ------------------------------------------
	$("#affix-nav [data-spy='affix']").width($("#affix-nav [data-spy='affix']").width());
	$("#affix-nav [data-spy='affix']").affix({
		offset: {
			top: function () {
		    	return $('#affix-nav').offset().top;
		    },
			bottom: function () {
		    	return (this.bottom = $('body > footer').outerHeight(true) + 20);
		    }
		}
	});

	// On resize...
	//------------------------------------------
	$(window).on("resize", function(){
		$.mediaSize();
		$.matchHeights($(document));
		$.popupFooterHeight();
	});

	// On loading the page...
	// Trigger resize events
	//------------------------------------------
	$(window).resize();

});
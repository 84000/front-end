$(document).ready(function() {

	// Disable page while loading js
	// -------------------------------------
	(function ($) { 
		$.wait = function (text, cancel) {
			var $body = self==top ? $("body") : window.parent.$("body");
			if(cancel){
				$("#wait").remove();
				$body.removeClass("wait");
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
	}(jQuery));

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
			if($('#media_test .visible-print-inline').css("display").indexOf('none') == -1){
				media = 'print';
			};
			$('html').removeClass(sizes.join(' ')).addClass(size).addClass(media);
		}
	}(jQuery));
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
		    
		    if(elementBottom <= docViewTop){
		        position = "above";
		    }
		    else if(elementTop >= docViewBottom){
		        position = "below";
		    }

		    return position;
		};
	}(jQuery));

	// Handle links to the old reading room.
	// ------------ DO NOT REMOVE ------------
	// Unfortunately we can't use apache for 
	// this as GWT used hash based links
	// ---------------------------------------
	
	function legacyLink(){
		// A hash in the root indicates a link to 
		// the old reading room.
		// --------------------------------------
		if(window.location.hash && window.location.pathname == '/'){
			var hash = window.location.hash;
			var hashSplit = hash.split('/');
			var pageId = hashSplit[0].replace('#','');
			var pageIdSplit = pageId.split('-');
			var pageUri = '';
			if(pageIdSplit[0] == 'section' && pageIdSplit.length == 2){
				pageUri = '/section/' + pageIdSplit[1] + '.html';
			}
			else if (pageIdSplit[0] == "translatedTextList"){
				pageUri = '/section/all-translated.html';
			}
			else{
				pageUri = '/translation/' + pageId + '.html';
			}
			if(hashSplit.length == 2 && hashSplit[1] != 'title'){
				pageUri += '#' + hashSplit[1];
			}
			if(pageUri){
				location.href = pageUri;
			}
		}
		// If not redirecting then return false
		// ------------------------------------
		return false;
	}

	// Scroll to an anchor
	// --------------------------------------
	(function ($) { 
		$.scrollToAnchor = function (hash, delay, parent, offset) {
			if(!legacyLink()) {
				if(!hash) hash = window.location.hash;
				if(!delay) delay = 0;
				if(!parent) parent = "html, body";
				var $hash = $(hash);
				if(!offset && $hash) offset = $hash.offset();
				if(offset){
					$(parent).delay(delay).animate({ scrollTop: (offset.top - 30) }, "slow");
				}
			}
		}
	}(jQuery));

	// Detect when user stops scrolling
	// ---------------------------------------
	(function ($) { 
		$.fn.scrollEnd = function(callback, timeout) {  
			var $this = this;       
			$this.scroll(function(){
				if ($this.data('scrollTimeout')) {
					clearTimeout($this.data('scrollTimeout'));
				}
				$this.data('scrollTimeout', setTimeout(callback,timeout));
			});
		};
	}(jQuery));

	// Flash the button
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
	}(jQuery));

	var rewindHistory = new Array;
	
	$(document).on("click",'a.scroll-to-anchor', function() {
		if (window.location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && window.location.hostname == this.hostname) {
			
			var $this = $(this);

			// Rewind functionality
			if($this.not(".pop-up")){

				// Only if it's not in view
				$target = $(this.hash);

				//if($this.elementInView() != "inView"){

					var $buttonContainer = $("#rewind-container");
					var $button = $buttonContainer.find("button");

					rewindHistory.push($(document).scrollTop());
					$buttonContainer.removeClass("hidden");
					$button.pulse();

				//}

			}

			// Mark elements in the text
			if($this.has("[data-mark]")){

				var selector = $this.data("mark");
				selector = (this.hash != selector) ? this.hash + " " + selector : selector;

				$(selector)
					.removeClass("mark")
					.removeClass("ease-all")
					.addClass("mark");

				setTimeout(function(){
					$(selector).addClass("ease-all").removeClass("mark");
					setTimeout(function(){
						$(selector).removeClass("ease-all");
					},2000);
				},3000);

			}

			$.scrollToAnchor(this.hash);

			return false;
		}
	});
	$.scrollToAnchor();

	// Show/hide scroll to top link
	// --------------------------------------
	$(window).scroll(function () {
		if($(document).scrollTop() > 200){
			$("#link-to-top").addClass("in");
		}
		else if($(document).scrollTop() < 200){
			$("#link-to-top").removeClass("in");
		}
	});

	// Scroll to top
	// --------------------------------------
	$(document).on("click", "a[href='#top']:not(.milestone)", function(e) {
		$.scrollToAnchor("#top");
		return false;
	});


	// Image sizing
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
				var viewport_width = parseFloat($viewport.width());
				var viewport_height = parseFloat($viewport.height());
				var image_width = parseFloat($this.width());
				var image_height = parseFloat($this.height());
				var image_ratio = image_width/image_height;
				var min_width_margin = -100;
				var min_height_margin = -100;
				//TO DO: set these data attributes backend
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
	}(jQuery));
	$('.thumbnail img').on("load", function () {
		$(this).centerWithMargins();
	});
	$('.thumbnail img').centerWithMargins();

	// Lightbox
	// -------------------------------------------------------
	if($('html').hasClass('screen') && $('[data-lightbox="slideshow"]').length) {
		jQuery.when(
		    jQuery.getScript("/js/lightbox2-master/src/js/lightbox.js" ),
		    jQuery.Deferred(function( deferred ){
		        jQuery( deferred.resolve );
		    })
		).done(function(){

		});
	}

	// Make multiple elements the same height
	// ------------------------------------------
	(function ($) { 
		$.matchHeights = function () {
			if($('html').hasClass('screen') && ($('html').hasClass('md') || $('html').hasClass('lg') || $('html').hasClass('sm'))){
				var heights = {};
				$("[data-match-height]").height('auto');
				// Match to a particular element
				$("[data-match-height].match-this-height:visible").each(function(){
					var $this = $(this)
					heights[$this.data('match-height')] = $this.height();
				});
				// Match to the tallest in the group
				$("[data-match-height]:not(.match-this-height):visible").each(function(){
					var $this = $(this)
					var this_height = $this.height();
					var height_group = $this.data('match-height');
					if(!heights[height_group] || this_height > heights[height_group]){
						heights[height_group] = this_height;
					}
				});
				$.each(heights, function(group, val) {
					$("[data-match-height='" + group + "']").height(val + 'px');
				});
			}
		}
	}(jQuery));

	// Load page navigation from DOM
	// --------------------------------------
	if($('html').hasClass('screen')){
		(function ($) { 

			function addLink($link, $list, linkText) {

				if(typeof(linkText) == "undefined"){
					linkText = $link.text();
				}

    			var $listLink = $("<a>", {"href": $link.attr('href'), "class": $link.attr('class')}).text(linkText);

 			    // Create a list item
				var $item = $("<li>");

				// Append the link to the item
				$item.append($listLink);

				// Append the item to the list
				$list.append($item);
			}

			function addDivider(text, $list) {

 			    // Create a list item
				var $item = $("<li>", {"class": "header-text"}).text(text);

				// Append the item to the list
				$list.append($item);
			}
			
			$.loadContentsDropdown = function () {
		    	
		    	var $list = $("#contents-dropdown");
	    		$list.empty();

	    		addDivider("84000", $list);

	    		addLink($("<a>", {"href": "http://84000.co"}).text("Homepage"), $list);

	    		addLink($("<a>", {"href": "/"}).text("Reading Room Lobby"), $list);

	    		addLink($("<a>", {"href": "http://84000.co/how-you-can-help/donate/#sap"}).text("Sponsor a Page"), $list);

	    		addDivider($("#title h1").text(), $list);

	    		var $contentLinks = $("#contents table tr");
	    		
	    		$contentLinks.each(function(){

	    			var $contentLink = $(this);
	    			addLink($contentLink.find("> td > a"), $list);
	    			
	    		});

	    	};
	    }(jQuery));
	    $.loadContentsDropdown();

	}

	// Close a dropdown on click
	// --------------------------------------
	$(document).on("click",'.dropdown-menu a:not(.remove-bookmark)', function(e) {
		$("body").trigger("click")
	});

	// Get the location of this script
	// --------------------------------------
	var getScriptDomain = (function() {
		/*
	    var scriptSrc = $('script[src*="/84000.js"]').attr('src');
	    var srcChunks = scriptSrc ? scriptSrc.split('/') : [] ;
	    return function() { return srcChunks[0] == "http:" ? srcChunks.slice(0,3).join('/') : "" ; };
	    */
	    return function() { return "http://cached-fe.84000.co"; };
	})();

	// Load Bookmarks
	// --------------------------------------
	if($('html').hasClass('screen')){
		$.getScript( getScriptDomain() + "/js/js-cookies.js" ).done(function( script, textStatus ) {
		
			(function ($) { 
		    	$.getBookmarks = function () {
		    	
		    	    // Get current bookmarks as array
		    	    
		    	    var bookmarks = Cookies.get('bookmarks');
		    	    
		    	    if(bookmarks){
		    	        bookmarks = JSON.parse(bookmarks);
		    	    }
		    			
		    	    if(!(bookmarks instanceof Object)){
		    	        bookmarks = new Array();
		    	    }
		    	    
		    	    return bookmarks;
		    	}
	    	}(jQuery));

	    	(function ($) { 
		    	$.getDomain = function () {
		    		var hostname = window.location.hostname;
		    		var domain = hostname.split('.').reverse()[1] + "." + hostname.split('.').reverse()[0];
		    		//console.log(domain);
		    		return domain;
		    	}
		    }(jQuery));

	    	(function ($) { 
		    	$.fn.bookmarkData = function () {
		    		var location = window.location.href;
		    	    locationSplit = location.split("#");
		    	    var page = locationSplit[0];
		    	    var hash = this.attr('href');
		    	    var pageTitle = $("#title h1").text();
		    	    var sectionTitle = this.parents("section").find("h3").first().text();
		    	    var milestoneTitle = this.text();
		    	    var title = pageTitle + (sectionTitle ? " / " + sectionTitle : "") + (milestoneTitle ? " / " + milestoneTitle : "");
		    	    return {'page': page, 'hash': hash, 'title': title};
		    	}
	    	}(jQuery));

	    	(function ($) { 
		    	$.bookmark = function (bookmarkData) {

		    		// Get current bookmarks as array
		    	    var bookmarks = $.getBookmarks();
		    	    
		    	    // Check first if it's there already
		    	    var found = false;
		    	    for(var i = 0; i < bookmarks.length; i++){
		    	        if(bookmarks[i].page == bookmarkData.page && bookmarks[i].hash == bookmarkData.hash){
		    	           found = true;
		    	        }
		    	    }
		    	    // Add bookmark to array
		    	    if(!found){
		    	        bookmarks.push(bookmarkData);
		    	    }
		    	    
		    	    // Add array to cookie
		    	    Cookies.set('bookmarks', JSON.stringify(bookmarks), { expires: 365, domain: $.getDomain() });
		    	    
		    	    // Reload bookmarks
		    	    $.loadBookmarks();

		    	    // Flash the button
		    	    $("#bookmarks-opener .badge-notification").pulse();
		    	}
	    	}(jQuery));

	    	(function ($) { 
	    		$.loadBookmarks = function () {
	    			
	    			// get bookmarks from cookies
	    			
		    	    var location = window.location.href;
		    	    locationSplit = location.split("#");
		    	    var page = locationSplit[0];
	    			var bookmarks = $.getBookmarks();
	    			
	    			var $list = $("#bookmarks-dropdown");
	    			$list.empty();

	    			$list.append($("<li>", {"class": "header-text"}).text("Your Bookmarks"));

	    			if(bookmarks.length){
	    			    

	         			// show them in the list
	         			for(var i = 0; i < bookmarks.length; i++){
	         			    
	         			    var href = bookmarks[i].page + bookmarks[i].hash;
	         			    var cssClass = "";
	         			    
	         			    if(bookmarks[i].page == page){
	         			        cssClass = "scroll-to-anchor";
	         			    }
	         			    
	         			    var $link = $("<a>", {"href": href, "class": cssClass}).text(bookmarks[i].title);
	         			    var $removeLink = $("<a>", {"href": href, "class": "remove-bookmark", "title": "Remove this bookmark"}).html('<i class="fa fa-minus-circle"></i>');
	         			    
							// Create a list item
							var $item = $("<li>");

							// Append the link to the item
							$item.append($link);
							$item.append($removeLink);

							// Append the item to the list
							$list.append($item);
	         			}

	         			$list.append($("<li>", {"class": "footer-text"}).text("Please note that bookmarks are stored as Cookies. Clearing cookies for this site will delete your bookmarks."));

	    			}
	    			else {
	    				$list.append($("<li>", {"class": "footer-text"}).text("You don't have any bookmarks yet. Select milestones on the left of the text to bookmark that passage."));
	    			}
	    			
	    			$('#bookmarks-opener .badge').text(bookmarks.length);
	    			
	    		}
	    	}(jQuery));
	    	$.loadBookmarks();
	    	
	    	$(document).on("click",'a.milestone', function(e) {
	    	
	    	    // Adds a bookmark
	    	    
	            e.preventDefault();
	    	    
	    	    var bookmarkData = $(this).bookmarkData();
	    	    
	    	    $.bookmark(bookmarkData);

	    	});
	    	
	    	$(document).on("click",'a.remove-bookmark', function(e) {
	    	   
	    	    // Removes the bookmark
	    	    
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

    		// Auto-bookmark for next visit
			// -----------------------------------------

			(function ($) { 
				$.saveCurrentLocation = function () {

				    $(".translation a.milestone").each(function(index){
				    	// We are on a translation so remove the lastLocation
				    	if(index == 0){
				    		Cookies.remove('lastLocation', { domain: $.getDomain() });
				    	}
				    	// If we scroll down then set a new last location
				    	var $this = $(this);
				    	if($this.elementInView() == "inView"){
				    		Cookies.set('lastLocation', JSON.stringify($this.bookmarkData()), { expires: 31, domain: $.getDomain() });
				    		return false;
				    	}
					});

				}
			}(jQuery));

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
		    	        		var $lastLocation = $(lastLocation.hash);
		    	        		var inView = false;
						    	if($lastLocation.elementInView() == "inView"){
						    		var inView = true;
						    	}

						    	if(!inView)
		    	        		{

		    	        			// Offer some options
				    	        	$alert = $("#page-alert");

				    	        	$alert.find(".container").append(
				    	        		$("<small>").text("You were reading:")
				    	        	).append(
				    	        		$("<br>")
				    	        	).append(
				    	        		lastLocation.title
				    	        	).append(
				    	        		$("<br>")
				    	        	).append(
				    	        		$("<a>", {"href": lastLocation.page + lastLocation.hash, "class": "scroll-to-anchor small"})
				    	        			.text("go there")
				    	        			.on("click", function(e){
									    		$(this).parents("#page-alert").collapse('hide');
									    	})
				    	        	).append(
				    	        		" &bull; "
				    	        	).append(
				    	        		$("<a>", {"href": lastLocation.page + lastLocation.hash, "class": "small"})
				    	        			.text("bookmark it")
				    	        			.on("click", function(e){
				    	        				e.preventDefault();
				    	        				$.bookmark(lastLocation);
									    		$(this).parents("#page-alert").collapse('hide');
									    	})
				    	        	).append(
				    	        		" &bull; "
				    	        	).append(
				    	        		$("<a>", {"href": lastLocation.page + lastLocation.hash, "class": "small"})
				    	        			.text("forget it")
				    	        			.on("click", function(e){
				    	        				e.preventDefault();
									    		$(this).parents("#page-alert").collapse('hide');
									    	})
				    	        	);

				    	        	// Only show it once
									Cookies.remove('lastLocation', { domain: $.getDomain() });

							    	$alert.collapse('show');
							    }
		    	        	}
		    	        }
		    	    }
	    		}
	    	}(jQuery));

	    	if($("#page-alert").length){
	    		$.lastLocationOption();
	    	}
	    	
		});
	}

	// Set the size of a dropdown
	// --------------------------------------
	$('.dropdown').on('show.bs.dropdown', function () {


		var $dropdownMenu = $(this).find(".dropdown-menu");
		var windowWidth = $(window).width();
		var dropdownMaxWidth = (windowWidth - 80);
		var dropdownNormalWidth = 600;
		var dropdownWidth = dropdownMaxWidth < dropdownNormalWidth ? dropdownMaxWidth : dropdownNormalWidth;

		$dropdownMenu.css({"width":  dropdownWidth + "px", "overflow": "hidden"});

		$dropdownMenu.data("init-height", $dropdownMenu.height());

		$dropdownMenu.height("0px");
		
	});

	$('.dropdown').on('shown.bs.dropdown', function () {

		var $dropdownMenu = $(this).find(".dropdown-menu");
		var windowHeight = $(window).height();
		var dropdownMaxHeight = (windowHeight - 100);
		var dropdownInitHeight = $dropdownMenu.data("init-height");
		var dropdownHeight = dropdownMaxHeight < dropdownInitHeight ? dropdownMaxHeight : dropdownInitHeight;

		// Close the footer
		// ---------------------------------
		$('#fixed-footer').collapse('hide');

		$dropdownMenu
			.height(dropdownHeight + "px")
			.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
				$(this).css({"overflow": "auto"})
			});

	});

	$('.dropdown').on('hide.bs.dropdown', function () {

		$(this).find(".dropdown-menu").css({"height": "auto", "overflow": "auto"});

	});

	// Footer close button
	// --------------------------------------
	$(document).on("click",'#fixed-footer .close', function(e) {
	
        e.preventDefault();
        
		// Close the footer
        $('#fixed-footer').collapse('hide');
        
	});

	$(document).on("click",'#fixed-footer, #fixed-footer a', function(e) {
	
		e.stopPropagation();
        
	});

	// Set footer max-height
	// --------------------------------------
	(function ($) { 
		$.popupFooterHeight = function () {

			// Footer should not be more than 50% of the viewport
			$("#fixed-footer .fix-height").css({"max-height": ($(window).height() * 0.5) + "px"});

		}
	}(jQuery));
	$.popupFooterHeight();

	// Pop-up content in the footer
	// -----------------------------------------
	$(document).on("click",'a.pop-up', function(e) {
	
        e.preventDefault();
        
        var $this = $(this);
        
        // Hide the footer
        $('#fixed-footer').removeClass('in');

        var doPopUp = function(){
        	// Trigger pre-events
	        $this.trigger("prepare");

	        // Copy content to the footer
	        var $content = $($this.attr("href")).clone();
	        $content.attr("id", "");
	        $('#fixed-footer .data-container').html($content);
	        // Show the footer
			$('#fixed-footer').collapse('show');
        	
        }

        // Is this the first call to the glossary?
        if($this.hasClass("glossary-link") && !$(".backlinked").length){
        	// It could take a while...
        	$.wait("Preparing the glossary...");
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


	// Find instances of the glossary items in the text 
    // and link them to the glossary.
    // -----------------------------------------------------------
    if($('html').hasClass('screen')){

    	if($("#glossary .glossary-item").length){

    		$.getScript( getScriptDomain() + "/js/replace-text.min.js" ).done(function( script, textStatus ) {

    			$.expr[":"].contains = $.expr.createPseudo(function(arg) {
				    return function( elem ) {
				        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
				    };
				});
    			
	            var isWorking = false,
	                $allGlossaries = $("#glossary .glossary-item"),
	                $allParagraphs = $(".glossarize");

	            var $allGlossariesPrioritised = $allGlossaries.slice().sort(function(a, b) {
						return +b.getAttribute('data-priority') - +a.getAttribute('data-priority');
					}),
	                escapeRegExp = function(stringToGoIntoTheRegex) {
	                
	                    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	                    
	                },
	                glossarize = function($glossaries, $paragraphs, callback){
	                
						// Highlight instances of the glossary items in each
						// paragraph with a link to the glossary.
						// -------------------------------------------------
						$glossaries.each(function(){

						    var $glossary = $(this);

						    $glossary.find('.term').each(function(){
						    	if($glossary.data("match") == "marked"){

						    		// Markup marked glossaries
						    		glossaryMarked($(this), $glossary, $paragraphs);
							    }
							    else {

							    	// Markup matching glossaries
							    	glossaryMatch($(this), $glossary, $paragraphs);

							    }
						    });
						});
						if(callback){
						   callback(arguments[3], arguments[4]);
						}
	                   
	                },
	                glossaryRegEx = function(term){
	                	// Unfortunately, as JS doesn't consider accented characters as "word" characters.
				    	// Therefore cannot use the \b or \w metacharacters. We have to enumerate all word boundaries ourselves.
	                	return new RegExp("(^|\\s|'|“|:|;|\"|\\(|\\[|>)(" + escapeRegExp(term.toLowerCase()) + ")($|\\s|\\.|,|:|;|\\!|\\?|—|’\\W|'\\W|”|\"|\\)|\\]|<|s\\W|es\\W|’s\\W|'s\\W|s’\\W|s'\\W)","gi");
	                },
	                glossaryMarked = function($term, $glossary, $paragraphs){

	                	
	                	// Glossarise the marked up terms and replace with links

				    	var glossaryId = $glossary.attr("id");
				        var regEx = glossaryRegEx($term.text());
				        
				        $paragraphs.find("span.term:contains(" + $term.text() + ")").each(function(spanIndex){

				        	var $span = $(this);
				        	var muteClass = spanIndex > 0 ? 'mute' : '' ;
				        	$span.replaceWith('<a href="#' + glossaryId + '" class="glossary-link ' + muteClass + ' pop-up">' + $span.text() + '</a>');
				        	
				        });
	                },
	                glossaryMatch = function($term, $glossary, $paragraphs){

	                	// Glossarise any matches in the text

				    	var term = $term.text();
				    	var glossaryId = $glossary.attr("id");
				    	var regEx = glossaryRegEx(term);
				        
				        $paragraphs.filter(function(){
				        	
				        	return regEx.test($(this).html());
				        	
				        }).each(function(){
				        	
				        	$(this).replaceText(regEx, '$1<a href="#' + glossaryId + '" class="glossary-link pop-up">$2<\/a>$3');

							/*
							This faster alternative has some issues.
							-----------------------------------
							var $paragraph = $(this);
							var content = $paragraph.html();
							content = content.replace(regEx , '$1<a href="#' + glossaryId + '" class="glossary-link mute pop-up">$2<\/a>$3');
				        	$paragraph.html(content);
							*/
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
                            $allParagraphs.has("a[href='#" + glossaryId + "']").each(function(refIndex){
                            	
                                var $paragraph = $(this);
                                var paragraph_id = $paragraph.attr("id");
                                if(!paragraph_id){
                                	paragraph_id = $paragraph.parents("[id]").attr("id");
                                }

                                // Create a link to it
                                //var title = "In " + $glossaryRef.parents("section").find("h3").text();
                                var linkAttributes = {
                                	"href": "#" + paragraph_id, 
                                	"class": "scroll-to-anchor", 
                                	"data-mark": "a[href='#" + glossaryId + "']"
                                };
                                var $link = $("<a>", linkAttributes).text(refIndex + 1);
                                // Create a list item
                                var $item = $("<li>");
                                // Append the link to the item
                                $item.append($link);
                                // Append the item to the list
                                $list.append($item);
                            });
                            
                            // Append the list to the glossary
                            $glossaryItem.find(".occurences").append($list);
	                            
	                    });
	                    
	                    if(callback){
	                        callback();
	                    }
	                    
	                },
	                prepGlossary = function($glossary){
	                	// First glossarize terms with a higher priority
                        var priority = parseInt($glossary.data("priority"));

                        var $higherPriority = $allGlossariesPrioritised.filter(':not(.backlinked)').filter(function() {
							return $(this).data("priority") > priority;
						});

						$higherPriority.each(function(){
							var $otherGlossary = $(this);
							glossarize($otherGlossary, $allParagraphs.filter(':not(.glossarized)'), glossaryBackLink, $otherGlossary, function(){ 
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
							glossarize($glossary, $allParagraphs.filter(':not(.glossarized)'), glossaryBackLink, $glossary, function(){ 
	                        	isWorking = false;
                            	$glossary.addClass("backlinked");
	                        });

	                    }
	                    
				    },
				    hideTermsTimeout;
	            
	     		/*
				(function ($) { 
				    $.glossarizeAll = function () {

				    	// Glossaries all paragraphs
	     				// ---------------------------------------------

				        $.wait("Please wait a few seconds while the text is prepared...");
				        setTimeout(function() {
				            glossarize(
				                $allGlossaries, 
				                $allParagraphs,
				                function(){ 
				                	$.wait("", true);
				                }
				            );
				        }, 500);
				    }
				}(jQuery));
				$.glossarizeAll();
				*/

				(function ($){
					$.showGlossary = function(){

						var $translation = $(".translation");

				    	$translation.removeClass("mute-glossary");

     			    	clearTimeout(hideTermsTimeout);

     			    	hideTermsTimeout = setTimeout(function(){
     			    		$translation.addClass("mute-glossary");
     			    	}, 1000);
				    }
				}(jQuery));

				(function ($) { 
	    			$.glossarizeVisibleParagraphs = function () {
	    
	        			// Glossarize paragraphs that have become visible
	        			// ----------------------------------------------
	        			
	        		    if (isWorking) return false;
	        				
	        			$allParagraphs.filter(':not(.glossarized)').each(function(){
	        			
	        			    var $paragraph = $(this);
	     			    	var elementInViewStatus = $paragraph.elementInView();

	     			    	$.showGlossary();
	     			    	
	     					if(elementInViewStatus == 'inView'){
	                            parseParagraph($paragraph);
	     					}
	     					else if(elementInViewStatus == 'below'){
	     					    // This allows us to break on the first
	     					    // non-visible after a visible.
	     					    return false;
	     					}
	        			    
	     				});
	     				
	    			}
	    		}(jQuery));
	    		
	    		(function ($) { 
	    			$.backlinkVisibleGlossaries = function () {
	    
	        			// Back link glossaries that have become visible
	        			// ---------------------------------------------
	        			
	        		    if (isWorking) return false;

	        			$allGlossaries.filter(':not(.backlinked)').each(function(){
	        			
	        			    var $glossaryItem = $(this);
	     			    	var elementInViewStatus = $glossaryItem.elementInView();
	     			    	
	     					if(elementInViewStatus == 'inView'){
	                            parseGlossary($glossaryItem);
	     					}
	     					else if(elementInViewStatus == 'below'){
	     					    // This allows us to break on the first
	     					    // non-visible after a visible.
	     					    return false;
	     					}
	        			    
	     				});
	     				
	    			}
	    		}(jQuery));
	            
	     		
	     		// Also implement on showing in pop-up footer:
	     		// Call prepare event on clicking a glossary link
	     		// ----------------------------------------------
	            $(document).on("prepare",'a.glossary-link', function(e) {
	               parseGlossary($($(this).attr("href")));
	           	});
	     		
	        });
    	}
         
    }

    // Glossarize the currently visible elements
	// -------------------------------------------
	$(window).scrollEnd(function () {
		if(typeof $.backlinkVisibleGlossaries === 'function'){ $.backlinkVisibleGlossaries(); } ;
		if(typeof $.glossarizeVisibleParagraphs === 'function'){ $.glossarizeVisibleParagraphs(); };
		if(typeof $.saveCurrentLocation === 'function'){ $.saveCurrentLocation(); };
	}, 100);
	$(window).scroll();

    // Get the href content via ajax and put it in the specified element
    // ----------------------------------------------------------------- 
    $(document).on("click", "[data-ajax-target]", function(e){
        
        e.preventDefault();
        
        var $this = $(this);
        var source = $this.attr('href');
        var target = $this.data('ajax-target');
        var $target = $(target);

        if(!$target.is('.loaded')){
            $.get(source, function(data) {
                $target.html(data).collapse('show').addClass('loaded');
            });
        }
        else{
            $target.collapse('toggle');
        }
        
    });

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

    // Filter on change
    // ----------------------------------------------------------------- 
    $(document).on("change",".filter-form input, .filter-form select", function(e){
	    $(this).parents("form").submit();
	});

    // Match heights on hidden content
	//------------------------------------------
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$.matchHeights();
	});

	// Close temporary alerts
	// -----------------------------------------
	$(".alert.alert-temporary").delay(2000).slideUp(400);

	// Track some clicks
	// -----------------------------------------
	$('a.log-click').on('click', function (e) {
		if (typeof ga === "function") { 
		    ga('send', 'pageview', $(this).attr('href'));
		}
	});

	// Rewind button
	// -----------------------------------------
	$("#rewind-container button").on('click', function (e) {
		var $button = $(this);
		if(rewindHistory.length){
			var target = rewindHistory.pop();
			$("html, body").animate({ scrollTop: target}, "slow");
			if(!rewindHistory.length){
				$button.parents("#rewind-container").addClass("hidden");
			}
		}
	});

	// Replace text on internal references
	// -----------------------------------------
	$("a.internal-ref").each(function(index){
		var $this = $(this);
		var text = $this.text();
		if(!text){
			var $target = $($this.attr('href'));
			if($target.hasClass("milestone")){
				text = $target.text();
			}
			else if($target.hasClass("footnote")){
				text = $target.find(".footnote-number").text();
			}
			else if($target.find(".milestone").length) {
				text = $target.find(".milestone").first().text();
			}
			$this.text(text);
		}
	});


	// Event on body click
	// //------------------------------------------
	$(document).on("click",'body', function(e) {
	
		// Close the footer
        $('#fixed-footer').collapse('hide');
        if(typeof $.showGlossary === 'function'){ $.showGlossary(); };
        
	});

	// Trigger events on resize
	//------------------------------------------
	$(window).on("resize", function(){
		$.mediaSize();
		$.matchHeights();
		$.popupFooterHeight();
	});
	$(window).resize();

});
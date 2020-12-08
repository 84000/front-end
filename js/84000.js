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

	// Add a class to signal that scripts work
	// (in case it's an ereader browser)
	// ---------------------------------------
	$('html').addClass("scripts");

	// Use cache for loading scripts
	// ---------------------------------
	$.ajaxSetup({
		cache: true
	});

	// Media size
	// ---------------------------------------
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

			//console.log($element);

			if($("html.screen").length && $element.find("[data-match-height]").length){

				var heights = {};
				var documentWidth = $(document).width();
				//console.log(documentWidth);

				// Loop through all sub-nodes with [data-match-height]
				$element.find("[data-match-height]:visible").each(function(){
					var $this = $(this);
					// Don't repeat if this was already done for this width
					if($this.data("matched-height") == documentWidth) return;
					//console.log($this.data("matched-height"));
					// Set the height to auto
					$this.height('auto');
					// Get the height
					var this_height = $this.outerHeight();
					var height_group = $this.data('match-height');
					// Set the height for this group if it's taller
					if(!heights[height_group] || this_height > heights[height_group]){
						heights[height_group] = this_height;
					}
					
				});

				// Override if a particular element is specified
				$element.find("[data-match-height].match-this-height:visible").each(function(){
					var $this = $(this);
					// Don't repeat if this was already done for this width
					if($this.data("matched-height") == documentWidth) return;
					heights[$this.data('match-height')] = $this.outerHeight();
				});

				// Set the heights
				$.each(heights, function(group, val) {
					$("[data-match-height='" + group + "']").each(function(){
						var $this = $(this);
						if(!$this.data('match-height-media') || $('html').is($this.data('match-height-media'))){
							$this.height(val + 'px').data("matched-height", documentWidth);
						}
					});
				});
			}
		}
	}($));

	// Get a paramater from the url
	// ------------------------------------------
	(function ($) { 
		$.getUrlParameter = function (param, link) {
			var search = link ? link.search : window.location.search;
			var pageURL = search.substring(1),
		        urlVariables = pageURL.split('&'),
		        parameterName,
		        i;

		    for (i = 0; i < urlVariables.length; i++) {
		        parameterName = urlVariables[i].split('=');

		        if (parameterName[0] === param) {
		            return parameterName[1] === undefined ? true : decodeURIComponent(parameterName[1]);
		        }
		    }
		}
	}($));

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

	// Render a section that is hidden with .preview
	// --------------------------------------------------------
	(function ($) { 
		$.fn.render = function (callback) {
			var $element = $(this);
    		if($element.hasClass('preview')){

				// render the node
		    	$element.removeClass('preview').addClass('show');

		    	// Do other callbacks
		    	if(callback){
		    		callback();
		    	}
			}
	    }
	}($));

	// Click to render a section
	// ------------------------------------------
	$(document).on("click", ".preview:not(.partial) a.reveal", function (e) {
		e.preventDefault();
		var href = $(this).attr('href');
	    var hrefSplit = href.split("#");
	    var targetId = hrefSplit[hrefSplit.length - 1];
	    var $target = $("#" + targetId);
	    if($target.length){
	    	$target.render();
	    }
	});

	// Collapse a section with .preview
	// --------------------------------------------------------
	(function ($) { 
		$.fn.preview = function (callback) {
			var $element = $(this);
    		if($element.hasClass('show')){

				// render the node
		    	$element.removeClass('show').addClass('preview');

		    	// Do other callbacks
		    	if(callback){
		    		callback();
		    	}
			}
	    }
	}($));

	$(document).on("click",'.show a.preview', function(e) {
		e.preventDefault();
		var $this = $(this);
		$($this.attr('href')).preview();
	});

	// Scroll to an anchor
	// -----------------------------------------
	(function ($) { 
		$.scrollToAnchor = function (hash, delay, parent, offset, callback) {

			if(!legacyLink() && $("html.screen").length) {

				if(!hash){
					hash = window.location.hash;
				}
				//console.log(hash);

				if(hash){

					var isTranslation = window.location.pathname.indexOf('/translation/') == 0;
					//console.log(window.location.pathname.split('/'));
					var $target = $(hash);
					//console.log($target);

					// Fallback for legacy ids 
					// e.g. #section-6 -> #UT22084-001-001-section-6
					// -------------------------------------------
					// If this target wasn't found, try it with a UT prefix
					if(!$target.length && hash.indexOf('#UT') !== 0 && isTranslation) {

						// Scan DOM for any ids that start with 'UT and' end with this hash
						$speculate = $("[id^=UT][id$=-"+ hash.substr(hash.indexOf('#') + 1) +"]");
						if($speculate.length) {
							hash = '#' + $speculate.attr('id');
							$target = $(hash);
						}

					}

					// Is the hash in the DOM?
					// Is the section complete (or partial)?
					if($target.length && !$target.closest(".partial").length){

						// Compile the scroll function, with callback.
						// -------------------------------------------
						if(!delay) delay = 0;
						if(!parent) parent = "html, body";

						var scrollToAnchorScroll = function(){
							if(!offset) offset = $target.offset();
							if(offset){
								$(parent).delay(delay).animate({ scrollTop: (offset.top - 15) }, "slow", callback);
							}
							else {
								if(callback){
									callback();
								}
							}
						}

						// Before executing the scroll make sure it is visible
						// ---------------------------------------------------
						var $collapsed = $target.closest(".collapse");
						var $unrendered = $target.closest("section.preview");
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
					// The has is not in the DOM or the section is incomplete
					// Get the section via ajax
					else if(isTranslation) {

						// New for Reading Room 2.1.2
						// Get part via ajax if hash not in DOM
						// --------------------------------------
						// console.log(hash + ' not present in DOM');

						var partParam = "?part=" + hash.substr(hash.indexOf('#') + 1);
						var ajaxUrl = window.location.pathname + partParam + "&view-mode=ajax-part";

						$.wait("Loading section...");

						//console.log(ajaxUrl);
						$.ajax({
			    			url: ajaxUrl,
			    			type: 'GET',
			    			dataType: 'html',
			    			success: function(data) {

			    				$.wait("", true);

			    				// Find the id within the content
			    				var $data = $(data);
			    				var $dataPart = $data.find(hash).closest("section");
			    				var dataPartId = $dataPart.attr('id');
			    				//console.log(dataPartId);
			    				if(dataPartId !== undefined){
			    					var $target = $("#" + dataPartId);
			    					if($target.length){
			    						$target.replaceWith($dataPart);
			    						$.scrollToAnchor(hash, 0, null, null, callback);
			    					}
			    				}
			    				else if(callback){
									callback();
								}
			    				
			    			}
			    		});
			    		
					}
					else if(callback){
						callback();
					}
				}
				else if(callback){
					callback();
				}
			}
			else if(callback){
				callback();
			}
		}
	}($));

	// Scroll to anchor link
	// -----------------------------------------
	var rewindHistory = new Array;
	$(document).on("click",'a.scroll-to-anchor', function(e) {

		// Check it's on this page
		// -------------------------------------------
		// console.log(window.location);
		// console.log(this.pathname);
		// console.log(this.hostname);

		if(window.location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && window.location.hostname == this.hostname) {
			
			e.preventDefault();

			var $this = $(this);

			var postScrollToAnchor = function(){

				// Rewind functionality
				// -------------------------------------------
				if($this.not(".pop-up")){

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

				// Mark elements in the text
				// -------------------------------------------
				if($this.has("[data-mark]")){

					$.markNodes($this.data("mark"));

				}

			}

			// Smooth scroll to the hash
			// -------------------------------------------
			//console.log(this.hash);
			$.scrollToAnchor(this.hash, 0, null, null, postScrollToAnchor);

			return false;
		}
	});

	// Mark
	// -----------------------------------------
	(function ($) { 
		$.markNodes = function (selector) {

			var $targets = $(selector);

			if($targets){

				// Pop-up if it's a pop-up
				if($targets.first().is('.pop-up')){
					$targets.first().click();
				}

				$targets
					.removeClass("mark")
					.removeClass("ease-all")
					.addClass("mark");

				setTimeout(function(){
					$targets.addClass("ease-all").removeClass("mark");
					setTimeout(function(){
						$targets.removeClass("ease-all");
					},3000);
				},3000);

			}
			
		}
	}($));

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
	    return function() { return "https://cached-fe.84000.co"; };
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
	    		//console.log(window.location);
	    		var href = this.attr('href');
	    	    var hrefSplit = href.split("#");
	    	    var targetId = hrefSplit[hrefSplit.length - 1];
	    	    return {
	    	    	'page': window.location.pathname, 
	    	    	'hash': targetId ? "#" + targetId : "#top", 
	    	    	'title': this.data("bookmark")
	    	    };
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
    			var bookmarks = $.getBookmarks();
    			
    			var $tbody = $("table#bookmarks-list tbody");
    			var $tfoot = $("table#bookmarks-list tfoot");
    			
    			$tbody.empty();
    			$tfoot.empty();

    			if(bookmarks.length){

         			// show them in the list
         			for(var i = 0; i < bookmarks.length; i++){
         			    
         			    var href = bookmarks[i].page + bookmarks[i].hash;
         			    var $link = $("<a>", {"href": href, "class": "scroll-to-anchor"}).text(bookmarks[i].title);
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
    	$(document).on("click",'a[data-bookmark]', function(e) {
    	  	
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

			    $(".translation a[data-bookmark]:visible").each(function(index){
			    	
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
	    	    //console.log(lastLocation);

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

	    	        	if(!bookmarked) {

	    	        		var lastLocationHash = lastLocation.hash.substr(lastLocation.hash.indexOf('#'));
	    	        		//console.log(lastLocationHash);
	    	        		
	    	        		// Check it's not on screen
					    	if(['inView', 'topInView'].indexOf($(lastLocationHash).elementInView()) < 0) {

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
	$(document).on("click",'.collapse .close-collapse', function(e) {
	
        e.preventDefault();
        e.stopPropagation();
        
		// Close the footer
        $(this).parents('.collapse').first().collapse('hide');
        
	});

	// Add behaviour
	// Show Loading... on clicking a link
	// ---------------------------------
	$(document).on("click",'[data-loading]', function (e) {
		$.wait($(this).data('loading'));
	});

	// Set pop-up footer max-height
	// --------------------------------------
	(function ($) { 
		$.popupFooterHeight = function () {

			// Footer should not be more than 50% of the viewport
			// --------------------------------------------------
			var height_factor = 0.5;
			if($("html.xs").length){
				height_factor = 0.75;
			}

			$(".fixed-footer .fix-height").each(function(){
				$(this).css({"max-height": ($(window).height() * height_factor) + "px"});
			});

		}
	}($));
	$.popupFooterHeight();

	// Pop-up footer
	// -----------------------------------------
	$(document).on("click",'a.pop-up', function(e) {
	
        e.preventDefault();
        e.stopPropagation();
        
        var $this = $(this);
        var $popupFooter = $('#popup-footer');
        var $popupFooterDataContainer = $popupFooter.find('.data-container');

        // The target of the link
        var $target = $($this.attr("href"));

        //Check it's not already open
        if($popupFooter.is('.collapse.in') && $target.attr('id') + "-pop-up" == $popupFooterDataContainer.children().first().attr('id')){
        	// The footer is open with the same id
        	// So leave it
        }
        else {

        	// Get the content from the target
	        var $content = $target.clone();

	        // Close open pop-up
	        $('.collapse').not($popupFooter).collapse('hide');
	        $popupFooter.removeClass('in');

	        // Reset the id
	        $content.attr("id", $content.attr("id") + "-pop-up");

	        // Copy content to the footer
	        $popupFooterDataContainer.html($content);

	        // Show the footer
			$popupFooter.collapse('show');
        }

	});

	// Pop-out sidebar
	// -----------------------------------------
	$(document).on("click",'a.show-sidebar', function(e) {
	
        e.preventDefault();
        e.stopPropagation();

        var selector = $(this).attr('href');
        var $sidebar = $(selector);

        $('.collapse').not($sidebar).collapse('hide');
        $sidebar.removeClass('in');
        
        if(selector == "#contents-sidebar" &&  !$sidebar.hasClass("loaded")){
        	var $toc = $("#toc  .contents-table");
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

        $('.lg ' + selector + ' .fix-width').width(parseInt($(window).width() * 0.35));
        $('.md ' + selector + ' .fix-width').width(parseInt($(window).width() * 0.6));
        $('.sm ' + selector + ' .fix-width').width(parseInt($(window).width() * 0.75));
        $('.xs ' + selector + ' .fix-width').width(parseInt($(window).width() * 0.90));

		$sidebar.collapse('toggle');
	});

	// Close sidebar on clicking something in it
	// -----------------------------------------
	$(document).on("click",'.fixed-sidebar a:not(.remove-bookmark, [data-toggle="collapse"])', function(e) {

		$(this).parents(".fixed-sidebar").collapse('hide');

	});

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

	
	(function ($) { 
		$.processElementInView = function() {

			$(".reading-room.translation section.show [data-in-view-replace]").each(function() {

				var $paragraph = $(this);

				var elementInViewStatus = $paragraph.elementInView();

				if(['inView', 'topInView'].indexOf(elementInViewStatus) >= 0){
					//console.log($paragraph.data('in-view-replace'));

					if($paragraph.data('in-view-replace') > ''){
						$.replaceWithAjax(
                    		$paragraph.data('in-view-replace'), 
                    		$paragraph, 
                    		function(){
                    			$paragraph.data('in-view-replace', '');
                    		}
                    	);
					}

					}
					else if(elementInViewStatus == 'below'){
					    // This allows us to break on the first non-visible after a visible.
					    return false;
					}

			});
		};
	}($));

	// Add behaviour...
	// Window scroll
	// -------------------------------------------
	var windowScroll200Timeout;
	var windowScroll3000Timeout;
	$(window).on('scroll', function(){

		// Clear any existing timeouts
		clearTimeout(windowScroll200Timeout);
		clearTimeout(windowScroll3000Timeout);

		$('body').addClass('scrolling');
		//console.log('scroll');

		// Show/hide scroll to top link
		if($(document).scrollTop() > 200){
			$(".link-to-top").addClass("in");
		}

		windowScroll200Timeout = 
			setTimeout(function() { $.processElementInView(); } , 200);
		
		windowScroll3000Timeout = 
			setTimeout(
				function() {

					$('body').removeClass('scrolling');
					//console.log('un-scroll');

					if($(document).scrollTop() < 200){
						$(".link-to-top").removeClass("in");
					}

				}
			, 3000);
		
	});

	// Replace an element with some html via ajax
	// ------------------------------------------
	(function ($) { 
		$.replaceWithAjax = function(source, $target, callback) {

			// Extract the url and fragment from the source
	    	// ----------------------------------------------
			var sourceSplit = source.split("#");
			var sourceUrl = sourceSplit[0];
			var sourceFragment = sourceSplit[1];
			var ajaxUrl = sourceUrl + (sourceUrl.indexOf('?') == -1 ? '?' : '&') + 'method=ajax' ;

			$.ajax({
    			url: ajaxUrl,
    			type: 'GET',
    			dataType: 'html',
    			success: function(data) {

    				// Get a fragment of the result
	    			// ----------------------------------------------
	    			var $data = $(data);
	    			var $wrapper = $("<div>").append(data);
	    			var $dataFragment = $wrapper.find("#" + sourceFragment);


	    			// Remove ids when we insert from a different dom
	    			// ----------------------------------------------
	    			// Don't need to do this as we are replacing
	    			// $dataFragment.find("[id]").addBack().removeAttr('id');

	    			// Append the data to the target
	    			// ----------------------------------------------
	    			if($dataFragment.length){
	    				$target.replaceWith($dataFragment);
		    			$.matchHeights($dataFragment);
						$.prepFiltersCarousel($dataFragment);
	    			}

	    			// Do callbacks
	    			// ----------------------------------------------
			    	if(callback){
			    		callback();
			    	}
	            }
    		});
		};
	}($));

	// Add behaviour...
    // Get the href content via ajax and put it in the specified element
    // ----------------------------------------------------------------- 
    $(document).on("click", "a[data-ajax-target]", function(e){
        
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
        	$('.collapse').not($popupFooter).not($this.closest('.collapse')).collapse('hide');
        	$popupFooter.removeClass('in');
        	$.wait("Loading the source text...");
	    	setTimeout(function(){
	    		$.replaceWithAjax(
	    			source, 
	    			$target, 
	    			function(){
	    				$popupFooter.collapse('show');
	    				$.wait("", true); 
	    			});
	        },100);
        }
        else if($target.length && !$this.is('.loaded')){
        	$.wait("Loading content...");
        	setTimeout(function(){
        		var $collapse = $target.closest('.collapse');
        		$.replaceWithAjax(
        			source, 
        			$target, 
        			function(){ 
        				$collapse.collapse('show'); 
        				$this.addClass('loaded');
        				$.wait("", true);
        			});
	        },100);
        }
        else{
            $target.closest('.collapse').collapse('toggle');
        }
        
    });

	$(document).on("submit", "form[data-ajax-target]", function(e){

		e.preventDefault();

		var $this = $(this);
		var target = $this.data('ajax-target');
		var $target = $(target);
		var formAction = $this.attr('action');
		var formData = $this.serialize();
		var source = formAction + '?' + formData + target;

		$.wait("Loading content...");

		$.replaceWithAjax(
			source, 
			$target, 
			function(){ 
				$.wait("", true);
			});
		
		return false;
	});

	// Add behaviour...
    // Show the print preview
    // ----------------------------------------------------------------- 
    $(document).on("click", "a.print-preview", function(e){

    	e.preventDefault();
    	window.print();

	});

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
    (function ($) { 
		$.setOneLineHeights = function ($element) {
			$element.find(".collapse-one-line:visible").each(function() {
		    	var $this = $(this);
		    	$this.removeClass('one-line');
		    	$this.data("collapse-one-line-height", $this.height());
		    	$this.addClass('one-line');
		    });
		}
	}($));
    $(document).on("mouseover", ".collapse-one-line", function(e){
    	e.preventDefault();
    	var $this = $(this);
    	var thisHeight = $this.data('collapse-one-line-height');
    	if(thisHeight){
    		$this.height(thisHeight).removeClass('one-line');
    	}
    });
    $(document).on("mouseout", ".collapse-one-line", function(e){
    	e.preventDefault();
    	var $this = $(this);
    	var thisHeight = $this.data('collapse-one-line-height');
    	if(thisHeight){
    		$this.addClass('one-line').css({"height" : ""});
    	}
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
			var source = values[keys[i]];
			
			if(source.substr(0, 4) == 'http'){

				// If source is a url get ajax content
				$.replaceWithAjax(source, $target, function(){});

			}
			else {

				var $source = $(source);

				// If source is a node get text
				if($source.length){
					if($source.text()){
						if($target.replaceMatchesWithThis($source)){
							$($source.attr('href')).addClass("replaced");
						}
					}
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
				if($value.length) {
					$target.val($value.text());
				}
				else {
					$target.val(values[keys[i]]);
				}
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
		// ------------------------------------------
		//console.log($(e.target).attr('href'));
		var $target = $($(e.target).attr('href'));
		$.matchHeights($target);
		$.setOneLineHeights($target);

	});

	// Add behaviour...
	// Modal set iframe src
	// -------------------------------------------
	$('#iframe-modal.modal').on('show.bs.modal', function (e) {
		var $link = $(e.relatedTarget);
		var $modal = $(this);
		var $iframe = 
			$('<iframe>', {
				'src': $link.data('href'), 
				'frameborder': '0', 
				'scrolling': '0', 
				'allowtransparency': 'true',
				'style': 'width:100%;height:100%;min-height:500px'
			})
		$modal
			.find('.modal-content')
			.empty()
			.append($iframe);
	});

	// Add behaviour...
	// Tab set required input
	// -------------------------------------------
	$('[data-input-required]').on('show.bs.tab', function (e) {
		$($(this).data('input-required'))
			.each(function(){
				$(this).attr('required', 'required');
			});
	});
	$('[data-input-required]').on('hide.bs.tab', function (e) {
		$($(this).data('input-required'))
			.each(function(){
				$(this).removeAttr('required');
			});
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
	// Show if control checked
	// -------------------------------------------
	$(document).on("click", "input[data-show-on-checked], input[data-hide-on-checked]", function (e) {
		var $this = $(this);
		var action = $this.data("show-on-checked") ? 'show' : 'hide' ;
		var $target = action == 'show' ? $($this.data("show-on-checked")) : $($this.data("hide-on-checked")) ;
		if($this.is(':checked')) {
			$target.each(function(e){
				$(this).collapse(action);
			});
		}
		else {
			$target.each(function(e){
				$(this).collapse( action == 'hide' ? 'show' : 'hide' );
			});
		}
	});

	// Add behaviour...
    // Set input on change
    // ----------------------------------------------------------------- 
    $(document).on("change","input[data-set-value-on-change]", function(e){
	    var $this = $(this);
	    var $target = $($this.data("set-value-on-change"));
	    $target.each(function(e){
	    	$(this).val($this.val());
	    });
	});

	// Add behaviour...
    // Set input on change
    // ----------------------------------------------------------------- 
    $(document).on("change","[data-merge-values-on-change]", function(e){
	    var $this = $(this);
	    var targetSelector = $this.data("merge-values-on-change");
	    var $target = $(targetSelector);
	    var $sources = $("[data-merge-values-on-change='" + targetSelector + "']");
	    var mergedValue = [];
	    $sources.each(function(){
	    	if($(this).val() > '') {
	    		mergedValue.push($(this).val());
	    	}
	    });
	    $target.val(mergedValue.join(' '));
	});

	// Add behaviour...
	// Body click event
	// ------------------------------------------
	$(document).on("click",'body', function(e) {
	
		// Close things
        $('.collapse').not('.persist').collapse('hide');

        // show glossary highlights
        //if(typeof $.showGlossaryLinks === 'function'){ $.showGlossaryLinks(); };
        $(window).scroll();
        
	});

	// Add behaviour...
	// Stop propagation to body click
	// --------------------------------------
	$(document).on("click",'.collapse', function(e) {
	
		e.stopPropagation();

	});

	// Add behaviour
	// Set item background on expand
	// ------------------------------------------
	$('.collapse-background').on('show.bs.collapse', function () {
		$(this).addClass('show-background');
	});
	$('.collapse-background').on('hide.bs.collapse', function () {
		$(this).removeClass('show-background');
	});

	// Add behaviour
	// Match heights on expand
	// ------------------------------------------
	$('.collapse').on('shown.bs.collapse', function () {
		$.matchHeights($(this));
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
		var new_group_index = parseInt(groups_count + 1);
		$new_group.find("input, select, textarea, label").each(function(){
			var $control = $(this);
			var control_name = $control.attr('name');
			if(typeof control_name === 'string'){
				var split = control_name.split('-');
				$control.attr('name', split.slice(0, split.length - 1).join('-') + '-' + new_group_index);
			}
			var control_id = $control.attr('id');
			if(typeof control_id === 'string'){
				var split = control_id.split('-');
				$control.attr('id', split.slice(0, split.length - 1).join('-') + '-' + new_group_index);
			}
			var control_for = $control.attr('for');
			if(typeof control_for === 'string'){
				var split = control_for.split('-');
				$control.attr('for', split.slice(0, split.length - 1).join('-') + '-' + new_group_index);
			}
			if($control[0].tagName == 'select'){
				$control.selectedValue = '';
			}
			else {
				$control.val("");
			}
		});
		$new_group.insertAfter($groups.last());
		
	});

	// Add behaviour
	// Show page alert on clicking a link
	// (In addition to normal link behaviour)
	// ------------------------------------------
	$(document).on("click", "a[data-page-alert]", function(e){

		var source = $(this).data("page-alert");
		var $target = $("#page-alert");

		$.replaceWithAjax(source, $target.find('.container'), function(){ $target.addClass('info').collapse('show').addClass('loaded'); });

	});

	// Add behaviour
	// Set active
	// ------------------------------------------
	$(document).on("click", "a[data-toggle-active]", function(e){

		var $target = $($(this).data("toggle-active"));
		$target.siblings('.active').removeClass('active');
		$target.toggleClass('active');

	});

	// On loading the page...
	// Redirect to a different page
	// ------------------------------------------
	$("a.redirect-onload").each(function(e){
		location.href = $(this).attr("href");
	});

	// On loading the page...
	// Set up the filters carousel
	// ------------------------------------------

	(function ($) { 
		$.prepFiltersCarousel = function ($element) {

			$element.find('#filters-carousel').each(function(e){

				var $filters = $(this);
				var $viewport = $filters.find('.viewport');
				var $slider = $viewport.find('.slider');
				var $filter_items = $slider.find('.col-filter');
				var filter_width = $filter_items.first().outerWidth();
				var row_width = $filter_items.length * filter_width;
				var increment = $filter_items.filter('.active').index() * filter_width;

				// Set width of slider
				$slider.innerWidth(row_width + 30);
				$filters.removeClass('not-ready');

				// Set offset default based on the active element
				$viewport.animate({ scrollLeft: increment }, "slow");

				// Add events to controls
				$filters.find("a.carousel-control").on("click", function(e){
					e.preventDefault();

					increment = $(this).hasClass('left') ? -filter_width : filter_width ;

					$viewport.animate({ scrollLeft: ($viewport.scrollLeft() + increment) });
					$viewport.data('offset', $viewport.scrollLeft());

				});

			});
		}
	}($));
	
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

	// On loading the page...
	// Affix nav
	// ------------------------------------------
	$("[data-spy='affix']").each(function(){
		var $this = $(this);
		$this.width($this.width());
		$this.affix({
			offset: {
				top: function () {
			    	return $this.closest('.affix-container').offset().top;
			    }/*,
				bottom: function () {
			    	return (this.bottom = $('body > footer').outerHeight(true) + 20);
			    }*/
			}
		});
	});

	// On resize...
	// ------------------------------------------
	$(window).on("resize", function(){
		$.wait("Rendering page...");
    	setTimeout(function(){
    		$.mediaSize();
			$.matchHeights($(document));
			$.popupFooterHeight();
    		$.wait("", true);
        },100);
		
	});

	$.mediaSize();
	$.popupFooterHeight();
	$.matchHeights($(document));
	$.prepFiltersCarousel($(document));

	// Scroll to the hash location
	// Do this after all other layout processes
	// -------------------------------------------
	$.scrollToAnchor(window.location.hash, 0, null, null, function(){

		// Add callback...

    	// Mark elements in the text
		// -------------------------------------------
    	var paramaterMark = $.getUrlParameter('mark');
    	if(paramaterMark) {

			$.markNodes('[data-mark-id="'+ paramaterMark +'"]');

    	}
		// Show the last location option on loading the page
		// --------------------------------------------------
    	else if($("#page-alert").length && typeof $.lastLocationOption === 'function'){
    		$.lastLocationOption();
    	}

    	// Trigger scroll behaviour
		// This adds .scrolling which shows some stuff
		// -------------------------------------------
		$(window).scroll();

	});

});
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
		$.fn.media_size = function () {
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
	$(document).media_size();

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
			
			var hashSplit = window.location.hash.split('/')
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
		$.scroll_to_anchor = function (hash, delay, parent, offset) {
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
	
	$(document).on("click",'a.scroll-to-anchor', function() {
		if (window.location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && window.location.hostname == this.hostname) {
			$.scroll_to_anchor(this.hash);
			if($(this).hasClass("mark-target")){
				var $target = $(this.hash);
				$target.addClass("mark").delay(2000).queue(function(next){
					$target.addClass("ease-all").removeClass("mark");
					next();
				}).delay(1000).queue(function(next){
					$target.removeClass("ease-all");
					next();
				});
			}
			return false;
		}
	});
	$.scroll_to_anchor();

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
		$.scroll_to_anchor("#top");
		return false;
	});


	// Image sizing
	// --------------------------------------
	(function ($) { 
		$.fn.center_with_margins = function () {
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
		$(this).center_with_margins();
	});
	$('.thumbnail img').center_with_margins();

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

	// Make multiple elements the same size
	// ------------------------------------------
	(function ($) { 
		$.fn.match_heights = function () {
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
				var $item = $("<li>", {"class": "divider-text"}).text(text);

				// Append the item to the list
				$list.append($item);
			}
			
			$.loadContentsDropdown = function () {
		    	
		    	var $list = $("#contents-dropdown");
	    		$list.empty();

	    		var $contentLinks = $("#contents table tr");
	    		
	    		$contentLinks.each(function(){

	    			var $contentLink = $(this);
	    			addLink($contentLink.find("> td > a"), $list);
	    			
	    		});

	    		addDivider("Other links", $list);

	    		addLink($("<a>", {"href": "http://84000.co"}).text("84000 Homepage"), $list);

	    		addLink($("<a>", {"href": "/"}).text("Reading Room Lobby"), $list);

	    		addLink($("<a>", {"href": "http://84000.co/how-you-can-help/donate/#sap"}).text("Sponsor a Page"), $list);

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
	    var scriptSrc = $('script[src$="/84000.js"]').attr('src');
	    var srcChunks = scriptSrc.split('/');
	    return function() { return srcChunks[0] == "http:" ? srcChunks.slice(0,3).join('/') : "" ; };
	})();

	// Load Bookmarks
	// --------------------------------------
	if($('html').hasClass('screen')){
		$.getScript( getScriptDomain() + "/js/js-cookies.js" ).done(function( script, textStatus ) {
		
	    	(function ($) { 
	    		$.load_bookmarks = function () {
	    			
	    			// get bookmarks from cookies
	    			
		    	    var location = window.location.href;
		    	    locationSplit = location.split("#");
		    	    var page = locationSplit[0];
	    			var bookmarks = getBookmarks();
	    			
	    			var $list = $("#bookmarks-dropdown");
	    			$list.empty();

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

	         			$list.append($("<li>", {"class": "divider-text"}).text("Please note that bookmarks are stored as Cookies. Clearing cookies for this site will delete your bookmarks."));

	    			}
	    			else {
	    				$list.append($("<li>", {"class": "divider-text"}).text("You don't have any bookmarks yet. Select milestones on the left of the text to bookmark that passage."));
	    			}
	    			
	    			$('#bookmarks-opener .badge').text(bookmarks.length);
	    			
	    		}
	    	}(jQuery));
	    	$.load_bookmarks();
	    	
	    	function getBookmarks() {
	    	
	    	    // Get current bookmarks as array
	    	    
	    	    var bookmarks = Cookies.get('bookmarks');
	    	    
	    	    if(bookmarks){
	    	        bookmarks = JSON.parse(bookmarks);
	    	    }
	    			
	    	    if(!(bookmarks instanceof Object)){
	    	        bookmarks = new Array();
	    	    }
	    	    
	    	    return bookmarks;
	    	};

	    	function getDomain(){
	    		var domain = location.hostname.split('.').reverse()[1] + "." + location.hostname.split('.').reverse()[0];
	    		//console.log(domain);
	    		return domain;
	    	}
	    	
	    	$(document).on("click",'a.milestone', function(e) {
	    	
	    	    // Adds a bookmark
	    	    
	            e.preventDefault();
	    	    
	    	    var $this = $(this);
	    	    var location = window.location.href;
	    	    locationSplit = location.split("#");
	    	    var page = locationSplit[0];
	    	    var hash = $this.attr('href');
	    	    var pageTitle = $("#title h1").text();
	    	    var sectionTitle = $this.parents("section").find("h3").first().text();
	    	    var milestoneTitle = $this.text();
	    	    var title = pageTitle + (sectionTitle ? " / " + sectionTitle : "") + (milestoneTitle ? " / " + milestoneTitle : "");
	    	    var bookmark = {'page': page, 'hash': hash, 'title': title};
	    	    
	    	    // Get current bookmarks as array
	    	    var bookmarks = getBookmarks();
	    	    
	    	    // Add bookmark to array
	    	    var found = false;
	    	    for(var i = 0; i < bookmarks.length; i++){
	    	        if(bookmarks[i].page == bookmark.page && bookmarks[i].hash == bookmark.hash){
	    	           found = true;
	    	        }
	    	    }
	    	    if(!found){
	    	        bookmarks.push(bookmark);
	    	    }
	    	    
	    	    // Add array to cookie
	    	    Cookies.set('bookmarks', JSON.stringify(bookmarks), { expires: 365, domain: getDomain() });
	    	    
	    	    // Reload bookmarks
	    	    $.load_bookmarks();

	    	});
	    	
	    	$(document).on("click",'a.remove-bookmark', function(e) {
	    	   
	    	    // Removes the bookmark
	    	    
	            e.preventDefault();
	            e.stopPropagation();
	    	    
	    	    var href = $(this).attr('href');
	    	    var bookmarks = getBookmarks();
	    	    
	    	    // Remove the bookmark
	    	    for(var i = 0; i < bookmarks.length; i++){
	    	        if(bookmarks[i].page + bookmarks[i].hash == href){
	    	             bookmarks.splice(i, 1);
	    	        }
	    	    }
	    	    // Set the cookie
	    	    Cookies.set('bookmarks', JSON.stringify(bookmarks), { expires: 365, domain: getDomain() });
	    	    
	    	    // Reload bookmarks
	    	    $.load_bookmarks();
	    	});
	    	
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

	$(document).on("click",'body', function(e) {
	
		// Close the footer
        $('#fixed-footer').collapse('hide');
        
	});

	$(document).on("click",'#fixed-footer, #fixed-footer a', function(e) {
	
		e.stopPropagation();
        
	});

	// Set footer max-height
	// --------------------------------------
	(function ($) { 
		$.popup_footer_height = function () {

			// Footer should not be more than 50% of the viewport
			$("#fixed-footer .fix-height").css({"max-height": ($(window).height() * 0.5) + "px"});

		}
	}(jQuery));
	$.popup_footer_height();

	// Pop-up content in the footer
	// -----------------------------------------
	$(document).on("click",'a.pop-up', function(e) {
	
        e.preventDefault();
        
        var $this = $(this);
        
        // Hide the footer
        $('#fixed-footer').removeClass('in');

        // Trigger pre-events
        $this.trigger("prepare");

        // Copy content to the footer
        var $content = $($this.attr("href")).clone();
        $content.attr("id", "");
        $('#fixed-footer .data-container').html($content);

        // Show the footer
		$('#fixed-footer').collapse('show');
        
	});


	// Find instances of the glossary items in the text 
    // and link them to the glossary.
    // -----------------------------------------------------------
    if($('html').hasClass('screen')){

    	if($("article #glossary .glossary-item").length){

    		$.getScript( getScriptDomain() + "/js/replace-text.min.js" ).done(function( script, textStatus ) {

    			$.expr[":"].contains = $.expr.createPseudo(function(arg) {
				    return function( elem ) {
				        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
				    };
				});
    			
	            var isWorking = false,
	                $allGlossaries = $("article #glossary .glossary-item"),
	                $allParagraphs = $("article #summary p, article #introduction p, article .chapter p, article #colophon p");

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
	                        var glossaryId = $glossary.attr("id");

	                        $glossary.find('.term').each(function(termIndex){

	                            var $term = $(this);
	                            var termText = $term.text().toLowerCase();
	                            var regEx = new RegExp("(\^|[\\s\\.,“‘])(" + escapeRegExp(termText) + ")(\$|[\\s\\.,;:!’s”])","gi");
	                            
	                            $paragraphs.filter(":contains('" + termText + "')").each(function(paragraphIndex){
	                            	
	                                $(this).replaceText(regEx, "$1<a href='#" + glossaryId + "' class='glossary-link pop-up'>$2<\/a>$3");

	                            });

	                        });
	                   });
	                   
	                   if(callback){
	                       callback(arguments[3], arguments[4]);
	                   }
	                   
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
                            $allParagraphs.find("a[href='#" + glossaryId + "']").each(function(refIndex){
                            	
                                var $glossaryRef = $(this);
                                // Add an id so we can link to this reference
                                $glossaryRef.attr("id","glossary-link-" + glossaryId + "-" + refIndex);
                                // Create a link to it
                                //var title = "In " + $glossaryRef.parents("section").find("h3").text();
                                var $link = $("<a>", {"href": "#glossary-link-" + glossaryId + "-" + refIndex, "class": "scroll-to-anchor mark-target"}).text(refIndex + 1);
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

	                        
	                        // First glossarize terms with a higher priority
	                        var priority = parseInt($glossary.data("priority"));

	                        var $higherPriority = $allGlossariesPrioritised.filter(':not(.backlinked)').filter(function() {
								return $(this).data("priority") > priority;
							});

							$higherPriority.each(function(){
								var $otherGlossary = $(this);
								glossarize($otherGlossary, $allParagraphs, glossaryBackLink, $otherGlossary, function(){ 
		                        	isWorking = false;
	                            	$otherGlossary.addClass("backlinked");
		                        });
							});

	                        glossarize($glossary, $allParagraphs, glossaryBackLink, $glossary, function(){ 
	                        	isWorking = false;
                            	$glossary.addClass("backlinked");
	                        });
	                    }
	                    
				    },
	     			elementInView = function ($element){
	     
	     				// Is this element visible?
	     				// -----------------------------------
	     
	     			    var $window = $(window);
	     
	     			    var docViewTop = $window.scrollTop();
	     			    var docViewBottom = docViewTop + $window.height();
	     
	     			    var elementTop = $element.offset().top;
	     			    var elementBottom = elementTop + $element.height();
	     			    
	     			    var position = "inView";
	     			    
	     			    if(elementBottom <= docViewTop){
	     			        position = "above";
	     			    }
	     			    else if(elementTop >= docViewBottom){
	     			        position = "below";
	     			    }
	     
	     			    return position;
	     			};
	            
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

				(function ($) { 
	    			$.glossarizeVisibleParagraphs = function () {
	    
	        			// Glossarize paragraphs that have become visible
	        			// ----------------------------------------------
	        			
	        		    if (isWorking) return false;
	        				
	        			$allParagraphs.filter(':not(.glossarized)').each(function(){
	        			
	        			    var $paragraph = $(this);
	     			    	var elementInViewStatus = elementInView($paragraph);
	     			    	
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
	     			    	var elementInViewStatus = elementInView($glossaryItem);
	     			    	
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
	            
	            // Check for visible elements on scroll
	     		// -------------------------------------------

	     		// Detect when user stops scroll
	     		$.fn.scrollEnd = function(callback, timeout) {          
					$(this).scroll(function(){
						var $this = $(this);
						if ($this.data('scrollTimeout')) {
							clearTimeout($this.data('scrollTimeout'));
						}
						$this.data('scrollTimeout', setTimeout(callback,timeout));
					});
				};

				// Update the dom
	            $(window).scrollEnd(function () {
	            	$.backlinkVisibleGlossaries();
		     		$.glossarizeVisibleParagraphs();
	     		}, 100);
	     		
	     		// Also implement on showing in pop-up footer:
	     		// Call prepare event on clicking a glossary link
	     		// ----------------------------------------------
	            $(document).on("prepare",'a.glossary-link', function(e) {
	               parseGlossary($($(this).attr("href")));
	           	});
	     		
	     		// Glossarize the currently visible elements
	     		// -------------------------------------------
	     		$(window).scroll();
	            
	        });
    	}
         
    }

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
		$(document).match_heights();
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

	// Trigger events on resize
	//------------------------------------------
	$(window).on("resize", function(){
		$(document).media_size();
		$(document).match_heights();
		$.popup_footer_height();
	});
	$(window).resize();

});
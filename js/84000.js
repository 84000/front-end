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
			    var $wait = $("<span>", {"id": "wait"}).text(text);
			    var $window = $(window);
			    $body.addClass("wait");
				$body.append($wait);
				$wait.css({"top": (($window.height() - $wait.outerHeight()) / 2) + "px", "left": (($window.width() - $wait.outerWidth()) / 2) + "px"});
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
				if($('#media_test .visible-'+sizes[i]).css("display").indexOf('none') == -1){
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

	// Scroll to an anchor
	// --------------------------------------
	(function ($) { 
		$.scroll_to_anchor = function (hash, delay, parent, offset) {
			if(!hash) hash = window.location.hash;
			if(!delay) delay = 0;
			if(!parent) parent = "html, body";
			if(!offset) offset = $(hash).offset();
			if(offset){
				$(parent).delay(delay).animate({ scrollTop: (offset.top - 30) }, "slow");
			}
		}
	}(jQuery));
	
	$(document).on("click",'a.scroll-to-anchor', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			$.scroll_to_anchor(this.hash);
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
	$(document).on("click", "a[href='#top']", function(e) {
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
	$('.thumbnail img').load(function () {
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

	//Make multiple elements the same size
	//------------------------------------------

	(function ($) { 
		$.fn.match_heights = function () {
			if($('html').hasClass('screen') && ($('html').hasClass('md') || $('html').hasClass('lg') || $('html').hasClass('sm'))){
				var heights = {};
				$("[data-match-height]").height('auto');
				$("[data-match-height]:visible").each(function(){
					var $this = $(this)
					var this_height = $this.height();
					var height_type = $this.data('match-height');
					if(!heights[height_type] || this_height > heights[height_type]){
						heights[height_type] = this_height;
					}
				});
				$.each(heights, function(i, val) {
					$("[data-match-height='" + i + "']").height(val + 'px');
				});
			}
		}
	}(jQuery));
	$(document).match_heights();

	// Get the location of this script
	// --------------------------------------
	var getScriptDomain = (function() {
	    var scriptSrc = $('script[src$="/84000.js"]').attr('src');
	    var srcChunks = scriptSrc.split('/');
	    return function() { return srcChunks[0] == "http:" ? srcChunks.slice(0,3).join('/') : "" ; };
	})();

	// Bookmarks
	// --------------------------------------
	if($('html').hasClass('screen')){
		$.getScript( getScriptDomain() + "/js/js-cookies.js" ).done(function( script, textStatus ) {
		
	    	(function ($) { 
	    		$.load_bookmarks = function () {
	    			// get bookmarks from cookies
	    			
	    			var page = window.location.pathname;
	    			var bookmarks = getBookmarks();
	    			
	    			var $list = $("#bookmarks");
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
	         			
	    			}
	    			else {
	    				var $link = $("<a>", {"href": "", "class": "disabled"}).text("Bookmarked texts or passages in the Reading Room will be listed here.");
	    				var $item = $("<li>");
	    				$item.append($link);
	    				$list.append($item);
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
	    	    var page = window.location.pathname;
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

	    	    //show bookmarks
	    		$('#fixed-footer').removeClass('in');
		        $('#fixed-footer .nav-tabs > li').removeClass('active');
		        $('#fixed-footer .tab-pane').removeClass('in active');
		        $('#fixed-footer .nav-tabs > li#bookmarks-opener').addClass('active');
		        $('#fixed-footer #bookmarks-tab').addClass('in active');
	    	    $("#fixed-footer").collapse("show");
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

	// Footer close button
	// --------------------------------------
	$(document).on("click",'#fixed-footer .close', function(e) {
	
        e.preventDefault();
        
		// Close the footer
        $('#fixed-footer').collapse('hide');
        
	});

	// Set footer max-height
	// --------------------------------------
	(function ($) { 
		$.popup_footer_height = function () {

			// Footer should not be more than 60% of the viewport
			$("#fixed-footer .tab-content").css({"max-height": ($(window).height() * 0.6) + "px"});

		}
	}(jQuery));
	$.popup_footer_height();

	// Pop-up content in the footer
	// -----------------------------------------

	$(document).on("click",'a.pop-up', function(e) {
	
        e.preventDefault();
        
        var $this = $(this);
        
        // Trigger pre-events
        $this.trigger("prepare");
        
        
        // Hide the footer
        $('#fixed-footer').removeClass('in');

        // Clear the tab
        $('#fixed-footer .nav-tabs > li').removeClass('active');
        $('#fixed-footer .tab-pane').removeClass('in active');

        // Copy content to the footer
        $('#fixed-footer #extra-tab .data-container').html($($this.attr("href")).clone());

        // Set the tab
        $('#fixed-footer #extra-tab').addClass('in active');

        // Show the footer
		$('#fixed-footer').collapse('show');
        
	});

	// Clone elements in the pop-up footer
	// Don't do this until the glossary is parsed
	// -----------------------------------------
	(function ($) { 
        $.cloneElements = function () {
            $("[data-clone]").each(function(){
				var $this = $(this);
				$this.html($($this.data("clone")).clone());
			});
        }
    }(jQuery));


	// Find instances of the glossary items in the text 
    // and link them to the glossary.
    // -----------------------------------------------------------

    if($('html').hasClass('screen')){

    	if($("article #glossary .glossary-item").length){

    		$.getScript( getScriptDomain() + "/js/replace-text.min.js" ).done(function( script, textStatus ) {
	            
	            var isWorking = false,
	                $allGlossaries = $("article #glossary .glossary-item"),
	                $allParagraphs = $("article #summary p, article #introduction p, article .chapter p, article #colophon p"),
	                
	                escapeRegExp = function(stringToGoIntoTheRegex) {
	                
	                    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	                    
	                },
	                glossarize = function($glossaries, $paragraphs, callback){
	                
	                   // Highlight instances of the glossary items in each
	                   // paragraph with a link to the glossary.
	                   // -------------------------------------------------
	                   
	                   $glossaries.each(function(glossaryIndex){
	                        var $glossary = $(this);
	                        var glossaryId = $glossary.attr("id");
	                        $glossary.find('.term').each(function(termIndex){
	                            var $term = $(this);
	                            var regEx = new RegExp("(\^|[\\s\\.,“])(" + escapeRegExp($term.text()) + ")(\$|[\\s\\.,;:”])","i");
	                            $paragraphs.each(function(paragraphIndex){
	                                var $paragraph = $(this);
	                                $paragraph.replaceText(regEx, "$1<a href='#" + glossaryId + "' class='glossary-link pop-up'>$2<\/a>$3");
	                                $paragraph.addClass("glossarized");
	                            });
	                        });
	                        $glossary.addClass("glossarized");
	                   });
	                   
	                   if(callback){
	                       callback(arguments[3], arguments[4]);
	                   }
	                   
	                },
	                glossaryBackLink = function($glossaries, callback){
	                
	                    // Create a list of links in the glossary to its 
	                    // occurences in the text
	                    // ----------------------------------------------------
	                    
	                    $glossaries.each(function(glossaryIndex){
	                        
	                        var $glossaryItem = $(this);
	                        if(!$glossaryItem.is('.backlinked')){
	                            
	                            // Create a list
	                            var $list = $("<ul>", {"class": "list-inline"});
	                            // Find references to this glossary in the text
	                            $allParagraphs.find("a[href='#" + $glossaryItem.attr("id") + "']").each(function(refIndex){
	                                var $glossaryRef = $(this);
	                                // Add an id so we can link to this reference
	                                $glossaryRef.attr("id","glossary-link-" + glossaryIndex + "-" + refIndex);
	                                // Create a link to it
	                                //var title = "In " + $glossaryRef.parents("section").find("h3").text();
	                                var $link = $("<a>", {"href": "#glossary-link-" + glossaryIndex + "-" + refIndex, "class": "scroll-to-anchor"}).text(refIndex + 1);
	                                // Create a list item
	                                var $item = $("<li>");
	                                // Append the link to the item
	                                $item.append($link);
	                                // Append the item to the list
	                                $list.append($item);
	                            });
	                            
	                            // Append the list to the glossary
	                            $glossaryItem.find(".occurences").append($list);
	                            $glossaryItem.addClass("backlinked");   
	                        }
	                            
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
	                        glossarize($allGlossaries, $paragraph, function(){ isWorking = false; });
	                    }
	                    
				    },
				    parseGlossary = function($glossary){
				        
	                    // Parse a particular glossary
	                    // --------------------------------------
	                    
	                    if(!isWorking){
	                        isWorking = true;
	                        glossarize($glossary, $allParagraphs, glossaryBackLink, $glossary, function(){ isWorking = false; });
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
	            
	            
	           (function ($) { 
	                $.glossarizeAll = function () {
	                    $.wait("Please wait a few seconds while the text is prepared...");
	                    setTimeout(function() {
	                        glossarize(
	                            $allGlossaries, 
	                            $allParagraphs,
	                            glossaryBackLink,
	                            $allGlossaries,
	                            function(){ 
	                            	$.cloneElements();
	                            	$.wait("", true);
	                            }
	                        );
	                    }, 500);
	                }
	            }(jQuery));
	            $.glossarizeAll();
	            
	        }).fail(function() {

	        	$.cloneElements();

	        });
    	}
    	else {

	    	$.cloneElements();

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

    // Re-filter on change
    // ----------------------------------------------------------------- 

    $(document).on("change",".filter-form input, .filter-form select", function(e){
	    $(this).parents("form").submit();
	});

    // Match heights on hidden content
	//------------------------------------------
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$(document).match_heights();
	});

	// Trigger events on resize
	//------------------------------------------

	$(window).resize(function(){
		$(document).media_size();
		$(document).match_heights();
		$.popup_footer_height();
	});
	$(window).resize();

});
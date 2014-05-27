ready = ->
	didScroll = false
	lastScrollTop = 0
	delta = 5
	$navbar = $('.navbar')
	navbarHeight = $navbar.outerHeight()
	
	hasScrolled = =>
		st = $(@).scrollTop()
		return false if Math.abs(lastScrollTop - st) <= delta
		if st > lastScrollTop and st > navbarHeight
			# Scrolling down
			$navbar.removeClass('nav-down').addClass('nav-up')
		else
			# Scrolling up
			if st + $(window).height() < $(document).height()
				$navbar.removeClass('nav-up').addClass('nav-down')
		lastScrollTop = st
	
	scrollCheck = =>
		if didScroll
			hasScrolled()
			didScroll = false
	
	# Start watching the scroll
	$(window).scroll ->
		didScroll = true
	setInterval scrollCheck, 255

$(document).on 'ready', ready

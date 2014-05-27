navbar-scrollup
===============
This is a CoffeeScript implementation of [Hide Header on Scroll Down, Show on Scroll Up](https://medium.com/design-startups/67bbaae9a78c).

It expects (Bootstrap 3) HTML like this:
```
<div class="navbar navbar-default navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">...</a>
		</div>
		<div class="navbar-collapse collapse">
			<ul class="nav navbar-nav navbar-right">
				...
			</ul>
		</div>
	</div>
</div>
```

And CSS like this:
```
.navbar {
	transition: top 0.2s ease-in-out;
	&.nav-up {
		top: -50px; /* 50px is height of navbar */
	}
}
```

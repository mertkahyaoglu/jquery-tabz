[Demo page][1]
==================

A jQuery tab plugin 

# Usage

```html
<div class="tabz">
		<ul>
			<li><a href="#tab1">Tab 1</a></li>
			<li><a href="#tab2">Tab 2</a></li>
			<li><a href="#tab3">Tab 3</a></li>
			<li><a href="#tab4">Tab 4</a></li>
		</ul>
		<div id='tab1'>Tab 1 content</div>
		<div id='tab2'>Tab 2 content</div>
		<div id='tab3'>Tab 3 content</div>
		<div id='tab4'>Tab 4 content</div>
	</div>

  <script type="text/javascript">
		$(".tabz").tabz({mouseevent:'hover'});
	</script>
```

# Options

Default options
```javascript
mouseevent:   'click', // mouse events 'click' or 'hover'
attribute:    'href',  // attribute that contains content div's id or class
active:       0        // active tab index
```


[1]: http://mertkahyaoglu.github.io/jquery-tabz/

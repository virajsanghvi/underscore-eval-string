# Underscore evalString mixin 
  
This [underscore](http://documentcloud.github.com/underscore/) mixin allows you to evaluate a string to a JavaScript object given a context. 

# Setup

1. Include [underscore.js](http://documentcloud.github.com/underscore/underscore-min.js) 
1. Include [underscore-eval-string.js](https://github.com/virajsanghvi/underscore-eval-string)

# Usage
Let's say you have an object:
<code>
	var namespace = {
		child: {
			grandChild: {
				...
			}
		}
	};
</code>

But, for whatever reason, you don't have access to the object, or want to serialize the path to the object. If you have a string representation of the path, you can do the following:

<code>
    var grandChild = _.evalString('namespace.child.grandChild');
</code>

or

<code>
    var grandChild = _.evalString('child.grandChild', namespace); // if you had a reference to namespace
</code>


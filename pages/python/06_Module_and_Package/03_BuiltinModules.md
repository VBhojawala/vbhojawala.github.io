---
title: Builtin Modules
layout: tutorial
tags: []
sidebar: python_sidebar
permalink: python_builtin_modules.html
folder: python
prev_section: 
prev_section_title: 
prev: python_logging.html
prev_title: Logging
next: 
next_title: 
next_section: 
next_section_title: 
summary: Builtin modules math, random and statistics.
---


## math

<p> math module provides mathematical functions. </p>

### Constants 


#### nan

<p> Not a Number. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print(math.nan)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
nan
</pre></div>

<hr/>



#### inf

<p> Positive infinity. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print(math.inf)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
inf
</pre></div>

<hr/>



#### pi

<p> pi constant value. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print(math.pi)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
3.141592653589793
</pre></div>

<hr/>



#### e

<p> Constant value of e. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print(math.e)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2.718281828459045
</pre></div>

<hr/>




### Functions

#### floor(x)

<p> Return floor value of x. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math

f = 29.8
print('floor(29.8) :', math.floor(f))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
floor(29.8) : 29
</pre></div>

<hr/>




#### ceil(x)

<p> Returns ceiling value of x. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math

f = 29.4
print('Ceiling(29.4) :', math.ceil(f))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Ceiling(29.4) : 30
</pre></div>

<hr/>



#### factorial(x)

<p> Returns factorial of x. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print("Factorial of 5 :", math.factorial(5))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Factorial of 5 : 120
</pre></div>

<hr/>




#### sqrt(x)

<p> Returns square root of x. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print("Square root of 25 :", math.sqrt(25))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Square root of 25 : 5.0
</pre></div>

<hr/>




#### fabs(x)

<p> Returns an absolute value of float x. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print("Absolute value of Float(-78.15) :", math.fabs(-78.15))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Absolute value of Float(-78.15) : 78.15
</pre></div>

<hr/>


#### copysign(x,y)

<p> Returns float with absolute value of x and copies sign of y. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math

print("copysign(-155.8, 77) :", math.copysign(-155.8, 77))
print("copysign(15.4, -77)  :", math.copysign(15.4, -77))
print("copysign(55, 155)  :", math.copysign(55, 155))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
copysign(-155.8, 77) : 155.8
copysign(15.4, -77)  : -15.4
copysign(55, 155)  : 55.0
</pre></div>

<hr/>




#### fmod(x, y)

<p> Return the result of modulus operation on float value with precision. </p>

{% include callout.html content="**Note** : Use x % y for integer and fmod(x, y) for float. " type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print("fmod(15.00, 4.78) :", math.fmod(15.00, 4.78))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
fmod(15.00, 4.78) : 0.6599999999999993
</pre></div>

<hr/>




#### fsum(iterable)

<p> Calculate and returns sum of float iterable preserving the precision. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math

fIter = [12.845, 45.1244, 15.55, 45.56]
print("fsum() :", math.fsum(fIter))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
fsum() : 119.0794
</pre></div>

<hr/>


#### gcd(a, b)

<p> Returns greatest common divisor of integer a and b. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print("gcd(1521, 1176) :", math.gcd(1521, 1176))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
gcd(1521, 1176) : 3
</pre></div>

<hr/>



#### isinf(x)

<p> Returns True if x is positive or negative infinity. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math

x = math.inf
print("isinf(x) :", math.isinf(x))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
isinf(x) : True
</pre></div>

<hr/>



#### isfinite(x)

<p> Returns True if x is not  a positive or negative infinity. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
x = 99.56
print("isfinite(x) :", math.isfinite(x))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
isfinite(x) : True
</pre></div>

<hr/>



#### isnan(x)

<p> Returns True if x is Not a number. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
x = math.nan
print("isnan(x) :", math.isnan(x))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
isnan(x) : True
</pre></div>

<hr/>


#### frexp(x)

<p> Returns (mantissa, exponent) such that x = mentissa * (2 ** e) from a float value. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print("frexp(12.454) :", math.frexp(12.454))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
frexp(12.454) : (0.778375, 4)
</pre></div>

<hr/>



#### ldexp(x, i)

<p> Returns x * (2**i). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print("ldexp(5, 2) :", math.ldexp(5, 2))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
ldexp(5, 2) : 20.0
</pre></div>

<hr/>


#### pow(x, y)

<p> Same as x ** y but for float values. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math
print("pow(2.5, 5.6) :", math.pow(2.5, 5.6))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
pow(2.5, 5.6) : 169.22481522342434
</pre></div>

<hr/>




#### trunc(x)

<p> Returns integer value from float truncating value after '.' . </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import math

print("trunc(12.45) :", math.trunc(12.45))
print("trunc(12.45) :", math.trunc(12.95))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
trunc(12.45) : 12
trunc(12.45) : 12
</pre></div>

<hr/>


#### More

<p> math module has also functions for following : </p>

math functions        | link
:--- | :---
log                    | [Link](http://bit.ly/2WnX3dL){:target="_blank"}
trigonometric          | [Link](http://bit.ly/2WqPUcE){:target="_blank"}
angular conversion     | [Link](http://bit.ly/31nJIG0){:target="_blank"}
hyperbolic             | [Link](http://bit.ly/2MRBXoT){:target="_blank"}
special functions      | [Link](http://bit.ly/2K7BA77){:target="_blank"}


<hr/>


{% include links.html %}
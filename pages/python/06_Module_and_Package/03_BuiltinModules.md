---
title: Builtin Modules
layout: tutorial
tags: [nan, inf, pi, e, floor(), ceil(), factorial(), sqrt(), fabs(), copysign(), fmod(), fsum(), gcd(), isinf(), isfinite(), isnan(), frexp(), ldexp(), pow(), trunc(), random, randint(), randrange(), choice(), shuffle(), sample(), choices(), random(), uniform(), seed(), getstate(), setstate(), getrandbits(), Random(), SystemRandom(), statistics, mean(), median_low(), median_high(), mode(), stdev()]
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


## math module

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
print("trunc(12.95) :", math.trunc(12.95))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
trunc(12.45) : 12
trunc(12.95) : 12
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




## random module

<p> module implements pseudo-random number generators. </p>


### functions for Integer

#### randint(a, b)

<p> Returns random integer between a and b. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
print("randint(1, 100) :", random.randint(1, 100))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
randint(1, 100) : 26
</pre></div>

<hr/>




#### randrange(stop)

<p> Returns random int in the range from 0 up to stop. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
print("randrange(50) :", random.randrange(50))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
randrange(50) : 28
</pre></div>

<hr/>




#### randrange(start, stop[, step])

<p> Returns random integer between start and stop with optional argument step. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
print("randrange(10, 20) :", random.randrange(10, 20))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
randrange(10, 20) : 19
</pre></div>

<hr/>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
print("randrange(5, 500, 5) :", random.randrange(5, 500, 5))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
randrange(5, 500, 5) : 360
</pre></div>


{% include callout.html content="**Note** : randint(a, b) is an alias for randrange (a, b+1). which means internally randint() calls randrange(). " type="primary" %} 

<hr/>



### Functions for sequence

#### choice(seq)

<p> Returns random int in the range from 0 up to stop. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
colors = ['Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow']

rc = random.choice(colors)
print("choice(colors) :", rc)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
choice(colors) : White
</pre></div>

<hr/>






#### shuffle(x[, random])

<p>  Shuffles sequence x in place. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> random : </strong> Takes 0 argument random function which return float in range [0.0, 1.0]. By default it is set to random.random(). </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
colors = ['Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow']

print("Before :", colors)
random.shuffle(colors)
print("After :", colors)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : ['Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow']
After : ['White', 'Blue', 'Pink', 'Green', 'Red', 'Yellow']
</pre></div>



<br/>


<div id="tut-content"> 
    <ul>
        <li> shuffle() does not work on immutable data types, because in performs inplace shuffle. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
colors = ('Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow')

print("Before :", colors)
random.shuffle(colors)
print(colors)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : ('Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow')
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "&lt;input>", line 5, in &lt;module>
  File "/usr/local/lib/python3.8/random.py", line 307, in shuffle
    x[i], x[j] = x[j], x[i]
TypeError: 'tuple' object does not support item assignment</pre></div>

<hr/>






#### sample(seq, k)

<p> Returns list of  k 'unique' random elements from the sequence. Original sequence remains unmodified. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random

colors = ['Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow']
twoclr = random.sample(colors, 2)
print("sample(colors, 2) :", twoclr)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
sample(colors, 2) : ['Blue', 'Red']
</pre></div>



<br/>


<div id="tut-content"> 
    <ul>
        <li> This works on immutable because it returns list and don't modify the original sequence. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random

colors = ('Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow')
twoclr = random.sample(colors, 2)
print("sample(colors, 2) :", twoclr)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
sample(colors, 2) : ['Red', 'Yellow']
</pre></div>


<br/>



<div id="tut-content"> 
    <ul>
        <li> Shuffling the immutable using sample(): </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random

colors = ('Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow')
twoclr = random.sample(colors, len(colors))
print(twoclr)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Yellow', 'Red', 'Green', 'White', 'Blue', 'Pink']
</pre></div>


<hr/>





#### choices (population, weights=None, *, cum_weights=None, k=1)

<p> Returns list containing k random elements from population with replacement(Element might repeat). </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> population : </strong> Iterable of items from which choices to be made.  </li>
        <li> <strong> weights : </strong> Defines weight for each items for getting chosen by random function. </li>
        <li> <strong> cum_weights : </strong> accepts cumulative weights. Internally relative weights are converted to cumulative weights. </li>
        <li> <strong> k :</strong> Number of elements to be chosen from given population. </li>
    </ul> 
</div>

<br/>

<div id="tut-content"> 
    <ul>
        <li> If 'weights' are not defined each item has equal weight for selection. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random

colors = ('Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow')
weights = (25, 50, 10, 15, 15, 10)
threeclrs = random.choices(colors, weights=weights, k=3)
print("choices(colors, weights=weights, k=3) :", threeclrs)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
choices(colors, k=3) : ['Pink', 'Green', 'Green']
</pre></div>


<br/>

<div id="tut-content"> 
    <ul>
        <li> Passing relative weights </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random

colors = ('Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow')
weights = (5, 10, 15, 10, 5, 12)
threeclrs = random.choices(colors, weights=weights, k=3)
print('choices(colors, weights=weights, k=3) :', threeclrs)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
choices(colors, weights=weights, k=3) : ['Pink', 'Red', 'Yellow']
</pre></div>



<br/>


<div id="tut-content"> 
    <ul>
        <li> Passing cumulative weights  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random

colors = ('Red', 'Green', 'Blue', 'Pink', 'White', 'Yellow')
cWeights = (5, 15, 30, 40, 45, 55)
threeclrs = random.choices(colors, cum_weights=cWeights, k=3)
print('choices(colors, cum_weights=cWeights, k=3) :', threeclrs)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
choices(colors, cum_weights=cWeights, k=3) : ['Blue', 'Green', 'Blue']
</pre></div>




<hr/>




### Functions for real values

#### random()

<p> Returns random float between 0.0 and 1.0 </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
print('random() :', random.random())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
random() : 0.16482303440503665
</pre></div>

<hr/>





#### uniform(a, b)

<p> Returns random float n such that (a <= n <= b). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
print('uniform(1.0, 2.0) :', random.uniform(1.0, 2.0))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
uniform(1.0, 2.0) : 1.9590486556572975
</pre></div>

<hr/>


### Managing random

#### seed(a=None, version=2)

<p> Initialises random number generator. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> a : </strong> Default value 2 converts bytes, str and bytearray to int taking all of its bits in consideration. </li>
        <li> <strong> version : </strong> Value 1 algorithm for str and bytes generates narrower range of seeds. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
import os

random.seed(a=os.urandom(64))



{% endhighlight %}
</div>

<hr/>



#### getstate()

<p> Returns object which captures current internal state of the generator. Returned object can be used to restore state. </p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
curState = random.getstate()

{% endhighlight %}
</div>

<hr/>



#### getstate()

<p> Restore the state which is acquired earlier by getstate(). </p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
curState = random.getstate()
random.setstate(curState)

{% endhighlight %}
</div>

<hr/>




#### getrandbits(k)

<p> Returns python integer with k random bits. It enables randrange() to handle arbitrarily large ranges. </p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
print('getrandbits(15) :', random.getrandbits(15))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
getrandbits(15) : 31357
</pre></div>

<hr/>



### Random number generator


#### Random([seed])

<p> Default pseudo-random number generator used by the random module. </p>


<hr/>



#### SystemRandom([seed])

<p>  Uses the os.urandom() function for generating random numbers from sources provided by the operating system. suited for cryptographic use. </p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
r = random.SystemRandom()

print('random() :', r.random())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
random() : 0.9067554473557309
</pre></div>

<hr/>




## statistics module


### mean(sequence)

<p> Samples arithmetic mean of sequence. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import statistics
from fractions import Fraction as F
from decimal import Decimal as D

intSeq = [1, 23, 12, 41, 64, 45, 54, 18, 78, 87, 65, 56, 19]
frcSeq = [F(3, 8), F(1, 4), F(8, 7), F(6, 17)]
dclSeq = [D('2.6'), D('6.5'), D('7.6'), D('3.8'), D('5.9')]

print('mean(intSeq) :', statistics.mean(intSeq))
print('mean(frcSeq) :', statistics.mean(frcSeq))
print('mean(dclSeq) :', statistics.mean(dclSeq))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
mean(intSeq) : 43.30769230769231
mean(frcSeq) : 2019/3808
mean(dclSeq) : 5.28
</pre></div>

<hr/>



### median_low(data)

<p> Returns the low median of numeric data. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import statistics

intSeq = [1, 23, 12, 41, 64, 45, 54, 18, 78, 87, 65, 56, 19]
print('median_low(intSeq) :', statistics.median_low(intSeq))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
median_low(intSeq) : 45
</pre></div>

<hr/>



### median_high(data)

<p> Return the high median of data. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import statistics

intSeq = [1, 23, 12, 41, 64, 45, 54, 18, 78, 87, 65, 56, 19]
print('median_high(intSeq) :', statistics.median_high(intSeq))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
median_high(intSeq) : 455
</pre></div>

<hr/>



### mode(data)

<p> Return the single most common data point from discrete or nominal data. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import statistics

dctSeq = [2.8, 2.5, 2.7, 2.5, 2.6, 2.7, 2.5, 2.0, 1.5, 2.5]
print('mode(dctSeq) :', statistics.mode(dctSeq))

strSeq = ['Red', 'Blue', 'Green', 'Red', 'Blue', 'Green', 'Blue', 'Red', 'Blue']
print('mode(strSeq) :', statistics.mode(strSeq))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
mode(dctSeq) : 2.5
mode(strSeq) : Blue
</pre></div>

<hr/>





### stdev(data, xbar=None)

<p> Returns standard deviation. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import statistics

fseq = [2.8, 2.5, 2.7, 2.5, 2.6, 2.7, 2.5, 2.0, 1.5, 2.5]
print('stdev(fseq, xbar=0.25) :', statistics.stdev(fseq, xbar=0.25))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
stdev(fseq, xbar=0.25) : 0.3917198545446026
</pre></div>

<hr/>


{% include links.html %}
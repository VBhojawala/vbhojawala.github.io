---
title: Decimal and Fraction
layout: tutorial
tags: [Decimal, round(), Fraction, float, infinity]
sidebar: python_sidebar
permalink: python_decimal_fraction.html
folder: python
prev: python_variables.html
prev_title: Variables
next: 
next_title:
next_section: python_control_flow.html
next_section_title: Control Flow
summary: Decimal and Fraction data type class and its methods.
---

## Decimal
<p> A floating point that provides precision in arithmetic operation as we (humans) calculate. It's useful in financial application where calculation requires precision.</p>


### Problem with float arithmetic

<div id="tut-content"> 
    <ul>
        <li> When performing arithmetic operation on float value it approximates results, rather than producing exact result.  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(0.1 + 0.2 - 0.3)   

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
5.551115123125783e-17
</pre></div>


<div id="tut-content"> 
    <ul>
        <li> As we can see in above example result should be 0.0 as we (human) calculates, but end result is close to zero but not exactly zero.  </li>
    </ul> 
</div>

<hr/>









<div id="tut-content"> 
    <ul>
        <li> When we use comparision with other float values approximate result of arithmetic operation creates problem. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# comparision in floating point
print((0.2 + 0.1 - 0.1) == 0.2) 

print((0.2 + 0.1 - 0.1)) 


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
False
0.20000000000000004
</pre></div>

<hr/>






### round(number, ndigit) : Solution for float's arithmetic approximation. 


<div id="tut-content"> 
    <ul>
        <li> <strong>round(number, ndigit) : </strong> rounds given floating point number up to given precision as 'ndigit'.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

result = 0.1 + 0.2 - 0.3
print(round(result, 2))

print(round((0.2 + 0.1 - 0.1), 2) == 0.2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0.0
True
</pre></div>

<hr/>


###  Decimal : floating point with fixed precision.

<p> Constructor :  <strong>Decimal('value', context=None)  </strong> </p>

<div id="tut-content"> 
    <ul>
        <li><strong> value : </strong> Decimal uses string to initialize Decimal object because when converting numeric value to binary it looses it's accuracy. </li>
        <li><strong> context : </strong> Custom context for customizing operation parameters.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import Decimal

d1 = Decimal('0.2')
d2 = Decimal('0.1')

result = d1 + d2 - d2
print(result)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0.2
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> If we pass numeric value to Decimal constructor it will result in accuracy loss. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

d1 = Decimal(0.2)
print(d1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0.200000000000000011102230246251565404236316680908203125
</pre></div>

<hr/>








### Precision in Decimal 

<div id="tut-content"> 
    <ul>
        <li> Default precision for Decimal is  28. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

p1 = Decimal('12.45')
p2 = Decimal('45.12')


print(p1 / p2)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0.2759308510638297872340425532
</pre></div>

<hr/>









### Custom precision for Decimal

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import getcontext
getcontext().prec = 6

p1 = Decimal('12.45')
p2 = Decimal('45.12')

print(p1 / p2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0.275931
</pre></div>

<hr/>




### Infinite value for Decimal and float
#### Decimal Infinity
<div id="tut-content"> 
    <ul>
        <li> <strong>'+Infinity' : </strong> Positive Infinity </li>
        <li> <strong>'-Infinity' :  </strong> Negative Infinity</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

d3 = Decimal('+Infinity')
print(d3)
d3 = Decimal('-Infinity')
print(d3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Infinity
-Infinity
</pre></div>

<hr/>




#### float Infinity

<div id="tut-content"> 
    <ul>
        <li> <strong>'inf' : </strong> Positive Infinity </li>
        <li> <strong>'-inf' :  </strong> Negative Infinity</li>
        <li> <strong>'nan' :  </strong> Not a Number</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# infinity
f1 = float('inf')
print(f1)

# negative infinity
f2 = float('-inf')
print(f2)

# Not a Number
f3 = float('nan')
print(f3)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
inf
-inf
nan
</pre></div>

<hr/>

{% include links.html %}
---
title: Python Decimal and Fraction
layout: tutorial
tags: [python, Decimal, round(), Fraction, float, infinity, signals, context, context_manager]
sidebar: python_sidebar
permalink: python_decimal_fraction.html
folder: python
prev: 
prev_title: 
prev_section: python_getting_started.html
prev_section_title: Getting Started
next: python_string.html
next_title: String
summary: Python Decimal and Fraction data type class and its methods.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KU14V6oUWvU" allowfullscreen></iframe>
</div>

<hr/>

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
        <li> Decimal Objects are immutable. </li>
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







### Custom precision for Decimal

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import getcontext, Decimal
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





###  Creating custom context

<p id="tut-cons"> Context Constructor :  Context(prec=None, rounding=None, Emin=None, Emax=None, capitals=None, clamp=None, flags=None, traps=None) </p>


<div id="tut-content"> 
    <ul>
        <li> <strong>prec : </strong>Required digits of precision. </li>
        <li> <strong>rounding : </strong>Can be one of ROUND_CEILING, ROUND_DOWN, ROUND_FLOOR, ROUND_HALF_DOWN, ROUND_HALF_EVEN, ROUND_HALF_UP, ROUND_UP, and ROUND_05UP </li>
        <li> <strong>capitals : </strong> If set to 1 print 'E' and if set to 0 prints 'e' in decimal value. </li>
        <li> <strong>clamp : </strong> If set to 1 strictly restricts exponent e of a Decimal to range ' Emin - prec + 1 <= e <= Emax - prec + 1 '. By default it is set to 0 weaker condition holds.Title </li>
        <li> <strong>flags and traps : </strong> lists any signals to be set. Generally, new contexts should only set traps and leave the flags clear. </li>
        <li> <strong>Emin and Emax : </strong> integers specifies limits allowable for exponents. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import MAX_EMAX, MIN_EMIN

# Return value depends on 32-bit and 64-bit cpu.
print('Emin', MIN_EMIN)
print('Emax', MAX_EMAX)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Emin -999999999999999999
Emax 999999999999999999
</pre></div>

<hr/>




###  Signals 
<p> Signals  are Group of exceptional conditions occurred while performing operations. Based on requirement of an application it can be ignored or raise exception using traps.</p>

<p> Following are signals for Decimal : </p>
<div id="tut-content"> 
    <ul>
        <li> <strong> Clamped : </strong>Raised when an exponent falls outside the context’s Emin and Emax limits. </li>
        <li> <strong> DivisionByZero :  </strong>Signals the division of a non-infinite number by zero. </li>
        <li> <strong> Inexact : </strong>Indicates that rounding occurred and the result is not exact. </li>
        <li> <strong> InvalidOperation : </strong>An invalid operation was performed such as  'Infinity - Infinity', '0 * Infinity', 'Infinity / Infinity' etc. </li>
        <li> <strong> Overflow : </strong>Numeric overflow, indicates the exponent is larger than Emax after rounding has occurred. </li>
        <li> <strong> Rounded : </strong> Rounding occurred though possibly no information was lost. </li>
        <li> <strong>Subnormal : </strong> Exponent was lower than Emin prior to rounding. </li>
        <li> <strong>Underflow : </strong> Numerical underflow with result rounded to zero. </li>
        <li> <strong>FloatOperation : </strong>Raises exception when initializing Decimal with float or comparing with float </li>
    </ul> 
</div>


<hr/>

### Builtin context

<div id="tut-content"> 
    <ol>    
        <li> <strong> BasicContext : </strong> Standard context defined by the General Decimal Arithmetic Specification which traps Clamped, InvalidOperation, DivisionByZero, Overflow, Underflow. Rounding is set to ROUND_HALF_UP. It is used for debugging.</li>
        <li> <strong> ExtendedContext : </strong> Standard context defined by the General Decimal Arithmetic Specification. prec is 9 and rounding is ROUND_HALF_EVEN. All flags are cleared and no trap is set. Used in application which allows result value of NaN or Infinity instead of raising exceptions.  </li>
        <li> <strong> DefaultContext : </strong> Is the context which is used when creating new context object. It can be assigned custom values which becomes default values when new context object is created. </li>
    </ol>
</div>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import BasicContext, ExtendedContext

print(BasicContext)

print(ExtendedContext)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Context(prec=9, rounding=ROUND_HALF_UP, Emin=-999999, Emax=999999, capitals=1, clamp=0, flags=[], traps=[Clamped, InvalidOperation, DivisionByZero, Overflow, Underflow])

Context(prec=9, rounding=ROUND_HALF_EVEN, Emin=-999999, Emax=999999, capitals=1, clamp=0, flags=[], traps=[])
</pre></div>

<hr/>


### get and set context

<div id="tut-content"> 
    <ul>
        <li> <strong> getcontext() : </strong>Returns current thread's context. </li>
        <li> <strong> setcontext(ctx) : </strong>Sets give context 'ctx' as current thread's context. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import getcontext, setcontext, ExtendedContext

print(getcontext())

setcontext(ExtendedContext)

print()
print(getcontext())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Context(prec=9, rounding=ROUND_HALF_UP, Emin=-999999, Emax=999999, capitals=1, clamp=0, flags=[], traps=[Clamped, InvalidOperation, DivisionByZero, Overflow, Underflow])
Context(prec=9, rounding=ROUND_HALF_EVEN, Emin=-999999, Emax=999999, capitals=1, clamp=0, flags=[], traps=[])
</pre></div>

<hr/>





###  Adding traps to  context

<div id="tut-content"> 
    <ul>
        <li> <strong>ctx.traps[signal] = True / False :</strong> Value True makes signal to be trapped and value False clears signal from trap signal's list. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import Decimal, FloatOperation, getcontext

ctx = getcontext()
print(ctx)

ctx.traps[FloatOperation] = True

print()
print(ctx)

d1 = Decimal(2.75)
print(d1 < 12.05)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Context(prec=9, rounding=ROUND_HALF_EVEN, Emin=-999999, Emax=999999, capitals=1, clamp=0, flags=[], traps=[])

Context(prec=9, rounding=ROUND_HALF_EVEN, Emin=-999999, Emax=999999, capitals=1, clamp=0, flags=[], traps=[FloatOperation])
</pre>


<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 8, in <&zwj;module&zwj;>
decimal.FloatOperation: [<&zwj;class 'decimal.FloatOperation'&zwj;>]</pre>



</div>

<hr/>


### Context Manager for decimal context

<div id="tut-content"> 
    <ul>
        <li> <strong>localcontext() : </strong>Returns copy of context on entry of with statement and restore the previous context when exiting the with-statement. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import Decimal, localcontext

with localcontext() as ctx:
    ctx.prec = 12
    print(Decimal('21.99') / Decimal('3.25'))

print(Decimal('21.99') / Decimal('3.25'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
6.76615384615
6.76615385
</pre></div>

<hr/>




### Mathematical functions

<div id="tut-content"> 
    <ul>
        <li> <strong>sqrt() : </strong>Returns square root of decimal number. </li>
        <li> <strong>exp() : </strong>Return e**  of decimal number.</li>
        <li> <strong>ln() : </strong>Return natural (base e) logarithm of decimal number.</li>
        <li> <strong>log10() : </strong>Return base 10 logarithm of decimal number. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import Decimal

print('Square root of 4 :', Decimal('4').sqrt())

print('e^1 :', Decimal('1').exp())

print('ln(10) :', Decimal('10').ln())

print('log(10) :', Decimal('10').log10())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Square root of 4 : 2
e^1 : 2.71828183
ln(10) : 2.30258509
log(10) : 1
</pre></div>

<hr/>








## Fraction

<p> Representing fraction with accuracy.</p>


### constructors : returns object of Fraction class

<div id="tut-content"> 
    <ul>
        <li> <strong> Fraction(numerator=0, denominator=1) : </strong> Constructs fraction object from given numerator and denominator.  </li>
        <li> <strong> Fraction(float) : </strong>Constructs fraction object from given float value. </li>
        <li> <strong> Fraction(decimal) : </strong>Constructs fraction object from given Decimal value. </li>
        <li> <strong> Fraction(string) :</strong>Constructs fraction object from given string value. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from fractions import Fraction
from decimal import Decimal

# Fraction(numerator=0, denominator=1)
oneByTwo = Fraction(1, 2)
print(oneByTwo)
print(type(oneByTwo))

# Fraction(float) :
oneByTwo = Fraction(0.5)
print(oneByTwo)

# Fraction(decimal):
oneByTwo = Fraction(Decimal('0.5'))
print(oneByTwo)

# Fraction(string) 
oneByTwo = Fraction('0.5')
print(oneByTwo)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
1/2
1/2
1/2
1/2
</pre></div>

<hr/>




### Operations on fraction



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from fractions import Fraction

f1 = Fraction(10, 9)
f2 = Fraction(7, 3)

print(f1 + f2)
print(f1 - f2)

print(f1 / f2)
print(f1 * f2)

print(f1 % f2)
print(f1 ** f2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
31/9
-11/9
10/21
70/27
10/9
1.278696504507761
</pre></div>

<hr/>




### Attributes

<div id="tut-content"> 
    <ul>
        <li> <strong>numerator : </strong>Returns numerator of the Fraction in lowest term. </li>
        <li> <strong>denominator : </strong>Returns denominator of the Fraction in lowest term. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from fractions import Fraction

f1 = Fraction('3.1415926535897932')

print('Numerator :', f1.numerator)
print('Denominator :', f1.denominator)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Numerator : 7853981633974483
Denominator : 2500000000000000
</pre></div>

<hr/>





### Methods 

<div id="tut-content"> 
    <ul>
        <li> <strong>limit_denominator(max_denominator=1000000) : </strong>Limits the denominator by given value. Useful for finding rational approximations to a given floating-point number. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from fractions import Fraction

f1 = Fraction('3.1415926535897932')

print(f1)

print(f1.limit_denominator(1000))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
7853981633974483/2500000000000000
355/113
</pre></div>

<hr/>




{% include links.html %}
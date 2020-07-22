---
title: Python Dunder / Magic / Special Methods
layout: tutorial
last_modified_at: 2020-07-19
tags: [python, Object_Oriented_Programming, Dunder_method, Special_method, Magic_method, __str__(), __repr__(), __format__(), repr_vs_str, Arithmetic_operators_dunder, __add__(), __radd__(), __iadd__(), __sub__(), __mul__(), __pow__(), __matmul__(), __truediv__(), __floordiv__(), __mod__(), Bitwise_operators_dunder, __and__(), __or__(), __xor__(), __lshift__(), __rshift__(), Comparison_operators_dunder, __eq__(), __ne__(), __lt__(), __gt__(), __ge__(), __le__(), total_ordering, sort(), sorting_with_comparator_function, Value_Conversion_dunder, __int__(), __float__(), __bool__(), __round__(), __trunc__(), __floor__(), __ceil__(), Unary_operators_dunder, __pos__(), __neg__(), __invert__(), __abs__(), __del__(), __bytes__(), __hash__(), id_vs_hash, equal_and_hash_contracts, sys.hash_info, __call__(), __len__(), __getitem__(), __setitem__(), __delitem__(), __missing__(), Shallow_copy_vs_Deep_Copy, Shallow_copy_vs_Deep_Copy_example, __copy__(), __deepcopy__(), Monkey_Patching]
sidebar: python_sidebar
permalink: python_dunder_magic_special_methods.html
folder: python
prev_section:
prev_section_title: 
prev:  python_slots.html
prev_title: Slots
next: python_dataclasses.html
next_title: Dataclasses
next_section: 
next_section_title: 
summary: Python Dunders / Magic / Special Methods for String representation, Arithmetic operators dunder, Bitwise operators, Comparison operators, value conversion, unary operator, hashing, callable object, collection of object, copy. Monkey patching dunder methods.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/b0myYHSn2eY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> <hr/>

## String representation dunders methods

### \__str__(self)  -> str
<p> Nicely printable('informal') string representation used by print(), str(), format(). </p>
<hr/>

### \__repr__(self) -> str
<p> 'Official' string representation which looks like valid python expression to recreate Object. __repr__(self) is used as fall back when no __str__(self) method is defined. </p>
<hr/>

### \__format__(self, format_spec: str) -> str
<p> Represents object into user defined format. with __format__ multiple formats can be supported in which object can be represented.Based on pattern defined 'format_spec' __format__ returns formatted string. </p>
<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Objet of Class without any Dunder methods for string representation  </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y


p1 = Point(12, 5)
print('p1 :', p1)
print('repr(p1) :', repr(p1))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1 : <classes.DunderStrRepr.Point object at 0x7fe5a844fe20>
repr(p1) : <classes.DunderStrRepr.Point object at 0x7fe5a844fe20>
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Defining str, repr and format dunder methods </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'

    def __str__(self):
        return f'Point(x: {self.x}, y: {self.y})'

    def __format__(self, format_spec: str) -> str:
        result = format_spec.replace('#f', f'Point[ x : {self.x}, y : {self.y} ]')
        return result


p1 = Point(12, 5)

print('p1 :', p1)
print('Repr :', repr(p1))
print('p1 : {0:#f}'.format(p1))

print(f'\nstr  : {p1!s}')
print(f'Repr : {p1!r}')
print(f'format : {p1:#f}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1 : Point(x: 12, y: 5)
Repr : Point(12, 5)
p1 : Point[ x : 12, y : 5 ]

str  : Point(x: 12, y: 5)
Repr : Point(12, 5)
format : Point[ x : 12, y : 5 ]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> __repr__(self) is used as fall back when no __str__(self) method is defined.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class PointR:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'


print('str :', p1)
print('repr :', repr(p1))

print(f'\nstr  : {p1!s}')
print(f'Repr : {p1!r}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
str : Point(25, 45)
repr : Point(25, 45)

str  : Point(25, 45)
Repr : Point(25, 45)

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Defining __str__() dunder only </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class PointS:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __str__(self):
        return f'Point(x: {self.x}, y: {self.y})'


p1 = PointS(25, 4)

print(f'str  : {p1!s}')
print(f'Repr : {p1!r}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
str  : Point(x: 25, y: 4)
Repr : <classes.DunderStrRepr.PointS object at 0x7fd6f20eff10>
</pre></div>

<hr/>


## Arithmetic operators dunder methods

<div style="overflow-x:auto;" markdown="block">

{:.table-responsive}

 Method               |   Operator  |    Operation     |     meaning
 :--- | :---: | :--- | :---
\__add__(self, other)       |      +      | self + other     |     normal
\__radd__(self, other)      |      +      | other + self     |     reverse
\__iadd__(self, other)      |      +      | self += other    |     in-place

</div>

{% include callout.html content="**Note** : In above dunder method argument 'other' is object of class which may or may not implement __add__ method when self object is invoked in operation defined above. <br/>Each  arithmetic, bitwise operator dunder method have [r]operator and [i]operator methods." type="primary" %} 


<div style="overflow-x:auto;" markdown="block">

{:.table-responsive}

method  |  operator   |   operation
:--- | :---: | :--- 
\__sub__(self, other)                |      -      | self - other
\__mul__(self, other)                |      *      | self * other
\__pow__(self, power, modulo=None)   |      **     | self ** power or pow(self, power)
\__matmul__(self, other)             |      @      | self @ other
\__truediv__(self, other)            |      /      | self / other
\__floordiv__(self, other)           |      //     | self // other
\__mod__(self, other)                |      %      | self % other

</div>

<hr/>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Point(self.x - other.x, self.y - other.y)

    def __mul__(self, other):
        return Point(self.x * other.x, self.y * other.y)

    def __truediv__(self, other):
        return Point(self.x / other.x, self.y / other.y)



p1 = Point(5.75, 6.45)
p2 = Point(1.25, 2.50)

print('p1      :', p1)
print('p2      :', p2)
print('p1 + p2 :', p1 + p2)
print('p1 - p2 :', p1 - p2)
print('p1 * p2 :', p1 * p2)
print('p1 / p2 :', p1 / p2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1      : Point(5.75, 6.45)
o1      : Point2(1.25, 2.5)
o1 + p1 : Point(7.0, 8.95)

Inplace Addition :

p1 before : Point(5.75, 6.45)
p1 after : Point(7.0, 8.95)
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Inplace and reverse dunder method </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'
    
    def __iadd__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __radd__(self, other):
        return Point(self.x + other.x, self.y + other.y)


class Point2:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __str__(self):
        return f'Point2({self.x}, {self.y})'


p1 = Point(5.75, 6.45)
o1 = Point2(1.25, 2.50)

print('p1      :', p1)
print('o1      :', o1)
print('o1 + p1 :', o1 + p1)

print('\nInplace Addition :')
print('\np1 before :', p1)
p1 += o1
print('p1 after :', p1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1      : Point(5.75, 6.45)
o1      : Point2(1.25, 2.5)
o1 + p1 : Point(7.0, 8.95)
Inplace Addition :
p1 before : Point(5.75, 6.45)
p1 after : Point(7.0, 8.95)
</pre></div>

<hr/>



## Bitwise operators dunder methods

<div style="overflow-x:auto;" markdown="block">

{:.table-responsive}

method               |  operator  |   operation
:--- | :---: | :--- 
\__and__(self, other)                |     &      |   a & b
\__or__(self, other)                 |     &#124; |   a &#124; b
\__xor__(self, other)                |     ^      |   a ^ b
\__lshift__(self, other)             |     <<     |   a << b
\__rshift__(self, other)             |     >>     |   a >> b

</div>

{% include callout.html content="**Note** : Each bitwise operator dunder method have [r]operator and [i]operator methods for reverse and inplace operations. " type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point1D:

    def __init__(self, x) -> None:
        self.x = x

    def __repr__(self):
        return f'Point1D({self.x:b})'

    def __and__(self, other):
        return Point1D(self.x & other.x)

    def __or__(self, other):
        return Point1D(self.x | other.x)

    def __xor__(self, other):
        return Point1D(self.x ^ other.x)

    def __lshift__(self, other):
        return Point1D(self.x << other.x)

    def __rshift__(self, other):
        return Point1D(self.x >> other.x)


p1 = Point1D(8)
p2 = Point1D(3)

print('p1       :', p1)
print('p2       :', p2)

print('p1 & p2  :', p1 & p2)
print('p1 | p2  :', p1 | p2)
print('p1 ^ p2  :', p1 ^ p2)
print('p1 << p2 :', p1 << p2)
print('p1 >> p2 :', p1 >> p2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1       : Point1D(1000)
p2       : Point1D(11)
p1 & p2  : Point1D(0)
p1 | p2  : Point1D(1011)
p1 ^ p2  : Point1D(1011)
p1 << p2 : Point1D(1000000)
p1 >> p2 : Point1D(1)
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Inplace and Reverse method</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point1D:

    def __init__(self, x) -> None:
        self.x = x

    def __repr__(self):
        return f'Point1D({self.x:b})'

    def __and__(self, other):
        return Point1D(self.x & other.x)

    def __rand__(self, other):
        return Point1D(self.x & other.x)

    def __iand__(self, other):
        return Point1D(self.x & other.x)


class Point1DOTH:

    def __init__(self, x) -> None:
        self.x = x

    def __repr__(self):
        return f'Point1DOTH({self.x:b})'



p1 = Point1D(9)
o1 = Point1DOTH(7)

print('p1       :', p1)
print('o1       :', o1)

print('o1 & p1  :', o1 & p1)
print('\np1 before :', p1)
p1 &= o1
print('\np1 after :', p1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1       : Point1D(1001)
o1       : Point1DOTH(111)
o1 & p1  : Point1D(1)

p1 before : Point1D(1001)

p1 after : Point1D(1)
</pre></div>

<hr/>



## Comparison operators dunder methods

<div style="overflow-x:auto;" markdown="block">

{:.table-responsive}

 Method           |   Operator  |    Operation
:--- | :---: | :--- 
\__eq__(self, other)    |    ==       |  self == other
\__ne__(self, other)    |    !=       |  self != other
\__lt__(self, other)    |     <       |  self < other
\__gt__(self, other)    |     >       |  self > other
\__ge__(self, other)    |    >=       |  self >= other
\__le__(self, other)    |    <=       |  self <= other
 

</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'

    def __eq__(self, other):
        if self.x == other.x and self.y == other.y:
            return True
        return False

    def __ne__(self, other):
        if self.x != other.x or self.y != other.y:
            return True
        return False

    def __lt__(self, other):
        if self.x < other.x:
            return True
        elif self.x == other.x and self.y < other.y:
            return True
        return False

    def __gt__(self, other):
        if self.x > other.x:
            return True
        elif self.x == other.x and self.y > other.y:
            return True
        return False

    def __ge__(self, other):
        if self.x > other.x:
            return True
        elif self.x == other.x and self.y >= other.y:
            return True
        return False

    def __le__(self, other):
        if self.x < other.x:
            return True
        elif self.x == other.x and self.y <= other.y:
            return True
        return False


p1 = Point(15, 24)
p2 = Point(15, 12)
p3 = Point(15, 24)

print('p1       :', p1)
print('p2       :', p2)
print('----------------------------------')
print('p1 < p2  :', p1 < p2)
print('p1 > p2  :', p1 > p2)
print('p1 <= p2 :', p1 <= p2)
print('p1 >= p2 :', p1 >= p2)
print('p1 == p2 :', p1 == p2)
print('p1 != p2 :', p1 != p2)


print('\n')

print('p1       :', p1)
print('p3       :', p3)
print('----------------------------------')
print('p1 < p3  :', p1 < p3)
print('p1 > p3  :', p1 > p3)
print('p1 <= p3 :', p1 <= p3)
print('p1 >= p3 :', p1 >= p3)
print('p1 == p3 :', p1 == p3)
print('p1 != p3 :', p1 != p3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1       : Point(15, 24)
p2       : Point(15, 12)
----------------------------------
p1 < p2  : False
p1 > p2  : True
p1 <= p2 : False
p1 >= p2 : True
p1 == p2 : False
p1 != p2 : True


p1       : Point(15, 24)
p3       : Point(15, 24)
----------------------------------
p1 < p3  : False
p1 > p3  : False
p1 <= p3 : True
p1 >= p3 : True
p1 == p3 : True
p1 != p3 : False
</pre></div>

{% include callout.html content="**Note** : Normally it is not required to define __ne__() if __eq__() is defined. __ne__() is defined when different behaviour is expected other than opposite of of __eq__(). " type="primary" %} 

<hr/>


### @total_ordering

<p> In order to add comparision >, <, <=, >=, ==, != we only need to implement __lt__() and __eq__() and apply @total_ordering decorator.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from functools import total_ordering


@total_ordering
class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'

    def __eq__(self, other):
        if self.x == other.x and self.y == other.y:
            return True
        return False

    def __lt__(self, other):
        if self.x < other.x:
            return True
        elif self.x == other.x and self.y < other.y:
            return True
        return False


p1 = Point(15, 24)
p2 = Point(15, 12)
p3 = Point(15, 24)

print('p1       :', p1)
print('p2       :', p2)
print('----------------------------------')
print('p1 < p2  :', p1 < p2)
print('p1 > p2  :', p1 > p2)
print('p1 <= p2 :', p1 <= p2)
print('p1 >= p2 :', p1 >= p2)
print('p1 == p2 :', p1 == p2)
print('p1 != p2 :', p1 != p2)


print('\n')

print('p1       :', p1)
print('p3       :', p3)
print('----------------------------------')
print('p1 < p3  :', p1 < p3)
print('p1 > p3  :', p1 > p3)
print('p1 <= p3 :', p1 <= p3)
print('p1 >= p3 :', p1 >= p3)
print('p1 == p3 :', p1 == p3)
print('p1 != p3 :', p1 != p3)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1       : Point(15, 24)
p2       : Point(15, 12)
----------------------------------
p1 < p2  : False
p1 > p2  : True
p1 <= p2 : False
p1 >= p2 : True
p1 == p2 : False
p1 != p2 : True
p1       : Point(15, 24)
p3       : Point(15, 24)
----------------------------------
p1 < p3  : False
p1 > p3  : False
p1 <= p3 : True
p1 >= p3 : True
p1 == p3 : True
p1 != p3 : False
</pre></div>

<hr/>


### Sorting collection of objects of User defined class 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from functools import total_ordering


@total_ordering
class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'

    def __eq__(self, other):
        if self.x == other.x and self.y == other.y:
            return True
        return False

    def __lt__(self, other):
        if self.x < other.x:
            return True
        elif self.x == other.x and self.y < other.y:
            return True
        return False


p1 = Point(15, 12)
p2 = Point(25, 15)
p3 = Point(21, 12)
p4 = Point(18, 21)
p5 = Point(19, 27)

list1 = [p1, p2, p3, p4, p5]

print('Before Sorting  :', list1)
print('After Sorting   :', sorted(list1))

print('Reverse Sorting :', sorted(list1, reverse=True))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before Sorting  : [Point(15, 12), Point(25, 15), Point(21, 12), Point(18, 21), Point(19, 27)]
After Sorting   : [Point(15, 12), Point(18, 21), Point(19, 27), Point(21, 12), Point(25, 15)]
Reverse Sorting : [Point(25, 15), Point(21, 12), Point(19, 27), Point(18, 21), Point(15, 12)]
</pre></div>

<hr/>



#### Using custom comparison function for sorting
<div id="tut-content"> 
    <ul>
        <li> sort() function sorts the collection of objects as per the order defined by comparision dunders. </li>
        <li>  In some scenario collection of object needs to be sorted using different attribute of object, in such use case custom function can be passed as 'key' parameter of sort() method which defines which attribute(s) to be considered when sorting collection of objects. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from functools import total_ordering


@total_ordering
class Student(object):
    def __init__(self, rollno, fname, lname, bgroup, phno):
        self.rollno = rollno
        self.fname = fname
        self.lname = lname
        self.bgroup = bgroup
        self.phno = phno

    def __repr__(self) -> str:
        return f'Student({self.rollno}, {self.fname}, {self.lname}, {self.bgroup}, {self.phno})'

    def __lt__(self, other):
        return self.rollno < other.rollno

    def __eq__(self, other):
        return self.rollno == other.rollno


s1 = Student(1, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
s2 = Student(4, 'Terry', 'Kogan', 'O-', '312-589-5991')
s3 = Student(3, 'Danny', 'Simone', 'A+', '254-852-0977')
s4 = Student(2, 'Michele', 'Davis', 'A+', '214-675-2036')
s5 = Student(5, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

register = [s1, s2, s3, s4, s5]

print('Original List :')
for student in register:
    print(student)

print('\nSorted List   :')
for student in sorted(register):
    print(student)


def name_comparator(student):
    return student.fname + student.lname


print('\nSorted List as per name   :')
for student in sorted(register, key=name_comparator):
    print(student)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Original List :
Student(1, Kenneth, Shelton, O+, 775-813-9894)
Student(4, Terry, Kogan, O-, 312-589-5991)
Student(3, Danny, Simone, A+, 254-852-0977)
Student(2, Michele, Davis, A+, 214-675-2036)
Student(5, Kimberly, Poirier, A+, 713-703-0672)

Sorted List   :
Student(1, Kenneth, Shelton, O+, 775-813-9894)
Student(2, Michele, Davis, A+, 214-675-2036)
Student(3, Danny, Simone, A+, 254-852-0977)
Student(4, Terry, Kogan, O-, 312-589-5991)
Student(5, Kimberly, Poirier, A+, 713-703-0672)

Sorted List as per name   :
Student(3, Danny, Simone, A+, 254-852-0977)
Student(1, Kenneth, Shelton, O+, 775-813-9894)
Student(5, Kimberly, Poirier, A+, 713-703-0672)
Student(2, Michele, Davis, A+, 214-675-2036)
Student(4, Terry, Kogan, O-, 312-589-5991)

</pre></div>

<hr/>



## Value Conversion dunder methods

<div style="overflow-x:auto;" markdown="block">

{:.table-responsive}

Method            |   function  |    Operation
:--- | :--- | :--- 
\__int__(self)           |    int()    |  int(x)
\__float__(self)         |    float()  |  float(x)
\__bool__(self)          |    bool()   |  bool(x) or  if x:
\__round__(self, n=None) |    round()  |  round(x, n)
\__trunc__(self)         |    trunc()  |  trunc(x)
\__floor__(self)         |    floor()  |  floor(x)
\__ceil__(self)          |    ceil()   |  ceil(x)

</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from math import trunc, floor, ceil
from decimal import Decimal

class Point1D:

    def __init__(self, x) -> None:
        self.x = x

    def __str__(self):
        return f'Point1D({self.x})'

    def __int__(self):
        return int(self.x)

    def __float__(self):
        return float(self.x)

    def __bool__(self):
        return bool(int(self.x))

    def __round__(self, n=None):
        return round(float(self.x), n)

    def __trunc__(self):
        return trunc(float(self.x))

    def __floor__(self):
        return floor(float(self.x))

    def __ceil__(self):
        return ceil(float(self.x))


p1 = Point1D(Decimal('12.95841'))

print('p1           :', p1)
print('int(p1)      :', int(p1))
print('float(p1)    :', float(p1))
print('bool(p1)     :', bool(p1))
print('round(p1, 2) :', round(p1, 2))
print('trunc(p1)    :', trunc(p1))
print('floor(p1)    :', floor(p1))
print('ceil(p1)     :', ceil(p1))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1           : Point1D(12.95841)
int(p1)      : 12
float(p1)    : 12.95841
bool(p1)     : True
round(p1, 2) : 12.96
trunc(p1)    : 12
floor(p1)    : 12
ceil(p1)     : 13
</pre></div>

<hr/>


## Unary operators dunder methods

<div style="overflow-x:auto;" markdown="block">

{:.table-responsive}

Method  | Operator |  Operation
:--- | :---: | :--- 
\__pos__(self)        |    +     |   +a
\__neg__(self)        |    -     |   -a
\__invert__(self)     |    ~     |   ~a
\__abs__(self)        |   abs()  |   abs(a)

</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import Decimal

class Point1D:

    def __init__(self: Decimal, x) -> None:
        self.x = x

    def __str__(self):
        return f'Point1D({self.x})'

    def __pos__(self):
        return Point1D(abs(self.x))

    def __neg__(self):
        if self.x < 0:
            return Point1D(self.x)
        return Point1D(-self.x)

    def __invert__(self):
        if self.x > 0:
            return Point1D(-self.x)
        return Point1D(abs(self.x))

    def __abs__(self):
        return Point1D(abs(self.x))

p1 = Point1D(Decimal('-12.45685'))

# For negative value
p1 = Point1D(Decimal('-12.45685'))

print('p1      :', p1)
print('+p1     :', +p1)
print('-p1     :', -p1)
print('~p1     :', ~p1)
print('abs(p1) :', abs(p1))

# For positive value
p2 = Point1D(Decimal('12.45685'))

print('\np2      :', p2)
print('+p2     :', +p2)
print('-p2     :', -p2)
print('~p2     :', ~p2)
print('abs(p2) :', abs(p2))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1      : Point1D(-12.45685)
+p1     : Point1D(12.45685)
-p1     : Point1D(-12.45685)
~p1     : Point1D(12.45685)
abs(p1) : Point1D(12.45685)

p2      : Point1D(12.45685)
+p2     : Point1D(12.45685)
-p2     : Point1D(-12.45685)
~p2     : Point1D(-12.45685)
abs(p2) : Point1D(12.45685)
</pre></div>

<hr/>


## Useful dunder methods

### \__del__(self)  -> None

<p> It is called when destroying an instance of the class. </p>

<div id="tut-content"> 
    <ul>
        <li> __del__(self) method is also called when deleting the object with 'del obj', however it does not guaranteed that object will be reclaimed immediately from the memory. </li>
        <li> In CPython implementation: Object is reclaimed automatically by garbage collector when object has zero reference count. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'

    def __del__(self):
        print(f'Deleting Object {id(self)} from memory ......')


p1 = Point(15, 45)

# Deleting the object
del p1

# Now p1 is not in memory
p1.x


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Deleting Object 139869166688528 from memory ......
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 9, in <&zwj;module>
NameError: name 'p1' is not defined</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Deleting Object with more than one reference count </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

p1 = Point(12, 22)

p2 = p1

print('id(p1) :', id(p1))
print('id(p2) :', id(p2))

print('Deleting variable p1')
del p1

print('p2.x :', p2.x)
print('id(p2) :', id(p2))

print('Removing last reference')
p2 = None


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
id(p1) : 140479905887712
id(p2) : 140479905887712
Deleting variable p1
p2.x : 12
id(p2) : 140479905887712
Removing last reference
Deleting Object 140479905887712 from memory ......
</pre></div>

<hr/>



### \__bytes__(self) -> bytes

<p> Returns byte-string representation of the object when calling bytes(obj). </p>

<div id="tut-content"> 
    <ul>
        <li> Object is converted to bytes representation in order to store object on disk or transmit it over the network. </li>
        <li> With __bytes__() method, a static method frombytes(bytes) can also be defined which create and returns the object from bytes representation.</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'

    def __bytes__(self):
        return bytes(f'<Point, {self.x}, {self.y}>', encoding='utf_8')

    @staticmethod
    def frombytes(bytes):
        pobj = bytes.decode('utf_8')

        if not (pobj[0] == '<' and pobj[-1] == '>'):
            raise ValueError('Invalid byte Object of Point')

        cls, x, y = pobj[1:-1].split(', ')

        if cls != 'Point':
            raise ValueError('Invalid byte Object of Point')

        return Point(int(x), int(y))



p1 = Point(45, 55)

print('p1 :', p1)
print('type(p1) :', type(p1))

bytesP = bytes(p1)
print('bytes(p1) :', bytesP)

p1FromBytes = Point.frombytes(bytesP)

print('p1FromBytes :', p1FromBytes)
print('type(p1FromBytes) :', type(p1FromBytes))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1 : Point(45, 55)
type(p1) : <class 'classes.DunderBytes.Point'>
bytes(p1) : b'<Point, 45, 55>'
p1FromBytes : Point(45, 55)
type(p1FromBytes) : <class 'classes.DunderBytes.Point'>
</pre></div>

<hr/>


## \__hash__(self) -> int

<p> Returns int value for hashable object. </p>

<div id="tut-content"> 
    <ul>
        <li> Python uses hash function (which contains math equation) to store and retrieve object in data structure which uses hash table such as set and dictionary. </li>
        <li> __hash__(self) dunder is generally defined for immutable objects. </li>
    </ul> 
</div>

<hr/>

### id vs hash

<div id="tut-content"> 
    <ul>
        <li> id is used for comparing variable in memory points to same object or not. </li>
        <li> Same id guarantees that both variable points same object in memory. </li>
        <li> Object with same id have always returns same hash value. hash function may return same value for objects with different ids. </li>
        <li> hash is generally used for immutable objects which can be cached. </li>
    </ul> 
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> storing object of class which does not implement __hash__() in set or using it as key of dictionary will raise TypeError.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'

    def __eq__(self, other):
        if self.x == other.x and self.y == other.y:
            return True
        return False


p1 = Point(12, 55)
p2 = Point(21, 35)

pointSet = {p1, p2}


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 6, in <&zwj;module>
TypeError: unhashable type: 'Point'</pre></div>

<hr/>


### equal and hash contracts

<div id="tut-content"> 
    <ul>
        <li> hash function should return same value when called repeatedly on the same object. (Same reference might be assigned to different variable). </li>
        <li> when __eq__() method returns true for two object , for both objects hash must be same value.</li>
        <li> hash function may returns same value for two object for which __eq__ returns false is called as hash collision. Data structure which uses hash generally implements collision resolution strategy. </li>
    </ul> 
</div>


<hr/>

### sys.hash_info

<p> Returns a named Tuple giving parameters of numeric hash implementation. </p>

<div style="overflow-x:auto;" markdown="block">

{:.table-responsive}

Attributes  | Explanation
:--- | :--- 
width       | width in bits used for hash values
modulus     | prime modulus P used for numeric hash scheme
inf         | hash value returned for a positive infinity
nan         | hash value returned for a nan
imag        | multiplier used for the imaginary part of a complex number
algorithm   | name of the algorithm for hashing of str, bytes, and memoryview
hash_bits   | internal output size of the hash algorithm
seed_bits   | size of the seed key of the hash algorithm

</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import sys
print(sys.hash_info)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
sys.hash_info(width=64, modulus=2305843009213693951, inf=314159, nan=0, imag=1000003, algorithm='siphash24', hash_bits=64, seed_bits=128, cutoff=0)
</pre></div>

<hr/>



### Defining \__eq__() and \__hash__()

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from functools import total_ordering

@total_ordering
class Point:
    """
    Point class represent x and y co-ordinates in 2D plane.
    """
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'

    def __eq__(self, other):
        if self.x == other.x and self.y == other.y:
            return True
        return False

    def __lt__(self, other):
        if self.x < other.x:
            return True
        elif self.x == other.x and self.y < other.y:
            return True
        return False

    def __hash__(self):
        return hash((self.x, self.y))


p1 = Point(12, 22)
p2 = Point(12, 55)
p3 = Point(12, 22)

print('hash(p1) :', hash(p1))
print('hash(p2) :', hash(p2))
print('hash(p3) :', hash(p3))

print('Is P1 and P3 equal?  --> ', p1 == p3)
print('Is hash of P1 and p3 equals? --> ', hash(p1) == hash(p3)))

# Now creating set of points
p1 = Point(12, 22)
p2 = Point(12, 55)

pointSet = {p1, p2}
print('pointSet :', pointSet)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
hash(p1) : 4154569154902384273
hash(p2) : 5663103977638108584
hash(p3) : 4154569154902384273
Is P1 and P3 equal?  -->  True
Is hash of P1 and p3 equals? -->  True
pointSet : {Point(12, 55), Point(12, 22)}
</pre></div>

<hr/>



### \__hash__() method and inheritance

<div id="tut-content"> 
    <ul>
        <li> If child class overrides __eq__() and needs to retain __hash__() from the parent class __hash__ = <&zwj;ParentClass>.__hash__. </li>
        <li> If subclass does not override __eq__() and does not want objects of the class to be hashable, then set __hash__ = None. </li>
    </ul> 
</div>

{% include callout.html content="By default, the \__hash__() values of str and bytes objects are “salted” with an unpredictable random value to provide protection against a denial-of-service. " type="primary" %} 

<hr/>



## \__call__()
<p> Using __call__() method to object of a class can be made callable. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'

    def __hash__(self):
        return hash((self.x, self.y))

    def __call__(self, *args, **kwargs):
        print(f'Calling object [{repr(self)}] with args[{args}], kwargs [{kwargs}]')


p3 = Point(12, 44)

# Invoking call method
p3(123, 21, 12, 123, a=12, b=121)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Calling object [Point(12, 44)] with args[(123, 21, 12, 123)], kwargs [{'a': 12, 'b': 121}]
</pre></div>

<hr/>


## Dunder methods for class with collections

###  \__len__(self) 
<p> Returns length of the collection. </p>
<hr/>

### \__getitem__(self, key) 
<p>  Returns an item (value) having matching key or index. </p>
<hr/>

###  \__setitem__(self, key, value)
<p> adds / modify an item with (key, value) or (index, value) to the collection. </p>
<hr/>

### \__delitem__(self, key) 
<p> deletes an item with give key or index from the collection. </p>
<hr/>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Student(object):
    def __init__(self, rollno, fname, lname, bgroup, phno):
        self.rollno = rollno
        self.fname = fname
        self.lname = lname
        self.bgroup = bgroup
        self.phno = phno

    def __str__(self) -> str:
        return (f'\nRoll Number : {self.rollno} \nFirst Name : {self.fname} \nLast Name : {self.lname}\n'
                f'Blood Group : {self.bgroup}\nPhone Number : {self.phno}')

    def __repr__(self):
        return f"Student({self.rollno}, '{self.fname}', '{self.lname}', '{self.bgroup}', '{self.phno})'"

    def __eq__(self, other):
        return self.rollno == other.rollno and self.fname == other.fname and self.lname == other.laname\
    and self.bgroup == other.bgroup and self.phno == other.phone

    def __hash__(self):
        return hash((self.rollno, self.fname, self.lname, self.bgroup))


class Class:
    def __init__(self, div, students={}):
        self.div = div
        self.__students = dict(students)

    def __len__(self):
        return len(self.__students)

    def __getitem__(self, item):
        print('Fetching student ....')
        return self.__students[item]

    def __setitem__(self, key, value):
        print('Modifying / Adding student ....')
        self.__students[key] = value

    def __delitem__(self, key):
         print('Deleting student ....')
         del self.__students[key]

    def add_student(self, student):
        self.__students.setdefault(student.rollno, student)

    def add_students(self, students):
        self.__students.update(students)


# Object creation
s1 = Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
s2 = Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
s3 = Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
s4 = Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
s5 = Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

students = {s1.rollno: s1, s2.rollno: s2, s3.rollno: s3, s4.rollno: s4, s5.rollno: s5}

print('Creating class :')
class5 = Class('5th', students)

print('\nChecking no of students in class :')
print('len(class5) :', len(class5))

print('\nAccessing student by roll number :')
print('class5[104] :', class5[104])

print('\nAdding a student to class :')
s6 = Student(106, 'Victoria', 'Gillock', 'O+', '979-251-9873')
class5[s6.rollno] = s6

print('class5[106]', class5[106])

print('\nDeleting the student :')
print('length before :', len(class5))
del class5[106]
print('length after', len(class5))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Creating class :

Checking no of students in class :
len(class5) : 5

Accessing student by roll number :
Fetching student ....
class5[104] : 
Roll Number : 104 
First Name : Michele 
Last Name : Davis
Blood Group : A+
Phone Number : 214-675-2036

Adding a student to class :
Modifying / Adding student ....
Fetching student ....
class5[106] 
Roll Number : 106 
First Name : Victoria 
Last Name : Gillock
Blood Group : O+
Phone Number : 979-251-9873

Deleting the student :
length before : 6
Deleting student ....
length after 5

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Using indexed collection (list) </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Student(object):
    def __init__(self, rollno, fname, lname, bgroup, phno):
        self.rollno = rollno
        self.fname = fname
        self.lname = lname
        self.bgroup = bgroup
        self.phno = phno

    def __str__(self) -> str:
        return (f'\nRoll Number : {self.rollno} \nFirst Name : {self.fname} \nLast Name : {self.lname}\n'
                f'Blood Group : {self.bgroup}\nPhone Number : {self.phno}')

    def __repr__(self):
        return f"Student({self.rollno}, '{self.fname}', '{self.lname}', '{self.bgroup}', '{self.phno})'"

    def __eq__(self, other):
        return self.rollno == other.rollno and self.fname == other.fname and self.lname == other.laname\
    and self.bgroup == other.bgroup and self.phno == other.phone

    def __hash__(self):
        return hash((self.rollno, self.fname, self.lname, self.bgroup))


class Class:
    def __init__(self, div, students=[]):
        self.div = div
        self.__students = list(students)

    def __len__(self):
        return len(self.__students)

    def __getitem__(self, index):
        print('Fetching student ....')
        return self.__students[index]

    def __setitem__(self, index, value):
        print('Modifying / Adding student ....')
        self.__students[index] = value

    def __delitem__(self, index):
         print('Deleting student ....')
         del self.__students[index]

    def add_student(self, student):
        self.__students.append(student)


# Object creation
s1 = Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
s2 = Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
s3 = Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
s4 = Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
s5 = Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

students = (s1, s2, s3, s4, s5)

print('Creating class :')
class5 = Class('5th', students)

print('\nChecking no of students in class :')
print('len(class5) :', len(class5))


print('\nAdding a student to class :')
s6 = Student(106, 'Victoria', 'Gillock', 'O+', '979-251-9873')
class5.add_student(s6)

print('\nAccessing student by index :')
print('class5[5] :', class5[5])

print('\nDeleting the student :')
print('length before :', len(class5))
del class5[3]
print('length after  :', len(class5))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Creating class :

Checking no of students in class :
len(class5) : 5

Adding a student to class :

Accessing student by index :
Fetching student ....
class5[5] : 
Roll Number : 106 
First Name : Victoria 
Last Name : Gillock
Blood Group : O+
Phone Number : 979-251-9873

Deleting the student :
length before : 6
Deleting student ....
length after  : 5
</pre></div>

<hr/>


## \__missing__(self, key)
<p> When key is not found missing is triggered internally by __getitem__(). It can be used as fallback method to implement business logic which gets executed when access for invalid key is attempted.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import UserDict


class Student:
    def __init__(self, rollno, fname, lname, bgroup, phno):
        self.rollno = rollno
        self.fname = fname
        self.lname = lname
        self.bgroup = bgroup
        self.phno = phno

    def __str__(self) -> str:
        return (f'\nRoll Number : {self.rollno} \nFirst Name : {self.fname} \nLast Name : {self.lname}\n'
                f'Blood Group : {self.bgroup}\nPhone Number : {self.phno}')

    def __repr__(self):
        return f"Student({self.rollno}, '{self.fname}', '{self.lname}', '{self.bgroup}', '{self.phno})'"

    def __eq__(self, other):
        return self.rollno == other.rollno and self.fname == other.fname and self.lname == other.laname\
    and self.bgroup == other.bgroup and self.phno == other.phone

    def __hash__(self):
        return hash((self.rollno, self.fname, self.lname, self.bgroup))


class Class(UserDict):
    def __init__(self, classno, dictionary):
        self.classno = classno
        self.data = dictionary

    def __missing__(self, key):
        if isinstance(key, int):
            raise KeyError
        if isinstance(key, str):
            print('Waring please use Int key!\nConverting String key to Int')
            return self.data[int(key)]


# Object creation
s1 = Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
s2 = Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
s3 = Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
s4 = Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
s5 = Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

students = {s1.rollno: s1, s2.rollno: s2, s3.rollno: s3, s4.rollno: s4, s5.rollno: s5}

# creating class
class5 = Class('5th', students)


# fetching student with string key
print("class5['101'] :", class5['101'])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<div id='tut-highlight'>Waring please use Int key!
Converting String key to Int</div>
class5['101'] : 
Roll Number : 101 
First Name : Kenneth 
Last Name : Shelton
Blood Group : O+
Phone Number : 775-813-9894
</pre></div>

<hr/>



## Dunders for copying object

### Shallow copy vs Deep Copy

<div id="tut-content"> 
    <ul>
        <li> <strong> Shallow copy : </strong> Creates new object with collection by copying references of objects of collection from original object.</li>
        <li> <strong>  Deep copy : </strong> Creates new object with collection by copying objects of collection recursively from original object.</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}
import copy


class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __repr__(self):
        return f'Point({self.x}, {self.y})'


class Shape:

    def __init__(self, name: str, points: list):
        self.name = name
        self.points = points

    def __repr__(self):
        return f'Shape({self.name}, {self.points})'


class Drawing:

    def __init__(self, name: str, shapes: list) :
        self.name = name
        self.shapes = shapes

    def __repr__(self):
        return f'Drawing({self.name}, {self.shapes})'


# Rectangle
r1 = Point(30, 35)
r2 = Point(30, 15)
r3 = Point(65, 15)
r4 = Point(65, 35)

rectangle1 = Shape('Rectangle1', [r1, r2, r3, r4])


# Square

s1 = Point(5, 25)
s2 = Point(5, 5)
s3 = Point(25, 5)
s4 = Point(25, 25)
square1 = Shape('Square1', [s1, s2, s3, s4])

# Drawing
drawing1 = Drawing('Drawing1', [rectangle1, square1])

print('\nCreating shallow copy')
drawing1Copy = copy.copy(drawing1)

# Checking Objects Ids
print('drawing :', id(drawing1))
print('drawing1Copy :', id(drawing1Copy))

print('drawing1.shapes     :', id(drawing1.shapes))
print('drawing1Copy.shapes :', id(drawing1Copy.shapes))

print('drawing1.shapes.point     :', id(drawing1.shapes[0].points))
print('drawing1Copy.shapes.point  :', id(drawing1Copy.shapes[0].points))


print('\nCreating DeepCopy')
dw1DeepCopy = copy.deepcopy(drawing1)

print('drawing1 :', id(drawing1))
print('dw1DeepCopy :', id(dw1DeepCopy))

print('drawing1.shapes     :', id(drawing1.shapes))
print('dw1DeepCopy.shapes  :', id(dw1DeepCopy.shapes))

print('drawing1.shapes.point     :', id(drawing1.shapes[0].points))
print('dw1DeepCopy.shapes.point  :', id(dw1DeepCopy.shapes[0].points))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Creating shallow copy
drawing : 139940599840624
drawing1Copy : 139940599840672
drawing1.shapes     : 139940618367872
drawing1Copy.shapes : 139940618367872
drawing1.shapes.point     : 139940618853312
drawing1Copy.shapes.point  : 139940618853312

Creating DeepCopy
drawing1 : 139940599840624
dw1DeepCopy : 139940599839040
drawing1.shapes     : 139940618367872
dw1DeepCopy.shapes  : 139940618856000
drawing1.shapes.point     : 139940618853312
dw1DeepCopy.shapes.point  : 139940618855808
</pre></div>

<hr/>

{% include callout.html content="For particular use cases custom behaviour of shallow and deep copy is required, for that \__copy__(self) and \__deepcopy__(self, memodict={}) dunders can be implemented." type="primary" %} 

### \__copy__(self)
<p> Creates and returns shallow copy of object. </p>
<hr/>

### \__deepcopy__(self, memodict={})
<p> Creates and returns deep (Recursive) copy of object. </p>
<div id="tut-content"> 
    <ul>
        <li> <strong> memodict : </strong> is dictionary used to keep track of objects which are already copied in recursive calls. </li>
    </ul> 
</div>


<hr/>


## Monkey Patching dunders
<div id="tut-content"> 
    <ul>
        <li> Modifying class / module definition at runtime is known as Monkey patching. </li>
        <li> Dunder methods can be added to class definition at runtime. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y


def to_string(self):
    return f'Shape({self.x}, {self.y})'


Point.__str__ = to_string

r1 = Point(30, 35)
print('r1 :', r1)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
r1 : Shape(30, 35)
</pre></div>

<hr/>

{% include links.html %}
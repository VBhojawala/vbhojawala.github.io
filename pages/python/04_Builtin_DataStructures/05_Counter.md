---
title: Python Counter
layout: tutorial
tags: [python, counter, elements(), most_common(), update(), subtract(), operators]
sidebar: python_sidebar
permalink: python_counter.html
folder: python
prev_section: 
prev_section_title: 
prev: python_dictionary.html
prev_title: Dictionary
next: python_chainmap.html
next_title: ChainMap
next_section: 
next_section_title: 
summary: Python Counter constructor, methods, operators and example.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/EbD153Ww8UE" allowfullscreen></iframe>
</div> <hr/>

## Counter

<p> Subclass of dictionary class and it counts hashable objects. </p>

<div id="tut-content"> 
    <ul>
        <li> It stores hashable value as keys and any comparable type as value which can be negative too. </li>
        <li> It is similar to multiset or bag. </li>
        <li> It does not preserves the order of element as per insertion order.</li>
        <li> There is no restriction on value type but value type must support addition, subtraction and comparision.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

print('Counter is subclass of dict ? :', issubclass(Counter, dict))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Counter is subclass of dict ? : True
</pre></div>

<hr/>

{% include callout.html content="**Note** : As Counter is subclass of dict class, all functionality explained in dictionary can be applied to Counter object, this tutorial will discuss only new functionality or different behaviour compared to dict class. " type="primary" %} 



### Constructor

<p id="tut-cons"> Counter(iterable) </p>
<p id="tut-cons"> Counter(mapping) </p>
<p id="tut-cons"> Counter(**kwargs) </p>

<div id="tut-content"> 
    <ul>
        <li> Empty Counter  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter()
print(f'c1 : {c1} type : {type(c1)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
c1 : Counter() type : <class 'collections.Counter'>
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Counter with iterable </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter(['a', 'c', 'z', 'b', 'z', 'a', 'c', 'b', 'x'])
print(c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Counter({'a': 2, 'c': 2, 'z': 2, 'b': 2, 'x': 1})
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Counter with initial count (mapping)  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'z': -1})
print(c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Counter({'b': 7, 'a': 5, 'z': -1})
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Counter with keyword arguments </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter(a=5, b=8, c=9, x=-2, y=16, z=7)
print(c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Counter({'y': 16, 'c': 9, 'b': 8, 'z': 7, 'a': 5, 'x': -2})
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> Counter with different comparable types as value </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import Decimal
from fractions import Fraction

c1 = Counter(a=Decimal('7.66'), b=7.6, c=0.5, d=Fraction(1, 3))
print(c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Counter({'a': Decimal('7.66'), 'b': 7.6, 'c': 0.5, 'd': Fraction(1, 3)})
</pre></div>

<hr/>


### Accessing element

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter(a=5, b=8, c=9, x=-2, y=16, z=7)
print(f"c1['a'] : {c1['a']}")


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
c1['a'] : 5
</pre></div>

<hr/>


### Adding new element

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'z': -1})
print('Before :', c1)
c1['x'] = 5
print('After  :', c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : Counter({'b': 7, 'a': 5, 'z': -1})
After  : Counter({'b': 7, 'a': 5, <div id="tut-highlight">'x': 5</div>, 'z': -1})
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Adding new element with existing key will replace new value with old value in count object for given key. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'z': -1})
print('Before :', c1)
c1['z'] = 9
print('After  :', c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : Counter({'b': 7, 'a': 5, <div id="tut-highlight">'z': -1</div>})
After  : Counter({<div id="tut-highlight">'z': 9</div>, 'b': 7, 'a': 5})
</pre></div>

<hr/>


### Deleting element

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter(['a', 'c', 'z', 'b', 'z', 'a', 'c', 'b', 'x'])

print('Before :', c1)
del c1['a']
print('After  :', c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : Counter({<div id="tut-highlight">'a': 2</div>, 'c': 2, 'z': 2, 'b': 2, 'x': 1})
After  : Counter({'c': 2, 'z': 2, 'b': 2, 'x': 1})
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Deleting element for non existing key in counter objet does not raise KeyError. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}
from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'z': -1})
print('Before :', c1)
del c1['x']
print('After  :', c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : Counter({'b': 7, 'a': 5, 'z': -1})
After  : Counter({'b': 7, 'a': 5, 'z': -1})
</pre></div>

<hr/>



### Functions

#### elements()

<p> Returns iterator of elements with non zero and non negative count(value) only. Because it is a multiset it stores repeated values.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'z': -1})
print(f'c1 : {c1}')
print(f"type(c1.elements()) : {type(c1.elements())}")
print(tuple(c1.elements()))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
c1 : Counter({'b': 7, 'a': 5, 'z': -1})
type(c1.elements()) : <class 'itertools.chain'>
('a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b', 'b')
</pre></div>

<hr/>


#### most_common([n])

<p> Returns list of most common n elements. If n is not given returns all elements. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'x': 12, 'z': -1})
print(f'c1 : {c1}')
print(f'c1.most_common(2) : {c1.most_common(2)}')
print(f'c1.most_common() : {c1.most_common()}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
c1 : Counter({'x': 12, 'b': 7, 'a': 5, 'z': -1})
c1.most_common(2) : [('x', 12), ('b', 7)]
c1.most_common() : [('x', 12), ('b', 7), ('a', 5), ('z', -1)]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Extracting least common element </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'x': 12, 'z': -1})
print(f'c1 : {c1}')
print(f'least common 2 element : {c1.most_common()[:-3:-1]}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
c1 : Counter({'x': 12, 'b': 7, 'a': 5, 'z': -1})
least common 2 element : [('z', -1), ('a', 5)]
</pre></div>

<hr/>


#### update([iterable or mapping])

<p> Adds counts to elements from iterable or mapping to an existing Counter. </p>


<div id="tut-content"> 
    <ul>
        <li> Updating elements from iterable </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'x': 12, 'z': -1})
alphaT = ('z', 'x', 'b', 'c', 'a', 'b', 'z')

print('Before :', c1)
c1.update(alphaT)
print('After  :', c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : Counter({'x': 12, 'b': 7, 'a': 5, 'z': -1})
After  : Counter({'x': 13, 'b': 9, 'a': 6, 'z': 1, 'c': 1})
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Updating elements from mapping </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'x': 12, 'z': -1})
alphaDict = {'z': 4, 'c': 2, 't': 7}

print('Before :', c1)
c1.update(alphaDict)
print('After  :', c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : Counter({'x': 12, 'b': 7, 'a': 5, 'z': -1})
After  : Counter({'x': 12, 'b': 7, 't': 7, 'a': 5, 'z': 3, 'c': 2})
</pre></div>

<hr/>



#### subtract([iterable or mapping])

<p> Subtracts elements from iterable or counts from mapping. </p>

<div id="tut-content"> 
    <ul>
        <li> Subtract from iterable </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'x': 12, 'z': 3, 'c': 5})
alphaT = ('z', 'x', 'b', 'c', 'a', 'b', 'z')

print('Before :', c1)
c1.subtract(alphaT)
print('After  :', c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : Counter({'x': 12, 'b': 7, 'a': 5, 'c': 5, 'z': 3})
After  : Counter({'x': 11, 'b': 5, 'a': 4, 'c': 4, 'z': 1})
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Subtracting from mapping </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7, 'x': 12, 'z': 3, 'c': 5})
alphaDict = {'b': 6, 'c': 4}

print('Before :', c1)
c1.subtract(alphaDict)
print('After  :', c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : Counter({'x': 12, 'b': 7, 'a': 5, 'c': 5, 'z': 3})
After  : Counter({'x': 12, 'a': 5, 'z': 3, 'b': 1, 'c': 1})
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> If element is not present in counter, element with count 0 is added and subtracted from element count of given mapping object.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

c1 = Counter({'a': 5, 'b': 7 })
alphaDict = {'b': 6, 'c': 4}

print('Before :', c1)
c1.subtract(alphaDict)
print('After  :', c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : Counter({'b': 7, 'a': 5})
After  : Counter({'a': 5, 'b': 1, <div id="tut-highlight">'c': -4</div>})
</pre></div>

<hr/>



#### Functions inherited from dictionary

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

common = [attr for attr in (set(dir(Counter)) & set(dir(dict))) if not attr.startswith('__')]
print('Attributes common between Counter and dict :', common)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Attributes common between Counter and dict : ['keys', 'pop', 'fromkeys', 'values', 'items', 'copy', 'get', 'update', 'clear', 'setdefault', 'popitem']
</pre></div>

{% include callout.html content="**Note** : fromkeys() method is not implemented for Counter" type="primary" %} 

<hr/>


### Operators

Operator   |   Usage    |  Meaning
:---: | :---: | :---
    +        |  c1 + c2   |  Addition
    -        |  c1 - c2   |  Subtraction
    \|        |  c1 \| c2 |  Union
    &        |  c1 & c2   |  Intersection


<div id="tut-content"> 
    <ul>
        <li> After performing any of above operation if result counter contains element with 0 or negative count, it will be removed. </li>
        <li> For Union and Intersection if both counter contains selected element with value > 0 , the result element will have maximum value out of two element. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter

print('Addition')
c1 = Counter(a=5, b=7, c=3, x=0)
c2 = Counter(a=2, b=9, c=-5)

print('c1 :', c1)
print('c2 :', c2)
print('c1 + c2 :', c1 + c2)

print('\nSubtraction')
c1 = Counter(a=5, b=7, c=6, x=9, z=0)
c2 = Counter(a=2, b=9, c=7, x=5)

print('c1 :', c1)
print('c2 :', c2)
print('c1 - c2 :', c1 - c2)


print('\nUnion')
c1 = Counter(a=2, b=7, c=0)
c2 = Counter(a=5, b=0, c=7, x=5, z=-5)

print('c1 :', c1)
print('c2 :', c2)
print('c1 | c2 :', c1 | c2)


print('\nIntersection')
c1 = Counter(a=5, b=-7, c=5)
c2 = Counter(a=-6, b=2, c=7, x=5, z=-5)

print('c1 :', c1)
print('c2 :', c2)
print('c1 | c2 :', c1 | c2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Addition
c1 : Counter({'b': 7, 'a': 5, 'c': 3, 'x': 0})
c2 : Counter({'b': 9, 'a': 2, 'c': -5})
c1 + c2 : Counter({'b': 16, 'a': 7})

Subtraction
c1 : Counter({'x': 9, 'b': 7, 'c': 6, 'a': 5, 'z': 0})
c2 : Counter({'b': 9, 'c': 7, 'x': 5, 'a': 2})
c1 - c2 : Counter({'x': 4, 'a': 3})

Union
c1 : Counter({'b': 7, 'a': 2, 'c': 0})
c2 : Counter({'c': 7, 'a': 5, 'x': 5, 'b': 0, 'z': -5})
c1 | c2 : Counter({'b': 7, 'c': 7, 'a': 5, 'x': 5})

Intersection
c1 : Counter({'a': 5, 'c': 5, 'b': -7})
c2 : Counter({'c': 7, 'x': 5, 'b': 2, 'z': -5, 'a': -6})
c1 | c2 : Counter({'c': 7, 'a': 5, 'x': 5, 'b': 2})
</pre></div>

<hr/>


### Example

#### Finding top 10 words with highest frequency from book

[Alice's Adventures in Wonderland Book](https://www.gutenberg.org/files/11/11-0.txt){:target="_blank"}

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import Counter


def get_text():
    """
        :return: list of words in Alice in Wounder land book
    """
    file = open(r'./04_Builtin_DataStructures/Docs/AliceInWonderland.txt', 'r')
    result = []
    for line in file:
        result += [word.strip().strip(' .-()\'"!?_[]`’“;”,:‘').lower() for word in line.split()]
    file.close()
    return result


freqDict = Counter(get_text()) 
print('Top 10 words with frequency :', freqDict.most_common(10))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Top 10 words with frequency : [('the', 1804), ('and', 912), ('to', 801), ('a', 684), ('of', 625), ('it', 541), ('she', 537), ('said', 462), ('you', 429), ('in', 428)]
</pre></div>

<hr/>



{% include links.html %}
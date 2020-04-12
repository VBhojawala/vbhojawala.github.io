---
title: Tuple and NamedTuple
layout: tutorial
tags: [indexing, slicing, for-each, reversed(), enumerate(), chain(), zip(), index(), count(), len(), in, not_in, min(), max(), sum(), sorted(), any(), all(), comparision_operators, namedtuple, _fields, _field_defaults, _make(), _asdict(), _replace()]
sidebar: python_sidebar
permalink: python_tuple_namedtuple.html
folder: python
prev_section: 
prev_section_title: 
prev: python_list.html
prev_title: List
next: python_set_frozenset.html
next_title: Set and FrozenSet
next_section: 
next_section_title: 
summary: tuple constructor, indexing, slicing, iterating, functions of tuple object, operators, named tuple, attributes and functions of namedtuple.
---

## Tuple

<div id="tut-content"> 
    <ul>
        <li> <strong>Immutable Sequence.</strong> </li>
        <li> <strong>Ordered and indexed sequence.</strong> </li>
        <li> <strong>It can contain duplicates.</strong> </li>
        <li> <strong>Hashable data structure.(if it contains immutable data only)</strong> </li>
    </ul> 
</div>


### Constructor


<div id="tut-content"> 
    <ul>
        <li> <strong>tupe() : </strong> Creating empty tuple object. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = ()
print(f't1 : {t1}  Type : {type(t1)}')

# or

t1 = tuple()
print(f't1 : {t1}  Type : {type(t1)}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 : ()  Type : <class 'tuple'>
t1 : ()  Type : <class 'tuple'>
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>tuple(*elements) : </strong> Creating tuple object with elements. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 2, 3)
print(t1)

# or

t1 = 1, 2, 3
print(t1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(1, 2, 3)
(1, 2, 3)
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>tuple(iterable) : </strong> Creating tuple from iterator / generator function. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = tuple(range(1, 11))
print(t1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Tuple with different kinds of objects.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (12.00, 'Hello Tuple', 1245, False)
print(t1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(12.0, 'Hello Tuple', 1245, False)
</pre></div>

<hr/>



### Indexing

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ('Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips')

{% endhighlight %}
</div>



<div id="tut-img">
    <img src="/images/tutorials/python/list-Indexing.png" class="tut-img" alt="Indexing in list">
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ('Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips')

print('flowers[0] :', flowers[0])
print('flowers[3] :', flowers[3])
print('flowers[5] :', flowers[5])

print('flowers[-1] :', flowers[-1])
print('flowers[-4] :', flowers[-4])
print('flowers[-6] :', flowers[-6])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers[0] : Lotus
flowers[3] : Rose
flowers[5] : Tulips
flowers[-1] : Tulips
flowers[-4] : Jasmine
flowers[-6] : Lotus
</pre></div>

<hr/>



### Slicing

{% include callout.html content="**Note** : Slicing works same as we have explained in string. For in depth slicing tutorials checkout slicing in string. " type="primary" %} 


<div id="tut-img">
    <img src="/images/tutorials/python/list-Indexing.png" class="tut-img" alt="Indexing in list">
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ('Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips')

print(flowers)
print('flowers[2:4]      :', flowers[2:4])
print('flowers[1::2]     :', flowers[1::2])
print('flowers[4:1:-1]   :', flowers[4:1:-1])
print('flowers[-1:-4:-1] :', flowers[-1:-4:-1])

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
('Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips')
flowers[2:4]      : ('Jasmine', 'Rose')
flowers[1::2]     : ('Lily', 'Rose', 'Tulips')
flowers[4:1:-1]   : ('Lavender', 'Rose', 'Jasmine')
flowers[-1:-4:-1] : ('Tulips', 'Lavender', 'Rose')
</pre></div>

<hr/>


### Unpacking

{% include callout.html content="**Note** :  *variable always returns list even if one or no element is selected by it." type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (12.00, 'Hello Tuple', 1245)
v1, v2, v3 = t1
print(f'v1 : {v1} |  v2 : {v2} |  v3 : {v3}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
v1 : 12.0 |  v2 : Hello Tuple |  v3 : 1245
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Unpacking values from the beginning of tuple </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

marks = (97, 91, 84, 78, 71, 66, 65, 59, 55, 54, 45, 35)

top1, top2, top3, *rest = marks

print(f'Top1 : {top1}   Top2 : {top2}   Top3 : {top3}   rest : {rest}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Top1 : 97   Top2 : 91   Top3 : 84   rest : [78, 71, 66, 65, 59, 55, 54, 45, 35]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Unpacking values from the end of tuple </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

marks = (97, 91, 84, 78, 71, 66, 65, 59, 55, 54, 45, 35)

*rest, low2, low1 = marks
print(f'low1 : {low1}   low2 : {low2}  rest : {rest}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
low1 : 35   low2 : 45  rest : [97, 91, 84, 78, 71, 66, 65, 59, 55, 54]
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Unpacking values from the beginning and  end of tuple </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

marks = (97, 91, 84, 78, 71, 66, 65, 59, 55, 54, 45, 35)

high, *rest, low = marks
print(f'highest : {high}  lowest : {low}  rest : {rest}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
highest : 97  lowest : 35  rest : [91, 84, 78, 71, 66, 65, 59, 55, 54, 45]
</pre></div>

<hr/>




### Iterating

#### for-each 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (12.00, 'Hello Tuple', 1245)

for element in t1:
    print(f'Element : {element}  Type : {type(element)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Element : 12.0  Type : <class 'float'>
Element : Hello Tuple  Type : <class 'str'>
Element : 1245  Type : <class 'int'>
</pre></div>

<hr/>



#### for-each with unpacking

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

personT = (('John', 9978412287, 'A+'), ('Victor', 7852122123, 'O+'),
           ('Kelly', 8845454454, 'B-'), ('Sam', 7665415445, 'B+'),
           ('Jane', 7984546721, 'A-'))

print('Name       PhoneNumber   BloodGroup')
for name, phone, bGroup in personT:
    print(f'{name:10s} {phone:<12d} {bGroup:^10s}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Name       PhoneNumber   BloodGroup
John       9978412287       A+    
Victor     7852122123       O+    
Kelly      8845454454       B-    
Sam        7665415445       B+    
Jane       7984546721       A-    
</pre></div>

<hr/>


#### reversed(seq)

<p> Returns iterator from given sequence which iterates over items of sequence in reversed order. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ('Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips')

for flower in reversed(flowers):
    print(flower)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Tulips
Lavender
Rose
Jasmine
Lily
Lotus
</pre></div>

<hr/>


#### Iterating list using index

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ('Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips')

for i in range(len(flowers)):
    print(f'{i}. {flowers[i]}')

print('\nPrinting number starting with 1\n')

for i in range(len(flowers)):
    print(f'{i+1}. {flowers[i]}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0. Lotus
1. Lily
2. Jasmine
3. Rose
4. Lavender
5. Tulips

Printing number starting with 1

1. Lotus
2. Lily
3. Jasmine
4. Rose
5. Lavender
6. Tulips

</pre></div>

<hr/>



#### enumerate(iterable, start=0)

<div id="tut-content"> 
    <ul>
        <li> Returns in enumerate object which supports iterator protocol. </li>
        <li> When iterated returns tuple(count, element) where count begins from 'start' which is by default set to 0. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ('Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips')

for count, element in enumerate(flowers):
    print(f'{count}. {element}')


print('\nPrinting number starting with 1\n')

for count, element in enumerate(flowers, 1):
    print(f'{count}. {element}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0. Lotus
1. Lily
2. Jasmine
3. Rose
4. Lavender
5. Tulips

Printing number starting with 1

1. Lotus
2. Lily
3. Jasmine
4. Rose
5. Lavender
6. Tulips

</pre></div>

<hr/>



#### itertools.chain(*iterables)
<p> Returns an iterator which iterates over all items of multiple iterables one by one (Serially) in given order. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from itertools import chain

flowers = ('Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips')
moreFlowers = ('Calendula', 'Bougainvillea', 'Poeny', 'Dahlia')

for flower in chain(flowers, moreFlowers):
    print(flower)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Lotus
Lily
Jasmine
Rose
Lavender
Tulips
Calendula
Bougainvillea
Poeny
Dahlia
</pre></div>

<hr/>


#### zip(*iterables)

<div id="tut-content"> 
    <ul>
        <li> Iterates over multiple iterable in parallel using indexing. </li>
        <li> When different length of iterable is given, it stops when shortest iterable is finished. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ('Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips')
prices = (3, 5, 6, 3.5, 4, 3)

for flower, price in zip(flowers, prices):
    print(f'Price of {flower} is $ {price}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Price of Lotus is $ 3
Price of Lily is $ 5
Price of Jasmine is $ 6
Price of Rose is $ 3.5
Price of Lavender is $ 4
Price of Tulips is $ 3
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Aggregating elements </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

name = ('John', 'Victor', 'Kelly', 'Sam', 'Jane')
phone = (9978412287, 7852122123, 8845454454, 7665415445, 7984546721)
bGroup = ('A+', 'O+', 'B-', 'B+', 'A-')

personT = tuple(zip(name, phone, bGroup))

print(personT)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(('John', 9978412287, 'A+'), ('Victor', 7852122123, 'O+'), ('Kelly', 8845454454, 'B-'), ('Sam', 7665415445, 'B+'), ('Jane', 7984546721, 'A-'))
</pre></div>

<hr/>






### Functions

#### index(x)

<p> Returns the index of the element x in tuple object. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 4, 6, 11, 15, 19)
print(f't1 : {t1}')
print(f't1.index(11) : {t1.index(11)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 : (1, 4, 6, 11, 15, 19)
t1.index(11) : 3
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> If tuple object contains duplicate items, it returns index of first element. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 4, 6, 4, 11, 4, 15, 19)
print(f't1 : {t1}')
print(f't1.index(11) : {t1.index(4)}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 : (1, 4, 6, 4, 11, 4, 15, 19)
t1.index(11) : 1
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> If given element does not exists in tuple it will raise ValueError.  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 4, 6, 11, 15, 19)
print(f't1 : {t1}')
print(f't1.index(11) : {t1.index(16)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 : (1, 4, 6, 11, 15, 19)
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
ValueError: tuple.index(x): x not in tuple</pre></div>

<hr/>



#### count(x)

<p> Counts and returns the occurrences of element x in the Tuple. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 4, 6, 4, 11, 4, 15, 19)
print(f't1.count(4) : {t1.count(4)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1.count(4) : 3
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> If given element does not exists in tuple, it returns 0. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 4, 6, 4, 11, 4, 15, 19)
print(f't1.count(16) : {t1.count(16)}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1.count(16) : 0
</pre></div>

<hr/>


#### len(x)

<p> Returns number of elements inside the given tuple object. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 4, 6, 4, 11, 4, 15, 19)
print(f'len(t1) : {len(t1)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
len(t1) : 8
</pre></div>

<hr/>


### Membership operators

#### in
<p> Checks the given element exists inside the tuple object, if it exists returns True.  </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = tuple(range(1, 11))
print(t1)

print('1 in t1  :', 1 in t1)
print('15 in t1 :', 15 in t1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
1 in t1  : True
15 in t1 : False
</pre></div>

<hr/>




#### not in
<p> Checks the given element does not exists inside the tuple object, if it does not exists returns True.  </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = tuple(range(1, 11))
print(t1)

print('1 not in t1  :', 1 not in t1)
print('15 not in t1 :', 15 not in t1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
1 not in t1  : False
15 not in t1 : True
</pre></div>

<hr/>



### Operators

#### ' + '

<p> Returns new tuple object by concating elements of two tuple.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 2, 3)
t2 = (4, 5, 6)

t3 = t1 + t2

print(f't1 : {t1}  id(t1) : {id(t1)}')
print(f't2 : {t2}  id(t2) : {id(t2)}')
print(f't3 : {t3}  id(t3) : {id(t3)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 : (1, 2, 3)  id(t1) : 140531096670656
t2 : (4, 5, 6)  id(t2) : 140531066864000
t3 : (1, 2, 3, 4, 5, 6)  id(t3) : 140531093851680
</pre></div>

<hr/>


#### ' * '

<p> Returns new tuple object which repeats elements of tuple 'n' times. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, )
t2 = t1 * 10
print(f't1 : {t1}  id(t1) : {id(t1)}')
print(f't2 : {t2}  id(t2) : {id(t2)}')

t1 = (1, 2, 3)
t2 = t1 * 3
print(f't1 : {t1}  id(t1) : {id(t1)}')
print(f't2 : {t2}  id(t2) : {id(t2)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 : (1,)  id(t1) : 140531066796496
t2 : (1, 1, 1, 1, 1, 1, 1, 1, 1, 1)  id(t2) : 140531088755264
t1 : (1, 2, 3)  id(t1) : 140531096101696
t2 : (1, 2, 3, 1, 2, 3, 1, 2, 3)  id(t2) : 140531088612032
</pre></div>

<hr/>



### Builtin function on numeric tuple


#### min(iterable)

<p> Returns element which is having minimum value. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (12, 55, 48, 24, 87, 76, 34, 65)
print('Minimum : ', min(t1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Minimum :  12
</pre></div>

<hr/>




#### max(iterable)

<p> Returns element which is having maximum value. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (12, 55, 48, 24, 87, 76, 34, 65)
print('Maximum :', max(t1))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Maximum : 87
</pre></div>

<hr/>



#### sum(iterable)

<p> Returns sum of each numeric values inside given iterable. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (12, 55, 48, 24, 87, 76, 34, 65)
print('Sum :', sum(t1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Sum : 401
</pre></div>

<hr/>


#### sorted(iterable, key, reverse)

<p> sorts elements of Tuple in ascending order and returns list.</p>

<div id="tut-content"> 
    <ul>
        <li> <strong>key : </strong> By default set to None will sort list in default order defined by class. If given key as callable it will sort list based on value returned by given callable. </li>
        <li> <strong>reverse : </strong> By default set to False will sort in ascending order. If given True it will sort list in descending order. </li>
    </ul> 
</div>

{% include callout.html content="**Note** : sorted() works same way as sort() function of list, it has same semantics for 'key' and 'reverse' argument. For more examples and detailed explanation of 'key' and 'reverse' argument check sort() method of list." type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (12, 55, 48, 24, 87, 76, 34, 65)
print('original :', t1)
print('sorted   :', sorted(t1))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
original : (12, 55, 48, 24, 87, 76, 34, 65)
sorted   : [12, 24, 34, 48, 55, 65, 76, 87]
</pre></div>

<hr/>


#### any(iterable)

<p> Returns True if any if any item is evaluated as Boolean equivalent to True. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (12, 55, 48, 24, 87, 76, 34, 65)
t2 = (0, 0, 0, 0, 0, 0)
print('any(t1) :', any(t1))
print('any(t2) :', any(t2))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
any(t1) : True
any(t2) : False
</pre></div>

<hr/>


#### all(iterable)

<p> Returns True if any if all item is evaluated as Boolean equivalent to True. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (12, 55, 48, 24, 87, 76, 34, 65)
t2 = (12, 55, 0, 24, 87, 76, 34, 65)

print('all(t1) :', all(t1))
print('all(t2) :', all(t2))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
all(t1) : True
all(t2) : False
</pre></div>

<hr/>



### Tuple with immutable data

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 2, 3)
t2 = (1, 2, 3)

print('t1 == t2 :', t1 == t2)
print('t1 is t2 :', t1 is t2)
print(f'id(t1) : {id(t1)}  \nid(t2) : {id(t2)}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 == t2 : True
t1 is t2 : True
id(t1) : 139941349736896  
id(t2) : 139941349736896

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Creating alias for tuple </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 2, 3)
t2 = t1

print('t1 == t2 :', t1 == t2)
print('t1 is t2 :', t1 is t2)
print(f'id(t1) : {id(t1)}  \nid(t2) : {id(t2)}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 == t2 : True
t1 is t2 : True
id(t1) : 139941387023232  
id(t2) : 139941387023232
</pre></div>

<hr/>



### Tuple with mutable data

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 2, [3, 4])
t2 = (1, 2, [3, 4])

print('t1 == t2 :', t1 == t2)
print('t1 is t2 :', t1 is t2)
print(f'id(t1) : {id(t1)}  \nid(t2) : {id(t2)}')

# Modifying mutable element of tuple
t1[2].append(5)

print('After t1[2].append(5)')
print(f't1 : {t1}')
print(f't2 : {t2}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 == t2 : True
t1 is t2 :<div id="tut-highlight"> False </div>
id(t1) : 139941349736896  
id(t2) : 139941349706752
After t1[2].append(5)
t1 : (1, 2, [3, 4, 5])
t2 : (1, 2, [3, 4])
</pre></div>

<hr/>


### Comparision Operators

#### == and !=

<p> </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> == : </strong> Compares Values of two tuples. If both tuples contains same values it returns True.</li>
        <li> <strong> != : </strong>  Compares Values of two tuples. If both tuples does not contains same values it returns True.</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 2, 3)
t2 = (1, 2, [3])
t3 = (1, 2, [3])

print('t1 == t2 :', t1 == t2)
print('t2 == t3 :', t2 == t3)

print('t1 != t2 :', t1 != t2)
print('t2 != t3 :', t2 != t3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 == t2 : False
t2 == t3 : True
t1 != t2 : True
t2 != t3 : False

</pre></div>

<hr/>


#### is 

<p> An identity operator compares origin (memory address : id(obj)) of given two tuples :</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, 2, 3)
t2 = (1, 2, [3])
t3 = (1, 2, [3])
t4 = (1, 2, 3)

print('t1 is t2 :', t1 is t2)
print('t2 is t3 :', t2 is t3)
print('t1 is t4 :', t1 is t4)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 is t2 : False
t2 is t3 : False
t1 is t4 : True
</pre></div>

<hr/>


#### <, >, <= , >=

<p> Compares each element values recursively. </p>

Operator  | Meaning
:--- | :---
< | Less than
> | Greater than
<= | Less than or equal
>= | Greater than or euqal


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

t1 = (1, (1, 2, 3), 3)
t2 = (1, (1, 2, 4), 3)

print('t1 > t2  :', t1 > t2)
print('t1 < t2  :', t1 < t2)
print('t1 <= t2 :', t1 <= t2)
print('t1 >= t2 :', t1 >= t2)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
t1 > t2  : False
t1 < t2  : True
t1 <= t2 : True
t1 >= t2 : False
</pre></div>

<hr/>




## NamedTuple

<div id="tut-content"> 
    <ul>
        <li> <strong> namedtuple : </strong> Contains immutable named data. </li>
    </ul> 
</div>


### Constructor

<p id="tut-cons"> namedtuple(typename, field_names, *, rename=False, defaults=None, module=None) </p>

<p>Returns new subclass of tuple class with given typename. Returned subclass is used for creating object of named tuple which allows access of elements by field name in addition of indexed access. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>field_names : </strong> Defines field name for each indexed element. It can be defined in string which contains field name separated by ',' comma.  It can also be given as sequence (list or tuple) of string.</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import namedtuple

Person = namedtuple('Person', 'name,phone,bGroup')
# Or
Person = namedtuple('Person', ['name', 'phone', 'bGroup'])
# Or
Person = namedtuple('Person', ('name', 'phone', 'bGroup'))

#
print(f'Is Person subclass of tuple ? : {issubclass(Person, tuple)}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is Person subclass of tuple ? : True
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong> rename : </strong> If given True replaces invalid field names with _index. For example ('a1', '2a', '3a') will be converted to ('a1', '_1', '_2') because '2a' and '3a' are invalid identifiers. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import namedtuple

Alpha1 = namedtuple('Alpha1', ('a1', '2a', '3a'), rename=True)

a1 = Alpha1(1, 2, 3)
print(a1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Alpha1(a1=1, _1=2, _2=3)
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong> defaults :  </strong> If defined must be iterable which contains default values for fields. If less number of default values are given compare to number of fields, fields from the beginning becomes required fields for creating an object of named tuple. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import namedtuple


Point = namedtuple('Point', ('x', 'y', 'color'), defaults=('Black',))

p1 = Point(12, 25, 'Red')
p2 = Point(16, 29)

print(f'P1 : {p1}')
print(f'P2 : {p2}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
P1 : Point(x=12, y=25, color='Red')
P2 : Point(x=16, y=29, color='Black')
</pre></div>

<hr/>



### Accessing elements by field name

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import namedtuple

Person = namedtuple('Person', ('name', 'phone', 'bGroup'))


p1 = Person('Jhon', 9978412287, 'A+')

print(p1)
print(f'Name         : {p1.name}')
print(f'Phone Number : {p1.phone}')
print(f'Blood Group  : {p1.bGroup}')

print('\nAccessing same elements using indexes :')

print(f'Name         : {p1[0]}')
print(f'Phone Number : {p1[1]}')
print(f'Blood Group  : {p1[2]}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Person(name='Jhon', phone=9978412287, bGroup='A+')
Name         : Jhon
Phone Number : 9978412287
Blood Group  : A+

Accessing same elements using indexes :
Name         : Jhon
Phone Number : 9978412287
Blood Group  : A+
</pre></div>

<hr/>


### Tuple of namedtuple(s) 

{% include callout.html content="**Note** : Returned class by namedtuple constructor is subclass of tuple class, so all functionality we saw for tuple object are inherited for namedtuple." type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import namedtuple

Person = namedtuple('Person', ('name', 'phone', 'bGroup'))
p2 = Person('Victor', 7852122123, 'O+')
p3 = Person('Kelly', 8845454454, 'A-')
p4 = Person('Sam', 7665415445, 'B+')
p5 = Person('Jane', 9978412287, 'A+')

personT = (p1, p2, p3, p4, p5)

print('Name     Phone Number   Blood Group')

for person in personT:
    print(f'{person.name:8s}  {person.phone:10}    {person.bGroup:^10}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Name     Phone Number   Blood Group
Jhon      9978412287        A+    
Victor    7852122123        O+    
Kelly     8845454454        A-    
Sam       7665415445        B+    
Jane      9978412287        A+    
</pre></div>

<hr/>



### Attributes

#### _fields

<p> Returns tuple containing names of fields </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import namedtuple

Person = namedtuple('Person', ('name', 'phone', 'bGroup'))
print(f'Fields : {Person._fields}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Fields : ('name', 'phone', 'bGroup')
</pre></div>

<hr/>



#### _field_defaults

<p> Returns dictionary containing field_name as key and it's default value as value. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import namedtuple

Point = namedtuple('Point', ('x', 'y', 'color'), defaults=('Black',))
print(f'field defaults : {Point._field_defaults}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
field defaults : {'color': 'Black'}
</pre></div>

<hr/>


### Functions

#### _make(iterable)

<p> Creates namedtuple object from iterable </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import namedtuple

Person = namedtuple('Person', ('name', 'phone', 'bGroup'))
person1 = ('Victor', 7852122123, 'O+')
p1 = Person._make(person1)
print(f'Name : {p1.name}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Name : Victor
</pre></div>

<hr/>


#### _asdict() 

<p> Returns dictionary constructed from namedtuple. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import namedtuple

Person = namedtuple('Person', ('name', 'phone', 'bGroup'))
p2 = Person('Victor', 7852122123, 'O+')
dict1 = p1._asdict()
print(f'Dictionary : {dict1} ')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Dictionary : {'name': 'Victor', 'phone': 7852122123, 'bGroup': 'O+'}
</pre></div>

<hr/>



#### _replace(**kwargs)

<p> Form existing namedtuple object returns new tuple object by replacing values provided as keyword arguments. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import namedtuple

Point = namedtuple('Point', ('x', 'y', 'color'))
p1 = Point(12, 25, 'Red')

p2 = p1._replace(x=18, y=11)

print(f'P1 : {p1}  \nP2 : {p2}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
P1 : Point(x=12, y=25, color='Red')  
P2 : Point(x=18, y=11,<div id='tut-highlight'> color='Red'</div>)
</pre></div>

<hr/>


### Sorting

<p> Sorted() function works same as explained earlier, difference here is we can use field name to sort.
Instead of defining  user defined function for sorting (lambda params : returnValues)  function is used, it is explained in details in functional programming section.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}
from collections import namedtuple

Person = namedtuple('Person', 'name, age, income, gender')

p1 = Person('Bob', 29, 50_000, 'Male')
p2 = Person('Kelly', 22, 70_000, 'Female')
p3 = Person('Pamela', 36, 65_000, 'Female')
p4 = Person('Andy', 45, 75_000, 'Male')

personDB = [p1, p2, p3, p4]


def print_persons(persons):
    print('Name     Age    Income     Gender ')
    print('----------------------------------')

    for p in persons:
        print(f'{p.name:8} {p.age:^5} {p.income:^10} {p.gender:^8}')


print('Default Sort [Sort by Name] :\n')
print_persons(sorted(personDB))

print('\nSorted by Age :\n')
print_persons(sorted(personDB, key=lambda p: p.age))

print('\nSorted by income in descending order :\n')
print_persons(sorted(personDB, key=lambda p: p.income, reverse=True))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Default Sort [Sort by Name] :

Name     Age    Income     Gender 
----------------------------------
Andy      45     75000      Male  
Bob       29     50000      Male  
Kelly     22     70000     Female 
Pamela    36     65000     Female 

Sorted by Age :

Name     Age    Income     Gender 
----------------------------------
Kelly     22     70000     Female 
Bob       29     50000      Male  
Pamela    36     65000     Female 
Andy      45     75000      Male  

Sorted by income in descending order :

Name     Age    Income     Gender 
----------------------------------
Andy      45     75000      Male  
Kelly     22     70000     Female 
Pamela    36     65000     Female 
Bob       29     50000      Male  

</pre></div>

<hr/>




{% include links.html %}
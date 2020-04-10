---
title: Tuple
layout: tutorial
tags: []
sidebar: python_sidebar
permalink: python_tuple.html
folder: python
prev_section: 
prev_section_title: 
prev: python_list.html
prev_title: List
next: 
next_title: 
next_section: 
next_section_title: 
summary: tuple constructor, indexing, slicing, iterating, functions of tuple object.
---

## Tuple

<div id="tut-content"> 
    <ul>
        <li> <strong>Immutable Data type.</strong> </li>
        <li> <strong>Ordered and indexed sequence.</strong> </li>
        <li> <strong>It can contain duplicates.</strong> </li>
        <li> <strong>Hashable data structure.</strong> </li>
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
print(t1)

# or

t1 = tuple()
print(t1)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
()
()
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



{% include links.html %}
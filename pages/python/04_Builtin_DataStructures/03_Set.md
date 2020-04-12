---
title: Set
layout: tutorial
tags: []
sidebar: python_sidebar
permalink: python_set.html
folder: python
prev_section: 
prev_section_title: 
prev: python_tuple_namedtuple.html
prev_title: Tuple and NamedTuple
next: 
next_title: 
next_section: 
next_section_title: 
summary: Set  constructor methods, operators.
---

## Set

<div id="tut-content"> 
    <ul>
        <li> <strong>Mutable collection of Hashable.</strong> </li>
        <li> <strong>Elements are un-ordered.</strong> </li>
        <li> <strong>Contains unique elements only.</strong> </li>
    </ul> 
</div>



### Constructor

<p id='tut-cons'>set(iterable) </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

vSet = set()
print(f'vSet : {vSet}  Type : {type(vSet)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
vSet : set()  Type : <class 'set'>
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Creating set with values</strong> </li>
    </ul> 
</div>

<p> In set(Iterable) constructor iterable can be list, set or any object which supports iterator protocol. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
print(f'flowerSet : {flowerSet}  Type : {type(vSet)}')

# OR

flowerSet = set(('Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'))
print(f'flowerSet : {flowerSet}  Type : {type(vSet)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowerSet : {'Rose', 'Tulips', 'Jasmine', 'Lotus', 'Lavender', 'Lily'}  Type : <class 'set'>
flowerSet : {'Rose', 'Tulips', 'Jasmine', 'Lotus', 'Lavender', 'Lily'}  Type : <class 'set'>
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Creating set with generator function</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

intSet = set(range(1, 11))
print(intSet)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> All Elements of set must be hashable, else it will raise TypeError :  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {['Lotus', 'Lily'], ['Jasmine', 'Rose'], ['Lavender', 'Tulips']}

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 1, in <&zwj;module&zwj;>
TypeError: unhashable type: 'list'</pre></div>

<hr/>


### Built-in Hashable and Non-Hashable classes

<p> Built-in immutable data types are Hashable and mutable data types are non-hashable. </p>


Hashable | Non-Hashable
:--- | :---
Integer                  |    ByteString
Float                    |    List
String                   |    Dictionary
Bytes                    |    set
Boolean                  |    Deque
Tuple(with immutables)   |    Tuple(with mutables) 
date                     |    array
time                     |
datetime                 |
Decimal                  |
Fraction                 |
Enum                     |
frozenset                |


<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong>Example</strong> </li>
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
from enum import Enum

s1 = {1, 1.25, 'Hello Set', b'Hello World', True, (1, 2, 3)}
print(f's1 : {s1}')


from datetime import datetime, date, time
s2 = {date(2020, 4, 13), time(15, 45, 55), datetime(2020, 4, 13, 15, 45, 55)}
print(f's2 : {s2}')


s3 = {Decimal('12.50'), Fraction(1, 8), Enum('Plan', 'DIAMOND PLATINUM GOLD SILVER'), frozenset((1, 2, 4))}
print(f's3 : {s3}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
s1 : {1, 1.25, 'Hello Set', (1, 2, 3), b'Hello World'}
s2 : {datetime.time(15, 45, 55), datetime.date(2020, 4, 13), datetime.datetime(2020, 4, 13, 15, 45, 55)}
s3 : {Fraction(1, 8), <enum 'Plan'>, Decimal('12.50'), frozenset({1, 2, 4})}

</pre></div>

<hr/>

### Iterating through elements

#### for-each

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}

for flower in flowerSet:
    print(flower)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Tulips
Lily
Lotus
Rose
Jasmine
Lavender
</pre></div>

<hr/>


#### enumerate(iterable, start=0)

<div id="tut-content"> 
    <ul>
        <li> Returns enumerate object which supports iterator protocol. </li>
        <li> When iterated returns tuple(count, element) where count begins from 'start' which is by default set to 0. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}

for i, flower in enumerate(flowerSet):
    print(f'{i}. {flower}')

print('\nEnumerate with start = 1\n')

for i, flower in enumerate(flowerSet, start=1):
    print(f'{i}. {flower}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0. Tulips
1. Lily
2. Lotus
3. Rose
4. Jasmine
5. Lavender

Enumerate with start = 1

1. Tulips
2. Lily
3. Lotus
4. Rose
5. Jasmine
6. Lavender
</pre></div>

<hr/>


### Functions 

#### len(iterable)

<p> Returns number of elements inside set. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}

print('Length : ', len(flowerSet))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Length :  6
</pre></div>

<hr/>


#### add(e)

<p> Adds a hashable element 'e' to the set. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}

print('Before :', flowerSet)
flowerSet.add('Orchids')
print('After  :', flowerSet)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'Rose', 'Tulips', 'Jasmine', 'Lotus', 'Lavender', 'Lily'}
After  : {'Rose', 'Tulips', 'Jasmine', 'Lotus', 'Orchids', 'Lavender', 'Lily'}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Adding duplicate element :</strong> While adding a hashable element to set, if that element already exists in set it will not be added, instead it will ignored.</li>
    </ul> 
</div>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
print('Before :', flowerSet)
flowerSet.add('Lily')
print('After  :', flowerSet)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'Rose', 'Tulips', 'Jasmine', 'Lotus', 'Lavender', 'Lily'}
After  : {'Rose', 'Tulips', 'Jasmine', 'Lotus', 'Lavender', 'Lily'}
</pre></div>

<hr/>



#### remove(e)

<p> Removes an element from the set. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}

print('Before :', flowerSet)
flowerSet.remove('Lotus')
print('After  :', flowerSet)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'Rose', 'Tulips', 'Jasmine', 'Lotus', 'Lavender', 'Lily'}
After  : {'Rose', 'Tulips', 'Jasmine', 'Lavender', 'Lily'}
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> If given element does not exists in set it will raise KeyError </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
flowerSet.remove('Peony')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 2, in <&zwj;module&zwj;>
KeyError: 'Peony'</pre>
</div>

<hr/>



#### discard(e)

<p> Removes an element from the set , if element is not present it does not throw KeyError. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}

print("Before discard('Jasmine') :", flowerSet)
flowerSet.discard('Jasmine')
print("After  discard('Jasmine') :", flowerSet)
print("Before discard('Peony')   :", flowerSet)
flowerSet.discard('Peony')
print("After  discard('Peony')   :", flowerSet)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before discard('Jasmine') : {'Rose', 'Tulips', 'Jasmine', 'Lotus', 'Lavender', 'Lily'}
After  discard('Jasmine') : {'Rose', 'Tulips', 'Lotus', 'Lavender', 'Lily'}
Before discard('Peony')   : {'Rose', 'Tulips', 'Lotus', 'Lavender', 'Lily'}
After  discard('Peony')   : {'Rose', 'Tulips', 'Lotus', 'Lavender', 'Lily'}
</pre></div>

<hr/>


#### pop()

<p> Removes and returns arbitrary element from the set. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
print('Before pop : ', flowerSet)
print('Popped     : {flowerSet.pop()}')
print('After  pop : ', flowerSet)

print('\nBefore pop : ', flowerSet)
print('Popped     : {flowerSet.pop()}')
print('After  pop : ', flowerSet)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before pop :  {'Tulips', 'Lily', 'Lotus', 'Rose', 'Jasmine', 'Lavender'}
Popped     : {flowerSet.pop()}
After  pop :  {'Tulips', 'Lily', 'Lotus', 'Rose', 'Jasmine', 'Lavender'}

Before pop :  {'Tulips', 'Lily', 'Lotus', 'Rose', 'Jasmine', 'Lavender'}
Popped     : {flowerSet.pop()}
After  pop :  {'Tulips', 'Lily', 'Lotus', 'Rose', 'Jasmine', 'Lavender'}

</pre></div>

<hr/>



#### clear()

<p> Removes all elements from the set. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}

print('Before clear() : ', flowerSet)
flowerSet.clear()
print('After  clear() : ', flowerSet)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before clear() :  {'Tulips', 'Lily', 'Lotus', 'Rose', 'Jasmine', 'Lavender'}
After  clear() :  set()
</pre></div>

<hr/>



#### update(iterable)

<p> Adds elements from supplied set to given iterable of hashable. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
moreFlowers = ('Calendula', 'Bougainvillea', 'Peony', 'Dahlia')


print(f'Before update : \n flowerset : {flowerSet} \n moreFlowers : {moreFlowers}')
flowerSet.update(moreFlowers)
print('flowerset After update() : ', flowerSet)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before update : 
 flowerset : {'Tulips', 'Lily', 'Lotus', 'Rose', 'Jasmine', 'Lavender'} 
 moreFlowers : ('Calendula', 'Bougainvillea', 'Peony', 'Dahlia')
flowerset After update() :  {'Tulips', 'Lily', 'Peony', 'Dahlia', 'Lotus', 'Rose', 'Jasmine', 'Calendula', 'Bougainvillea', 'Lavender'}
</pre></div>

<hr/>




#### intersection_update(iterable)

<p> Retains only elements which are common to set and given  iterable of hashable. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
flowers2 = ('Tulips', 'Calendula', 'Bougainvillea', 'Lily', 'Peony', 'Dahlia')

print(f'Before intersection_update() : \nflowerset : {flowerSet} \nflowers2 : {flowers2}')
flowerSet.intersection_update(flowers2)
print('flowerset After intersection_update() : ', flowerSet)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before intersection_update() : 
flowerset : {'Tulips', 'Lily', 'Lotus', 'Rose', 'Jasmine', 'Lavender'} 
flowers2 : ('Tulips', 'Calendula', 'Bougainvillea', 'Lily', 'Peony', 'Dahlia')
flowerset After intersection_update() :  {'Tulips', 'Lily'}
</pre></div>

<hr/>





#### difference_update(iterable)

<p> Removes common element to set and given iterable. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
flowers2 = ('Tulips', 'Calendula', 'Bougainvillea', 'Lily', 'Peony', 'Dahlia')

print(f'Before difference_update() : \nflowerset : {flowerSet} \nflowers2 : {flowers2}')
flowerSet.difference_update(flowers2)
print('flowerSet After difference_update() : ', flowerSet)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before difference_update() : 
flowerset : {'Tulips', 'Lily', 'Lotus', 'Rose', 'Jasmine', 'Lavender'} 
flowers2 : ('Tulips', 'Calendula', 'Bougainvillea', 'Lily', 'Peony', 'Dahlia')
flowerSet After difference_update() :  {'Lotus', 'Rose', 'Jasmine', 'Lavender'}

</pre></div>

<hr/>







#### symmetric_difference_update(iterable)

<p> Retains uncommon elements between set and given iterable. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
flowers2 = ('Tulips', 'Calendula', 'Bougainvillea', 'Lily', 'Peony', 'Dahlia')

print(f'Before symmetric_difference_update() : \nflowerset : {flowerSet} \nflowers2 : {flowers2}')
flowerSet.symmetric_difference_update(flowers2)
print('flowerSet After symmetric_difference_update() : ', flowerSet)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before symmetric_difference_update() : 
flowerset : {'Tulips', 'Lily', 'Lotus', 'Rose', 'Jasmine', 'Lavender'} 
flowers2 : ('Tulips', 'Calendula', 'Bougainvillea', 'Lily', 'Peony', 'Dahlia')
flowerSet After symmetric_difference_update() :  {'Dahlia', 'Lotus', 'Rose', 'Jasmine', 'Peony', 'Calendula', 'Bougainvillea', 'Lavender'}

</pre></div>

<hr/>




#### issuperset(set)

<p> Checks given set is super-set of supplied set, returns True if it is.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet1 = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
flowerSet2 = {'Lily', 'Tulips'}

print(flowerSet1.issuperset(flowerSet2))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
True
</pre></div>

<hr/>




#### issubset(set)

<p> Checks given set is subset of supplied set, returns True if it is.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowerSet1 = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
flowerSet2 = {'Lily', 'Tulips'}
print(flowerSet2.issubset(flowerSet1))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
True
</pre></div>

<hr/>


### Operators

operator | meaning
---- | :---
  \|      | Union
  &       | Intersection
  -       | Difference
  ^       | symmetry
  >=      | superset
  <=      | subset


<p> Returns a new set which holds result of operation on given two sets </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

set1 = {'Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'}
set2 = {'Tulips', 'Calendula', 'Bougainvillea', 'Lily', 'Peony', 'Dahlia'}

print(f'set1 : {set1} \nset2 : {set2}')
print(f'\nUnion : {set1 | set2}\n')
print(f'\nIntersection : {set1 & set2}\n')
print(f'\nDifference : {set1 - set2}\n')
print(f'\nsuperset : {set1  >= set2}\n')
print(f'\nsubset : {set1  <= set2}\n')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
set1 : {'Tulips', 'Lily', 'Lotus', 'Rose', 'Jasmine', 'Lavender'} 
set2 : {'Tulips', 'Lily', 'Dahlia', 'Peony', 'Calendula', 'Bougainvillea'}

Union : {'Tulips', 'Lily', 'Dahlia', 'Lotus', 'Rose', 'Jasmine', 'Peony', 'Calendula', 'Bougainvillea', 'Lavender'}


Intersection : {'Tulips', 'Lily'}


Difference : {'Lavender', 'Rose', 'Jasmine', 'Lotus'}


superset : False


subset : False
</pre></div>

<hr/>



### set comprehension

<p id="tut-cons"> <strong> Syntax : </strong> [expr for item in iterator [if expr] ] </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

intSet = {i for i in range(1, 11)}
print(intSet)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Filtering numeric string </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

l1 = ['5a', '68', '89', '5D', '7Z', '53', 'T9', '48']

numSet = {i for i in l1 if i.isnumeric()}
print(numSet)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{'68', '53', '48', '89'}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Extracting unique set words used in given book </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def get_words():
    """
    :return: list of words in Alice in Wounder land book
    """
    file = open(r'./04_Builtin_DataStructures/Docs/AliceInWonderland.txt', 'r')
    result = []
    for line in file:
        result += line.split(' ')
    file.close()
    return result


# constructing set of words used in  book

aliceWords = {word for word in get_words()}
print(aliceWords)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
It's sunny outside.
Quoting inside "Double quotes".
</pre></div>

<hr/>


{% include links.html %}
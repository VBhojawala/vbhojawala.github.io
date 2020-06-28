---
title: List
layout: tutorial
tags: [slice, indexing, slicing, len(), in, not_in, for-each, reversed(), enumerate(), chain(), zip(), unpacking, 2d_list, 3d_list, list_comprehension, filtering, append(), insert(), remove(), count(), extend(), pop(), index(), sort(), copy(), deepcopy(), reverse(), clear(), join(), split(), List_Operators, builtin_functions, min(), max(), sum(), sorted(), any(), all(), bisect, bisect_left(), bisect_right(), insort_left(), insort_right(), bytes, stack, queue]
sidebar: python_sidebar
permalink: python_list.html
folder: python
prev_section: python_functions.html
prev_section_title: Functions
prev: 
prev_title: 
next: python_tuple_namedtuple.html
next_title: Tuple and NamedTuple
next_section: 
next_section_title: 
summary: List constructor, indexing, slicing, iterating, unpacking, functions of list object, list operators, builtin functions, list as stack and queue.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/J7pj1-xcO1o" allowfullscreen></iframe>
</div> <br/>

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KrPOCt5_akM" allowfullscreen></iframe>
</div> <hr/>

## List

<div id="tut-content"> 
    <ul>
        <li> <strong>Mutable Data type</strong> </li>
        <li> <strong>Indexed</strong> </li>
        <li> <strong>Can have duplicate values</strong> </li>
    </ul> 
</div>


### Storing group of values in multiple variables


<div id="tut-content"> 
    <ul>
        <li> <strong>Example : </strong> Showing catalogue for flower shop</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flower1 = 'Lotus'
flower2 = 'Lily'
flower3 = 'Jasmine'
flower4 = 'Rose'
flower5 = 'Lavender'
flower6 = 'Jasmine'

print('Welcome to flower shop,')
print('Following are the list of flower available for orders :')

print('1. ', flower1)
print('2. ', flower2)
print('3. ', flower3)
print('4. ', flower4)
print('5. ', flower5)
print('6. ', flower6)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Welcome to flower shop,
Following are the list of flower available for orders :
1. Lotus
2. Lily
3. Jasmine
4. Rose
5. Lavender
6. Jasmine
</pre></div>

<hr/>


### List Constructor

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers1 = []
print(flowers1)
# Or
flowers1 = list()
print(flowers1)


# Creating list with elements
flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print(flowers)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[]
[]
['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
</pre></div>

<hr/>


### List with initial size


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# Initializing list with n None elements
numList = [None] * 20
print(numList)

# Initialize list with default value for n elements
numList = [0] * 20
print(numList)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None, None]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
</pre></div>

<hr/>



### Indexing

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

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

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

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




<div id="tut-content"> 
    <ul>
        <li> Accessing Index out of range will raise an IndexError. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print(flowers[6])  # Raises an Exception


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
IndexError: list index out of range</pre></div>

<hr/>


### Changing value stored at index

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print('Flower at index 5 -> ', flowers[5], id(flowers[5]))
flowers[5] = 'Aster'
print('After changing ...')
print('Flower at index 5 -> ', flowers[5], id(flowers[5]))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Flower at index 5 ->  Tulips 139935278588528
After changing ...
Flower at index 5 ->  Aster 139935278628208
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

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print(flowers)
print('flowers[2:4]      :', flowers[2:4])
print('flowers[1::2]     :', flowers[1::2])
print('flowers[4:1:-1]   :', flowers[4:1:-1])
print('flowers[-1:-4:-1] :', flowers[-1:-4:-1])

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers[2:4]      : ['Jasmine', 'Rose']
flowers[1::2]     : ['Lily', 'Rose', 'Tulips']
flowers[4:1:-1]   : ['Lavender', 'Rose', 'Jasmine']
flowers[-1:-4:-1] : ['Tulips', 'Lavender', 'Rose']
</pre></div>

<hr/>


### Changing slice of list

<div id="tut-content"> 
    <ul>
        <li> When slice of list is assigned with equal length list it replaces elements selected by slice with assigned list. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print(flowers, id(flowers))
flowers[1:3] = ['Aster', 'Calendula']
print(flowers, id(flowers))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'] 139935314214464
['Lotus', 'Aster', 'Calendula', 'Rose', 'Lavender', 'Tulips'] 139935314214464
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Assigning non equal length of list to slice will result in ValueError </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print(flowers)
flowers[1::2] = ['Aster', 'Calendula']
print(flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 4, in <&zwj;module&zwj;>
ValueError: attempt to assign sequence of size 2 to extended slice of size 3</pre></div>

<hr/>



### len(list)
<p> Returns number of elements in the list. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
print('Length of flowers list is -> ', len(flowers))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Length of flowers list is ->  6
</pre></div>

<hr/>


### Membership operators

#### in

<p> Returns True if given element exists inside the list. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

if 'Rose' in flowers:
    print('Rose is already in the flowers list.')
else:
    print('oh! we forgot to add Rose to the flowers list')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Rose is already in the flowers list.
</pre></div>

<hr/>




#### not in

<p> Returns True if given element does not exists inside the list. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

if 'Aster' not in flowers:
    print('Please don\'t forget to bring Aster.')
else:
    print('oh, We already have Aster.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Please don't forget to bring Aster.
</pre></div>

<hr/>


### Iterating through list (foreach)

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

for flower in flowers:
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
</pre></div>

<hr/>


### reversed(seq)

<p> Returns iterator from given sequence which iterates over items of sequence in reversed order. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

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


### empty list and comparision

<p> Empty list is evaluated to False. else part of if or for loop gets executed when given list is empty. </p>

#### if-else

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowersE = []

if flowersE:
    print('Non empty list')
else:
    print('Empty List.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Empty List.
</pre></div>

<hr/>


#### for-else

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowersE = []

for flower in flowersE:
    print('flower found and processing it...... ')
else:
    print('Flower list is empty!')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Flower list is empty!
</pre></div>

<hr/>



### Iterating list using index

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

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



### enumerate(iterable, start=0)

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

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

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



### iterating multiple list serially


#### itertools.chain(*iterables)
<p> Returns an iterator which iterates over all items of multiple iterables one by one in given order. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from itertools import chain

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
moreFlowers = ['Calendula', 'Bougainvillea', 'Poeny', 'Dahlia']

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


### iterating through multiple list in parallel

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

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
prices = [3, 5, 6, 3.5, 4, 3]

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
        <li> <strong> Creating list of combined value from multiple iterators </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
prices = [3, 5, 6, 3.5, 4, 3]

fc = list(zip(flowers, prices))
print(fc)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[('Lotus', 3), ('Lily', 5), ('Jasmine', 6), ('Rose', 3.5), ('Lavender', 4), ('Tulips', 3)]
</pre></div>

<hr/>


### List with elements of different types 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

storageUnit = [15421, 1244.00, 'Strings', True]

for item in storageUnit:
    print(f'{item} : {type(item)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
15421 : <class 'int'>
1244.0 : <class 'float'>
Strings : <class 'str'>
True : <class 'bool'>
</pre></div>

<hr/>



### Unpack list to variables

<div id="tut-content"> 
    <ul>
        <li> Unpacking list to number of variables equal to length of list </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

storageUnit = [15421, 1244.00, 'Strings', True]

intVal, fVal, strVal, boolVal = storageUnit
print(intVal, fVal, strVal, boolVal)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
15421 1244.0 Strings True
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> If we don't assign equal number of variables to the length of list, it will raise ValueError </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

storageUnit = [15421, 1244.00, 'Strings', True]

var1, var2, var3 = storageUnit  # Will raise ValueError


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
ValueError: too many values to unpack (expected 3)</pre></div>

<hr/>


### Unpacking selected values from list

<div id="tut-content"> 
    <ul>
        <li> <strong>Extracting Values from the beginning of list</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# Sorted marks
marks = [97, 91, 84, 78, 71, 66, 65, 59, 55, 54, 45, 35]

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
        <li> <strong>Extracting Values from the end of list</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

marks = [97, 91, 84, 78, 71, 66, 65, 59, 55, 54, 45, 35]

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
        <li> <strong>Extracting Values from the beginning and end of list</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

marks = [97, 91, 84, 78, 71, 66, 65, 59, 55, 54, 45, 35]

high, *rest, low = marks
print(f'highest : {high}  lowest : {low}  rest : {rest}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
highest : 97  lowest : 35  rest : [91, 84, 78, 71, 66, 65, 59, 55, 54, 45]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Stared variable always assigned list of values, even if single element in stared variable it will return list. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

num = [1, 2, 3]
a, b, *c = num
print(c)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[3]
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Stared variable returns empty list if no elements matched. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

num = [1, 2, 3]
a, b, c, *d = num
print(d)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[]
</pre></div>

<hr/>


### Unpacking list as arguments of functions

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def print_todolist(arg1, arg2, arg3):
    print(f'Arg1: {arg1}  Arg2: {arg2} Arg3: {arg3}')


todoList = ['Learn Python', 'Practice HandsOn', 'Work on live project']

print_todolist(*todoList)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Arg1: Learn Python  Arg2: Practice HandsOn Arg3: Work on live project
</pre></div>

<hr/>



### 2D lists (Nested list)

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

mat1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(mat1)

# Accessing an indexed element
print('mat1[0][2] :', mat1[0][2])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
mat1[0][2] : 3
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> 2D list where each inner list holds data for a person </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

persons = [['John', 9978412287, 'A+'], ['Victor', 7852122123, 'O+'],
           ['Kelly', 8845454454, 'B-'], ['Sam', 7665415445, 'B+'],
           ['Jane', 7984546721, 'A-']]

print(persons)
print('\nPerson at index 2 :', persons[2])
print('Person at index 4 :', persons[4])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[['John', 9978412287, 'A+'], ['Victor', 7852122123, 'O+'], ['Kelly', 8845454454, 'B-'], ['Sam', 7665415445, 'B+'], ['Jane', 7984546721, 'A-']]

Person at index 2 : ['Kelly', 8845454454, 'B-']
Person at index 4 : ['Jane', 7984546721, 'A-']
</pre></div>

<hr/>



### 3D lists

<p> In Python list each elements holds pointer to an object in memory. Depending on the type of object we can index it further. When index is accessed object at stored memory address is accessed, when chaining indexing next index is invoked on returned object.  </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>3D list with variable dimensions</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

mat2 = [[1, [2, 3, 4], 3], [4, 5, 6], [7, 8, 9]]
print('mat2[0][1][2] : ', mat2[0][1][2])

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
mat2[0][1][2] :  4
</pre></div>

<hr/>



### List Comprehension

<p> Performs faster than normal for loop. </p>

#### Syntax

<div id="tut-content"> 
    <ul>
        <li> <strong> [expr for item in iterator [if expr] ] </strong> </li>
    </ul> 
</div>

<hr/>




#### Examples

<div id="tut-content"> 
    <ul>
        <li> <strong> Creating list of 1 to 10 </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

intList = [i for i in range(1, 11)]
print(intList)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Extracting person name from list of persons data </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

persons = [['John', 9978412287, 'A+'], ['Victor', 7852122123, 'O+'],
           ['Kelly', 8845454454, 'B-'], ['Sam', 7665415445, 'B+'],
           ['Jane', 7984546721, 'A-']]

perNames = [person[0] for person in persons]
print(perNames)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['John', 'Victor', 'Kelly', 'Sam', 'Jane']
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Creating list of squares from 1 to 10 </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

intList = [i * i for i in range(1, 11)]
print(intList)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong> Using two nested for loops </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

intList = [[x, y] for x in range(1, 3) for y in range(4, 7)]
print(intList)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[[1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6]]
</pre></div>

<hr/>




{% include callout.html content="**Note** : You can even use more than 2 nested for loop in list comprehension there is no such restrictions. " type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

intList = [[x, y, z] for x in range(1, 3) for y in range(4, 7) for z in range(8, 11)]
print(intList)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[[1, 4, 8], [1, 4, 9], [1, 4, 10], [1, 5, 8], [1, 5, 9], [1, 5, 10], [1, 6, 8], [1, 6, 9], [1, 6, 10], [2, 4, 8], [2, 4, 9], [2, 4, 10], [2, 5, 8], [2, 5, 9], [2, 5, 10], [2, 6, 8], [2, 6, 9], [2, 6, 10]]
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Iterating through 2d array </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print([col for row in arr1 for col in row])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[1, 2, 3, 4, 5, 6, 7, 8, 9]
</pre></div>

<hr/>



#### Filtering

<p> With use of if <&zwjexpr&zwj> inside for loop we can filter the elements. Only elements which is evaluated as True by given expression becomes the part of result list.  </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> Filtering only even Number from number 1 to 10 </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

intList = [i for i in range(1, 11) if i % 2 == 0]
print(intList)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[2, 4, 6, 8, 10]
</pre></div>

<hr/>


#### Applying function

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

todoList = ['Learn Python', 'Practice HandsOn', 'Work on live project']
todoListUpper = [todo.upper() for todo in todoList]
print(todoListUpper)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['LEARN PYTHON', 'PRACTICE HANDSON', 'WORK ON LIVE PROJECT']
</pre></div>

<hr/>


#### Type conversion

<div id="tut-content"> 
    <ul>
        <li> <strong> Converting list of str object to list of int objects.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

intString = ['12', '23', '43', '63', '87']
intList = [int(s) for s in intString]
print('intString :', intString)
print('intList   :', intList)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
intString : ['12', '23', '43', '63', '87']
intList   : [12, 23, 43, 63, 87]
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Flattening the list   </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

numList = [['One', 'Two', 'Three'], ['Four', 'Five', 'Six'], ['Seven']]
numListFlat = [num for slist in numList for num in slist]
print(numListFlat)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven']
</pre></div>

<hr/>



### Functions 

<p> Because list is a mutable data type any function on list will modify the list. </p>



#### append(obj)

<p> Adds an element to the end of the list. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print('flowers before :', flowers)
flowers.append('Aster')
print('flowers after :', flowers)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers after : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips', 'Aster']
</pre></div>

<hr/>






#### insert(index,element)

<p> Inserts an element at given index. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print('flowers before :', flowers)
flowers.insert(1, 'Orchids')
print('flowers after :', flowers)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers after : ['Lotus', 'Orchids', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong> Insert multiple elements at particular index </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
moreFlowers = ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia']

print('flowers before :', flowers)
flowers[2:2] = moreFlowers
print('flowers after :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers after : ['Lotus', 'Lily', 'Calendula', 'Bougainvillea', 'Peony', 'Dahlia', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
</pre></div>

<hr/>




#### remove(element)

<p> Removes the particular element from the list. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print('flowers before :', flowers)
flowers.remove('Jasmine')
print('flowers after :', flowers)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers after : ['Lotus', 'Lily', 'Rose', 'Lavender', 'Tulips']
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> It raises ValueError if given element does not exists in list.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers.remove('Aster')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 2, in <&zwj;module&zwj;>
ValueError: list.remove(x): x not in list</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> If list contains duplicate items , it will remove only first occurrence of given element.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Lily', 'Lavender', 'Lily']
print('flowers before :', flowers)
flowers.remove('Lily')
print('flowers after :', flowers)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Lily', 'Lavender', 'Lily']
flowers after : ['Lotus', 'Jasmine', 'Lily', 'Lavender', 'Lily']
</pre></div>

<hr/>



#### del 

<p> Removes element at given index. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print('flowers before :', flowers)
del flowers[2]
print('flowers after :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers after : ['Lotus', 'Lily', 'Rose', 'Lavender', 'Tulips']
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> del with slice : Removes slice of list [Recommended way] </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print('flowers before :', flowers)
del flowers[1:3]
print('flowers after :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers after : ['Lotus', 'Rose', 'Lavender', 'Tulips']
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong> Replacing slice with empty list </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print('flowers before :', flowers)
flowers[1:3] = []
print('flowers after :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers after : ['Lotus', 'Rose', 'Lavender', 'Tulips']
</pre></div>

<hr/>




#### count(element)

<p> Returns no of times an element is in the list. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Lily', 'Lavender', 'Lily']
print("'Lily' count is :", flowers.count('Lily'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
'Lily' count is : 3
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> It returns 0 if given element does not exists in list </strong> </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Lily', 'Lavender', 'Lily']
print("'Poppy' count is :", flowers.count('Poppy'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
'Poppy' count is : 0
</pre></div>

<hr/>



#### extend(iterable)

<p> Appends all elements of given iterable to the current list. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
moreFlowers = ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia']

print('flowers before :', flowers, id(flowers))
flowers.extend(moreFlowers)
print('flowers after :', flowers, id(flowers))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'] 139935278629824
flowers after : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips', 'Calendula', 'Bougainvillea', 'Peony', 'Dahlia'] 139935278629824
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>extending using shorthand '+' : </strong> Here we need to assign it to variable in order to reflect changes. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
moreFlowers = ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia']

print('flowers before :', flowers, id(flowers))
flowers += moreFlowers
print('flowers after :', flowers, id(flowers))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips'] <div id="tut-highlight">139935278628928</div>
flowers after : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips', 'Calendula', 'Bougainvillea', 'Peony', 'Dahlia'] <div id="tut-highlight">139935278628928</div>
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>extending using  '+' : </strong> extending list using operator '+' will return a new list which contains combined elements of both lists. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
moreFlowers = ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia']

print('flowers before :', flowers, id(flowers))
flowers = flowers + moreFlowers
print('flowers after :', flowers, id(flowers))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']<div id="tut-highlight">139935278625344</div>
flowers after : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips', 'Calendula', 'Bougainvillea', 'Peony', 'Dahlia']<div id="tut-highlight">139935278629952</div>
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Assigning list variable to a variable : </strong> Both variables will points to same memory location (same object in memory), modification made to the list using one of variable instantly visible to other variable. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

copyFlowers = flowers
flowers.append('Sunflower')

print('flowers', flowers, id(flowers))
print('copyFlowers', copyFlowers, id(copyFlowers))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips', 'Sunflower'] 139935376900928
copyFlowers ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips', 'Sunflower'] 139935376900928

</pre></div>

<hr/>



#### pop([index])

<p> If optional argument index is not given removes and returns  the last element from the list. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
print('flowers before :', flowers)
print('Element popped -> ', flowers.pop())
print('flowers after :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
Element popped ->  Tulips
flowers after : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender']
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>If optional argument index is  given, removes and returns an element at particular index.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print('flowers before :', flowers)
print('flowers.pop(0) -> ', flowers.pop(0))
print('flowers after :', flowers)

print('\n\nflowers before :', flowers)
print('flowers.pop(3) -> ', flowers.pop(3))
print('flowers after :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers.pop(0) ->  Lotus
flowers after : ['Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']


flowers before : ['Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers.pop(3) ->  Lavender
flowers after : ['Lily', 'Jasmine', 'Rose', 'Tulips']
</pre></div>

<hr/>



#### index(element)

<p> Search for given element in list and returns index of element. If the list have duplicate elements it will return index of first occurrence of an element.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Rose', 'Jasmine', 'Lily', 'Lavender', 'Tulips']
print(flowers)
print("index('Lily') :", flowers.index('Lily'))

flowers = ['Lotus', 'Lily', 'Jasmine', 'Lily', 'Lavender', 'Tulips']
print(flowers)
print("index('Lily') :", flowers.index('Lily'))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Lotus', 'Rose', 'Jasmine', 'Lily', 'Lavender', 'Tulips']
index('Lily') : 3
['Lotus', 'Lily', 'Jasmine', 'Lily', 'Lavender', 'Tulips']
index('Lily') : 1
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> It will raise ValueError if element not found in the list.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Lily', 'Lavender', 'Tulips']
print(flowers)
print("index('Rose') :", flowers.index('Rose'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Lotus', 'Lily', 'Jasmine', 'Lily', 'Lavender', 'Tulips']
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
ValueError: 'Rose' is not in list</pre></div>

<hr/>



#### sort(key = none, reverse = False)

<p> sorts elements of list in ascending order.</p>

<div id="tut-content"> 
    <ul>
        <li> <strong>key : </strong> By default set to None will sort list in default order defined by class. If given key as callable it will sort list based on value returned by given callable. </li>
        <li> <strong>reverse : </strong> By default set to False will sort in ascending order. If given True it will sort list in descending order. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
print('Default :', flowers)
flowers.sort()
print('Sorted  :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Default : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
Sorted  : ['Jasmine', 'Lavender', 'Lily', 'Lotus', 'Rose', 'Tulips']
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>sorting with key : </strong>sorting based on length of the elements </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
print('Default        :', flowers)
flowers.sort(key=len)
print('Sorted by len  :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Default        : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
Sorted by len  : ['Lily', 'Rose', 'Lotus', 'Tulips', 'Jasmine', 'Lavender']
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Case insensitive sort </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'jasmine', 'Rose', 'Lavender', 'tulips','lily']
print('Default :', flowers)
flowers.sort(key=str.lower)
print('Sorted case insensitive :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Default : ['Lotus', 'Lily', 'jasmine', 'Rose', 'Lavender', 'tulips', 'lily']
Sorted case insensitive : ['jasmine', 'Lavender', 'Lily', 'lily', 'Lotus', 'Rose', 'tulips']
</pre></div>

<hr/>











<div id="tut-content"> 
    <ul>
        <li> <strong>sorting in descending order </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
print('Default :', flowers)
flowers.sort(reverse=True)
print('Reverse Sorted  :', flowers)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Default : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
Reverse Sorted  : ['Tulips', 'Rose', 'Lotus', 'Lily', 'Lavender', 'Jasmine']
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Sorting 2D list</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

pointList = [[45, 12], [12, 22], [47, 25], [23, 10]]

print('Default :', pointList)
pointList.sort()
print('Sorted  :', pointList)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Default : [[45, 12], [12, 22], [47, 25], [23, 10]]
Sorted  : [[12, 22], [23, 10], [45, 12], [47, 25]]
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Sorting 2D list by particular index of inner list.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

studentList = [['John', 101, 'O+'], ['Victor', 105, 'A-'], ['Kelly', 103, 'B+'], ['Sam', 102, 'A+'],
               ['Jane', 104, 'B+']]

# sorting list of students by roll number
from operator import itemgetter

print('Default :', studentList)
studentList.sort(key=itemgetter(1))
print('Sorted  :', studentList)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Default : [['John', 101, 'O+'], ['Victor', 105, 'A-'], ['Kelly', 103, 'B+'], ['Sam', 102, 'A+'], ['Jane', 104, 'B+']]
Sorted  : [['John', 101, 'O+'], ['Sam', 102, 'A+'], ['Kelly', 103, 'B+'], ['Jane', 104, 'B+'], ['Victor', 105, 'A-']]
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong>Sorting 2D list with user defined function passed as key</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

studentList = [['John', 101, 'O+'], ['Victor', 105, 'A-'], ['Kelly', 103, 'B+'], ['Sam', 102, 'A+'],['Jane', 104, 'B+']]


def by_roll_no(student):
    return student[1]


print('Default :', studentList)
studentList.sort(key=by_roll_no)
print('Sorted  :', studentList)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Default : [['John', 101, 'O+'], ['Victor', 105, 'A-'], ['Kelly', 103, 'B+'], ['Sam', 102, 'A+'], ['Jane', 104, 'B+']]
Sorted  : [['John', 101, 'O+'], ['Sam', 102, 'A+'], ['Kelly', 103, 'B+'], ['Jane', 104, 'B+'], ['Victor', 105, 'A-']]
</pre></div>

<hr/>





#### copy()

<p> Returns shallow copy of the list </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> Shallow copy : </strong> Creates new list and copy references from original list. </li>
        <li> <strong> Deep copy : </strong> Creates new list and recursively creates copy of elements. </li>
    </ul> 
</div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> copy () on immutable elements of list </strong> </li>
    </ul> 
</div>

<p> Here making changes to copy of the original list does not affect the original list. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

copyFlowers = flowers.copy()

flowers.remove('Lotus')

print('flowers :', flowers)
print('copyFlowers :', copyFlowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers : ['Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
copyFlowers : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> copy () on mutable elements of list </strong> </li>
    </ul> 
</div>

<p> Here making changes to copy of the original list affects the original list, because we object type is mutable and only references of object is copied. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
moreFlowers = ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia']
someMoreFlowers = ['Hibiscus', 'Sunflower', 'Lilac', 'Pansy', 'Ixora']
flowersList = [flowers, moreFlowers, someMoreFlowers]


copyFlowerList = flowersList.copy()

print('Original List Before Removal --> ', flowersList)

copyFlowerList[0].remove('Rose')

print('Original List After Removal --> ', flowersList)
print('Copy List After Removal --> ', copyFlowerList)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Original List Before Removal -->  [['Lotus', 'Lily', 'Jasmine', <div id="tut-highlight">'Rose'</div>, 'Lavender', 'Tulips'], ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia'], ['Hibiscus', 'Sunflower', 'Lilac', 'Pansy', 'Ixora']]
Original List After Removal -->  [['Lotus', 'Lily', 'Jasmine', 'Lavender', 'Tulips'], ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia'], ['Hibiscus', 'Sunflower', 'Lilac', 'Pansy', 'Ixora']]
Copy List After Removal -->  [['Lotus', 'Lily', 'Jasmine', 'Lavender', 'Tulips'], ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia'], ['Hibiscus', 'Sunflower', 'Lilac', 'Pansy', 'Ixora']]
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong> Copy lists (Shallow copy) using slicing : </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
secondcopy = flowers[:]
print(secondcopy)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Lotus', 'Lily', 'Jasmine', 'Lavender', 'Tulips']
</pre></div>

<hr/>



#### deepcopy() 

<p> copies object recursively rather than copying memory reference to objects. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import copy
flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
moreFlowers = ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia']
someMoreFlowers = ['Hibiscus', 'Sunflower', 'Lilac', 'Pansy', 'Ixora']
flowersList = [flowers, moreFlowers, someMoreFlowers]


copyFlowerList = copy.deepcopy(flowersList)

print('Original List Before Removal --> ', flowersList)

copyFlowerList[0].remove('Rose')

print('Original List After Removal --> ', flowersList)
print('Copy List After Removal --> ', copyFlowerList)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Original List Before Removal -->  [['Lotus', 'Lily', 'Jasmine',  <div id="tut-highlight">'Rose'</div>, 'Lavender', 'Tulips'], ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia'], ['Hibiscus', 'Sunflower', 'Lilac', 'Pansy', 'Ixora']]
Original List After Removal -->  [['Lotus', 'Lily', 'Jasmine',  <div id="tut-highlight">'Rose'</div>, 'Lavender', 'Tulips'], ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia'], ['Hibiscus', 'Sunflower', 'Lilac', 'Pansy', 'Ixora']]
Copy List After Removal -->  [['Lotus', 'Lily', 'Jasmine', 'Lavender', 'Tulips'], ['Calendula', 'Bougainvillea', 'Peony', 'Dahlia'], ['Hibiscus', 'Sunflower', 'Lilac', 'Pansy', 'Ixora']]
</pre></div>

<hr/>




#### reverse()

<p>  Reverse the elements of list. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print('Original list :', flowers)
flowers.reverse()
print('Reversed list :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Original list : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
Reversed list : ['Tulips', 'Lavender', 'Rose', 'Jasmine', 'Lily', 'Lotus']

</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Reverse list using slice</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

print('Original list :', flowers)
flowers = flowers[::-1]
print('Reversed list :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Original list : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
Reversed list : ['Tulips', 'Lavender', 'Rose', 'Jasmine', 'Lily', 'Lotus']
</pre></div>

<hr/>





#### clear()

<p> Removes all elements from the list. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
print('Original list :', flowers)

flowers.clear()

print('Cleared list :', flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Original list : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
Cleared list : []
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Clear using slice</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
print('Original list :', flowers)

flowers[:] = []

print('Cleared list :', flowers)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Original list : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
Cleared list : []
</pre></div>

<hr/>


### List to String

#### join()

<p> Joins collection of string into single string with provided separator. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
ch = ','

flowersString = ch.join(flowers)
print(flowersString)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Lotus,Lily,Jasmine,Rose,Lavender,Tulips
</pre></div>

<hr/>


### String to List

#### split(sep=None, maxsplit=-1)

<p> Splits the string in to collection (list) of strings using given separator. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong>maxsplit : </strong> If optional argument 'maxsplit' given, limits the no of splits to be made using given separator. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowersString = 'Lotus,Lily,Jasmine,Rose,Lavender,Tulips'
flowerList = flowersString.split(',')
print(flowerList)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
</pre></div>

<hr/>


### List variable Assignment 

<p> Variable pointing to a list object can be assign to another variable, which will copy the memory address of list object. At later point if reference to original variable changes it will not affect reference assigned to other variable.   </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']

copyFlowers = flowers

print("flowers before :", flowers)
print("copyFlowers before :", copyFlowers)

flowers = None  # Changing reference of original variable

print("flowers after :", flowers)
print("copyFlowers after :", copyFlowers)




{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
copyFlowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers after : None
copyFlowers after : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Slides</strong> </li>
    </ul> 
</div>

<div id='tut-ppt'>
    <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="/docs/python/14_List_Assignment.pdf" allowfullscreen></iframe>
    </div>
</div>




### List as function parameter

<p> List is mutable data type, if it is passed as function parameter memory address for same list is copied. If function modifies the list object it will reflect changes outside scope of function.  </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

numbers = [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]


def multiply(numbers, num):
    for i in range(len(numbers)):
        numbers[i] *= num
    return numbers


# Passing original list object
print('numbers before :', numbers)
print('Result :', multiply(numbers, 5))
print('numbers after :', numbers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
numbers before : [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]
Result : [60, 225, 125, 325, 420, 365, 245, 90, 270, 185, 260]
numbers after : [60, 225, 125, 325, 420, 365, 245, 90, 270, 185, 260]
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Passing shallow copy </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

numbers = [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]


def multiply(numbers, num):
    for i in range(len(numbers)):
        numbers[i] *= num
    return numbers

print('numbers before :', numbers)
print('Result :', multiply(numbers[:], 5))
print('numbers after :', numbers)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
numbers before : [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]
Result : [60, 225, 125, 325, 420, 365, 245, 90, 270, 185, 260]
numbers after : [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Creating shallow copy using list constructor </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

numbers = [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]


def multiply(numbers, num):
    for i in range(len(numbers)):
        numbers[i] *= num
    return numbers


print('numbers before :', numbers)
print('Result :', multiply(list(numbers), 5))
print('numbers after :', numbers)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
numbers before : [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]
Result : [60, 225, 125, 325, 420, 365, 245, 90, 270, 185, 260]
numbers after : [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Correct way to write function which accepts and modifies mutable data types</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

numbers = [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]

def multiply(numbers, num):
    localnums = list(numbers)
    for i in range(len(numbers)):
        localnums[i] *= num
    return localnums

# OR

def multiply(numbers, num):
    return [i*num for i in numbers]


print('numbers before :', numbers)
print('Result :', multiply(numbers, 5))
print('numbers after :', numbers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
numbers before : [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]
Result : [60, 225, 125, 325, 420, 365, 245, 90, 270, 185, 260]
numbers after : [12, 45, 25, 65, 84, 73, 49, 18, 54, 37, 52]
</pre></div>

<hr/>





### List as default parameter

<p> If empty list is assigned to a function as default parameter, it's value is evaluated only when function is loaded in memory. If function modifies list inside changes made to list will persist among multiple function call. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']


def add_flower(flowertoadd='', flist=[]):
    """ adds supplied flower to given list"""
    flist.append(flowertoadd)
    return flist


print('flowers before :', flowers)
print('Result', add_flower('Sunflower', flowers))
print('flowers after :', flowers)

print('\nCalling function with default argument :\n')

print("add_flower('Sunflower') : ", add_flower('Sunflower'))
print("add_flower('Rose') :", add_flower('Rose'))
print("add_flower('Lily')", add_flower('Lily'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers before : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
Result ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips', 'Sunflower']
flowers after : ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips', 'Sunflower']

Calling function with default argument :

add_flower('Sunflower') :  ['Sunflower']
add_flower('Rose') : ['Sunflower', 'Rose']
add_flower('Lily') ['Sunflower', 'Rose', 'Lily']
</pre></div>

<hr/>



### Operators

#### ==
<p> Compares Values of two lists. If both list contains same values it returns True.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers1 = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers2 = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers3 = ['Lotus', 'Lily', 'Calendula', 'Bougainvillea', 'Lavender', 'Tulips']

print('flowers1 == flowers2 :', flowers1 == flowers2)
print('flowers1 == flowers3 :', flowers1 == flowers3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers1 == flowers2 : True
flowers1 == flowers3 : False
</pre></div>

<hr/>



#### !=
<p> Compares Values of two lists. If both list does not contains same values it returns True.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers1 = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers2 = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers3 = ['Lotus', 'Lily', 'Calendula', 'Bougainvillea', 'Lavender', 'Tulips']

print('flowers1 != flowers2 :', flowers1 != flowers2)
print('flowers1 != flowers3 :', flowers1 != flowers3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers1 != flowers2 : False
flowers1 != flowers3 : True
</pre></div>

<hr/>



#### is
<p> An identity operator compares origin (memory address : id(obj)) of given two list :</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers1 = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers2 = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers3 = flowers1


print('flowers1 is flowers2 :', flowers1 is flowers2)
print('flowers1 is flowers3 :', flowers1 is flowers3)

# checking the id
print('\nid(flowers1) :', id(flowers1))
print('id(flowers2) :', id(flowers2))
print('id(flowers3) :', id(flowers3))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers1 is flowers2 : False
flowers1 is flowers3 : True

id(flowers1) : 139636998268416
id(flowers2) : 139636998317760
id(flowers3) : 139636998268416
</pre></div>

<hr/>
 


#### del

<p> Decrement the reference counter of an object and removes the given variable from memory. If object's reference counter reaches to 0 object is removed from memory. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers1 = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers2 = flowers1

del flowers1

print(flowers2)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips', 'Sunflower']
</pre></div>

<hr/>


#### <, >, <= , >=

<p> Compares each element values recursively. </p>

Operator  | Meaning
:--- | :---
< | Less than
> | Greater than
<= | Less than or equal
>= | Greater than or equal


<div id="tut-content"> 
    <ul>
        <li> <strong> List of strings.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

flowers1 = ['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
flowers2 = ['Lotus', 'Lily', 'Calendula', 'Bougainvillea', 'Lavender', 'Tulips']

print('flowers1 < flowers2  :', flowers1 < flowers2)
print('flowers1 > flowers2  :', flowers1 > flowers2)
print('flowers1 <= flowers2 :', flowers1 <= flowers2)
print('flowers1 >= flowers2 :', flowers1 >= flowers2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
flowers1 < flowers2  : False
flowers1 > flowers2  : True
flowers1 <= flowers2 : False
flowers1 >= flowers2 : True
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> List of integers.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

l1 = [1, 2, 4]
l2 = [1, 2, 3]

print('l1 > l2  :', l1 > l2)
print('l1 < l2  :', l1 < l2)
print('l1 <= l2 :', l1 <= l2)
print('l1 >= l2 :', l1 >= l2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
l1 > l2  : True
l1 < l2  : False
l1 <= l2 : False
l1 >= l2 : True
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Nested List : </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

l1 = [1, [1, 2, 3], 3]
l2 = [1, [1, 2, 4], 3]

print('l1 > l2  :', l1 > l2)
print('l1 < l2  :', l1 < l2)
print('l1 <= l2 :', l1 <= l2)
print('l1 >= l2 :', l1 >= l2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
l1 > l2  : False
l1 < l2  : True
l1 <= l2 : True
l1 >= l2 : False
</pre></div>

<hr/>




### Builtin functions on numeric list


#### min(iterable)

<p> Returns element which is having minimum value. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

l1 = [12, 55, 48, 24, 87, 76, 34, 65]
print('Minimum : ', min(l1))


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

l1 = [12, 55, 48, 24, 87, 76, 34, 65]
print('Maximum :', max(l1))


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

l1 = [12, 55, 48, 24, 87, 76, 34, 65]
print('Sum :', sum(l1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Sum : 401
</pre></div>

<hr/>


#### sorted(iterable, key, reverse)

<p> Works same as list.sort() </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

l1 = [12, 55, 48, 24, 87, 76, 34, 65]
print('original :', l1)
print('sorted   :', sorted(l1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
original : [12, 55, 48, 24, 87, 76, 34, 65]
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

l1 = [12, 55, 48, 24, 87, 76, 34, 65]
l2 = [0, 0, 0, 0, 0, 0]
print('any(l1) :', any(l1))
print('any(l2) :', any(l2))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
any(l1) : True
any(l2) : False
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

l1 = [12, 55, 48, 24, 87, 76, 34, 65]
l2 = [12, 55, 0, 24, 87, 76, 34, 65]

print('all(l1) :', all(l1))
print('all(l2) :', all(l2))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
all(l1) : True
all(l2) : False
</pre></div>

<hr/>


### bisect module

<p> Provides interface to maintain list sorted after insertion of an element. It uses bisection algorithm to maintain list sorted.</p>

<div id="tut-content"> 
    <ul>
        <li> <strong> Functions of bisect module :</strong> </li>
    </ul> 
</div>

#### bisect_left(a, x, lo=0, hi=len(a))

<p> Locates insertion point for element x in list a. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> lo and hi : </strong> Optional parameters  for specifying subset of list. </li>
        <li> If x is already present in list insertion point will be before the existing element. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import bisect

l1 = [5, 8, 11, 17, 19]

print('Insertion position for 15 : ', bisect.bisect_left(l1, 15))

# inserting element
print('Inserting element at position returned by bisect :')

print('Before :', l1)
l1.insert(bisect.bisect_left(l1, 15), 15)
print('After :', l1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Insertion position for 15 :  3
Inserting element at position returned by bisect :
Before : [5, 8, 11, 17, 19]
After : [5, 8, 11, 15, 17, 19]
</pre></div>

<hr/>



#### bisect_right(a, x, lo=0, hi=len(a))

<p> Same as bisect_left but in case of element already present returns insertion point after the existing element. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

l1 = [5, 8, 11, 15, 17, 19]

print(l1)
print('bisect_left(15) :', bisect.bisect_left(l1, 15))
print('bisect_right(15) :', bisect.bisect_right(l1, 15))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[5, 8, 11, 15, 17, 19]
bisect_left(15) : 3
bisect_right(15) : 4
</pre></div>

<hr/>



#### insort_left(a, x, lo=0, hi=len(a))

<p> Inserts element x in sorted order in to list a, in case of element is already in list insert new element to left of existing element. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

l1 = [5, 8, 11, 17, 19]

print('Before :', l1)
bisect.insort_left(l1, 16)
print('After :', l1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : [5, 8, 11, 17, 19]
After : [5, 8, 11, 16, 17, 19]
</pre></div>

<hr/>




#### insort_right(a, x, lo=0, hi=len(a))

<p> Similar to insort_left() but in case of element is already in list inserts new element to the right of existing element. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

l1 = [5, 8, 11, 17, 19]

print('Before :', l1)
bisect.insort_right(l1, 16)
print('After :', l1)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : [5, 8, 11, 17, 19]
After : [5, 8, 11, 16, 17, 19]
</pre></div>

<hr/>


### bytes to list

<div id="tut-content"> 
    <ul>
        <li> Bytes string passed in constructor of list returns list contains ordinal values of each character present in byte string. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

byteStr = b'Hello World!'
list1 = list(byteStr)
print(list1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]
</pre></div>

<hr/>


### list as stack


<div id="tut-content"> 
    <ul>
        <li> Stack operation using list functions append() and pop(). </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

stack = [4, 7, 2, 5, 6]


def push(n):
    stack.append(n)


def pop():
    return stack.pop()


print(stack)
push(10)
print('Stack after push(10)', stack)
print('popped', pop())
print('Stack after pop()', stack)
print('popped', pop())
print('Stack after pop()', stack)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[4, 7, 2, 5, 6]
Stack after push(10) [4, 7, 2, 5, 6, 10]
popped 10
Stack after pop() [4, 7, 2, 5, 6]
popped 6
Stack after pop() [4, 7, 2, 5]
</pre></div>

<hr/>


### list as queue


<div id="tut-content"> 
    <ul>
        <li> Queue operation using list functions append() and pop(). </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

queue = [4, 7, 2, 5, 6]


def enqueue(n):
    queue.append(n)


def dequeue():
    return queue.pop(0)


print(queue)
print('dequeue ->', dequeue())
print('Queue after dequeue', queue)

enqueue(9)
print('Queue after enqueue 9 ', queue)

print('dequeue ->',dequeue())
print('Queue after dequeue', queue)

enqueue(15)
print('Queue after enqueue 15 ', queue)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[4, 7, 2, 5, 6]
dequeue -> 4
Queue after dequeue [7, 2, 5, 6]
Queue after enqueue 9  [7, 2, 5, 6, 9]
dequeue -> 7
Queue after dequeue [2, 5, 6, 9]
Queue after enqueue 15  [2, 5, 6, 9, 15]
</pre></div>

<hr/>

{% include links.html %}
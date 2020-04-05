---
title: List
layout: tutorial
tags: []
sidebar: python_sidebar
permalink: python_list.html
folder: python
prev_section: python_functions.html
prev_section_title: Functions
prev: 
prev_title: 
next: 
next_title: 
next_section: 
next_section_title: 
summary: constructor and functions of list.
---


## List

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

print('Flower at index 5 -> ', flowers[5])
flowers[5] = 'Aster'
print('After changing ...')
print('Flower at index 5 -> ', flowers[5])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Flower at index 5 ->  Tulips
After changing ...
Flower at index 5 ->  Aster
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

print(flowers)
flowers[1:3] = ['Aster', 'Calendula']
print(flowers)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Lotus', 'Lily', 'Jasmine', 'Rose', 'Lavender', 'Tulips']
['Lotus', 'Aster', 'Calendula', 'Rose', 'Lavender', 'Tulips']
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

#### zip()

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



{% include links.html %}
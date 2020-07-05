---
title: Python heapq
layout: tutorial
tags: [python, heapq, heap, priority_queue, min-heap, binary_tree, heapify(), heappush(), heappop(), heappushpop(), heapreplace(), merge(), nlargest(), nsmallest()]
sidebar: python_sidebar
permalink: python_heapq.html
folder: python
prev_section: 
prev_section_title: 
prev: python_deque.html
prev_title: Deque
next: python_enum.html
next_title: Enum
next_section: 
next_section_title: 
summary: Python heapq algorithm (min-heap), binary tree, constructing binary tree from list, functions of heapq module, Example - sorted list using heapq.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/baBvzUyaHXk" allowfullscreen></iframe>
</div> <hr/>


## heapq

<p> An implementation of heap queue algorithm also known as priority queue. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> Heap : </strong> is a binary tree with where each parent node (Value or Priority) in the tree is less than it's child nodes (Value or Priority).</li>
        <li> In python heap implementation is 'min-heap'. </li>
        <li> It provides functions which takes list as parameter and perform operations on given list object. </li>
    </ul> 
</div>


<div id="tut-content"> 
    <ul>
        <li> <strong> Example min-heap binary tree </strong> </li>
    </ul> 
</div>

<div id="tut-img">
    <img src="/images/tutorials/python/heapqex.png" class="tut-img" alt="heapq example">
</div>

<hr/>


### Constructing heap (binary tree) from list

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

minHeap = [1, 2, 3, 6, 7, 5, 9, 11, 15, 8]

{% endhighlight %}
</div>

<div id="tut-content"> 
    <ul>
        <li> If parent's index is i then its children will  2*i+1 , 2*i+2 for 0 based index. </li>
        <li> <strong> Example : </strong> Element 6 is at index 3 so it's child will be the elements at index : 2*3+1 = 7 and 2*3+2 = 8 and elements are 11 and 15.</li>
    </ul> 
</div>




<div id="tut-content"> 
    <ul>
        <li> <strong>Slides</strong> </li>
    </ul> 
</div>

<div id='tut-ppt'>
    <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="/docs/python/20_heapq.pdf" allowfullscreen></iframe>
    </div>
</div>

<hr/>

### Time Complexity

Operation | Worst Case
:---: | :---:
Insertion | O(log(n))
Deletion  | O(log(n))
find-min  | O(1)
Sorting   | O(n*log(n))
Searching | O(n)

<hr/>


### Functions 

#### heapify(x)

<p> Transform given list x in to a min-heap, in-place, in linear time. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

extList = [15, 2, 5, 11, 7, 3, 9, 1, 6, 8]
print('Before :', extList)
heapify(extList)
print('After  :', extList)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : [15, 2, 5, 11, 7, 3, 9, 1, 6, 8]
After  : [1, 2, 3, 6, 7, 5, 9, 11, 15, 8]
</pre></div>

<div id="tut-img">
    <img src="/images/tutorials/python/heapqex.png" class="tut-img" alt="heapify">
</div>

<hr/>


#### heappush(heap, e)

<p> Adds an element to the heap maintaining heap property. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from heapq import heappush

minHeap = []

heappush(minHeap, 4)
heappush(minHeap, 9)
heappush(minHeap, 12)
heappush(minHeap, 7)
heappush(minHeap, 2)
heappush(minHeap, 5)
heappush(minHeap, 6)
heappush(minHeap, 10)
heappush(minHeap, 8)
heappush(minHeap, 3)
print(minHeap)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[2, 3, 5, 8, 4, 12, 6, 10, 9, 7]
</pre></div>


<div id="tut-img">
    <img src="/images/tutorials/python/heappush.png" class="tut-img" alt="heappush()">
</div>


<hr/>


#### heappop(heap)

<p> Remove and return smallest element from heap maintaining heap property. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from heapq import heappop

minHeap = [1, 2, 3, 6, 7, 5, 9, 11, 15, 8]

print('Before :', minHeap)
print('heappop() :', heappop(minHeap))
print('After  :', minHeap)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : [1, 2, 3, 6, 7, 5, 9, 11, 15, 8]
heappop() : 1
After  : [2, 6, 3, 8, 7, 5, 9, 11, 15]
</pre></div>

<div id="tut-img">
    <img src="/images/tutorials/python/heappop.png" class="tut-img" alt="heappop()">
</div>

<hr/>


#### heappushpop(heapList, e)

<p> Pushes element 'e' to the heap and pop() the smallest element from the heap. It runs efficiently compare to heappush() executed followed by heappop(). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from heapq import heappushpop

minHeap = [1, 2, 3, 6, 7, 5, 9, 11, 15, 8]

print('Before :', minHeap)
print('heappushpop() :', heappushpop(minHeap, 10))
print('After  :', minHeap)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : [1, 2, 3, 6, 7, 5, 9, 11, 15, 8]
heappushpop() : 1
After  : [2, 6, 3, 10, 7, 5, 9, 11, 15, 8]
</pre></div>

<div id="tut-img">
    <img src="/images/tutorials/python/heappushpop.png" class="tut-img" alt="heappushpop()">
</div>

<hr/>


#### heapreplace(heapList, e)

<p> Pops the smallest element and then pushes element 'e' to heap. It runs efficiently compare to  heappushpop() followed by heappush(). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from heapq import heapreplace

minHeap = [1, 2, 3, 6, 7, 5, 9, 11, 15, 8]

print('Before :', minHeap)
print('heapreplace() :', heapreplace(minHeap, 0))
print('After  :', minHeap)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : [1, 2, 3, 6, 7, 5, 9, 11, 15, 8]
heapreplace() : 1
After  : [0, 2, 3, 6, 7, 5, 9, 11, 15, 8]
</pre></div>

<div id="tut-img">
    <img src="/images/tutorials/python/heapreplace.png" class="tut-img" alt="heappop()">
</div>

<hr/>


#### merge(*iterables, key=None, reverse=False)

<p> Returns generator function which returns single sorted elements from given multiple sorted iterables. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> key and reverse :</strong> It has same meaning as explained in sorted(). merge() should given same key as provided in sorted. </li>
        <li> <strong> reverse :</strong> If given True merges given iterable in reverse order. All given iterables must be in reverse sorted. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from heapq import merge

f1 = ['Jasmine', 'Lavender', 'Lily', 'Lotus', 'Rose', 'Tulips']
f2 = ['Bougainvillea', 'Calendula', 'Dahlia', 'Peony']

print('merge() : ', type(merge(f1, f2)))

optL = list(merge(f1, f2))
print('\nf1 :', f1)
print('f2 :', f2)
print('\nSorted merged list : ', optL)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
merge() :  <class 'generator'>

f1 : ['Jasmine', 'Lavender', 'Lily', 'Lotus', 'Rose', 'Tulips']
f2 : ['Bougainvillea', 'Calendula', 'Dahlia', 'Peony']

Sorted merged list :  ['Bougainvillea', 'Calendula', 'Dahlia', 'Jasmine', 'Lavender', 'Lily', 'Lotus', 'Peony', 'Rose', 'Tulips']
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Merging using custom key used by sorted() </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from heapq import merge

f1 = sorted(['Jasmine', 'Lavender', 'Lily', 'Lotus', 'Rose', 'Tulips'], key=len)
f2 = sorted(['Bougainvillea', 'Calendula', 'Dahlia', 'Peony'], key=len)

print('f1 :', f1)
print('f2 :', f2)

optL = list(merge(f1, f2, key=len))
print('\nSorted merged list by len() : ', optL)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
f1 : ['Lily', 'Rose', 'Lotus', 'Tulips', 'Jasmine', 'Lavender']
f2 : ['Peony', 'Dahlia', 'Calendula', 'Bougainvillea']

Sorted merged list by len() :  ['Lily', 'Rose', 'Lotus', 'Peony', 'Tulips', 'Dahlia', 'Jasmine', 'Lavender', 'Calendula', 'Bougainvillea']
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Reverse merge : elements must be sorted in reverse order in each iterable </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from heapq import merge

f1 = sorted(['Jasmine', 'Lavender', 'Lily', 'Lotus', 'Rose', 'Tulips'], reverse=True)
f2 = sorted(['Bougainvillea', 'Calendula', 'Dahlia', 'Peony'], reverse=True)

print('f1 :', f1)
print('f2 :', f2)

optL = list(merge(f1, f2, reverse=True))
print('Reverse merge() sorted list :', optL)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
f1 : ['Tulips', 'Rose', 'Lotus', 'Lily', 'Lavender', 'Jasmine']
f2 : ['Peony', 'Dahlia', 'Calendula', 'Bougainvillea']
Reverse merge() sorted list : ['Tulips', 'Rose', 'Peony', 'Lotus', 'Lily', 'Lavender', 'Jasmine', 'Dahlia', 'Calendula', 'Bougainvillea']
</pre></div>

<hr/>


#### nlargest(n, iterable, key=None)

<p> Returns list of n largest elements after sorting given iterable by key. Equivalent to sorted(iterable, key=key, reverse=True)[:n] </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from heapq import nlargest

n1 = [1, 2, 3, 6, 7, 5, 9, 11, 15, 8]
print(nlargest(3, n1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[15, 11, 9]
</pre></div>

<hr/>


#### nsmallest(n, iterable[, key])

<p> Returns list of n smallest elements after sorting given iterable by key.Equivalent to sorted(iterable, key=key)[:n]. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from heapq import nsmallest

n1 = [1, 6, 7, 5, 2, 9, 11, 4, 15, 8]
print(nsmallest(3, n1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[1, 2, 4]
</pre></div>

<hr/>


### Examples 

#### Sorting heap of lists 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from heapq import heapify, heappop

students = [[101, 'John', 'O+'], [105, 'Victor', 'A-'], [103, 'Kelly', 'B+'], [102, 'Sam', 'A+'], [104, 'Jane', 'B+']]

print('Before :', students)

heapify(students)
print('\nheapify :', students)

students = [heappop(students) for i in range(len(students))]
print('\nSorted :', students)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : [[101, 'John', 'O+'], [105, 'Victor', 'A-'], [103, 'Kelly', 'B+'], [102, 'Sam', 'A+'], [104, 'Jane', 'B+']]

heapify : [[101, 'John', 'O+'], [102, 'Sam', 'A+'], [103, 'Kelly', 'B+'], [105, 'Victor', 'A-'], [104, 'Jane', 'B+']]

Sorted : [[101, 'John', 'O+'], [102, 'Sam', 'A+'], [103, 'Kelly', 'B+'], [104, 'Jane', 'B+'], [105, 'Victor', 'A-']]
</pre></div>

<hr/>

{% include links.html %}
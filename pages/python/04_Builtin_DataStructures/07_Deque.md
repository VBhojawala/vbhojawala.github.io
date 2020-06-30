---
title: Python Deque
layout: tutorial
tags: [python, deque, len(), append(), appendleft(), pop(), popleft(), extend(), extendleft(), insert(), remove(), count(), index(), reverse(), rotate(), clear(), copy(), deepcopy()]
sidebar: python_sidebar
permalink: python_deque.html
folder: python
prev_section: 
prev_section_title: 
prev: python_chainmap.html
prev_title: ChainMap
next: python_heapq.html
next_title: heapq
next_section: 
next_section_title: 
summary: Python Deque constructor, comparision with list and functions.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/LD6_9s-Vuoo" allowfullscreen></iframe>
</div> <hr/>


## Deque

<div id="tut-content"> 
    <ul>
        <li> <strong>deque (Double-ended queue) = </strong> stack + queue </li>
        <li> It uses doubly linked list as internal data structure as compared to dynamic array used by list. </li>
        <li> It supports thread safe memory efficient append and pop of elements from both direction. </li>
        <li> deque guarantees O(1) performance cost where as list performs in O(n) for pop(0) and insert(0, v). </li>
        <li> Random access and insertion and deletion from the middle of deque is expensive compare to list.</li>
    </ul> 
</div>


### Constructor

<p id="tut-cons"> deque([iterable[, maxlen]]) </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>maxlen : </strong> If not given deque is unbounded to number of elements it can contain. If maxlen is given after the deque reaches maxlen adding new element will remove element from the other end. </li>
    </ul> 
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> Empty deque </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque()
print(dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
deque([])
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> deque from iterable : It calls appends() method for each elements from left to right. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> deque from generator function </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11))
print(dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> deque with maxlen </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], maxlen=10)
print(dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], maxlen=10)
</pre></div>

<hr/>

### Accessing element

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11))

print(dq)
print('dq[1] :', dq[1])
print('dq[-1] :', dq[-1])



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
dq[1] : 2
dq[-1] : 10
</pre></div>

<hr/>


### Modifying element

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque([1, 2, 3, 4, 5, 5, 7, 8, 9, 10])

print('Before :', dq)
dq[5] = 6
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 5, 7, 8, 9, 10])
After  : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>


### Deleting element

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque([1, 2, 3, 4, 5, 5, 6,  7, 8, 9, 10])

print('Before :', dq)
del dq[5]
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10])
After  : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>



### Slice does not work for deque


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11))
print('dq[2:3] :', dq[2:3])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
TypeError: sequence index must be integer, not 'slice'</pre></div>

<hr/>

### Common Functionality with list

{% include callout.html content=" For iteration, copy(), deepcopy() , membership operator, comparision operator, multiplication '*' and addition '+' operator it has same functionality as list." type="primary" %} 

<hr/>

### Functions 

#### len(iterable)

<p> Returns number of elements inside the deque. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11))
print('Length :', len(dq))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Length : 10
</pre></div>

<hr/>


#### append(e)

<p>Appends an element 'e' to the end of the deque. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11))

print('Before :', dq)
dq.append(11)
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
After  : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> Appending element when length is equal to maxlen will remove left most element. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11), maxlen=10)

print('Before :', dq)
dq.append(11)
print('After  :', dq)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], maxlen=10)
After  : deque([2, 3, 4, 5, 6, 7, 8, 9, 10, 11], maxlen=10)
</pre></div>

<hr/>


#### appendleft(e)

<p> Appends an element 'e' to the beginning of the deque. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11))

print('Before :', dq)
dq.appendleft(0)
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
After  : deque([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> appendleft() when length is equal to maxlen will remove rightmost element. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11), maxlen=10)

print('Before :', dq)
dq.appendleft(0)
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], maxlen=10)
After  : deque([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], maxlen=10)
</pre></div>

<hr/>


#### pop()

<p> Removes and return, rightmost element from deque. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11))

print('Before :', dq)
print('pop()  :', dq.pop())
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
pop()  : 10
After  : deque([1, 2, 3, 4, 5, 6, 7, 8, 9])
</pre></div>

<hr/>



#### popleft()

<p> Removes and return, leftmost element from queue. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11))

print('Before :', dq)
print('popleft()  :', dq.popleft())
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
popleft()  : 1
After  : deque([2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>


#### extend(iterable)

<p> Adds elements of given iterable to the end of deque. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11))

print('Before :', dq)
dq.extend([11, 12, 13, 14, 15])
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
After  : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
</pre></div>

<hr/>


#### extendleft(iterable)

<p> Adds each element of given iterable to the beginning of the deque using appendleft(). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque(range(1, 11))

print('Before :', dq)
dq.extendleft([0, -1, -2, -3, -4])
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
After  : deque([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>


#### insert(index, element)

<p> Inserts an element at given index. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque([1, 2, 3, 4, 6,  7, 8, 9, 10])

print('Before :', dq)
dq.insert(4, 5)
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 6, 7, 8, 9, 10])
After  : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>



#### remove(e)

<p> Removes an element from the deque. In case of duplicate elements, it will remove only first occurrence of an element. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])

print('Before :', dq)
dq.remove(5)
print('After  :', dq)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])
After  : deque([1, 2, 3, 4, 6, 5, 7, 8, 9, 10])
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Removing non existing element will raise ValueError </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

print('Before :', dq)
dq.remove(0)
print('After  :', dq)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 5, in <&zwj;module&zwj;>
ValueError: deque.remove(x): x not in deque</pre></div>

<hr/>

#### count(e)

<p> Counts occurrences of given an element in deque. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])

print(dq)
print('count(5) : ', dq.count(5))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])
count(5) :  2

</pre></div>

<hr/>



#### index(e)

<p> Counts occurrences of given an element in queue. In case of duplicate elements it returns index of first element.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])

print(dq)
print('index(5) :', dq.index(5))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])
index(5) : 4

</pre></div>

<hr/>



#### reverse()

<p> Reverses the order of elements of deque.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque
dq = deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])

print('Before :', dq)
dq.reverse()
print('After  :', dq)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])
After  : deque([10, 9, 8, 7, 5, 6, 5, 4, 3, 2, 1])
</pre></div>

<hr/>



#### rotate(n)

<p> Rotates deque n step to right, if n is negative rotate n steps to left.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque

dq = deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])

print('dq.rotate(3)')

print('Before :', dq)
dq.rotate(3)
print('After  :', dq)

dq = deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])

print('\ndq.rotate(-3)')

print('Before :', dq)
dq.rotate(-3)
print('After  :', dq)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
dq.rotate(3)
Before : deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])
After  : deque([8, 9, 10, 1, 2, 3, 4, 5, 6, 5, 7])

dq.rotate(-3)
Before : deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])
After  : deque([4, 5, 6, 5, 7, 8, 9, 10, 1, 2, 3])
</pre></div>

<hr/>


#### clear()

<p> Clears all elements of deque. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import deque

dq = deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])
print('Before :', dq)
dq.clear()
print('After  :', dq)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : deque([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 10])
After  : deque([])
</pre></div>

<hr/>




{% include links.html %}
---
title: Array
layout: tutorial
tags: [Array, indexing, slicing, iterating, typecodes, len(), append(), insert(), extend(), pop(), remove(), count(), reverse(), tofile(), tobytes(), tolist(), fromfile(), fromlist(), frombytes(), itemsize]
sidebar: python_sidebar
permalink: python_array.html
folder: python
prev_section: 
prev_section_title: 
prev: python_enum.html
prev_title: Enum
next: python_struct.html
next_title: Struct
next_section: 
next_section_title: 
summary: Array element data types, indexing, slicing, iterating, functions and attributes.
---

## Array

<div id="tut-content"> 
    <ul>
        <li> Array is sequence of element of same type. </li>
        <li> It is similar to list with type restriction.</li>
        <li> Array module creates efficient array of numeric values.</li>
    </ul> 
</div>


### Data Types

Symbol  |   Data Type               |   Minimum Size<br/> (Bytes)|  Python Type
:---: | :---- | :----: | :---- 
  'b'    |  signed character         |       1        |   int
  'B'    |  un-signed character      |       1        |   int
  'u'    |  Py_UNICODE               |       2        |   Unicode character
  'h'    |  signed short             |       2        |   int
  'H'    |  un-signed short          |       2        |   int
  'i'    |  signed(+ or -) Integer   |       2        |   int
  'I'    |  unsigned Integer         |       2        |   int
  'l'    |  signed(+ or -) long      |       4        |   int
  'L'    |  unsigned Long            |       4        |   int
  'q'    |  signed long long         |       8        |   int
  'Q'    |  un-signed long long      |       8        |   int
  'f'    |  float                    |       4        |   float
  'd'    |  double                   |       8        |   float

{% include callout.html content="**Note** : The actual representation of values is determined by the machine architecture (C implementation).  " type="primary" %} 


#### typecodes

<p> Returns string containing each character as supported symbol. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
print('Data Type :', array.typecodes)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Data Type : bBuhHiIlLqQfd
</pre></div>

<hr/>


### Constructor

<p id="tut-cons"> array(typecode[, initializer]) </p>

<p> Returns array which can hold only given typecode data type. </p>

<div id="tut-content"> 
    <ul>
        <li> From list </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', [0]*10)
print(intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
array('i', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> From generator  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))
print(intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>


### Accessing Value

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))
print("intArray[4] :", intArray[4])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
intArray[4] : 4
</pre></div>

<hr/>



### Modifying element

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

print("Before :", intArray)
intArray[0] = 7
print("After  :", intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
After  : array('i', [7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>

### Slicing

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))
print("intArray[4:8] :", intArray[4:8])



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
intArray[4:8] : array('i', [4, 5, 6, 7])
</pre></div>

<hr/>

### Iterating

<p> Iterating through the elements of array is same as explained in details in list. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

for i in intArray:
    print(i)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0
1
2
3
4
5
6
7
8
9
10
</pre></div>

<hr/>


### Functions 

#### len(iterable)

<p> Returns number of elements inside given iterable. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

print('Length :', len(intArray))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Length : 11
</pre></div>

<hr/>






#### append(x)

<p> Adds an element 'x' to the end of array. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

print("Before :", intArray)
intArray.append(11)
print("After  :", intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
After  : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
</pre></div>

<hr/>



#### insert(i, x)

<p> Inserts element ' x ' at index i. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

print("Before :", intArray)
intArray.insert(5, 7)
print("After  :", intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
After  : array('i', [0, 1, 2, 3, 4, 7, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>



#### extend(iterable)

<p> Inserts element ' x ' at index i. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(5))

print("Before :", intArray)
intArray.extend([5, 6, 5, 7, 8, 5])
print("After  :", intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [0, 1, 2, 3, 4])
After  : array('i', [0, 1, 2, 3, 4, 5, 6, 5, 7, 8, 5])
</pre></div>

<hr/>




#### pop([i])

<p> If optional argument 'i' is not given  removes and return last element. If ' i ' is given removes and return an element at index i. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

print("Before :", intArray)
print("pop()  :", intArray.pop())
print("After  :", intArray)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
pop()  : 10
After  : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> With index ' i ' </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

print("Before :", intArray)
print("pop(5)  :", intArray.pop(5))
print("After  :", intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
pop(5)  : 5
After  : array('i', [0, 1, 2, 3, 4, 6, 7, 8, 9, 10])
</pre></div>

<hr/>




#### remove(x)

<p> Removes the first occurrence of element x from array. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

print("Before :", intArray)
intArray.remove(9)
print("After  :", intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
After  : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 10])])
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong></strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('It\'s sunny outside.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
It's sunny outside.
Quoting inside "Double quotes".
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> Removing Non-existing element will raise ValueError </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

print("Before :", intArray)
intArray.remove(11)
print("After  :", intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 5, in <&zwj;module&zwj;>
ValueError: array.remove(x): x not in array</pre></div>

<hr/>




#### count(x)

<p> Returns the number of occurrence of given element ' x ' in array. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', (5, 6, 5, 7, 8, 5))

print("count(5) :", intArray.count(5))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
count(5) : 3
</pre></div>

<hr/>




#### reverse()

<p> Reverses the order of the items in array. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

print("Before :", intArray)
intArray.reverse()
print("After  :", intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
After  : array('i', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
</pre></div>

<hr/>




#### tofile(f)

<p> writes all elements to file 'f'. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(11))

print("Before :", intArray)
intArray.reverse()
print("After  :", intArray)


{% endhighlight %}
</div>


<hr/>






#### tobytes()

<p> Converts an array object to bytes representation. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(1, 11))

print(intArray.tobytes())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b'\x01\x00\x00\x00\x02\x00\x00\x00\x03\x00\x00\x00\x04\x00\x00\x00\x05\x00\x00\x00\x06\x00\x00\x00\x07\x00\x00\x00\x08\x00\x00\x00\t\x00\x00\x00\n\x00\x00\x00'
</pre></div>

<hr/>




#### tolist()

<p> Converts an array object to list representation. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array
intArray = array.array('i', range(1, 11))

print('Array :', intArray)
print('list  :', intArray.tolist())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Array : array('i', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
list  : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</pre></div>

<hr/>


#### fromfile(f, n)

<p> Reads n elements from the file and append them to the end of the array. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array

intArray = array.array('i', range(1, 5))

print("Before :", intArray)

with open('./04_Builtin_DataStructures/Docs/numbers.bin', 'rb') as f:
    intArray.fromfile(f, 10)

print("After  :", intArray)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [1, 2, 3, 4])
After  : array('i', [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>



#### fromlist(list)

<p> Appends all elements of given list to the end of the array. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array

intArray = array.array('i', range(1, 11))

print("Before :", intArray)
intArray.fromlist([11, 15, 16, 74])
print("After  :", intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
After  : array('i', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 16, 74])
</pre></div>

<hr/>



#### frombytes(s)

<p> Appends elements from byte representation to end of array. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array

intArray = array.array('i', range(1, 5))

bObj = b'''\x00\x00\x00\x00\x01\x00\x00\x00\x02\x00\x00\x00\x03\x00\x00\x00\x04\x00\x00\x00\
\x05\x00\x00\x00\x06\x00\x00\x00\x07\x00\x00\x00\x08\x00\x00\x00\t\x00\x00\x00\n\x00\x00\x00'''

print("Before :", intArray)
intArray.frombytes(bObj)
print("After  :", intArray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : array('i', [1, 2, 3, 4])
After  : array('i', [1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</pre></div>

<hr/>



### Attributes

#### itemsize

<p> Returns length of each item of array in bytes as per local machine's C implementation . </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array

intArray = array.array('i', range(1, 10))

print('itemsize :', intArray.itemsize)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
itemsize : 4
</pre></div>

<hr/>


{% include links.html %}
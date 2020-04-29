---
title: MemoryView
layout: tutorial
tags: []
sidebar: python_sidebar
permalink: python_memoryview.html
folder: python
prev_section: 
prev_section_title: 
prev: python_struct.html
prev_title: Struct
next: 
next_title: 
next_section: 
next_section_title: 
summary: 
---


## MemoryView

<p> Creating view on internal data of an object which supports buffer protocol without copying. </p>


<div id="tut-content"> 
    <ul>
        <li> bytes and bytearray are the builtin objects which supports buffer protocol. </li>
        <li> <strong> element : </strong> is the atomic memory unit handled by the originating object obj. </li>
    </ul> 
</div>


### Constructor

<p id="tut-cons"> memoryview(obj) </p>

<p> Creates and returns memory view which references to 'obj'. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = b'Hello World!'
s1View = memoryview(s1)

print('View Object : ', s1View)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
View Object :  <memory at 0x7f601c205100>
</pre></div>

<hr/>


### Indexing and Slicing

<p> memoryview supports indexing and slicing same as explained in string section. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = b'Hello World!'
s1View = memoryview(s1)

# Indexing
print('s1View[0]  :', s1View[0])
print('s1View[-3] :', s1View[-3])

# Slicing
print('\ns1View[6:12] :', s1View[6:12])
print('bytes(s1View[6:12]) :', bytes(s1View[6:12]))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
s1View[0]  : 72
s1View[-3] : 108

s1View[6:12] : <memory at 0x7f601c204340>
bytes(s1View[6:12]) : b'World!'
</pre></div>

<hr/>


### memoryview of an array

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array

nums = array.array('i', range(1, 11))
numsView = memoryview(nums)

# Indexing
print('numsView[0]  :', numsView[0])
print('numsView[-1] :', numsView[-1])

# Slicing
print('numsView[3:6] :', numsView[3:6].tolist())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
numsView[0]  : 1
numsView[-1] : 10
numsView[3:6] : [4, 5, 6]

</pre></div>

<hr/>


### Modifying Object through memoryview

#### readonly

<p> An attribute of memoryview returns True if view is readonly. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = b'Hello World!'
s2 = bytearray(b'Hello World!')

s1View = memoryview(s1)
s2View = memoryview(s2)

print('Bytes is readonly? :', s1View.readonly)
print('ByteArray is readonly? :', s2View.readonly)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Bytes is readonly? : True
ByteArray is readonly? : False
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> Modifying bytearray using memoryview </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s2 = bytearray(b'Hello World!')
s2View = memoryview(s2)

print('Before :', s2)
s2View[6:12] = b'Python'
print('After  :', s2)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : bytearray(b'Hello World!')
After  : bytearray(b'Hello Python')
</pre></div>

<hr/>


### Functions

#### tolist()

<p> Returns data in the buffer as a list of elements. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

nums = array.array('i', range(1, 11))
nView = memoryview(nums)

print(nView.tolist())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</pre></div>

<hr/>



#### toreadonly()

<p> Returns read-only version of memory view on writable object. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = bytearray(b'Hello World!')
s1View = memoryview(s1)
print('s1View :', s1View.readonly)

s1ROView = s1View.toreadonly()
print('s1ROView :', s1ROView.readonly)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
s1View : False
s1ROView : True
</pre></div>

<hr/>




#### tobytes(order=None)

<p> Returns data in the buffer as byte string. It is same as calling bytes(mview)</p>

<div id="tut-content"> 
    <ul>
        <li> <strong> order : </strong> can be {‘C’, ‘F’, ‘A’}. If given as 'C' or 'F' data of original array is converted in to C or Fortran order. If given 'A' for contiguous view returns exact copy of the physical memory.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array

nums = array.array('i', range(1, 11))
nView = memoryview(nums)

print('tobytes() :', nView.tobytes())
print('bytes()   :', bytes(nums))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
tobytes() : b'\x01\x00\x00\x00\x02\x00\x00\x00\x03\x00\x00\x00\x04\x00\x00\x00\x05\x00\x00\x00\x06\x00\x00\x00\x07\x00\x00\x00\x08\x00\x00\x00\t\x00\x00\x00\n\x00\x00\x00'
bytes()   : b'\x01\x00\x00\x00\x02\x00\x00\x00\x03\x00\x00\x00\x04\x00\x00\x00\x05\x00\x00\x00\x06\x00\x00\x00\x07\x00\x00\x00\x08\x00\x00\x00\t\x00\x00\x00\n\x00\x00\x00'
</pre></div>

<hr/>




#### hex([sep[, bytes_per_sep]])

<p> Return a string object containing two hexadecimal digits for each byte in the buffer. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> sep : </strong> If given defines separator between bytes.</li>
        <li> <strong> bytes_per_sep : </strong> Number of bytes per separator.</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = b'Hello World!'
s1View = memoryview(s1)

print('hex()       :', s1View.hex())
print("hex(':')    :", s1View.hex(':'))
print("hex(':', 2) :", s1View.hex(':', 2))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
hex()       : 48656c6c6f20576f726c6421
hex(':')    : 48:65:6c:6c:6f:20:57:6f:72:6c:64:21
hex(':', 2) : 4865:6c6c:6f20:576f:726c:6421
</pre></div>

<hr/>




#### release()

<p> By default releases the underlying buffer exposed by the memoryview object. It can be customized to take special actions such as freeing dangling resources. For example bytearray temporally forbids resizing. </p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = b'Hello World!'
s1View = memoryview(s1)

s1View.release()
print('s1 :', s1)

print(s1View[6:12])  # Access to view after release will raise error



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
s1 : b'Hello World!'
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 7, in <&zwj;module&zwj;>
ValueError: operation forbidden on released memoryview object</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> memoryview supports context management protocol for release() </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = b'Hello World!'
with memoryview(s1) as s1View:
    print(bytes(s1View[6:12]))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b'World!'
</pre></div>

<hr/>



#### cast(format[, shape])

<p> Casts a memoryview to a new format or shape and returns new memoryview but underlying buffer is not copied. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> format :  </strong> destination format can be one of ‘B’ (signed char), ‘b’ (unsigned char) or ‘c’ (char). </li>
        <li> <strong> shape : </strong> byte_length//new_itemsize . Result view is one dimensional.</li>
    </ul> 
</div>


<div id="tut-content"> 
    <ul>
        <li> Trying to modify single element without cast will raise error. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = bytearray(b'hello World!')
s1View = memoryview(s1)

s1View[0] = b'H'


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 4, in <&zwj;module&zwj;>
TypeError: memoryview: invalid type for format 'B'</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Modifying single element with cast() </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = bytearray(b'hello World!')
s1View = memoryview(s1)
s1ViewCast = s1View.cast('c')

print('Before :', s1)
s1ViewCast[0] = b'H'
print('After :', s1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : bytearray(b'hello World!')
After : bytearray(b'Hello World!')
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Casting 1 dimensional integers to 2 dimensional and 3 dimensional shape </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import struct

buffer = struct.pack('12i', *range(1, 13))

n1D = memoryview(buffer)

n2D = n1D.cast('i', shape=[3, 4])
print('shape=[3, 4]    :', n2D.tolist())

n3D = n1D.cast('i', shape=[2, 2, 3])
print('shape=[2, 2, 3] :', n3D.tolist())

n3D = n1D.cast('i', shape=[2, 3, 2])
print('shape=[2, 3, 2] :', n3D.tolist())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
shape=[3, 4]    : [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
shape=[2, 2, 3] : [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]]
shape=[2, 3, 2] : [[[1, 2], [3, 4], [5, 6]], [[7, 8], [9, 10], [11, 12]]]
</pre></div>

<hr/>



### Attributes

#### obj

<p> Returns underlying object of memoryview. </p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = bytearray(b'hello World!')
s1View = memoryview(s1)

print(s1View.obj)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'hello World!')
</pre></div>

<hr/>


#### nbytes

<p> Returns amount of space in bytes that an array would use in a contiguous representation. nbytes is not necessarily required to be equal to len() object</p>


<div id="tut-content"> 
    <ul>
        <li> <strong> Case 1 : </strong> where len(obj)  == nbytes </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import struct

buffer = struct.pack('5i', *range(1, 6))
b1View = memoryview(buffer)

print('len :', len(b1View))
print('nbytes :', b1View.nbytes)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
len : 20
nbytes : 20
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Case 2 : </strong> where len(obj)  != nbytes </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array

array1 = array.array('i', range(1, 6))
b2View = memoryview(array1)

print('len :', len(b2View))
print('nbytes :', b2View.nbytes)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
len : 5
nbytes : 20
</pre></div>

<hr/>


#### readonly

<p> returns True if view is readonly else returns False if view is writable. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = b'Hello World!'
s2 = bytearray(b'Hello World!')

s1View = memoryview(s1)
s2View = memoryview(s2)

print('Bytes is readonly? :', s1View.readonly)
print('ByteArray is readonly? :', s2View.readonly)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Bytes is readonly? : True
ByteArray is readonly? : False
</pre></div>

<hr/>




#### format

<p> Returns the format of underlying object. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import struct

s1 = struct.pack('13si', b'Hello World!', 127)
s1View = memoryview(s1)

print(s1View.format)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
B
</pre></div>

<hr/>



#### itemsize

<p> Returns size in bytes of each element of memoryview. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import array

array2 = array.array('l', range(1, 6))
a2View = memoryview(array2)

print(a2View.itemsize)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
8
</pre></div>

<hr/>


#### ndim

<p> Returns integer n representing dimensions of an array. </p>


#### shape

<p> Returns Tuple of integer representing shape of the memory for n dimensional array. </p>


#### strides

<p> Returns a tuple of integers the length of ndim giving the size in bytes to access each for each dimension of the array. </p>


#### contiguous

<p>  Returns True if memory is contiguous. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import struct

buffer = struct.pack('12i', *range(1, 13))

n1D = memoryview(buffer)

n2D = n1D.cast('i', shape=[3, 4])
n2D.tolist()

print("cast('i', shape=[3, 4]) :")
print(n2D.tolist())
print('ndim       :', n2D.ndim)
print('shape      :', n2D.shape)
print('strides    :', n2D.strides)
print('contiguous :', n2D.contiguous)

n3D = n1D.cast('i', shape=[2, 2, 3])
n3D.tolist()

print("\ncast('i', shape=[2, 2, 3]) :")
print(n3D.tolist())
print('ndim       :', n3D.ndim)
print('shape      :', n3D.shape)
print('strides    :', n3D.strides)
print('contiguous :', n3D.contiguous)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
cast('i', shape=[3, 4]) :
[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
ndim       : 2
shape      : (3, 4)
strides    : (16, 4)
contiguous : True

cast('i', shape=[2, 2, 3]) :
[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]]
ndim       : 3
shape      : (2, 2, 3)
strides    : (24, 12, 4)
contiguous : True
</pre></div>

<hr/>


#### c_contiguous

<p> Returns True if memory is C-contiguous. </p>


#### f_contiguous

<p> Returns True if memory is Fortran contiguous. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import struct

buffer = struct.pack('12i', *range(1, 13))
n1D = memoryview(buffer)

print('c_contiguous :', n1D.c_contiguous)
print('f_contiguous :', n1D.f_contiguous)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
c_contiguous : True
f_contiguous : True
</pre></div>

<hr/>

{% include links.html %}
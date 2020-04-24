---
title: Struct
layout: tutorial
tags: [Struct,  bytes,  bytearray, calcsize(), format, size, pack(), pack_into(), unpack(), unpack_from(), iter_unpack()]
sidebar: python_sidebar
permalink: python_struct.html
folder: python
prev_section: 
prev_section_title: 
prev: python_array.html
prev_title: Array
next: python_memoryview.html
next_title: MemoryView
next_section: 
next_section_title: 
summary: Struct object functions and attributes.
---

## Struct

<p> Module enables conversions between Python objects and C struct represented as bytes object. </p>

<div id="tut-content"> 
    <ul>
        <li> It is mainly used to transfer data to the network or to disk file. </li>
        <li> To handle platform independent data use 'standard' size and alignment instead of 'native' size and alignment and avoid implicit padding bytes. </li>
        <li> It supports object that support buffer protocol and provide either read-only or read-writable buffer. bytes and bytearray are built in objects which implements buffer protocol. </li>
    </ul> 
</div>


### Format

<div id="tut-content"> 
    <ul>
        <li> Format of struct is specified as string which is used for packing and unpacking of data. </li>
        <li> Format string contains format characters which specifies type to be packed or unpacked </li>
    </ul> 
</div>


#### Byte order, Size and Alignment

character |     Byte order      |   size   | Alignment
:---:  | :--- | :--- | :---
   @      |      native         | native   | native
   =      |      native         | standard | none
   <      |    little-endian    | standard | none
   >      |     big-endian      | standard | none
   !      | network(big-endian) | standard | none

<br/>

<div id="tut-content"> 
    <ul>
        <li> By default C types are represented in machine's native format and byte order and alignment is done according to C compiler rules. </li>
        <li> If first character of the format is none of above character, python implicitly takes '@'. </li>
    </ul> 
</div>


<br/>

<div id="tut-content"> 
    <ul>
        <li> For native byte order padding is not added to at beginning or at the end of the encoded struct, padding is only added between the elements of the struct. </li>
        <li> For non-native byte order such as '<', '>', '!' no padding is added between elements os struct. </li>
        <li> For aligning end with size, zeroes are added to the end of struct. </li>
    </ul> 
</div>

<br/>



#### Format characters

char |      C Type        |  Python type   |  standard <br/> size
:---:  | :--- | :--- | :---
 x   | pad bytes          |      -         |    -
 c   | char               | bytes of len 1 |    1
 b   | signed char        | integer        |    1
 B   | unsigned char      | integer        |    1
 ?   | _Bool              | bool           |    1
 h   | short              | integer        |    2
 i   | int                | integer        |    4
 I   | unsigned int       | integer        |    4
 l   | long               | integer        |    4
 L   | unsigned long      | integer        |    4
 q   | long long          | integer        |    8
 Q   | unsigned long long | integer        |    8
 e   | half precision     | float          |    2
 f   | float              | float          |    4
 d   | double             | float          |    8
 s   | char[]             | bytes          |    -
 p   | char[]             | bytes          |    -
 P   | void *             | int            |    -
 n   | ssize_t            | integer        |    -
 N   | size_t             | integer        |    -

<br/>

 <div id="tut-content"> 
    <ul>
        <li> char 'n' and 'N' are only available on native byte ordering. </li>
        <li> 'p' format character encodes "Pascal string", a short variable length string stored in fixed number of bytes.</li>
        <li> For '?' format character return value is either 'True' or 'False'.</li>
        <li> A format character may be preceded by integer like '4i' means 'iiii' four times repeating 'i'.  If length is not given default is 1. </li>
        <li> For format character 's' length of string is represented as '10s' means a 10 bytes string.</li>
        <li> white space between characters are ignored. A count and its format should not contain white space.</li>
    </ul> 
</div>




#### calcsize(format)

<p> Returns size of struct for given format in string.  </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import struct
print("calcsize('i13sf') :", struct.calcsize('i13sf'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
calcsize('i13sf') : 24
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Different order of formatting character may result in different size of struct due to padding. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import struct

print("calcsize('13si') :", struct.calcsize('13si'))
print(struct.pack('13si', b'Hello World!', 127))
print("calcsize('i13s') :", struct.calcsize('i13s'))
print(struct.pack('i13s', 127, b'Hello World!'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
calcsize('13si') : <div id="tut-highlight">20</div>
b'Hello World!\x00\x00\x00\x00\x7f\x00\x00\x00'
calcsize('i13s') : <div id="tut-highlight">17</div>
b'\x7f\x00\x00\x00Hello World!\x00'
</pre></div>

<hr/>


## Struct class

<p> Returns a new struct object which can pack and unpack data according to given format in string. </p>

### Constructor

<p id="tut-cons"> Struct(format) </p>
<p> Returns a new struct object which can pack and unpack data according to given format in string. </p>

### Attributes

#### format

<p> Returns format string used for constructing the object. </p>

#### size

<p> Returns calculated size of the struct. </p>


<br/>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from struct import Struct

struct1 = Struct('@i13sf')
print('Format :', struct1.format)
print('Size   :', struct1.size)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Format : @i13sf
Size   : 24
</pre></div>

<hr/>





### Functions

#### pack(v1, v2, ...)

<p> Returns byte object with values v1, v2, ... in given struct object's format. Values must be provided in order of given format. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import struct

byteOrder = {'default(native)': 'i13sf',
             'native(explicit)': '@i13sf',
             'little-endian': '<i13sf',
             'big-endian': '>i13sf'
            }

for formatting in byteOrder:
    sendBytes = struct.pack(byteOrder[formatting], 127, b'Hello World!', 3.14)
    print(f"{formatting} ['{byteOrder[formatting]}'] ==> {sendBytes}")


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
default(native) ['i13sf'] ==> b'\x7f\x00\x00\x00Hello World!\x00\x00\x00\x00\xc3\xf5H@'
native(explicit) ['@i13sf'] ==> b'\x7f\x00\x00\x00Hello World!\x00\x00\x00\x00\xc3\xf5H@'
little-endian ['<i13sf'] ==> b'\x7f\x00\x00\x00Hello World!\x00\xc3\xf5H@'
big-endian ['>i13sf'] ==> b'\x00\x00\x00\x7fHello World!\x00@H\xf5\xc3'
</pre></div>

<hr/>



#### pack_into( buffer, offset, v1, v2, ...)

<p> Packs values v1, v2, ... in given format of struct object and write the packed bytes into writeable buffer at given offset. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from struct import Struct

struct1 = Struct('@i13sf')
buffer = bytearray(56)

struct1.pack_into(buffer, 0, 129, b'Hello Struct!', 4.69)
struct1.pack_into(buffer, 24, 130, b'Hello Python!', 3.28)

print('Buffer :', buffer)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Buffer : bytearray(b'\x81\x00\x00\x00Hello Struct!\x00\x00\x00{\x14\x96@\x82\x00\x00\x00Hello Python!\x00\x00\x00\x85\xebQ@\x00\x00\x00\x00\x00\x00\x00\x00')
</pre></div>

<hr/>





#### unpack(buffer)

<p>  Returns Tuple containing unpacked values from the buffer using structs's format. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from struct import Struct

struct1 = Struct('@i13sf')
sendBytes = b'\x7f\x00\x00\x00Hello Struct!\x00\x00\x00\xc3\xf5H@'

originalObj = struct1.unpack(sendBytes)
print(originalObj)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(127, b'Hello Struct!', 3.140000104904175)
</pre></div>

<hr/>



#### unpack_from(buffer, offset=0)

<p> Unpacks the value according to struct object's format from the buffer starting at position offset and return the result in Tuple. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from struct import Struct

struct1 = Struct('@i13sf')
sendBytes = b'\x7f\x00\x00\x00Hello Struct!\x00\x00\x00\xc3\xf5H@\x80\x00\x00\x00Hello Python!\x00\x00\x00\x85\xebQ@'

print(struct1.unpack_from(sendBytes, 24))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Object type : <unpack_iterator object at 0x7faa5029acc0>
(128, b'Hello Python!', 3.2799999713897705)
</pre></div>

<hr/>



#### iter_unpack(buffer)

<p>  Iteratively unpack equal size of chunks from the buffer in struct's format. buffer size must be in multiple of given format. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from struct import Struct

struct1 = Struct('@i13sf')
sendBytes = b'\x7f\x00\x00\x00Hello Struct!\x00\x00\x00\xc3\xf5H@\x80\x00\x00\x00Hello Python!\x00\x00\x00\x85\xebQ@'
originalIter = struct1.iter_unpack(sendBytes)

print('Object type :', originalIter)

for item in originalIter:
    print(item)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Object type : <unpack_iterator object at 0x7faa5029acc0>
(127, b'Hello Struct!', 3.140000104904175)
(128, b'Hello Python!', 3.2799999713897705)
</pre></div>

<hr/>



## Struct Module Functions

<p> Struct module includes same set of function as explained for struct class. Each function take an extra argument ' format ' as compared to Struct class and works same as explained in Struct class.   </p>

### pack(format, v1, v2, ...)

### pack_into(format, buffer, offset, v1, v2, ...)

### unpack(format, buffer)

### unpack_from(format, buffer, offset=0)

### iter_unpack(format, buffer)




{% include links.html %}
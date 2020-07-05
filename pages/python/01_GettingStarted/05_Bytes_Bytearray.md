---
title: Python Bytes and ByteArray
layout: tutorial
last_modified_at: 2020-07-05
tags: [python, unicode, ASCII, ord(), chr(), hex(), fromhex(), encode(), decode(), BOM, bytes, bytearray, immutable_vs_mutable, mutable, immutable, append(), clear(), copy(), extend(), insert(), pop(), remove(), reverse()]
sidebar: python_sidebar
permalink: python_bytes_bytearray.html
folder: python
prev: python_string.html
prev_title: String
next: python_date_time_datetime.html
next_title: DateTime
summary: Python encoding and decoding string, bytes and bytearray object and their methods, char to ASCII.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3J1hjduLdsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<hr/>



## Encoding and Decoding string



### String's internal representation in Python 3

<div id="tut-content"> 
    <ul>
        <li> Python 3 strings are by default Unicode (UTF-8).</li>
        <li> Computer understands 0 and 1 only , so while transferring text data across the network or storing data to a file we need  to convert strings in to 0 and 1. That is a ByteString.</li>
        <li> UTF-8 is most popular encoding to represent characters and symbols of different languages, in which each character is mapped to it's unique Hex value.</li>
        <li> <strong> ASCII:</strong> ASCII supports only english latter and numbers and symbol, it's 7 bit character representation in 0 to 127. </li>
        <li> <strong> Unicode:</strong> Unicode supports multiple languages and symbols, unicode characters includes ASCII character and are variable length of 1,2 or 4 bytes. Unicode characters can be represented with \u and \U for unicode escape or \x is hexadecimal escape. </li>
    </ul> 
</div>


<hr/>






### Character to ASCII code conversion


#### ord(c)

<p> Converts a character to it's equivalent Int ASCII code </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print("ord('A') :", ord('A'))
print("ord('Z') :", ord('Z'))
print("ord('a') :", ord('a'))
print("ord('z') :", ord('z'))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
ord('A') : 65
ord('Z') : 90
ord('a') : 97
ord('z') : 122
</pre></div>

<hr/>




#### chr(int)

<p> Coverts Int representing ASCII code to it's equivalent character. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print("chr(65) :", chr(65))
print("chr(90) :", chr(90))
print("chr(97) :", chr(97))
print("chr(122) :", chr(122))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
chr(65) : A
chr(90) : Z
chr(97) : a
chr(122) : z
</pre></div>

<hr/>



#### hex(int)

<p> Converts integer to hexadecimal. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(hex(ord('A')))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0x41
</pre></div>

<hr/>



### encode('encoding')

<p> Converting string object into bytes(binary 0-1) which can be stored in a file or transmitted over network. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'Hello World!'
print('ASCII :', s1.encode('ASCII'))
print('UTF-8 :', s1.encode('UTF-8'))

uniStr = '\xdc\xf1'
print('\n'+uniStr)

sBytes = uniStr.encode('utf-8')
print('sBytes :', sBytes)
print('type(sBytes) :', type(sBytes))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
ASCII : b'Hello World!'
UTF-8 : b'Hello World!'
Üñ
sBytes : b'\xc3\x9c\xc3\xb1'
type(sBytes) : <class 'bytes'>
</pre></div>

<hr/>









### decode('encoding')

<p> Converting bytes(binary 0-1) into string representation which can be understood by human. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

sBytes = b'\xc3\x9c\xc3\xb1'
uStr = sBytes.decode('utf-8')
print('Original String :', uStr)
print('Type of object :', type(uStr))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Original String : Üñ
Type of object : <class 'str'>
</pre></div>

<hr/>



### Encoding a string in to different encodings



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

uniStr = 'café'
for encoding in ['latin_1', 'utf_8', 'utf_16', 'utf_32']:
    sBytes = uniStr.encode(encoding)
    print(f'{encoding:<10}{sBytes}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
latin_1   b'caf\xe9'
utf_8     b'caf\xc3\xa9'
utf_16    b'\xff\xfec\x00a\x00f\x00\xe9\x00'
utf_32    b'\xff\xfe\x00\x00c\x00\x00\x00a\x00\x00\x00f\x00\x00\x00\xe9\x00\x00\x00'
</pre></div>




{% include callout.html content="**BOM : Byte-Order Mark** : While converting string to bytes extra information is attached at the beginning of the byte string in above example utf_16 encoding \xff\xfe is 'little-endian' byte order of Intel CPU." type="primary" %} 



<hr/>



## Bytes Objects

### Why we need bytes object ?

<div id="tut-content"> 
    <ul>
        <li> To represent non-textual data such as images, network stream data, videos. </li>
        <li> bytes object is  immutable.</li>
    </ul> 
</div>

<hr/>



### bytes constructor
<p id="tut-cons"> bytes(str, encoding [, errors]) </p>
<div id="tut-content"> 
    <ul>
        <li> <strong> str :</strong> String to be represented as Bytes.  </li>
        <li> <strong> encoding :</strong> Encoding of Bytes object  </li>
        <li> <strong> errors : </strong> Default is 'strict' raises 'UnicodeError' when encoding errors.It can be set to 'ignore', 'replace', 'xmlcharrefreplace', 'backslashreplace' etc. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

byteObj = bytes('abc', 'ascii')
print(byteObj)
print(type(byteObj))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b'abc'
<class 'bytes'>
</pre></div>

<hr/>


### Declaring byte object : start string with 'b' or 'B'

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

byteObj = b'This is stored as bytes each character represented as 8-bits(1 Byte in 0-255 integer code)'

# or
byteObj2 = b"abc"

# or multi line as string
byteObj3 = b""" abc
pqr
xyz
"""

print(byteObj, '\n', byteObj2, '\n', byteObj3, sep='')
print(type(byteObj), type(byteObj2), type(byteObj3))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b'This is stored as bytes each character represented as 8-bits(1 Byte in 0-255 integer code)'
b'abc'
b' abc\npqr\nxyz\n'
<class 'bytes'> <class 'bytes'> <class 'bytes'>
</pre></div>

<hr/>







### Functions of Bytes object

<p> Bytes objects contains methods similar to string object with  following differences </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('String methods which are not available with bytes object :')
print(set(dir(str)) - set(dir(bytes)))
print('\nBytes methods which are not available with string object :')
print(set(dir(bytes)) - set(dir(str)))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
String methods which are not available with bytes object :
{'isdecimal', 'format_map', 'encode', 'isidentifier', 'format', 'isnumeric', 'isprintable', 'casefold'}

Bytes methods which are not available with string object :
{'hex', 'decode', 'fromhex'}
</pre></div>


<hr/>


#### hex([sep[, bytes_per_sep]])

<p> Return a string object containing two hexadecimal digits for each byte in the instance. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>sep : </strong> An optional parameter sep takes single character as input to separate the bytes. </li>
        <li>  <strong>bytes_per_sep : </strong> Digit specifying separator after give bytes. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

b1 = b'Hello World!'
print('b1.hex()       :', b1.hex())
print("b1.hex(':')    :", b1.hex(':'))
print("b1.hex(':', 5) :", b1.hex(':', 5))




{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b1.hex()       : 48656c6c6f20576f726c6421
b1.hex(':')    : 48:65:6c:6c:6f:20:57:6f:72:6c:64:21
b1.hex(':', 5) : 4865:6c6c6f2057:6f726c6421
</pre></div>

<hr/>




#### fromhex(str)

<p> Returns bytes object form a string containing hex values. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

h1 = '48656c6c6f20576f726c6421'
print(bytes.fromhex(h1))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b'Hello World!'
</pre></div>

<hr/>





#### Mixing bytes and string

<p> Bytes and string object can not be mixed in operations, it will raise TypeError exception. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

greetings = 'Have a nice' + b'Day!'

greetings = b'Have a nice' + b'Day!'
print(greetings)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 1, in <&zwj;module&zwj;>
TypeError: can only concatenate str (not "bytes") to str
</pre>
<pre class="result-content">

b'Have a niceDay!'
</pre></div>

<hr/>

















## bytearray

<p> Mutable object which can store binary data and simple text (ascii). </p>


### bytes(str, 'encoding', ['errors']) 

<div id="tut-content"> 
    <ul>
        <li> <strong>encoding : </strong>Encoding to be used to encode given string  </li>
        <li> <strong> errors : </strong> Default is 'strict' raises 'UnicodeError' when encoding errors.It can be set to 'ignore', 'replace', 'xmlcharrefreplace', 'backslashreplace' etc. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray('hello bytes!', 'ascii')
print(barray)

barray = bytearray('café', 'UTF-8')
print(barray)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'hello bytes!')
bytearray(b'caf\xc3\xa9').
</pre></div>

<hr/>







### bytearray(bytes) 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray(b'Hello World!')
print(barray)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'Hello World!')
</pre></div>

<hr/>




### Changing values of bytearray



<div id="tut-content"> 
    <ul>
        <li> <strong> Replacing single byte of bytearray</strong> </li>
    </ul> 
</div>
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray('hello bytes!', 'ascii')
barray[0] = b'H'      # this gives you an error

barray = bytearray('hello bytes!', 'ascii')
print(barray, id(barray))
barray[0] = ord('H')
print(barray, id(barray))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>

<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 2, in <&zwj;module&zwj;>
TypeError: 'bytes' object cannot be interpreted as an integer</pre>

<pre class="result-content">

bytearray(b'hello bytes!') 140388614772848
bytearray(b'Hello bytes!') 140388614772848
</pre></div>

<hr/>




### Replacing a slice of bytearray with bytes object



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray('hello bytes!', 'ascii')
print(barray)

barray[11:] = b'array'
print(barray)

barray[0:1] = b'H'  # Replacing single character using slice
print(barray)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'hello bytes!')
bytearray(b'hello bytesarray')
bytearray(b'Hello bytesarray')
</pre></div>

<hr/>





### Functions

<div id="tut-content"> 
    <ul>
        <li> <strong>Differences of function in comparision with string</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('String Functions which are not available with bytearray object :')
diff = set(dir(str)) - set(dir(bytearray))
print(list(s for s in diff if not s.startswith('__')))

print('\nbytearray Functions which are not available with string object :')
diff = set(dir(bytearray)) - set(dir(str))
print(list(s for s in diff if not s.startswith('__')))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
String Functions which are not available with bytearray object :
['isdecimal', 'format_map', 'encode', 'isidentifier', 'format', 'isnumeric', 'isprintable', 'casefold']

bytearray Functions which are not available with string object :
['clear', 'remove', 'append', 'hex', 'insert', 'copy', 'pop', 'extend', 'reverse', 'decode', 'fromhex']
</pre></div>

<hr/>





#### append(int)

<p> Appends a byte(an int) to the end of the byte array. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray(b'Hello World')
print(barray)

barray.append(ord('.'))
print(barray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'Hello World')
bytearray(b'Hello World.')
</pre></div>

<hr/>





#### clear()

<p> Clears all data of the byte array. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray(b'Hello World')
print(barray)

barray.clear()
print(barray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'Hello World')
bytearray(b'')
</pre></div>

<hr/>




#### copy()

<p> Returns copy of the bytearray object. </p>

<div id="tut-content"> 
    <ul>
        <li> Copy returns separate object such that changing one does not affect other. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray(b'Hello World')
bcopy = barray.copy()
print('barray :', barray)
print('bcopy  :', bcopy)

bcopy[0:] = b'Hello Byte Array copy'
print('barray :', barray)
print('bcopy  :', bcopy)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
barray : bytearray(b'Hello World')
bcopy  : bytearray(b'Hello World')
barray : bytearray(b'Hello World')
bcopy  : bytearray(b'Hello Byte Array copy')
</pre></div>

<hr/>



#### extend(bytes)

<p> Appends given byte array or byte object to the end . </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

ba1 = bytearray('Hello', 'UTF-8')
ba2 = bytearray(' World!', 'UTF-8')

# Extending bytearray
ba1.extend(ba2)
print(ba1)

# Extending Byte object
ba1.extend(b'New Bytes')
print(ba1)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'Hello World!')
bytearray(b'Hello World!New Bytes')
</pre></div>

<hr/>






#### insert(index, byte)

<p> Inserts byte(Int) at given index. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray(b'Helo World!')
barray.insert(3, ord('l'))
print(barray)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'Hello World!')
</pre></div>

<hr/>





#### pop(index)

<p> Removes and returns the byte(Int) at given index. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray(b'Hello World!')
print(barray)

print('Popped :', chr(barray.pop(6)))
print(barray)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'Hello World!')
Popped : W
bytearray(b'Hello orld!')
</pre></div>

<hr/>







<div id="tut-content"> 
    <ul>
        <li> If index is not given remove and returns last character </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray(b'Hello World!')
print(barray)

ch = chr(barray.pop())
print('Popped :', ch)

print(barray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'Hello World!')
Popped : !
bytearray(b'Hello World')
</pre></div>

<hr/>





#### remove(byte)

<p> Removes the given byte(Int) from the bytearray. </p>


<div id="tut-content"> 
    <ul>
        <li> If there are multiple occurrences of given byte, it will remove the first occurrence.</li>
        <li> It raises ValueError if given byte does not exists in bytearray.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray(b'Hello World!')

print(barray)
barray.remove(ord('W'))

print(barray)
barray.remove(ord('W'))  # This will raise ValueError

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'Hello World!')
bytearray(b'Hello orld!')
</pre>

<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 1, in <&zwj;module&zwj;>
ValueError: value not found in bytearray</pre>

</div>

<hr/>




#### reverse()

<p> Reverses the byte array. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray(b'Hello World!')
print(barray)
barray.reverse()
print(barray)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'Hello World!')
bytearray(b'!dlroW olleH')
</pre></div>

<hr/>





#### hex([sep[, bytes_per_sep]])

<p> Return a string object containing two hexadecimal digits for each byte in the instance. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>sep : </strong> An optional parameter sep takes single character as input to separate the bytes. </li>
        <li>  <strong>bytes_per_sep : </strong> Digit specifying separator after give bytes. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray(b'Hello World!')
print('barray.hex()       :', barray.hex())
print("barray.hex(':')    :", barray.hex(':'))
print("barray.hex(':', 5) :", barray.hex(':', 5))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
barray.hex()       : 48656c6c6f20576f726c6421
barray.hex(':')    : 48:65:6c:6c:6f:20:57:6f:72:6c:64:21
barray.hex(':', 5) : 4865:6c6c6f2057:6f726c6421
</pre></div>

<hr/>













#### decode('encoding') 

<p>  Returns string object from bytearray object. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

barray = bytearray('Hello World!', 'UTF-8')

strObj = barray.decode('UTF-8')

print(strObj, type(strObj))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World! <class 'str'>
</pre></div>

<hr/>




#### fromhex(str) 

<p>  Returns bytearray object from string containing hexadecimal values. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(bytearray.fromhex('48656c6c6f20576f726c6421'))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'Hello World!')
</pre></div>

<hr/>



### Example demonstrating usefulness of bytearray

<p> In Below code  for loop modifies variable atoz at each iteration, such frequent modification to a string object creates large amount of string objects in memory because string is an immuatble object.
In oder to avoid that bytearray can be used for memory efficient operations. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from string import ascii_lowercase
atoz = bytearray()
for ch in ascii_lowercase:
    atoz += bytes(ch, 'utf-8')

print(atoz)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
bytearray(b'abcdefghijklmnopqrstuvwxyz')
</pre></div>

<hr/>


{% include links.html %}
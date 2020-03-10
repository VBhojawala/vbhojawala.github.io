---
title: Variables
layout: tutorial
tags: [Variables, Constant, type(), id(), del, ==, is, identity_operator, id_vs_==, string_interning, caching, immutable_object, immutable_vs_mutable, memory_management, int, str, float, bin, oct, hex]
sidebar: python_sidebar
permalink: python_variables.html
folder: python
prev: python_hello_world.html
prev_title: Hello World!
next: 
next_title:
next_section: python_control_flow.html
next_section_title: Control Flow
---

## Variables

<div id="tut-content"> 
    <ul>
        <li> <strong>Definition : </strong> Variable is a label that holds memory location of the object which can change over the time.</li>
    </ul> 
</div>

<!-- Section 1.1 -->

### Types

Type | class | Values
:--- | :--- | :--- 
Integer | int | phone number, Social Security Number,quantity of product etc.
Float | float | interest rates, profit percentage, amount in bank account etc. 
String | str | name, address, poetry, book etc.
Boolean | bool | Exam result(Pass or Fail), switch (On or Off)

### Declaration
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# Integer 
a = 1212

# Float 
b = 12.99  

# String 
c = 'Have a nice Day'

c = "Have a nice Day"

c = '''A multi-line String.
Have a nice Day.'''

c = """A multi-line String.
Have a nice Day."""

# Boolean 
d = True  


{% endhighlight %}
</div>

{% include callout.html content="**Note** : Size of Integer variable in python 3 vary depending of value it is assigned to. It can be even greater than 64-bit. " type="primary" %} 

{% include links.html %}

### Variable Names

<div id="tut-content"> 
    <ul>
        <li> Variable name must begin with a letter (a-z, A-z) or ' _ '( underscore).</li>
        <li> Variable name can contain numeric value (0-9) in addition to (a-z, A-Z and _ ). </li>
        <li> Variable names are case sensitive. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# Valid variable names
v1 = 122
Interest_Rate = 3.6
_balance = 12000

# Invalid variable names
2d = 1215
$amount = 120.59
1st = 100

{% endhighlight %}
</div>

### Constants 

<div id="tut-content"> 
    <ul>
        <li> <strong>Constants : </strong> There are no constant variables in Python. For developer's reference only variable names are given in upper case. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

PI = 2.17
INTEREST_RATE = 7.6

{% endhighlight %}
</div>


### Checking type of variable

<div id="tut-content"> 
    <ul>
        <li> <strong>type() : </strong> function is used for checking type of variable. It returns class of variable. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 1212
b = 12.99
c = 'Have a nice Day'
d = True

print("Type of Variable a is "+str(type(a)))
print("Type of Variable b is "+str(type(b)))
print("Type of Variable c is "+str(type(c)))
print("Type of Variable d is "+str(type(d)))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Type of Variable a is <class 'int'>
Type of Variable b is <class 'float'>
Type of Variable c is <class 'str'>
Type of Variable d is <class 'bool'>
</pre></div>

<hr/>



### Assigning variable values

<div id="tut-content"> 
    <ul>
        <li> <strong>Re-assigning</strong> variable values just changes the reference to a memory address. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = c
b = d
c = b
d = 134

print("\nAfter Replacing the values of the variable:\n")

print("Type of Variable a is "+str(type(a)))
print("Type of Variable b is "+str(type(b)))
print("Type of Variable c is "+str(type(c)))
print("Type of Variable d is "+str(type(d)))

{% endhighlight %}
</div>


<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
After Replacing the values of the variable:
Type of Variable a is <class 'str'>
Type of Variable b is <class 'bool'>
Type of Variable c is <class 'float'>
Type of Variable d is <class 'int'>
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>Chained assignment : </strong> Declaring and assigning multiple variable at once. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = b = 122
print(a, b)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
122 122
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong>Short-hand assignment </strong></li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = b = 122

# Normal use case
# a = a + b

# with short-hand
a += b  # same can be applied with -, * , / etc.


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
244
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>Multiple assignment</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a, b, c = 122, 'Good Morning', 12.54
print(a, b, c)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
122 Good Morning 12.54
</pre></div>

<hr/>







<div id="tut-content"> 
    <ul>
        <li> <strong>Swapping the values of variables</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 123
b = 456

a, b = b, a

print('a ->', a)
print('b ->', b)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
a -> 456
b -> 123
</pre></div>

<hr/>



### Comparing value of two Variable

<div id="tut-content"> 
    <ul>
        <li> <strong>' == ' : </strong> is used for comparing values of two variables.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 127
b = 152
c = 127

print('Integer a equals b ?', a == b)
print('Integer a equals c ?', a == c)



a = 'Hello World'
b = 'Hello World!'
c = 'Hello World!'

print('\nString a equals b ?', a == b)
print('String b equals c ?', c == c)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Integer a equals b ? False
Integer a equals c ? True
String a equals b ? False
String b equals c ? True
</pre></div>

<hr/>


### None : Absence of any value (Null).

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = None

# type of None
print(type(a))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<class 'NoneType'>
</pre></div>

<hr/>


### del : removing variable from memory


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 15
print(a)
del a
print(a)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
15
</pre>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 4, in <&zwj;module&zwj;>
NameError: name 'a' is not defined</pre>
</div>

<hr/>



### Mutable vs Immutable


<div id="tut-content"> 
    <ul>
        <li> Int, Boolean and String etc. are immutable data types.Means once an object is created can not be changed. </li>
        <li> While changing the value of variable holding immutable data type , a new object is created if it does not exists in memory and reference of object is assigned to the variable.</li>
        <li> List, Set, Dictionary are mutable data structure whose value can be changed without creating new object or changing memory address.</li>
        <li> Key benefit of immutable object is memory saving, creating 1000 variable with same value will point the same object in memory.</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 5
print(id(a))

a = a+1
print(id(a))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
94190667933568
94190667933600
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Slides</strong> </li>
    </ul> 
</div>

<div id='tut-ppt'>
    <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="/docs/01Variables.pdf" allowfullscreen></iframe>
    </div>
</div>


### Shared reference

<div id="tut-content"> 
    <ul>
        <li> <strong>id() : </strong>returns identity(id is memory address in CPython) of an object. </li>
        <li> In Python each object has it's own unique identity. Two different objects can not have the same identity.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 15
b = a

print(id(a))
print(id(b))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
94190667933888
94190667933888
</pre></div>

<hr/>







### 'is' : an identity operator

<div id="tut-content"> 
    <ul>
        <li> It returns True if two variables points to same object in memory.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 15
b = 15

print(a is b)
# is same as
print(id(a) == id(b))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
True
True
</pre></div>

<hr/>




### id() vs '=='

<div id="tut-content"> 
    <ul>
        <li> '==' is used for comparing value of two Variable while identity operator 'is' checks the memory origin of two variables. </li>
        <li> '==' compares the value stored at memory location pointed by a variable.</li>
    </ul> 
</div>

{% include callout.html content="**Note** : Two variable may contain same value but stored at different location in memory. " type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 'Hello'
b = 'Hello'

# Comparing the values
print('a == b', a == b)

# Comparing memory location
print('a is b', a is b)


a = 14.0
b = 14

# Comparing the values
print('\na == b', a == b)

# Comparing memory location
print('a is b', a is b)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
a == b True
a is b True

a == b True
a is b False
</pre></div>

<hr/>





### Interning (Caching immutable object)

<div id="tut-content"> 
    <ul>
        <li> Before crating new immutable object python first checks if an object already exist in memory, and if it finds in memory returns the reference to Object. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 'Hello'
b = 'Hello'


{% endhighlight %}
</div>

<div id="tut-content"> 
    <ul>
        <li> When variable b is created , Python first internally checks , if 'Hello' already exists in memory it will not create new object and returns the memory location of 'Hello' string which is already present in memory. </li>
        <li> which means now variable a and b should be pointing at same memory location. We can check it by comparing id() of both variables. </li>
    </ul> 
</div>
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 'Hello'
b = 'Hello'

print(id(a))
print(id(b))

{% endhighlight %}
</div>


<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
140266408081648
140266408081648
</pre></div>

<hr/>




### which immutable objects are cached in python?
{% include callout.html content="**Note** : Interning (Caching) immutable object is implementation specific which may very. " type="primary" %} 
<div id="tut-content"> 
    <ol>    
        <li> <strong>strings </strong> </li>
        <li> <strong>Integer </strong></li>
        <li> <strong>Tuple with immutable items only </strong> (yet to be cover)</li>
    </ol>
</div>





###  Memory Management in Python
<p>  How long does an object stays in memory? </p>

<div id="tut-content"> 
    <ul>
        <li> When creating an object Python creates a counter and initializes it to 1, which counts how many variable referencing the object. When Object is reference by new variable counter is increased and, when variable points to other object or deleted from memory counter decreased. </li>
        <li> When counter reaches to zero garbage collector of Python removes an object from the memory.</li>
    </ul> 
</div>




## int class methods

### int.bit_length() 
<div id="tut-content"> 
    <ul>
        <li> <strong> Returns number of bits used for representing integer.</strong>Title </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 30
print(a.bit_length())
print(bin(a))

b = 9781254548754115
print(b.bit_length())
print(bin(b))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
5
0b11110
54
0b100010101111111111111111001010110101100000111011000011
</pre></div>

<hr/>










### from_bytes(bytes, byteorder, *, signed=False)
<p> Returns array of bytes for given int. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>length :</strong> length of byte array used for representing</li>
        <li> <strong>byteorder :</strong> can be 'big' or 'little'</li>
        <li> <strong>signed :</strong> determines number is represented as two's complement or not. Default signed is False and if negative number is given raises OverflowError.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 25
print(a.to_bytes(6, 'big'))
print(a.to_bytes(6, 'little'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b'\x00\x00\x00\x00\x00\x19'
b'\x19\x00\x00\x00\x00\x00'
</pre></div>

<hr/>



### int.to_bytes(length, byteorder, *, signed=False)
<p> Returns integer from array of bytes bytes. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

aBytes = b'\x00\x00\x00\x00\x00\x19'
print(int.from_bytes(aBytes, 'big'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
25
</pre></div>

<hr/>





## float class methods

### float.is_integer()

<p> Returns True if value can exactly represented as integer. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

f1 = 9.0
print(f1.is_integer())

f2 = 3.27
print(f2.is_integer())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
True
False
</pre></div>

<hr/>




### float.hex()

<p> Returns hexadecimal string for given float value. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

f1 = 6.396
print(f1.hex())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0x1.995810624dd2fp+2
</pre></div>

<hr/>




### float.fromhex(s)

<p> Returns float from string with hexadecimal number. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

fs1 = '0x1.995810624dd2fp+2'
print(float.fromhex(fs1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
6.396
</pre></div>

<hr/>




### float.as_integer_ratio()

<p> Returns float represented as ratio of integer. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

f1 = 7.5
f1.as_integer_ratio()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(15, 2)
</pre></div>

<hr/>






## Converting variable types

### int(value) 
<p> Converts given value to integer </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# Float to int
a = int(122.12)
print('Float(122.12) to int :', a)

# Boolean to int
a = int(True)   # 0 = False, any other value will be True
print('Boolean(True) to int :', a)

# String to int
a = int('1212')
print('String (\'1212\') to int :', a)

# Binary to int
a = int('10100', 2)
print('Binary(10100) to int :', a)

# Octal to int
a = int('715764', 8)
print('Octal(715764) to int :', a)

# Hexadecimal to int
a = int('1FA9A', 16)
print('Hexadecimal(1FA9A) to int :', a)

# you can't pass other than numeric value in string
a = int('12a12')   # will raise ValueError


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Float(122.12) to int : 122
Boolean(True) to int : 1
String ('1212') to int : 1212
Binary(10100) to int : 20
Octal(715764) to int : 236532
Hexadecimal(1FA9A) to int : 129690
</pre>

<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 2, in <&zwj;module&zwj;>
ValueError: invalid literal for int() with base 10: '12a12'</pre>
</div>

<hr/>





### float(value) 
<p> Converts given value to float. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

b = float(1200)
print('Int(1200) to float :', b)

# Boolean to float
b = float(False)
print('Boolean(False) to float :', b)

# String to float
b = float('55.974')
print('String(\'55.974\') to float :', b)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Int(1200) to float : 1200.0
Boolean(False) to float : 0.0
String('55.974') to float : 55.974
</pre></div>

<hr/>




### bool(value) 
<p> Converts given value to Boolean. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# Int to boolean
c = bool(-1)   # 0 = False, any other value will be True
print('Int(-1) to boolean :', c)

# Float to boolean
c = bool(0.0000)  # 0.0=False any other value will be True
print('Float(0.0000) to boolean :', c)

# String to boolean
c = bool('Some string')  # '' = False any other value will be True
print('String(\'Some string\') to boolean :', c)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Int(-1) to boolean : True
Float(0.0000) to boolean : False
String('Some string') to boolean : True
</pre></div>

<hr/>




### str(value) 
<p> Converts given value to String. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# Int to String
d = str(1200)
print('Int(1200) to String :', d)

# Float to String
d = str(12.00)
print('Float(12.00) to String :', d)

# Boolean to String
d = str(True)
print('Boolean to String :', d)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Int(1200) to String : 1200
Float(12.00) to String : 12.0
Boolean to String : True
</pre></div>

<hr/>


## Binary, Octal and Hexadecimal

### Declaring an Integer as Binary, Octal and Hexadecimal

<div id="tut-content"> 
    <ul>
        <li> <strong>Binary : </strong>Starts with ' 0b '. </li>
        <li> <strong>Octal : </strong>Starts with ' 0o '. </li>
        <li> <strong>Hexadecimal : </strong>Starts with ' 0x ' or ' 0X '. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# binary
b1 = 0b10110  
print(b1)

# Octal
o1 = 0o7411   
print(o1)

# Hexadecimal
hd1 = 0x1FC0  
print(hd1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
22
3849
8128
</pre></div>

<hr/>


### Integer to binary, octal and hexadecimal string conversion

<div id="tut-content"> 
    <ul>
        <li> <strong>bin() : </strong> converts Integer to binary. </li>
        <li> <strong>oct() : </strong>converts Integer to octal. </li>
        <li> <strong>hex() : </strong>converts Integer to hexadecimal. </li>
    </ul> 
</div>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = bin(45)
print('Binary of 45 :', a)

a = oct(45)
print('Octal of 45 :', a)

a = hex(45)
print('Hexadecimal of 45 :', a)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Binary of 45 : 0b101101
Octal of 45 : 0o55
Hexadecimal of 45 : 0x2d
</pre></div>

<hr/>
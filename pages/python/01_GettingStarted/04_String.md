---
title: Python String
layout: tutorial
tags: [python, str, String, slicing, slice(), substring, indexing, len(), capitalize(), find(), in, index (), upper(), lower(), count(), rfind(),startswith(), endswith(), replace(), strip(), lstrip(), rstrip(), expandtabs(),split(), join(), splitlines(), casefold(), title(), partition(), rpartition(), swapcase(), maketrans(), translate(), isalnum(), isalpha(), isdecimal(), isdigit(), isnumeric(),isidentifier(), islower(), isupper(), istitle(), isspace(), isprintable(), isascii(), center(), ljust(), rjust(), zfill(), string_formatting, printf(), format(), f-string, String_Templating, Template]
sidebar: python_sidebar
permalink: python_string.html
folder: python
prev: python_decimal_fraction.html
prev_title: Decimal and Fraction
next: python_bytes_bytearray.html
next_title: Bytes and ByteArray
summary: Python String object, indexing, slicing, concat, string operators.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/pQ-N2YiEZ_4" allowfullscreen></iframe>
</div> <br/>

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/XSDgUWp-Vdg" allowfullscreen></iframe>
</div> <br/>

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4t2AOCMyvJ8" allowfullscreen></iframe>
</div>


<hr/>


## String 


### String : sequence of characters 

<div id="tut-content"> 
    <ul>    
        <li> <strong> String in python is sequence of character, each character in sequence can be accessed using index. </strong>  </li>
    </ul>
</div>


{% include callout.html content="**Note** : No Character variable type in python " type="primary" %} 


<hr />




### String Indexing


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s = 'Say Hello'


{% endhighlight %}
</div>


<div id="tut-img">
    <img src="/images/tutorials/python/string-Indexing.png" class="tut-img" alt="String Indexing">
</div>

<div id="tut-content"> 
    <ul>
        <li> <strong>variableName[index] : </strong> is used for accessing character at given index. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s = 'Say Hello'
print('Character at index  0  :', s[0])
print('Character at index  2  :', s[2])
print('Character at index  5  :', s[5])
print('Character at index -1  :', s[-1])
print('Character at index -7  :', s[-7])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">

Character at index  0  : S
Character at index  2  : y
Character at index  5  : e
Character at index -1  : o
Character at index -7  : y

</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>Out of range Index :</strong>If given index is out of range it will raise "IndexError: string index out of range" </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s = 'Say Hello'
print(s[9])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 2, in <&zwj;module&zwj;>
IndexError: string index out of range</pre>
</div>

<hr/>



### Slicing string ( Creating SubString )
<p>Slicing creates and returns new String object. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>variableName[start:end] : </strong> Creates substring beginning with start index upto end. Character at index end is not included in result substring. </li>
    </ul> 
</div>

{% include callout.html content="**slice(start, end) :**  function is used internally to create substring." type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s = 'Say Hello'
print(s[0:3])

# using slice() function
print(s[slice(0, 3)])

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Say
Say
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong>  Slicing string up to last character of string :</strong></li>
    </ul> 
</div>

<p> If 'end' argument is not given any value slice will return substring starting from given start index up to last character of the string.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s = 'Say Hello'
print(s[4:])
print(s[-5:])

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello
Hello

</pre></div>

<hr/>








<div id="tut-content"> 
    <ul>
        <li> <strong> Slicing string from first character without giving 'start' argument :</strong></li>
    </ul> 
</div>


<p> If 'start' argument is not given it will return substring beginning with first character of string up to index 'end'.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s = 'Say Hello'
print(s[:4])
print(s[:-6])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Say 
Say

</pre></div>

<hr/>




{% include callout.html content="**Note** : Both 'start' and 'end' arguments of slice function can be blank at the same time such as **s[ : ]** which will return the string as it is. It is useful with 'step' argument. " type="primary" %} 
<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Slicing out of range indexes :</strong></li>
    </ul> 
</div>

<p> If out of range indexes are provided to start and end parameter it returns nothing. If start is within range end argument is out of range it will return substring  from start index to last character of string. If start is out of range and end is within range it will return substring starting from first character of the string up to end index.</p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s = 'Say Hello'
print('s[44:99] :', s[44:99])
print('s[4:44] :', s[4:44])
print('s[-55:4]',   s[-55:4])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
s[44:99] : 
s[4:44] : Hello
s[-55:4] Say
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Slicing  in reverse direction will return nothing for 'start' and 'end' argument.
        Reverse direction slicing can be done with negative 'step' argument.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s = 'Say Hello'
print('s[-1:-4] :', s[-1:-4])
print('s[8:5] :', s[8:5])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
s[-1:-4] : 
s[8:5] : 
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong> slice(start, end, step) : </strong>  Slicing with step. second constructor of slice() function supports for step.  </li>
        <li> With negative 'step' argument 'start' and 'end' arguments are given in reverse direction.</li>
        <li> With 'step'  argument '-1' string (substring) can be reversed. </li  >
    </ul> 
</div>

<div id="tut-img">
    <img src="/images/tutorials/python/string-Indexing.png" class="tut-img" alt="String Indexing">
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s = 'Say Hello'

# alternate words
print('s[::2] :', s[::2])

# alternate words in reverse direction
print('s[::-2] :', s[::-2])

# bigger steps
print('s[1::3] :', s[1::3])

# Reverse the string
print('s[::-1] :', s[::-1])

# with negative index, start and end are given in reverse direction
print('s[8:3:-1] :', s[8:3:-1])

# with negative index and negative step
print('s[-1:-6:-1] :', s[-1:-6:-1])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
s[::2] : SyHlo
s[::-2] : olHyS
s[1::3] : aHl
s[::-1] : olleH yaS
s[8:3:-1] : olleH
s[-1:-6:-1] : olleH
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>String object is immutable, means it can't be changed after creation.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s = 'Say Hello'

s[9] = '!'

s[4:9] = 'Python'


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
TypeError: 'str' object does not support item assignment</pre></div>

<hr/>



### Operators 

<!-- Section 1.2 -->
<div id="tut-content"> 
    <ul>
        <li> <strong> Creating new string object from an Existing String Object.</strong> </li>
        <li> <strong> ' + ' Operator : </strong> Joins (concat) two string and returns new string object. It is also used for inside print function for joining two string without any separator.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = "Hello "
s2 = "Python"

s3 = s1 + s2
print(s3)

# + in print() function to print string without space.
print(s1 + s2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello Python
Hello Python
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Mixing ' + ' with Slices</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = "Hello "
s2 = "Python"
s5 = s1 + "J" + s2[1:]
print(s5)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello Jython
</pre></div>

<hr/>





<!-- Section 1.2 -->
<div id="tut-content"> 
    <ul>
        <li> <strong> ' * ' operator : </strong>Repeats the string for given number of times. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = "Hello "
sm = s1 * 3
print(sm)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello Hello Hello 
</pre></div>

<hr/>








### Functions


#### len(str)

<p> Returns length of the string. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'Hello Python'
length = len(s1)
print("Length :", length)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Length : 12
</pre></div>

<hr/>



#### capitalize()

<p> Capitalizes first character of first word of string and makes rest of words small case. </p>

{% include callout.html content="**Note** : String is an immutable object any operation on object can not change the object, in order to modify content of existing string any string function returns new string object. We need to store the memory address of newly generated string object into variable." type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s2 = 'hELLO World. HeLLO PyThOn.'
s2.capitalize()
print(s2)  

# storing memory address of result object in variable.
s2 = s2.capitalize()
print(s2)
{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Length : 12
</pre></div>

<hr/>






#### find(subStr, start, end)

<p> Returns lowest index of matching substring in given string , if substring does not exists it returns -1. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> 'start' and 'end' </strong> are optional param, if any of them is given, executes find() function within given range of indexes only. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s3 = 'Today is Sunday. It is rainy outside. Do not forget to take your umbrella.'
print('First occurrence of \'is\' in s3 at :', s3.find('is'))
print('First occurrence of \'was\' in s3 at :', s3.find('was'))

# with start and end
print('Occurrence of \'is\' in s3[:10] at', s3.find('is', 0, 10))
print('Occurrence of \'is\' in s3[10:] at', s3.find('is', 10))
{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
First occurrence of 'is' in s3 at : 6
First occurrence of 'was' in s3 at : -1
Occurrence of 'is' in s3[:10] at 6
Occurrence of 'is' in s3[10:] at 20
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong>in : </strong> Membership operator. For string it is used for checking a substring is part of the given string or not. Return True if substring is found in string.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s3 = 'Today is Sunday. It is rainy outside. Do not forget to take your umbrella.'

result = 'is' in s3
print("'is' in s3 :", result)

result = 'was' in s3
print("'was' in s3 :", result)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
'is' in s3 : True
'was' in s3 : False
</pre></div>

<hr/>







#### index (subStr, start, end)

<p> Returns lowest index of matching substring in given string , if substring does not exists it raises ValueError. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> 'start' and 'end' </strong> are optional param, if any of them is given, executes index() function within given range of indexes only. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s3 = 'Today is Sunday. It is rainy outside. Do not forget to take your umbrella.'
print('First occurrence of \'is\' in s3 at :', s3.index('is'))
print('First occurrence of \'was\' in s3 at :', s3.index('was'))

# with start and end
print('Occurrence of \'is\' in s3[:10] at :', s3.index('is', 0, 10))
print('Occurrence of \'is\' in s3[10:] at :', s3.index('is', 10))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
First occurrence of 'is' in s3 at : 6
</pre>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
ValueError: substring not found
</pre>
<pre class="result-content">

Occurrence of 'is' in s3[:10] at : 6
Occurrence of 'is' in s3[10:] at : 20
</pre>
</div>

<hr/>










#### upper()

<p> Returns string in uppercase. </p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s4 = 'Hello World!'
print(s4.upper())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
HELLO WORLD!
</pre>
</div>

<hr/>




#### lower()

<p> Returns string in lowercase. </p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s4 = 'Hello World!'
print(s4.lower())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
hello world!
</pre>
</div>

<hr/>











#### count(subStr, start, end)

<p> Counts number of occurrences of the 'subStr' substring in the given string. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> 'start' and 'end' </strong> are optional param, if any of them is given, executes count() function within given range of indexes only. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s3 = 'Today is Sunday. It is rainy outside. Do not forget to take your umbrella.'
c = s3.count('is')
print("No of occurrences of substring 'is' in s3 :", c)

# with start and end
print("No of occurrences of substring 'is' in s3[:10] :", s3.count('is', 0, 10))
print("No of occurrences of substring 'is' in s3[10:] :", s3.count('is', 10))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
No of occurrences of substring 'is' in s3 : 2
No of occurrences of substring 'is' in s3[:10] : 1
No of occurrences of substring 'is' in s3[10:] : 1
</pre></div>

<hr/>





#### rfind(subStr, start, end)

<p> Returns highest index of matching substring in given string ,if substring does not exists it returns -1. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> 'start' and 'end' </strong> are optional param, if any of them is given, executes rfind() function within given range of indexes only. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s3 = 'Today is Sunday. It is rainy outside. Do not forget to take your umbrella.'

print('Last occurrence of \'is\' in s3 at :', s3.rfind('is'))
print('Last occurrence of \'was\' in s3 at :', s3.rfind('was'))

# with start and end

print('Last occurrence of \'is\' in s3[:10] at :', s3.rfind('is', 0, 10))
print('Last occurrence of \'is\' in s3[10:] at :', s3.rfind('is', 10))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Last occurrence of 'is' in s3 at : 20
Last occurrence of 'was' in s3 at : -1
Last occurrence of 'is' in s3[:10] at : 6
Last occurrence of 'is' in s3[10:] at : 20
</pre></div>

<hr/>







#### startswith(subStr, start, end)

<p> Checks given string starts with substring 'subStr' and return True if it does else returns False. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> 'start' and 'end' </strong> are optional param, if any of them is given, executes startswith() function within given range of indexes only. </li>
    </ul> 
</div>




{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s3 = 'Today is Sunday. It is rainy outside. Do not forget to take your umbrella.'
print('s3 starts with "Today" ? :', s3.startswith("Today"))
print('s3 starts with "Tomorrow" ? :', s3.startswith("Tomorrow"))

# with start and end
print('s3[17:] starts with "It" ? :', s3.startswith("It", 17))
print('s3[17:] starts with "Was" ? :', s3.startswith("Was", 17))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
s3 starts with "Today" ? : True
s3 starts with "Tomorrow" ? : False
s3[17:] starts with "It" ? : True
s3[17:] starts with "Was" ? : False
</pre></div>

<hr/>








#### endswith(subStr, start, end)

<p> check given string ends with substring 'subStr', if it does it returns True else returns False. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> 'start' and 'end' </strong> are optional param, if any of them is given, executes endswith() function within given range of indexes only. </li>
    </ul> 
</div>




{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s3 = 'Today is Sunday. It is rainy outside. Do not forget to take your umbrella.'
print('Does s3 ends with "umbrella." ? :', s3.endswith("umbrella."))
print('Does s3 ends with "Sunday." ? :', s3.endswith("Sunday."))

# with start and end
print('Does s3[:16] ends with "Sunday." ? :', s3.endswith("Sunday.", 0, 16))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Does s3 ends with "umbrella." ? : True
Does s3 ends with "Sunday." ? : False
Does s3[:16] ends with "Sunday." ? : True
</pre></div>

<hr/>







#### replace(old, new, [count])

<p> Replace all occurrences of given 'old' subString with 'new' subString. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>count : </strong>If optional argument count is given, it replaces only given count of 'old' subString with 'new' subString. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

smt = "I am learning Java. Java is most powerful language. Java is object oriented."
print(smt)
print(smt.replace('Java', 'Python'))
print(smt.replace('Java', 'Python', 2))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
I am learning Java. Java is most powerful language. Java is object oriented.
I am learning Python. Python is most powerful language. Python is object oriented.
I am learning Python. Python is most powerful language. Java is object oriented.
</pre></div>

<hr/>






#### strip([char])

<p> Removes white spaces from right and left hand side of string. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

smt = '    I am learning Python. Python is most powerful language. Python is object oriented.        '
print(smt)
print(smt.strip())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
    I am learning Python. Python is most powerful language. Python is object oriented.        
I am learning Python. Python is most powerful language. Python is object oriented.
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>char : </strong> If optional argument 'char' given, removes given characters from right and left of the string. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

smt = '#->Please wait, we are processing your order ........................'

print(smt)
print(smt.strip('.>-# '))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
#->Please wait, we are processing your order ........................
Please wait, we are processing your order
</pre></div>

<hr/>




#### rstrip([char])

<p> Removes white spaces from right hand side only. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>char : </strong> If optional argument 'char' given, removes given characters from right of the string. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

smt = '    I am learning Python. Python is most powerful language. Python is object oriented.        '
print(smt)
print(smt.rstrip())

smt = '#->Please wait, we are processing your order ........................'
print('\n'+smt)
print(smt.rstrip('.>-# '))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
    I am learning Python. Python is most powerful language. Python is object oriented.        
I am learning Python. Python is most powerful language. Python is object oriented.        
#->Please wait, we are processing your order ........................
Please wait, we are processing your order ........................
</pre></div>

<hr/>





#### lstrip([char])

<p> Removes white spaces from left hand side only. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>char : </strong> If optional argument 'char' given, removes given characters from left of the string. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

smt = '    I am learning Python. Python is most powerful language. Python is object oriented.        '
print(smt)
print(smt.lstrip())

smt = '#->Please wait, we are processing your order ........................'
print('\n'+smt)
print(smt.lstrip('.>-#, '))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
    I am learning Python. Python is most powerful language. Python is object oriented.        
I am learning Python. Python is most powerful language. Python is object oriented.        
#->Please wait, we are processing your order ........................
Please wait, we are processing your order ........................
</pre></div>

<hr/>






#### expandtabs()

<p> Expands \t in to a tab space. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

tabS = 'My name :\t Mr.ABC'
print(tabS.expandtabs())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
My name :        Mr.ABC
</pre></div>

<hr/>






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

animals = 'cow,cat,dog,hen,goat'
result = animals.split(',')
print(result)

animals = 'cow,cat,dog,hen,goat'
result = animals.split(',', 3)
print(result)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['cow', 'cat', 'dog', 'hen', 'goat']
['cow', 'cat', 'dog', 'hen,goat']
</pre></div>

<hr/>








#### join()

<p> Joins collection of string into single string with provided separator. </p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

animalList = ['cow', 'cat', 'dog', 'hen', 'goat']

sep = ','
print(sep.join(animalList))

sep = ' '
print(sep.join(animalList))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
cow,cat,dog,hen,goat
cow cat dog hen goat
</pre></div>

<hr/>






#### splitlines([keepends])

<p> Returns List of lines split by new line separator. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong>keepends : </strong> Optional argument if given True it keeps new line separator with the result strings. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

lines = '''\
Today is Sunday.
It's rainy outside.
Don't forget to take your umbrella.\
'''

print(lines.splitlines())
print(lines.splitlines(True))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Today is Sunday.', "It's rainy outside.", "Don't forget to take your umbrella."]
['Today is Sunday.\n', "It's rainy outside.\n", "Don't forget to take your umbrella."]
</pre></div>

<hr/>




#### casefold() 

<p> Returns string suitable for caseless comparision. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'hello world'
s2 = 'Hello World'
s3 = 'HeLLo WoRlD'

print(s1 == s2 == s3)
print(s1.casefold() == s2.casefold() == s3.casefold())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
False
True
</pre></div>

<hr/>





#### title() 

<p> Returns string with each word starting with title case. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'hello world'
print(s1.title())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World
</pre></div>

<hr/>







#### partition(sep)

<p> Splits the string  at the first occurrence of given separator and returns three strings. First is string before separator, second is separator used for separating, last string after separator.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'One, Two, Three'
print(s1.partition(', '))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
('One', ', ', 'Two, Three')
</pre></div>

<hr/>





#### rpartition(sep)

<p> Same as partition but searches first occurrence of given separator from right hand side.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'One, Two, Three'
print(s1.rpartition(', '))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
('One, Two', ', ', 'Three')
</pre></div>

<hr/>




#### swapcase()

<p> Converts upper case character to lower and lower case character to upper case.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'hello world'
s2 = 'HeLLo WoRlD'

print(s1.swapcase())
print(s2.swapcase())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
HELLO WORLD
hEllO wOrLd
</pre></div>

<hr/>





#### maketrans()

<p> Returns translation table of given string in ordinal values which is used for translate() method.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# using two strings
print(str.maketrans('ABC', 'XYZ'))

# using mappings
print(str.maketrans({'A': 'X', 'B': 'Y', 'C': 'Z'}))

print(s1.swapcase())
print(s2.swapcase())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{65: 88, 66: 89, 67: 90}
{65: 'X', 66: 'Y', 67: 'Z'}
</pre></div>

<hr/>


#### translate(table)

<p> translates characters of string according to provided translation table.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'A D B E C F'
print(s1.translate(str.maketrans({'A': 'X', 'B': 'Y', 'C': 'Z'})))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
X D Y E Z F
</pre></div>

<hr/>


### String Validation functions


#### isalnum()

<p> Returns True if string contains only alphanumeric  [a-z A-z 0-9] values.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'Abc123'
s2 = 'Abc 123'
s3 = 'Abc_123'

print('Is s1 alphanumeric ? :', s1.isalnum())
print('Is s2 alphanumeric ? :', s2.isalnum())
print('Is s3 alphanumeric ? :', s3.isalnum())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is s1 alphanumeric ? : True
Is s2 alphanumeric ? : False
Is s3 alphanumeric ? : False
</pre></div>

<hr/>





#### isalpha()

<p> Returns True if String contains only alphabets [A-Z,a-z].</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'Abc'
s2 = 'Abc '
s3 = 'Abc_123'

print('Is s1 alphabetic ? :', s1.isalpha())
print('Is s2 alphabetic ? :', s2.isalpha())
print('Is s3 alphabetic ? :', s3.isalpha())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is s1 alphabetic ? : True
Is s2 alphabetic ? : False
Is s3 alphabetic ? : False
</pre></div>

<hr/>







#### isdecimal()

<p> Returns True if String contains only decimals [0-9].</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = '123'
s2 = '2\u00B2'         # unicode digit 2^2
s3 = u'½'              # fraction value

print('Is s1 decimal ? :', s1.isdecimal())
print('Is s2 decimal ? :', s2.isdecimal())
print('Is s3 decimal ? :', s3.isdecimal())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is s1 decimal ? : True
Is s2 decimal ? : False
Is s3 decimal ? : False
</pre></div>

<hr/>


#### isdigit()

<p> Returns True if string is a digit.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = '123'
s2 = '2\u00B2'         # unicode digit 2^2
s3 = u'½'              # fraction value

print('Is s1 digit ? :', s1.isdigit())
print('Is s2 digit ? :', s2.isdigit())
print('Is s3 digit ? :', s3.isdigit())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is s1 digit ? : True
Is s2 digit ? : True
Is s3 digit ? : False
</pre></div>

<hr/>




#### isnumeric()

<p>  Returns True if String is contains numeric value.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = '123'
s2 = '2\u00B2'         # unicode digit 2^2
s3 = u'½'              # fraction value

print('Is s1 numeric ? :', s1.isnumeric())
print('Is s2 numeric ? :', s2.isnumeric())
print('Is s3 numeric ? :', s3.isnumeric())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is s1 numeric ? : True
Is s2 numeric ? : True
Is s3 numeric ? : True
</pre></div>

<hr/>




#### isidentifier()

<p>  Returns True if String is a valid identifier(variable name).</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'var1'
s2 = '1st'
s3 = '__9'

print('Is s1 a valid identifier? :', s1.isidentifier())
print('Is s2 a valid identifier? :', s2.isidentifier())
print('Is s3 a valid identifier? :', s3.isidentifier())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is s1 a valid identifier? : True
Is s2 a valid identifier? : False
Is s3 a valid identifier? : True
</pre></div>

<hr/>



#### islower()

<p> Returns True if string is in lower case. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'Hello'
s2 = 'hellp'

print('Is s1 in lower case ? : ', s1.islower())
print('Is s2 in lower case ? : ', s2.islower())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is s1 in lower case ? :  False
Is s2 in lower case ? :  True
</pre></div>

<hr/>





#### isupper()

<p> Returns True if string is in upper case. </p>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'Hello'
s2 = 'HELLO'

print('Is s1 in upper case ? : ', s1.isupper())
print('Is s2 in upper case ? : ', s2.isupper())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is s1 in upper case ? :  False
Is s2 in upper case ? :  True
</pre></div>

<hr/>


#### istitle()

<p> Returns True if string is in title case. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'Hello'
s2 = 'HELLO'

print('Is s1 in title case ? : ', s1.istitle())
print('Is s2 in title case ? : ', s2.istitle())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is s1 in title case ? :  True
Is s2 in title case ? :  False
</pre></div>

<hr/>


















#### isspace()

<p> Returns True if string contains only white spaces. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

smt = '          '
print(smt.isspace())

smt = '          .'
print(smt.isspace())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
True
False
</pre></div>

<hr/>




#### isprintable()

<p> Returns True if all characters of string are printable. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'hello world'
print(s1.isprintable())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
True
</pre></div>

<hr/>






#### isascii()

<p> Returns True if all characters of string are ASCII Characters. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

s1 = 'hello world'
s2 = 'café'
print(s1.isascii())
print(s2.isascii())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
True
False
</pre></div>

<hr/>




### String Alignment functions



#### center(width[, fillchar])

<p> Centers the string with given width by adding fill character to left and right hand side of the string. By default fill character is ' ' white space. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

msg = 'Hello World'
print(msg.center(20))

# optional fill char
print(msg.center(20, '*'))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
    Hello World     
****Hello World*****
</pre></div>

<hr/>





#### ljust(width[, fillchar])

<p> left justified string, appends fillChar to adjust width </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

msg = 'Hello World'
print(msg.ljust(20))
print(msg.ljust(20, '*'))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World         
Hello World*********
</pre></div>

<hr/>





#### rjust(width[, fillchar])

<p> Right justified string, prepends fillChar to adjust width. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

numVal = '20000'
print(numVal.rjust(7))
print(numVal.rjust(7, '0'))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
  20000
0020000
</pre></div>

<hr/>






#### zfill(width)

<p> Appends zero to left hand side to match the given width. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

v1 = '-707'
v2 = '707'

print(v1.zfill(7))
print(v2.zfill(7))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
-000707
0000707
</pre></div>

<hr/>




## String formatting

### printf() style (Old way : Compatible with all versions of Python)

<p> Following table contains symbol for most useful data types : </p>

Symbol |  Variable Type
:-----:| :--- 
 d      |  Integer
 f      |  Float
 F      |  special values in upper case nan -> NAN, inf -> INF
 s      |  String using str()
 r      |  String using repr()
 c      |  integer or single character
 a      |  ascii
 b      |  binary
 o      |  Octal
 x      |  Hexadecimal
 X      |  Hexadecimal Upper case
 e      |  Exponent with small letter 'e'
 E      |  Exponent with capital letter 'E'
 g      |  General format depending on magnitude it display in fixed point if larger than exponent
 G      |  same as 'g'  but display nan -> NAN, inf -> INF


<p> Special symbols : </p>

Symbol |  Meaning
:-----:| :--- 
 #      |  value conversion
 +      |  sign character
 0      |  pad zero to match width
 -      |  left justified
 ' '    |  leave space for sign bit






<div id="tut-content"> 
    <ul>
        <li> <strong>Formatting different variable types</strong>  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# string formatting
greeting = 'Hello %s , have a nice day'
name = 'Bob'
print(greeting % name)

name = 'Kim'
print(greeting % name)


# int formatting
print('Loan duration is %d years. ' % 9)

# float formatting
intRate = 7.4178401
print('Loan interest rate is %f' % intRate)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello Bob , have a nice day
Hello Kim , have a nice day
Loan duration is 9 years. 
Loan interest rate is 7.417840
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Passing multiple types of data in single string :</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

smt = 'Hello %s , Welcome to ABC bank. Your Loan interest rate is %f and loan duration is %d years.'
name = 'Bob'
intRate = 7.4178401
duration = 9
print(smt % (name, intRate, duration))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello Bob , Welcome to ABC bank. Your Loan interest rate is 7.417840 and loan duration is 9 years.
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>Rounding float value : </strong> '%.nf' syntax is used for rounding float where n is replaced by up to number of digits to round. For example %.3f will round the given float up to three decimal places </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

intRate = 7.4178401
print('Loan interest rate is %.3f and duration is %d years' % (intRate, 4))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Loan interest rate is 7.418 and duration is 4 years
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Using '%s' as  string converter str(var). </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Loan interest rate is %s and duration is %s years' % (7.15, 4))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Loan interest rate is 7.15 and duration is 4 years
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Dictionary based formatting</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

d1 = {'intRate': 7.4178401, 'duration': 5}
print('Loan interest rate is %(intRate).3f and duration is %(duration).2d years' % d1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Loan interest rate is 7.418 and duration is 05 years
</pre></div>

<hr/>









<div id="tut-content"> 
    <ul>
        <li> <strong>Giving size to each variable</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


smt = '%12s | %15d | %6.3f | %2.2d'

print('   Name      |       amount    |  rate  | yrs ')
print('-----------------------------------------------')

print(smt % ('Kim', 15000, 7.4178401, 5))
print(smt % ('Samantha', 9500, 6.55, 7))
print(smt % ('Pete Clark', 25000, 6.95, 12))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
   Name      |       amount    |  rate  | yrs 
-----------------------------------------------
         Kim |           15000 |  7.418 | 05
    Samantha |            9500 |  6.550 | 07
  Pete Clark |           25000 |  6.950 | 12
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>Value conversion using  ' # '</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Hexadecimal of 56 is %#5x' % 56)
print('Octal of 56 is %#5o' % 56)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hexadecimal of 56 is  0x38
Octal of 56 is  0o70
</pre></div>

<hr/>







<div id="tut-content"> 
    <ul>
        <li> <strong>Showing sign bit even for positive number using ' + '.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Value of Int a is %d' % 108)
print('Value of Int a is %d' % -108)

print('\nValue of Int a is %+d' % 108)
print('Value of Int a is %+d' % -108)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Value of Int a is 108
Value of Int a is -108

Value of Int a is +108
Value of Int a is -108
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>Leaving white space for sign bit always using ' '.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Value of Int a is % d' % 108)
print('Value of Int a is % d' % -108)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Value of Int a is  108
Value of Int a is -108
</pre></div>

<hr/>






### Using format() method (for Python 2.6 and later)

<div id="tut-content"> 
    <ul>
        <li> <strong>format() :</strong> Formats string on position based argument. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

fString = 'I am learning {0} language.'
l1 = "Python"
l2 = "Java"
print(fString.format(l1))
print(fString.format(l2))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
I am learning Python language.
I am learning Java language.
</pre></div>

<hr/>









<div id="tut-content"> 
    <ul>
        <li> <strong>With multiple argument and different data types in different order.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

fString = 'My name is {}. I am {} years old . My occupation is {}.'
print(fString.format('Tintin', 19, 'campaigning reporter'))

fString = 'My name is {0}. I am {2} years old . My occupation is {1}.'
print(fString.format('Tintin', 'campaigning reporter', 19))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
My name is Tintin. I am 19 years old . My occupation is campaigning reporter.
My name is Tintin. I am 19 years old . My occupation is campaigning reporter.
</pre></div>

<hr/>











<div id="tut-content"> 
    <ul>
        <li> <strong>Justifying variable values : </strong> strings are by default left justified and numbers are right justified.</li>
    </ul> 
</div>


{% include callout.html content="**syntax :**  {value:[justify]width.precision} " type="primary" %} 

Symbol |  Meaning
:-----:| :--- 
   ^       |   Center justified
   <       |   Left justified
   >       |   Right justified
   =       |   Adds padding after sign for numeric value only
   +       |   Show sign for both Positive and Negative
   0       |   prepend zeros to match the width
   ,       |   numeric digit formatting e.g. 100,000,000
 space     |   leave blank space for positive sign






{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

fString = '{0:7s} education load interest rate is {1:5.2f} and duration is {2:2d} years.'
print(fString.format('BOA', 8.4567, 5))

fString = '{0:^7} education load interest rate is {1:>5.2f} and duration is {2:0>2} years.'
print(fString.format('BOA', 8.4567, 5))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
BOA     education load interest rate is  8.46 and duration is  5 years.
  BOA   education load interest rate is  8.46 and duration is 05 years.
</pre></div>

<hr/>






<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>format() using named field.  </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

fString = '{bName:7} education load interest rate is {intRate:.2f} and duration is {years:2} years.'
print(fString.format(bName='BOA', intRate=8.4567, years=5))

# Justification
fString = '{bName:^7} education load interest rate is {intRate:>5.2f} and duration is {years:0>2} years.'
print(fString.format(bName='BOA', intRate=8.4567, years=5))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
BOA     education load interest rate is 8.46 and duration is  5 years.
  BOA   education load interest rate is  8.46 and duration is 05 years.
</pre></div>



<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Binary Octal and Hexadecimal conversion from integer</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Binary {0:b}  Octal {0:o}  Hexadecimal {0:X}'.format(125))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Binary 1111101  Octal 175  Hexadecimal 7D
</pre></div>

<hr/>








### f-string (Python 3.6 or later)
<p> It is simplified version of format() method</p>

<div id="tut-content"> 
    <ul>
        <li> <strong>'f' or 'F' :</strong> before string marks the string as f-string.</li>
        <li> <strong>'{}' :</strong> contains expression which are evaluated at runtime. </li>
        <li> <strong>'{{ "{{ " }}' :</strong> to escape '{' inside the f-string</li>
        <li> <strong>'!' :</strong> used for conversion after the expression inside curly braces, such as '!s' for str() , '!r' for repr() , '!a' for ascii()</li>
    </ul> 
</div>


<hr/>









<div id="tut-content"> 
    <ul>
        <li> <strong>Printing Variable values using f-string</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

v = -10
print(f'Value of v is {v}')
v= 25
print(f'Value of v is {v}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Value of v is -10
Value of v is 25
</pre></div>

<hr/>






<div id="tut-content"> 
    <ul>
        <li> <strong>Space after sign value using ' = ' and showing always sign bit using ' + '</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

v = -2500

print(f'{v:>10}')
print(f'{v:=10}')

# Always showing sign of numeric
v = 50
print(f'\n{v:=10}')
print(f'{v:=+10}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
     -2500
-     2500
        50
+       50
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>Pre-pending zeros to make equal lengths.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

v1 = 100
v2 = 1259
v3 = 78

print(f'{v1:05} ', f'{v2:05}', f'{v3:05}', sep='\n')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
00100 
01259
00078
</pre></div>

<hr/>








<div id="tut-content"> 
    <ul>
        <li> <strong>Always leave the space for sign bit </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

v1 = 100
v2 = 1259
v3 = -78
print(f'{v1:05} ', f'{v2:05}', f'{v3:05}', sep='\n')
print(f'\n{v1: 05} ', f'{v2: 05}', f'{v3: 05}', sep='\n')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
00100 
01259
-0078

 0100 
 1259
-0078
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong>Binary Octal and Hexadecimal conversion from integer</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

v = 125
print(f'Binary {v:b}  Octal {v:o}  Hexadecimal {v:X}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Binary 1111101  Octal 175  Hexadecimal 7D
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong>Spacing with f-string</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

bName = 'ABC Bank'
intRate = 6.78451
years = 5
amount = 1000000000

opt = f'''{bName} business loan of amount {amount:,d} with \
interest rate is {intRate:3.2f} and duration is {years:2d} years.
'''
print(opt)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
ABC Bank business loan of amount 1,000,000,000 with interest rate is 6.78 and duration is  5 years.
</pre></div>

<hr/>






<div id="tut-content"> 
    <ul>
        <li> <strong>Evaluating expression in f-string</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(f' 4 * 4  equals {4*4}')
print(f' 4 ^ 4  equals {4**4}')
print(f' 4 - 4  equals {4-4}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
 4 * 4  equals 16
 4 ^ 4  equals 256
 4 - 4  equals 0
</pre></div>

<hr/>







<div id="tut-content"> 
    <ul>
        <li> <strong>Applying functions inside f-string :</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Bank Name         Interest     Duration')
print('----------------------------------------')


bName = 'BoI Bank'
intRate = 6.78451
years = 5

print(f'{bName.upper():15s}  {intRate:^10.2f}  {years:^12d}')


bName = 'Bank of America'
intRate = 6.2984
years = 5

print(f'{bName.upper():15s}  {intRate:^10.2f}  {years:^12d}')





{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Bank Name         Interest     Duration
----------------------------------------
BOI BANK            6.78          5      
BANK OF AMERICA     6.30          5  
</pre></div>

<hr/>






<div id="tut-content"> 
    <ul>
        <li> <strong>Value conversion</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import Decimal
intRate = Decimal('6.78451')

print(f'Interest rate is {intRate!s:10s}')
print(f'Interest rate is {intRate!r:10s}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Interest rate is 6.78451   
Interest rate is Decimal('6.78451')
</pre></div>

<hr/>







## String Templating


<div id="tut-content"> 
    <ul>
        <li> <strong>Template(str) : </strong> takes template string as argument and returns Template object </li>
        <li> <strong>$identifier or ${identifier} :  </strong> is substitution place holder which will be replaced by substitute value. </li>
        <li> $$ is used to print $ inside template string. </li>
    </ul> 
</div>


<p id="tut-cons"> Methods </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> substitute(mapping={}, /, **kwargs) :</strong>Returns string replacing substitution place holder with value rovided in either mapping or with keyword arguments. </li>
        <li> <strong> safe_substitute(mapping={}, /, **kwargs) : </strong> same as substitute, but does not raise KeyError in case of missing value for place holder.</li>
    </ul> 
</div>


<p id="tut-cons"> Attributes </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> template :</strong> Returns template string passed when creating template object. </li>
    </ul> 
</div>

<hr/>


<p id="tut-cons"> Example </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from string import Template
iCard = Template('''\
Name         : $fname $lname
Phone Number : $phno
Blood Group  : ${bgroup}''')

# with keyword arguments
print(iCard.substitute(fname='Robert', lname='Styris', phno=3134554447, bgroup='A+'))

# with map object:
p1 = dict(fname='Robert', lname='Styris', phno=3134554447, bgroup='A+')
# or
p1 = {'fname': 'Robert', 'lname': 'Styris', 'phno': 3134554447, 'bgroup': 'A+'}

print()
print(iCard.substitute(p1))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Name         : Robert Styris
Phone Number : 3134554447
Blood Group  : A+

Name         : Robert Styris
Phone Number : 3134554447
Blood Group  : A+
</pre></div>

<hr/>






<div id="tut-content"> 
    <ul>
        <li> <strong>substitute() raises KeyError if place holder value is missing. To avoid exception use safe_substitute(). </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from string import Template

iCard = Template('''\
Name         : $fname $lname
Phone Number : $phno
Blood Group  : ${bgroup}''')

print(iCard.substitute(fname='Robert', phno=3134554447, bgroup='A+'))

print(iCard.safe_substitute(fname='Robert', phno=3134554447, bgroup='A+'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 8, in <&zwj;module&zwj;>
  File "/usr/local/lib/python3.8/string.py", line 126, in substitute
    return self.pattern.sub(convert, self.template)
  File "/usr/local/lib/python3.8/string.py", line 119, in convert
    return str(mapping[named])
KeyError: 'lname'

</pre>

<pre class="result-content">
Name         : Robert $lname
Phone Number : 3134554447
Blood Group  : A+
</pre></div>

<hr/>







<div id="tut-content"> 
    <ul>
        <li> <strong>Returning original string object from Template object.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from string import Template

iCard = Template('''\
Name         : $fname $lname
Phone Number : $phno
Blood Group  : ${bgroup}''')

print(iCard.template)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Name         : $fname $lname
Phone Number : $phno
Blood Group  : ${bgroup}
</pre></div>

<hr/>

















{% include links.html %}


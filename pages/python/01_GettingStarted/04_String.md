---
title: String
layout: tutorial
tags: [str, String, slicing, slice(), substring, indexing]
sidebar: python_sidebar
permalink: python_string.html
folder: python
prev: python_decimal_fraction.html
prev_title: Decimal and Fraction
next: 
next_title:
next_section: python_control_flow.html
next_section_title: Control Flow
summary: String object, indexing, slicing, concat, string operators.
---



## String 


### Built-in sequences

<div id="tut-content"> 
    <ol>    
        <li> <strong> Flat Sequence : </strong>  Holds object of the same type. Example: str, bytes, array.array, memoryview etc. </li>
        <li> <strong> Container sequence : </strong>  Holds reference of objects that can be of different type. Example: list, map, dqueue etc. </li>
    </ol>
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







































{% include links.html %}


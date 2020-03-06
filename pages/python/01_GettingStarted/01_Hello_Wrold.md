---
title: Hello World!
layout: tutorial
sidebar: python_sidebar
permalink: python_hello_world.html
folder: python
prev: python_getting_started.html
prev_title: Getting Started
next: python_variables.html
next_title: Python Variables
---

## print() function : Prints given string to standard output.


<!-- Section 1.1 -->
<div id="tut-content"> 
    <ul>
        <li> Write string inside single quotes ( ‘Hello World!’ )  or double quotes comma ( “Hello World!” )inside the print() function.</li>
    </ul> 
</div>

{% include callout.html content="**Tip** : In PyCharm select the line(s) and press : ' Alt + Shift + E ' to execute in console. " type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print("Hello World!")

print('Hello World!')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World!
Hello World!
</pre></div>

<hr/>


<!-- Section 1.2 -->
<div id="tut-content"> 
    <ul>
        <li> Using escape character \ to print ' (single quote) inside single quoted string and print " (double quotes) inside double quoted string. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('It\'s sunny outside.')

print("Quoting inside \"Double quotes\".")

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
It's sunny outside.
Quoting inside "Double quotes".
</pre></div>

<hr/>


<!-- Section 1.3 -->
<div id="tut-content"> 
    <ul>
        <li> New line using '\n' . </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print("Today is Sunday.\nIt's rainy outside.")


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Today is Sunday.
It's rainy outside.
</pre></div>

<hr/>


<!-- Section 1.4 -->
<div id="tut-content"> 
    <ul>
        <li> Print without breaking it to new line. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print("Hello ", end='')
print("World!")


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World!
</pre></div>

<hr/>




<!-- Section 1.5 -->
<div id="tut-content"> 
    <ul>
        <li> Using \ to continue in new line. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Hello \
World!')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World!
</pre></div>

<hr/>




<!-- Section 1.6 -->
<div id="tut-content"> 
    <ul>
        <li> Print string spanning multiple lines using triple quotes (Single or Double). </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('''\
Today is Sunday.
It's rainy outside.
Don't forget to take your umbrella.''')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Today is Sunday.
It's rainy outside.
Don't forget to take your umbrella.
</pre></div>

<hr/>




<!-- Section 1.7 -->
<div id="tut-content"> 
    <ul>
        <li> <strong>Raw String</strong> : Interprets special characters as characters. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(r'Raw String : File Path C:\MyDir\PythonProg\newFolder')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Raw String : File Path C:\MyDir\PythonProg\newFolder
</pre></div>

<hr/>




<!-- Section 1.8 -->
<div id="tut-content"> 
    <ul>
        <li> Printing multiple strings. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Hello,', 'how', 'are', 'you?')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello, how are you?
</pre></div>

<hr/>




<!-- Section 1.9 -->
<div id="tut-content"> 
    <ul>
        <li> Changing the separator of strings. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('4417', '2323', '1224', '1123', sep='-')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
4417-2323-1224-1123
</pre></div>

<hr/>




{% include links.html %}



## Comments in Python




<!-- Section 2.1 -->
<div id="tut-content"> 
    <ul>
        <li> <strong>Single line comment </strong>: starts with ' # '. </li>
    </ul> 
</div>


{% include callout.html content="**Tip** : In PyCharm use shortcut : ' Ctrl + / '  to comment or uncomment line(s). " type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# This is Single Line comment


{% endhighlight %}
</div>





<!-- Section 2.2 -->
<div id="tut-content"> 
    <ul>
        <li> <strong>In line comment </strong>: starts with ' # ' within line after python code. </li>
    </ul> 
</div>


{% include callout.html content="**Tip** : In PyCharm use shortcut : ' Ctrl + / '  to comment or uncomment line(s). " type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Hello World!')  # Inline comment


{% endhighlight %}

</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World!
</pre></div>

<hr/>






<!-- Section 2.3 -->
<div id="tut-content"> 
    <ul>
        <li> <strong>Multi-line comment </strong>: Wrapped with in triple quotes (same as multiline string) . It is considered as documentation string (Doc string) if it is given as first line of function or class. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

'''
 This is Multi-line comment. 
 It becomes doc-string when it's first line of class or function.
'''

# OR

"""
 This is Multi-line comment. 
 It becomes doc-string when it's first line of class or function.
"""

{% endhighlight %}
</div>




<!-- Section3 -->
## Python Console as Calculator

<div id="tut-content"> 
    <ul>
        <li> Write Following lines inside python console and execute it one at a time.</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# Addition
5 + 2

# Subtraction
56 - 21

# Multiplication
12 * 8

# Division
174 / 12  # returns Float

# floor division for Integer
174 // 12

# floor division for Float
12 // 4.00

# Remainder
100 % 7

# Exponential
2 ** 5

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
>>> 5 + 2
7
>>> 56 - 21
35
>>> 12 * 8
96
>>> 174 / 12 
14.5
>>> 174 // 12
14
>>> 12 // 4.00
3.0
>>> 100 % 7
2
>>> 2 ** 5
32
</pre></div>

<hr/>
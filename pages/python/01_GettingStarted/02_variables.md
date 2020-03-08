---
title: Variables
layout: tutorial
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



### Re-assigning variable values

<div id="tut-content"> 
    <ul>
        <li> Re-Assigning variable values just changes the reference to a memory address. </li>
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
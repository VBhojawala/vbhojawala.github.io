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


{% include links.html %}
---
title: Traceback
layout: tutorial
tags: []
sidebar: python_sidebar
permalink: python_traceback.html
folder: python
prev_section: 
prev_section_title: 
prev: python_exception_handling.html
prev_title: Exception Handling
next: 
next_title: 
next_section: 
next_section_title: 
summary: 
---

## Traceback

<p> traceback module provides functions to extract, format and print traces of Python programs.Using traceback module traceback from exception can be printed same as printed by Python interpreter. </p>

<div id="tut-content"> 
    <ul>
        <li> It uses traceback object which contains all information about stack trace. </li>
        <li> Python stores traceback object  in 'sys.last_traceback' variable which is returned as third item from sys.exec_info().</li>
    </ul> 
</div>


### Functions 

#### print_tb(tb, limit=None, file=None)

<p> Prints stack trace entries from traceback object tb. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> limit : </strong> By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'. If given negative number prints last abs(limit) entries. </li>
        <li> <strong> file : </strong> By default None redirects stack trace to std.err. If given file-like object it prints output to give file.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import traceback
import sys

try:
    1/0
except ZeroDivisionError:
    exc_type, exc_value, exc_traceback = sys.exc_info()
    traceback.print_tb(exc_traceback)

print('Statements after Try ........')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
exc_type : <class 'ZeroDivisionError'>  |  exc_value : division by zero  | exc_traceback : <traceback object at 0x7f51672d5cc0>
Statements after Try ........
</pre><pre id='tut-output-error' class="result-content">File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/PrintTraceback.py", line 5, in <&zwj;module&zwj;>
    1/0</pre>
</div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> print_tb with 'file' attribute. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import traceback
import sys


try:
    1/0
except ZeroDivisionError:
    exc_type, exc_value, exc_traceback = sys.exc_info()
    traceback.print_tb(exc_traceback, file=sys.stdout)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
exc_type : <class 'ZeroDivisionError'>  |  exc_value : division by zero  | exc_traceback : <traceback object at 0x7f5790cc5cc0>
  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/PrintTraceback2.py", line 6, in &lt;module>
    1/0
</pre></div>

<hr/>


{% include links.html %}
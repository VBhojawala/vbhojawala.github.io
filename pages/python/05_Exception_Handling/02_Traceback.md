---
title: Traceback
layout: tutorial
tags: [traceback, sys,  tb_frame, exc_info(), exc_type, exc_value, exc_traceback, print_tb(), print_exception(), format_exception(), format_exception_only(), print_exc(), format_exc(), print_last(), print_stack(), extract_tb(), format_list(), format_tb(), extract_stack(), format_stack(), clear_frames()]
sidebar: python_sidebar
permalink: python_traceback.html
folder: python
prev_section: 
prev_section_title: 
prev: python_exception_handling.html
prev_title: Exception Handling
next: python_warnings.html
next_title: Warnings
next_section: 
next_section_title: 
summary: Exception object's structure and traceback module functions.
---

## Traceback

<p> Module provides functions to extract, format and print stack traces of Exception. Using traceback module traceback from exception can be printed same as printed by Python interpreter. </p>


### Exception object's structure

<div id="tut-img">
    <img src="/images/tutorials/python/ExceptionObjectStructure.gif" class="tut-img" alt="Exception object's structure">
</div>


<div id="tut-content"> 
    <ul>
        <li> It uses traceback object which contains all information about stack trace. </li>
        <li> Python stores traceback object  in 'sys.last_traceback' variable which is returned as third item from sys.exec_info().</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import sys

try:
    1/0
except ZeroDivisionError as e:
    print(f'Exception : {e.__class__}')
    print(f'Value : {e.args[0]}')
    print(f'Traceback : {e.__traceback__}  type : {type(e.__traceback__)}')
    print(f'Frame     : {e.__traceback__.tb_frame}  type : {type(e.__traceback__.tb_frame)}')

    print('\nUsing sys.exc_info() to extract info about last exception :')
    exc_type, exc_value, exc_traceback = sys.exc_info()
    print(f'exc_type : {exc_type}    type : {type(exc_type)}')
    print(f'exc_value : {exc_value}    type : {type(exc_value)}')
    print(f'exc_traceback : {exc_traceback}    type : {type(exc_traceback)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Exception : &lt;class 'ZeroDivisionError'>
Value : division by zero
Traceback : &lt;traceback object at 0x7fb19b1f05c0>  type : &lt;class 'traceback'>
Frame     : &lt;frame at 0x7fb18c022a50, file '&lt;input>', line 9, code &lt;module>>  type : &lt;class 'frame'>

Using sys.exc_info() to extract info about last exception :
exc_type : &lt;class 'ZeroDivisionError'>    type : &lt;class 'type'>
exc_value : division by zero    type : &lt;class 'ZeroDivisionError'>
exc_traceback : &lt;traceback object at 0x7fb19b1f05c0>    type : &lt;class 'traceback'>
</pre></div>

<hr/>


### Functions 

#### print_tb(tb, limit=None, file=None)

<p> Prints stack trace entries from traceback object tb. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> limit : </strong> By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'. If given negative number prints last abs(limit) entries. </li>
        <li> <strong> file : </strong> By default None redirects stack trace to std.err. If given file-like object it prints output to given file.</li>
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



#### print_exception(etype, value, tb, limit=None, file=None, chain=True)

<p> Prints exception information and stack trace entries from traceback object tb. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> limit : </strong>  By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'. If given negative number prints last abs(limit) entries.</li>
        <li> <strong> file : </strong> By default None redirects stack trace to std.err. If given file-like object it prints output to given file. </li>
        <li> <strong> chain : </strong> By default True prints __cause__ or __context__ attributes of the chained exceptions. </li>
    </ul> 
</div>

<hr/>

<p id="tut-ol"> print_exception() has following difference in comparison with print_tb() : </p>

<div id="tut-content"> 
    <ol>    
        <li> It prints the exception etype and value after the stack trace. </li>
        <li> It prints header "Traceback (most recent call last):" if tb is given a traceback object. </li>
        <li> If type(value) is "SyntaxError" and value has the appropriate format, it prints error code line and '^' symbol indicating an approximate position of error. </li>
    </ol>
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
    traceback.print_exception(exc_type, exc_value, exc_traceback, file=sys.stdout)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Traceback (most recent call last):
  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/PrintException1.py", line 6, in &lt;module>
    1/0
ZeroDivisionError: division by zero
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> print_exception () when Syntax Error is raised.</li>
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
    print "Hello World"
except ZeroDivisionError:
    exc_type, exc_value, exc_traceback = sys.exc_info()
    traceback.print_exception(exc_type, exc_value, exc_traceback, file=sys.stdout)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p><pre id='tut-output-error' class="result-content">File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/PrintException2.py", line 5
    print "Hello World"
          ^
SyntaxError: Missing parentheses in call to 'print'. Did you mean print("Hello World")?</pre></div>

<hr/>




#### format_exception(etype, value, tb, limit=None, chain=True)

<p> Returns list of formatted strings, each string containing stack trace and the exception information. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> limit : </strong>  By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'. If given negative number prints last abs(limit) entries.</li>
        <li> <strong> chain : </strong> By default True prints __cause__ or __context__ attributes of the chained exceptions. </li>
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
    print(repr(traceback.format_exception(*sys.exc_info())))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['Traceback (most recent call last):\n', '  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/FormatException.py", line 5, in lt;module>\n    1/0\n', 'ZeroDivisionError: division by zero\n']
</pre></div>

<hr/>



#### format_exception_only(etype, value)

<p> Returns list of formatted string containing exception type and value from traceback. Normally returned list contains only single string, but for syntax error it contains several lines that displays detailed information about location in code where the syntax error occurred. </p>


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
    print(repr(traceback.format_exception_only(exc_type, exc_value)))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['ZeroDivisionError: division by zero\n']
</pre></div>

<hr/>



#### print_exc(limit=None, file=None, chain=True)

<div id="tut-content"> 
    <ul>
        <li> <strong> limit : </strong>  By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'. If given negative number prints last abs(limit) entries.</li>
        <li> <strong> file : </strong> By default None redirects stack trace to std.err. If given file-like object it prints output to given file. </li>
        <li> <strong> chain : </strong> By default True prints __cause__ or __context__ attributes of the chained exceptions. </li>
    </ul> 
</div>

<p> It is a shorthand for print_exception(*sys.exc_info(), limit, file, chain). </p>


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
    traceback.print_exc(file=sys.stdout)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Traceback (most recent call last):
  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/PrintExec.py", line 5, in &lt;module>
    1/0
ZeroDivisionError: division by zero
</pre></div>

<hr/>


#### format_exc(limit=None, chain=True)

<p> Same as print_exc() but returns a string instead of printing to file. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> limit : </strong>  By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'. If given negative number prints last abs(limit) entries.</li>
        <li> <strong> chain : </strong> By default True prints __cause__ or __context__ attributes of the chained exceptions. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import traceback

try:
    1/0
except ZeroDivisionError:
    print(traceback.format_exc())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Traceback (most recent call last):
  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/FormatExec.py", line 4, in &lt;module>
    1/0
ZeroDivisionError: division by zero
</pre></div>

<hr/>



#### print_last(limit=None, file=None, chain=True)

<div id="tut-content"> 
    <ul>
        <li> <strong> limit : </strong>  By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'. If given negative number prints last abs(limit) entries.</li>
        <li> <strong> file : </strong> By default None redirects stack trace to std.err. If given file-like object it prints output to given file. </li>
        <li> <strong> chain : </strong> By default True prints __cause__ or __context__ attributes of the chained exceptions. </li>
    </ul> 
</div>


<p> It is a shorthand for print_exception(sys.last_type, sys.last_value, sys.last_traceback,limit, file, chain). </p>

{% include callout.html content="**Note** : It only works after exception is reached to interactive prompt." type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import traceback
import sys


print(1/0)

# Run it after raising exception in console
traceback.print_last(file=sys.stdout)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Traceback (most recent call last):
  File "/usr/local/lib/python3.8/code.py", line 90, in runcode
    exec(code, self.locals)
  File "&lt;input>", line 5, in &lt;module>
ZeroDivisionError: division by zero
</pre></div>

<hr/>



#### print_stack(f=None, limit=None, file=None)

<p> Prints stack trace entries. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> f : </strong> Specifies an alternate stack frame to start. </li>
        <li> <strong> limit : </strong> By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'.If given negative number prints last abs(limit) entries. </li>
        <li> <strong> file : </strong> By default None redirects stack trace to std.err. If given file-like object it prints output to give file. </li>
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


def division():
    try:
        1/0
    except ZeroDivisionError:
        traceback.print_stack(file=sys.stdout)


division()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
 File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/PrintStack.py", line 12, in &lt;module>
    division()
  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/PrintStack.py", line 9, in division
    traceback.print_stack(file=sys.stdout)
</pre></div>

<hr/>


#### extract_tb(tb, limit=None)

<p> Return a StackSummary object representing a list of FrameSummary object (“pre-processed” stack trace entries) extracted from the traceback object tb. It is used for custom formatting of stack traces. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> limit : </strong> By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'.If given negative number prints last abs(limit) entries. </li>
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


class InvalidAccessError(Exception):
    pass


def func1():
    print('func1() Started...')
    func2()
    print('func1() Ended...')


def func2():
    try:
        raise AttributeError
    except AttributeError as e:
        raise InvalidAccessError('Caution! Invalid access detected.') from None


try:
    func1()
except InvalidAccessError as e:
    for line in traceback.extract_tb(sys.exc_info()[2]):
        print(line)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
func1() Started...
&lt;FrameSummary file /home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/ExtractTB.py, line 23 in &lt;module>>
&lt;FrameSummary file /home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/ExtractTB.py, line 11 in func1>
&lt;FrameSummary file /home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/ExtractTB.py, line 19 in func2>

</pre></div>

<hr/>



#### format_list(extracted_list)

<p> Returns list of string from list of Tuples or FrameSummary objects returned from extract_tb(). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import traceback
import sys


class InvalidAccessError(Exception):
    pass


def func1():
    print('func1() Started...')
    func2()
    print('func1() Ended...')


def func2():
    try:
        raise AttributeError
    except AttributeError as e:
        raise InvalidAccessError('Caution! Invalid access detected.') from None


try:
    func1()
except InvalidAccessError as e:
    print(traceback.format_list(traceback.extract_tb(sys.exc_info()[2])))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
func1() Started...
['  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/ExtractTB2.py", line 23, in &lt;module>\n    func1()\n', '  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/ExtractTB2.py", line 11, in func1\n    func2()\n', '  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/ExtractTB2.py", line 19, in func2\n    raise InvalidAccessError(\'Caution! Invalid access detected.\') from None\n']
</pre></div>

<hr/>


#### format_tb(tb, limit=None)

<p>  A shorthand for format_list(extract_tb(tb, limit)). </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> limit : </strong>  By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'. If given negative number prints last abs(limit) entries.</li>
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


class InvalidAccessError(Exception):
    pass


def func1():
    print('func1() Started...')
    func2()
    print('func1() Ended...')


def func2():
    try:
        raise AttributeError
    except AttributeError as e:
        raise InvalidAccessError('Caution! Invalid access detected.') from None


try:
    func1()
except InvalidAccessError as e:
    print(traceback.format_tb(sys.exc_info()[2]))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
func1() Started...
['  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/FormatTB.py", line 23, in &lt;module>\n    func1()\n', '  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/FormatTB.py", line 11, in func1\n    func2()\n', '  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/FormatTB.py", line 19, in func2\n    raise InvalidAccessError(\'Caution! Invalid access detected.\') from None\n']
</pre></div>

<hr/>


#### extract_stack(f=None, limit=None)

<p> Extract the raw traceback from the current stack frame and returns values as same format as extract_tb(). </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> f : </strong> Specifies an alternate stack frame to start. </li>
        <li> <strong> limit : </strong> By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'.If given negative number prints last abs(limit) entries. </li>
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


class InvalidAccessError(Exception):
    pass


def func1():
    print('func1() Started...')
    func2()
    print('func1() Ended...')


def func2():
    try:
        raise AttributeError
    except AttributeError as e:
        raise InvalidAccessError('Caution! Invalid access detected.') from None


try:
    func1()
except InvalidAccessError as e:
    print(repr(traceback.extract_stack()))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
func1() Started...
[&lt;FrameSummary file /home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/ExtractStack.py, line 25 in &lt;module>>]

</pre></div>

<hr/>


#### format_stack(f=None, limit=None)

<p> A shorthand for format_list(extract_stack(f, limit)). </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> f : </strong> Specifies an alternate stack frame to start. </li>
        <li> <strong> limit : </strong> By default None prints all stack trace entries. If given positive number prints entries from starting from caller's frame up to given 'limit'.If given negative number prints last abs(limit) entries. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import traceback


class InvalidAccessError(Exception):
    pass


def func1():
    print('func1() Started...')
    func2()
    print('func1() Ended...')


def func2():
    try:
        raise AttributeError
    except AttributeError as e:
        raise InvalidAccessError('Caution! Invalid access detected.') from None


try:
    func1()
except InvalidAccessError as e:
    print(traceback.format_stack())



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
func1() Started...
['  File "/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs/FormatStack.py", line 24, in &lt;module>\n    print(traceback.format_stack())\n']
</pre></div>

<hr/>



#### clear_frames(tb)

<p> Clears the local variables of all the stack frames in a traceback tb by calling the clear() method of each frame object. </p>


{% include links.html %}
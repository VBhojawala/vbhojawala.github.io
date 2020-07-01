---
title: Python Exception Handling
layout: tutorial
tags: [python, Exception, Exception_class_hierarchy,  try-except, try-except-else, try-finally, try-except-finally,try-except-else-finally, nested_try, raise, raise-from, chained_exception, context, cause, suppress_context]
sidebar: python_sidebar
permalink: python_exception_handling.html
folder: python
prev_section: python_list.html
prev_section_title: Built-in DataStructures
prev: 
prev_title: 
next: python_traceback.html
next_title: Traceback
next_section: 
next_section_title: 
summary: Python Exceptions, Exception class hierarchy, try-catch, try-catch finally, nested try, raise, raise from, Chained Exceptions and attribute.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/kEIoXoC7l2M" allowfullscreen></iframe>
</div>

<hr/>

## Exceptions

<p> Exception is raised when invalid operation is executed such as accessing index out of range, division by zero etc.If exception is not handled, program will terminate unexpectedly with Error message.</p>

### Exception class Hierarchy

<div id="tut-img-full">
    <img src="/images/tutorials/python/ExceptionHierarchy.png" class="tut-img" alt="Exception Hierarchy">
</div>


<div id="tut-content"> 
    <ul>
        <li> <strong> BaseException : </strong> is base class of all exception. Exception class inherits BaseException. </li>
        <li> <strong> SystemExit : </strong> Raised while exiting Python shell using exit(),sys.exit() </li>
        <li> <strong> KeyboardInterrupt : </strong> Raised when Ctrl + d is pressed. </li>
        <li> <strong> GeneratorExit : </strong> Raised when a generator or coroutine is closed. </li>
        <li> Exception raised of Exception class or any of it's subclass can be handled programmatically. Other exception such as SystemExit, GeneratorExit can not be handled programmatically. </li>

    </ul> 
</div>

### Most common exceptions


#### ZeroDivisionError

<p> Raised when division with zero is performed. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(1/0)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 1, in <&zwj;module&zwj;>
ZeroDivisionError: division by zero</pre></div>

<hr/>



#### AttributeError

<p> Raised when access or modification on attribute which does not exists for an object.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 121.12
if type(a).find('float'):
    print('It contains a float value!')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 2, in <&zwj;module&zwj;>
AttributeError: type object 'float' has no attribute 'find'</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Correct way</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

if str(type(a)).find('float'):
    print('It contains a float value!')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
It contains a float value!
</pre></div>

<hr/>



#### IndexError

<p> Raised when accessing out of range index. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

listInt = [1, 2, 3]
print(listInt[3])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 2, in <&zwj;module&zwj;>
IndexError: list index out of range</pre></div>

<hr/>



#### ValueError

<p> Raised when invalid value of correct data type is passed as argument. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

l = ['a', 'b', 'c']
print(l.index('C'))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 2, in <&zwj;module&zwj;>
ValueError: 'C' is not in list</pre></div>

<hr/>




#### KeyError

<p> Raised when given key is not found in dictionary. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

m = {'a': 1, 'b': 2, 'c': 3}
print(m['C'])

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 2, in <&zwj;module&zwj;>
KeyError: 'C'</pre></div>

<hr/>





#### NameError

<p> Raised when local or global name not found. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(v)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 1, in <&zwj;module&zwj;>
NameError: name 'v' is not defined</pre></div>

<hr/>



## Exception Handling

### try-except

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 1
b = 0
try:
    a = a / b
except ZeroDivisionError as e:
    print(e)

print('Continuing program execution even after exception .......')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
ZeroDivisionError('division by zero')
Continuing program execution even after exception .......
</pre></div>

<hr/>


### Scope of variables defined inside try-except

<p> Variable defined inside the try-except block is defined in it's enclosing scope. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 190

try:
    a = 150
    b = 160
except Exception as e:
    print(e)

print('a :', a)
print('b :', b)

print('\nLocals :', locals())
print('\nGlobals :', globals())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
a : 150
b : 160
Locals : {'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x7fd1a75403d0>,...........................
'sys': <module 'sys' (built-in)>, <div id="tut-highlight">'a': 150, 'b': 160</div>}

Globals : {'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x7fd1a75403d0>,...........................
'sys': <module 'sys' (built-in)>, <div id="tut-highlight">'a': 150, 'b': 160</div>}
</pre></div>

<hr/>



### Catching multiple exceptions

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

listInt = [12, 0, 12]
try:
    listInt[4] = listInt[0] / listInt[1]
except IndexError as e:
    print(repr(e))
except ZeroDivisionError as e:
    print(repr(e))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
ZeroDivisionError('division by zero')
</pre></div>

<hr/>


### Adding default exception to catch unexpected exception

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

listInt = [12, 0, 12]

try:
    listInt[4] = listInt[0] / listInt[1]
except ZeroDivisionError as e:
    print('Can not divide number with Zero :', repr(e))
except IndexError as e:
    print('Index in list is out of range :', repr(e))
except TypeError as e:
    print('Enter Valid Numeric Value :', repr(e))
except Exception as e:
    print('Catches Unexpected Exception not listed in any of above except block.')
    print('Default  Exception Hit! :', repr(e))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Can not divide number with Zero : ZeroDivisionError('division by zero')
</pre></div>

<hr/>


### Grouping Multiple Exceptions

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


listInt = [12, 0, 12]

try:
    listInt[4] = listInt[0] / listInt[1]
except (ZeroDivisionError, IndexError, ArithmeticError) as e:
    print('Invalid Value Entered for Division operation :', repr(e))
except Exception as e:
    print('Oops, Something went wrong :', repr(e))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Invalid Value Entered for Division operation : ZeroDivisionError('division by zero')
</pre></div>

<hr/>


### try-except-else

<p> else code block gets executed if no exception is raised inside try. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

listInt = [12, 10, 12]

try:
    listInt[2] = listInt[0] / listInt[1]
except (ZeroDivisionError, IndexError, ArithmeticError) as e:
    print('Invalid Value Entered for Division operation', e)
except Exception as e:
    print('Oops, Something went wrong.', e)
else:
    print('Everything went right!')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Everything went right!
</pre></div>

<hr/>


### raise

<p> <strong> raise : </strong> is used for raising the exception. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def valid_email(email=''):
    try:
        if email.find('@') < 0:
            raise ValueError(f'EmailId : "{email}" is invalid!')
        print(f'Email Id : "{email}" is valid.')
        return True
    except ValueError as e:
        print('Exception :', e.args[0])  # returns Tuple
        return False


email1 = 'valid.email@mailserver.com'
valid_email(email1)

email2 = 'yourmail.info'
valid_email(email2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Email Id : "valid.email@mailserver.com" is valid.
Exception : EmailId : "yourmail.info" is invalid!
</pre></div>

<hr/>


### try-except-finally

<p> Code inside finally block  gets executed regardless of exception raised or not, caught by except or not.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

try:
    print('Opening Connection to Main Server.')
    print('Logging in')
    print('Performing Operations')
    print('Logging Out')
    print('Closing connection')

except ConnectionError as e:
    print('Connection did not established')
except AttributeError as e:
    print('Operation Attribute is undefined')

finally:
    print('if connection is Still open, closing the connection.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Opening Connection to Main Server.
Logging in
Performing Operations
Logging Out
Closing connection
if connection is Still open, closing the connection.
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> try-except-finally with except catching exception.  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

try:
    print('Opening Connection to Main Server.')
    raise ConnectionError('404 Server Error')
    print('Logging in')
    print('Performing Operations')
    print('Logging Out')
    print('Closing connection')

except ConnectionError as e:
    print('Connection did not established :', repr(e))
except AttributeError as e:
    print('Operation Attribute is undefined')

finally:
    print('if connection is Still open, closing the connection.')

print('Statements After Try ..........')




{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Opening Connection to Main Server.
Connection did not established : ConnectionError('404 Server Error')
<div id="tut-highlight">if connection is Still open, closing the connection.</div>
Statements After Try ..........
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> try-except-finally with exception not caught by ant except. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

try:
    print('Opening Connection to Main Server.')
    print('Logging in')
    print('Performing Operations')
    raise RuntimeError('Invalid Operation!')
    print('Logging Out')
    print('Closing connection')

except ConnectionError as e:
    print('Connection did not established :', repr(e))
except AttributeError as e:
    print('Operation Attribute is undefined')

finally:
    print('if connection is Still open, closing the connection.')

print('Statements After Try ..........')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Opening Connection to Main Server.
Logging in
Performing Operations
<div id="tut-highlight">if connection is Still open, closing the connection.</div></pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 5, in <&zwj;module&zwj;>
RuntimeError: Invalid Operation!</pre></div>

<hr/>



### finally with return

<p> Finally block gets executed even when return is executed inside try. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

logs = []


def valid_email(email=''):
    try:
        if email.find('@') < 0:
            raise ValueError(f'EmailId : "{email}" is invalid!')
        print(f'Email Id : "{email}" is valid.')
        return True
    except ValueError as e:
        print(e.args[0])  # returns Tuple
        return False

    finally:
        print('Logging emailId validated', email)
        logs.append(email)


valid_email('asdasd@ada.com')
valid_email('abc')


print('\nLogs :', logs)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Email Id : "asdasd@ada.com" is valid.
Logging emailId validated asdasd@ada.com
EmailId : "abc" is invalid!
Logging emailId validated abc

Logs : ['asdasd@ada.com', 'abc']
</pre></div>

<hr/>



### try-finally

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

try:
    print('Opening the connection...')
finally:
    print('closing the connection...')

print('Statements after finally')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Opening the connection...
closing the connection...
Statements after finally
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> try-finally with exception. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

try:
    print('Opening the connection...')
    raise ConnectionError
finally:
    print('closing the connection...')

print('Statements after finally')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Opening the connection...
closing the connection...
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
ConnectionError</pre></div>

<hr/>


### try-except-else-finally

<p> Order must be 'try-except-else-finally' when all used together. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

try:
    print('Opening the connection...')
except ConnectionError as e:
    print('Running connection diagnostics')
else:
    print('Connected to server successfully :)')
finally:
    print('closing the connection...')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Opening the connection...
Connected to server successfully :)
closing the connection...
</pre></div>

<hr/>


### Re-raising exception

#### raise
<p> raise will re-raise the exception caught by except. </p>

<p> Scope of the  exception variable remains inside the matching except statement. It can't be accessed outside of it, but it can be re- raise it to propagate beyond try block. </p>

{% include callout.html content="**Note** : Exception can only be caught only once by except , when re-raising exception it will not be caught by except block below it within same try block." type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

try:
    print('Opening the connection...')
    raise ConnectionError
except ConnectionError as e:
    print('Running connection diagnostics')
    raise  # re-raising the exception
else:
    print('Connected to server successfully :)')
finally:
    print('closing the connection...')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Opening the connection...
Running connection diagnostics
closing the connection...
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
ConnectionError</pre></div>

<hr/>



#### raise-from

<p> Raising different exception from except block. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

try:
    print('Opening the connection...')
    raise ConnectionError
except ConnectionError as e:
    print('Running connection diagnostics')
    # After Diagnostic issuing more specific error
    raise ConnectionRefusedError from e
except BaseException as e:
    print(f'Generic error {e} occurred')
finally:
    print('closing the connection...')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Opening the connection...
Running connection diagnostics
closing the connection...
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
ConnectionError

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 7, in <&zwj;module&zwj;>
ConnectionRefusedError</pre></div>

<hr/>



### Nested try-except

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

try:  # catches the exception thrown by the inner try block

    try:  # contains code block that may produce exception
        print('Opening the connection...')
        raise ConnectionError
    except ConnectionError as e:
        print('Running connection diagnostics')
        # After Diagnostic issuing more specific error
        raise ConnectionRefusedError from e   
    finally:
        print('closing the connection...')

except ConnectionRefusedError as e:
    print('Notify system admin')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Opening the connection...
Running connection diagnostics
closing the connection...
Notify system admin
</pre></div>

<hr/>



### Nested try-except with finally

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

try:
    try:
        con = 'Create a new connection'
        print('Perform network operations..')
        raise ConnectionError
    except ConnectionError as e:
        print('Handling Connection Error')
        print('close the connection...')
    finally:
        print('If connection is still open close the connection')

except OSError:
    print('handling broader exception OSError which is super class of ConnectionError')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Perform network operations..
Handling Connection Error
close the connection...
If connection is still open close the connection
</pre></div>

<hr/>


### Exception Chain

<p> When re-raising new exception or raising new exception from original exception following attributes are set. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> __context__ : </strong> Original exception set to context attribute which is shown in traceback.</li>
        <li> <strong> __cause__ : </strong> Original exception set to cause attribute when using 'raise newEx from OriginalEx' which is used for debugging purpose. </li>
        <li> <strong> __suppress_context__ : </strong>  Set to True if exception is chained using 'raise from'.</li>
    </ul> 
</div>

{% include callout.html content="**Note** : __context__ (Original Exception) is shown in traceback when __cause__  is None and __suppress_context__ is false and for chained exceptions (raise from) __cause__ is always shown if present. " type="primary" %} 


<hr/>


<div id="tut-content"> 
    <ul>
        <li> When raising exception from except or finally , __context__ is set for original exception, __cause__ is set to none and __suppress_context__ is set to false. </li>
        <li> Re-raising exception with raise shows traceback of chained exception because __cause__ = None and __suppress_context__ = False.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class InvalidAccessError(Exception):
    pass

try:
    try:
        raise AttributeError
    except AttributeError as e:
        raise InvalidAccessError('Caution! Invalid access detected.')
except InvalidAccessError as e:
    print(f'Cause : {e.__cause__!r}')
    print(f'Context : {e.__context__!r}')
    print(f'suppress_context : {e.__suppress_context__}')
    raise e


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Cause : None
Context : AttributeError()
suppress_context : False
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 6, in <&zwj;module&zwj;>
AttributeError
During handling of the above exception, another exception occurred:
Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 13, in <&zwj;module&zwj;>
  File "<&zwj;input&zwj;", line 8, in <&zwj;module&zwj;>
InvalidAccessError: Caution! Invalid access detected.</pre></div>

<hr/>


<!-- case : 2 -->
<div id="tut-content"> 
    <ul>
        <li> <strong> raise new_exception from original_exception : </strong> also shows shows traceback of chained exception but sets __suppress_context__ to True and  __cause__ to original_error. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class InvalidAccessError(Exception):
    pass


try:
    try:
        raise AttributeError
    except AttributeError as e:
        raise InvalidAccessError('Caution! Invalid access detected.') from e
except InvalidAccessError as e:
    print(f'Cause : {e.__cause__!r}')
    print(f'Context : {e.__context__!r}')
    print(f'suppress_context : {e.__suppress_context__}')
    raise e


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Cause : AttributeError()
Context : AttributeError()
suppress_context : True
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 7, in <&zwj;module&zwj;>
AttributeError
The above exception was the direct cause of the following exception:
Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 14, in <&zwj;module&zwj;>
  File "<&zwj;input&zwj;>", line 9, in <&zwj;module&zwj;>
InvalidAccessError: Caution! Invalid access detected.</pre></div>

<hr/>


<!-- case :3 -->
<div id="tut-content"> 
    <ul>
        <li> <strong> raise new_exception from None : </strong> sets __suppress_context__ to True and  __cause__ to None and shows traceback of only newly raised exception. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class InvalidAccessError(Exception):
    pass


try:
    try:
        raise AttributeError
    except AttributeError as e:
        raise InvalidAccessError('Caution! Invalid access detected.') from None
except InvalidAccessError as e:
    print(f'Cause : {e.__cause__!r}')
    print(f'Context : {e.__context__!r}')
    print(f'suppress_context : {e.__suppress_context__}')
    raise e


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Cause : None
Context : AttributeError()
suppress_context : True
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 14, in <&zwj;module&zwj;>
  File "<&zwj;input&zwj;>", line 9, in <&zwj;module&zwj;>
InvalidAccessError: Caution! Invalid access detected.</pre></div>

<hr/>

{% include links.html %}
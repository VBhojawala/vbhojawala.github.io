---
title: Functions
layout: tutorial
tags: []
sidebar: python_sidebar
permalink: python_functions.html
folder: python
prev_section: python_control_flow.html
prev_section_title: Control Flow
prev: 
prev_title: 
next: 
next_title:
next_section: 
next_section_title: 
summary: Benefits of functions, Built-in functions, User defined functions.
---


## Benefits of functions

<div id="tut-content"> 
    <ol>    
        <li> Abstraction </li>
        <li> Code re-use and single codebase </li>
        <li> Modularization of long procedural code </li>
        <li> easy to maintain  </li>
    </ol>
</div>


## User defined function


### pass

<div id="tut-content"> 
    <ul>
        <li> <strong>def : </strong> Marks the beginning of the function </li>
        <li> <strong>pass : </strong> Marks the function as empty function. Empty function is declared so that it can be implemented later. </li>
    </ul> 
</div>

{% include callout.html content="**Note** : function in python are first class object which means it can be passed as a variable to method or assigned to a variable. " type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def empty_func():
    pass


{% endhighlight %}
</div>


<hr/>


### doc-string

<div id="tut-content"> 
    <ul>
        <li> <strong> Creating a function with doc-string which prints 'Hello World!'</strong> </li>
    </ul> 
</div>

{% include callout.html content="**doc-string** : If first line of function is multiline string (Triple quoted single or double), it is considered as a documentation string for that function. It can be viewed in function call by pressing Ctrl + Q in PyCharm." type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def say_hello():
    """Prints Hello World!"""
    print('Hello World!')

# calling function
say_hello()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World!
</pre></div>

<hr/>


### return

<div id="tut-content"> 
    <ul>
        <li> <strong> return  : </strong> Returns the value to the caller. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def add(x, y):
    """Returns x + y"""
    return x + y


ans = add(15, 20)
print(ans)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
35
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Return with multiple values : </strong> When returning multiple values, they are wrapped in Tuple object implicitly.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def div_mod(x, y):
    """Returns (x//y, x%y)"""
    return x//y, x%y


ans = div_mod(52, 3)
print(ans, type(ans))

# un-wrapping tuple object
q, r = div_mod(52, 3)
print(f'Quotient : {q}   Remainder : {r}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(17, 1) <class 'tuple'>
Quotient : 17   Remainder : 1
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Statements after return does not gets executed </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def div_mod(x, y):
    """Returns (x//y, x%y)"""
    return x//y, x%y
    print('After Return')


print(div_mod(12, 5))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(2, 2)
</pre></div>

<hr/>




### parameter with default  value


<div id="tut-content"> 
    <ul>
        <li> function can be called without passing parameter with default value, if value is passed default value gets replaced with given value. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def say_hello(name='Unknown'):
    print(f'Hello {name}!')


say_hello('Ron')
say_hello()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello Ron!
Hello Unknown!

</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Mixing parameter with default value  and required[normal] parameters </li>
    </ul> 
</div>

{% include callout.html content="**Rule** : All required[normal] parameters must come before default value parameters." type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def decorate_string(msg, decorator='*'):
    print(f'{decorator*8}  {msg}  {decorator*8}')


decorate_string('Hello World!')
decorate_string('Hello World!', '@')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
********  Hello World!  ********
@@@@@@@@  Hello World!  @@@@@@@@
</pre></div>

<hr/>



### functional annotation
<p> Functional annotation is used for annotating type of object accepted by the parameter and return type of function. </p>

{% include callout.html content="**Note** : Python is dynamically typed language, which means we can not  restrict type of value passed to a parameter of function at compile time." type="primary" %} 

<div id="tut-content"> 
    <ul>
        <li> <strong> 'param: type' : </strong> Is used for annotating parameter where param is name of parameter and type is type of object which is accepted by the parameter. </li>
        <li> <strong> '(params) -> type' : </strong> Is used for annotating type of the object which is returned by the function. </li>
    </ul> 
</div>


{% include callout.html content="**PyCharm** : In ':param param_name: explanation' is used for write documentation about param_name parameter of given function" type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def sendmail(to: str, subject: str, message: str, cc: str = '', bcc: str = '') -> None:
    """
    sends email to any valid email address

    :param to: Person(s) to whom mail is to be sent. If Multiple persons are recipient separate by ','
    :param subject: Subject of the mail visible to recipient before opening the mail.
    :param message: message to be sent to recipient.
    :param cc: Recipient to whom carbon copy of the message to be sent
    :param bcc: Persons who are Behind the Carbon copy of  the message
    """
    print('Connecting to mail Server ..')
    print('Sending mail ....')


{% endhighlight %}
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> When viewed quick documentation in PyCharm by pressing 'Ctrl + Q' on function call or function definition it looks as shown below:  </li>
    </ul> 
</div>

<div id="tut-img">
    <img src="/images/tutorials/python/functional_annotation.png" class="tut-img" alt="Functional Annotation in PyCharm Quick Doc">
</div>


<hr/>


### help(obj)

<div id="tut-content"> 
    <ul>
        <li> <strong> for function : </strong> Returns module name, signature and documentation string name for given function  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

help(sendmail)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Help on function sendmail in module __main__:

sendmail(to: str, subject: str, message: str, cc: str = '', bcc: str = '') -> None
    sends email to any valid email address
    
    :param to: Person(s) to whom mail is to be sent. If Multiple persons are recipient separate by ','
    :param subject: Subject of the mail visible to recipient before opening the mail.
    :param message: message to be sent to recipient.
    :param cc: Recipient to whom carbon copy of the message to be sent
    :param bcc: Persons who are Behind the Carbon copy of  the message
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> for class :  </strong> Returns documentation for constructor, attributes and methods(For methods documentation is extracted from doc-string) with given class doc-string.   </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

help(tuple)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Help on class tuple in module builtins:

class tuple(object)
 |  tuple(iterable=(), /)
 |  
 |  Built-in immutable sequence.
 |  
 |  If no argument is given, the constructor returns an empty tuple.
 |  If iterable is specified the tuple is initialized from iterable's items.
 |  
 |  If the argument is a tuple, the return value is the same object.
 |  
 |  Built-in subclasses:
 |      asyncgen_hooks
 |      UnraisableHookArgs
 |  
 |  Methods defined here:
 |  
 |  __add__(self, value, /)
 |      Return self+value.
 |  
 |  __contains__(self, key, /)
 |      Return key in self.
 |  
 |  __eq__(self, value, /)
 |      Return self==value.
 |  
 |  __ge__(self, value, /)
 |      Return self>=value.
 |  
 |  __getattribute__(self, name, /)
 |      Return getattr(self, name).
 |  
 |  __getitem__(self, key, /)
 |      Return self[key].
 |  
 |  __getnewargs__(self, /)
 |  
 |  __gt__(self, value, /)
 |      Return self>value.
 |  
 |  __hash__(self, /)
 |      Return hash(self).
 |  
 |  __iter__(self, /)
 |      Implement iter(self).
 |  
 |  __le__(self, value, /)
 |      Return self<=value.
 |  
 |  __len__(self, /)
 |      Return len(self).
 |  
 |  __lt__(self, value, /)
 |      Return self<value.
 |  
 |  __mul__(self, value, /)
 |      Return self*value.
 |  
 |  __ne__(self, value, /)
 |      Return self!=value.
 |  
 |  __repr__(self, /)
 |      Return repr(self).
 |  
 |  __rmul__(self, value, /)
 |      Return value*self.
 |  
 |  count(self, value, /)
 |      Return number of occurrences of value.
 |  
 |  index(self, value, start=0, stop=9223372036854775807, /)
 |      Return first index of value.
 |      
 |      Raises ValueError if the value is not present.
 |  
 |  ----------------------------------------------------------------------
 |  Static methods defined here:
 |  
 |  __new__(*args, **kwargs) from builtins.type
 |      Create and return a new object.  See help(type) for accurate signature.


</pre></div>

<hr/>



### Special attributes for documentation

####  ____doc____

<p> Returns documentation string from class or function. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def sendmail(to: str, subject: str, message: str, cc: str = '', bcc: str = '') -> None:
    """
    sends email to any valid email address

    :param to: Person(s) to whom mail is to be sent. If Multiple persons are recipient separate by ','
    :param subject: Subject of the mail visible to recipient before opening the mail.
    :param message: message to be sent to recipient.
    :param cc: Recipient to whom carbon copy of the message to be sent
    :param bcc: Persons who are Behind the Carbon copy of  the message
    """
    print('Connecting to mail Server ..')
    print('Sending mail ....')


print(sendmail.__doc__)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">

    sends email to any valid email address

    :param to: Person(s) to whom mail is to be sent. If Multiple persons are recipient separate by ','
    :param subject: Subject of the mail visible to recipient before opening the mail.
    :param message: message to be sent to recipient.
    :param cc: Recipient to whom carbon copy of the message to be sent
    :param bcc: Persons who are Behind the Carbon copy of  the message
    
</pre></div>

<hr/>



#### ____annotations____

<p> Returns dictionary with parameter as key and annotated type as value. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(sendmail.__annotations__)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{'to': <class 'str'>, 'subject': <class 'str'>, 'message': <class 'str'>, 'cc': <class 'str'>, 'bcc': <class 'str'>, 'return': None}
</pre></div>

<hr/>



### Scope of variables

<div id="tut-content"> 
    <ul>
        <li> <strong>Slides</strong> </li>
    </ul> 
</div>

<div id='tut-ppt'>
    <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="/docs/03Functions_scope.pdf" allowfullscreen></iframe>
    </div>
</div>


<div id="tut-content"> 
    <ul>
        <li> <strong>locale scope : </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('It\'s sunny outside.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
It's sunny outside.
Quoting inside "Double quotes".
</pre></div>

<hr/>



### Local variable vs Global variable


Local variable  | Global variable 
:--- | :---
Variables defined inside of function is called as local variables. | Variables defined at module level are called as global variables.
Local variables are created when function is called and destroyed when call is completed. | Global variables are created when module is loaded and remains in memory until it's python is running or removed / reloaded by code.
Local variables can't be accessed outside of function. | Global variables can be accessed inside the function but can not be modified until it's declared global.


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('It\'s sunny outside.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
It's sunny outside.
Quoting inside "Double quotes".
</pre></div>

<hr/>





{% include links.html %}
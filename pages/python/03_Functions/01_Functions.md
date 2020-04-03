---
title: Functions
layout: tutorial
tags: [def, pass, doc-string, return, default_value_parameter, functional_annotation,help(), doc, annotations, locale(), global(), locale_variable, global_variable,locale_vs_global_variable, pass_by_value, pass_by_reference, pass_by_value_VS_reference,positional_arguments, keywords_arguments, varargs, variable_positional_argument,variable_keyword_arguments, order_of_arguments, positional_only_argument,keyword_only_arguments, function_attribute, unpacking_sequence, first_class_object,callable(), nested_function, closure, free_variable, nonlocal, function_as_parameter]
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
        <li> Easy to maintain  </li>
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
    return x // y, x % y


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

<div id="tut-content"> 
    <ul>
        <li> When viewed quick documentation in PyCharm by pressing 'Ctrl + Q' on parameter definition it looks as shown below:  </li>
    </ul> 
</div>

<div id="tut-img">
    <img src="/images/tutorials/python/function_annotation2.png" class="tut-img" alt="Functional Annotation in PyCharm Quick Doc Parameter">
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

<p> Returns dictionary with parameter as key and annotated type as value. REturns empty dictionary if no functional annotation is given. </p>


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
        <li> Python implicitly imports some builtin modules, functions, classes and attributes in global scope of all modules. That is the reason why we are able to use print() function without any imports. </li>
        <li> All Variables defined at module level by default becomes global variables to functions and classes defined in particular module. </li>
        <li> <strong> Locale scope : </strong> Variables and functions declared inside current code blocks comes under locale scope. </li>
        <li> <strong> Global scope : </strong> Variables and functions which are declared at module level or implicitly imported by python, and accessible within locale scope comes under global scope.   </li>
    </ul> 
</div>


<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong>Slides</strong> </li>
    </ul> 
</div>


<div id='tut-ppt'>
    <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="/docs/python/03Functions_scope.pdf" allowfullscreen></iframe>
    </div>
</div>

<hr/>

#### locale()
<p> Returns dictionary containing locale variable as per current scope. </p>

#### global()
<p> Returns dictionary containing global variables. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 12
b = 50

print()
print('Globals :', globals())
print('============='*10)
print('Locals  : ', locals())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Globals : {'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x7ffa67c393d0>, '__spec__': None, '__file__': '< input >', '__builtins__': {'__name__': 'builtins', '__doc__': "Built-in functions, exceptions, and other objects.\n\nNoteworthy: None is the `nil' object;  ....................................................................................................'sys': <module 'sys' (built-in)>, <div id='tut-highlight'>'a': 12, 'b': 50 </div>}
==================================================================================================================================
Locals  :  {'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x7ffa67c393d0>, '__spec__': None, '__file__': '< input >', '__builtins__': {'__name__': 'builtins', '__doc__': "Built-in functions,....................................................................................................'sys': <module 'sys' (built-in)>,<div id='tut-highlight'> 'a': 12, 'b': 50 </div>} 
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> locale and global scope  inside function</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 12
b = 50


def local_func():
    """
    Demonstration of built-in local() function

    """
    c = 70
    print('Locale scope inside function -> ', locals())
    print('=============' * 10)
    print('Global scope inside function -> ', globals())


local_func()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Locale scope inside function -> <div id='tut-highlight'> {'c': 70} </div>
==================================================================================================================================
Global scope inside function ->  {'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x7ffa67c393d0>, '__spec__': None, '__file__': '< input >', '__builtins__': {'__name__': 'builtins', '__doc__': "Built-in functions,...............................................................'sys': <module 'sys' (built-in)>, <div id='tut-highlight'> 'a': 12, 'b': 50, 'local_func': <function local_func at 0x7ffa61fad3a0> </div> }
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

intGlobal = 150

def access_global():
    print(intGlobal)

access_global()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
150
</pre></div>

<hr/>


### global

<div id="tut-content"> 
    <ul>
        <li> <strong>global : </strong> Allows global variable to be modified in locale scope. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

intGlobal = 150


def increment_global():
    global intGlobal
    intGlobal += 1


print('Int Global before function :', intGlobal)
increment_global()
print('Int Global after  function :', intGlobal)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Int Global before function : 150
Int Global after  function : 151
</pre></div>

<hr/>



### Pass by value VS Pass by reference


<div id="tut-content"> 
    <ul>
        <li> In Python variable stores the memory location of an object in memory. </li>
        <li> When passing a variable to a parameter of a function it also passes the memory address of the particular object to local variable of the function. </li>
        <li> Depending on type of object, if it is an immutable data type modifying it's value does not affect the original object stored at given memory address but for mutable data type object values gets modified and memory address remains the same for the given variable.</li>
        <li> In short all immutable data types can be considered as pass by value and all mutable data type can be considered as pass by reference.</li>
    </ul> 
</div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Pass by value : </strong>  passing immutable data type to the parameter of function. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def cube(n: int) -> int:
    """
    Return cube of n (n*n*n)

    :param n: Int number for which cube to be calculated
    """
    n = n * n * n
    print('value of n inside the function :', n)
    return n


n = 10

print('value of n before calling function :', n)
cube(n)
print('value of n after  calling function :', n)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
value of n before calling function : 10
value of n inside the function : 1000
value of n after  calling function : 10
</pre></div>

<hr/>






<div id="tut-content"> 
    <ul>
        <li> <strong> Pass by reference : </strong>  passing mutable data type to the parameter of function. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

list1 = [1, 2, 3]


def add_element(intlist, element):
    intlist.append(element)


print('List before calling function :', list1)
add_element(list1, 4)
print('List after  calling function :', list1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
List before calling function : [1, 2, 3]
List after  calling function : [1, 2, 3, 4]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Slides</strong> </li>
    </ul> 
</div>

<div id='tut-ppt'>
    <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="/docs/python/03Functions_PBV_PBR.pdf" allowfullscreen></iframe>
    </div>
</div>


<hr/>






###  Positional and Keyword arguments

<div id="tut-content"> 
    <ul>
        <li> <strong>Positional argument :</strong> are given according to order of parameters in definition of function.  </li>
        <li> <strong>Keyword argument :</strong> are given ' parameter_name = value ' and can be given in any order.  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def self_intro(name: str, occupation: str) -> None:
    """Demo function with multiple arguments, which prints formatted string.

    :param name: Name of the Person.
    :param occupation: Occupation of the Person
    """
    print(f'My name is {name}. I am {occupation} by profession.')


# positional argument
self_intro('Jhon', 'Pianist')
self_intro('Marian', 'Teacher')


# keyword argument
self_intro(name='Jhon', occupation='Pianist')

# keyword argument in different order
self_intro(occupation='Teacher', name='Marian')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
My name is Jhon. I am Pianist by profession.
My name is Marian. I am Teacher by profession.
My name is Jhon. I am Pianist by profession.
My name is Marian. I am Teacher by profession.
</pre></div>

<hr/>




### default parameter with functional annotation


<div id="tut-content"> 
    <ul>
        <li> <strong> ' var: type = value ' : </strong> format is used for defining default parameter with functional annotation. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def get_icecream(flavour: str, size: str, package: str = 'cup', quantity: 'int>0' = 1):
    """
    processes customizable ice-cream order.

    :param flavour: Flavour of the ice-cream.
    :param size: Size of the ice-cream ['Small', 'Medium', 'Large']
    :param package: Package in which ice-cream to be received ['cup','cone']
    :param quantity: no of ice-creams to be ordered
    """
    print(f'Packing {flavour} flavoured {size} sized, packed in {package} of quantity {quantity}.')


get_icecream('Vanilla', 'small')  

get_icecream('Butterscotch', package='cone', size='Medium')
get_icecream('Butterscotch', 'Large', 'cone', quantity=3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Packing Vanilla flavoured small sized, packed in cup of quantity 1.
Packing Butterscotch flavoured Medium sized, packed in cone of quantity 1.
Packing Butterscotch flavoured Large sized, packed in cone of quantity 3.
</pre></div>

<hr/>



### default parameter value as variable


<div id="tut-content"> 
    <ul>
        <li> <strong> Caution : </strong> While assigning variable as default parameter value, default value in function are created while loading the function not when calling the function. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

globalflavour = 'vanilla'


def choose_flavour(flavour=globalflavour):
    print('You have chosen', flavour)


globalflavour = 'Chocolate'

choose_flavour()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
You have chosen vanilla
</pre></div>

<hr/>


### Variable arguments 


#### Variable Positional argument

<div id="tut-content"> 
    <ul>
        <li> <strong> *varname : </strong> Declares the parameter as variable positional parameter. It can collect variable number of positional parameters which are stored in list. </li>
        <li> It must be declared at the end of all positional arguments. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def get_micecream(size: str, package: str = 'cup', quantity: int =1, *flavours: str):
    """
      processes multiple customizable ice-cream order.

      :param size: Size of the ice-cream ['Small', 'Medium', 'Large']
      :param package: Package in which ice-cream to be received ['cup','cone']
      :param quantity: no of ice-creams to be ordered
      :param flavours: Multiple Flavours of ice-creams want to order.
      """
    for flavour in flavours:
        print(f'Packing {flavour} flavoured {size} sized, packed in {package} of quantity {quantity}.')
    print('@@@@@@@@  All Done @@@@@@@@ :)')


get_micecream('small', 'cup', 1, 'Butterscotch', 'Rose', 'Chocolate Chips', 'Pineapple')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Packing Butterscotch flavoured small sized, packed in cup of quantity 1.
Packing Rose flavoured small sized, packed in cup of quantity 1.
Packing Chocolate Chips flavoured small sized, packed in cup of quantity 1.
Packing Pineapple flavoured small sized, packed in cup of quantity 1.
@@@@@@@@  All Done @@@@@@@@ :)
</pre></div>

<hr/>


#### Variable Keyword argument

<div id="tut-content"> 
    <ul>
        <li> <strong> **varname : </strong> Declares the parameter as variable keyword parameter. It can collect variable number of keyword parameters which are stored in dictionary in which parameter name is key and value as value of dictionary.  </li>
        <li> It must be declared at the end of all keyword arguments. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def get_micecream(size: str, package: str = 'cup', quantity: int =1, *flavours: str, **extra):
    """
      processes multiple customizable ice-cream order.

      :param size: Size of the ice-cream ['Small', 'Medium', 'Large']
      :param package: Package in which ice-cream to be received ['cup','cone']
      :param quantity: no of ice-creams to be ordered
      :param flavours: Multiple Flavours of ice-creams want to order.
      """
    for flavour in flavours:
        print(f'Packing {flavour} flavoured {size} sized, packed in {package} of quantity {quantity} . '
              f'Extras : {extra}')

    print('@@@@@@@@  All Done @@@@@@@@ :)')


get_micecream('small', 'Cone', 1, 'Butterscotch', 'Rose', doubleIceCream=True, chocolateCone=True)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Packing Butterscotch flavoured small sized, packed in Cone of quantity 1 . Extras : {'doubleIceCream': True, 'chocolateCone': True}
Packing Rose flavoured small sized, packed in Cone of quantity 1 . Extras : {'doubleIceCream': True, 'chocolateCone': True}
@@@@@@@@  All Done @@@@@@@@ :)
</pre></div>

<hr/>


### order of arguments 


<div id="tut-content"> 
    <ol>    
        <li> <strong> Positional arguments </strong> </li>
        <li> <strong> *args : </strong> variable positional arguments </li>
        <li> <strong> Keyword arguments </strong> </li>
        <li> <strong> Default value argument </strong> </li>
        <li> <strong> **kwargs : </strong> variable keyword arguments </li>
    </ol>
</div>


<div id="tut-content"> 
    <ul>
        <li> <strong> Example 1</strong> </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def get_cicecream(size: str, *flavours: str, package: str, quantity: int =1, **extra):
    """
    Function demonstrates the use of order of arguments.

    :param size:  Positional argument, can have one of  ['Small', 'Medium', 'Large'] value
    :param flavours: variable positional argument, which can be multiple flavours of ice-cream in string.
    :param package: Keyword only argument, which can have value one of ['cup','cone']
    :param quantity: Default value argument, which can have value in positive int
    :param extra: variable keyword arguments which takes optional extra customization.
    :return: None
    """

    for flavour in flavours:
        print(f'Packing {flavour} flavoured {size} sized, packed in {package} of quantity {quantity}  . ', end='')
        for k in extra:
            print(f'[ {k} :  {extra[k]} ]   ', end='')
        print()


get_cicecream('Small', 'Butterscotch', 'Rose', 'Chocolate Chips',
              'Pineapple', package='cone', coneType='Choco', iceCream='Double')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Packing Butterscotch flavoured Small sized, packed in cone of quantity 1  . [ coneType :  Choco ]   [ iceCream :  Double ]   
Packing Rose flavoured Small sized, packed in cone of quantity 1  . [ coneType :  Choco ]   [ iceCream :  Double ]   
Packing Chocolate Chips flavoured Small sized, packed in cone of quantity 1  . [ coneType :  Choco ]   [ iceCream :  Double ]   
Packing Pineapple flavoured Small sized, packed in cone of quantity 1  . [ coneType :  Choco ]   [ iceCream :  Double ]   

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Example 2</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def func1(x, *y, z):
    print(x, y, z)


func1(1, 2, 3, 4, z=5)
func1(1, z=2)
func1(1, 2, 3)  # this will raise error as z becomes kwargs by the order of argument

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
1 (2, 3, 4) 5
1 () 2
</pre>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 7, in <&zwj;module&zwj;>
TypeError: func1() missing 1 required keyword-only argument: 'z'</pre>
</div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Example 3</strong> </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def func2(x, y, *z, a, b, c=10, d=50, **e):
    print(x, y, *z, a, b, c, d, **e)

func2(1, 2, a=1, b=3) # minimum required keyword arguments

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
1 2 1 3 10 50
</pre>
</div>

<hr/>


### Positional only argument

<div id="tut-content"> 
    <ul>
        <li> <strong>'/' : </strong> separates positional arguments from rest of the arguments  </li>
        <li> All arguments defined before '/' are position only argument, they can be passed as keyword argument.  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def calculate_interest(p: float, r: float, n: int, /, *args, **kwargs) -> int:
    """
    calculates interest based on keyword based arguments only

    :param p: Amount
    :param r: Rate of interest in %
    :param n: years

    """
    return (p*r*n)//100


print(calculate_interest(10000, 6.7, 5))


print(calculate_interest(10000, 6.7, 5, -10, extra1=10))

print(calculate_interest(10000, 6.7, n=5)) # This will raise an error


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
3350.0
3350.0

<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 1, in <&zwj;module&zwj;>
TypeError: calculate_interest() missing 1 required positional argument: 'n'</pre>
</pre></div>

<hr/>

###  Keyword only argument

<div id="tut-content"> 
    <ul>
        <li> <strong> '*' : </strong> Marks the beginning of keyword only argument. </li>
        <li> Arguments defined after '*' are strictly keyword based only.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def calculate_interest( p: float, *, r: float, n: int) -> int:
    """
    calculates interest based on keyword based arguments only

    :param p: Amount
    :param r: Rate of interest in %
    :param n: years

    """
    return (p*r*n)//100


print(calculate_interest(10000, r=6.7, n=5))

print(calculate_interest(p=10000, r=6.7, n=5))

print(calculate_interest(10000, 6.7, n=5)) # This will raise an error


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
3350.0
3350.0
</pre>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 17, in <&zwj;module&zwj;>
TypeError: calculate_interest() takes 1 positional argument but 2 positional arguments (and 1 keyword-only argument) were given</pre>

</div>

<hr/>




### Attribute of the function

<div id="tut-content"> 
    <ul>
        <li> Function can have attributes, which is like variable stored inside the function object. </li>
        <li> Attributes preserves their value between multiple function calls.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def f1():
    f1.count += 1
    print(f'Called {f1.count} times.')


f1.count = 0

f1()
f1()
f1()
f1()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Called 1 times.
Called 2 times.
Called 3 times.
Called 4 times.
</pre></div>

<hr/>



### Un-packing sequence as argument

#### Flat sequences
<div id="tut-content"> 
    <ul>
        <li> <strong> ' *sequence ' : </strong> Un-packs the given flat sequence in data structures such as tuple, list to positional arguments.  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def point(x, y, z):
    print(f'X : {x}  Y : {y}  Z : {z}')


t1 = (12, 15, 19)
l1 = [12, 15, 19]

point(*t1)
point(*l1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
X : 12  Y : 15  Z : 19
X : 12  Y : 15  Z : 19
</pre></div>

<hr/>


#### Key-Value sequences 

<div id="tut-content"> 
    <ul>
        <li> <strong> ' **sequence ' : </strong> Un-packs the given Key-Value sequence in data structures such as dictionary to keyword arguments.  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def point(*, x, y, z):
    """Only takes keyword based arguments for Point dimensions x, y, z"""
    print(f'X : {x}  Y : {y}  Z : {z}')


d1 = {'x': 12, 'y': 25, 'z': 19}
d2 = {'x': 12, 'z': 19, 'y': 25}

point(**d1)
point(**d2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
X : 12  Y : 25  Z : 19
X : 12  Y : 25  Z : 19
</pre></div>

<hr/>



### function as first class objects


#### callable(obj)

<p> Returns True if an object is callable( which can be called like function). </p>

#### Assigning to a variable

<div id="tut-content"> 
    <ul>
        <li> In python functions are first class object which can be assigned  to a variable. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def point(x, y, z):
    print(f'X : {x}  Y : {y}  Z : {z}')


pointX = point

# id
print(id(point), id(pointX))

# checking given variable is function or not
print(callable(point))
print(callable(pointX))

# Calling function from variable
pointX(12, 19, 15)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
140270329431952 140270329431952
True
True
X : 12  Y : 19  Z : 15
</pre></div>

<hr/>



### Nested functions


#### Inner function called within outer function

<p> Function can be defined within function. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def outer_func():
    def inner_func():
        print('Message from the inner function.')
    inner_func()


outer_func()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Message from the inner function.
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Exmaple : </strong> Nested functions can help modularization of business logic.  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def deposit(amount, accNo):

    def bronze_deposit():
        print('{} amount has been deposited to account no : {}'.format(amount, accNo))

    def silver_deposit():
        print('Requesting approval from branch manager ....')
        print('Request approved')
        approve = True
        if approve:
            print('{} amount has been deposited to account no : {}'.format(amount, accNo))

    def gold_deposit():
        print('Request additional security while processing transaction ...')
        print('Requesting approval from branch manager ....')
        print('Request approved')
        approve = True
        if approve:
            print('{} amount has been deposited to account no : {}'.format(amount, accNo))

    # Main business logic
    print('------------'*5)

    if amount < 1_00_000:
        bronze_deposit()
    elif amount < 10_00_000:
        silver_deposit()
    else:
        gold_deposit()

    print('------------'*5)


deposit(10000, 2652644545)
deposit(1_20_000, 2652644545)
deposit(12_20_000, 2652644545)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
------------------------------------------------------------
10000 amount has been deposited to account no : 2652644545
------------------------------------------------------------
------------------------------------------------------------
Requesting approval from branch manager ....
Request approved
120000 amount has been deposited to account no : 2652644545
------------------------------------------------------------
------------------------------------------------------------
Request additional security while processing transaction ...
Requesting approval from branch manager ....
Request approved
1220000 amount has been deposited to account no : 2652644545
------------------------------------------------------------
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Nested Function returning value : </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def show_mobiles(budget):

    def entry_level():
        return "catalogue of Entry Level mobile phones"

    def mid_range():
        return "catalogue of mid range mobile phones "

    def flagships():
        return "catalogue of flagship mobile phones"

    #business logic
    if budget <= 300:
        return entry_level()
    elif budget <= 600:
        return mid_range()
    else:
        return flagships()


print('show_mobiles(250) :', show_mobiles(250))
print('show_mobiles(550) :', show_mobiles(550))
print('show_mobiles(700) :', show_mobiles(700))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
show_mobiles(250) : catalogue of Entry Level mobile phones
show_mobiles(550) : catalogue of mid range mobile phones 
show_mobiles(700) : catalogue of flagship mobile phones
</pre></div>

<hr/>



#### closure 

<div id="tut-content"> 
    <ul>
        <li> <strong>Closure : </strong> is the function which remember the local variable from enclosing scope. </li>
        <li>  It is also called as Factory function in terms of design pattern. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def multiplyx(x):

    def withy(y):
        return x*y

    return withy   # Returns Closure


print(multiplyx(45)(3))

# Another way of calling function : fetching closure
multiY = multiplyx(45) 

print(multiY(3))
print(multiY(4))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
135
135
180
</pre></div>

<hr/>



#### Free Variable 

<div id="tut-content"> 
    <ul>
        <li> <strong> Free Variable : </strong> Is a variable used in the code block but not defined in local scope as well as not declared in global scope. </li>
    </ul> 
</div>


<p> Attributes of function for inspecting free variables </p>

Variable name      |        Definition
:--- | :---
  co_freevars         |  tuple containing names of free variable used by the function
  co_varnames         |  tuple containing names of local variable used by function
  co_cellvars         |  tuple containing names of local variables referenced by nested inner function.



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def multiplyx(x):

    def withy(y):
        return x*y

    return withy   # Returns Closure


multiY = multiplyx(45)

print('multiY.co_freevars :', multiY.__code__.co_freevars)
print('multiY.co_varnames :', multiY.__code__.co_varnames)
print('multiplyx.co_cellvars :', multiplyx.__code__.co_cellvars)


# Closer is tuple of Cell(s)
print('multiY.__closure__ :', multiY.__closure__)

# getting content of the cell
print('multiY.closure[0].cell_contents :', multiY.__closure__[0].cell_contents)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
multiY.co_freevars : ('x',)
multiY.co_varnames : ('y',)
multiplyx.co_cellvars : ('x',)
multiY.__closure__ : (<cell at 0x7fb20728ad00: int object at 0x55c64a295c80>,)
multiY.closure[0].cell_contents : 45
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Variables and namespaces of outer and inner function </li>
    </ul> 
</div>


<p> Local variable with same name hides the global variable or variable in enclosing scope. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def outer_func():
    varA = 15

    def inner_func():
        varA = 25
        print('Variable A in inner function :', varA)

    inner_func()
    print('Variable A in outer function :', varA)


varA = 5

outer_func()

print('Variable A in global scope :', varA)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Variable A in inner function : 25
Variable A in outer function : 15
Variable A in global scope : 5
</pre></div>

<hr/>


#### nonlocal
<div id="tut-content"> 
    <ul>
        <li> <strong> nonlocal : </strong> Allows free variables to be modified. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def outer_func():
    varA = 15

    def inner_func():
        nonlocal varA   # define variable as non local
        varA = 25
        print('Variable A in inner function', varA)

    inner_func()
    print('Variable A in outer function', varA)


outer_func()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Variable A in inner function 25
Variable A in outer function 25
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Mutable data type such as list, set can be modified without declaring nonlocal. </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def outer_func():
    varA = [1, 2, 3]

    def inner_func():

        varA[0] = 25
        print('modifying immutable variable in inner function ', varA)

    print('Variable A in outer function', varA)
    inner_func()
    print('varA After calling inner function', varA)

outer_func()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Variable A in outer function [1, 2, 3]
modifying immutable variable in inner function  [25, 2, 3]
varA After calling inner function [25, 2, 3]
</pre></div>

<hr/>



### passing function as parameter

<div id="tut-content"> 
    <ul>
        <li> Function in python are first class object which can be passed to parameter of a function same as passing other object such as int or str. </li>
        <li> Functions passed as an argument still remains callable, which can be called inside function which takes it as an argument.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def prime_cust(order):
    print('processing prime order......')
    print('Your order will be delivered within 2 days')
    print(order)
    print('Your order will be delivered by red express')


def reg_cust(order):
    print('processing regular order......')
    print('Your order will be delivered within 7 days')
    print('order :', order)
    print('Your order will be delivered by purple express')


def process_order(custType, order):
    custType(order)


order = {'item': 'headphones', 'color': 'black', 'type': 'wireless'}
primeCustomer = prime_cust
regularCustomer = reg_cust

# passing function as an argument
process_order(primeCustomer, order)
print('\n')
process_order(regularCustomer, order)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
processing prime order......
Your order will be delivered within 2 days
{'item': 'headphones', 'color': 'black', 'type': 'wireless'}
Your order will be delivered by red express


processing regular order......
Your order will be delivered within 7 days
order : {'item': 'headphones', 'color': 'black', 'type': 'wireless'}
Your order will be delivered by purple express
</pre></div>

<hr/>




{% include callout.html content="**Note** : For more details on function, check **decorators** and **functool** . " type="primary" %} 

{% include links.html %}
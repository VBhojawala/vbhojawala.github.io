---
title: Python Module, Package and Import
layout: tutorial
tags: [python, Module, Package,  import, Regular_Package, Namespace_Package, sys.path, PYTHONPATH, pycache, import_from, wildcard_import, Aliasing, user_defined_module, user_defined_package, init.py, restricting_wildcard_import, __all__, relative_import, Mixing_regular_namespace_package, circular_import,  __future__]
sidebar: python_sidebar
permalink: python_module_package_import.html
folder: python
prev_section: python_exception_handling.html
prev_section_title: Exception Handling
prev: 
prev_title: 
next: python_logging.html
next_title: Logging
next_section: 
next_section_title: 
summary: Python Module, Package, importing module package and functions, regular and namespace package, sys.path, PYTHONPATH, pycache, wildcard import, aliasing, user defined package and modules, __init__.py, restricting wildcard imports, relative import, mixing regular and namespace package, circular import and __future__.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Utu-5EhLkNg" allowfullscreen></iframe>
</div>

<hr/>

## Module

<p> Module is the .py(Python) file containing Python definitions and statements. </p>

## Package

<p> Package is collection of modules. </p>

<div id="tut-content"> 
    <ul>
        <li> In Python package is a directory(Folder) with modules(.py files) and __init__.py . __init__.py makes a directory into package (__init__ is mandatory upto python 3.3) and contents of __init__.py will get imported when importing package. </li>
        <li> In Python there are two types of Packages : Regular packages and Namespace packages </li>
    </ul> 
    
</div>


### Regular package

<div id="tut-content"> 
    <ul>
        <li> Up to python 3.2 package folder needs to have __init__.py file, which makes system directory in to package after registering path to sys.path. </li>
        <li> Regular package still works same  way in python 3.3 and later. </li>
    </ul> 
</div>


### Namespace package

<div id="tut-content"> 
    <ul>
        <li> from python 3.3 capability of package is extended and an alternative more flexible way of creating package added. </li>
        <li> Namespace package does not require package directory to have __init__.py file. </li>
        <li> Namespace package can span up to multiple directory(packages).</li>
        <li> Namespace package still requires path to be registered to sys.path .</li>
    </ul> 
</div>


### Adding directory path to sys.path

#### Checking current paths

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import sys


for path in sys.path:
    print(path)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
/home/asha/Programs/pycharm/plugins/python-ce/helpers/pydev
/home/asha/Programs/pycharm/plugins/python-ce/helpers/third_party/thriftpy
/home/asha/Programs/pycharm/plugins/python-ce/helpers/pydev
/usr/local/lib/python38.zip
/usr/local/lib/python3.8
/usr/local/lib/python3.8/lib-dynload
/home/asha/PycharmProjects/pythonEx/venv/lib/python3.8/site-packages
/home/asha/PycharmProjects/pythonEx/venv/lib/python3.8/site-packages/setuptools-40.8.0-py3.8.egg
/home/asha/PycharmProjects/pythonEx/venv/lib/python3.8/site-packages/pip-19.0.3-py3.8.egg
/home/asha/PycharmProjects/pythonEx
/home/asha/PycharmProjects/pythonEx/05_ExceptionHandling/progs
/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage
/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/namespace/package1
/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/namespace/package2
</pre></div>

<hr/>


#### Adding path to sys.path

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import sys
sys.path.append('<PATH_TO_DIRECTORY>')


{% endhighlight %}
</div>



#### Adding path using PyCharm

<div id="tut-content"> 
    <ul>
        <li> <strong> File -> Settings -> Project -> Project Structure -> Package -> Source -> Select Directory -> Mark as Sources </strong> </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/AddPathInPyCharm1.png" class="tut-img" alt="AddPathInPyCharm1">
        </div>
        <p> OR </p>
        <li> <strong> Right-Click on Folder in Project View -> Mark Directory as -> Sources root</strong> </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/AddPathInPyCharm2.png" class="tut-img" alt="AddPathInPyCharm1">
        </div>
    </ul> 
</div>

<hr/>

#### Adding path using environment variable

<p id="tut-cons"> Syntax : export PYTHONPATH = $PYTHONPATH:&lt;modulepath> </p>

<div id="tut-content"> 
    <ul>
        <li> &lt;modulepath> needs to be replace with the path of your module </li>
        <li> For windows user you can append module path to environment variable </li>
    </ul> 
</div>

<hr/>

### __pycache__

<div id="tut-content"> 
    <ul>
        <li> __pycache__ folder in your package  contains compiled version of each module. </li>
        <li> It helps improve the loading time of  the module. when the code of the file is changed it automatically gets re-compiled.</li>
    </ul> 
</div>


<div id="tut-content"> 
    <ul>
        <li> package with __pycache__  </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/PyCache1.png" class="tut-img" alt="python logo">
        </div>
        <li> Content of __pycache__ </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/PyCache2.png" class="tut-img" alt="python logo">
        </div>
    </ul> 
</div>

<hr/>

## Import

### Importing module

<p id='tut-cons'> Syntax : import &lt;ModuleName> </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import datetime

{% endhighlight %}
</div>

<hr/>

### Importing function from module

<p id='tut-cons'> Syntax : from &lt;ModuleName> import &lt;function1>, &lt;function2> </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from math import sqrt

{% endhighlight %}
</div>

<br/>



<div id="tut-content"> 
    <ul>
        <li> Importing multiple functions </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from math import sqrt, log

{% endhighlight %}
</div>


<br/>



<div id="tut-content"> 
    <ul>
        <li> Importing all functions </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from math import *

{% endhighlight %}
</div>


<hr/>



### Importing Package

<p id='tut-cons'> import &lt;ModuleName> </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import datetime

{% endhighlight %}
</div>


<hr/>




<div id="tut-content"> 
    <ul>
        <li> import module from package </li>
    </ul> 
</div>


<p id='tut-cons'> from &lt;PackageName> import &lt;ModuleName> </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime

{% endhighlight %}
</div>


<hr/>


### Importing all using wildcard ' * '

<div id="tut-content"> 
    <ul>
        <li> <strong> from &lt;PackageName> import * : </strong> Imports all Modules from given &lt;PackageName>. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import *

print(datetime.now())
print(date.today())
print(time(15, 12, 22))
print(timedelta(15, 2))


{% endhighlight %}
</div>

<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong> from &lt;ModuleName> import * : </strong>  Imports all functions and variables from given &lt;ModuleName>. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from traceback import *

print_exc()
print_tb()
print_stack()
print_exception()


{% endhighlight %}
</div>


### Aliasing

<p> When two modules have function with same name while importing them using aliasing we can assign different names to it. Using Aliasing long module name can also be shortened. </p>


<p id='tut-cons'> syntax : <br/> import &lt;Module> as &lt;Alias> <br/> from &lt;Module> import &lt;Function> as &lt;Alias>  <br/> from &lt;Package> import &lt;ModuleName> as alias</p>


<div id="tut-content"> 
    <ul>
        <li> Two module with same function name </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from math import sqrt
from cmath import sqrt


{% endhighlight %}
</div>


<div id="tut-content"> 
    <ul>
        <li> Using aliasing to import them </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from math import sqrt as msqrt
from cmath import sqrt as cmsqrt


{% endhighlight %}
</div>


<hr/>



<div id="tut-content"> 
    <ul>
        <li> Aliasing module </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import traceback as tb

{% endhighlight %}
</div>


<hr/>




<div id="tut-content"> 
    <ul>
        <li> Aliasing the Package </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import datetime as dt

{% endhighlight %}
</div>


<hr/>


<div id="tut-content"> 
    <ul>
        <li> Aliasing the Module from Package </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

{% endhighlight %}
</div>


<hr/>



### Importing User defined module

<div id="tut-content"> 
    <ul>
        <li> <strong> importing module which is in same directory as current module </strong> </li>
    </ul> 
</div>

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>

<div id="tut-img">
    <img src="/images/tutorials/python/ImportMDSameDir.png" class="tut-img" alt="python logo">
</div>

<br/>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime


def greetings():
    now = datetime.now()

    current_hour = now.hour

    if 5 <= current_hour < 11:
        print("Good Morning!")
    elif 11 <= current_hour < 17:
        print("Good Afternoon!")
    else:
        print("Good Evening!")



{% endhighlight %}
</div>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import Module2

Module2.greetings()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Good Morning!
</pre></div>

<hr/>




### Importing variable from the module [not a good design]



{% include callout.html content="**Caution** : If the same name variable already exist in current module it will override values! " type="primary" %} 

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/ImportMDSameDir.png" class="tut-img" alt="python logo">
</div>

<br/>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

int1 = 20

list1 = []


{% endhighlight %}
</div>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from Module2 import int1, list1

print(int1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
20
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong> Modifying and accessing Module's global variables [Bad Design!] </strong> </li>
    </ul> 
</div>


<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/ImportMDSameDir.png" class="tut-img" alt="ImportMDSameDir">
</div>
<br/>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

int1 = 20

list1 = []


def print_int():
    print(f'int1 -> {int1}')


def print_list():
    print(f'list1 -> {list1}')



{% endhighlight %}
</div>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from Module2 import int1, list1, print_int, print_list

# changing mutable and immutable variables of module
int1 = 99
list1.extend(['a', 'b', 'c'])

# checking the value of variable in module
print_int()
print_list()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
int1 -> 20
list1 -> ['a', 'b', 'c', 'a', 'b', 'c']
</pre></div>

<hr/>



### Correct way of accessing module's Global variables 

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/ImportMDSameDir.png" class="tut-img" alt="ImportMDSameDir">
</div>
<br/>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

int1 = 20

list1 = []


def print_int():
    print(f'int1 -> {int1}')


def print_list():
    print(f'list1 -> {list1}')



{% endhighlight %}
</div>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import Module2 as m1

m1.int1 = 250
m1.list1.extend(['a', 'b', 'c'])

m1.print_int()
m1.print_list()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
int1 -> 250
list1 -> ['a', 'b', 'c', 'a', 'b', 'c']
</pre></div>

<hr/>





### Importing User defined Package

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/ImportUDPackage.png" class="tut-img" alt="ImportUDPackage">
</div>
<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module1.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def sayHello():
    print('Hello World from Module 1!')


{% endhighlight %}
</div>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from packageA import Module1 as m1

m1.sayHello()

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World from Module 1!
</pre></div>

<p id='tut-cons'> OR </p>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from packageA.Module1 import sayHello

sayHello()

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World from Module 1!
</pre></div>


<hr/>



### Importing module with executable code

<div id="tut-content"> 
    <ul>
        <li> When importing Module first time only all the code executed once. If same import is run again even from different module, it will not execute code again because module is already loaded in memory. </li>
    </ul> 
</div>



<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/ImportModuleWithExecutableCode.png" class="tut-img" alt="ImportModuleWithExecutableCode">
</div>
<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module1.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def sayHello():
    print('Hello World from Module 1!')


# Executable code
msg = 'Say Hello!'
sayHello()
print(msg)



{% endhighlight %}
</div>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from packageA.packageC import Module1

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World from Module 1!
Say Hello!
</pre></div>


<hr/>


### Avoiding running executable code while importing

<div id="tut-content"> 
    <ul>
        <li> put executable code inside   " if name == '__main__' " block which will only get executed when module is being run. </li>
    </ul> 
</div>

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/ImportModuleWithExecutableCode.png" class="tut-img" alt="ImportModuleWithExecutableCode">
</div>
<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module1.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def sayHello():
    print('Hello World from Module 1!')


# Executable code [we can write test cases here]
if __name__ == '__main__':
    msg = 'Say Hello!'
    sayHello()
    print(msg)



{% endhighlight %}
</div>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from packageA.packageC import Module1


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">

</pre></div>

<hr/>


### Controlling wildcard import with  \__init__.py

<div id="tut-content"> 
    <ul>
        <li> __init__.py can have __all__ attribute which contains list of modules that should be automatically imported from wildcard * statement instead of importing all. </li>
    </ul> 
</div>

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/WilCardControlWithAll.png" class="tut-img" alt="WilCardControlWithAll">
</div>
<br/>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module1.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def sayHelloM1():
    print('Hello World from Module 1!')


{% endhighlight %}
</div>

<hr/>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def sayHelloM2():
    print('Hello World from Module 2!')


{% endhighlight %}
</div>

<hr/>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> ModuleA.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def sayHelloA():
    print('Hello World from Module A!')


{% endhighlight %}
</div>


<hr/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> ModuleB.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def sayHelloB():
    print('Hello World from Module B!')


{% endhighlight %}
</div>

<hr/>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> __init__.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


__all__ = ['Module1', 'Module2']


{% endhighlight %}
</div>


<hr/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from packageA.subPackageX import *

Module1.sayHelloM1()
Module2.sayHelloM2()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World from Module 1!
Hello World from Module 2!
</pre></div>


{% include callout.html content="**Note** : Try to access ModuleA and ModuleB, they are not automatically imported. " type="primary" %} 


<hr/>


### Restricting wildcard import of function and variables from module using \__all__

<div id="tut-content"> 
    <ul>
        <li> Module can have __all__ variable containing list of attributes to be imported when wildcard import is used. </li>
        <li> Special variable and function (attribute and functions whose name begins with _ or __) are not imported when importing using wildcard import but they can be accessed using module import. </li>
    </ul> 
</div>


<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/WildcardModuleImport.png" class="tut-img" alt="WildcardModuleImport">
</div>

<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> __init__.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


__all__ = ['x', 'z', 'get_x']

x = 100
_y = 150
z = 30
a = 50
b = 10


def get_x():
    return x


def __gety():
    return _y



{% endhighlight %}
</div>


<hr/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from packageB.module2 import *

print(f'x : {x}  z : {z}')
print('get_x() :', get_x())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
x : 100  z : 30
get_x() : 100
</pre></div>

{% include callout.html content="**Note** :  Variable _y and function \__gety() will not be imported with wildcard import because they are special variable and function. Variable ' a ' and ' b ' will not be imported because it is not listed in \__all__ list. " type="primary" %} 


<hr/>



### Relative imports

#### Importing module from same package as current module

<p> " . " is used for referring to modules in same package as in current module. </p>

#### Importing module from different package than current module is in at the same Package hierarchy level 

<p> " .. " is used for going one step backward in hierarchy. </p>

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/RelativeImport.png" class="tut-img" alt="RelativeImport">
</div>

<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module3.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def say_hello():
    print('Hello World from Module 3!')


{% endhighlight %}
</div>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module4.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def say_hello():
    print('Hello World from Module 4!')


{% endhighlight %}
</div>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> RelativeImport.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from . import Module4

Module4.sayHello()


from ..packageB import Module3

Module3.sayHello()


{% endhighlight %}
</div>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from packageA.packageC import RelativeImport


{% endhighlight %}
</div>



<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World from Module 4!
Hello World from Module 3!
</pre></div>

<hr/>




### Namespace package spanning across multiple dictionary


<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/NamespaceImportSpanningMultipleDir.png" class="tut-img" alt="NamespaceImportSpanningMultipleDir">
</div>

<br/>


<div id="tut-content"> 
    <ul>
        <li> package1 and package2 both directory is have a folder 'sub' containing different module and package. </li>
        <li> Add path of package1 and package2 to sys.path, now new namespace 'sub' is created which contains modules and package from both package1/sub and package2/sub. </li>
    </ul> 
</div>

<hr/>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module1.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Importing Module1 from namespace package1/sub/Module1')

{% endhighlight %}
</div>

<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Importing Module2 from namespace package2/sub/Module2')

{% endhighlight %}
</div>

<br/>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> Sub3.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('importing Module /package1/sub/ssub1/Sub3')

{% endhighlight %}
</div>

<br/>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> Sub4.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('importing Module /package2/sub/ssub2/Sub4')

{% endhighlight %}
</div>

<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# Importing Modules
from sub import Module1, Module2

# Importing Package
from sub.ssub1 import Sub3
from sub.ssub2 import Sub4


{% endhighlight %}
</div>



<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Importing Module1 from namespace package1/sub/Module1
Importing Module2 from namespace package2/sub/Module2
importing Module /package1/sub/ssub1/Sub3
importing Module /package2/sub/ssub2/Sub4
</pre></div>

<hr/>




### Mixing Regular and Namespace package

<p> When Regular and Namespace package are mixed following is the order of 'import s1': </p>

<div id="tut-content"> 
    <ol>    
        <li> <strong> Regular Package : </strong> Directory 's1' with __init__.py, if found import the (regular) package. </li>
        <li> <strong> Module : </strong> 's1.py', if found import module </li>
        <li> <strong> Namespace Package : directory 's1' without __init_.py imported as (namespace) package if failed to find 1 and 2 in all paths in  sys.path. </strong> </li>
    </ol>
</div>


#### Example 1

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/RegularAndNameSpacePackage1.png" class="tut-img" alt="RegularAndNameSpacePackage1">
</div>

<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> pacMix/s1.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Importing module s1!')

{% endhighlight %}
</div>

<br/>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> pacMix/s1/s1.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Importing module s1 from Regular package s1!')

{% endhighlight %}
</div>

<br/>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> pacMix/s1/__init__.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Importing package S1.')

{% endhighlight %}
</div>

<br/>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from pacMix import s1


{% endhighlight %}
</div>



<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Importing package S1.
</pre></div>

<hr/>



#### Example 2

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/RegularAndNameSpacePackage2.png" class="tut-img" alt="RegularAndNameSpacePackage1">
</div>

<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> pacMix2/s1.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Importing module s1!')

{% endhighlight %}
</div>

<br/>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> pacMix2/s1/s1.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Importing module s1 from Namespace package s1!')

{% endhighlight %}
</div>

<br/>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> ImportEx.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from pacMix2 import s1


{% endhighlight %}
</div>



<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Importing module s1!
</pre></div>

<hr/>



### Circular Import


#### Problem 

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/CircularImport.png" class="tut-img" alt="CircularImport">
</div>

<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> Foo.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from circularImport.Bar import bar


def foo():
    print('Foo ........')
    bar()

{% endhighlight %}
</div>

<br/>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> Bar.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from circularImport.Foo import foo


def bar():
    print('Bar')


if __name__ == '__main__':
    foo()



{% endhighlight %}
</div>



<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/circularImport/Bar.py", line 1, in &lt;module>
    from circularImport.Foo import foo
  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/circularImport/Foo.py", line 1, in &lt;module>
    from circularImport.Bar import bar
  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/circularImport/Bar.py", line 1, in &lt;module>
    from circularImport.Foo import foo
ImportError: cannot import name 'foo' from partially initialized module 'circularImport.Foo' <div id="tut-highlight">(most likely due to a circular import)</div> (/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/circularImport/Foo.py)</pre></div>

<hr/>


#### Solution

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/CircularImport2.png" class="tut-img" alt="CircularImport2">
</div>

<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> FooFix.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from circularImportFix import BarFix


def foo():
    print('Foo ........')
    BarFix.bar()

{% endhighlight %}
</div>

<br/>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> BarFix.py </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from circularImportFix import FooFix


def bar():
    print('Bar')


if __name__ == '__main__':
    FooFix.foo()



{% endhighlight %}
</div>



<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Foo ........
Bar
</pre></div>

<hr/>



#### import this

<p> Returns Zen of python </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import this


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!

</pre></div>

<hr/>


### Importing module from future  releases

<p> Allows importing functionality from future releases to make current development compatible with new releases </p>

<div id="tut-content"> 
    <ul>
        <li> __future__ import statement must appear as first statement in module. </li>
        <li> Only docstring, blank line or comment is allowed before __future__ imports.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# In python2 importing print function of python3
from __future__ import print_function
print('Python3 print function')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Python3 print function
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> List of available modules for import </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import __future__ as future
print(dir(future))  


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
['CO_FUTURE_ABSOLUTE_IMPORT', 'CO_FUTURE_DIVISION', 'CO_FUTURE_PRINT_FUNCTION', 'CO_FUTURE_UNICODE_LITERALS', 'CO_FUTURE_WITH_STATEMENT', 'CO_GENERATOR_ALLOWED', 'CO_NESTED', '_Feature', '__all__', '__builtins__', '__doc__', '__file__', '__name__', '__package__', <div id="tut-highlight">'absolute_import', 'all_feature_names', 'division', 'generators', 'nested_scopes', 'print_function', 'unicode_literals', 'with_statement'</div>]
</pre></div>

<hr/>

{% include links.html %}
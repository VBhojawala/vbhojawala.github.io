---
title: Module, Package and Import
layout: tutorial
tags: []
sidebar: python_sidebar
permalink: python_module_package_import.html
folder: python
prev_section: python_exception_handling.html
prev_section_title: Exception Handling
prev: 
prev_title: 
next: 
next_title: 
next_section: 
next_section_title: 
summary: Module, Package, importing module package and functions.
---


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

<hr/>



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

from datetime import timezone, datetime, timedelta

{% endhighlight %}
</div>


<hr/>



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


### Aliasing

<p> When two modules have function with same name while importing them using aliasing we can assign different names to it. Using Aliasing long module name can also be shortened. </p>


<p id='tut-cons'> syntax : <br/> import &lt;Module> as &lt;Alias> <br/> from &lt;Module> import &lt;Function> as &lt;Alias>  </p>


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

tb.print_exc()


{% endhighlight %}
</div>


<hr/>

{% include links.html %}
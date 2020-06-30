---
title: Python Enum
layout: tutorial
tags: [python, Enumeration, value, name, constant, for-each, unique, auto(), IntEnum, InFlag, Flag, _generate_next_value_()]
sidebar: python_sidebar
permalink: python_enum.html
folder: python
prev_section: 
prev_section_title: 
prev: python_heapq.html
prev_title: heapq
next: python_array.html
next_title: Array
next_section: 
next_section_title: 
summary: Python Enum class , constructor attributes, iterating enum, unique, IntEnum, InFlag, Flag.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/eZTIUiyBFHA" allowfullscreen></iframe>
</div> <hr/>

## Enum

<p> <strong> Enumeration : </strong> is a set of symbols with constant value where symbols can be compared and iterated. </p>

### Constructor

#### Enum(value='NewEnumName', names=<...>, *, module='...', qualname='...', type=<mixed-in class>, start=1)

<div id="tut-content"> 
    <ul>
        <li> <strong> value : </strong> Name of newly created subclass of Enum. </li>
        <li> <strong> names : </strong> Names of symbol either provided in string or iterable. Iterator can also contain elements in (name, value) pair, where name must be a string and value can be of any type. </li>
        <li> <strong> module : </strong> Takes name of module as argument which is used for pickling Enum. </li>
        <li> <strong> qualname : </strong> Pickle protocol 4 and later relies on __qualname__ for finding class definition. </li>
        <li> <strong> type : </strong> Takes Mix-in class as parameter. </li>
        <li> <strong> start : </strong> Default value for Enumeration symbols by default begins with 1. If given value as parameter, default value of first symbol will be the given value. It gets incremented by 1 for next symbol. </li>
    </ul> 
</div>



<div id="tut-content"> 
    <ul>
        <li> Enum with names as string containing symbols separated space. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum

Plan = Enum('Plan', 'DIAMOND PLATINUM GOLD SILVER')
print('Is Plan subclass of Enum ? :', issubclass(Plan, Enum))
print(f'Plan : {Plan}   type : {type(Plan)}')
print(f'elements : {list(Plan)}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Is Plan subclass of Enum ? : True
Plan : <enum 'Plan'>   type : <class 'enum.EnumMeta'>
elements : [<Plan.DIAMOND: 1>, <Plan.PLATINUM: 2>, <Plan.GOLD: 3>, <Plan.SILVER: 4>]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Enum with names as string containing symbols separated by comma. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum

Plan = Enum('Plan', 'DIAMOND,PLATINUM,GOLD,SILVER')
print(f'elements : {list(Plan)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
elements : [<Plan.DIAMOND: 1>, <Plan.PLATINUM: 2>, <Plan.GOLD: 3>, <Plan.SILVER: 4>]
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> Enum with names as string containing symbols separated by comma and space. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', 'DIAMOND, PLATINUM, GOLD, SILVER')
list(Plan)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
elements : [<Plan.DIAMOND: 1>, <Plan.PLATINUM: 2>, <Plan.GOLD: 3>, <Plan.SILVER: 4>]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Enum with start parameter. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', 'DIAMOND,PLATINUM,GOLD,SILVER', start=101)
print(f'elements : {list(Plan)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
elements : [<Plan.DIAMOND: 101>, <Plan.PLATINUM: 102>, <Plan.GOLD: 103>, <Plan.SILVER: 104>]
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> Enum with name given as iterator of (symbol, value) pair. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', (('DIAMOND', 1), ('PLATINUM', 2), ('GOLD', 3), ('SILVER', 4)))
print(f'elements : {list(Plan)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
elements : [<Plan.DIAMOND: 1>, <Plan.PLATINUM: 2>, <Plan.GOLD: 3>, <Plan.SILVER: 4>]
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> Enum with name given as an iterator of key  and custom value pair</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', (('DIAMOND', 100), ('PLATINUM', 80), ('GOLD', 60), ('SILVER', 50)))
print(f'elements : {list(Plan)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
elements : [<Plan.DIAMOND: 100>, <Plan.PLATINUM: 80>, <Plan.GOLD: 60>, <Plan.SILVER: 50>]
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Enum with name given as mapping. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', {'DIAMOND': 1, 'PLATINUM': 2, 'GOLD': 3, 'SILVER': 4})
print(f'elements : {list(Plan)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
elements : [<Plan.DIAMOND: 1>, <Plan.PLATINUM: 2>, <Plan.GOLD: 3>, <Plan.SILVER: 4>]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Value of the enum can be anything like str, float, tuple etc. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
CountryCode = Enum('CountryCode', {'US': 'United States', 'CA': 'Canada', 'NZ': 'New Zealand', 'FR': 'France'})
print(f'elements : {list(CountryCode)}')

CountryCode = Enum('CountryCode', {'US': (1, 'United States'), 'NZ': (64, 'New Zealand'), 'FR': (34, 'France')})
print(f'\nelements : {list(CountryCode)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
elements : [<CountryCode.US: 'United States'>, <CountryCode.CA: 'Canada'>, <CountryCode.NZ: 'New Zealand'>, <CountryCode.FR: 'France'>]

elements : [<CountryCode.US: (1, 'United States')>, <CountryCode.NZ: (64, 'New Zealand')>, <CountryCode.FR: (34, 'France')>]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Pickle with type parameter </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum, IntEnum
Plan = Enum('Plan', {'DIAMOND': 1, 'PLATINUM': 2, 'GOLD': 3, 'SILVER': 4}, type= IntEnum)
print(f'elements : {list(Plan)}')
print('Plan.DIAMOND == 1 :', Plan.DIAMOND == 1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
elements : [<Plan.DIAMOND: 1>, <Plan.PLATINUM: 2>, <Plan.GOLD: 3>, <Plan.SILVER: 4>]
Plan.DIAMOND == 1 : True
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> For pickle use module attribute </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', {'DIAMOND': 1, 'PLATINUM': 2, 'GOLD': 3, 'SILVER': 4}, module= __name__)
print(f'elements : {list(Plan)} Module : {Plan.__module__}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
It's sunny outside.
Quoting inside "Double quotes".
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> qualname : </strong> Pickle protocol 4 and later relies on __qualname__ for finding class definition. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', {'DIAMOND': 1, 'PLATINUM': 2, 'GOLD': 3, 'SILVER': 4}, qualname='Const.Plans')
print(f'elements : {list(Plan)} qualname : {Plan.__qualname__}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
elements : [<Plan.DIAMOND: 1>, <Plan.PLATINUM: 2>, <Plan.GOLD: 3>, <Plan.SILVER: 4>] <div id="tut-highlight">qualname : Const.Plans</div>
</pre></div>

<hr/>



### Accessing Element

#### By Symbol

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', {'DIAMOND': 1, 'PLATINUM': 2, 'GOLD': 3, 'SILVER': 4})

print(f'GOLD Plan : {Plan.GOLD}')
# or
print(f'GOLD Plan : {Plan["GOLD"]}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
GOLD Plan : Plan.GOLD
GOLD Plan : Plan.GOLD
</pre></div>

<hr/>



#### By Value

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', {'DIAMOND': 1, 'PLATINUM': 2, 'GOLD': 3, 'SILVER': 4})

print(f'Plan(1) : {Plan(1)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Plan(1) : Plan.DIAMOND
</pre></div>

<hr/>



### Attributes of Symbol

#### value
<p> Returns value of the particular symbol. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', {'DIAMOND': 1, 'PLATINUM': 2, 'GOLD': 3, 'SILVER': 4})

print('Value of DIAMOND :', Plan.DIAMOND.value)
print('Value of GOLD    :', Plan.GOLD.value)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Value of DIAMOND : 1
Value of GOLD    : 3
</pre></div>

<hr/>


#### name
<p> Returns name of the particular symbol. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', {'DIAMOND': 1, 'PLATINUM': 2, 'GOLD': 3, 'SILVER': 4})

print('Name of DIAMOND :', Plan.DIAMOND.name)
print('Name of GOLD    :', Plan.GOLD.name)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Name of DIAMOND : DIAMOND
Name of GOLD    : GOLD
</pre></div>

<hr/>



### Iterating 

#### for-each

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum
Plan = Enum('Plan', {'DIAMOND': 1, 'PLATINUM': 2, 'GOLD': 3, 'SILVER': 4})

for level in Plan:
    print(f'{level.name:<9s} -> {level.value}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
DIAMOND   -> 1
PLATINUM  -> 2
GOLD      -> 3
SILVER    -> 4
</pre></div>

<hr/>


### Enum as Key of dictionary

<p> Enum symbols are hashable, which means it can be used as key of dictionary. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import defaultdict

Plan = Enum('Plan', {'DIAMOND': 1, 'PLATINUM': 2, 'GOLD': 3, 'SILVER': 4})

customers = defaultdict(list)
customers[Plan.DIAMOND].append('ABC Inc')
customers[Plan.GOLD].append('IQ Corp')
customers[Plan.DIAMOND].append('Citrus Ltd')

print(customers)

print('\nAccessing element using Enum Symbol :')
print('customers[Plan(1)] :', customers[Plan(1)])
print('customers[Plan.GOLD] :', customers[Plan.GOLD])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
defaultdict(<class 'list'>, {<Plan.DIAMOND: 1>: ['ABC Inc', 'Citrus Ltd'], <Plan.GOLD: 3>: ['IQ Corp']})

Accessing element using Enum Symbol :
customers[Plan(1)] : ['ABC Inc', 'Citrus Ltd']
customers[Plan.GOLD] : ['IQ Corp']
</pre></div>

<hr/>


### Extending Enum Class

<p> It is same as constructing Enum with Enum constructor but extending class provides extra flexibility.  </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum


class Plan(Enum):
    DIAMOND = 1
    PLATINUM = 2
    GOLD = 3
    SILVER = 4


print('Elements ', list(Plan))

print(f'GOLD Plan :', Plan.GOLD)

print('Value of GOLD    :', Plan.GOLD.value)
print('Name of GOLD    :', Plan.GOLD.name)

print('\nIterating Enum :')
for level in Plan:
    print(f'{level.name:<9s} -> {level.value}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Elements  [<Plan.DIAMOND: 1>, <Plan.PLATINUM: 2>, <Plan.GOLD: 3>, <Plan.SILVER: 4>]
GOLD Plan : Plan.GOLD
Value of GOLD    : 3
Name of GOLD    : GOLD

Iterating Enum :
DIAMOND   -> 1
PLATINUM  -> 2
GOLD      -> 3
SILVER    -> 4
</pre></div>

<hr/>


### Enum with duplicate values


<div id="tut-content"> 
    <ul>
        <li> Enum Symbol name must be unique, else it will raise Error. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum

Status = Enum('Status', (('NEW', 1), ('PROCESSING', 2), ('ASSIGNED', 3), ('COMPLETED', 4), ('ONHOLD', 11),
                         ('NEW', 31), ('REJECTED', 21)))

# OR


class Status(Enum):
    NEW = 1
    PROCESSING = 2
    ASSIGNED = 3
    COMPLETED = 4
    ONHOLD = 11
    NEW = 31
    REJECTED = 21


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
  File "/usr/local/lib/python3.8/enum.py", line 306, in __call__
    return cls._create_(value, names, module=module, qualname=qualname, type=type, start=start)
  File "/usr/local/lib/python3.8/enum.py", line 415, in _create_
    classdict[member_name] = member_value
  File "/usr/local/lib/python3.8/enum.py", line 95, in __setitem__
    raise TypeError('Attempted to reuse key: %r' % key)
<div id="tut-highlight">TypeError: Attempted to reuse key: 'NEW'</div></pre>
</div>
<hr/>




<div id="tut-content"> 
    <ul>
        <li> Enum can contain duplicate value , Symbol with duplicate value serves as an alias for symbol defined earlier. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Status(Enum):
    NEW = 1
    PROCESSING = 2
    ASSIGNED = 3
    COMPLETED = 4
    ONHOLD = 11
    REQINFO = 11
    REJECTED = 21


print('Status.REQINFO :', Status.REQINFO)
print('Status(11) :', Status(11))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Status.REQINFO : Status.ONHOLD
Status(11) : Status.ONHOLD
</pre></div>

<hr/>



### Ensuring unique values 

#### unique

<p> <strong> @unique </strong>  decorator ensures Enum is created with unique value for each symbol. If Enum contains duplicate values, it will raise ValueError. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum, unique


@unique
class Status(Enum):
    NEW = 1
    PROCESSING = 2
    ASSIGNED = 3
    COMPLETED = 4
    ONHOLD = 11
    REJECTED = 21


print('elements :', list(Status))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
elements : [<Status.NEW: 1>, <Status.PROCESSING: 2>, <Status.ASSIGNED: 3>, <Status.COMPLETED: 4>, <Status.ONHOLD: 11>, <Status.REJECTED: 21>]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> with @unique decorator Enum contains duplicate values will raise ValueError. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum, unique

@unique
class Status(Enum):
    NEW = 1
    PROCESSING = 2
    ASSIGNED = 3
    COMPLETED = 4
    ONHOLD = 11
    REQINFO = 11
    REJECTED = 21


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 4, in <&zwj;module&zwj;>
  File "/usr/local/lib/python3.8/enum.py", line 860, in unique
    raise ValueError('duplicate values found in %r: %s' %
ValueError: duplicate values found in <enum 'Status'>: REQINFO -> ONHOLD
</pre></div>

<hr/>


### automatic value for Enum sublcass

#### auto()

<p> Assigns automatic values to symbols of subclass of Enum beginning with 1. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum, auto


class Status(Enum):
    NEW = auto()
    PROCESSING = auto()
    ASSIGNED = auto()
    COMPLETED = auto()
    ONHOLD = auto()
    REJECTED = auto()


print('Elements :', list(Status))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Elements : [<Status.NEW: 1>, <Status.PROCESSING: 2>, <Status.ASSIGNED: 3>, <Status.COMPLETED: 4>, <Status.ONHOLD: 5>, <Status.REJECTED: 6>]
</pre></div>

<hr/>


#### custom values for auto()

<p> <strong>  _generate_next_value_(name, start, count, last_values)  : </strong> function can be override, which is called when auto() is executed for each symbol. Value returned by function assigned to symbol. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> name : </strong>  Name of symbol. </li>
        <li> <strong> start : </strong> Start value  by default it is set to 1. </li>
        <li> <strong> count : </strong> Count value which begins from 0 and gets incremented by 1 at each call.</li>
        <li> <strong> last_values : </strong> List containing values generated in previous calls </li>
    </ul> 
</div>


<div id="tut-content"> 
    <ul>
        <li> Assigning Automatic value beginning form custom start. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum, auto


class Status(Enum):

    def _generate_next_value_(name, start, count, last_values=[]):
        start = 101
        return start + count

    NEW = auto()
    PROCESSING = auto()
    ASSIGNED = auto()
    COMPLETED = auto()
    ONHOLD = auto()
    REJECTED = auto()

print(list(Status))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[<Status.NEW: 101>, <Status.PROCESSING: 102>, <Status.ASSIGNED: 103>, <Status.COMPLETED: 104>, <Status.ONHOLD: 105>, <Status.REJECTED: 106>]
</pre></div>

<hr/>


### Comparision Operators

#### ' == '

<p> Returns True if both enum symbols are same. </p>

#### ' != ' 

<p> Returns True if both enum symbols are not same. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum


class Status(Enum):
    NEW = 1
    PROCESSING = 2
    ASSIGNED = 3
    COMPLETED = 4
    ONHOLD = 11
    REQINFO = 11
    REJECTED = 21


appStatus = Status.PROCESSING
print('Application status : ', appStatus)

print('appStatus == Status.PROCESSING :', appStatus == Status.PROCESSING)
print('appStatus == Status.COMPLETED  :', appStatus == Status.COMPLETED)

print('appStatus != Status.ONHOLD     :', appStatus != Status.ONHOLD)
print('appStatus != Status.PROCESSING :', appStatus != Status.PROCESSING)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Application status :  Status.PROCESSING
appStatus == Status.PROCESSING : True
appStatus == Status.COMPLETED  : False
appStatus != Status.ONHOLD     : True
appStatus != Status.PROCESSING : False
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Comparision with non enum value will always return False. But you can extract value from enum and then compare. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Enum

Status = Enum("Status", (('NEW', 1), ('PROCESSING', 2), ('ASSIGNED', 3), ('COMPLETED', 4), ('ONHOLD', 11), ('REQINFO', 11), ('REJECTED', 21)))

appStatus = Status.PROCESSING

print("appStatus == 'PROCESSING' :", appStatus == 'PROCESSING')
print("appStatus == 2 :", appStatus == 2)

print("appStatus.name == 'PROCESSING' :", appStatus.name == 'PROCESSING')
print("appStatus.value == 2 :", appStatus.value == 2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
appStatus == 'PROCESSING' : False
appStatus == 2 : False
<div id="tut-highlight">appStatus.name</div> == 'PROCESSING' : True
<div id="tut-highlight">appStatus.value</div> == 2 : True

</pre></div>

<hr/>



### IntEnum

<p> Enum with int value and it's elements can be compared with int. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import IntEnum


class ResponseCode(IntEnum):

    OK = 200
    CREATED = 201
    ACCEPTED = 202
    BAD_REQUEST = 400
    UNAUTHORIZED = 401
    NOT_FOUND = 404
    INTERNAL_SERVER_ERROR = 500
    SERVICE_UNAVAILABLE = 503


class ApplicationCode(IntEnum):
    INTERNAL_PROCESSING_ERROR = 500


print("ResponseCode.NOT_FOUND :", ResponseCode.NOT_FOUND)

print("ResponseCode.OK == 200 :", ResponseCode.OK == 200)

ans = ResponseCode.INTERNAL_SERVER_ERROR == ApplicationCode.INTERNAL_PROCESSING_ERROR
print("Comparision of two different enum with same value :", ans)

print('ResponseCode.OK + 202 :', ResponseCode.OK + 202)
print('ResponseCode.OK - 101 :', ResponseCode.OK - 101)
print('ResponseCode.OK * 101 :', ResponseCode.OK * 101)
print('ResponseCode.OK / 101 :', ResponseCode.OK / 101)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
ResponseCode.NOT_FOUND : ResponseCode.NOT_FOUND
ResponseCode.OK == 200 : True
Comparision of two different enum with same value : True
ResponseCode.OK + 202 : 402
ResponseCode.OK - 101 : 99
ResponseCode.OK * 101 : 20200
ResponseCode.OK / 101 : 1.9801980198019802

</pre></div>

<hr/>



#### Using IntEnum as key of Dictionary

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import IntEnum
from collections import defaultdict


class ResponseCode(IntEnum):

    OK = 200
    CREATED = 201
    ACCEPTED = 202
    BAD_REQUEST = 400
    UNAUTHORIZED = 401
    NOT_FOUND = 404
    INTERNAL_SERVER_ERROR = 500
    SERVICE_UNAVAILABLE = 503


responseLog = defaultdict(list)

responseLog[ResponseCode.OK] = '192.168.1.101'
responseLog[ResponseCode.NOT_FOUND] = '198.168.1.91'
responseLog[ResponseCode.SERVICE_UNAVAILABLE] = '172.102.1.1'

print(responseLog)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
defaultdict(<class 'list'>, {<ResponseCode.OK: 200>: '192.168.1.101', <ResponseCode.NOT_FOUND: 404>: '198.168.1.91', <ResponseCode.SERVICE_UNAVAILABLE: 503>: '172.102.1.1'})
</pre></div>

<hr/>



### IntFlag

<p> IntEnum plus bitwise operators(&, |, ^, ~) </p>

operator    |           meaning
:---: | :---
     &        |        binary and
     \|        |        binary OR
     ^        |        binary XOR
     ~        |        binary 1's complement


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import IntFlag


class Perm(IntFlag):
    R = 4
    W = 2
    X = 1
    RX = 5
    RWX = 7


print('Bitwise Operators :\n')
print("Perm.R | Perm.X    :", Perm.R | Perm.X)
print("Perm.RWX & Perm.RX :", Perm.RWX & Perm.RX)
print("Perm.RWX ^ Perm.RX :", Perm.RWX ^ Perm.RX)
print("~Perm.RX :", ~Perm.RX)

print('\nBitwise Operators with int :\n')
print("4 | Perm.X  :", 4 | Perm.X)
print("4 & Perm.RX :", 4 & Perm.RX)
print("7 ^ Perm.RX :", 7 ^ Perm.RX)

print('\nIf no flags are set, it is evaluated as 0 :\n')
print('Perm.W & Perm.X', Perm.W & Perm.X)

print('\nAddition and Subtraction with Values\n')
print("Perm.R + Perm.W   :", Perm.R + Perm.W)
print("Perm.RWX - Perm.W :", Perm.RWX - Perm.W)

print('\noperations with int\n')
print("Perm.R + 2 :", Perm.R + 2)
print("Perm.RWX - 2 :", Perm.RWX - 2)
print("Perm.RWX * 2 :", Perm.RWX * 2)
print("Perm.RWX / 2 :", Perm.RWX / 2)

print('\nMembership Operators :\n')
print('Perm.RX in Perm.RWX :', Perm.RX in Perm.RWX)
print('Perm.RX in Perm.W   :', Perm.RX in Perm.W)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Bitwise Operators :

Perm.R | Perm.X    : Perm.RX
Perm.RWX & Perm.RX : Perm.RX
Perm.RWX ^ Perm.RX : Perm.W
~Perm.RX : Perm.W

Bitwise Operators with int :

4 | Perm.X  : Perm.RX
4 & Perm.RX : Perm.R
7 ^ Perm.RX : Perm.W

If no flags are set, it is evaluated as 0 :

Perm.W & Perm.X Perm.0

Addition and Subtraction with Values

Perm.R + Perm.W   : 6
Perm.RWX - Perm.W : 5

operations with int

Perm.R + 2 : 6
Perm.RWX - 2 : 5
Perm.RWX * 2 : 14
Perm.RWX / 2 : 3.5

Membership Operators :

Perm.RX in Perm.RWX : True
Perm.RX in Perm.W   : False

</pre></div>

<hr/>


### Flag

<p> Supports bitwise operators, but restrict operation with other values (like int) or other enums. It's recommended to use auto() as value.  </p>

<div id="tut-content"> 
    <ul>
        <li> With auto() by default it assigns value in power of 2 (2^0 = 1, 2^1 = 2, 2^2 = 4). </li>
    </ul> 
</div>

{% include callout.html content="**Note** : Use of Enum and Flag is recommended. Use IntEnum and IntFlag only in case where Enum and Flag can not be used as they breaks semantics of enum." type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Flag, auto


class Perm(Flag):
    R = auto()
    W = auto()
    X = auto()
    RX = R | X
    RWX = R | W | X


for permission in Perm:
    print(f'Permission : {permission.name:<3}  Value : {permission.value}')

print('\n\nBitwise Operators :\n')
print("Perm.R | Perm.X    :", Perm.R | Perm.X)
print("Perm.RWX & Perm.RX :", Perm.RWX & Perm.RX)
print("Perm.RWX ^ Perm.RX :", Perm.RWX ^ Perm.RX)
print("~Perm.RX :", ~Perm.RX)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Permission : R    Value : 1
Permission : W    Value : 2
Permission : X    Value : 4
Permission : RX   Value : 5
Permission : RWX  Value : 7


Bitwise Operators :

Perm.R | Perm.X    : Perm.RX
Perm.RWX & Perm.RX : Perm.RX
Perm.RWX ^ Perm.RX : Perm.W
~Perm.RX : Perm.W

</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Performing operation with int will raise TypeError. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from enum import Flag, auto


class Perm(Flag):
    R = auto()
    W = auto()
    X = auto()
    RX = R | X
    RWX = R | W | X


print("Perm.R + 2 :", Perm.R + 2)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 12, in <&zwj;module&zwj;>
TypeError: unsupported operand type(s) for +: 'Perm' and 'int'</pre></div>

<hr/>

{% include links.html %}
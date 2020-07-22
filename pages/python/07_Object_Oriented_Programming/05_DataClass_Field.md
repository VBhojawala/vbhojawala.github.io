---
title: Python Dataclasses
layout: tutorial
last_modified_at: 2020-07-22
tags: [python, Object_Oriented_Programming, DataClasses, dataclass, __init__(), __repr__(),__eq__(), order, unsafe_hash, __hash__(), __lt__(), __le__(), __gt__(), __ge__(), frozen, immutable_object, Field, field(), default_factory, metadata, fields(), asdict(), astuple(), make_dataclass(), is_dataclass(), __post_init__(), initVar]
sidebar: python_sidebar
permalink: python_dataclasses.html
folder: python
prev_section:
prev_section_title: 
prev:  python_dunder_magic_special_methods.html
prev_title: Dunder Methods
next: 
next_title: 
next_section: 
next_section_title: 
summary: Python Dataclasses module, @dataclass decorator, Field, field(), __post_init__(), initVar and functions of dataclasses module fields(), asdict(), astuple(), make_dataclass(), is_dataclass().
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AATFRMx-NOM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> <hr/>

## dataclasses

<p> dataclasses module provides decorator and functions for automatically generating dunder methods like __init__(), __repr__(), __eq__(). </p>


### @dataclass(*, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False)
<p> Automatically generates init, repr, eq, order, hash dunder methods. </p>
<p> Order of attributes in dunder methods is the same in which it is defined in the class. It returns same class on which decorator is applied, no new class is created.</p>

<div id="tut-content"> 
    <ul>
        <li> <strong> init : </strong> Default True __init__() method is generated. It is ignored if class has defined the method.   </li>
        <li> <strong> repr : </strong> Default True __repr__() method is generated. It is ignored if class has defined the method. </li>
        <li> <strong> eq : </strong> Default True __eq__() method is generated. It compares the value of attributes of instances with each other. It is ignored if class has defined the method.</li>
        <li> <strong> order : </strong> Default False does not do anything. If defined as True it generates __lt__(), __le__(), __gt__(), and __ge__(). If order is True and eq is False raises ValueError.</li>
        <li> <strong> frozen : </strong> Default False. If set to True attribute value of class can not be changed. If __setattr__() and __delattr__() is defined it raises TypeError. </li>
        <li> <strong> unsafe_hash : </strong> Default False, If eq and frozen are True it generates __hash__() methods. If eq is True and forzen is False __hash__() is set to None which makes it unshashable because object is mutable. If eq is False __hash__() is left untouched. <br/> When set True generate __hash__() method even objects are mutable. Manually defining __hash__() with unsafe_hash set to True will raise TypeError. </li>
    </ul> 
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong>Following three decorator have same meaning</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass

@dataclass
# Same As
@dataclass()
# Same As
@dataclass(init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False)


{% endhighlight %}
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong>Defining class with @dataclass decorator</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass


@dataclass
class Point:
    x: int
    y: int = 0  # with default value


p1 = Point(25, 15)
p2 = Point(13, 14)
p3 = Point(25, 15)

# Introspecting class and instance
print('Point :', Point.__dict__.keys())
print('p1 :', p1.__dict__.keys())

# __repr__()
print('p1 :', p1)
print('p2 :', p2)
print('p3 :', p3)

# __eq__()
print('p1 == p2 :', p1 == p2)
print('p1 == p3 :', p1 == p3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Point : dict_keys(['__module__', '__annotations__', 'y', '__dict__', '__weakref__', '__doc__', '__dataclass_params__', '__dataclass_fields__', '__init__', '__repr__', '__eq__', '__hash__'])
p1 : dict_keys(['x', 'y'])
p1 : Point(x=25, y=15)
p2 : Point(x=13, y=14)
p3 : Point(x=25, y=15)
p1 == p2 : False
p1 == p3 : True
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Auto generating ordering (__lt__(), __gt__(), __le__(), __ge__()). prerequisite : eq must be True</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass


@dataclass(order=True)
class Point:
    x: int
    y: int


p1 = Point(11, 15)
p2 = Point(12, 7)
p3 = Point(11, 15)
p4 = Point(14, 11)

points = [p1, p2, p3, p4]

print(sorted(points))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[Point(x=11, y=15), Point(x=11, y=15), Point(x=12, y=7), Point(x=14, y=11)]
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Creating immutable objects </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass


@dataclass(frozen=True)
class Point:
    x: int
    y: int


p1 = Point(5, 8)
print('p1 :', p1)

# checking for hashing
print('hash(p1) :', hash(p1))

p1.x = 15   # This will raise dataclasses.FrozenInstanceError

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1 : Point(x=5, y=8)
hash(p1) : 6007657809554778599
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 13, in <&zwj;module>
  File "<&zwj;string>", line 4, in __setattr__
dataclasses.FrozenInstanceError: cannot assign to field 'x'</pre>
</div>

<hr/>


### Field 

<p> field is a class level variable with (': type') type annotation. </p>
<p> When creating dataclass it searches field(s) in the class which gets included in to dunder methods based on configuration. </p>


#### field(*, default=MISSING, default_factory=MISSING, repr=True, hash=None, init=True, compare=True, metadata=None)

<p> Provides configuration for single attribute. </p>
<p> MISSING value is a sentinel object used to detect if the default and default_factory parameters are provided.</p>

<div id="tut-content"> 
    <ul>
        <li> <strong> default : </strong> If provided sets the default value for field.</li>
        <li> <strong> default_factory : </strong> If given it must be zero argument callable which can be used to provide mutable object as default value. </li>
        <li> <strong> init : </strong> Default True field is included as a parameter to __init__() method.</li>
        <li> <strong> compare : </strong> Default True includes field to compare in __eq__() method.</li>
        <li> <strong> hash : </strong> Default None copies value from compare. If given True field is included in generating hash(). It is set to False with compare = True when field contains value which is expensive to calculate hash.</li>
        <li> <strong> metadata : </strong> It can be mapping or None. If mapping is given it is exposed on field object by making mapping read-only.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass, field
from typing import List

@dataclass
class Class:
    students: List[str] = field(default_factory=list)


class5th = Class()
class5th.students += ['Karol', 'Jimmy', 'Anny']
print('class5th.students :', class5th.students)

class6th = Class(['Billy', 'Jeromy', 'Martha'])
class6th.students += ['Andy', 'Floyd']
print('class6th.students :', class6th.students)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
class5th.students : ['Karol', 'Jimmy', 'Anny']
class6th.students : ['Billy', 'Jeromy', 'Martha', 'Andy', 'Floyd']
</pre></div>


{% include callout.html content="**Note** : For mutable data type if default_factory is not used and assigned direct instance like students: List[str] = [] is not allowed anymore. " type="primary" %} 


<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Excluding fields from __eq__() </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass, field

@dataclass
class Point:
    x: int
    y: int
    color: str = field(compare=False)


p1 = Point(12, 18, 'Blue')
p2 = Point(12, 18, 'Black')

print('p1 :', p1)
print('p2 :', p2)
print('Is p1 == p2 ? -> ', p1 == p2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1 : Point(x=12, y=18, color='Blue')
p2 : Point(x=12, y=18, color='Black')
Is p1 == p2 ? ->  True
</pre></div>

{% include callout.html content="**Note** :Same can be done for __repr__(), __init__() and __hash__() by setting repr, init and hash parameters." type="primary" %} 

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> default_factory with init set to False  </strong> </li>
    </ul> 
</div>

<p> If default factory is defined and field is excluded from the __init__(), when object is instantiated it will be initialized with factory function. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass, field
from typing import List


@dataclass
class Class:
    students: List[str] = field(default_factory=list, init=False)


class7th = Class()
class7th.students +=['Billy', 'Jeromy', 'Martha']

print('class7th.students :', class7th.students)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
class7th.students : ['Billy', 'Jeromy', 'Martha']
</pre></div>

<hr/>


### methods


#### fields(class_or_instance)
<p> Returns tuple of field objects which are defined for given class or instance. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass, field, fields

@dataclass
class Point:
    x: int
    y: int
    color: str = field(compare=False)


for row in fields(Point):
    print(f'\n{row}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Field(name='x',type=<class 'int'>,default=<dataclasses._MISSING_TYPE object at 0x7fb1386a3a30>,default_factory=<dataclasses._MISSING_TYPE object at 0x7fb1386a3a30>,init=True,repr=True,hash=None,compare=True,metadata=mappingproxy({}),_field_type=_FIELD)

Field(name='y',type=<class 'int'>,default=<dataclasses._MISSING_TYPE object at 0x7fb1386a3a30>,default_factory=<dataclasses._MISSING_TYPE object at 0x7fb1386a3a30>,init=True,repr=True,hash=None,compare=True,metadata=mappingproxy({}),_field_type=_FIELD)

Field(name='color',type=<class 'str'>,default=<dataclasses._MISSING_TYPE object at 0x7fb1386a3a30>,default_factory=<dataclasses._MISSING_TYPE object at 0x7fb1386a3a30>,init=True,repr=True,hash=None,compare=False,metadata=mappingproxy({}),_field_type=_FIELD)
</pre></div>

<hr/>


#### asdict(instance, *, dict_factory=dict)
<p> Returns dictionary created from instance's (field: value) as (key: value). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass, field, asdict

@dataclass
class Point:
    x: int
    y: int
    color: str = field(compare=False)


p1 = Point(12, 18, 'Blue')
print(asdict(p1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{'x': 12, 'y': 18, 'color': 'Blue'}
</pre></div>

<hr/>


#### astuple(instance, *, tuple_factory=tuple)
<p> Returns Tuple of values of fields from given instance. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass, field, astuple
from typing import List

@dataclass
class Point:
    x: int
    y: int
    color: str = field(compare=False)


@dataclass
class Class:
    students: List[str] = field(default_factory=list)


p1 = Point(12, 18, 'Blue')
class6th = Class(['Billy', 'Jeromy', 'Martha'])

print('astuple(p1) :', astuple(p1))
print('astuple(class6th) :', astuple(class6th))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
astuple(p1) : (12, 18, 'Blue')
astuple(class6th) : (['Billy', 'Jeromy', 'Martha'],)
</pre></div>

<hr/>


#### make_dataclass(cls_name, fields, *, bases=(), namespace=None, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False)

<p> Creates new dataclass with given arguments. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> cls_name : </strong> name of the target class given as str </li>
        <li> <strong> fields : </strong> iterable contains element in (name, type) or (name, type, field) format. If just name is given field type is set to typing.Any.</li>
        <li> <strong> bases: </strong> defines parent classes. </li>
        <li> <strong> namespace : </strong> contains mapping of {method_name : method} of the class.</li>
    </ul> 
    {% include callout.html content=" All other fields are same as dataclass decorator. " type="primary" %} 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import make_dataclass

Point = make_dataclass('Point', (('x', int), ('y', int), ('color', str)),
                       namespace={'draw': lambda self: print('Drawing point on canvas...')})

p1 = Point(5, 9, 'Black')
p2 = Point(7, 3, 'Blue')

print('p1 :', p1)
print('p2 :', p2)

p1.draw()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1 : Point(x=5, y=9, color='Black')
p2 : Point(x=7, y=3, color='Blue')
Drawing point on canvas...
</pre></div>

<hr/>



#### is_dataclass(class_or_instance)
<p> Returns True if given class or an object whose class is a dataclass. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass, field, is_dataclass

@dataclass
class Point:
    x: int
    y: int
    color: str = field(compare=False)


p1 = Point(12, 18, 'Blue')

print('is_dataclass(Point) :', is_dataclass(Point))
print('is_dataclass(p1)    :', is_dataclass(p1))
print('is_dataclass(str)   :', is_dataclass(str))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
is_dataclass(Point) : True
is_dataclass(p1)    : True
is_dataclass(str)   : False
</pre></div>

<hr/>


#### \__post_init__(self)
<p> Auto generated __init__() method of data class calls __post_init__() method if it is defined in class. </p>
<p> Post-init processing  can be used deriving value based on values initialized in __init__() method.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass
from datetime import date

@dataclass
class Person:
    NATIONALITY = 'xyz'
    fname: str
    lname: str

    def __post_init__(self):
        self.fullname = self.fname + ' ' +self.lname


p1 = Person('Joe', 'Freeman')
print('p1.fullname :', p1.fullname)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1.fullname : Joe Freeman
</pre></div>

<hr/>


#### InitVar

<p> Defines a pseudo-field called as init-only field which is used to initialize other parameters. </p>

<p> Init-only field are defined as optional parameter of __init__() method and passed to __post_init__().It is not returned by fields() method.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass, InitVar, fields

@dataclass
class Point:

    x: float
    y: float
    color: str = None
    config: InitVar[dict] = None

    def __post_init__(self, config:dict):
        if self.color is None:
            print(f'Fetching color from {config} .....')
            self.color = config.get((self.x, self.y), 'White')


config = {(12, 18): 'Blue'}

p1 = Point(15, 25, 'Red')
p2 = Point(12, 18, config=config)

print('p1 :', p1)
print('p2 :', p2)


print('fields(Point) :')
for field in fields(Point):
    print(f'\n{field}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Fetching color from {(12, 18): 'Blue'} .....
p1 : Point(x=15, y=25, color='Red')
p2 : Point(x=12, y=18, color='Blue')
fields(Point) :

Field(name='x',type=<class 'float'>,default=<dataclasses._MISSING_TYPE object at 0x7f37282fa9d0>,default_factory=<dataclasses._MISSING_TYPE object at 0x7f37282fa9d0>,init=True,repr=True,hash=None,compare=True,metadata=mappingproxy({}),_field_type=_FIELD)

Field(name='y',type=<class 'float'>,default=<dataclasses._MISSING_TYPE object at 0x7f37282fa9d0>,default_factory=<dataclasses._MISSING_TYPE object at 0x7f37282fa9d0>,init=True,repr=True,hash=None,compare=True,metadata=mappingproxy({}),_field_type=_FIELD)

Field(name='color',type=<class 'str'>,default=None,default_factory=<dataclasses._MISSING_TYPE object at 0x7f37282fa9d0>,init=True,repr=True,hash=None,compare=True,metadata=mappingproxy({}),_field_type=_FIELD)
</pre></div>

<hr/>

{% include links.html %}
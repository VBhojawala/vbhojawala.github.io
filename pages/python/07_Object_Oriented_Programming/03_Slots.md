---
title: Python Slots
layout: tutorial
last_modified_at: 2020-07-16
tags: [python, Object_Oriented_Programming, __slots__, __dict__, __init__(), Slots_memory_usage, Slots_with_Inheritance]
sidebar: python_sidebar
permalink: python_slots.html
folder: python
prev_section:
prev_section_title: 
prev:  python_intercepting_attribute_access.html
prev_title: Intercepting Attribute Access
next: python_dunder_magic_special_methods.html
next_title: Dunder Methods
next_section: 
next_section_title: 
summary: Python Slots, defining __slots__, slots memory usage,  __slots__ vs __dict__, slots with inheritance and multiple inheritance. 
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qoqnqySR0JU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> <hr/>

## Slots

<p> Contains iterable of instance data attributes which are only allowed to be accessed(set/get/delete). </p>

<div id="tut-content"> 
    <ul>
        <li> Instance methods, class methods, static methods, class variable are not affected by slots. </li>
        <li> When slots are used __dict__ and __weakref__ is not created for objects. __dict__ and __weakref__ can be enabled by explicitly specifying in iterable passed to __slots__.</li>
        <li> __slots__ uses less memory to store attributes and provides faster attribute lookup compared to __dict__. </li>
    </ul> 
</div>


### How \__slots__ uses less memory?

<div id="tut-content"> 
    <ul>
        <li> When using __dict__ python allocates new namespace dictionary to each instance of class, so that attribute can be assigned per instance base which can be expensive in terms of memory usage. </li>
        <li> while using slots python shares single __slots__ attribute with  all instances of class and when storing instance data attribute value fixed amount of memory is allocated as number of instance data attribute to be stored are fixed. </li>
    </ul> 
</div>

<hr/>


### Inspecting \__dict__ of Class and Object

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y


p1 = Point(12, 5)
p2 = Point(25, 12)

print(f'Point.__dict__ : {Point.__dict__}  \nid(Point.__dict__) : {id(Point.__dict__)}')
print(f'\np1.__dict__ : {p1.__dict__} \nid(p1.__dict__) : {id(p1.__dict__)}')
print(f'\np2.__dict__ : {p2.__dict__} \nid(p2.__dict__) : {id(p2.__dict__)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Point.__dict__ : {'__module__': '__main__', '__init__': <function Point.__init__ at 0x7fbe9ee7b160>, '__dict__': <attribute '__dict__' of 'Point' objects>, '__weakref__': <attribute '__weakref__' of 'Point' objects>, '__doc__': None}  
<div id='tut-highlight'>id(Point.__dict__) : 140456686703808</div>

p1.__dict__ : {'x': 12, 'y': 5} 
<div id='tut-highlight'>id(p1.__dict__) : 140456686477568</div>

p2.__dict__ : {'x': 25, 'y': 12} 
<div id='tut-highlight'>id(p2.__dict__) : 140456686433088</div>
</pre></div>

<hr/>


### Defining slots and inspecting \__slots__ of Class and Object

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    __slots__ = ('x', 'y')

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y


p1 = Point(12, 5)
p2 = Point(25, 12)


# Inspecting __slot__ attribute of Object and Class
print('Point.__slots__', Point.__slots__, '\nid(Point.__slots__) :', id(Point.__slots__))
print('p1.__slots__ :', p1.__slots__, '\nid(p1.__slots__) :', id(p1.__slots__))
print('p2.__slots__ :', p2.__slots__, '\nid(p2.__slots__) :', id(p2.__slots__))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Point.__slots__ ('x', 'y') 
<div id='tut-highlight'>id(Point.__slots__) : 140456686481280</div>
p1.__slots__ : ('x', 'y') 
<div id='tut-highlight'>id(p1.__slots__) : 140456686481280</div>
p2.__slots__ : ('x', 'y') 
<div id='tut-highlight'>id(p2.__slots__) : 140456686481280</div>
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> when __slots__ is defined , Objects of class does not have the __dict__ attribute </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Point.__dict__ :', Point.__dict__)
print('p1.__dict__    :', p1.__dict__)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Point.__dict__ : {'__module__': '__main__', '__slots__': ('x', 'y'), '__init__': <function Point.__init__ at 0x7fbe9ee7b1f0>, 'x': <member 'x' of 'Point' objects>, 'y': <member 'y' of 'Point' objects>, '__doc__': None}
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 2, in <&zwj;module>
AttributeError: 'Point' object has no attribute '__dict__'</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Accessing data attributes defined in __slots__ </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('p1.x :', p1.x)
print('p1.y :', p1.y)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1.x : 12
p1.y : 5
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Setting instance data attribute not defined in __slots__ </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

p1.color = 'Blue'

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 1, in <&zwj;module>
AttributeError: 'Point' object has no attribute 'color'</pre>
</div>

<hr/>


### \__slots__ and \__int__() method 
<p> If an instance data attribute name is not defined in __slots__, it can not be initialized using __init__ method. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    __slots__ = ('x', 'y')

    def __init__(self, x, y, color) -> None:
        self.x = x
        self.y = y
        self.color = color


p1 = Point(12, 5, 'Blue')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 11, in <&zwj;module>
  File "<&zwj;input>", line 8, in __init__
AttributeError: 'Point' object has no attribute 'color'</pre></div>

<hr/>


### Slots with Instance method, Class Method, static Method and Class Variable
<p> Only Instance data attribute are affected by __slots__, Instance methods, class methods, static methods, class variable are not affected by slots.</p>
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    __slots__ = ('x', 'y')
    POINT_COUNT = 1

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def draw(self):
        print(f'Drawing Point({self.x}, {self.y})')

    @classmethod
    def increment_point_count(cls):
        print('Incrementing Point Count ...')
        cls.POINT_COUNT += 1

    @staticmethod
    def description():
        print('Invoking Static Method')
        return 'Point Description .....'


p1 = Point(12, 5)

print('Accessing Instance Method :')
p1.draw()

print('\nAccessing Class Variable :')
print('Point.POINT_COUNT :', Point.POINT_COUNT)

print('\nAccessing Class Method :')
Point.increment_point_count()
p1.increment_point_count()
print('Point.POINT_COUNT :', Point.POINT_COUNT)

print('\nAccessing Static Method :')
Point.description()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Accessing Instance Method :
Drawing Point(12, 5)

Accessing Class Variable :
Point.POINT_COUNT : 1

Accessing Class Method :
Incrementing Point Count ...
Incrementing Point Count ...
Point.POINT_COUNT : 3

Accessing Static Method :
Invoking Static Method
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Introspecting Class and Object with Slots </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Point.__dict__ :', Point.__dict__)
print('p1.__dict__    :', getattr(p1, '__dict__', 'Attribute Not Found'))
print('p1.__slots__   :', getattr(p1, '__slots__', 'Attribute Not Found'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Point.__dict__ : {'__module__': '__main__', '__slots__': ('x', 'y'), 'POINT_COUNT': 3, '__init__': <function Point.__init__ at 0x7fbe9ee7b280>, 'draw': <function Point.draw at 0x7fbe9ee7b700>, 'increment_point_count': <classmethod object at 0x7fbe9ee6e880>, 'description': <staticmethod object at 0x7fbe9ee6e130>, 'x': <member 'x' of 'Point' objects>, 'y': <member 'y' of 'Point' objects>, '__doc__': None}
p1.__dict__    : Attribute Not Found
p1.__slots__   : ('x', 'y')
</pre></div>

<hr/>


### Using Different iterables to initialize Slots
<p> Any iterable can be used to initialize __slots__ attribute except string.</p>

#### Assigning tuple to \__slots__
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    __slots__ = ('x', 'y')  # tuple

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y


p1 = Point(12, 5)
p2 = Point(25, 12)

print(f'p1.x : {p1.x} , p1.y : {p1.y}')
print(f'p2.x : {p2.x} , p2.y : {p2.y}')

print(f'Point.__slots__ : {Point.__slots__}   id(Point.__slots__): {id(Point.__slots__)}')
print(f'p1.__slots__ : {p1.__slots__}   id(p1.__slots__): {id(p1.__slots__)}')
print(f'p2.__slots__ : {p2.__slots__}   id(p2.__slots__): {id(p2.__slots__)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1.x : 12 , p1.y : 5
p2.x : 25 , p2.y : 12
Point.__slots__ : ('x', 'y')   id(Point.__slots__): 140456686507008
p1.__slots__ : ('x', 'y')   id(p1.__slots__): 140456686507008
p2.__slots__ : ('x', 'y')   id(p2.__slots__): 140456686507008
</pre></div>

<hr/>


#### Assigning list to \__slots__
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    __slots__ = ['x', 'y']  # List

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y


p1 = Point(12, 5)
p2 = Point(25, 12)

print(f'p1.x : {p1.x} , p1.y : {p1.y}')
print(f'p2.x : {p2.x} , p2.y : {p2.y}')

print(f'Point.__slots__ : {Point.__slots__}   id(Point.__slots__): {id(Point.__slots__)}')
print(f'p1.__slots__ : {p1.__slots__}   id(p1.__slots__): {id(p1.__slots__)}')
print(f'p2.__slots__ : {p2.__slots__}   id(p2.__slots__): {id(p2.__slots__)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1.x : 12 , p1.y : 5
p2.x : 25 , p2.y : 12
Point.__slots__ : ['x', 'y']   id(Point.__slots__): 140456686472064
p1.__slots__ : ['x', 'y']   id(p1.__slots__): 140456686472064
p2.__slots__ : ['x', 'y']   id(p2.__slots__): 140456686472064
</pre></div>

<hr/>


#### Assigning set to \__slots__
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    __slots__ = {'x', 'y'}  # Set

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y


p1 = Point(12, 5)
p2 = Point(25, 12)

print(f'p1.x : {p1.x} , p1.y : {p1.y}')
print(f'p2.x : {p2.x} , p2.y : {p2.y}')

print(f'Point.__slots__ : {Point.__slots__}   id(Point.__slots__): {id(Point.__slots__)}')
print(f'p1.__slots__ : {p1.__slots__}   id(p1.__slots__): {id(p1.__slots__)}')
print(f'p2.__slots__ : {p2.__slots__}   id(p2.__slots__): {id(p2.__slots__)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1.x : 12 , p1.y : 5
p2.x : 25 , p2.y : 12
Point.__slots__ : {'y', 'x'}   id(Point.__slots__): 140456686605472
p1.__slots__ : {'y', 'x'}   id(p1.__slots__): 140456686605472
p2.__slots__ : {'y', 'x'}   id(p2.__slots__): 140456686605472
</pre></div>

<hr/>


#### Assigning dict to \__slots__
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    __slots__ = {'x': 25, 'y': 50}  # dictionary

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y


p1 = Point(12, 5)
p2 = Point(25, 12)

print(f'p1.x : {p1.x} , p1.y : {p1.y}')
print(f'p2.x : {p2.x} , p2.y : {p2.y}')

print(f'Point.__slots__ : {Point.__slots__}   id(Point.__slots__): {id(Point.__slots__)}')
print(f'p1.__slots__ : {p1.__slots__}   id(p1.__slots__): {id(p1.__slots__)}')
print(f'p2.__slots__ : {p2.__slots__}   id(p2.__slots__): {id(p2.__slots__)}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1.x : 12 , p1.y : 5
p2.x : 25 , p2.y : 12
Point.__slots__ : {'x': 25, 'y': 50}   id(Point.__slots__): 140456686494464
p1.__slots__ : {'x': 25, 'y': 50}   id(p1.__slots__): 140456686494464
p2.__slots__ : {'x': 25, 'y': 50}   id(p2.__slots__): 140456686494464
</pre></div>

<hr/>


### Changing __slots__ value after defining class

<p> Changing __slots__ value after defining class does not affect the Class definition, when class
object is created it creates class level descriptors for each instance data attribute which are present in iterable at the time of class definition creation. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    __slots__ = ('x', 'y')

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y


Point.__slots__ = ('x', 'y', 'color')

p1 = Point(12, 5)
print('p1.x :', p1.x)

print('Point.__slots__ :', Point.__slots__)
print('Point.__dict__ :', Point.__dict__)
print('p1.__slots__ :', p1.__slots__)

p1.color = 'Blue'


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1.x : 12
Point.__slots__ : ('x', 'y', 'color')
Point.__dict__ : {'__module__': '__main__', '__slots__': ('x', 'y', 'color'), '__init__': <function Point.__init__ at 0x7fb1914c8d30>, 'x': <member 'x' of 'Point' objects>, 'y': <member 'y' of 'Point' objects>, '__doc__': None}
p1.__slots__ : ('x', 'y', 'color')
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 18, in <&zwj;module>
AttributeError: 'Point' object has no attribute 'color'</pre></div>

<hr/>



### Slots attributes and Class attributes
<p> Python uses Descriptors to define each attribute in slots iterable. So attribute name defined in slots can not be used as class variable name. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point2D:

    __slots__ = ('x', 'y')
    x = 10


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 1, in <&zwj;module>
ValueError: 'x' in __slots__ conflicts with class variable</pre></div>

<hr/>


### Using \__dict__ with \__slots__

<p> '__dict__' can be added as an attribute to slots in order to enable attribute namespace dictionary. </p>

{% include callout.html content="**Note** : Using __dict__ with slots requires extra memory compared to using only __dict__ and lookup time may increase as now python needs to search for attribute in slots and dict." type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point:

    __slots__ = ('x', 'y', '__dict__')

    def __init__(self, x, y, z) -> None:
        self.x = x
        self.y = y
        self.z = z  # Initializing non slot attribute


p1 = Point(8, 6, 8)
p2 = Point(4, 9, 8)

# Inspecting __slots__ and __dict__ of objects
print(f'p1.__slots__ : {p1.__slots__}   id(p1.__slots__): {id(p1.__slots__)}')
print(f'p2.__slots__ : {p2.__slots__}   id(p2.__slots__): {id(p2.__slots__)}')

print(f'p1.__dict__ : {p1.__dict__}   id(p1.__dict__): {id(p1.__dict__)}')
print(f'p2.__dict__ : {p2.__dict__}   id(p2.__dict__): {id(p2.__dict__)}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p1.__slots__ : ('x', 'y', '__dict__')   id(p1.__slots__): 140400623699584
p2.__slots__ : ('x', 'y', '__dict__')   id(p2.__slots__): 140400623699584
p1.__dict__ : {'z': 8}   id(p1.__dict__): 140400623699136
p2.__dict__ : {'z': 8}   id(p2.__dict__): 140400642251840
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Getting and Assigning non slot attributes </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# getting non slot attribute
print('p2.z :', p2.z)

# assigning dynamic attribute
p2.color = 'Red'

# inspecting the instance attributes
print('p2.__slots__ :', p2.__slots__)
print('p2.__dict__  :', p2.__dict__)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p2.z : 8
p2.__slots__ : ('x', 'y', '__dict__')
p2.__dict__  : {'z': 8, 'color': 'Red'}
</pre></div>

<hr/>


### Slots and Inheritance
<div id="tut-content"> 
    <ul>
        <li> Each class in single inheritance hierarchy can have their own slots and they are combined in single set from inheritance tree to check for validation when accessing attribute. </li>
        <li> When inheriting class with __slots__,  subclass __slots__ is not required to include attributes defined in superclass. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point2D:

    __slots__ = ('x', 'y')

    def __init__(self, x, y):
        self.x = x
        self.y = y


class Point3D(Point2D):

    __slots__ = ('z',)

    def __init__(self, x, y, z):
        super().__init__(x, y)
        self.z = z


p3 = Point3D(12, 11, 10)

print('p3.x :', p3.x)
print('p3.y :', p3.y)
print('p3.z :', p3.z)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p3.x : 12
p3.y : 11
p3.z : 10
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Redefining the __slots__ attribute which are present in superclass will waste memory space. </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point2D:

    __slots__ = ('x', 'y')

    def __init__(self, x, y):
        self.x = x
        self.y = y


class Point3D(Point2D):

    __slots__ = ('x', 'z')

    def __init__(self, x, y, z):
        super().__init__(x, y)
        self.z = z


print('Point2D.__dict__ :', Point2D.__dict__)
print('Point3D.__dict__ :', Point3D.__dict__)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Point2D.__dict__ : {'__module__': '__main__', '__slots__': ('x', 'y'), '__init__': <function Point2D.__init__ at 0x7fb1914d81f0>,<div id='tut-highlight'> 'x': <member 'x' of 'Point2D' objects></div>, 'y': <member 'y' of 'Point2D' objects>, '__doc__': None}
Point3D.__dict__ : {'__module__': '__main__', '__slots__': ('x', 'z'), '__init__': <function Point3D.__init__ at 0x7fb1914d80d0>,<div id='tut-highlight'> 'x': <member 'x' of 'Point3D' objects></div>, 'z': <member 'z' of 'Point3D' objects>, '__doc__': None}
</pre></div>

<hr/>



### Slots and Multiple Inheritance
<p> When using multiple inheritance only one class is allowed to have __slots__. </p>
<p> Multiple inheritance with more than one parent defining slots is not supported, and will result in TypeError: multiple bases have instance lay-out conflict. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class LandBased:
    __slots__ = ('wheels', )

    def __init__(self):
       super().__init__()


class WaterBased:
    __slots__ = ('shaft', )

    def __init__(self):
       super().__init__()


class AmphibiousVehicle(LandBased, WaterBased):
    def __init__(self):
       super().__init__()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 15, in <&zwj;module>
TypeError: multiple bases have instance lay-out conflict</pre></div>

<hr/>



### Subclass without \__slots__ whose superclass is having \__slots__

<p> When Subclass does not defines __slots__ with superclass having __slots, superclass's __slots__ becomes class attribute to subclass and by default __dict__ and __weakref__ is enable for subclass.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point2D:

    __slots__ = ('x', 'y')

    def __init__(self, x, y):
        self.x = x
        self.y = y


class Point3D(Point2D):

    def __init__(self, x, y, z):
        super().__init__(x, y)
        self.z = z


p3 = Point3D(12, 11, 10)

# inspecting the instance
print('p3.__slots__ :', p3.__slots__)
print('p3.__dict__  :', p3.__dict__)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p3.__slots__ : ('x', 'y')
p3.__dict__  : {'z': 10}
</pre></div>

<hr/>

### Subclass with \__slots__ whose superclass does not have \__slots__ 

<p> When Subclass defines __slots__ and it's super class does not have __slots__ defined, __dict__ attribute of super class is inherited and use of __slots__ becomes meaningless.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Point2D:

    def __init__(self, x, y):
        self.x = x
        self.y = y


class Point3D(Point2D):

    __slots__ = ('x', 'y', 'z')

    def __init__(self, x, y, z):
        super().__init__(x, y)
        self.z = z


p3 = Point3D(12, 11, 10)

# inspecting the instance
print('p3.__slots__ :', p3.__slots__)

print('\nAdding new attribute "color" to instance')
p3.color = 'Blue'
print('p3.__dict__  :', p3.__dict__)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
p3.__slots__ : ('x', 'y', 'z')

Adding new attribute "color" to instance
p3.__dict__  : {'color': 'Blue'}
</pre></div>

<hr/>

{% include links.html %}
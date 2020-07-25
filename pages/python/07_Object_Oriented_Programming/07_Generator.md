---
title: Python Generator
layout: tutorial
last_modified_at: 2020-07-25
tags: [python, Object_Oriented_Programming, Generator, Generator_function, yield, Generator_iterator_object, iter(), next(), __iter__(), __next__(), generator_expression, list_comprehension,generator_in_class, generator_expression_in_class, unpacking_generator_elements, collecting_generator_elements, infinite_generator, send(), close(), throw(), StopIteration, return, yield_from, chaining_generators, GeneratorExit]
sidebar: python_sidebar
permalink: python_generator.html
folder: python
prev_section:
prev_section_title: 
prev:  python_iterator.html
prev_title: Iterator
next: 
next_title: 
next_section: 
next_section_title: 
summary: Python Generator function, yield, yield from, generator iterator object, generator expression, defining generator in user defined class, infinite generator, chaining generators, generator object methods send(), throw(), close().
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/S3jmo10GN0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> <hr/>

## Generator

<div id="tut-content"> 
    <ul>
        <li> Generators is a function when called returns generator iterator object that behaves like an iterator with state preserving using yield.</li>
        <li> Generator is a special function that simplifies iterator implementation for user defined class. </li>
        <li> 'yield' keyword transforms normal function into a generator function. </li>
        <li> Generator does not hold all the values in memory, it can create values on the fly. </li>
        <li> when execution reaches yield it returns value and  the state(local variables and code pointer at which yield occurred) of the function is saved and function is paused, and when next() is called it is resumed. </li>
        <li> State preserving of the generator function is implicitly managed by the Python. </li>
        <li> When generator function(function with yield) is interpreted, it implicitly implements iterator interface which makes generator function compatible with for-each loop. </li>
        <li> When all the items are exhausted it automatically raises StopIteration [don't use return]. </li>
    </ul> 
</div>


### Writing generator function like range()

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def gen(n):
    i = 0
    while i < n:
        yield i
        i += 1


{% endhighlight %}
</div>

<hr/>


#### Introspecting Generator function and Generator iterator object
  

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

genObj = gen(3)

print('gen    :', gen)
print('genObj :', genObj)
print('dir(genObj) :', dir(genObj))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
gen    : <function gen at 0x7f2a6f531c10>
genObj : <generator object gen at 0x7f2a6f539430>
dir(genObj) : ['__class__', '__del__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', <div id='tut-highlight'>'__iter__'</div>, '__le__', '__lt__', '__name__', '__ne__', '__new__', <div id='tut-highlight'>'__next__'</div>, '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'close', 'gi_code', 'gi_frame', 'gi_running', 'gi_yieldfrom', 'send', 'throw']
</pre></div>

<hr/>

#### Calling next() function on generator iterator object

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

genObj = gen(3)

print(next(genObj))
print(next(genObj))
print(next(genObj))
print(next(genObj))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0
1
2
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 6, in <&zwj;module>
StopIteration</pre></div>

<hr/>


#### Using for loop to iterator generator iterator object

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for i in gen(5):
    print(i)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0
1
2
3
4
</pre></div>

<hr/>


#### Collecting values of generator in to collection

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def gen(n):
    i = 0
    while i < n:
        yield i
        i += 1

gen2 = gen(11)
list1 = list(gen2)
print('list1 :', list1)

gen3 = gen(11)
set1 = set(gen3)
print('set1 :', set1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
list1 : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
set1 : {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
</pre></div>

<hr/>


#### Applying function on generator iterator object

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

gen4 = gen(11)
print('sum(gen4) :', sum(gen4))

gen5 = gen(11)
print('max(gen5) :', max(gen5))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
sum(gen4) : 55
max(gen5) : 10
</pre></div>

<hr/>



### generator expression
<p> It is an expression which returns generator iterator object. </p>

<div id="tut-content"> 
    <ul>
        <li> It's working is same as list comprehension bu rather than performing operation on all elements at once it performs operation on the fly as required. </li>
        <li> It enables iterating with infinite stream of data which is not possible with list comprehension. </li>
    </ul> 
</div>

<div id="tut-content"> 
    <p> <strong> generator expression  can be used for following : </strong> </p>
    <ul>
        <li> Returning generator iterator object for collection. </li>
        <li> Performing some operation on each elements of collection. </li>
        <li> Selecting subset of elements from the collection. </li>
    </ul> 
</div>


#### Returning generator iterator object for collection.

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

names = ['John', 'Victor', 'Kelly', 'Sam', 'Jane']

nameIter = (name for name in names)

print('type(nameIter) :', type(nameIter), end='\n\n')

for name in nameIter:
    print(name)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
type(nameIter) : <class 'generator'>

John
Victor
Kelly
Sam
Jane
</pre></div>

<hr/>


#### Applying function on each element of collection

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

names = ['John', 'Victor', 'Kelly', 'Sam', 'Jane']

nameGen = (name.upper() for name in names)

for name in nameGen:
    print(name)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
JOHN
VICTOR
KELLY
SAM
JANE
</pre></div>

<hr/>


#### Generator returning subset of elements from collection using

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

names = ['John', 'Victor', 'Kelly', 'Sam', 'Jane']

nameGen = (name.upper() for name in names if name.startswith('J'))

for name in nameGen:
    print(name)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
JOHN
JANE
</pre></div>

<hr/>


#### creating generator from generator function
<p> generator function to generate odd numbers </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

oddGen = ((i * 2 - 1) for i in range(1, 10))

print('type(oddGen) :', type(oddGen)) 

for i in oddGen:
    print(i)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
type(oddGen) : <class 'generator'>
1
3
5
7
9
11
13
15
17
</pre></div>

<hr/>


#### Generator expression vs list,dict,set comprehension

<div style="overflow-x:auto;" markdown="block">

{:.table-responsive}

 Generator expression | list,dict,set comprehension 
:---: | :---: 
yields result one at time and does not require the memory to produce result of whole sequence. | generates the whole result in the memory and passes result to target container type.

</div>


<hr/>


### Returning generator on call of iter() from user defined class

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass

@dataclass(frozen=True)
class Student:
    rollno: int
    fname: str
    lname: str
    bgroup: str
    phno: str


class Class:

    def __init__(self, div, students={}):
        self.div = div
        self.__students = students

    def __iter__(self):
        for student in self.__students.items():
            yield student


# Object creation
s1 = Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
s2 = Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
s3 = Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
s4 = Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
s5 = Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

students = {s1.rollno: s1, s2.rollno: s2, s3.rollno: s3, s4.rollno: s4, s5.rollno: s5}

# creating class
class5 = Class('5th', students)

{% endhighlight %}
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> getting generator iterator object and invoking next() </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

generator1 = iter(class5)
generator2 = iter(class5)

print('type(generator1) :', type(generator1), end='\n\n')


print('next(generator1) :', next(generator1))
print('next(generator1) :', next(generator1))
print('next(generator1) :', next(generator1))

print('\nnext(generator2) :', next(generator2))
print('next(generator2) :', next(generator2))

print('\nnext(generator1) :', next(generator1))
print('\nnext(generator2) :', next(generator2))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
type(generator1) : <class 'generator'>

next(generator1) : (101, Student(rollno=101, fname='Kenneth', lname='Shelton', bgroup='O+', phno='775-813-9894'))
next(generator1) : (102, Student(rollno=102, fname='Terry', lname='Kogan', bgroup='O-', phno='312-589-5991'))
next(generator1) : (103, Student(rollno=103, fname='Danny', lname='Simone', bgroup='A+', phno='254-852-0977'))

next(generator2) : (101, Student(rollno=101, fname='Kenneth', lname='Shelton', bgroup='O+', phno='775-813-9894'))
next(generator2) : (102, Student(rollno=102, fname='Terry', lname='Kogan', bgroup='O-', phno='312-589-5991'))

next(generator1) : (104, Student(rollno=104, fname='Michele', lname='Davis', bgroup='A+', phno='214-675-2036'))

next(generator2) : (103, Student(rollno=103, fname='Danny', lname='Simone', bgroup='A+', phno='254-852-0977'))
</pre></div>

<hr/>



### Using generator expression to return generator iterator object on calling iter()

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from dataclasses import dataclass

@dataclass(frozen=True)
class Student:
    rollno: int
    fname: str
    lname: str
    bgroup: str
    phno: str


class Class:

    def __init__(self, div, students={}):
        self.div = div
        self.__students = students

    def __iter__(self):
        return (student for student in self.__students.values())


# Object creation
s1 = Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
s2 = Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
s3 = Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
s4 = Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
s5 = Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

students = {s1.rollno: s1, s2.rollno: s2, s3.rollno: s3, s4.rollno: s4, s5.rollno: s5}

# creating class
class5 = Class('5th', students)

gen1 = iter(class5)
print('type(gen1) :', type(gen1), end='\n\n')

for student in class5:
    print(student)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
type(gen1) : <class 'generator'>

Student(rollno=101, fname='Kenneth', lname='Shelton', bgroup='O+', phno='775-813-9894')
Student(rollno=102, fname='Terry', lname='Kogan', bgroup='O-', phno='312-589-5991')
Student(rollno=103, fname='Danny', lname='Simone', bgroup='A+', phno='254-852-0977')
Student(rollno=104, fname='Michele', lname='Davis', bgroup='A+', phno='214-675-2036')
Student(rollno=105, fname='Kimberly', lname='Poirier', bgroup='A+', phno='713-703-0672')
</pre></div>

<hr/>


### Unpacking generator elements as function argument

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def print_numbers(*numb):
    print('numbers :', numb)


print_numbers(*range(125, 200, 8))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
numbers : (125, 133, 141, 149, 157, 165, 173, 181, 189, 197)
</pre></div>

<hr/>



### Generator calling other generator function

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def gen(n):
    i = 0
    while i < n:
        yield i
        i += 1


def genX(x):
    for i in gen(x):   # Calling other generator
        yield i


print([i for i in genX(11)])



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</pre></div>

<hr/>



### Infinite generator

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def fib():
    a, b = 0, 1

    while True:
        yield a
        a, b = b, a+b


fg1 = fib()

print('next(fg1) :', next(fg1))
print('next(fg1) :', next(fg1))
print('next(fg1) :', next(fg1))
print('next(fg1) :', next(fg1))
print('next(fg1) :', next(fg1))
print('next(fg1) :', next(fg1))
print('next(fg1) :', next(fg1))
print('next(fg1) :', next(fg1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
next(fg1) : 0
next(fg1) : 1
next(fg1) : 1
next(fg1) : 2
next(fg1) : 3
next(fg1) : 5
next(fg1) : 8
next(fg1) : 13
</pre></div>

<hr/>


### methods of generator object

#### send(value) 
<p> Resumes the generator execution and send the given value into generator function and returns new value yielded by generator function. </p>
<hr/>


#### close()
<p> Raises GeneratorExit exception when generator object is closed. </p>
<hr/>


#### throw(type[, value[, traceback]])
<p> Raises exception of given type 'type' when generator is paused, and returns next value generated by yield statement. </p>
<p> If the generator function does not catch the passed exception or raise the different exception, then exception is propagated the caller.</p>

<hr/>



### StopIteration and return inside generator
<p> in Python 3.x 'return x' is equivalent to 'StopIteration (x)', however exception raised by return can not be caught by try-except block where as exception raised by StopIteration can be caught by try-except block</p>
<p> <strong> Return : </strong> 'return x' inside generator raises 'StopIteration(x)' which exits the generator.StopIteration(x) exception raised by return statement can not be caught by try-except block.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def geni(n):
    i = 0
    while True:
        if i < n:
            yield i
        else:
            return i
        i = i+1


g1 = geni(5)
print(next(g1))
print(next(g1))
print(next(g1))
print(next(g1))
print(next(g1))
print(next(g1))

for i in geni(5):
    print(i)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0
1
2
3
4
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 17, in <&zwj;module>
StopIteration: 5
</pre>
<pre class="result-content">

0
1
2
3
4
</pre></div>

<hr/>


### yield from

<p> When iterating from generator inside another generator use 'yield from'. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def gen(n):
    i = 0
    while i < n:
        yield i
        i += 1


def genX2(x):
     yield from gen(x)


print([i for i in genX2(11)])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Multiple 'yield from' in generator function</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def gen(n):
    i = 0
    while i < n:
        yield i
        i += 1


def square(x):
    i = 0
    while i < x:
        yield i*i
        i += 1


def sqauret(x):
    yield from gen(x)
    yield from square(x)


print([i for i in sqauret(10)])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
</pre></div>

<hr/>



### Chaining the generators

<div id="tut-content"> 
    <ul>
        <li> In chained generators each element pass through the conversion or filtering depending on the role of generator. </li>
        <li> By making chain of generators we can modularize and reuse logic. </li>
        <li> It's like assembly line in production where each station performs unique operation and after passing through n-station finished product comes out. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from typing import List


def removeblanlk(collection: List[str]):
    for item in collection:
        yield item.strip()


def toupper(collection: List[str]):
    for item in collection:
        yield item.upper()


def gettext(collection: List[str]):
    for item in collection:
        yield item


names = [' John', 'Victor ', 'Kelly ', ' Sam', 'Jane ']

chainedGen = removeblanlk(toupper(gettext(names)))

print_numbers('next(chainedGen) :', next(chainedGen))
print_numbers('next(chainedGen) :', next(chainedGen))
print_numbers('next(chainedGen) :', next(chainedGen))
print_numbers('next(chainedGen) :', next(chainedGen))
print_numbers('next(chainedGen) :', next(chainedGen))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
numbers : ('next(chainedGen) :', 'JOHN')
numbers : ('next(chainedGen) :', 'VICTOR')
numbers : ('next(chainedGen) :', 'KELLY')
numbers : ('next(chainedGen) :', 'SAM')
numbers : ('next(chainedGen) :', 'JANE')
</pre></div>

<hr/>


### Passing value to generator
<p> <strong> send(value) : </strong> resumes the generator execution and sends the given value into generator function and returns new value yielded by generator function or raises StopIteration in case of elements are exhausted.</p>

{% include callout.html content="send() method must pass the None when called to start generator because there is no yield expression to receive value. " type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def genargs(x):
    while True:

        newVal = (yield x)

        if newVal:
            x = newVal
        else:
            x = x + 1


g1 = genargs(5)
print('next(g1) :', next(g1))
print('next(g1) :', next(g1))
print('next(g1) :', next(g1))
print('next(g1) :', next(g1))

print('g1.send(100) :', g1.send(100))
print('next(g1) :', next(g1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
next(g1) : 5
next(g1) : 6
next(g1) : 7
next(g1) : 8
g1.send(100) : 100
next(g1) : 101
</pre></div>

<hr/>


### Using try-except-finally inside generator function

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def order_process1(orders):
    try:
        for order in orders:
            try:
                print(f'Processing order : {order}\n'
                      f'Packaging order'
                      f'\n--------------------------------------')
                yield order
            except ValueError as e:
                print('Invalid Order processed ... \n', e.args)
                yield order
    finally:
        print('<<<< Sending report to supervisor >>>>')
    print('Processing after try-finally')


orders = [101, 102, 201, 103]

{% endhighlight %}
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Iterating through all elements </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for order in order_process1(orders):
    print(f'Order {order} delivered .. \n')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Processing order : 101
Packaging order
--------------------------------------
Order 101 delivered .. 

Processing order : 102
Packaging order
--------------------------------------
Order 102 delivered .. 

Processing order : 201
Packaging order
--------------------------------------
Order 201 delivered .. 

Processing order : 103
Packaging order
--------------------------------------
Order 103 delivered .. 

<<<< Sending report to supervisor >>>>
Processing after try-finally

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Iterating through some elements : </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for order in order_process1(orders):
    if order > 200:
        print(f'Invalid order {order} received.')
        break
    print(f'Order {order} delivered .. \n')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Processing order : 101
Packaging order
--------------------------------------
Order 101 delivered .. 

Processing order : 102
Packaging order
--------------------------------------
Order 102 delivered .. 

Processing order : 201
Packaging order
--------------------------------------
Invalid order 201 received.
<<<< Sending report to supervisor >>>>

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Calling close() method on generator object </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

orderGen = order_process1(orders)

print('next(orderGen) :', next(orderGen))
print('next(orderGen) :', next(orderGen))
print('next(orderGen) :', next(orderGen))
orderGen.close()



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Processing order : 101
Packaging order
--------------------------------------
next(orderGen) : 101
Processing order : 102
Packaging order
--------------------------------------
next(orderGen) : 102
Processing order : 201
Packaging order
--------------------------------------
next(orderGen) : 201
<<<< Sending report to supervisor >>>>

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Raising exception using trow()</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

orderGen1 = order_process1(orders)
for order in orderGen1:
    if order > 200:
        orderGen1.throw(ValueError(order))
    print(f'Order {order} delivered .. \n')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Processing order : 101
Packaging order
--------------------------------------
Order 101 delivered .. 

Processing order : 102
Packaging order
--------------------------------------
Order 102 delivered .. 

Processing order : 201
Packaging order
--------------------------------------
Invalid Order processed ... 
 (201,)
Processing order : 103
Packaging order
--------------------------------------
Order 103 delivered .. 

<<<< Sending report to supervisor >>>>
Processing after try-finally
After for loop ....

</pre></div>

<hr/>


### GeneratorExit exception

<div id="tut-content"> 
    <ul>
        <li> GeneratorExit exception is raised when generator function is closed using generator.close(). </li>
        <li> break inside for-each loop of generator object calls generator.close() which raises the GeneratorExit exception. </li>
        <li> GeneratorExit is subclass of BaseException so it can not be catch by generic except Exception. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def order_process1(orders):
    try:
        for order in orders:
            lastOrder = order
            print(f'Processing order : {order}\n'
                  f'Packaging order'
                  f'\n--------------------------------------')
            yield order

    except GeneratorExit:
        print(f'Generator exit while processing order : {lastOrder}')

    finally:
        print('<<<< Sending report to supervisor >>>>')

    print('Processing after finally')


orders = [101, 102, 201, 103, 104, 105]


{% endhighlight %}
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> break inside for-each loop of generator object </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for order in order_process1(orders):
    if order > 200:
        break
    print(f'Received order {order} \n')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Processing order : 101
Packaging order
--------------------------------------
Received order 101 

Processing order : 102
Packaging order
--------------------------------------
Received order 102 

Processing order : 201
Packaging order
--------------------------------------
<div id='tut-highlight'>Generator exit while processing order : 201</div>
<<<< Sending report to supervisor >>>>
Processing after finally
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> calling generator.close() inside for-each loop of generator object </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

orderProcessor = order_process1(orders)
for order in orderProcessor:
    if order > 200:
        orderProcessor.close()
    print(f'Received order {order} \n')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Processing order : 101
Packaging order
--------------------------------------
Received order 101 

Processing order : 102
Packaging order
--------------------------------------
Received order 102 

Processing order : 201
Packaging order
--------------------------------------
<div id='tut-highlight'>Generator exit while processing order : 201</div>
<<<< Sending report to supervisor >>>>
Processing after finally
Received order 201 
</pre></div>

<hr/>


{% include links.html %}
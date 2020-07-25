---
title: Python Iterator
layout: tutorial
last_modified_at: 2020-07-23
tags: [python, Object_Oriented_Programming, Iterator, Iterable, __iter__(), __next__(), iter(), next(), StopIteration, Multiple_simultaneous_iterators, __getitem__(), __len__(), __reversed__()]
sidebar: python_sidebar
permalink: python_iterator.html
folder: python
prev_section:
prev_section_title: 
prev:  python_dataclasses.html
prev_title: Dataclasses
next: python_generator.html
next_title: Generator
next_section: 
next_section_title: 
summary: Python Iterator, Iterator interface, Iterable and Iterator abstract classes, iter() and next() methods, multiple simultaneous iterator, legacy way of creating iterator for indexed collection, iterating collection in reverse using reverse() and __reversed__().
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8BUb0xh4RTw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> <hr/>

## Iterator Interface
<p> Class which hold collection of elements like list, dictionary etc implements Iterator interface in order to make object of class capable of returning one element at a time. </p>

### Iterable class
<p> It is an abstract class defined in collections.abc. It has an abstract method __iter__().</p>

#### \__iter__()
<p> It returns an object which implements Iterator interface. </p>

<hr/>

### Iterator class
<p> Is an abstract  class defined in collections.abc which inherits Iterable. It has an abstract function __next__() in addition with base class Iterable's method __iter__(). </p>

#### \__next__()
<p> It returns the next element when calling next(iterator). It raises StopIteration error when elements are exhausted.</p>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> In order to make an object of a  class iterable through for loop class which holds sequence of elements, class need to implement both __iter__() and __next__() methods. </li>
        <li> Most of built-in container types like list, dict etc implements iterator interface.</li>
        <li> for loop for sequence use iter() function internally to retrieve iterator and calls next() method at each iteration. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for person in personDb:
# is converted to
for person in iter(personDB):


{% endhighlight %}
</div>


<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Checking Iterable and Iterator relation</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections.abc import Iterable, Iterator

print('issubclass(Iterator, Iterable) :', issubclass(Iterator, Iterable))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
issubclass(Iterator, Iterable) : True
</pre></div>

<hr/>


### Implementing Iterator Interface
{% include callout.html content="**Note** : Here  \__next__() methods implementation support multiple scan through the students which means iterator starts from the beginning after reaching to the end of the list and raising StopIteration exception. " type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Student(object):

    def __init__(self, rollno, fname, lname, bgroup, phno):
        self.rollno = rollno
        self.fname = fname
        self.lname = lname
        self.bgroup = bgroup
        self.phno = phno

    def __repr__(self):
        return f"Student({self.rollno}, '{self.fname}', '{self.lname}', '{self.bgroup}', '{self.phno}')"


class Class:
    def __init__(self, div, students=[]):
        self.div = div
        self.__students = list(students)
        self.index = -1

    def __str__(self):
        return str(self.__students)

    def __len__(self):
        return len(self.__students)

    def __getitem__(self, index):
        return self.__students[index]

    def __iter__(self):
        return self

    def __next__(self):
        if self.index+1 >= len(self):
            self.index = -1
            raise StopIteration

        else:
            self.index += 1
            return self.__students[self.index]

    def add_student(self, student):
        self.__students.append(student)



# Object creation
s1 = Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
s2 = Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
s3 = Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
s4 = Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
s5 = Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

stuList = [s1, s2, s3, s4, s5]

class5 = Class('5th', stuList)
print('len(class6) :', len(class5))

iterator = iter(class5)

print('next(iterator) :', next(iterator))
print('next(iterator) :', next(iterator))
print('next(iterator) :', next(iterator))
print('next(iterator) :', next(iterator))
print('next(iterator) :', next(iterator))
print('next(iterator) :', next(iterator))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
len(class6) : 5
next(iterator) : Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
next(iterator) : Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
next(iterator) : Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
next(iterator) : Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
next(iterator) : Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 22, in <&zwj;module>
  File "/home/asha/PycharmProjects/pythonEx/07_OOP/classes/Iterator1.py", line 39, in __next__
    raise StopIteration</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Using for loop </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class6 = Class('6th', stuList)
for student in class6:
    print(student)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Creating multiple iterator objects : </strong>  In __iter__() we return self , which returns same iterator when multiple iterator objects are created.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class5 = Class('5th', stuList)

it1 = iter(class5)
it2 = iter(class5)

print('next(it1) :', next(it1))
print('next(it1) :', next(it1))

print('\nnext(it2) :', next(it2))
print('next(it2) :', next(it2))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
next(it1) : Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
next(it1) : Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')

next(it2) : Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
next(it2) : Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
</pre></div>

{% include callout.html content="In above example when we call next() method in it2 it returned next element from where last iterator it1 was stopped. State of iterators are shared when self is returned. " type="primary" %} 

<hr/>


### Multiple simultaneous iterators

#### Builtin str Iterator
<p> Builtin class str returns multiple simultaneous iterators. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

str1 = 'abcxyz'

for w1 in str1:
    for w2 in str1:
        print(f'({w1}, { w2})', end=' ')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(a, a) (a, b) (a, c) (a, x) (a, y) (a, z) (b, a) (b, b) (b, c) (b, x) (b, y) (b, z) (c, a) (c, b) (c, c) (c, x) (c, y) (c, z) (x, a) (x, b) (x, c) (x, x) (x, y) (x, z) (y, a) (y, b) (y, c) (y, x) (y, y) (y, z) (z, a) (z, b) (z, c) (z, x) (z, y) (z, z) 
</pre></div>

<hr/>


#### Multiple simultaneous iterators for User defined class

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Student(object):

    def __init__(self, rollno, fname, lname, bgroup, phno):
        self.rollno = rollno
        self.fname = fname
        self.lname = lname
        self.bgroup = bgroup
        self.phno = phno

    def __repr__(self):
        return f"Student({self.rollno}, '{self.fname}', '{self.lname}', '{self.bgroup}', '{self.phno})'"


class Class:
    def __init__(self, div, students=[]):
        self.div = div
        self.__students = list(students)
        self.index = -1

    def __str__(self):
        return str(self.__students)

    def __len__(self):
        return len(self.__students)

    def __getitem__(self, item):
        return self.__students[item]

    def __iter__(self):
        return ClassIterator(self.__students)

    def add_student(self, student):
        self.__students.append(student)


class ClassIterator:

    def __init__(self, students) -> None:
        self.__students = students
        self.index = -1

    def __next__(self):
        if self.index+1 >= len(self.__students):
            raise StopIteration
        else:
            self.index += 1
            return self.__students[self.index]

    def __iter__(self):
        return self


# Object creation
s1 = Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
s2 = Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
s3 = Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
s4 = Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
s5 = Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

stuList = [s1, s2, s3, s4, s5]

# creating class
class5 = Class('5th', stuList)

iterator1 = iter(class5)
iterator2 = iter(class5)

print('next(iterator1) :', next(iterator1))
print('next(iterator1) :', next(iterator1))
print('next(iterator1) :', next(iterator1))

print('\nnext(iterator2) :', next(iterator2))
print('next(iterator2) :', next(iterator2))

print('\nnext(iterator1) :', next(iterator1))
print('\nnext(iterator2) :', next(iterator2))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
next(iterator1) : Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894)'
next(iterator1) : Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991)'
next(iterator1) : Student(103, 'Danny', 'Simone', 'A+', '254-852-0977)'

next(iterator2) : Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894)'
next(iterator2) : Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991)'

next(iterator1) : Student(104, 'Michele', 'Davis', 'A+', '214-675-2036)'

next(iterator2) : Student(103, 'Danny', 'Simone', 'A+', '254-852-0977)'

</pre></div>

<hr/>


### Legacy way of creating iterator for indexed collection

<p> Just implementing __getitem__() for indexed collection class makes it's objects iterable. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Student(object):

    def __init__(self, rollno, fname, lname, bgroup, phno):
        self.rollno = rollno
        self.fname = fname
        self.lname = lname
        self.bgroup = bgroup
        self.phno = phno

    def __repr__(self):
        return f"Student({self.rollno}, '{self.fname}', '{self.lname}', '{self.bgroup}', '{self.phno}')"


class Class:

    def __init__(self, students) -> None:
        self._students = students

    def __getitem__(self, item):
        return self._students[item]


s1 = Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
s2 = Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
s3 = Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
s4 = Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
s5 = Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

students = [s1, s2, s3, s4, s5]

c1 = Class(students)

for student in c1:
    print(student)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Returned iterators are by default simultaneous </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

iter1 = iter(c1)
iter2 = iter(c1)

print('Iterator 1 ....')
print(next(iter1))
print(next(iter1))
print(next(iter1))

print('\nIterator 2 ....')
print(next(iter2))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Iterator 1 ....
Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')

Iterator 2 ....
Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
</pre></div>

<hr/>


### \__reversed__()
<p> Defines reverse order of iterating the elements of sequence.  </p>

<div id="tut-content"> 
    <ul>
        <li> reverse(obj) method is used for getting iterator object which returns one element at time in reverse order. </li>
        <li> If __reversed__() method is not implemented by default it will reverse sequence of element using sequence protocol (__len__() and __getitem__()). </li>
        <li> For more efficient reverse iteration implementation of sequence __reversed__() method is implemented. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Student(object):

    def __init__(self, rollno, fname, lname, bgroup, phno):
        self.rollno = rollno
        self.fname = fname
        self.lname = lname
        self.bgroup = bgroup
        self.phno = phno

    def __repr__(self):
        return f"Student({self.rollno}, '{self.fname}', '{self.lname}', '{self.bgroup}', '{self.phno}')"


class Class:
    def __init__(self, div, students=[]):
        self.div = div
        self.__students = list(students)
        self.index = -1

    def __str__(self):
        return str(self.__students)

    def __len__(self):
        return len(self.__students)

    def __getitem__(self, item):
        return self.__students[item]

    def __iter__(self):
        return ClassIterator(self.__students)

    def add_student(self, student):
        self.__students.append(student)


class ClassIterator:

    def __init__(self, students) -> None:
        self.__students = students
        self.index = -1

    def __next__(self):
        if self.index+1 >= len(self.__students):
            raise StopIteration
        else:
            self.index += 1
            return self.__students[self.index]

    def __iter__(self):
        return self


# Object creation
s1 = Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
s2 = Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
s3 = Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
s4 = Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
s5 = Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')

stuList = [s1, s2, s3, s4, s5]


class5 = Class('5th', stuList)

for student in reversed(class5):
    print(student)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Student(105, 'Kimberly', 'Poirier', 'A+', '713-703-0672')
Student(104, 'Michele', 'Davis', 'A+', '214-675-2036')
Student(103, 'Danny', 'Simone', 'A+', '254-852-0977')
Student(102, 'Terry', 'Kogan', 'O-', '312-589-5991')
Student(101, 'Kenneth', 'Shelton', 'O+', '775-813-9894')
</pre></div>

<hr/>

{% include links.html %}
---
title: Python Dictionary
layout: tutorial
tags: [python, dictionary, hashable, hashmap, associative_array,  key, get(), keys(), dict(), for-each  , items(), len(), pop(), popitem(), update(), copy(), deepcopy(), clear() setdefault(), fromkeys(), dictionary_comprehension, ordered_dictionary, default_dictionary]
sidebar: python_sidebar
permalink: python_dictionary.html
folder: python
prev_section: 
prev_section_title: 
prev: python_set_frozenset.html
prev_title: Set and FrozenSet
next: python_counter.html
next_title: Counter
next_section: 
next_section_title: 
summary: Python Dictionary constructor, methods, operators, iterating, dictionary comprehension, dictionary examples, ordered dictionary, default dictionary.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/87iDckAo7UI" allowfullscreen></iframe>
</div> <hr/>


## Dictionary

<div id="tut-content"> 
    <ul>
        <li> <strong>Dictionary also known as HashMap and Associative Array.</strong> </li>
        <li> <strong>Key-Valued data where keys are unique and must be hashable.</strong> </li>
        <li> <strong>Elements of dictionary object are unordered.</strong> </li>
    </ul> 
</div>

{% include callout.html content="**Note** : From Python 3.7 order of key remains same as insertion order, whereas same is not true for previous version because of different implementation." type="primary" %} 

### Using multiple lists to search indexed data

<p> In below example two lists are declared name and phone number, and if we want to search for phone number by given person name first we have to find index of name in  name list and using same index we can access the phone number for same person. </p>

<p> List search is expensive when we have large amount of data. Dictionary provides best performance when it comes to key-value data. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

name = ['John', 'Victor', 'Kelly', 'Sam', 'Jane']
phone = [9978412287, 7852122123, 8845454454, 7665415445, 7984546721]

index = name.index('Kelly')
print('Kelly\'s Phone Number is ->', phone[index])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Kelly's Phone Number is -> 8845454454
</pre></div>

<hr/>



### Constructor

<p id="tut-cons"> dict(**kwargs) </p>
<p id="tut-cons"> dict(*iterable(iterable(key,value), )) </p>
<p id="tut-cons"> dict(mapping, **kwarg)</p>


<div id="tut-content"> 
    <ul>
        <li> Creating empty dictionary object. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {}
print(f'phnDir : {phnDir}  Type : {type(phnDir)} ')

# or
phnDir = dict()
print(f'phnDir : {phnDir}  Type : {type(phnDir)} ')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
phnDir : {}  Type : <class 'dict'> 
phnDir : {}  Type : <class 'dict'> 
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Dictionary with items. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# with mapping
phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'phnDir : {phnDir}  Type : {type(phnDir)} ')

# with keyword arguments
phnDir = dict(John=9978412287, Victor=7852122123, Kelly=8845454454, Sam=7665415445, Jane=7984546721, Emily=None)
print(f'phnDir : {phnDir}  Type : {type(phnDir)} ')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
phnDir : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}  Type : <class 'dict'> 
phnDir : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}  Type : <class 'dict'> 
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Creating dictionary object from iterable. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnBook = (('John', 9978412287), ('Victor', 7852122123), ('Sam', 8845454454), ('Jane', 7984546721))
phnDir = dict(phnBook)
print(f'phnDir : {phnDir}  Type : {type(phnDir)} ')

phnBook = (['John', 9978412287], ['Victor', 7852122123], ['Sam', 8845454454], ['Jane', 7984546721])
phnDir = dict(phnBook)
print(f'phnDir : {phnDir}  Type : {type(phnDir)} ')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
phnDir : {'John': 9978412287, 'Victor': 7852122123, 'Sam': 8845454454, 'Jane': 7984546721}  Type : <class 'dict'> 
phnDir : {'John': 9978412287, 'Victor': 7852122123, 'Sam': 8845454454, 'Jane': 7984546721}  Type : <class 'dict'> 
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> zip() : </strong> Creating dictionary from two iterable </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

name = ['John', 'Victor', 'Kelly', 'Sam', 'Jane']
phone = [9978412287, 7852122123, 8845454454, 7665415445, 798454672]

phnDir = dict(zip(name, phone))

print(phnDir)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 798454672}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Dictionary with tuple as keys </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# 3D point and it's value
points = {(0, 1, 0): 88, (2, 1, 8): 75, (6, 8, 10): 88}
print(points)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{(0, 1, 0): 88, (2, 1, 8): 75, (6, 8, 10): 88}
</pre></div>

<hr/>


### Accessing value using key


#### get(key[, default])

<p> Returns value from dictionary object based on given key. </p>
<div id="tut-content"> 
    <ul>
        <li> <strong> default :</strong> Optional argument is, if given returns given value when given key is not found in dictionary object. If no default value is given it returns None when key is not found in dictionary. </li>
    </ul> 
</div>



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f"Kelly's Phone number : {phnDir['Kelly']}")
# or
print(f"Kelly's Phone number : {phnDir.get('Kelly')}")


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Kelly's Phone number : 8845454454
Kelly's Phone number : 8845454454
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> dir['key'] raises KeyError if given key does not exists in dictionary. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(phnDir['Vicky'])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 4, in <&zwj;module&zwj;>
KeyError: 'Vicky'</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> get(key, default) example </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print('Vicky :', phnDir.get('Vicky'))

print('Vicky :', phnDir.get('Vicky', 'Oops, did not find any matching name.'))
print('Jane :', phnDir.get('Jane', 'Oops, did not find any matching name.'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Vicky : None
Vicky : Oops, did not find any matching name.
Jane : 7984546721
</pre></div>

<hr/>


### Add new Element

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'Before : {phnDir}')
phnDir['Vicky'] = 7845178945
print(f'After  : {phnDir}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
After  : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None, <div id="tut-highlight">'Vicky': 7845178945</div>}
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Adding element with existing key with value does not create a new element in dictionary, it will update existing element's value with newly given value.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'Before : {phnDir}')
phnDir['Emily'] = 7845178945
print(f'After  : {phnDir}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, <div id="tut-highlight">'Emily': None</div>}
After  : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, <div id="tut-highlight">'Emily': 7845178945</div>}
</pre></div>

<hr/>


### Deleting an element
<div id="tut-content"> 
    <ul>
        <li> <strong>del dict[key] : </strong> Deletes the element with given key from dictionary. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'Before : {phnDir}')
del phnDir['Sam']
print(f'After  : {phnDir}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, <div id="tut-highlight">'Sam': 7665415445</div>, 'Jane': 7984546721, 'Emily': None}
After  : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Jane': 7984546721, 'Emily': None}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> If given key does not exists in dictionary, it will raise KeyError </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'Before : {phnDir}')
del phnDir['Vicky']
print(f'After  : {phnDir}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 5, in <&zwj;module&zwj;>
KeyError: 'Vicky'
</pre></div>

<hr/>



### Extracting keys 

#### keys()

<p> Returns set-like view objects containing keys. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(phnDir.keys(), type(phnDir.keys()))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
dict_keys(['John', 'Victor', 'Kelly', 'Sam', 'Jane', 'Emily']) <class 'dict_keys'>
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Performing set operations on dict_keys object.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print('Keys : ', phnDir.keys())
print('Union :', phnDir.keys() | {'Nicky', 'Den'})
print('Intersection :', phnDir.keys() & {'Nicky', 'Den', 'John'})


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Keys :  dict_keys(['John', 'Victor', 'Kelly', 'Sam', 'Jane', 'Emily'])
Union : {'Nicky', 'Sam', 'Jane', 'Den', 'Emily', 'Kelly', 'Victor', 'John'}
Intersection : {'John'}
</pre></div>

<hr/>


#### Extracting keys to a container

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'List : {list(phnDir.keys())}')
print(f'Tuple : {tuple(phnDir.keys())}')
print(f'Set : {set(phnDir.keys())}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
List : ['John', 'Victor', 'Kelly', 'Sam', 'Jane', 'Emily']
Tuple : ('John', 'Victor', 'Kelly', 'Sam', 'Jane', 'Emily')
Set : {'Sam', 'Jane', 'Emily', 'Kelly', 'Victor', 'John'}
</pre></div>

<hr/>


### Extracting values from dictionary

#### values()

<p> Returns a view on dictionary object which contains values of dictionary. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'Values : {phnDir.values()}  Type {type(phnDir.values())}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Values : dict_values([9978412287, 7852122123, 8845454454, 7665415445, 7984546721, None])  Type <class 'dict_values'>
</pre></div>

<hr/>


#### Extracting values to container

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'List : {list(phnDir.values())}')
print(f'Tuple : {tuple(phnDir.values())}')
print(f'Set : {set(phnDir.values())}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
List : [9978412287, 7852122123, 8845454454, 7665415445, 7984546721, None]
Tuple : (9978412287, 7852122123, 8845454454, 7665415445, 7984546721, None)
Set : {7984546721, None, 7852122123, 7665415445, 8845454454, 9978412287}
</pre></div>

<hr/>


### Membership Operators

#### in
<p> Returns True if given key exists in dictionary object.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}


if 'John' in phnDir:
    print('John found in dictionary : ', phnDir['John'])
else:
    print('Oops, did not find any matching name.')

if 'Shanon' in phnDir:
    print('Shanon found in dictionary : ', phnDir['Shanon'])
else:
    print('Oops, did not find any matching name.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
John found in dictionary :  9978412287
Oops, did not find any matching name.
</pre></div>

<hr/>


#### not in 

<p> Returns True if give key does not exists in dictionary object. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

if 'John' not in phnDir:
    print('Oops, did not find any matching name.')
else:
    print('John found in dictionary : ', phnDir['John'])

if 'Shanon' not in phnDir:
    print('Oops, did not find any matching name.')
else:
    print('Shanon found in dictionary : ', phnDir['Shanon'])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
John found in dictionary :  9978412287
Oops, did not find any matching name.
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Checking for a particular value in dictionary.  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

if 7665415445 in phnDir.values():
    print('7665415445 is already registered!')
else:
    print('7665415445 is not registered.')

if 6678787844 in phnDir.values():
    print('6678787844 is already registered!')
else:
    print('6678787844 is not registered.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
7665415445 is already registered!
6678787844 is not registered.
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Checking particular element in dictionary </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

if ('John', 9978412287) in phnDir.items():
    print("('John', 9978412287) is already registered!")
else:
    print("('John', 9978412287) is not registered!")

if ('Vicky', 987887871) in phnDir.items():
    print("('Vicky', 987887871) is already registered!")
else:
    print("('Vicky', 987887871) is not registered!")


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
('John', 9978412287) is already registered!
('Vicky', 987887871) is not registered!
</pre></div>

<hr/>


### Iterating

#### for-each
<p> By default iterating through dictionary object returns key iterator which iterates through keys of dictionary. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print('Iterator :', type(iter(phnDir)), end='\n\n')

for key in phnDir:
    print(f'{key} : {phnDir[key]}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Iterator : <class 'dict_keyiterator'>

John : 9978412287
Victor : 7852122123
Kelly : 8845454454
Sam : 7665415445
Jane : 7984546721
Emily : None
</pre></div>

<hr/>


#### for-each values

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

for value in phnDir.values():
    print(value)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
9978412287
7852122123
8845454454
7665415445
7984546721
None
</pre></div>

<hr/>


#### items()

<p> Returns items iterator which returns tuple(key, value) for each element. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print('Iterator :', type(phnDir.items()), end='\n\n')

for element in phnDir.items():
    print(element)

print('\nUnpacking Tuple\n')
for k, v in phnDir.items():
    print(f'{k} : {v}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Iterator : <class 'dict_items'>

('John', 9978412287)
('Victor', 7852122123)
('Kelly', 8845454454)
('Sam', 7665415445)
('Jane', 7984546721)
('Emily', None)

Unpacking Tuple

John : 9978412287
Victor : 7852122123
Kelly : 8845454454
Sam : 7665415445
Jane : 7984546721
Emily : None
</pre></div>

<hr/>


#### Iterating through sorted keys
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

studentDB = {}

studentDB[101] = {'Name': 'Victor', 'bGroup': 'O+', 'contactNo': 6468774878}
studentDB[103] = {'Name': 'Kelly', 'bGroup': 'A-', 'contactNo': 4647841233}
studentDB[102] = {'Name': 'Jane', 'bGroup': 'A+', 'contactNo': 4565123478}
studentDB[104] = {'Name': 'Sam', 'bGroup': 'B+', 'contactNo': 4564113145}
studentDB[105] = {'Name': 'John', 'bGroup': 'A+', 'contactNo': 4446657411}

print('Default order')
for key in studentDB:
    print(f'{key} : {studentDB[key]}')

print('\nSorted order by key')
for key in sorted(studentDB):
    print(f'{key} : {studentDB[key]}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Default order
101 : {'Name': 'Victor', 'bGroup': 'O+', 'contactNo': 6468774878}
103 : {'Name': 'Kelly', 'bGroup': 'A-', 'contactNo': 4647841233}
102 : {'Name': 'Jane', 'bGroup': 'A+', 'contactNo': 4565123478}
104 : {'Name': 'Sam', 'bGroup': 'B+', 'contactNo': 4564113145}
105 : {'Name': 'John', 'bGroup': 'A+', 'contactNo': 4446657411}

Sorted order by key
101 : {'Name': 'Victor', 'bGroup': 'O+', 'contactNo': 6468774878}
102 : {'Name': 'Jane', 'bGroup': 'A+', 'contactNo': 4565123478}
103 : {'Name': 'Kelly', 'bGroup': 'A-', 'contactNo': 4647841233}
104 : {'Name': 'Sam', 'bGroup': 'B+', 'contactNo': 4564113145}
105 : {'Name': 'John', 'bGroup': 'A+', 'contactNo': 4446657411}
</pre></div>

<hr/>

### Searching Key based on Value
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

val = 7665415445

for k, v in phnDir.items():
    if v == val:
        print(f'Found Key : {k}')
        break
else:
    print('Value does not exists!')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Found Key : Sam
</pre></div>

<hr/>


### Adding or removing elements while iterating

{% include callout.html content="**Note** : Adding or removing elements from list or dictionary while iterating will raise RuntimeError.Instead create copy of dictionary or list and apply modification on copy object. " type="primary" %} 


<div id="tut-content"> 
    <ul>
        <li> Modifying element value during iteration is fine </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

dict1 = {'a': 5, 'b': 6, 'c': -1}

print('Before', dict1)

for key in dict1:
    if dict1[key] < 0:
        dict1[key] = 0

print('After', dict1)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before {'a': 5, 'b': 6, 'c': -1}
After {'a': 5, 'b': 6, 'c': 0}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Adding or removing an element from same dictionary which is in iteration will raise RuntimeError. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

dict1 = {'a': 5, 'b': 6, 'c': -1}

print('Before', dict1)

for key in dict1:
    if dict1[key] < 0:
        del dict1[key]

print('After', dict1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before {'a': 5, 'b': 6, 'c': -1}
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 5, in <&zwj;module&zwj;>
RuntimeError: dictionary changed size during iteration</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Modifying copy of dictionary </li>
    </ul> 
</div>


{% include callout.html content="**Note** : Depending on type of element (mutable or immutable) copy() or deepcopy() should be used. " type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

dict1 = {'a': 5, 'b': 6, 'c': -1}
dict1Copy = dict1.copy()

print('Before dict1 :', dict1)
print('Before dict1Copy :', dict1Copy)

for key in dict1:
    if dict1[key] < 0:
        del dict1Copy[key]

print('\nAfter dict1 :', dict1)
print('After dict1Copy :', dict1Copy)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before dict1 : {'a': 5, 'b': 6, 'c': -1}
Before dict1Copy : {'a': 5, 'b': 6, <div id="tut-highlight">'c': -1</div>}

After dict1 : {'a': 5, 'b': 6, 'c': -1}
After dict1Copy : {'a': 5, 'b': 6}
</pre></div>

<hr/>


### Unpacking as keyword argument of function

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def get_cicecream(*args, **kwargs):
    """ usage: first enter all flavours you want followed by customization options with keyword arguments"""
    for order in args:
        print(f'Processing {order} .....')
        for k in kwargs:
            print(f'processing  {k} : {kwargs[k]}')
        print('Finished order ->', order, '\n')


get_cicecream('Butterscotch', 'Rose', 'Chocolate Chips', 'Pineapple', size='Mid', quantity=2, package='cup')

# unpacking the parameter
iceCreams = ['Butterscotch', 'Rose', 'Chocolate Chips', 'Pineapple']
orderInfo = {'size': 'Mid', 'quantity': 2, 'package': 'cup'}

get_cicecream(*iceCreams, **orderInfo)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Processing Butterscotch .....
processing  size : Mid
processing  quantity : 2
processing  package : cup
Finished order -> Butterscotch 

Processing Rose .....
processing  size : Mid
processing  quantity : 2
processing  package : cup
Finished order -> Rose 

Processing Chocolate Chips .....
processing  size : Mid
processing  quantity : 2
processing  package : cup
Finished order -> Chocolate Chips 

Processing Pineapple .....
processing  size : Mid
processing  quantity : 2
processing  package : cup
Finished order -> Pineapple 

Processing Butterscotch .....
processing  size : Mid
processing  quantity : 2
processing  package : cup
Finished order -> Butterscotch 

Processing Rose .....
processing  size : Mid
processing  quantity : 2
processing  package : cup
Finished order -> Rose 

Processing Chocolate Chips .....
processing  size : Mid
processing  quantity : 2
processing  package : cup
Finished order -> Chocolate Chips 

Processing Pineapple .....
processing  size : Mid
processing  quantity : 2
processing  package : cup
Finished order -> Pineapple 
</pre></div>

<hr/>


### Functions 


#### len(iterable)

<p> Returns number of elements in dictionary. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print('Length :', len(phnDir))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Length : 6
</pre></div>

<hr/>


#### pop(key)

<p> Removes and returns an item from the dictionary based on given key. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'Before : {phnDir}' ,end='\n\n')
print('pop("Kelly") returned : ', phnDir.pop('Kelly'), end='\n\n')
print(f'After  : {phnDir}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

pop("Kelly") returned :  8845454454

After  : {'John': 9978412287, 'Victor': 7852122123, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> If given key does not exists in dictionary, it will raise KeyError. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
print(phnDir.pop('Zoya'))  # KeyError


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 3, in <&zwj;module&zwj;>
KeyError: 'Zoya'</pre></div>

<hr/>


#### popitem()

<p> Removes and returns arbitrary element(tuple(key, value)) from the directory. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'Before : {phnDir}', end='\n\n')
print('Popping an item -> ', phnDir.popitem(), end='\n\n')
print(f'After  : {phnDir}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

Popping an item ->  ('Emily', None)

After  : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721}
</pre></div>

<hr/>



#### update(updateDict)

<p> Updating dictionary elements using given 'updateDict'. </p>

<div id="tut-content"> 
    <ul>
        <li> If key of updateDict exist in dictionary it replaces the values of updateDict with base dictionary. </li>
        <li> If key does not exist in dictionary, it will create a new element in base dictionary. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

perInfo = {'Name': 'Ronald Eastwood', 'Address': '2499 Howard Street Ionia, MI 48846', 'SSN': '384-72-4578',
           'phno': '616-527-1718', 'company': 'Gino\'s Hamburgers',
           'vehicle': '2012 Holden HRT'}
updtInfo = {'phno': '789-454-1554', 'vehicle': '2020 Hummer H2', 'bloodGroup': 'O+'}

print(f'Before : {perInfo}')
perInfo.update(updtInfo)
print(f'After  : {perInfo}')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'Name': 'Ronald Eastwood', 'Address': '2499 Howard Street Ionia, MI 48846', 'SSN': '384-72-4578', 'phno': '616-527-1718', 'company': "Gino's Hamburgers", 'vehicle': '2012 Holden HRT'}
After  : {'Name': 'Ronald Eastwood', 'Address': '2499 Howard Street Ionia, MI 48846', 'SSN': '384-72-4578', 'phno': '789-454-1554', 'company': "Gino's Hamburgers", 'vehicle': '2020 Hummer H2', 'bloodGroup': 'O+'}
</pre></div>

<hr/>


#### copy()

<p> Creates and return shallow copy of the dictionary. </p>

<div id="tut-content"> 
    <ul>
        <li> Dictionary on immutable values </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

phnCopy = phnDir.copy()

print('phnDir  :', phnDir)
print('phnCopy :', phnCopy)


phnCopy['Victor'] = 9978451210
print('\nAfter phnCopy[\'Victor\'] = 9978451210\n')

print('phnDir  :', phnDir)
print('phnCopy :', phnCopy)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
phnDir  : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
phnCopy : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

After phnCopy['Victor'] = 9978451210

phnDir  : {'John': 9978412287, 'Victor': <div id="tut-highlight">7852122123</div>, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
phnCopy : {'John': 9978412287, 'Victor': <div id="tut-highlight">9978451210</div>, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Dictionary on mutable values : </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': [9978412287, ], 'Victor': [7852122123, ], 'Kelly': [8845454454, ],
          'Sam': [7665415445, ], 'Jane': [7984546721, ], 'Emily': None}

phnCopy = phnDir.copy()

print('phnDir  :', phnDir)
print('phnCopy :', phnCopy)


phnCopy['Victor'].append(7612121555)
print('\nAfter : phnCopy[\'Victor\'].append(7612121555)\n')

print('phnDir  :', phnDir)
print('phnCopy :', phnCopy)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
phnDir  : {'John': [9978412287], 'Victor': [7852122123], 'Kelly': [8845454454], 'Sam': [7665415445], 'Jane': [7984546721], 'Emily': None}
phnCopy : {'John': [9978412287], 'Victor': [7852122123], 'Kelly': [8845454454], 'Sam': [7665415445], 'Jane': [7984546721], 'Emily': None}

After : phnCopy['Victor'].append(7612121555)

phnDir  : {'John': [9978412287], <div id="tut-highlight">'Victor': [7852122123, 7612121555]</div>, 'Kelly': [8845454454], 'Sam': [7665415445], 'Jane': [7984546721], 'Emily': None}
phnCopy : {'John': [9978412287], <div id="tut-highlight">'Victor': [7852122123, 7612121555]</div>, 'Kelly': [8845454454], 'Sam': [7665415445], 'Jane': [7984546721], 'Emily': None}
</pre></div>

<hr/>



#### deepcopy()

<p> Creates and return deep copy of the dictionary. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from copy import deepcopy

phnDir = {'John': [9978412287, ], 'Victor': [7852122123, ], 'Kelly': [8845454454, ],
          'Sam': [7665415445, ], 'Jane': [7984546721, ], 'Emily': None}

phnCopy = deepcopy(phnDir)

print('phnDir  :', phnDir)
print('phnCopy :', phnCopy)


phnCopy['Victor'].append(7612121555)
print('\nAfter : phnCopy[\'Victor\'].add(7612121555)\n')

print('phnDir  :', phnDir)
print('phnCopy :', phnCopy)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
phnDir  : {'John': [9978412287], 'Victor': [7852122123], 'Kelly': [8845454454], 'Sam': [7665415445], 'Jane': [7984546721], 'Emily': None}
phnCopy : {'John': [9978412287], 'Victor': [7852122123], 'Kelly': [8845454454], 'Sam': [7665415445], 'Jane': [7984546721], 'Emily': None}

After : phnCopy['Victor'].add(7612121555)

phnDir  : {'John': [9978412287], 'Victor': <div id="tut-highlight">[7852122123]</div>, 'Kelly': [8845454454], 'Sam': [7665415445], 'Jane': [7984546721], 'Emily': None}
phnCopy : {'John': [9978412287], 'Victor': <div id="tut-highlight">[7852122123, 7612121555]</div>, 'Kelly': [8845454454], 'Sam': [7665415445], 'Jane': [7984546721], 'Emily': None}
</pre></div>

<hr/>



#### clear()

<p> Removes all items from dictionary. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'Before : {phnDir}')
phnDir.clear()
print(f'After  : {phnDir}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
After  : {}
</pre></div>

<hr/>



#### setDefault(key, default)

<div id="tut-content"> 
    <ul>
        <li> If Key not found, creates new element(Key: defaultValue) and returns defaultValue. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'Before : {phnDir}')
print('setdefault(\'Binny\', 9878777456) :', phnDir.setdefault('Binny', 9878777456))
print(f'After  : {phnDir}')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
setdefault('Binny', 9878777456) : <div id="tut-highlight">9878777456</div>
After  : {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None, <div id="tut-highlight">'Binny': 9878777456</div>}
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> If Key already exist, it returns Value which is present in Dictionary. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

phnDir = {'John': 9978412287, 'Victor': 7852122123, 'Kelly': 8845454454,
          'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}

print(f'Before : {phnDir}')
print("setdefault('Kelly', 9878777456) :", phnDir.setdefault('Kelly', 9878777456))
print(f'After  : {phnDir}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {'John': 9978412287, 'Victor': 7852122123, <div id="tut-highlight">'Kelly': 8845454454</div>, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
setdefault('Kelly', 9878777456) : <div id="tut-highlight">8845454454</div>
After  : {'John': 9978412287, 'Victor': 7852122123, <div id="tut-highlight">'Kelly': 8845454454</div>, 'Sam': 7665415445, 'Jane': 7984546721, 'Emily': None}
</pre></div>

<hr/>


#### fromKeys(iterable[, value])

<p> Creates dictionary from given iterable of elements as key. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>value :</strong> Optional argument if not given, it set None as value for each element in iterable. If given value sets given value to each element as key. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

keyMap = dict.fromkeys(['John', 'Victor', 'Kelly', 'Sam', 'Jane'])
print('Without default :', keyMap)

# giving default value
keyMap = dict.fromkeys(['John', 'Victor', 'Kelly', 'Sam', 'Jane'], 8000800088)
print('default=8000800088 :', keyMap)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Without default : {'John': None, 'Victor': None, 'Kelly': None, 'Sam': None, 'Jane': None}
default=8000800088 : {'John': 8000800088, 'Victor': 8000800088, 'Kelly': 8000800088, 'Sam': 8000800088, 'Jane': 8000800088}
</pre></div>

<hr/>


### Identity Operators

#### is

<p> Returns True if given variables point to same dictionary object in memory. </p>

#### is not

<p> Returns True if given variables does not point to same dictionary object in memory. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

dict1 = {'a': 5, 'b': 6}
dict2 = {'a': 5, 'b': 6}
dict3 = dict1

print('dict1 is dict2 :', dict1 is dict2)
print('dict1 is dict3 :', dict1 is dict3)

print('dict1 is not dict2 :', dict1 is not dict2)
print('dict1 is not dict3 :', dict1 is not dict3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
dict1 is dict2 : False
dict1 is dict3 : True
dict1 is not dict2 : True
dict1 is not dict3 : False
</pre></div>

<hr/>


### Comparision Operator

#### ' == '

<p> Returns True if all elements are equal for given dictionaries. </p>


#### ' != '

<p> Returns True if all elements are not equal for given dictionaries.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

dict1 = {'a': 5, 'b': 6}
dict2 = dict(a=5, b=6)
dict3 = {'b': 6}

print('dict1 == dict2 :', dict1 == dict2)
print('dict1 == dict3 :', dict1 == dict3)

print('dict1 != dict2 :', dict1 != dict2)
print('dict1 != dict3 :', dict1 != dict3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
dict1 == dict2 : True
dict1 == dict3 : False
dict1 != dict2 : False
dict1 != dict3 : True
</pre></div>

<hr/>


### Comparing elements

<p> Dictionary objects can not be compared directly using <, >, <=, >= . But we can convert dictionary into sorted list or tuple so that we can use comparision operators on elements. </p>

{% include callout.html content="**Note** : To compare elements must be sorted because dictionary does not preserve order of elements internally. " type="primary" %} 

Operator  | Meaning
:---: | :---
< | Less than
> | Greater than
<= | Less than or equal
>= | Greater than or equal


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

dict1 = {'a': 5, 'b': 6}
dict2 = {'b': 6}

print('Return  type of sorted() :', type(sorted(dict1.items())), end='\n\n')

print('dict1 <  dict2 :', sorted(dict1.items()) < sorted(dict2.items()))
print('dict1 <= dict2 :', sorted(dict1.items()) <= sorted(dict2.items()))
print('dict1 > dict2  :', sorted(dict1.items()) > sorted(dict2.items()))
print('dict1 >= dict2 :', sorted(dict1.items()) >= sorted(dict2.items()))




{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Return  type of sorted() : <div id="tut-highlight"><class 'list'></div>

dict1 <  dict2 : True
dict1 <= dict2 : True
dict1 > dict2  : False
dict1 >= dict2 : False
</pre></div>

<hr/>


### Comparing keys for subset or superset

<p> set(dict) returns set of keys for given dictionary which can be compared for subset or superset. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

dict1 = {'a': 5, 'b': 6, 'c': 7}
dict2 = {'a': 5, 'b': 6}


print('dict > dict2  :', set(dict1) > set(dict2))
print('dict >= dict2 :', set(dict1) >= set(dict2))
print('dict < dict2  :', set(dict1) < set(dict2))
print('dict <= dict2 :', set(dict1) <= set(dict2))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
dict > dict2  : True
dict >= dict2 : True
dict < dict2  : False
dict <= dict2 : False
</pre></div>

<hr/>


### Dictionary comprehension

#### Syntax

<div id="tut-content"> 
    <ul>
        <li> <strong> {expr: expr for item in iterator [if expr] } </strong> </li>
    </ul> 
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> From keys with default value </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

keyMap = {k: 8000800088 for k in ['John', 'Victor', 'Kelly', 'Sam', 'Jane']}
print(keyMap)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{'John': 8000800088, 'Victor': 8000800088, 'Kelly': 8000800088, 'Sam': 8000800088, 'Jane': 8000800088}
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> Using generator function </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

squareDict = {i: i*i for i in range(1, 11)}
print(squareDict)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li>  Filtering result keys </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

squareDict = {i: i*i for i in range(1, 11) if i % 2 == 0}
print(squareDict)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{2: 4, 4: 16, 6: 36, 8: 64, 10: 100}
</pre></div>

<hr/>



### Ordered Dictionary

<p> Keeps element ordered as per insertion order. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import OrderedDict

studentDB = OrderedDict()

name = ['John', 'Victor', 'Kelly', 'Sam', 'Jane']
studentDB[101] = {'Name': 'Victor', 'bGroup': 'O+', 'contactNo': 6468774878}
studentDB[103] = {'Name': 'Kelly', 'bGroup': 'A-', 'contactNo': 4647841233}
studentDB[102] = {'Name': 'Jane', 'bGroup': 'A+', 'contactNo': 4565123478}
studentDB[104] = {'Name': 'Sam', 'bGroup': 'B+', 'contactNo': 4564113145}
studentDB[105] = {'Name': 'John', 'bGroup': 'A+', 'contactNo': 4446657411}

print(studentDB)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
OrderedDict([(101, {'Name': 'Victor', 'bGroup': 'O+', 'contactNo': 6468774878}), (103, {'Name': 'Kelly', 'bGroup': 'A-', 'contactNo': 4647841233}), (102, {'Name': 'Jane', 'bGroup': 'A+', 'contactNo': 4565123478}), (104, {'Name': 'Sam', 'bGroup': 'B+', 'contactNo': 4564113145}), (105, {'Name': 'John', 'bGroup': 'A+', 'contactNo': 4446657411})])
</pre></div>

<hr/>


### Default Dictionary

<p> Assigns given default value to newly created element. </p>

#### Constructor
<p id="tut-cons"> defaultdict([default_factory[, ...]]) </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>default_factory : </strong>  Must be a callable which takes no arguments and return an object which is set as default value for newly created element. </li>
    </ul> 
</div>


<div id="tut-content"> 
    <ul>
        <li> Dictionary of persons who owns list of files </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

fOwner = [('John', 'File A'), ('John', 'File Y'), ('Sam', 'File Z'), ('Kelly', 'File C'), ('Jane', 'File G'), ('Victor', 'File X'), ('Victor', 'File O'), ('John', 'File L'), ('Jane', 'File M')]

perFileDict = {}

# one way of doing it
for file in fOwner:
    if file[0] in perFileDict:
        perFileDict[file[0]].append(file[1])
    else:
        perFileDict[file[0]] = []
        perFileDict[file[0]].append(file[1])

print(perFileDict)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{'John': ['File A', 'File Y', 'File L'], 'Sam': ['File Z'], 'Kelly': ['File C'], 'Jane': ['File G', 'File M'], 'Victor': ['File X', 'File O']}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> using setdefault()  </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

fOwner = [('John', 'File A'), ('John', 'File Y'), ('Sam', 'File Z'), ('Kelly', 'File C'), ('Jane', 'File G'), ('Victor', 'File X'), ('Victor', 'File O'), ('John', 'File L'), ('Jane', 'File M')]

perFileDict = {}
for file in fOwner:
    fileList = perFileDict.setdefault(file[0], [])
    fileList.append(file[1])

print(perFileDict)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
{'John': ['File A', 'File Y', 'File L'], 'Sam': ['File Z'], 'Kelly': ['File C'], 'Jane': ['File G', 'File M'], 'Victor': ['File X', 'File O']}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Using defaultdict() </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import defaultdict

fOwner = [('John', 'File A'), ('John', 'File Y'), ('Sam', 'File Z'), ('Kelly', 'File C'), ('Jane', 'File G'), ('Victor', 'File X'), ('Victor', 'File O'), ('John', 'File L'), ('Jane', 'File M')]

perFileDict = defaultdict(list)

for file in fOwner:
    (perFileDict[file[0]]).append(file[1])

print(perFileDict)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
defaultdict(<class 'list'>, {'John': ['File A', 'File Y', 'File L'], 'Sam': ['File Z'], 'Kelly': ['File C'], 'Jane': ['File G', 'File M'], 'Victor': ['File X', 'File O']})
</pre></div>

<hr/>


### Examples

#### List of Dictionaries

<div id="tut-content"> 
    <ul>
        <li> Iterating </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

laptops = [
    {'oem': 'DELL', 'model': 'Dell Inspiron 5300', 'ram': 8, 'processor': 'AMD Ryzen™ 3 3500H',
     'gpu': 'Radeon™ Vega 6 Graphics', 'gMemory': 2, 'price': 469.99, 'os': 'Linux', 'hdd': 500},
    {'oem': 'DELL', 'model': 'Dell Inspiron 3580', 'ram': 8, 'processor': 'Intel® Core™ i5-8265U',
     'gpu': 'Intel® UHD Graphics 620', 'gMemory': 0, 'price': 599, 'os': 'Windows', 'hdd': 500},
    {'oem': 'DELL', 'model': 'Latitude 5580', 'ram': 16, 'processor': 'Intel Core i7-8820HQ',
     'gpu': 'NVIDIA GeForce 1660Ti', 'gMemory': 4, 'price': 1329, 'os': 'Windows', 'hdd': 500},
    {'oem': 'HP', 'model': 'ENVY 17t', 'ram': 16, 'processor': 'Intel® Core™ i7-9550U',
     'gpu': 'NVIDIA® GeForce® MX350', 'gMemory': 2, 'price': 809.99, 'os': 'Windows', 'hdd': 512},
    {'oem': 'HP', 'model': 'EliteBook 840', 'ram': 16, 'processor': 'Intel® Core™ i7-9500U',
     'gpu': 'AMD Radeon™ RX 540', 'gMemory': 2, 'price': 1356.75, 'os': 'Windows', 'hdd': 256},
    {'oem': 'Apple', 'model': 'MacBook Air', 'ram': 16, 'processor': 'Intel® Core™ i7-9500U',
     'gpu': 'Intel Iris Plus Graphics 640', 'gMemory': 2, 'price': 1356.75, 'os': 'macOS', 'hdd': 256},
    {'oem': 'Apple', 'model': 'MacBook Pro', 'ram': 8, 'processor': 'Intel® Core™ i9-9500H',
     'gpu': 'Intel UHD Graphics 617', 'gMemory': 2, 'price': 1199, 'os': 'macOS', 'hdd': 128},
]



for laptop in laptops:
    for key in laptop:
        print(key, ':', laptop[key])
    print('=========================\n')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
oem : DELL
model : Dell Inspiron 5300
ram : 8
processor : AMD Ryzen™ 3 3500H
gpu : Radeon™ Vega 6 Graphics
gMemory : 2
price : 469.99
os : Linux
hdd : 500
=========================

oem : DELL
model : Dell Inspiron 3580
ram : 8
processor : Intel® Core™ i5-8265U
gpu : Intel® UHD Graphics 620
gMemory : 0
price : 599
os : Windows
hdd : 500
=========================

oem : DELL
model : Latitude 5580
ram : 16
processor : Intel Core i7-8820HQ
gpu : NVIDIA GeForce 1660Ti
gMemory : 4
price : 1329
os : Windows
hdd : 500
=========================

oem : HP
model : ENVY 17t
ram : 16
processor : Intel® Core™ i7-9550U
gpu : NVIDIA® GeForce® MX350
gMemory : 2
price : 809.99
os : Windows
hdd : 512
=========================

oem : HP
model : EliteBook 840
ram : 16
processor : Intel® Core™ i7-9500U
gpu : AMD Radeon™ RX 540
gMemory : 2
price : 1356.75
os : Windows
hdd : 256
=========================

oem : Apple
model : MacBook Air
ram : 16
processor : Intel® Core™ i7-9500U
gpu : Intel Iris Plus Graphics 640
gMemory : 2
price : 1356.75
os : macOS
hdd : 256
=========================

oem : Apple
model : MacBook Pro
ram : 8
processor : Intel® Core™ i9-9500H
gpu : Intel UHD Graphics 617
gMemory : 2
price : 1199
os : macOS
hdd : 128
=========================

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Searching </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

laptops = [
    {'oem': 'DELL', 'model': 'Dell Inspiron 5300', 'ram': 8, 'processor': 'AMD Ryzen™ 3 3500H',
     'gpu': 'Radeon™ Vega 6 Graphics', 'gMemory': 2, 'price': 469.99, 'os': 'Linux', 'hdd': 500},
    {'oem': 'DELL', 'model': 'Dell Inspiron 3580', 'ram': 8, 'processor': 'Intel® Core™ i5-8265U',
     'gpu': 'Intel® UHD Graphics 620', 'gMemory': 0, 'price': 599, 'os': 'Windows', 'hdd': 500},
    {'oem': 'DELL', 'model': 'Latitude 5580', 'ram': 16, 'processor': 'Intel Core i7-8820HQ',
     'gpu': 'NVIDIA GeForce 1660Ti', 'gMemory': 4, 'price': 1329, 'os': 'Windows', 'hdd': 500},
    {'oem': 'HP', 'model': 'ENVY 17t', 'ram': 16, 'processor': 'Intel® Core™ i7-9550U',
     'gpu': 'NVIDIA® GeForce® MX350', 'gMemory': 2, 'price': 809.99, 'os': 'Windows', 'hdd': 512},
    {'oem': 'HP', 'model': 'EliteBook 840', 'ram': 16, 'processor': 'Intel® Core™ i7-9500U',
     'gpu': 'AMD Radeon™ RX 540', 'gMemory': 2, 'price': 1356.75, 'os': 'Windows', 'hdd': 256},
    {'oem': 'Apple', 'model': 'MacBook Air', 'ram': 16, 'processor': 'Intel® Core™ i7-9500U',
     'gpu': 'Intel Iris Plus Graphics 640', 'gMemory': 2, 'price': 1356.75, 'os': 'macOS', 'hdd': 256},
    {'oem': 'Apple', 'model': 'MacBook Pro', 'ram': 8, 'processor': 'Intel® Core™ i9-9500H',
     'gpu': 'Intel UHD Graphics 617', 'gMemory': 2, 'price': 1199, 'os': 'macOS', 'hdd': 128},
]

print('Laptops with price < 900 :\n')

for laptop in laptops:
    if laptop['price'] < 900:
        for key in laptop:
            print(key, ':', laptop[key])
        print('=========================\n')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Laptops with price < 900 :

oem : DELL
model : Dell Inspiron 5300
ram : 8
processor : AMD Ryzen™ 3 3500H
gpu : Radeon™ Vega 6 Graphics
gMemory : 2
price : 469.99
os : Linux
hdd : 500
=========================

oem : DELL
model : Dell Inspiron 3580
ram : 8
processor : Intel® Core™ i5-8265U
gpu : Intel® UHD Graphics 620
gMemory : 0
price : 599
os : Windows
hdd : 500
=========================

oem : HP
model : ENVY 17t
ram : 16
processor : Intel® Core™ i7-9550U
gpu : NVIDIA® GeForce® MX350
gMemory : 2
price : 809.99
os : Windows
hdd : 512
=========================


</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> Search with mutiple criteria </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

laptops = [
    {'oem': 'DELL', 'model': 'Dell Inspiron 5300', 'ram': 8, 'processor': 'AMD Ryzen™ 3 3500H',
     'gpu': 'Radeon™ Vega 6 Graphics', 'gMemory': 2, 'price': 469.99, 'os': 'Linux', 'hdd': 500},
    {'oem': 'DELL', 'model': 'Dell Inspiron 3580', 'ram': 8, 'processor': 'Intel® Core™ i5-8265U',
     'gpu': 'Intel® UHD Graphics 620', 'gMemory': 0, 'price': 599, 'os': 'Windows', 'hdd': 500},
    {'oem': 'DELL', 'model': 'Latitude 5580', 'ram': 16, 'processor': 'Intel Core i7-8820HQ',
     'gpu': 'NVIDIA GeForce 1660Ti', 'gMemory': 4, 'price': 1329, 'os': 'Windows', 'hdd': 500},
    {'oem': 'HP', 'model': 'ENVY 17t', 'ram': 16, 'processor': 'Intel® Core™ i7-9550U',
     'gpu': 'NVIDIA® GeForce® MX350', 'gMemory': 2, 'price': 809.99, 'os': 'Windows', 'hdd': 512},
    {'oem': 'HP', 'model': 'EliteBook 840', 'ram': 16, 'processor': 'Intel® Core™ i7-9500U',
     'gpu': 'AMD Radeon™ RX 540', 'gMemory': 2, 'price': 1356.75, 'os': 'Windows', 'hdd': 256},
    {'oem': 'Apple', 'model': 'MacBook Air', 'ram': 16, 'processor': 'Intel® Core™ i7-9500U',
     'gpu': 'Intel Iris Plus Graphics 640', 'gMemory': 2, 'price': 1356.75, 'os': 'macOS', 'hdd': 256},
    {'oem': 'Apple', 'model': 'MacBook Pro', 'ram': 8, 'processor': 'Intel® Core™ i9-9500H',
     'gpu': 'Intel UHD Graphics 617', 'gMemory': 2, 'price': 1199, 'os': 'macOS', 'hdd': 128},
]

print('Laptops with i7 processor and ram >= 16GB with Graphics memory >= 2GB :\n')

for laptop in laptops:
    if 'i7' in laptop['processor'] and laptop['ram'] >= 16 and laptop['gMemory'] >= 2:
        for key in laptop:
            print(key, ':', laptop[key])
        print('=========================\n')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Laptops with i7 processor and ram >= 16GB with Graphics memory >= 2GB :

oem : DELL
model : Latitude 5580
ram : 16
processor : Intel Core i7-8820HQ
gpu : NVIDIA GeForce 1660Ti
gMemory : 4
price : 1329
os : Windows
hdd : 500
=========================

oem : HP
model : ENVY 17t
ram : 16
processor : Intel® Core™ i7-9550U
gpu : NVIDIA® GeForce® MX350
gMemory : 2
price : 809.99
os : Windows
hdd : 512
=========================

oem : HP
model : EliteBook 840
ram : 16
processor : Intel® Core™ i7-9500U
gpu : AMD Radeon™ RX 540
gMemory : 2
price : 1356.75
os : Windows
hdd : 256
=========================

oem : Apple
model : MacBook Air
ram : 16
processor : Intel® Core™ i7-9500U
gpu : Intel Iris Plus Graphics 640
gMemory : 2
price : 1356.75
os : macOS
hdd : 256
=========================
</pre></div>

<hr/>



#### Dictionary of  Dictionaries with Lists

<p> Person database based on SSN number </p>



<div id="tut-content"> 
    <ul>
        <li> Iterating </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

personDB = {
    '497-20-3112': {'name': 'Calvin Mercer', 'phone': ['330-751-3244', '330-707-3520'], 'email': ['cmercer@hillstone.edu', 'cavin1011@gmail.com'], 'age': 30,'profession': 'education', 'bGroup': 'A-'},

    '289-48-9874': {'name': 'John Stuart', 'phone': ['440-926-2089'], 'email': ['jhon.stuart@pinecorp.com', 'jstuart886@yahoo.com'], 'age': 45, 'profession': 'Heat treating equipment setter', 'bGroup': 'A+'},

    '379-15-7321': {'name': 'Margaret Robinson', 'phone': ['248-363-7063', '248-364-7063', '248-148-9898'], 'email': ['jhon.stuart@pinecorp.com', 'jstuart886@yahoo.com'], 'age': 45, 'profession': 'Writer', 'bGroup': 'O+'},

    '263-49-7810': {'name': 'Rachel Schneider', 'phone': ['386-214-2160'], 'email': ['rschneider@osworld.com', 'rschneider660@gmail.com'], 'age': 52, 'profession': 'Computer Operator', 'bGroup': 'B+'},

    '572-25-2300': {'name': 'Lee Vaughan', 'phone': ['707-443-5231', '707-568-1279'], 'email': ['lvaughan@rediff.com'], 'age': 24, 'profession': 'Structural engineer', 'bGroup': 'A+'}
}


for ssn in personDB:
    print("Social Security Number :", ssn)
    dictP = personDB[ssn]
    for key in dictP:
        print()
        if str(type(dictP[key])).find('list') > -1:
            print(key, ': ')
            for val in dictP[key]:
                print(val)
        else:
            print(key, ':', dictP[key])

    print('----------------------------------\n')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Social Security Number : 497-20-3112

name : Calvin Mercer

phone : 
330-751-3244
330-707-3520

email : 
cmercer@hillstone.edu
cavin1011@gmail.com

age : 30

profession : education

bGroup : A-
----------------------------------

Social Security Number : 289-48-9874

name : John Stuart

phone : 
440-926-2089

email : 
jhon.stuart@pinecorp.com
jstuart886@yahoo.com

age : 45

profession : Heat treating equipment setter

bGroup : A+
----------------------------------

Social Security Number : 379-15-7321

name : Margaret Robinson

phone : 
248-363-7063
248-364-7063
248-148-9898

email : 
jhon.stuart@pinecorp.com
jstuart886@yahoo.com

age : 45

profession : Writer

bGroup : O+
----------------------------------

Social Security Number : 263-49-7810

name : Rachel Schneider

phone : 
386-214-2160

email : 
rschneider@osworld.com
rschneider660@gmail.com

age : 52

profession : Computer Operator

bGroup : B+
----------------------------------

Social Security Number : 572-25-2300

name : Lee Vaughan

phone : 
707-443-5231
707-568-1279

email : 
lvaughan@rediff.com

age : 24

profession : Structural engineer

bGroup : A+
----------------------------------

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Filtering person based on age </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

personDB = {
    '497-20-3112': {'name': 'Calvin Mercer', 'phone': ['330-751-3244', '330-707-3520'], 'email': ['cmercer@hillstone.edu', 'cavin1011@gmail.com'], 'age': 30,'profession': 'education', 'bGroup': 'A-'},

    '289-48-9874': {'name': 'John Stuart', 'phone': ['440-926-2089'], 'email': ['jhon.stuart@pinecorp.com', 'jstuart886@yahoo.com'], 'age': 45, 'profession': 'Heat treating equipment setter', 'bGroup': 'A+'},

    '379-15-7321': {'name': 'Margaret Robinson', 'phone': ['248-363-7063', '248-364-7063', '248-148-9898'], 'email': ['jhon.stuart@pinecorp.com', 'jstuart886@yahoo.com'], 'age': 45, 'profession': 'Writer', 'bGroup': 'O+'},

    '263-49-7810': {'name': 'Rachel Schneider', 'phone': ['386-214-2160'], 'email': ['rschneider@osworld.com', 'rschneider660@gmail.com'], 'age': 52, 'profession': 'Computer Operator', 'bGroup': 'B+'},

    '572-25-2300': {'name': 'Lee Vaughan', 'phone': ['707-443-5231', '707-568-1279'], 'email': ['lvaughan@rediff.com'], 'age': 24, 'profession': 'Structural engineer', 'bGroup': 'A+'}
}

print('Persons with age < 35 :\n')
print('----------------------------------\n')
for ssn in personDB:
    if personDB[ssn]['age'] < 35:
        print("Social Security Number :", ssn)
        dictP = personDB[ssn]
        for key in dictP:
            print()
            if str(type(dictP[key])).find('list') > -1:
                print(key, ': ')
                for val in dictP[key]:
                    print(val)
            else:
                print(key, ':', dictP[key])
        print('----------------------------------\n')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Persons with age < 35 :

----------------------------------

Social Security Number : 497-20-3112

name : Calvin Mercer

phone : 
330-751-3244
330-707-3520

email : 
cmercer@hillstone.edu
cavin1011@gmail.com

age : 30

profession : education

bGroup : A-
----------------------------------

Social Security Number : 572-25-2300

name : Lee Vaughan

phone : 
707-443-5231
707-568-1279

email : 
lvaughan@rediff.com

age : 24

profession : Structural engineer

bGroup : A+
----------------------------------
</pre></div>

<hr/>

{% include links.html %}
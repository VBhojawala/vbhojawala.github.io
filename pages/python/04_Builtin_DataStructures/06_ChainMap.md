---
title: ChainMap
layout: tutorial
tags: [ChainMap, maps, parents, pop(), values(), setdefault(), update(), keys(), items(), popitem(), copy(), fromkeys(), clear(), get(), new_child()]
sidebar: python_sidebar
permalink: python_chainmap.html
folder: python
prev_section: 
prev_section_title: 
prev: python_counter.html
prev_title: Counter
next: python_deque.html
next_title: Deque
next_section: 
next_section_title: 
summary: ChainMap constructor, iteration, attributes,  functions.
---

## ChainMap

<div id="tut-content"> 
    <ul>
        <li> Provides ordered lookup and updateable view for multiple dictionaries. </li>
        <li> It creates updateable view on top of given  mappings.</li>
        <li> Underlying mapping is stored in list and can be accessed with attribute ' maps '.</li>
        <li> For example python resolves variable in order local(), global() and builtin scope.</li>
    </ul> 
</div>



### Constructor

<p id="tuts-cons"> ChainMap(*maps) </p>

<p> Returns ChainMap object from given maps. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)
print(memoryManager)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})
</pre></div>

<hr/>



### Accessing element using Key

#### chainMap['key']

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

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)
print(memoryManager)


print("\nmemoryManager['Object1'] :", memoryManager['Object1'])
# Or
print("memoryManager.get('Object1') :", memoryManager.get('Object1'))

print('Object5 :', memoryManager.get('Object5'))
print('Object8 :', memoryManager.get('Object8'))
print('Object9 :', memoryManager.get('Object9'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})

memoryManager['Object1'] : 1231354587198
memoryManager.get('Object1') : 1231354587198
Object5 : 2021701102121
Object8 : 3213458678777
Object9 : 1974654212721
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li>  Accessing element using  chainMap['key'] for non existing key will raise KeyError.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print("memoryManager['Object10'] :", memoryManager['Object10'])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 11, in <&zwj;module&zwj;>
  File "/usr/local/lib/python3.8/collections/__init__.py", line 891, in __getitem__
    return self.__missing__(key)            # support subclasses that define __missing__
  File "/usr/local/lib/python3.8/collections/__init__.py", line 883, in __missing__
    raise KeyError(key)
KeyError: 'Object10'</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
       <li>  Accessing element using get(key, default) for non existing key will return None if no default parameter is given, if default is given default parameter is returned.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print("memoryManager.get('Object10') :", memoryManager.get('Object10'))
print("memoryManager.get('Object10', 'Element not Found!') :",
      memoryManager.get('Object10', 'Element not Found!'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
memoryManager.get('Object10') : None
memoryManager.get('Object10', 'Element not Found!') : Element not Found!
</pre></div>

<hr/>



### Changing elements of mapping after creating ChainMap

<p> Changing elements of mapping after creating ChainMap will be visible to ChainMap, because it is an updatable view on existing mapping object. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap


cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('Before :', memoryManager)
del cache['Object1']
print('\nAfter :', memoryManager)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : ChainMap({<div id="tut-highlight">'Object1': 1231354587198</div>, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})

After : ChainMap({'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})
</pre></div>

<hr/>



### Modifying ChainMap

<div id="tut-content"> 
    <ul>
        <li>  While performing lookup on ChainMap it searches key from all mapping from left to right.But when performing insertion, update or deletion by default it performs on first mapping only. </li>
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


#### Adding new element

<p> Adding new entry to the ChaiMap will add new element to first mapping. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('Before :', memoryManager)
memoryManager['Object10'] = 1232131322111
print('\nAfter  :', memoryManager)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})

After  : ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721, <div id="tut-highlight">'Object10': 1232131322111</div>}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})
</pre></div>

<hr/>


#### Updating Value

<div id="tut-content"> 
    <ul>
        <li> If Key of new element already exists in first mapping it will updated newly given value with old value. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('Before :', memoryManager)
memoryManager['Object1'] = 399978124574111
print('\nAfter :', memoryManager)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : ChainMap({<div id="tut-highlight">'Object1': 1231354587198</div>, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})

After : ChainMap({<div id="tut-highlight">'Object1': 399978124574111</div>, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> It will add new element to first mapping, if given key does not existing in first mapping even though key exists in mapping other than first mapping. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('Before :', memoryManager)
memoryManager['Object2'] = 399978124574111
print('\nAfter :', memoryManager)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {<div id="tut-highlight">'Object2': 223456455647901</div>, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})

After : ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721, <div id="tut-highlight">'Object2': 399978124574111</div>}, {<div id="tut-highlight">'Object2': 223456455647901</div>, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})
</pre></div>

<hr/>



#### deleting element

<div id="tut-content"> 
    <ul>
        <li> While deleting element it will remove element if given key exists in first mapping only. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('Before :', memoryManager)
del memoryManager['Object3']
print('\nAfter :', memoryManager)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : ChainMap({'Object1': 1231354587198, <div id="tut-highlight">'Object3': 18485412310201</div>, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})

After : ChainMap({'Object1': 1231354587198, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> If given key does not exists in first mapping, even though it is existing in other mapping it will raise KeyError. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('Before :', memoryManager)
del memoryManager['Object2']
print('\nAfter :', memoryManager)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "/usr/local/lib/python3.8/collections/__init__.py", line 944, in __delitem__
    del self.maps[0][key]
KeyError: 'Object2'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 12, in <&zwj;module&zwj;>
  File "/usr/local/lib/python3.8/collections/__init__.py", line 946, in __delitem__
    raise KeyError('Key not found in the first mapping: {!r}'.format(key))
KeyError: "Key not found in the first mapping: 'Object2'"</pre></div>

<hr/>





### Attributes

#### maps

<p> Returns updateable list of mappings , which can be changed to modify order of the mappings to be lookup or modify particular mapping. It's the only internal data structure stored for ChainMap. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('maps :', memoryManager.maps)

# getting particular mapping
print('\n1st dict (Cache) :', memoryManager.maps[0])
print('last dict (SSD)  :', memoryManager.maps[-1])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
maps : [{'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}]

1st dict (Cache) : {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
last dict (SSD)  : {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Replacing / modifying  mapping </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('\nmaps[0] Before :', memoryManager.maps[0])

updatedCache = {'Object3': 18485412310201, 'Object5': 1897987977987, 'Object6': 187977898797}
memoryManager.maps[0] = updatedCache
print('maps[0] After  :', memoryManager.maps[0])

# modifying mapping
print('\nmaps[1] Before :', memoryManager.maps[1])
memoryManager.maps[1]['Object4'] = 1114540212122
print('maps[1] After :', memoryManager.maps[1])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
maps[0] Before : {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
maps[0] After  : {'Object3': 18485412310201, 'Object5': 1897987977987, 'Object6': 187977898797}

maps[1] Before : {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
maps[1] After : {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121, 'Object4': 1114540212122}
</pre></div>

<hr/>


#### parents

<p> Returns new ChainMap containing all mapping of existing ChainMap except first one. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('memoryManager :', memoryManager)
parentMemManager = memoryManager.parents
print('\nparentMemManager :', parentMemManager)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
memoryManager : ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})

parentMemManager : ChainMap({'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})
</pre></div>

<hr/>


### Functions

#### Common function with dictionary

<div id="tut-content"> 
    <ul>
        <li> Following are common function in comparision with dictionary. They have exact semantics and meaning for ChainMap.</li>
        <li> All modification functions in ChainMap is applied on first mapping only. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

common = [attr for attr in (set(dir(ChainMap)) & set(dir(dict))) if not attr.startswith('__')]
print('Functions common between ChainMap and dict :', common)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Functions common between ChainMap and dict : ['pop', 'values', 'setdefault', 'update', 'keys', 'items', 'popitem', 'copy', 'fromkeys', 'clear', 'get']
</pre></div>

<hr/>

#### items()

<p> Returns ItemsView on ChainMap of accessible elements which can be iterated over or collected to any container. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('ChainMap :', memoryManager)

print('\nIterating :')
for element in memoryManager.items():
    print(element)

print('\nCollecting :')
print('Items : ', tuple(memoryManager.items()))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
ChainMap : ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})

Iterating :
('Object1', 1231354587198)
('Object2', 223456455647901)
('Object3', 18485412310201)
('Object4', 3987998789798)
('Object5', 2021701102121)
('Object6', 38797454154187)
('Object7', 3897879791552)
('Object8', 3213458678777)
('Object9', 1974654212721)

Collecting :
Items :  (('Object1', 1231354587198), ('Object2', 223456455647901), ('Object3', 18485412310201), ('Object4', 3987998789798), ('Object5', 2021701102121), ('Object6', 38797454154187), ('Object7', 3897879791552), ('Object8', 3213458678777), ('Object9', 1974654212721))

</pre></div>

<hr/>

{% include callout.html content="**Note** : Same way for keys() and values() it will return iterator which cane be iterated over or collected accessible keys and values only rather than each elements of individual map. " type="primary" %} 


#### pop(key)

</p> If key is found in first mapping it removes and returns item from the ChainMap, if  not found it raise KeyError.  </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('Before :', memoryManager.items())
print("\npop('Object1') :", memoryManager.pop('Object1'))
print('\nAfter :', memoryManager.items())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : ItemsView(ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}))

pop('Object1') : 1231354587198

After : ItemsView(ChainMap({'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}))
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> If given key of pop does not exists in first mapping , even it is existing in other mapping it will raise KeyError. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('Before :', memoryManager.items())
memoryManager.pop('Object2')
print('Before :', memoryManager.items())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : ItemsView(ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, <div id="tut-highlight">'Object2': 3897987454654</div>, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}))
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "/usr/local/lib/python3.8/collections/__init__.py", line 958, in pop
    return self.maps[0].pop(key, *args)
KeyError: 'Object2'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "<&zwj;input&zwj;>", line 12, in <&zwj;module&zwj;>
  File "/usr/local/lib/python3.8/collections/__init__.py", line 960, in pop
    raise KeyError('Key not found in the first mapping: {!r}'.format(key))
KeyError: "Key not found in the first mapping: 'Object2'"
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> Popping item from specific mapping </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('Before :', memoryManager.maps[1])
print('pop("Object2") :', memoryManager.maps[1].pop('Object2'))
print('Before :', memoryManager.maps[1])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Before : {<div id="tut-highlight">'Object2': 223456455647901</div>, 'Object3': 29871354982132, 'Object5': 2021701102121}
pop("Object2") : 223456455647901
Before : {'Object3': 29871354982132, 'Object5': 2021701102121}
</pre></div>

<hr/>



#### new_child(m=None)

<p> Returns new ChainMap attaching provided mapping 'm' in front of the old ChainMap. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from collections import ChainMap

cache = {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}
ram = {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}
ssd = {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774,
       'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187,
       'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211}

memoryManager = ChainMap(cache, ram, ssd)

print('memoryManager :', memoryManager)


l1Cache = {'Object1': 10000215445, 'Object5': 100012154544}
newmemManager = memoryManager.new_child(l1Cache)

print('\nnewmemManager :', newmemManager)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
memoryManager : ChainMap({'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})

newmemManager : ChainMap(<div id="tut-highlight">{'Object1': 10000215445, 'Object5': 100012154544}</div>, {'Object1': 1231354587198, 'Object3': 18485412310201, 'Object9': 1974654212721}, {'Object2': 223456455647901, 'Object3': 29871354982132, 'Object5': 2021701102121}, {'Object1': 3979877787878, 'Object2': 3897987454654, 'Object3': 37897548789774, 'Object4': 3987998789798, 'Object5': 3897987977987, 'Object6': 38797454154187, 'Object7': 3897879791552, 'Object8': 3213458678777, 'Object9': 34867865412211})
</pre></div>

<hr/>

{% include links.html %}
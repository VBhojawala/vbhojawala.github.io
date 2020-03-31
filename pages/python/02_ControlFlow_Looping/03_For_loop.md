---
title: For Loop
layout: tutorial
tags: [for, range(), continue, for-each, for-else, command_line_argument, sys.argv]
sidebar: python_sidebar
permalink: python_for_loop.html
folder: python
prev_section: 
prev_section_title: 
prev: python_while_loop.html
prev_title: While Loop
next: 
next_title:
next_section: python_functions.html
next_section_title: Functions
summary: for loop, range() function, continue,  for-each loop, for-else, Command Line Arguments.
---


## range(stop) 
<p> Is a generator function which evaluates values on the fly at runtime. </p>
<p> Generates numbers from 0 to up to stop (not including stop). </p>




## for loop

<p> Iterates over items of iterator / generator. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>print 'Hello World' 10 times using for loop</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for i in range(10):
    print(f'{i}. Hello World')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0. Hello World
1. Hello World
2. Hello World
3. Hello World
4. Hello World
5. Hello World
6. Hello World
7. Hello World
8. Hello World
9. Hello World
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>generator function (range) / iterator  can be assigned to a variable : </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

limit = range(10)

for i in limit:
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
5
6
7
8
9
</pre></div>

<hr/>


## continue

<p> Executed when exceptional condition satisfied , it skips remaining statements in current iteration and continue next iteration. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for i in range(1, 11):
    if i % 2 == 0:
        continue
    print(f'i -> {i}')




{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
i -> 1
i -> 3
i -> 5
i -> 7
i -> 9
</pre></div>


<hr/>



## range(start, end[, step]) 
<p> Generates numbers from start to up to stop (not including stop) with given optional step. </p>
<div id="tut-content"> 
    <ul>
        <li> <strong>start : </strong> first number to be generated.</li>
        <li> <strong>end : </strong>  last number up to which generator function generates number from start.</li>
        <li> <strong>step : </strong>  Optional argument step which gets added to generate next number.</li>
    </ul> 
</div>

<div id="tut-content"> 
    <ul>
        <li> <strong>Previous example with steps</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for i in range(1, 11, 2):
    print(f'i -> {i}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
i -> 1
i -> 3
i -> 5
i -> 7
i -> 9
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> range with negative step</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for i in range(10, 0, -1):
    print(i)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
10
9
8
7
6
5
4
3
2
1
</pre></div>

<hr/>




## for-each
<p> Iterating through items of collection. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong>iterating through the characters of the string</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

msg = 'Hello World!'

for ch in msg:
    print(ch)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
H
e
l
l
o
 
W
o
r
l
d
!
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>looping through the index of the string </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

msg = 'Hello World!'

for i in range(len(msg)):
    print(msg[i], end='')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Hello World!
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Iterating through collection</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

persons = (('Bob', 29, 50_000, 'Male'), ('Kelly', 22, 70_000, 'Female'),
           ('Pamela', 36, 65_000, 'Female'), ('Andy', 45, 75_000, 'Male'))


for person in persons:
    print(person)

print('\n')

for name, age, salary, gender in persons:
    print(f'Name : {name} | Age : {age} | Salary:{salary} | Gender : {gender}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
('Bob', 29, 50000, 'Male')
('Kelly', 22, 70000, 'Female')
('Pamela', 36, 65000, 'Female')
('Andy', 45, 75000, 'Male')


Name : Bob | Age : 29 | Salary:50000 | Gender : Male
Name : Kelly | Age : 22 | Salary:70000 | Gender : Female
Name : Pamela | Age : 36 | Salary:65000 | Gender : Female
Name : Andy | Age : 45 | Salary:75000 | Gender : Male
</pre></div>

<hr/>


## for-else

<div id="tut-content"> 
    <ul>
        <li> <strong>else : </strong> else-block gets executed if for loop is exited normally without break.</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for i in range(10):
    print(i)
else:
    print('For loop terminated without break')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0
1
2
3
4
5
6
7
8
9
For loop terminated without break
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>for loop terminated with break</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for i in range(10):
    if i > 6:
        break
    print(i)
else:
    print('For loop terminated with break')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0
1
2
3
4
5
6
</pre></div>

<hr/>




## Examples

<div id="tut-content"> 
    <ul>
        <li> <strong>Print acute triangle using for loop :</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for i in range(1, 11):
    for j in range(i):
        print('*', end='')
    print('')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
*
**
***
****
*****
******
*******
********
*********
**********
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>print mirror of acute triangle</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for i in range(1, 11):
    for j in range(1, (11-i)):
        print(' ', end='')
    for k in range(1,i):
        print('*', end='')
    print('')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Print Equilateral triangle </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for i in range(1, 11):
    for j in range(0, (11-i)):
        print(' ', end='')
    for k in range(2*i-1):
        print('*', end='')
    print('')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
          *
         ***
        *****
       *******
      *********
     ***********
    *************
   ***************
  *****************
 *******************
</pre></div>

<hr/>




<!-- ## Iterator vs Generator

<p> Difference in Nutshell. In OOP section explained in details </p>

<div id="tut-content"> 
    <ul>
        <li> Iterator iterates over items which are already present in memory / object. Generators generates values on the fly. </li>
        <li> Generators remembers local variable values where as for iterator it needs to be preserved explicitly in object. </li>
    </ul> 
</div>


<div id="tut-content"> 
    <ul>
        <li> <strong>yield  : </strong> Returns variable value to caller function without destroying the local variables. </li>
         <li> <strong> return : </strong> After returns statement local variables are destroyed. </li>
    </ul> 
</div>


<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Defining custom range() function</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def cust_range(start=0, end=1, step=1):
    while start < end:
        yield start
        start += 1

for i in cust_range(0,11):
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
5
6
7
8
9
10
</pre></div>

<hr/> -->


## Command Line Arguments

<p> sys module provides an attribute argv which returns list of argument passed at command line separated by space. </p>

<div id="tut-content"> 
    <ul>
        <li> First string of list returned by sys.argv is full path to python file which is getting executed. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import sys

print('Command line Argument passed :')
for argument in sys.argv:
    print(argument)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Command line Argument passed :
/home/asha/PycharmProjects/pythonEx/02_ControlFlow_Looping/04_CommandLineArguments.py
A
B
C
</pre></div>

<hr/>


{% include links.html %}
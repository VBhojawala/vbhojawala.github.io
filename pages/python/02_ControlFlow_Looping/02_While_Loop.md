---
title: While Loop
layout: tutorial
tags: [while_loop, break, continue, while-else]
sidebar: python_sidebar
permalink: python_while_loop.html
folder: python
prev_section: 
prev_section_title: 
prev: python_control_flow.html
prev_title: Control Flow
next: python_for_loop.html
next_title: For Loop
next_section: 
next_section_title: 
summary: While loop, break, continue, while-else.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/R1pk9idKKUI" allowfullscreen></iframe>
</div>

<hr/>

## while loop


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

p = 1

while p < 11:
    print(p)
    p += 1


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
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

<hr/>



## break

<p> Executed when end of loop condition satisfied, which exits the while loop. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> Infinite while loop and break statement : </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

while True:
    inpt = input('Enter your Name [Press Enter to exit] ->')
    if inpt:
        print(f'Hi, {inpt}. Welcome to the world of Python.')
    else:
        break


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Enter your Name [Press Enter to exit] ->>? Vicky
Hi, Vicky. Welcome to the world of Python.
Enter your Name [Press Enter to exit] ->>? Mike
Hi, Mike. Welcome to the world of Python.
Enter your Name [Press Enter to exit] ->>? Kim
Hi, Kim. Welcome to the world of Python.
Enter your Name [Press Enter to exit] ->>? 

</pre></div>

<hr/>



## continue

<p> Executed when exceptional condition satisfied , it skips remaining statements in current iteration and continue next iteration. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> Infinite loop with break and continue : </strong> </li>
    </ul> 
</div>

<p> Following program prints number only if it is not divisible by 2,3,5 other wise ignore it, 0 to exit. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

while True:
    inpt = int(input('Enter a Number [Enter 0 to exit] ->'))
    if inpt:
        if (inpt % 2 == 0) or (inpt % 3 == 0) or (inpt % 5 == 0):
            continue
        print(f'Adding {inpt} to the list ....')
    else:
        break


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Enter a Number [Enter 0 to exit] ->>? 255
Enter a Number [Enter 0 to exit] ->>? 1212
Enter a Number [Enter 0 to exit] ->>? 541
Adding 541 to the list ....
Enter a Number [Enter 0 to exit] ->>? 97
Adding 97 to the list ....
Enter a Number [Enter 0 to exit] ->>? 665
Enter a Number [Enter 0 to exit] ->>? 323
Adding 323 to the list ....
Enter a Number [Enter 0 to exit] ->>? 121
Adding 121 to the list ....
Enter a Number [Enter 0 to exit] ->>? 111
Enter a Number [Enter 0 to exit] ->>? 1221
Enter a Number [Enter 0 to exit] ->>? 123127
Adding 123127 to the list ....
Enter a Number [Enter 0 to exit] ->>? 0

</pre></div>

<hr/>



## while-else

<div id="tut-content"> 
    <ul>
        <li> <strong> else : </strong> statements in else gets executed if break statement inside loop is not called. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

x = 10

while x:
    x -= 1
    print(x)
    if x < 0:
        print('Conditional break')
        break
else:
    print('while loop exited normally')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
9
8
7
6
5
4
3
2
1
0
while loop exited normally
</pre></div>

<hr/>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

x = 10

while x:
    x -= 1
    print(x)
    if x <= 0:  # changed
        print('Conditional break')
        break
else:
    print('while loop exited normally')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
9
8
7
6
5
4
3
2
1
0
Conditional break
</pre></div>

<hr/>



## Examples 

<div id="tut-content"> 
    <ul>
        <li> <strong>Online order processing facility which ships the order until none is left</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
hasOrder = True
print('Press <Enter> to exit\n')
while hasOrder:
    order = input('Enter the item name to be order')
    if order:
        print('Finding ', order, ' .......')
        print('Updating inventory ......')
        print('Printing shipping details ')
        print('Packaging the order')
        print('Assign shipment to Courier services')
        print(f'Estimated delivery time --> {random.randint(1, 5)} Days')
        print('----------------------------------------------------')
    else:
        hasOrder = False
        print('Shutting down ........')
        print('@@@@@@@@@@ Exit @@@@@@@@@@')




{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Press <&zwj;Enter&zwj;> to exit

Enter the item name to be order>? 16GB RAM
Finding  16GB RAM  .......
Updating inventory ......
Printing shipping details 
Packaging the order
Assign shipment to Courier services
Estimated delivery time --> 2 Days
----------------------------------------------------
Enter the item name to be order>? RTX 2080 SUPER
Finding  RTX 2080 SUPER  .......
Updating inventory ......
Printing shipping details 
Packaging the order
Assign shipment to Courier services
Estimated delivery time --> 2 Days
----------------------------------------------------
Enter the item name to be order>? RYZEN 3700H
Finding  RYZEN 3700H  .......
Updating inventory ......
Printing shipping details 
Packaging the order
Assign shipment to Courier services
Estimated delivery time --> 2 Days
----------------------------------------------------
Enter the item name to be order>? 650W Power Supply
Finding  650W Power Supply  .......
Updating inventory ......
Printing shipping details 
Packaging the order
Assign shipment to Courier services
Estimated delivery time --> 4 Days
----------------------------------------------------
Enter the item name to be order>? 
Shutting down ........
@@@@@@@@@@ Exit @@@@@@@@@@

</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Let python pick the number ball from box without removing randomly until it matches with given number.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import random
begin = int(input('Enter starting range -> '))
end = int(input('Enter end range -> '))
number = int(input('Enter no to be found -> '))

found = False
trial = 0

while not found:
    trial += 1
    n = random.randint(begin, end)
    if n == number:
        print(f'Python found in {trial} trial(s)')
        found = True


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Enter starting range -> >? 1
Enter end range -> >? 100
Enter no to be found -> >? 99
Python found in 29 trial(s)
</pre></div>

<hr/>


{% include links.html %}
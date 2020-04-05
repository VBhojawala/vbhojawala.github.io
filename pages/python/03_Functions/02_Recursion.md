---
title: Recursion
layout: tutorial
tags: [recursion, recursive_function, power_xn, factorial, fibonacci, binary_search]
sidebar: python_sidebar
permalink: python_recursion.html
folder: python
prev_section: 
prev_section_title: 
prev: python_functions.html
prev_title: Functions
next: 
next_title:
next_section: 
next_section_title: 
summary: Recursion :- function calling itself.
---

## Recursion


### Recursive function
<div id="tut-content"> 
    <ul>
        <li> <strong>Recursive function : </strong> When function calling itself, it is called recursive function. </li>
    </ul> 
</div>

<hr/>


### Building blocks 
<p> Building blocks for solving a problem with recursion. </p>
<div id="tut-content"> 
    <ol>    
        <li> <strong> Base case : </strong> solving the problem. </li>
        <li> <strong> Dividing : </strong> Recursive calls which divides the Problem in to smaller set of problem. </li>
        <li> <strong> Pre-processing : </strong> Processing done before making recursive call. </li>
        <li> <strong> Post-processing : </strong> Processing done after finishing recursive call. </li>
    </ol>
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong>Example</strong> </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def recur_n(n):
    """ trace the execution sequence of n recurrence steps """

    # Base case
    if n == 0:
        print('Solving the base case.')
        print('End of Recursion')
        return

    # pre-processing before making call
    print('Started recurring ->', n)

    # making recursive call
    recur_n(n-1)

    # Post processing after making call
    print('Ended recurring ->', n)


recur_n(5)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Started recurring -> 5
Started recurring -> 4
Started recurring -> 3
Started recurring -> 2
Started recurring -> 1
Solving the base case.
End of Recursion
Ended recurring -> 1
Ended recurring -> 2
Ended recurring -> 3
Ended recurring -> 4
Ended recurring -> 5
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Slides</strong> </li>
    </ul> 
</div>

<div id='tut-ppt'>
    <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="/docs/python/03Functions_Recursion.pdf" allowfullscreen></iframe>
    </div>
</div>


<hr/>




## Examples 

### Power function which calculates x^n

#### Recursive

<p>Similar to mathematical approach : x^n =  x * x^n-1  </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def pow_xn(x, n):

    if n == 1:
        return x

    return x * pow_xn(x, n-1)


print(pow_xn(2, 16))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
65536
</pre></div>

<hr/>


#### Iterative

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def pow_xn(x,n):
    result = 1
    for i in range(n):
        result *= x
    return result


print(pow_xn(2, 16))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
65536
</pre></div>

<hr/>



### Factorial


#### Recursive

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}


def factorial(n):
    """calculates the factorial of n recursively."""
    if n == 1 or n == 0:
        return 1
    return n * factorial(n-1)


print(factorial(6))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
720
</pre></div>

<hr/>



####  Iterative

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def factorial(n):
    """calculates the factorial of n iteratively."""
    if n == 1 or n == 0:
        return 1

    result = 1
    for i in range(1, n+1):
        result *= i

    return result


print(factorial(6))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
720
</pre></div>

<hr/>




### Fibonacci 

#### Recursive

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def fib(n):
    """Calculates fibonacci number of n recursively"""
    if n <= 1:
        return n

    return fib(n-1) + fib(n-2)


print(fib(6))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
8
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Printing recursive call sequence</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def fib(n):
    """Calculates fibonacci number of n recursively"""
    if n <= 1:
        return n

    print(f'fib({n}) : Calling fib({n-1}) and fib({n-2})')
    return fib(n-1) + fib(n-2)


print(fib(6))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
fib(6) : Calling fib(5) and fib(4)
fib(5) : Calling fib(4) and fib(3)
fib(4) : Calling fib(3) and fib(2)
fib(3) : Calling fib(2) and fib(1)
fib(2) : Calling fib(1) and fib(0)
fib(2) : Calling fib(1) and fib(0)
fib(3) : Calling fib(2) and fib(1)
fib(2) : Calling fib(1) and fib(0)
fib(4) : Calling fib(3) and fib(2)
fib(3) : Calling fib(2) and fib(1)
fib(2) : Calling fib(1) and fib(0)
fib(2) : Calling fib(1) and fib(0)
8
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Slides</strong> </li>
    </ul> 
</div>

<div id='tut-ppt'>
    <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="/docs/python/03Functions_Fibonacii.pdf" allowfullscreen></iframe>
    </div>
</div>

<hr/>



#### Iterative 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def fib(n):
    """Calculates fibonacci number of n Iteratively"""
    if n == 0 or n == 1:
        return n

    n1, n2 = 0, 1
    for i in range(n):
        n1, n2 = n1+n2, n1

    return n1


print(fib(6))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
8
</pre></div>

<hr/>




### Binary Search 

#### Recursive

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def binary_search(seq, value, start, end):

    if end < start:
        return f'No Such element {value} exists in list'

    mid = start + (end - start) // 2

    if seq[mid] == value:
        return f'Element {value} found at position {mid}'
    elif seq[mid] > value:
        return binary_search(seq, value, start, mid - 1)
    else:
        return binary_search(seq, value, mid + 1, end)


list1 = [8, 11, 17, 26, 35, 49, 52, 69, 74, 85]

print(binary_search(list1, 17, 0, len(list1)-1))
print(binary_search(list1, 5, 0, len(list1)-1))
print(binary_search(list1, 49, 0, len(list1)-1))
print(binary_search(list1, 89, 0, len(list1)-1))
print(binary_search(list1, 74, 0, len(list1)-1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Element 17 found at position 2
No Such element 5 exists in list
Element 49 found at position 5
No Such element 89 exists in list
Element 74 found at position 8
</pre></div>

<hr/>



#### Iterative

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def binary_search(seq, value, start, end):

    while end >= start:
        mid = start + (end - start) // 2

        if seq[mid] == value:
            return f'Element {value} found at position {mid}'
        elif seq[mid] > value:
            end = mid - 1
        else:
            start = mid + 1

    return f'No Such element {value} exists in list'


list1 = [8, 11, 17, 26, 35, 49, 52, 69, 74, 85]

print(binary_search(list1, 17, 0, len(list1)-1))
print(binary_search(list1, 5, 0, len(list1)-1))
print(binary_search(list1, 49, 0, len(list1)-1))
print(binary_search(list1, 89, 0, len(list1)-1))
print(binary_search(list1, 74, 0, len(list1)-1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Element 17 found at position 2
No Such element 5 exists in list
Element 49 found at position 5
No Such element 89 exists in list
Element 74 found at position 8
</pre></div>

<hr/>

{% include links.html %}
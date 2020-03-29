---
title: Control Flow
layout: tutorial
tags: [if-else, comparision_operators, identity_operator,  if-elif-else, logical_operators, ternary, chained_expression, lazy_evaluation, short-circuit_logic, bitwise_operators, operator_precedence, divmod(), pow(), nested_if-else]
sidebar: python_sidebar
permalink: python_control_flow.html
folder: python
prev_section: python_getting_started.html
prev_section_title: Getting Started
prev: 
prev_title: 
next: 
next_title:
next_section: python_while_loop.html
next_section_title: While Loop
---

## if-else

<p> Use indentation 4 spaces (or tab space) to create block of code in next line of if or else statement. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong>Print message based on sate of switch (if with boolean variable)</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

switch = True

if switch:
    print('switch is ON')
else:
    print('switch is OFF')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
switch is ON
</pre></div>

<hr/>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

switch = False

if switch:
    print('switch is ON')
else:
    print('switch is OFF')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
switch is OFF
</pre></div>

<hr/>








<div id="tut-content"> 
    <ul>
        <li> <strong> Togging the variable value inside if-else :</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

switch = False

print(f'switch before toggle : {switch}')

if switch:
    switch = False
else:
    switch = True

print(f'switch after toggle : {switch}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
switch before toggle : False
switch after toggle : True
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Using 'not' to toggle the switch :</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

switch = False

print(f'switch before toggle : {switch}')

if not switch:
    switch = True
else:
    switch = False

print(f'switch after toggle : {switch}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
switch before toggle : False
switch after toggle : True
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong>Non boolean values and their conditional evaluation :</strong> </li>
    </ul> 
</div>


Type    |   Evaluation
:--- | :---
 int      |  0 is evaluated as False, any other value positive or negative is evaluated as True
 str      |  empty string '' is evaluated as False , all other string are evaluated as True.
 float    |  Any float value equivalent to 0 such as 0.0, 0.000 or 0.000000 are evaluated to False, any other positive or negative value is evaluated as true.


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

i = -1

if i:
    print(f'{i} == True')
else:
    print(f'{i} == False')


i = 0

if i:
    print(f'{i} == True')
else:
    print(f'{i} == False')


f = 0.000100

if f:
    print(f'{f} == True')
else:
    print(f'{f} == False')


f = 0.0000000000000

if f:
    print(f'{f} == True')
else:
    print(f'{f} == False')


s = ' .'

if s:
    print(f'{s} == True')
else:
    print(f'{s} == False')


s = ''

if s:
    print(f'{s} == True')
else:
    print(f'{s} == False')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
-1 == True
0 == False
0.0001 == True
0.0 == False
 . == True
 == False
</pre></div>

<hr/>




## Identity Operators

Operator | Explanation
:---   | :---
is     | Returns True if two variables or object points to same location in memory or else False.
is not | Returns True if two variables or object does not points to same location in memory or else False.


<div id="tut-content"> 
    <ul>
        <li> <strong> Checking for absence of value (Null) : </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

box = None

if box is None:
    print('Box is Empty!')
else:
    print('Box is not Empty.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Box is Empty!
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>Non-empty box : </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

box = '1, 2, 3'

if box is None:
    print('Box is Empty!')
else:
    print('Box is not Empty.')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Box is not Empty.
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong>Checking for empty string : </strong> </li>
    </ul> 
</div>


<div id="tut-content"> 
    <ul>
        <li> <strong>Traditional Way (like other programming languages) </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

greetings = ''

if greetings is not None and greetings != '':
    print(greetings)
else:
    print('No greetings :(')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
No greetings :(
</pre></div>

<br/>



<div id="tut-content"> 
    <ul>
        <li> <strong>Python way : </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

greetings = ''

if greetings:
    print(greetings)
else:
    print('No greetings :(')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
No greetings :(
</pre></div>

<hr/>




## Comparision Operators

<p> For comparision of values for two variable or objects </p>

Operator | Meaning
:--- | :---
== | equals
!= | not equals
<  | less than 
>  | greater than
<= | less or equal
>= | greater or equal



<div id="tut-content"> 
    <ul>
        <li> <strong> Example :</strong> Result Evaluation </li>
        <li> <strong> input(prompt) :</strong> Reads line from console and return it into string. prompt argument is given string which displays given string when taking input. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

marks = int(input("Enter your marks -> "))

if marks >= 36:
    print("Congratulations! you have passed the exam")
else:
    print("you did not clear the exam")


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Enter your marks -> >? 45
Congratulations! you have passed the exam

Enter your marks -> >? 25
you did not clear the exam
</pre></div>

<hr/>



## if-elif-else

<p> Multiple conditions.</p>

<div id="tut-content"> 
    <ul>
        <li> <strong>Example : </strong>  Grade based on percentage</li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

marks = int(input("Enter your marks -> "))
if marks > 75:
    print('A+ Grade')
elif marks > 65:
    print('A Grade')
elif marks > 55:
    print('B+ Grade')
elif marks > 35:
    print('B Grade')
else:
    print('F Grade')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Enter your marks -> >? 66
A Grade

Enter your marks -> >? 50
B Grade

Enter your marks -> >? 89
A+ Grade
</pre></div>

<hr/>





## Logical Operators 

Operator | Explanation
:--- | :---
 and | logical and
 or  | logical or
 not | negation


 <div id="tut-content"> 
    <ul>
        <li> <strong>Greetings based on time of the day :</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import datetime
now = datetime.datetime.now()

currentHour = now.hour

if currentHour >= 5 and currentHour < 11:
    print(f"[{currentHour}] Good Morning!")
elif currentHour >= 11 and currentHour < 17:
    print(f"[{currentHour}] Good Afternoon!")
else:
    print(f"[{currentHour}] Good Evening!")

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[13] Good Afternoon!
</pre></div>

<hr/>








<div id="tut-content"> 
    <ul>
        <li> <strong>Ternary operator</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

a = 17
ans = 'Even Number'if a % 2 == 0 else 'Odd Number'
print(ans)


a = 22
ans = 'Even Number'if a % 2 == 0 else 'Odd Number'
print(ans)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Odd Number
Even Number
</pre></div>

<hr/>






<div id="tut-content"> 
    <ul>
        <li> <strong>Chained comparision :</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import datetime
now = datetime.datetime.now()

currentHour = now.hour

if 5 <= currentHour < 11:
    print(f"[{currentHour}]Good Morning!")
elif 11 <= currentHour < 17:
    print(f"[{currentHour}]Good Afternoon!")
else:
    print(f"[{currentHour}]Good Evening!")


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[13]Good Afternoon!
</pre></div>

<hr/>




{% include callout.html content="**Note** : Chained comparision is not limited to three values. " type="primary" %} 



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

result = 5 < 6 < 7 < 8 > 1
print(result)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
True
</pre></div>

<hr/>










<div id="tut-content"> 
    <ul>
        <li> <strong>Using and, or and not logical operator :</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

i = False
w = 12.122

# and
if i and w > 10.33:
    print('Test succeed')
else:
    print('Test failed')


# or
if i or w > 10.33:
    print('Test succeed')
else:
    print('Test failed')


# not
if not (i and w > 10.33):
    print('Test failed')
else:
    print('Test passed')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Test failed
Test succeed
Test failed
</pre></div>

<hr/>


## lazy evaluation [short-circuit logic]

<div id="tut-content"> 
    <ul>
        <li> In 'and' logical operation  expr1 and exp2, if expr1 is evaluated as False python will not evaluate expr2. </li>
        <li> For 'or' logical operation expr1 or expr2 , if expr1 is True it will return True without evaluating expr2. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

i = 15


def second_expression():
    print('Second Expression Evaluated')
    return True

print('\n<< and operator with first expression evaluated to True >>')
if i < 11 and second_expression():
    print('inside If')
else:
    print('inside Else')


print('\n<< and operator with first expression evaluated to False >>')
if i > 11 and second_expression():
    print('inside If')
else:
    print('inside Else')


print('\n<< or operator with first expression evaluated to True >>')
if i > 11 or second_expression():
    print('inside If')
else:
    print('inside Else')


print('\n<< or operator with first expression evaluated to False >>')
if i < 11 or second_expression():
    print('inside If')
else:
    print('inside Else')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<< and operator with first expression evaluated to True >>
inside Else

<< and operator with first expression evaluated to False >>
Second Expression Evaluated
inside If

<< or operator with first expression evaluated to True >>
inside If

<< or operator with first expression evaluated to False >>
Second Expression Evaluated
inside If
</pre></div>

<hr/>



## Bitwise Operators

operator    |           meaning
:--- | :---
     &        |        binary and
     \|        |        binary OR
     ^        |        binary XOR
     ~        |        binary 1's complement
     <<       |        binary left shift
     >>       |        binary right shift


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

x = 12
y = 10

print('X : {:b}'.format(x))
print('Y : {:b}'.format(y))
print('-'*20)

print(f'& : {x & y:b}')

print(f'| : {x | y:b}')

print(f'^ : {x ^ y:b}')

print(f'~ : {~x:b}')

print(f'<< : {x << 2:b}')

print(f'>> : {x >> 2:b}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
X : 1100
Y : 1010
--------------------
& : 1000
| : 1110
^ : 110
~ : -1101
<< : 110000
>> : 11
</pre></div>

<hr/>



## Operator precedence


prec |   operator            |    Description
:--- | :--- | :---
  1.  |   **                  |  Exponential
  2.  |   ~, +, -             |  1's complement, Unary plus, Unary minus
  3.  |   *, /, %, //         |  Multiplication, Division, Modulo, floor division
  4.  |   +, -                |  Addition, Subtraction
  5.  |   >>, <<              |  Right and Left bitwise shift
  6.  |   &                   |  Bitwise and
  7.  |   ^, \|                |  Bitwise exclusive Or , Bitwise Or
  8.  |   <=, <, >, >=        |  Comparision operators
  9.  |   +=, -=, *=, /=      |  Assignment operator
 10.  |   is, is not          |  Identity operator
 11.  |   in, not in          |  Membership operator
 12.  |   or, not , and       |  Logical operator


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

ans = ~78 + -12 // 78 ^ 12 * 89 & 12 % 2
print(ans)

# expected answer can be calculated from above table
# using parentheses to explicitly give precedence to operation

ans = (~78 + (-12 // 78)) ^ ((12 * 89) & (12 % 2))
print(ans)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
-80
-80
</pre></div>

<hr/>



## Builtin Operator function

### divmod(x, y)
<p> Returns Tuple(x//y, x%y). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(divmod(100, 8))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(12, 4)
</pre></div>

<hr/>



### pow(base, exp)
<p> Returns base^exp. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(pow(2, 6))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
64
</pre></div>

<hr/>



## nested if-elif-else

<p> <strong> Example :</strong> Courier charges calculation </p>

Type of Courier     | Fixed charge   |  regular service [Per Unit of weight]   |  express service [Per Unit of weight]
:--- | :--- | :--- | :--- 
 state               |     0.50       |        1.00        |      1.50
 national            |     0.75       |        1.25        |      1.75
 international       |     1.25       |        2.00        |      2.75


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

typeOfCourier = 'national'  # can be 'state', 'national', 'international'
weight = 12           # can be between 1 to 15
service = 'regular'   # can be 'regular' or 'express'

cost = 0.00

if typeOfCourier == 'state':
    print('State Parcel')
    cost += .50

    if service == 'regular':
        cost += 1*weight
    else:
        cost += 1.50*weight


elif typeOfCourier == 'national':
    print('National Parcel')
    cost += 0.75

    if service == 'regular':
        cost += 1.25*weight
    else:
        cost += 1.75*weight

else:
    print('International Parcel')
    cost += 1.25

    if service == 'regular':
        cost += 2.00*weight
    else:
        cost += 2.75*weight

print("Your total cost is -> ", cost)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
National Parcel
Your total cost is ->  15.75
</pre></div>

<hr/>



{% include links.html %}
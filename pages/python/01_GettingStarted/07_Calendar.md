---
title: Calendar
layout: tutorial
tags: []
sidebar: python_sidebar
permalink:  python_calendar.html
folder: python
prev: python_date_time_datetime.html
prev_title: Date, Time and DateTime
next: 
next_title:
next_section: python_control_flow.html
next_section_title: Control Flow
summary: Calendar module
---

## Calendar Module

<p> Calendar module provides useful calendar functions. </p>

<div id="tut-content"> 
    <ul>
        <li> It outputs calendar as, cal program in UNIX. </li>
        <li> Calendar function and classes uses Gregorian calendar which can be extended in both directions indefinitely. </li>
        <li> It provides iterators to iterate through calendar days. </li>
        <li> By default Monday is first day of the week and sunday is last day of week. </li>
    </ul> 
</div>


### Functions



#### isleap(year)

<p> Returns True if given year is a leap year.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
print(cal.isleap(2020))
print(cal.isleap(2021))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
True
False
</pre></div>

<hr/>










#### leapdays(yStart,yEnd)

<p> Returns leap days between yearStart and yearEnd.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
print(cal.leapdays(2000, 2020))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
5
</pre></div>

<hr/>










#### weekday(year, month, day)

<p> Returns Int representing day of week, 0 for Monday and 6 for Sunday.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
print('Sunday ->', cal.weekday(2020, 3, 22))
print('Monday ->', cal.weekday(2020, 3, 23))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Sunday -> 6
Monday -> 0
</pre></div>

<hr/>




#### weekheader(n)

<p> Returns weekdays names with given n length.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
print(cal.weekheader(3))
print(cal.weekheader(10))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Mon Tue Wed Thu Fri Sat Sun
  Monday    Tuesday   Wednesday   Thursday    Friday    Saturday    Sunday  

</pre></div>

<hr/>




#### monthrange(year, month)

<p> Returns Tuple(wd,days) wd: week day of the first day of month, days : no of days in the month.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
print(cal.monthrange(2020, 3))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(6, 31)
</pre></div>

<hr/>



#### monthcalendar(year, month)

<p> Returns list of weeks of a month for given year, each weeks represented in list containing Int day of month and List index of week represent day of week.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
print(cal.monthcalendar(2020, 3))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[[0, 0, 0, 0, 0, 0, 1], [2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22], [23, 24, 25, 26, 27, 28, 29], [30, 31, 0, 0, 0, 0, 0]]
</pre></div>

<hr/>



#### calendar(year[, w[, l[, c]]])

<p>Returns multi-line string containing 3-columned calendar for year.</p>


<div id="tut-content"> 
    <ul>
        <li> <strong> w: </strong> width of column </li>
        <li> <strong> l: </strong> lines per week </li>
        <li> <strong> c: </strong> spaces between month</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
print(cal.calendar(2020))

print(f'\n{"-------------"*5}\n')
print(cal.calendar(2020, 2, 2, 1))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
                                 2020
      January                   February                   March
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
       1  2  3  4  5                      1  2                         1
 6  7  8  9 10 11 12       3  4  5  6  7  8  9       2  3  4  5  6  7  8
13 14 15 16 17 18 19      10 11 12 13 14 15 16       9 10 11 12 13 14 15
20 21 22 23 24 25 26      17 18 19 20 21 22 23      16 17 18 19 20 21 22
27 28 29 30 31            24 25 26 27 28 29         23 24 25 26 27 28 29
                                                    30 31
       April                      May                       June
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
       1  2  3  4  5                   1  2  3       1  2  3  4  5  6  7
 6  7  8  9 10 11 12       4  5  6  7  8  9 10       8  9 10 11 12 13 14
13 14 15 16 17 18 19      11 12 13 14 15 16 17      15 16 17 18 19 20 21
20 21 22 23 24 25 26      18 19 20 21 22 23 24      22 23 24 25 26 27 28
27 28 29 30               25 26 27 28 29 30 31      29 30
        July                     August                  September
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
       1  2  3  4  5                      1  2          1  2  3  4  5  6
 6  7  8  9 10 11 12       3  4  5  6  7  8  9       7  8  9 10 11 12 13
13 14 15 16 17 18 19      10 11 12 13 14 15 16      14 15 16 17 18 19 20
20 21 22 23 24 25 26      17 18 19 20 21 22 23      21 22 23 24 25 26 27
27 28 29 30 31            24 25 26 27 28 29 30      28 29 30
                          31
      October                   November                  December
Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
          1  2  3  4                         1          1  2  3  4  5  6
 5  6  7  8  9 10 11       2  3  4  5  6  7  8       7  8  9 10 11 12 13
12 13 14 15 16 17 18       9 10 11 12 13 14 15      14 15 16 17 18 19 20
19 20 21 22 23 24 25      16 17 18 19 20 21 22      21 22 23 24 25 26 27
26 27 28 29 30 31         23 24 25 26 27 28 29      28 29 30 31
                          30

-----------------------------------------------------------------

                              2020


      January               February               March

Mo Tu We Th Fr Sa Su  Mo Tu We Th Fr Sa Su  Mo Tu We Th Fr Sa Su

       1  2  3  4  5                  1  2                     1

 6  7  8  9 10 11 12   3  4  5  6  7  8  9   2  3  4  5  6  7  8

13 14 15 16 17 18 19  10 11 12 13 14 15 16   9 10 11 12 13 14 15

20 21 22 23 24 25 26  17 18 19 20 21 22 23  16 17 18 19 20 21 22

27 28 29 30 31        24 25 26 27 28 29     23 24 25 26 27 28 29

                                            30 31

       April                  May                   June

Mo Tu We Th Fr Sa Su  Mo Tu We Th Fr Sa Su  Mo Tu We Th Fr Sa Su

       1  2  3  4  5               1  2  3   1  2  3  4  5  6  7

 6  7  8  9 10 11 12   4  5  6  7  8  9 10   8  9 10 11 12 13 14

13 14 15 16 17 18 19  11 12 13 14 15 16 17  15 16 17 18 19 20 21

20 21 22 23 24 25 26  18 19 20 21 22 23 24  22 23 24 25 26 27 28

27 28 29 30           25 26 27 28 29 30 31  29 30

        July                 August              September
        
Mo Tu We Th Fr Sa Su  Mo Tu We Th Fr Sa Su  Mo Tu We Th Fr Sa Su

       1  2  3  4  5                  1  2      1  2  3  4  5  6

 6  7  8  9 10 11 12   3  4  5  6  7  8  9   7  8  9 10 11 12 13

13 14 15 16 17 18 19  10 11 12 13 14 15 16  14 15 16 17 18 19 20

20 21 22 23 24 25 26  17 18 19 20 21 22 23  21 22 23 24 25 26 27

27 28 29 30 31        24 25 26 27 28 29 30  28 29 30

                      31

      October               November              December

Mo Tu We Th Fr Sa Su  Mo Tu We Th Fr Sa Su  Mo Tu We Th Fr Sa Su

          1  2  3  4                     1      1  2  3  4  5  6

 5  6  7  8  9 10 11   2  3  4  5  6  7  8   7  8  9 10 11 12 13
 
12 13 14 15 16 17 18   9 10 11 12 13 14 15  14 15 16 17 18 19 20

19 20 21 22 23 24 25  16 17 18 19 20 21 22  21 22 23 24 25 26 27

26 27 28 29 30 31     23 24 25 26 27 28 29  28 29 30 31

                      30

</pre></div>

<hr/>



#### month(theyear, themonth, w=0, l=0)

<p>  Returns multi-line string for given month of the year.</p>

<div id="tut-content"> 
    <ul>
        <li> <strong> w: </strong> width of column </li>
        <li> <strong> l: </strong> lines per week </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
print(cal.month(2020, 3))
print(cal.month(2020, 3, 3, 2))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
     March 2020
Mo Tu We Th Fr Sa Su
                   1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30 31

-----------------------------------------------------------------

                March 2020

 Mon   Tue   Wed   Thu   Fri   Sat   Sun

                                       1

   2     3     4     5     6     7     8

   9    10    11    12    13    14    15

  16    17    18    19    20    21    22

  23    24    25    26    27    28    29

  30    31


</pre></div>

<hr/>






## Calendar Class

### Constructor

<p id="tut-cons"> Calendar(firstweekday=0) </p>

<p>  Returns object of calendar class. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>firstweekday : </strong> By default firstweekday set to 0 if no argument is given which makes Monday as the first day of the week. If any Value pass passed 0 = Monday .. 6 = Sunday it is taken as first day of the week.</li>
    </ul> 
</div>



### Methods


#### iterweekdays()

<p> Returns an iterator for the days of week depending of firstweekday set while creating an Object. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal

calD = cal.Calendar()
cal1 = cal.Calendar(firstweekday=6)

print('Default Calendar')
for day in calD.iterweekdays():
    print(day)

print('\nSunday as first Day of week')
for day in cal1.iterweekdays():
    print(day)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Default Calendar
0
1
2
3
4
5
6

Sunday as first Day of week
6
0
1
2
3
4
5
</pre></div>

<hr/>












#### itermonthdates(year, month)

<p> Returns iterator of datetime.date object for given month and year </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for day in cal1.itermonthdates(2020, 3):
    print(day, type(day))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-01 <class 'datetime.date'>
2020-03-02 <class 'datetime.date'>
2020-03-03 <class 'datetime.date'>
2020-03-04 <class 'datetime.date'>
2020-03-05 <class 'datetime.date'>
2020-03-06 <class 'datetime.date'>
2020-03-07 <class 'datetime.date'>
2020-03-08 <class 'datetime.date'>
2020-03-09 <class 'datetime.date'>
2020-03-10 <class 'datetime.date'>
2020-03-11 <class 'datetime.date'>
2020-03-12 <class 'datetime.date'>
2020-03-13 <class 'datetime.date'>
2020-03-14 <class 'datetime.date'>
2020-03-15 <class 'datetime.date'>
2020-03-16 <class 'datetime.date'>
2020-03-17 <class 'datetime.date'>
2020-03-18 <class 'datetime.date'>
2020-03-19 <class 'datetime.date'>
2020-03-20 <class 'datetime.date'>
2020-03-21 <class 'datetime.date'>
2020-03-22 <class 'datetime.date'>
2020-03-23 <class 'datetime.date'>
2020-03-24 <class 'datetime.date'>
2020-03-25 <class 'datetime.date'>
2020-03-26 <class 'datetime.date'>
2020-03-27 <class 'datetime.date'>
2020-03-28 <class 'datetime.date'>
2020-03-29 <class 'datetime.date'>
2020-03-30 <class 'datetime.date'>
2020-03-31 <class 'datetime.date'>
2020-04-01 <class 'datetime.date'>
2020-04-02 <class 'datetime.date'>
2020-04-03 <class 'datetime.date'>
2020-04-04 <class 'datetime.date'>

</pre></div>

<hr/>






#### itermonthdays2(year, month)

<p> Returns iterator of tuple(Date, dayOfWeek) for given month and year. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for day in cal1.itermonthdays2(2020, 3):
    print(day, type(day))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(1, 6) <class 'tuple'>
(2, 0) <class 'tuple'>
(3, 1) <class 'tuple'>
(4, 2) <class 'tuple'>
(5, 3) <class 'tuple'>
(6, 4) <class 'tuple'>
(7, 5) <class 'tuple'>
(8, 6) <class 'tuple'>
(9, 0) <class 'tuple'>
(10, 1) <class 'tuple'>
(11, 2) <class 'tuple'>
(12, 3) <class 'tuple'>
(13, 4) <class 'tuple'>
(14, 5) <class 'tuple'>
(15, 6) <class 'tuple'>
(16, 0) <class 'tuple'>
(17, 1) <class 'tuple'>
(18, 2) <class 'tuple'>
(19, 3) <class 'tuple'>
(20, 4) <class 'tuple'>
(21, 5) <class 'tuple'>
(22, 6) <class 'tuple'>
(23, 0) <class 'tuple'>
(24, 1) <class 'tuple'>
(25, 2) <class 'tuple'>
(26, 3) <class 'tuple'>
(27, 4) <class 'tuple'>
(28, 5) <class 'tuple'>
(29, 6) <class 'tuple'>
(30, 0) <class 'tuple'>
(31, 1) <class 'tuple'>
(0, 2) <class 'tuple'>
(0, 3) <class 'tuple'>
(0, 4) <class 'tuple'>
(0, 5) <class 'tuple'>


</pre></div>

<hr/>




#### itermonthdays2(year, month)

<p> Returns iterator of tuple(Date, dayOfWeek) for given month and year. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for day in cal1.itermonthdays2(2020, 3):
    print(day, type(day))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(1, 6) <class 'tuple'>
(2, 0) <class 'tuple'>
(3, 1) <class 'tuple'>
(4, 2) <class 'tuple'>
(5, 3) <class 'tuple'>
(6, 4) <class 'tuple'>
(7, 5) <class 'tuple'>
(8, 6) <class 'tuple'>
(9, 0) <class 'tuple'>
(10, 1) <class 'tuple'>
(11, 2) <class 'tuple'>
(12, 3) <class 'tuple'>
(13, 4) <class 'tuple'>
(14, 5) <class 'tuple'>
(15, 6) <class 'tuple'>
(16, 0) <class 'tuple'>
(17, 1) <class 'tuple'>
(18, 2) <class 'tuple'>
(19, 3) <class 'tuple'>
(20, 4) <class 'tuple'>
(21, 5) <class 'tuple'>
(22, 6) <class 'tuple'>
(23, 0) <class 'tuple'>
(24, 1) <class 'tuple'>
(25, 2) <class 'tuple'>
(26, 3) <class 'tuple'>
(27, 4) <class 'tuple'>
(28, 5) <class 'tuple'>
(29, 6) <class 'tuple'>
(30, 0) <class 'tuple'>
(31, 1) <class 'tuple'>
(0, 2) <class 'tuple'>
(0, 3) <class 'tuple'>
(0, 4) <class 'tuple'>
(0, 5) <class 'tuple'>


</pre></div>

<hr/>




#### itermonthdays3(year, month)

<p> Returns Tuple(year, month, day) for given month and year. It completes the week even if it is spanning to other month. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for day in cal1.itermonthdays3(2020, 3):
    print(day, type(day))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(2020, 3, 1) <class 'tuple'>
(2020, 3, 2) <class 'tuple'>
(2020, 3, 3) <class 'tuple'>
(2020, 3, 4) <class 'tuple'>
(2020, 3, 5) <class 'tuple'>
(2020, 3, 6) <class 'tuple'>
(2020, 3, 7) <class 'tuple'>
(2020, 3, 8) <class 'tuple'>
(2020, 3, 9) <class 'tuple'>
(2020, 3, 10) <class 'tuple'>
(2020, 3, 11) <class 'tuple'>
(2020, 3, 12) <class 'tuple'>
(2020, 3, 13) <class 'tuple'>
(2020, 3, 14) <class 'tuple'>
(2020, 3, 15) <class 'tuple'>
(2020, 3, 16) <class 'tuple'>
(2020, 3, 17) <class 'tuple'>
(2020, 3, 18) <class 'tuple'>
(2020, 3, 19) <class 'tuple'>
(2020, 3, 20) <class 'tuple'>
(2020, 3, 21) <class 'tuple'>
(2020, 3, 22) <class 'tuple'>
(2020, 3, 23) <class 'tuple'>
(2020, 3, 24) <class 'tuple'>
(2020, 3, 25) <class 'tuple'>
(2020, 3, 26) <class 'tuple'>
(2020, 3, 27) <class 'tuple'>
(2020, 3, 28) <class 'tuple'>
(2020, 3, 29) <class 'tuple'>
(2020, 3, 30) <class 'tuple'>
(2020, 3, 31) <class 'tuple'>
(2020, 4, 1) <class 'tuple'>
(2020, 4, 2) <class 'tuple'>
(2020, 4, 3) <class 'tuple'>
(2020, 4, 4) <class 'tuple'>

</pre></div>

<hr/>



#### itermonthdays4(year, month)

<p> Returns Tuple(year, month, day, dayofweek) for given month and year. It completes the week even if it is spanning to other month. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for day in cal1.itermonthdays4(2020, 3):
    print(day, type(day))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(2020, 3, 1, 6) <class 'tuple'>
(2020, 3, 2, 0) <class 'tuple'>
(2020, 3, 3, 1) <class 'tuple'>
(2020, 3, 4, 2) <class 'tuple'>
(2020, 3, 5, 3) <class 'tuple'>
(2020, 3, 6, 4) <class 'tuple'>
(2020, 3, 7, 5) <class 'tuple'>
(2020, 3, 8, 6) <class 'tuple'>
(2020, 3, 9, 0) <class 'tuple'>
(2020, 3, 10, 1) <class 'tuple'>
(2020, 3, 11, 2) <class 'tuple'>
(2020, 3, 12, 3) <class 'tuple'>
(2020, 3, 13, 4) <class 'tuple'>
(2020, 3, 14, 5) <class 'tuple'>
(2020, 3, 15, 6) <class 'tuple'>
(2020, 3, 16, 0) <class 'tuple'>
(2020, 3, 17, 1) <class 'tuple'>
(2020, 3, 18, 2) <class 'tuple'>
(2020, 3, 19, 3) <class 'tuple'>
(2020, 3, 20, 4) <class 'tuple'>
(2020, 3, 21, 5) <class 'tuple'>
(2020, 3, 22, 6) <class 'tuple'>
(2020, 3, 23, 0) <class 'tuple'>
(2020, 3, 24, 1) <class 'tuple'>
(2020, 3, 25, 2) <class 'tuple'>
(2020, 3, 26, 3) <class 'tuple'>
(2020, 3, 27, 4) <class 'tuple'>
(2020, 3, 28, 5) <class 'tuple'>
(2020, 3, 29, 6) <class 'tuple'>
(2020, 3, 30, 0) <class 'tuple'>
(2020, 3, 31, 1) <class 'tuple'>
(2020, 4, 1, 2) <class 'tuple'>
(2020, 4, 2, 3) <class 'tuple'>
(2020, 4, 3, 4) <class 'tuple'>
(2020, 4, 4, 5) <class 'tuple'>

</pre></div>

<hr/>


#### itermonthdays(year, month)

<p> Returns iterator of int representing date of the month for given year. It returns 0 to start the week with given first day of the week or to complete the week at the end of month. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for day in cal1.itermonthdays(2020, 3):
    print(day, type(day))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
1 <class 'int'>
2 <class 'int'>
3 <class 'int'>
4 <class 'int'>
5 <class 'int'>
6 <class 'int'>
7 <class 'int'>
8 <class 'int'>
9 <class 'int'>
10 <class 'int'>
11 <class 'int'>
12 <class 'int'>
13 <class 'int'>
14 <class 'int'>
15 <class 'int'>
16 <class 'int'>
17 <class 'int'>
18 <class 'int'>
19 <class 'int'>
20 <class 'int'>
21 <class 'int'>
22 <class 'int'>
23 <class 'int'>
24 <class 'int'>
25 <class 'int'>
26 <class 'int'>
27 <class 'int'>
28 <class 'int'>
29 <class 'int'>
30 <class 'int'>
31 <class 'int'>
0 <class 'int'>
0 <class 'int'>
0 <class 'int'>
0 <class 'int'>

</pre></div>

<hr/>




#### monthdatescalendar(year, month)

<p> Returns iterator of list, each list containing 7 datetime.date object representing a week. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for week in cal1.monthdatescalendar(2020, 3):
    print(week, type(week))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[datetime.date(2020, 3, 1), datetime.date(2020, 3, 2), datetime.date(2020, 3, 3), datetime.date(2020, 3, 4), datetime.date(2020, 3, 5), datetime.date(2020, 3, 6), datetime.date(2020, 3, 7)] <class 'list'>
[datetime.date(2020, 3, 8), datetime.date(2020, 3, 9), datetime.date(2020, 3, 10), datetime.date(2020, 3, 11), datetime.date(2020, 3, 12), datetime.date(2020, 3, 13), datetime.date(2020, 3, 14)] <class 'list'>
[datetime.date(2020, 3, 15), datetime.date(2020, 3, 16), datetime.date(2020, 3, 17), datetime.date(2020, 3, 18), datetime.date(2020, 3, 19), datetime.date(2020, 3, 20), datetime.date(2020, 3, 21)] <class 'list'>
[datetime.date(2020, 3, 22), datetime.date(2020, 3, 23), datetime.date(2020, 3, 24), datetime.date(2020, 3, 25), datetime.date(2020, 3, 26), datetime.date(2020, 3, 27), datetime.date(2020, 3, 28)] <class 'list'>
[datetime.date(2020, 3, 29), datetime.date(2020, 3, 30), datetime.date(2020, 3, 31), datetime.date(2020, 4, 1), datetime.date(2020, 4, 2), datetime.date(2020, 4, 3), datetime.date(2020, 4, 4)] <class 'list'>

</pre></div>

<hr/>



#### monthdays2calendar(year, month)

<p> Returns iterator of list, each list containing 7 tuple(date, dayOfWeek) representing a week. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for week in cal1.monthdays2calendar(2020, 3):
    print(week, type(week))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[(1, 6), (2, 0), (3, 1), (4, 2), (5, 3), (6, 4), (7, 5)] <class 'list'>
[(8, 6), (9, 0), (10, 1), (11, 2), (12, 3), (13, 4), (14, 5)] <class 'list'>
[(15, 6), (16, 0), (17, 1), (18, 2), (19, 3), (20, 4), (21, 5)] <class 'list'>
[(22, 6), (23, 0), (24, 1), (25, 2), (26, 3), (27, 4), (28, 5)] <class 'list'>
[(29, 6), (30, 0), (31, 1), (0, 2), (0, 3), (0, 4), (0, 5)] <class 'list'>

</pre></div>

<hr/>


#### monthdays2calendar(year, month)

<p> Returns iterator of list, each list contains 7 Int representing date of the month. Returns 0 for adjusting week as per first day of week at beginning or at the end of the month. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for week in cal1.monthdayscalendar(2020, 3):
    print(week, type(week))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[1, 2, 3, 4, 5, 6, 7] <class 'list'>
[8, 9, 10, 11, 12, 13, 14] <class 'list'>
[15, 16, 17, 18, 19, 20, 21] <class 'list'>
[22, 23, 24, 25, 26, 27, 28] <class 'list'>
[29, 30, 31, 0, 0, 0, 0] <class 'list'>

</pre></div>

<hr/>



#### yeardatescalendar(year[, width])

<p> Returns date objects of given year in listOfYear(listofMonth(listofWeek(Date, Date, Date, Date, Date, Date, Date))) format. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

print(cal1.yeardatescalendar(2020))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[[[[datetime.date(2019, 12, 29), datetime.date(2019, 12, 30), datetime.date(2019, 12, 31), datetime.date(2020, 1, 1), datetime.date(2020, 1, 2), datetime.date(2020, 1, 3), datetime.date(2020, 1, 4)], [datetime.date(2020, 1, 5), datetime.date(2020, 1, 6), datetime.date(2020, 1, 7), datetime.date(2020, 1, 8), datetime.date(2020, 1, 9), datetime.date(2020, 1, 10), datetime.date(2020, 1, 11)], [datetime.date(2020, 1, 12), datetime.date(2020, 1, 13), datetime.date(2020, 1, 14), datetime.date(2020, 1, 15), datetime.date(2020, 1, 16), datetime.date(2020, 1, 17), datetime.date(2020, 1, 18)], [datetime.date(2020, 1, 19), datetime.date(2020, 1, 20), datetime.date(2020, 1, 21), datetime.date(2020, 1, 22), datetime.date(2020, 1, 23), datetime.date(2020, 1, 24), datetime.date(2020, 1, 25)], [datetime.date(2020, 1, 26), datetime.date(2020, 1, 27), datetime.date(2020, 1, 28), datetime.date(2020, 1, 29), datetime.date(2020, 1, 30), datetime.date(2020, 1, 31), datetime.date(2020, 2, 1)]], [[datetime.date(2020, 1, 26), datetime.date(2020, 1, 27), datetime.date(2020, 1, 28), datetime.date(2020, 1, 29), datetime.date(2020, 1, 30), datetime.date(2020, 1, 31), datetime.date(2020, 2, 1)], [datetime.date(2020, 2, 2), datetime.date(2020, 2, 3), datetime.date(2020, 2, 4), datetime.date(2020, 2, 5), datetime.date(2020, 2, 6), datetime.date(2020, 2, 7), datetime.date(2020, 2, 8)], [datetime.date(2020, 2, 9), datetime.date(2020, 2, 10), datetime.date(2020, 2, 11), datetime.date(2020, 2, 12), datetime.date(2020, 2, 13), datetime.date(2020, 2, 14), datetime.date(2020, 2, 15)], [datetime.date(2020, 2, 16), datetime.date(2020, 2, 17), datetime.date(2020, 2, 18), datetime.date(2020, 2, 19), datetime.date(2020, 2, 20), datetime.date(2020, 2, 21), datetime.date(2020, 2, 22)], [datetime.date(2020, 2, 23), datetime.date(2020, 2, 24), datetime.date(2020, 2, 25), datetime.date(2020, 2, 26), datetime.date(2020, 2, 27), datetime.date(2020, 2, 28), datetime.date(2020, 2, 29)]], .........................................................


</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Iterating through each week of given year.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for year in cal1.yeardatescalendar(2020):
    for month in year:
        for week in month:
            print(week, type(week))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[datetime.date(2019, 12, 29), datetime.date(2019, 12, 30), datetime.date(2019, 12, 31), datetime.date(2020, 1, 1), datetime.date(2020, 1, 2), datetime.date(2020, 1, 3), datetime.date(2020, 1, 4)] <class 'list'>
[datetime.date(2020, 1, 5), datetime.date(2020, 1, 6), datetime.date(2020, 1, 7), datetime.date(2020, 1, 8), datetime.date(2020, 1, 9), datetime.date(2020, 1, 10), datetime.date(2020, 1, 11)] <class 'list'>
[datetime.date(2020, 1, 12), datetime.date(2020, 1, 13), datetime.date(2020, 1, 14), datetime.date(2020, 1, 15), datetime.date(2020, 1, 16), datetime.date(2020, 1, 17), datetime.date(2020, 1, 18)] <class 'list'>
[datetime.date(2020, 1, 19), datetime.date(2020, 1, 20), datetime.date(2020, 1, 21), datetime.date(2020, 1, 22), datetime.date(2020, 1, 23), datetime.date(2020, 1, 24), datetime.date(2020, 1, 25)] <class 'list'>
[datetime.date(2020, 1, 26), datetime.date(2020, 1, 27), datetime.date(2020, 1, 28), datetime.date(2020, 1, 29), datetime.date(2020, 1, 30), datetime.date(2020, 1, 31), datetime.date(2020, 2, 1)] <class 'list'>
[datetime.date(2020, 1, 26), datetime.date(2020, 1, 27), datetime.date(2020, 1, 28), datetime.date(2020, 1, 29), datetime.date(2020, 1, 30), datetime.date(2020, 1, 31), datetime.date(2020, 2, 1)] <class 'list'>
[datetime.date(2020, 2, 2), datetime.date(2020, 2, 3), datetime.date(2020, 2, 4), datetime.date(2020, 2, 5), datetime.date(2020, 2, 6), datetime.date(2020, 2, 7), datetime.date(2020, 2, 8)] <class 'list'>
[datetime.date(2020, 2, 9), datetime.date(2020, 2, 10), datetime.date(2020, 2, 11), datetime.date(2020, 2, 12), datetime.date(2020, 2, 13), datetime.date(2020, 2, 14), datetime.date(2020, 2, 15)] <class 'list'>
[datetime.date(2020, 2, 16), datetime.date(2020, 2, 17), datetime.date(2020, 2, 18), datetime.date(2020, 2, 19), datetime.date(2020, 2, 20), datetime.date(2020, 2, 21), datetime.date(2020, 2, 22)] <class 'list'>
[datetime.date(2020, 2, 23), datetime.date(2020, 2, 24), datetime.date(2020, 2, 25), datetime.date(2020, 2, 26), datetime.date(2020, 2, 27), datetime.date(2020, 2, 28), datetime.date(2020, 2, 29)] <class 'list'>
[datetime.date(2020, 3, 1), datetime.date(2020, 3, 2), datetime.date(2020, 3, 3), datetime.date(2020, 3, 4), datetime.date(2020, 3, 5), datetime.date(2020, 3, 6), datetime.date(2020, 3, 7)] <class 'list'>
[datetime.date(2020, 3, 8), datetime.date(2020, 3, 9), datetime.date(2020, 3, 10), datetime.date(2020, 3, 11), datetime.date(2020, 3, 12), datetime.date(2020, 3, 13), datetime.date(2020, 3, 14)] <class 'list'>
[datetime.date(2020, 3, 15), datetime.date(2020, 3, 16), datetime.date(2020, 3, 17), datetime.date(2020, 3, 18), datetime.date(2020, 3, 19), datetime.date(2020, 3, 20), datetime.date(2020, 3, 21)] <class 'list'>
[datetime.date(2020, 3, 22), datetime.date(2020, 3, 23), datetime.date(2020, 3, 24), datetime.date(2020, 3, 25), datetime.date(2020, 3, 26), datetime.date(2020, 3, 27), datetime.date(2020, 3, 28)] <class 'list'>
..............................................
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong> Iterating through each day of given year.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for year in cal1.yeardatescalendar(2020):
    for month in year:
        for week in month:
            for day in week:
                print(day, type(day))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2019-12-29 <class 'datetime.date'>
2019-12-30 <class 'datetime.date'>
2019-12-31 <class 'datetime.date'>
2020-01-01 <class 'datetime.date'>
2020-01-02 <class 'datetime.date'>
2020-01-03 <class 'datetime.date'>
2020-01-04 <class 'datetime.date'>
2020-01-05 <class 'datetime.date'>
2020-01-06 <class 'datetime.date'>
2020-01-07 <class 'datetime.date'>
2020-01-08 <class 'datetime.date'>
2020-01-09 <class 'datetime.date'>
2020-01-10 <class 'datetime.date'>
2020-01-11 <class 'datetime.date'>
2020-01-12 <class 'datetime.date'>
2020-01-13 <class 'datetime.date'>
..............................................
</pre></div>

<hr/>






#### yeardayscalendar(year[, width])

<p> Returns iterator of int representing day in listOfYear(listofMonth(listofWeek(int, int, int, int, int, int, int))) format. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

print(cal1.yeardatescalendar(2020))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[[[[0, 0, 0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24, 25], [26, 27, 28, 29, 30, 31, 0]], [[0, 0, 0, 0, 0, 0, 1], [2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22], [23, 24, 25, 26, 27, 28, 29]], [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28], [29, 30, 31, 0, 0, 0, 0]]], [[[0, 0, 0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24, 25], [26, 27, 28, 29, 30, 0, 0]], [[0, 0, 0, 0, 0, 1, 2], [3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16], [17, 18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29, 30], [31, 0, 0, 0, 0, 0, 0]], [[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 0, 0, 0, 0]]], [[[0, 0, 0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24, 25], [26, 27, 28, 29, 30, 31, 0]], [[0, 0, 0, 0, 0, 0, 1], [2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22], [23, 24, 25, 26, 27, 28, 29], [30, 31, 0, 0, 0, 0, 0]], [[0, 0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18, 19], [20, 21, 22, 23, 24, 25, 26], .........................................................


</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong> Iterating through each week of given year.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for year in cal1.yeardayscalendar(2020):
    for month in year:
        for week in month:
            print(week, type(week))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[0, 0, 0, 1, 2, 3, 4] <class 'list'>
[5, 6, 7, 8, 9, 10, 11] <class 'list'>
[12, 13, 14, 15, 16, 17, 18] <class 'list'>
[19, 20, 21, 22, 23, 24, 25] <class 'list'>
[26, 27, 28, 29, 30, 31, 0] <class 'list'>
[0, 0, 0, 0, 0, 0, 1] <class 'list'>
[2, 3, 4, 5, 6, 7, 8] <class 'list'>
[9, 10, 11, 12, 13, 14, 15] <class 'list'>
[16, 17, 18, 19, 20, 21, 22] <class 'list'>
[23, 24, 25, 26, 27, 28, 29] <class 'list'>
[1, 2, 3, 4, 5, 6, 7] <class 'list'>
[8, 9, 10, 11, 12, 13, 14] <class 'list'>
[15, 16, 17, 18, 19, 20, 21] <class 'list'>
[22, 23, 24, 25, 26, 27, 28] <class 'list'>
[29, 30, 31, 0, 0, 0, 0] <class 'list'>
[0, 0, 0, 1, 2, 3, 4] <class 'list'>

..............................................
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong> Iterating through each day of given year.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

for year in cal1.yeardayscalendar(2020):
    for month in year:
        for week in month:
            for day in week:
                print(day, type(day))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
0 <class 'int'>
0 <class 'int'>
0 <class 'int'>
1 <class 'int'>
2 <class 'int'>
3 <class 'int'>
4 <class 'int'>
5 <class 'int'>
6 <class 'int'>
7 <class 'int'>
8 <class 'int'>
9 <class 'int'>
10 <class 'int'>
11 <class 'int'>
12 <class 'int'>
13 <class 'int'>
14 <class 'int'>
15 <class 'int'>
16 <class 'int'>
17 <class 'int'>
18 <class 'int'>
19 <class 'int'>
20 <class 'int'>
..............................................
</pre></div>

<hr/>





#### yeardays2calendar(year[, width])

<p> Returns iterator of tuple(dayOfMonth, dayofWeek) representing day in listOfYear(listofMonth(listofWeek(tuple, tuple, tuple, tuple, tuple, tuple, tuple))) format. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import calendar as cal
cal1 = cal.Calendar(firstweekday=6)

print(cal1.yeardatescalendar(2020))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[[[[(0, 6), (0, 0), (0, 1), (1, 2), (2, 3), (3, 4), (4, 5)], [(5, 6), (6, 0), (7, 1), (8, 2), (9, 3), (10, 4), (11, 5)], [(12, 6), (13, 0), (14, 1), (15, 2), (16, 3), (17, 4), (18, 5)], [(19, 6), (20, 0), (21, 1), (22, 2), (23, 3), (24, 4), (25, 5)], [(26, 6), (27, 0), (28, 1), (29, 2), (30, 3), (31, 4), (0, 5)]], [[(0, 6), (0, 0), (0, 1), (0, 2), (0, 3), (0, 4), (1, 5)], [(2, 6), (3, 0), (4, 1), (5, 2), (6, 3), (7, 4), (8, 5)], [(9, 6), (10, 0), (11, 1), (12, 2), (13, 3), (14, 4), (15, 5)], [(16, 6), (17, 0), (18, 1), (19, 2), (20, 3), (21, 4), (22, 5)], [(23, 6), (24, 0), (25, 1), (26, 2), (27, 3), (28, 4), (29, 5)]], [[(1, 6), (2, 0), (3, 1), (4, 2), (5, 3), (6, 4), (7, 5)], [(8, 6), (9, 0), (10, 1), (11, 2), (12, 3), (13, 4), (14, 5)], [(15, 6), (16, 0), (17, 1), (18, 2), (19, 3), (20, 4), (21, 5)], [(22, 6), (23, 0), (24, 1), (25, 2), (26, 3), (27, 4), (28, 5)], [(29, 6), (30, 0), (31, 1), (0, 2), (0, 3), (0, 4), (0, 5)]]], [[[(0, 6), (0, 0), (0, 1), (1, 2), (2, 3), (3, 4), (4, 5)], [(5, 6), (6, 0), (7, 1), (8, 2), (9, 3), (10, 4), (11, 5)], [(12, 6), (13, 0), (14, 1), (15, 2), (16, 3), (17, 4), (18, 5)], [(19, 6), (20, 0), (21, 1), (22, 2), (23, 3), (24, 4), (25, 5)], [(26, 6), (27, 0), (28, 1), (29, 2), (30, 3), (0, 4), (0, 5)]], [[(0, 6), (0, 0), (0, 1), (0, 2), (0, 3), (1, 4), (2, 5)], [(3, 6), (4, 0), (5, 1), (6, 2), (7, 3), (8, 4), (9, 5)], [(10, 6), (11, 0), (12, 1), (13, 2), (14, 3), (15, 4), (16, 5)], [(17, 6), (18, 0), (19, 1), (20, 2), (21, 3), (22, 4), (23, 5)], [(24, 6), (25, 0), (26, 1), (27, 2), (28, 3), (29, 4), (30, 5)], [(31, 6), (0, 0), (0, 1), (0, 2), (0, 3), (0, 4), (0, 5)]], [[(0, 6), (1, 0), (2, 1), (3, 2), (4, 3), (5, 4), (6, 5)], [(7, 6), (8, 0), (9, 1), (10, 2), (11, 3), (12, 4), (13, 5)], [(14, 6), (15, 0), (16, 1), (17, 2), (18, 3), (19, 4), (20, 5)], [(21, 6), (22, 0), (23, 1), (24, 2), (25, 3), (26, 4), (27, 5)], [(28, 6), (29, 0), (30, 1), (0, 2), (0, 3), (0, 4), (0, 5)]]], [[[(0, 6), (0, 0), (0, 1), (1, 2), (2, 3), (3, 4), (4, 5)], [(5, 6), (6, 0), (7, 1), (8, 2), (9, 3), (10, 4), (11, 5)], [(12, 6), (13, 0), (14, 1), (15, 2), (16, 3), (17, 4), (18, 5)], .........................................................


</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong> Iterating through each week of given year.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for year in cal1.yeardays2calendar(2020):
    for month in year:
        for week in month:
            print(week, type(week))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[(0, 6), (0, 0), (0, 1), (1, 2), (2, 3), (3, 4), (4, 5)] <class 'list'>
[(5, 6), (6, 0), (7, 1), (8, 2), (9, 3), (10, 4), (11, 5)] <class 'list'>
[(12, 6), (13, 0), (14, 1), (15, 2), (16, 3), (17, 4), (18, 5)] <class 'list'>
[(19, 6), (20, 0), (21, 1), (22, 2), (23, 3), (24, 4), (25, 5)] <class 'list'>
[(26, 6), (27, 0), (28, 1), (29, 2), (30, 3), (31, 4), (0, 5)] <class 'list'>
[(0, 6), (0, 0), (0, 1), (0, 2), (0, 3), (0, 4), (1, 5)] <class 'list'>
[(2, 6), (3, 0), (4, 1), (5, 2), (6, 3), (7, 4), (8, 5)] <class 'list'>
[(9, 6), (10, 0), (11, 1), (12, 2), (13, 3), (14, 4), (15, 5)] <class 'list'>
[(16, 6), (17, 0), (18, 1), (19, 2), (20, 3), (21, 4), (22, 5)] <class 'list'>
[(23, 6), (24, 0), (25, 1), (26, 2), (27, 3), (28, 4), (29, 5)] <class 'list'>
[(1, 6), (2, 0), (3, 1), (4, 2), (5, 3), (6, 4), (7, 5)] <class 'list'>
[(8, 6), (9, 0), (10, 1), (11, 2), (12, 3), (13, 4), (14, 5)] <class 'list'>
[(15, 6), (16, 0), (17, 1), (18, 2), (19, 3), (20, 4), (21, 5)] <class 'list'>
[(22, 6), (23, 0), (24, 1), (25, 2), (26, 3), (27, 4), (28, 5)] <class 'list'>
[(29, 6), (30, 0), (31, 1), (0, 2), (0, 3), (0, 4), (0, 5)] <class 'list'>
[(0, 6), (0, 0), (0, 1), (1, 2), (2, 3), (3, 4), (4, 5)] <class 'list'>
[(5, 6), (6, 0), (7, 1), (8, 2), (9, 3), (10, 4), (11, 5)] <class 'list'>
[(12, 6), (13, 0), (14, 1), (15, 2), (16, 3), (17, 4), (18, 5)] <class 'list'>
[(19, 6), (20, 0), (21, 1), (22, 2), (23, 3), (24, 4), (25, 5)] <class 'list'>
[(26, 6), (27, 0), (28, 1), (29, 2), (30, 3), (0, 4), (0, 5)] <class 'list'>
[(0, 6), (0, 0), (0, 1), (0, 2), (0, 3), (1, 4), (2, 5)] <class 'list'>
[(3, 6), (4, 0), (5, 1), (6, 2), (7, 3), (8, 4), (9, 5)] <class 'list'>

..............................................
</pre></div>

<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong> Iterating through each day of given year.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

for year in cal1.yeardays2calendar(2020):
    for month in year:
        for week in month:
            for day in week:
                print(day, type(day))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(0, 6) <class 'tuple'>
(0, 0) <class 'tuple'>
(0, 1) <class 'tuple'>
(1, 2) <class 'tuple'>
(2, 3) <class 'tuple'>
(3, 4) <class 'tuple'>
(4, 5) <class 'tuple'>
(5, 6) <class 'tuple'>
(6, 0) <class 'tuple'>
(7, 1) <class 'tuple'>
(8, 2) <class 'tuple'>
(9, 3) <class 'tuple'>
(10, 4) <class 'tuple'>
(11, 5) <class 'tuple'>
(12, 6) <class 'tuple'>
(13, 0) <class 'tuple'>
(14, 1) <class 'tuple'>
(15, 2) <class 'tuple'>
(16, 3) <class 'tuple'>
(17, 4) <class 'tuple'>
..............................................
</pre></div>

<hr/>



## TextCalendar class

<p> Used for generating plain text calendar. </p>

### Constructor

<p id="tut-cons"> TextCalendar(firstweekday=0) </p>

<p>  Returns object of calendar class. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong>firstweekday : </strong> By default firstweekday set to 0 if no argument is given which makes Monday as the first day of the week. If any Value pass passed 0 = Monday .. 6 = Sunday it is taken as first day of the week.</li>
    </ul> 
</div>

{% include links.html %}
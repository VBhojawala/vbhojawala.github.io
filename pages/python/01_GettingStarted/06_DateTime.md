---
title: Date, Time and DateTime
layout: tutorial
tags: []
sidebar: python_sidebar
permalink: python_date_time_datetime.html
folder: python
prev: python_bytes_bytearray.html
prev_title: Bytes and ByteArray
next: 
next_title:
next_section: python_control_flow.html
next_section_title: Control Flow
summary: Date, Time and DateTime
---


## Date


### Constructor
<p id="tut-cons"> date(year, month, day) </p>

Attribute | Range 
:--- | :--- 
  year         |   MINYEAR <= year <= MAXYEAR
  month       |   1 <= month <= 12
  day        |   1 <= day <= number of days in the given month and year


{% include callout.html content="**Note** : date, time and datetime are immutable and hashable data type. " type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date

d1 = date(2020, 3, 20)

print(d1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-20
</pre></div>

<hr/>





### today()
<p> Returns date object representing today's date. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date

today = date.today()

print(today)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-21
</pre></div>

<hr/>




### Attributes 



Attribute | Explanation 
:--- | :--- 
  day         |   Returns day of the month from the date object.
  month       |   Returns month from the date object.
  year        |   Returns year from the date object.
  min         |   minimum datetime.date(1, 1, 1) accepted by date class
  max         |   maximum datetime.date(9999, 12, 31) accepted by class
  resolution  |   smallest possible difference between two dates timedelta(days=1).

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date

today = date.today()

print(f'Day : {today.day}   Month : {today.month}   Year : {today.year}')
print(f'Min : {date.min}   Max : {date.max}    Resolution : {date.resolution}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Day : 21   Month : 3   Year : 2020
Min : 0001-01-01   Max : 9999-12-31    Resolution : 1 day, 0:00:00
</pre></div>

<hr/>





## Time


### Constructor
<p id="tut-cons">  time(hour=0, minute=0, second=0, microsecond=0, tzinfo=None, *, fold=0)  </p>


Argument     |  range
:--- | :--- 
  hour        |  0 <= hour < 24
  minute      |  0 <= minute < 60
  second      |  0 <= second < 60
  microsecond |  0 <= microsecond < 1000000
  fold        |  0, 1

{% include callout.html content="It raises ValueError if argument value goes outside of range." type="primary" %} 


<div id="tut-content"> 
    <ul>
        <li> <strong>tzinfo : </strong> By default it is set to None. If given, it must be an object  of tzinfo subclass. </li>
        <li> <strong>fold : </strong> It is used when repeated time interval occurred such as when clocks are rolled back at the end of daylight saving time or hen the UTC offset for the current zone is decreased for political reasons.  In such cases default value 0 represents earlier time and 1 represent later time to disambiguate wall times. </li>
    </ul> 
</div>

<hr/>



### Attributes 


Attribute     |  Meaning
:--- | :--- 
hour         |   Returns Hour from time object
minute       |   Returns Minutes from time object
second       |   Returns Seconds from time object
Microseconds |   Returns Microseconds from time object
fold         |   Returns fold value from time object
tzinfo       |   Returns tzinfo object from time object
min          |   Returns time object representing minimum time possible.
max          |   Returns time object representing maximum time possible.
resolution   |   Returns smallest time difference between two non-equal time object.



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import time

t1 = time(11, 45, 33)
print(t1)
print(f'Hours : {t1.hour}  Minutes : {t1.minute}  Seconds : {t1.second}', end='\n\n')

t2 = time(hour=11, minute=45, second=35, microsecond=5555)
print(t2)
print(f'Hours : {t2.hour}  Minutes : {t2.minute}  Seconds : {t2.second} Microseconds : {t2.microsecond}')
print(f'Fold : {t2.fold}   tzinfo : {t2.tzinfo}')

print(f'\nMin : {t2.min}  Max : {t2.max}  Resolution : {t2.resolution}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
11:45:33
Hours : 11  Minutes : 45  Seconds : 33

11:45:35.005555
Hours : 11  Minutes : 45  Seconds : 35 Microseconds : 5555
Fold : 0   tzinfo : None

Min : 00:00:00  Max : 23:59:59.999999  Resolution : 0:00:00.000001
</pre></div>

<hr/>

















## DateTime

### Constructor

<p id="tut-cons">  datetime(year, month, day, hour=0, minute=0, second=0, microsecond=0, tzinfo=None, *, fold=0)  </p>


Parameter | Range 
:--- | :--- 
year        |   MINYEAR <= year <= MAXYEAR
month       |   1 <= month <= 12
day         |   1 <= day <= number of days in the given month and year
hour        |  0 <= hour < 24
minute      |  0 <= minute < 60
second      |  0 <= second < 60
microsecond |  0 <= microsecond < 1000000
fold        |  0, 1


<div id="tut-content"> 
    <ul>
        <li> <strong>tzinfo : </strong> By default it is set to None. If given, it must be an object  of tzinfo subclass. </li>
        <li> <strong>fold : </strong> It is used when repeated time interval occurred such as when clocks are rolled back at the end of daylight saving time or hen the UTC offset for the current zone is decreased for political reasons.  In such cases default value 0 represents earlier time and 1 represent later time to disambiguate wall times. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

d1 = dt(2020, 3, 21)
print(d1)

d2 = dt(2020, 3, 21, 11, 45)
print(d2)

d3 = dt(2020, 3, 21, 11, 46, 55, 1500)
print(d3)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-21 00:00:00
2020-03-21 11:45:00
2020-03-21 11:46:55.001500
</pre></div>

<hr/>


### now()
<p> Returns datetime object representing current date and time. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

now = dt.now()

print(now)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 09:39:01.669841
</pre></div>

<hr/>



### Attributes 


Attribute     |  Meaning
:--- | :--- 
year        |   Returns year from the datetime object.
month       |   Returns month from the datetime object.
day         |   Returns day of the month from the datetime object.
hour         |   Returns Hour from datetime object
minute       |   Returns Minutes from datetime object
second       |   Returns Seconds from datetime object
Microseconds |   Returns Microseconds from datetime object
fold         |   Returns fold value from datetime object
tzinfo       |   Returns tzinfo object from datetime object
min          |   Returns time object representing minimum datetime possible.
max          |   Returns time object representing maximum datetime possible.
resolution   |   Returns smallest time difference between two non-equal datetime object.




{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

now = dt.now()

print(f'Year : {now.year}    Month : {now.month}    Day : {now.day}')
print(f'Hour : {now.hour}    Minutes : {now.minute}   Seconds : {now.second}  '
      f'Microseconds : {now.microsecond}')
print(f'fold : {now.fold}   tzinfo : {now.tzinfo} \n')


print(f'Min : {dt.min}    Max : {dt.max}   Resolution : {dt.resolution}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Year : 2020    Month : 3    Day : 22
Hour : 9    Minutes : 49   Seconds : 43  Microseconds : 344265
fold : 0   tzinfo : None 

Min : 0001-01-01 00:00:00    Max : 9999-12-31 23:59:59.999999   Resolution : 0:00:00.000001
</pre></div>

<hr/>





{% include links.html %}
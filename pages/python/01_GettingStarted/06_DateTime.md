---
title: Date, Time and DateTime
layout: tutorial
tags: [date, time, datetime, today(), now(), combine(), isoformat(), fromisoformat(), utcnow(), fromtimestamp(), utcfromtimestamp(), strptime(), timetz(), replace(), astimezone(), utcoffset(), dst(), tzname(), timetuple(), utctimetuple(), toordinal(), fromordinal(), timestamp(), weekday(), isoweekday(), isocalendar(), fromisocalendar(), ctime(), strftime(), comparision]
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



### Functions

#### weekday()
<p> Returns day of the week as integer where 0 for Monday and 6 for Sunday. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
d1 = date(2020, 3, 22)
print(d1.weekday())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
6
</pre></div>

<hr/>





#### isoweekday()
<p> Returns day of week as integer where 1 for Monday and 7 for Sunday. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
d1 = date(2020, 3, 22)
print(d1.isoweekday())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
7
</pre></div>

<hr/>



#### isocalendar()
<p> Returns tuple representing (ISO year, ISO week number, ISO weekday). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
d1 = date(2020, 3, 22)
print(d1.isocalendar())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(2020, 12, 7)
</pre></div>

<hr/>



#### fromisocalendar()
<p> Returns date object from ISO year, ISO week number, ISO weekday. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
year, week, weekday = date(2020, 3, 22).isocalendar()
print(date.fromisocalendar(year, week, weekday))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22
</pre></div>

<hr/>



#### ctime()
<p> date representation in as native C. same as ctime in C library 'time' </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
d1 = date(2020, 3, 22)
print(d1.ctime())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Sun Mar 22 00:00:00 2020
</pre></div>

<hr/>




#### toordinal()
<p> Return the proleptic Gregorian ordinal of the date, where January 1 of year 1 has ordinal 1. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
d1 = date(2020, 3, 22)
print(d1.toordinal())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
737506
</pre></div>

<hr/>




#### fromordinal()
<p> Returns date object from ordinal value. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
d2 = date.fromordinal(date.today().toordinal())
print(d2)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22
</pre></div>

<hr/>






#### fromtimestamp()
<p> Returns date object from ordinal value. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
import time

d1 = date.fromtimestamp(time.time())
print(d1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22
</pre></div>

<hr/>






#### isoformat()
<p> Returns date in iso format. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
d1 = date(2020, 3, 22)
print(d1.isoformat())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22
</pre></div>

<hr/>



#### fromisoformat(str)
<p> Returns date object from string date represented in iso format. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
d1 = date.fromisoformat('2020-10-02')
print(d1, type(d1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-10-02 <class 'datetime.date'>
</pre></div>

<hr/>



#### replace(year, month, date)
<p> Returns new date object from an existing date object by replacing only provided parameter. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
d1 = date(2020, 3, 22)
print(d1.replace(year=2021))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2021-03-22
</pre></div>

<hr/>



#### timetuple()
<p> Returns locale time tuple compatible with time.localtime(). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date
d1 = date(2020, 3, 22)
print(d1.timetuple())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
time.struct_time(tm_year=2020, tm_mon=3, tm_mday=22, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=6, tm_yday=82, tm_isdst=-1)
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






### Functions

#### isoformat(timespec='auto')
<p> Returns string representing time in iso format. </p>

timespec       | output
:--- | :--- 
  auto          |  HH:MM:SS.ffffff or YYYY-MM-DDTHH:MM:SS if micro second is zero.
  hours         |  HH
  minutes       |  HH:MM
  seconds       |  HH:MM:SS
  milliseconds  |  HH:MM:SS.sss
  microseconds  |  HH:MM:SS.ffffff

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import time

t1 = time(hour=12, minute=45, second=45, microsecond=1500)

print(t1.isoformat())
print("timespec='hours'  :  ", t1.isoformat(timespec='hours'))
print("timespec='minutes'   :  ", t1.isoformat(timespec='minutes'))
print("timespec='seconds'  :  ", t1.isoformat(timespec='seconds'))
print("timespec='milliseconds' :  ", t1.isoformat(timespec='milliseconds'))
print("timespec='microseconds' :  ", t1.isoformat(timespec='microseconds'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
12:45:45.001500
timespec='hours'  :   12
timespec='minutes'   :   12:45
timespec='seconds'  :   12:45:45
timespec='milliseconds' :   12:45:45.001
timespec='microseconds' :   12:45:45.001500
</pre></div>

<hr/>




#### fromisoformat(time_string)

<p> Returns time object constructed from given string containing isotime. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import time
t1 = time.fromisoformat('12:45:45.001500')
print(t1, type(t1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
12:45:45.001500 <class 'datetime.time'>
</pre></div>

<hr/>



#### replace(hour=self.hour, minute=self.minute, second=self.second, microsecond=self.microsecond, tzinfo=self.tzinfo, * fold=0)
<p> Returns new time object from an existing time object by replacing given param values. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import time

t1 = time(hour=12, minute=45, second=45, microsecond=1500)
t2 = t1.replace(minute=25)

print(t1)
print(t2)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
12:45:45.001500
12:25:45.001500
</pre></div>

<hr/>








#### utcoffset()
<p> Returns timedelta object having time difference between local time and UTC time. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import time, timezone, timedelta

t1 = time(11, 45, 33, tzinfo=timezone(timedelta(hours=5, minutes=30)))
print(t1.utcoffset(), type(t1.utcoffset()))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
5:30:00 <class 'datetime.timedelta'>  
</pre></div>

<hr/>






#### dst()
<p> Returns timedelta object having local daylight savings value, returns None if tzinfo is None. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import time, timezone, timedelta

t1 = time(11, 45, 33,  tzinfo=timezone(timedelta(hours=-4), 'EDST – Eastern Daylight Savings Time'))
print(t1.dst())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
None
</pre></div>

<hr/>


#### tzname()

<p> Returns string representing name of timezone. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import time, timezone, timedelta

t1 = time(11, 45, 33, tzinfo=timezone(timedelta(hours=-4), 'EDST – Eastern Daylight Savings Time'))
print(t1.tzname())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
EDST – Eastern Daylight Savings Time
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

dt1 = dt(2020, 3, 21)
print(dt1)

dt2 = dt(2020, 3, 21, 11, 45)
print(dt2)

dt3 = dt(2020, 3, 21, 11, 46, 55, 1500)
print(dt3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-21 00:00:00
2020-03-21 11:45:00
2020-03-21 11:46:55.001500
</pre></div>

<hr/>


### today()
<p> Returns current date and time with timezone None. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt
print(dt.today())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 18:47:26.616591
</pre></div>

<hr/>



### now([tz])
<p> Returns current local date and  time. If optional param tz is not given works same as today() </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt
print(dt.now())



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 18:48:17.911678
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





### Functions


#### combine(date, time[, tzinfo])
<p> Returns datetime objects from given date and time objects. If optional argument tzinfo is given it is set to datetime object otherwise it is copied from time object.  </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date, time, datetime as dt

today = date.today()
timeNow = time(12, 11)

dtCombine = dt.combine(today, timeNow)
print(dtCombine)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 12:11:00
</pre></div>

<hr/>



#### date()
<p> Returns date object from datetime object. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

dt1 = dt(2020, 3, 21, 11, 46, 55, 1500)

print(dt1.date(), type(dt1.date()))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-21 <class 'datetime.date'>
</pre></div>

<hr/>




#### time()
<p> Returns time object from datetime object. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

dt1 = dt(2020, 3, 21, 11, 46, 55, 1500)
print(dt1.time(), type(dt1.time()))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
11:46:55.001500 <class 'datetime.time'>
</pre></div>

<hr/>





#### isoformat(sep='T', timespec='auto')
<p> Returns string representing datetime in iso format. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> sep : </strong> Defines separator which is placed between date and time.</li>
        <li> <strong> timespec :</strong> Can have one of the following values. </li>
    </ul> 
</div>


timespec | output 
:--- | :--- 
  auto          |  YYYY-MM-DDTHH:MM:SS.ffffff or YYYY-MM-DDTHH:MM:SS if micro second is zero.
  hours         |  YYYY-MM-DDTHH
  minutes       |  YYYY-MM-DDTHH:MM
  seconds       |  YYYY-MM-DDTHH:MM:SS
  milliseconds  |  YYYY-MM-DDTHH:MM:SS.sss
  microseconds  |  YYYY-MM-DDTHH:MM:SS.ffffff



{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

dt1 = dt(year=2020, month=3, day=21, hour=15,
         minute=45, second=55, microsecond=569)

print(dt1.isoformat(timespec='auto'))

print(dt1.isoformat(timespec='hours'))

print(dt1.isoformat(timespec='minutes'))

print(dt1.isoformat(sep=' ', timespec='seconds'))

print(dt1.isoformat(sep=' ', timespec='milliseconds'))

print(dt1.isoformat(sep=' ', timespec='microseconds'))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-21T15:45:55.000569
2020-03-21T15
2020-03-21T15:45
2020-03-21 15:45:55
2020-03-21 15:45:55.000
2020-03-21 15:45:55.000569
</pre></div>

<hr/>


#### fromisoformat(str)
<p> Returns datetime object from string datetime represented in iso format.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

dt1 = dt.fromisoformat('2020-03-21T15:45:55.000569')
print(dt1, type(dt1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-21 15:45:55.000569 <class 'datetime.datetime'>
</pre></div>

<hr/>




#### utcnow()
<p>  Returns current UTC time with tzinfo None.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt
print(dt.utcnow())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 13:33:43.298138
</pre></div>

<hr/>







#### fromtimestamp(timestamp[, tz])
<p>  Returns local date and time from timestamp (POSIX). If optional argument tz is give (instance of tzinfo) timestamp is converted in to tz's timestamp.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt
import time

print(dt.fromtimestamp(time.time()))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 19:06:19.541499
</pre></div>

<hr/>



#### utcfromtimestamp(timestamp)
<p>  Returns UTC timestamp from POSIX timestamp.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt
import time

print(dt.utcfromtimestamp(time.time()))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 13:38:43.090037
</pre></div>

<hr/>










#### strptime(date_string, format)
<p>  Convert date_string in given format  to datetime object. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

print(dt.strptime('22/Mar/2020 11:30 PM', '%d/%b/%Y %I:%M %p'))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 23:30:00
</pre></div>

<hr/>



#### timetz()
<p>  Returns time object with tzinfo. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt, timezone

dt1 = dt(year=2020, month=3, day=22, hour=15,
         minute=45, second=55, microsecond=569, tzinfo=timezone.utc)
t1 = dt1.timetz()
print(t1, t1.tzinfo)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
15:45:55.000569+00:00 UTC
</pre></div>

<hr/>



#### replace(year=self.year, month=self.month, day=self.day, hour=self.hour, minute=self.minute, second=self.second, microsecond=self.microsecond, tzinfo=self.tzinfo, * fold=0)
<p> Return datetime object by replacing the given parameters of the datetime and retains others from original datetime object. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

dt1 = dt(year=2020, month=3, day=22, hour=15,
         minute=45, second=55, microsecond=569)
dt2 = dt1.replace(year=2022, day=12)
print(dt1)
print(dt2)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 15:45:55.000569
2022-03-12 15:45:55.000569
</pre></div>

<hr/>



#### astimezone(tz=None)
<p>  Returns date and time adjusted to local time of tz(tzinfo) passed as argument. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt, timezone, timedelta

dt1 = dt(year=2020, month=3, day=22, hour=15,
         minute=45, second=55, microsecond=569)
dt3 = dt1.astimezone(timezone(timedelta(hours=-9), 'AKST/Alaska Standard Time'))
print(dt1)
print(dt3)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 15:45:55.000569
2020-03-22 01:15:55.000569-09:00
</pre></div>

<hr/>




#### utcoffset()
<p> Returns timedelta object having time difference between local time and UTC time. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt, timezone, timedelta

dt1 = dt(year=2020, month=3, day=22, hour=15, minute=45, second=55,
         microsecond=569, tzinfo=timezone(timedelta(hours=-9), 'AKST/Alaska Standard Time'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 15:45:55.000569
2020-03-22 01:15:55.000569-09:00
</pre></div>

<hr/>



#### dst()
<p> Returns timedelta object having local daylight savings value, returns None if tzinfo is None. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt, timezone, timedelta

dt1 = dt(year=2020, month=3, day=21, hour=9, minute=45, second=55,
         microsecond=569, tzinfo=timezone(timedelta(hours=-9), 'AKST/Alaska Standard Time'))

print(dt1.dst())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
None
</pre></div>

<hr/>





#### tzname()
<p> Returns string representing name of timezone. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt, timezone, timedelta

dt1 = dt(year=2020, month=3, day=22, hour=15, minute=45, second=55, microsecond=569,
         tzinfo=timezone(timedelta(hours=-9), 'AKST/Alaska Standard Time'))

print(dt1.tzname())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
AKST/Alaska Standard Time
</pre></div>

<hr/>





#### timetuple()
<p> Returns time.struct_time representing datetime which is compatible with time.localtime(). </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt, timezone, timedelta

dt1 = dt(year=2020, month=3, day=22, hour=15, minute=45, second=55, microsecond=569,
         tzinfo=timezone(timedelta(hours=-9), 'AKST/Alaska Standard Time'))

print(dt1.timetuple())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
time.struct_time(tm_year=2020, tm_mon=3, tm_mday=22, tm_hour=15, tm_min=45, tm_sec=55, tm_wday=6, tm_yday=82, tm_isdst=-1)
</pre></div>

<hr/>



#### utctimetuple()
<p> Returns time.struct_time representing UTC date and time as tuple which is compatible with time.gmttime(). </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt, timezone, timedelta

dt1 = dt(year=2020, month=3, day=22, hour=15, minute=45, second=55, microsecond=569,
         tzinfo=timezone(timedelta(hours=-9), 'AKST/Alaska Standard Time'))

print(dt1)
print(dt1.utctimetuple())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 15:45:55.000569-09:00
time.struct_time(tm_year=2020, tm_mon=3, tm_mday=23, tm_hour=0, tm_min=45, tm_sec=55, tm_wday=0, tm_yday=83, tm_isdst=0)
</pre></div>

<hr/>








#### toordinal()
<p> Returns proleptic Gregorian ordinal of the datetime object, where January 1 of year 1 has ordinal 1. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt, timezone, timedelta

dt1 = dt(year=2020, month=3, day=22, hour=15, minute=45, second=55, microsecond=569,
         tzinfo=timezone(timedelta(hours=-9), 'AKST/Alaska Standard Time'))

print(dt1.toordinal())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
737506
</pre></div>

<hr/>




#### fromordinal()
<p> Returns datetime object from ordinal value.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt
dt1 = dt.fromordinal(737506)
print(dt1, type(dt1))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 00:00:00 <class 'datetime.datetime'>
</pre></div>

<hr/>



#### timestamp()
<p> Returns POSIX timestamp corresponding to datetime instance.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt, timezone, timedelta

dt1 = dt(year=2020, month=3, day=22, hour=15, minute=45, second=55, microsecond=569,
         tzinfo=timezone(timedelta(hours=-9), 'AKST/Alaska Standard Time'))

print(dt1.timestamp())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
1584924355.000569
</pre></div>

<hr/>







#### weekday()
<p> Returns day of the week as integer where 0 for Monday and 6 for Sunday.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt
dt1 = dt(year=2020, month=3, day=22, hour=15, minute=45)
print(dt1.weekday())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
6
</pre></div>

<hr/>









#### isoweekday()
<p> Returns day of week as integer where 1 for Monday and 7 for Sunday.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt
dt1 = dt(year=2020, month=3, day=22, hour=15, minute=45)
print(dt1.isoweekday())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
7
</pre></div>

<hr/>



#### isocalendar()
<p> Returns tuple representing (ISO year, ISO week number, ISO weekday).</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt
dt1 = dt(year=2020, month=3, day=22, hour=15, minute=45)
print(dt1.isocalendar())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
(2020, 12, 7)
</pre></div>

<hr/>


#### fromisocalendar()
<p> Returns datetime object from ISO year, ISO week number, ISO weekday. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt
year, week, weekday = (2020, 12, 7)

dt1 = dt.fromisocalendar(year, week, weekday)
print(dt1, type(dt1))



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-22 00:00:00 <class 'datetime.datetime'>
</pre></div>

<hr/>






#### ctime()
<p> Returns str representing date as ctime in C library 'time'.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt

dt1 = dt(year=2020, month=3, day=22, hour=15, minute=45)

print(dt1.ctime())

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Sun Mar 22 15:45:00 2020
</pre></div>

<hr/>



## Formatting

### strftime(format)

<p> Returns string representing given date, time, datetime object in given format. </p>


### formatting symbols

symbol  |  meaning  |  Example
:--- | :---  | :--- 
  %d     | Day of Month Zero based              | 01, 02, 03 ... 31
  %a     | Day of the week in short[Locale]     | Sun, Mon, ... Sat
  %A     | Day of week full[Locale]             | Sunday, Monday ..... Saturday
  %m     | Month of  the year zero based        | 01, 02, ... 12
  %b     | Month local in 3 characters [Locale] | Jan, Feb ... Dec (en_US)
  %B     | Month local in full name [Locale]    | January, February ... December (en_US)
  %y     | year in two digit                    | 01, 05 .. 99
  %Y     | year in four digit                   | 1968, 2005, 2012 ..
  %H     | Hour in 24                           | 05, 12, 23
  %I     | Hour in 12                           | 01, 02, 12
  %j     | Day of the year as decimal           | 01, 02 ... 365
  %U     | Week number of year as decimal       | 01, 02 ... 52 (Sunday as the first day of the week)
  %W     | Week number of year as decimal       | 01, 02 ... 52 (Monday as the first day of the week)
  %w     | week day as decimal                  | 0(sunday), 1 ... 6
  %p     | AM or PM                             | AM, PM
  %M     | Minute of an hour                    | 01, 02, ... 60
  %S     | Seconds                              | 01, 02, ... 60
  %Z     | Timezone                             | UTC,CST ...
  %z     | UTC offset +HHMM or -HHMM            | +0430  -1230
  %c     | date and time as per locale          | Sun Dec  8 18:47:54 2019
  %x     | date as per locale                   | 12/08/19
  %X     | locale specific time                 | 18:47:54
  %%     | escape character                     | %


### date formatting


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date

d1 = date(2020, 3, 21)

print(d1)
print(d1.strftime('%d %b %Y'))
print(d1.strftime('%d %B %Y'))
print(d1.strftime('%A, %Y  %b  %d'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-03-21
21 Mar 2020
21 March 2020
Saturday, 2020  Mar  21
</pre></div>

<hr/>




### Time formatting

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import time

t1 = time(15, 45, 33, 1599)

print(t1.strftime('%H:%M:%S'))
print(t1.strftime('%I-%M-%S'))
print(t1.strftime('%I:%M:%S %p'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
15:45:33
03-45-33
03:45:33 PM
</pre></div>

<hr/>






### DateTime formatting

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import datetime as dt


dt1 = dt(year=2020, month=3, day=21, hour=15,
         minute=45, second=55, microsecond=569)

print(dt1.strftime('%d %b %Y %H:%M:%S'))
print(dt1.strftime('%B, %d  %Y %I:%M:%S %p'))
print(dt1.strftime('%A, %d %B %Y %I:%M:%S %p'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
21 Mar 2020 15:45:55
March, 21  2020 03:45:55 PM
Saturday, 21 March 2020 03:45:55 PM
</pre></div>

<hr/>





## Comparision


### Operators 

Operator | Description 
:--- | :--- 
<  | Less-than
>  | Greater-than
<= | Less-than or equal to
>= | Greater-than or equal to
== | Equal to
!= | Not equal to


### Example

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date, time, datetime as dt

print(f'\n{"*"*5} Date comparision {"*"*5}')

d1 = date(2020, 3, 21)
d2 = date(2020, 6, 15)

print(f'd1 : {d1}    d2 : {d2}\n')
print('d1 < d2 ? ->', d1 < d2)
print('d1 > d2 ? ->', d1 > d2)
print('d1 == d2 ? ->', d1 == d2)
print('d1 != d2 ? ->', d1 != d2)


print(f'\n{"*"*5} Time comparision {"*"*5}')

t1 = time(15, 45, 55)
t2 = time(11, 15, 45)

print(f't1 : {t1}   t2 : {t2}\n')
print('t1 < t2 ? ->', t1 < t2)
print('t1 > t2 ? ->', t1 > t2)
print('t1 == t2 ? ->', t1 == t2)
print('t1 != t2 ? ->', t1 != t2)


print(f'\n{"*"*5} DateTime comparision {"*"*5}')


dt1 = dt(2020, 3, 21, 15, 45, 55)
dt2 = dt(2020, 6, 15, 11, 15, 45)


print(f'dt1 : {dt1}   dt2 : {dt2}\n')
print('dt1 < dt2 ? ->', dt1 < dt2)
print('dt1 > dt2 ? ->', dt1 > dt2)
print('dt1 == dt2 ? ->', dt1 == dt2)
print('dt1 != dt2 ? ->', dt1 != dt2)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
***** Date comparision *****
d1 : 2020-03-21    d2 : 2020-06-15
d1 < d2 ? -> True
d1 > d2 ? -> False
d1 == d2 ? -> False
d1 != d2 ? -> True

***** Time comparision *****
t1 : 15:45:55   t2 : 11:15:45
t1 < t2 ? -> False
t1 > t2 ? -> True
t1 == t2 ? -> False
t1 != t2 ? -> True

***** DateTime comparision *****
dt1 : 2020-03-21 15:45:55   dt2 : 2020-06-15 11:15:45
dt1 < dt2 ? -> True
dt1 > dt2 ? -> False
dt1 == dt2 ? -> False
dt1 != dt2 ? -> True

</pre></div>

<hr/>




{% include links.html %}
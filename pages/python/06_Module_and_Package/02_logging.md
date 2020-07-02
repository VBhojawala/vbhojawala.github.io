---
title: Python Logging
layout: tutorial
tags: [python, Logging, Logging_levels, debug(), info(), warning(), error(), critical(), basicConfig(), Logging_Components, Logger, Handler, Filter,Formatter, getLogger(), LogRecord, getMessage(), getLogRecordFactory(), setLogRecordFactory(), disable(), getLevelName(), shutdown(), getLoggerClass(), setLoggerClass(), makeLogRecord(), Logging_Hierarchy, getEffectiveLevel(), NOTSET, setlevel(), addHandler(), removeHandler(), addFilter(), removeFilter(), isEnabledFor(), getChild(), handle(), hasHandlers(), findCaller(), createLock(), acquire(), release(), setFormatter(), filter(), flush(), close(), handle(), format(), emit(), handleError(), StreamHandler, FileHandler, RotatingFileHandler, TimedRotatingFileHandler, SMTPHandler, MemoryHandler, NullHandler, WatchedFileHandler, QueueHandler, HTTPHandler, DatagramHandler, SocketHandler, SysLogHandler, NTEventLogHandler, setStream(), doRollover(), getSubject(), shouldFlush(), flush(), setTarget(), reopenIfNeeded(), prepare(), enqueue(), dequeue(), start(), stop(), enqueue_sentinel(), makeSocket(), makePickle(), send(), createSocket(), mapLogRecord(), LoggerAdapter, formatTime(), formatException(), formatStack(), Configuring_Logging, fileConfig(), dictConfig(), YAML, JSON, logging.config]
sidebar: python_sidebar
permalink: python_logging.html
folder: python
prev_section: 
prev_section_title: 
prev: python_module_package_import.html
prev_title: Module, Package and Import
next: python_builtin_modules.html
next_title: Builtin Modules
next_section: 
next_section_title: 
summary: Python Logging module functions, logging components, Logger, Handler, Filter, Formatter,LoggerAdapter, logging configuration, logging.config, dictConfig() using YAML and JSON file.
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WM9XO960SK0" allowfullscreen></iframe>
</div>

<hr/>

## Logging

<p> Module provides functions and classes for logging an event.  </p>

<div id="tut-content"> 
    <ul>
        <li> Logging is done to keep record of events which occurred while running the application. </li>
        <li> When application runs into trouble logs are checked first in order to identify the problem. </li>
        <li> When debugging application logs are used to identify problems. </li>
    </ul> 
</div>

### Levels of logging 

<p> Levels of logging in order of increasing level </p>

 Level     |                 Usage
 :--- | :---
 DEBUG | Very detailed information how your function or program works.When resolving issue other programmer should be able to understand internal working. e.g. value of each variable in each iteration
 INFO | Confirmation log which indicates program is behaving as expected. e.g. method started with params, ended successfully with params
 WARNING | Indication of unexpected event occurred such as high work load which can cause problems.But program is working as expected. e.g. Invalid login attempts made to the application.
 ERROR | Due to certain problem some functionality is not performing as expected. e.g. standard errors
 CRITICAL | Due to serious problem program is not able to run.




<hr/>


### Logging method for each logging level

level    | method
:--- | :---
DEBUG    | debug(msg, *args, **kwargs)
INFO     | info(msg, *args, **kwargs)
WARNING  | warning(msg, *args, **kwargs)
ERROR    | error(msg, *args, **kwargs)
CRITICAL | critical(msg, *args, **kwargs)


{% include callout.html content="**Note** : Default logging level is set to warning which means only message with warning or higher level (below level of WARNING in above table) messages will appear. " type="primary" %} 

<div id="tut-content"> 
    <ul>
        <li> <strong> Example </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

logging.warning('High workloads detected, response might be slow')
logging.debug('This will not be printed on console as the logging level is warning')
logging.error('Error occurred!!!')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">WARNING:root:High workloads detected, response might be slow
ERROR:root:Error occurred!!!</pre></div>

<hr/>

<p> Arguments : </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> msg : </strong> String message to be logged. </li>
        <li> <strong> args : </strong> If given message string is formatted strings args contains positional values to be replaced. </li>
        <li> <strong> kwargs : </strong> Following are the four arguments which can be passed as keyword arguments  </li>
        <div id="tut-ol-padding">
        <div id="tut-content"> 
             <ol>    
                <li> <strong> exc_info : </strong> By default it takes exception information from sys.exc_info(), it can also be given custom exception in the same format returned by sys.exc_info() which gets logged. </li>
                <li> <strong> stack_info : </strong> By Default set to False. If given as True adds stack information  to logging message. It is not same as stack info from sys.exc_info(), it can be specified independently even when no exception is raised it print stack info in same format of Traceback.</li>
                <li> <strong> stacklevel : </strong> By default set to 1, if given value > 1 skips number of frames when computing line number.</li>
                <li> <strong> extra : </strong> Takes dictionary as argument. Given key-value is used for formatting log record.</li>
            </ol>
        </div> 
        </div>
    </ul> 
</div>


<div id="tut-content"> 
    <ul>
        <li> <strong> Example with args</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

usage = 91
logging.warning('CPU usage is %d', usage)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">WARNING:root:CPU usage is 91</pre></div>

<hr/>


### Setting log level

#### CommandLine

<p> While running python program from command line following argument sets the log level. </p>

<p id="tut-cons"> <strong> Syntax : </strong> --log=LEVEL </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

--log=INFO


{% endhighlight %}
</div>

<hr/>

#### basicConfig(**kwargs)

<p> Sets basic configuration for logging. It must be configured before logging function such as logging.debug, logging.info etc. </p>


 param          |      Explanation
 :--- | :---
 filename         |   name and path of the file name where logs to be stored
 filemode         |   mode in which file should be open default is 'a'
 format           |   format the log using formatting options.
 datefmt          |   date format same as datetime strftime() e.g. '%m/%d/%Y %I:%M:%S %p'
 level            |   level of logs such as DEBUG, INFO etc
 style            |   specify format in one of '%', '{', or '$'. Default is '%'
 stream           |   stream handler to for log destination. filename must be blank if this is specified.
 handlers         |   Iterable of Handlers to be added to root logger.
 force            |   If True removes all existing handlers attached to root logger before carrying  out the configuration as specified by other arguments.

<br/>

 <div id="tut-content"> 
    <ul>
        <li> <strong> Formatting options for " format " argument</strong> </li>
    </ul> 
</div>

<div style="overflow-x:auto;" markdown="block">

{:.table-responsive}
Attrib name    |     format          |    Description
:--- | :--- | :---
asctime         | %(asctime)s         | current local time
msecs           | %(msecs)d           | Milliseconds of the time when log was created.
relativeCreated | %(relativeCreated)d | Milliseconds of time when LogRecord is created relative to the time when logging module is loaded.
levelname       | %(levelname)s       | logging level for the message ('DEBUG', 'INFO', 'WARNING','ERROR', 'CRITICAL').
levelno         | %(levelno)s         | Numeric logging level for the message (DEBUG, INFO, WARNING ,ERROR, CRITICAL).
name            | %(name)s            | name of the logger used to call.
message         | %(message)s         | string passed to logging function.
pathname        | %(pathname)s        | full path of the source file where logging was run.
module          | %(module)s          | module name of the source file where logging was run.
filename        | %(filename)s        | source file name where logging was run.
funcName        | %(funcName)s        | name of the function where logging was run.
lineno          | %(lineno)d          | line no in source code where logging call was run.
process         | %(process)d         | Process ID (if available).
processName     | %(processName)s     | Process name (if available).
thread          | %(thread)d          | Thread ID (if available).
threadName      | %(threadName)s      | Thread name (if available).

</div>
<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Logging level constants and their values </strong> </li>
    </ul> 
</div>


 level           | value
 :--- | :---
 logging.NOTSET   |  0
 logging.DEBUG    | 10
 logging.INFO     | 20
 logging.WARNING  | 30
 logging.ERROR    | 40
 logging.CRITICAL | 50


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

print("logging.NOTSET   :", logging.NOTSET)
print("logging.DEBUG    :", logging.DEBUG)
print("logging.INFO     :", logging.INFO)
print("logging.WARNING  :", logging.WARNING)
print("logging.ERROR    :", logging.ERROR)
print("logging.CRITICAL :", logging.CRITICAL)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
logging.NOTSET   : 0
logging.DEBUG    : 10
logging.INFO     : 20
logging.WARNING  : 30
logging.ERROR    : 40
logging.CRITICAL : 50
</pre></div>

<hr/>



#### basicConfig() examples 

<div id="tut-content"> 
    <ul>
        <li> <strong> If ' filename ' is not given in basic config it will be redirected to 'sys.stderr' </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

logging.basicConfig(level=logging.INFO)
logging.info('Info logged successfully')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">INFO:root:Info logged successfully</pre></div>


<hr/>




<div id="tut-content"> 
    <ul>
        <li> <strong> Logging to a file </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
logging.basicConfig(filename='myapp01.log', filemode='a+',   level=logging.INFO)
logging.info('logging started  .......')


# logging variable value
a = 12
msg = 'a String value'

logging.info(f'variable a -> {a} and msg -> {msg}')



{% endhighlight %}
</div>



{% include callout.html content="**Note** : File with name myapp01.log will be created in same directory of python file which contains above code because we have not given path in  'filename' argument. " type="primary" %} 

<div class="result"><p class="result-header"><b>myapp01.log</b></p>
<pre class="result-content">
INFO:root:logging started  .......
INFO:root:variable a -> 12 and msg -> a String value
</pre></div>


<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Customizing the log format </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
logging.basicConfig(filename='myapp02.log', format='%(asctime)s : %(levelname)s : %(module)s : %(message)s',
                    datefmt='%m/%d/%Y %I:%M:%S %p', filemode='a+',   level=logging.INFO)

logging.info('logging started  .......')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>myapp02.log</b></p>
<pre class="result-content">
05/17/2020 06:55:02 PM : INFO : LoggingToFile02 : logging started  .......
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Logging with threads </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
import threading
import random
import time
import secrets


def token_gen(nbytes, ntoken):
    for i in range(ntoken):
        time.sleep(random.uniform(1.0, 2.0))
        token = secrets.token_hex(nbytes)
        logging.info(f'{nbytes} Bytes Token generated [{token}]')


logging.basicConfig(filename='myapp03.log', level=logging.INFO, format='%(asctime)s %(threadName)s %(message)s')

threads = []

for i in range(1, 5):
    thread = threading.Thread(target=token_gen, args=(16, 3))
    thread.start()
    threads.append(thread)


for thread in threads:
    thread.join()

print('Exiting main program')

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>myapp03.log</b></p>
<pre class="result-content">
2020-05-17 18:58:36,530 Thread-4 16 Bytes Token generated [43fc9bb3b054b87fe7ba195bbd489a31]
2020-05-17 18:58:36,882 Thread-2 16 Bytes Token generated [e0023371ff62e20ed5112fea3786ef03]
2020-05-17 18:58:37,069 Thread-3 16 Bytes Token generated [11a7eafea9a412a86209b6abbd40ff21]
2020-05-17 18:58:37,411 Thread-1 16 Bytes Token generated [380b39dfb7cc8597c15bbd7a7ad44203]
2020-05-17 18:58:38,167 Thread-3 16 Bytes Token generated [1a3e1f38fc01db839ddc9379dc080fb3]
2020-05-17 18:58:38,288 Thread-4 16 Bytes Token generated [f5a5e605b91ca78a2389462be9a2a7a0]
2020-05-17 18:58:38,473 Thread-2 16 Bytes Token generated [1e5b7620e8136a79ecadbc577c123ade]
2020-05-17 18:58:39,247 Thread-1 16 Bytes Token generated [de305a4746c3085ea6b0cf6f10c74beb]
2020-05-17 18:58:39,418 Thread-3 16 Bytes Token generated [71dde3029fbbf09bf13033751b196e55]
2020-05-17 18:58:39,628 Thread-2 16 Bytes Token generated [2510407512ab2290da61cfec0075cbc6]
2020-05-17 18:58:40,027 Thread-4 16 Bytes Token generated [e2a3ba62c46ef848d8b2373ad48a5acc]
2020-05-17 18:58:40,577 Thread-1 16 Bytes Token generated [85d962ffa3b0d6ba6322f65e46333934]
</pre></div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong> Logging with 'extra' parameter </strong> </li>
    </ul> 
</div>

<p> <strong> extra : </strong> parameter takes dictionary as value which can be used to set record factory's custom attribute. It becomes handy to log multi-threaded programs. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

logging.basicConfig(filename='myapp02.log',
                    format='%(asctime)s : %(levelname)s : %(levelno)s : %(name)s : %(machineID)s : %(message)s ',
                    datefmt='%m/%d/%Y %I:%M:%S %p', filemode='a+',   level=logging.INFO)

dictionary = {'machineID': 'AF145B56D', 'requestID': 'PQA125CB12VB3123'}
logging.info('Initiating session', extra=dictionary)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>myapp02.log</b></p>
<pre class="result-content">
05/18/2020 09:00:26 PM : INFO : 20 : root : AF145B56D : Initiating session 
</pre></div>

{% include callout.html content="**Note** : While Logging with custom keys in formatter, dictionary must always contains key used in formatter. Otherwise formatter will raise error and message will not be logged." type="primary" %} 


<hr/>


### Logging Components

<div id="tut-content"> 
    <ol>    
        <li>  <strong> Loggers : </strong> Provides an interface to application for logging. </li>
        <li>  <strong> Handlers : </strong> Sends log record to a particular destination.</li>
        <li>  <strong> Filter : </strong> Decides whether to process the given record or ignore it.</li>
        <li>  <strong> Formatter : </strong>  Returns formatted log record. </li>
    </ol>
</div>

<hr/>

#### Object Composition
<div id="tut-img">
    <img src="/images/tutorials/python/LoggingHierarchy.png" class="tut-img" alt="python logo">
</div>

<hr/>


### Functions and Classes

#### getLogger(name=None)

<p> Returns the logger with given name. Calling function with same even in different module returns the same logger object, because it's a singleton factory function. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> name : </strong> If not given returns a logger which is at the root of hierarchy. If given it is dot separated name like 'packageA.packageB.moduleA'. </li>
    </ul> 
</div>


<hr/>


#### class LogRecord

<p> Return an object of LogRecord which contains information about the event being logged. </p>

<p id="tut-cons"> LogRecord(name, level, pathname, lineno, msg, args, exc_info, func=None, sinfo=None) </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> name : </strong> Name of the logger used to log message. </li>
        <li> <strong> level : </strong> Numeric level of logging event. </li>
        <li> <strong> pathname : </strong> Full path where logging call was originated. </li>
        <li> <strong> lineno  : </strong> Line number in the source code where logging call was made. </li>
        <li> <strong> msg  :  </strong> string passed to the logger which is a message to be logged. </li>
        <li> <strong> args : </strong> variable data which replaces message argument to supply event information. </li>
        <li> <strong> exc_info : </strong> Exception Tuple with current exception information, None if no exception information available. </li>
        <li> <strong> sinfo : </strong> A text string representing stack information from the base of stack in current thread, up to logical call. </li>
    </ul> 
</div>

<hr/>

#### getMessage() 

<p> Return the message for this LogRecord instance after merging any user supplied arguments with message.</p>

<hr/>

#### getLogRecordFactory()

<p> Returns the callable which is used to create a LogRecord. </p>


<hr/>


#### setLogRecordFactory(factory)

<p> Sets the callable which is used to create LogRecord. </p>

<p> <strong> factory is a callable to be used to instantiate a log record with following signature : </strong>  </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> name : </strong> Name of logger </li>
        <li> <strong> level : </strong> logging level in numeric. </li>
        <li> <strong> fn : </strong> full pathname of file where the logging call was made. </li>
        <li> <strong> lno : </strong> line number in the file where logging call was made. </li>
        <li> <strong> msg : </strong> logging message </li>
        <li> <strong> args: </strong> arguments which will be applied to message</li>
        <li> <strong> exc_info : </strong> An exception Tuple or none</li>
        <li> <strong> func : </strong> The name of the function or method which invoked the logging call. </li>
        <li> <strong> sinfo : </strong> stack trace showing call hierarchy. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

old_factory = logging.getLogRecordFactory()


def record_factory(*args, **kwargs):
    record = old_factory(*args, **kwargs)
    record.pod = 'POD_ANXZ1'
    return record


logging.basicConfig(format='%(asctime)s :  %(pod)s : %(levelname)s : %(module)s : %(message)s',
                    datefmt='%m/%d/%Y %I:%M:%S %p', filemode='a+',   level=logging.INFO)

logging.setLogRecordFactory(record_factory)


logging.warning('High CPU usage ....')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">05/17/2020 07:39:58 PM :  POD_ANXZ1 : WARNING : CustomLogRecordFactory : High CPU usage ....</pre></div>

<hr/>


{% include callout.html content="**Note** : Multiple  LogRecordFactory can be chained as per application requirements as long as attribute names does not conflicts." type="primary" %} 


#### disable(level=CRITICAL)

<p> Overriding log level for all loggers in the application. </p>

<div id="tut-content"> 
    <ul>
        <li> It is used for temporally changing the log level(disabling logs). </li>
        <li> Default level value is CRITICAL.</li>
        <li> It disables all log message of given level and all the levels which are having numeric value less than numeric value of level.</li>
        <li> For example logging.disable(level=INFO) will disable all logs at level of INFO and also at the level of DEBUG because, DEBUG have numeric value < INFO numeric value.</li>
    </ul> 
</div>


<hr/>



#### getLevelName(level) 

<p> Returns numeric value for given log level and log level for given numeric log level. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

print("getLevelName('INFO') :", logging.getLevelName('INFO'))
print("getLevelName(40) :", logging.getLevelName(40))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
getLevelName('INFO') : 20
getLevelName(40) : ERROR
</pre></div>

<hr/>



#### shutdown()

<p> Informs logging system to perform orderly shutdown by flushing and closing all handlers. It is called on application exit. </p>

<p> When logging module is imported this function is registered as the exit handler so no explicit call to this function is required. </p>

<hr/>


#### getLoggerClass()

<p> Returns standard logger class or the last logger class passed using setLoggerClass(). It is called within new class definition to override default behaviour. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class MyLogger(logging.getLoggerClass()):
    pass


{% endhighlight %}
</div>


<hr/>


#### setLoggerClass(klass)

<p> Sets the class for logging system to instantiate when creating logger.</p>

<div id="tut-content"> 
    <ul>
        <li> User defined Logger class must define __init__() method with a name argument and __init__() calls Logger.__init__(). </li>
        <li> This function is typically called before any loggers are instantiated by application. </li>
        <li> In Modules of application use logging.getLogger() to fetch the instance of logger.</li>
    </ul> 
</div>


<hr/>


#### makeLogRecord(attrdict)

<p> Returns new LogRecord constructed from attrdict. </p>

<p> It is used for constructing LogRecord from the pickled LogRecord sent over the socket. </p>

<hr/>



## Logger Object 


### Logging hierarchy

<p> Same as Modules and Packages are arranged in hierarchy, logging can also be arranged in hierarchy. </p>


<div id="tut-content"> 
    <ul>
        <li> Logging is performed using Logger object.  </li>
        <li> Each logger object has it's own name which identifies it in hierarchy. </li>
        <li> Logger object must be instantiated using getLogger() singleton factory with name in hierarchy. </li>
        <li> Multiple calls of getLogger() with same name returns same object.</li>
        <li> The root of the hierarchy of loggers is called the root logger, logger also prints name as 'root' in the logged output. </li>
        <li> logging.getLogger(__name__) is used to create logging hierarchy same as Module and Package hierarchy.</li>
        <li> The root logger always has set log level to warning by default.</li>
    </ul> 
</div>


<hr/>


### Logging hierarchy example

<div id="tut-content"> 
    <ul>
        <li> Project Structure [appLogging is marked as sources root]  </li>
    </ul> 
</div>

<div id="tut-img">
    <img src="/images/tutorials/python/loggerHierarchy.png" class="tut-img" alt="python logo">
</div>

<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> ModuleA2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
logger = logging.getLogger(__name__)


def hello_module():
    logger.info('Message from packageA1 -> ModuleA2')


{% endhighlight %}
</div>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> ModuleB2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
logger = logging.getLogger(__name__)


def hello_module():
    logger.info('Message from packageB1 -> ModuleB2')



{% endhighlight %}
</div>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> LoggerHierarchy.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

logging.basicConfig(filename='MyApplicationHierarchy.log',
                    format='%(asctime)s : %(levelname)s : %(levelno)s : %(name)s : %(message)s',
                    datefmt='%m/%d/%Y %I:%M:%S %p', filemode='a+',   level=logging.INFO)

logger = logging.getLogger()

logger.info('Hierarchy 1 is created') 

from packageA1 import ModuleA2
from packageB1 import ModuleB2

ModuleA2.hello_module()
ModuleB2.hello_module()



{% endhighlight %}
</div>


<div class="result"><p class="result-header"><b>MyApplicationHierarchy.log</b></p>
<pre class="result-content">
05/18/2020 06:22:02 PM : INFO : 20 : root : Hierarchy 1 is created
05/18/2020 06:22:02 PM : INFO : 20 : packageA1.ModuleA2 : Message from packageA1 -> ModuleA2
05/18/2020 06:22:02 PM : INFO : 20 : packageB1.ModuleB2 : Message from packageB1 -> ModuleB2
</pre></div>

<hr/>


### Attributes

#### level

<p> Returns the level of logger object. By default level of root logger is set to WARNING (30) and for non root logger NOTSET (0).  </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

rootLogger = logging.getLogger()
nonRootLogger = logging.getLogger(__name__)

print('Root Logger level :', rootLogger.level)
print('Non-Root Logger level :', nonRootLogger.level)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Root Logger level : 30
Non-Root Logger level : 0
</pre></div>

<hr/>



#### propagate

<p> By default set to True which passes message to ancestor logger's handler in logging hierarchy in addition to handler attached to current logger object.</p>


<div id="tut-content"> 
    <ul>
        <li> Normally Handlers are set at the higher level of hierarchy so that, all it's child logger messages goes through common Handler.  </li>
        <li> If a Handler is attached to the current logger and one or more parent logger also contains Handler, with by default propagate set to True will log same message multiple times depending on Handler configuration. </li>
        <li> If it is set to False, logging message is not passed to the handler of the ancestor logger. </li>
    </ul> 
</div>  


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

logger = logging.getLogger()
print("propagate :", logger.propagate)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
propagate : True
</pre></div>

<hr/>




### Functions


#### getEffectiveLevel()

<p> Returns effective level of logger object. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> effective level : </strong> If level is set (By default for Non-root logger it is set to NOTSET)  on current logger object it's evaluated as  effective level.  </li>
        <li> If level is not explicitly set on a logger object it inherits form the parent's effective level. If parent does not have level set,  it's parent in hierarchy is examined until level which is set to logger is found. By default root logger has level set to WARNING. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

rootLogger = logging.getLogger()
nonRootLogger = logging.getLogger(__name__)

print('Root Logger level :', rootLogger.level)
print('Root Logger Effective level :', rootLogger.getEffectiveLevel())
print('Non-Root Logger level :', nonRootLogger.level)
print('Non-Root Logger Effective level :', nonRootLogger.getEffectiveLevel())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Root Logger level : 30
Root Logger Effective level : 30
Non-Root Logger level : 0
Non-Root Logger Effective level : 30
</pre></div>

<hr/>


#### logging methods

<p> Following are the logging methods which has same meaning as explained in logging module. </p>


log level | method
:--- | :---
 DEBUG    | debug(msg, *args, **kwargs)
 INFO     | info(msg, *args, **kwargs)
 WARNING  | warning(msg, *args, **kwargs)
 ERROR    | error(msg, *args, **kwargs)
 CRITICAL | critical(msg, *args, **kwargs)


<hr/>


#### exception(msg, *args, **kwargs)

<p> same as error(msg, *args, **kwargs) level but adds stack trace of error </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

logging.basicConfig(filename='MyApplicationException.log')

try:
    1/0
except ZeroDivisionError:
    logging.exception("Division by Zero is performed")


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>MyApplicationException.log</b></p>
<pre class="result-content">
ERROR:root:Division by Zero is performed
Traceback (most recent call last):
  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LogggingException.py", line 6, in &lt;module>
    1/0
ZeroDivisionError: division by zero
</pre></div>

<hr/>

<hr/>




#### log(level, msg, *args, **kwargs)

<p> logs message with given log level. </p>

 level           | value
 :--- | :---
 logging.DEBUG    | 10
 logging.INFO     | 20
 logging.WARNING  | 30
 logging.ERROR    | 40
 logging.CRITICAL | 50

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
logging.log(logging.WARNING, "Warning Message from log() method")


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">WARNING:root:Warning Message from log() method</pre></div>

<hr/>




#### setlevel(level)

<p> Sets the given logging 'level' for this logger. Messages with given logging level or higher logging level are processed. Messages with lower logging level than current logging level are ignored. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> Logging level constants and their values </strong> </li>
    </ul> 
</div>


 level           | value
 :--- | :---
 logging.NOTSET   |  0
 logging.DEBUG    | 10
 logging.INFO     | 20
 logging.WARNING  | 30
 logging.ERROR    | 40
 logging.CRITICAL | 50

<div id="tut-content"> 
    <ul>
        <li> <strong> Example </strong> </li>
    </ul> 
</div>

 {% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger()
logger.setLevel(logging.INFO)

logger.info('Message with same logger level as current level of logger.')
logger.error('Message with higher logger level than current level of logger.')
logger.debug('Message with lower logger level than current level of logger.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">
INFO:root:Message with same logger level as current level of logger.
ERROR:root:Message with higher logger level than current level of logger.
</pre></div>


<hr/>


#### addHandler(hdlr) 

<p> Adds handler object to to logger. </p>

<hr/>


#### removeHandler(hdlr)

<p> Removes handler object from the logger. </p>
<hr/>


#### addFilter(filter)

<p>  Adds filter object to the logger. </p>
<hr/>


#### removeFilter(filter)

<p> Removes filter object from the logger </p>
<hr/>



#### isEnabledFor(level)

<p> Returns True if given level of message will be processed. It first checks if level set by logging.disable(level) and then use getEffectiveLevel() to determine given level of message will be processed or not. </p>

<hr/>


#### getChild(suffix)

<p> Returns logger which is child of this logger with given suffix. </p>

<p> For example logging.getLogger('packageA').getChild('ModuleA1') is same as logging.getLogger('packageA.ModuleA1') </p>

<hr/>


#### handle(record)

<p> Handles given record by passing it to all handlers of this logger and to all of its parent. It is used for processing records received from socket or locally created. </p>

<hr/>

####  hasHandlers()


<p> Returns True if this logger or any logger in it's hierarchy has any handler configured to it . </p>

<hr/>


#### findCaller(stack_info=False, stacklevel=1) 

<p> Find and return caller's information in Tuple(filename,  line number, function name, stack information). </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> stack_info : </strong>  By default set to False returns None as stack information. If given True returns stack information of caller. </li>
        <li> <strong> stacklevel :  </strong> Skips the given number of stack frames before determining values to be return. </li>
    </ul> 
</div>

<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>

<div id="tut-img">
    <img src="/images/tutorials/python/moduleFindCaller.png" class="tut-img" alt="python logo">
</div>

<br/>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> ModuleA4.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
import secrets

logger = logging.getLogger(__name__)


def token_gen():
    callerInfo = logger.findCaller(stack_info=True, stacklevel=1)
    logger.debug(f'Caller info : {callerInfo}')

    for i in range(5):
        token = secrets.token_hex(16)
        logger.debug(f'generated  16 Bytes Token  [{token}]')



{% endhighlight %}
</div>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> LoggerFindCaller.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
from packageA1 import ModuleA4

logger = logging.getLogger(__name__)


def make_call():
    logger.debug('Invoking make_call()')
    ModuleA4.token_gen()



{% endhighlight %}
</div>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> ModuleFindCaller.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
from appLogging import LoggerFindCaller

logging.basicConfig(filename='myapp03.log', level=logging.DEBUG)

rootLogger = logging.getLogger('ModuleFindCaller')
rootLogger.debug('Logger Started')


def find_caller_demo():
    LoggerFindCaller.make_call()


find_caller_demo()




{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>myapp03.log</b></p>
<pre class="result-content">
DEBUG:ModuleFindCaller:Logger Started
DEBUG:appLogging.LoggerFindCaller:Invoking make_call()
DEBUG:packageA1.ModuleA4:Caller info : <div id="tut-highlight">('/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/ModuleFindCaller.py', 11, 'find_caller_demo', 'Stack (most recent call last):\n  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/ModuleFindCaller.py", line 14, in &lt;module>\n    find_caller_demo()\n  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/ModuleFindCaller.py", line 11, in find_caller_demo\n    LoggerFindCaller.make_call()')</div>
DEBUG:packageA1.ModuleA4:generated  16 Bytes Token  [e12174c4829f53858f7c9b6ea599e496]
DEBUG:packageA1.ModuleA4:generated  16 Bytes Token  [e72b9dba78920f7418f1d94ce1b6f2d3]
DEBUG:packageA1.ModuleA4:generated  16 Bytes Token  [991c0773772a3b32cb4069f59a037bf8]
DEBUG:packageA1.ModuleA4:generated  16 Bytes Token  [57c4fff0fb94905c94c30797046757f0]
DEBUG:packageA1.ModuleA4:generated  16 Bytes Token  [58e2c5b4fed90998f6d374be47345d81]

</pre></div>

<hr/>



## Handler Class

<p> Handles the log message and dispatches it to specified target. Logger object can be added zero or more handler object using addHandler() method.</p>


### Constructor

<p id="tut-cons"> Handler(level=NOTSET) </p>

<p> Create and returns handler object by performing following : </p>

<div id="tut-content"> 
    <ol>    
        <li> Set given level to handler object. </li>
        <li> Set Empty list to the filter list of handler. </li>
        <li> Create a lock using createLock() for serialized access to I/O mechanism.  </li>
    </ol>
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from logging import Handler, DEBUG
hobj = Handler(DEBUG)
print(hobj)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
&lt;Handler (DEBUG)>
</pre></div>

{% include callout.html content="**Note** : Handler class serves as the base class for other handler classes and object of Handler class are not created directly. " type="primary" %} 

<hr/>

### Functions


function | Explanation
:--- | :---
createLock()      | creates the thread lock which serializes the access to I/O functionality.
acquire()         | Acquires the thread lock created with createLock().
release()         | Releases the thread lock acquired with acquire().
setLevel(level)   | Sets the threshold for this handler to level. When handler is created by default it sets level to NOTSET which logs all messages.
setFormatter(fmt) | Sets the formatter for this handler to fmt.
addFilter(filter) | Adds the specified filter filter to this handler.
removeFilter(filter) | Removes the specified filter filter from this handler.
filter(record)    | Apply this handler’s filters to the record and return True if the record is to be processed.
flush()           |  Ensure all logging output has been flushed.
close()           | removes handler from an internal list of handler and release the resources acquired by the handler. Handler is closed when shutdown() is called.
handle(record)    | handles the record as per configuration of filters.
format(record)    | formats the record, if formatter is set it is used otherwise default formatter is used.
emit(record)      |  actually logs the specified logging record. It is intended to be implemented by subclass and by default it raises NotImplementedError.
handleError(record) | called from handler when an exception is encounter during emit() call.It can be ignored silently as below : It is advisable to set False in Production.

<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong>Ignoring exception encounter during emit()  : </strong> It ignored because developers are mostly interested in errors generated by application not the logging module it self. </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

logging.raiseExceptions = False


{% endhighlight %}
</div>

<hr/>

### Subclasses of Handler class

Subclass | Description
:--- | :---
StreamHandler | Sends messages to stream(File-like object)
FileHandler | Sends messages to Disk files.
RotatingFileHandler | Sends messages to Disk files and rotates the file when given file size exceed.
TimedRotatingFileHandler | Sends messages to Disk files and rotates the file at given time interval.
SMTPHandler | Sends message to a designated email address.
MemoryHandler | Sends message to buffer in memory which is flushed when specific criteria is matched.
NullHandler | Do nothing with error messages.
WatchedFileHandler | used for Unix like system which closes the file and reopens the file when files is changed.
QueueHandler | Sends message to queue like queue in multiprocessing.
HTTPHandler | Sends message to HTTP server using GET or POST
DatagramHandler | Sends message to UDP socket / Unix Domain socket.
SocketHandler | Sends message to TCP/IP socket / Unix sockets.
SysLogHandler | Sends message to Unix syslog daemon which may be on remote machine.
NTEventLogHandler | Sends messages to a Windows NT/2000/XP event log.


<hr/>

### StreamHandler

<p> Directs log messages to given Stream. </p>



<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor  </strong> </li>
    </ul> 
</div>

<p id="tut-cons"> StreamHandler(stream=None) </p>

<p> Returns new instance of StreamHandler class with given stream. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> stream : </strong> If given such as stout it will be used for logging output otherwise stderr is used by default. </li>
    </ul> 
</div>

<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>

Method  | Explanation
:--- | :---
emit(record)      | Emits record to stream, if exception information is present it is formatted using traceback.print_exception().
flush()           | flushes the stream.
setStream(stream) | Set given stream to handler's stream. Old stream is flushed before setting the new stream.


<div id="tut-content"> 
    <ul>
        <li> <strong> Attributes </strong> </li>
    </ul> 
</div>

Attribute | Explanation
:--- | :---
terminator | By default it's value is  set to '\n' which is used as line terminator when writing formatted string to stream.

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Example </strong> </li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
import sys

logger = logging.getLogger()
logger.setLevel(logging.INFO)
streamHndlr = logging.StreamHandler(sys.stdout)
logger.addHandler(streamHndlr)

logger.warning('High CPU usage ......')

streamHndlr.setStream(sys.stderr)

logger.warning('High CPU usage ......')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
[STDOUT]High CPU usage ......
</pre><pre id='tut-output-error' class="result-content">[STDERR]High CPU usage ......</pre></div>

<hr/>



### FileHandler

<p> Writes logging output to disk file. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor </strong> </li>
    </ul> 
</div>

<p id= "tut-cons"> FileHandler(filename, mode='a', encoding=None, delay=False)  </p>

<p> Returns new instance of FileHandler class. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> filename : </strong> Given filename(path + filename) is opened and used as the stream for logging. </li>
        <li> <strong> mode : </strong> File mode if not specified, by default 'a' is used. </li>
        <li> <strong> encoding : </strong> if given used to open the file, by default system default encoding is used. </li>
        <li> <strong> delay : </strong> Default False opens the file when creating a FileHandler instance, if True it delays file opening until first emit() is called. </li>
    </ul> 
</div>

<br/>
<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>

Method | Explanation
:--- | :---
emit(record) | Outputs the record file.
close()  | close the file.

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Example </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

fileHndlr = logging.FileHandler(filename='FileHandler.log', mode='a+')
logger.addHandler(fileHndlr)

logger.info('FileHandler started ......')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>FileHandler.log</b></p>
<pre class="result-content">
FileHandler started ......
</pre></div>

<hr/>



### RotatingFileHandler

<p> Rotates log file based given max size and maintains given number backup file of given max size. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor </strong> </li>
    </ul> 
</div>

<p id= "tut-cons"> RotatingFileHandler(filename, mode='a', maxBytes=0, backupCount=0, encoding=None, delay=False)  </p>

<p> Returns a new instance of the RotatingFileHandler class. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> filename : </strong> Given filename(path + filename) is opened and used as the stream for logging. </li>
        <li> <strong> mode : </strong> File mode if not specified, by default 'a' is used. </li>
        <li> <strong> maxBytes : </strong>When file size exceeds maxBytes, file is closed and new file is opened silently for output. </li>
        <li> <strong> backupCount : </strong> When set to > 0 saves filled log files appending '.1', '.2', '.3' etc up to given number of backupCount. </li>
        <li> <strong> encoding : </strong> If given, used as file encoding or system default encoding is used. </li>
        <li> <strong> delay : </strong> Default False opens the file when creating a FileHandler instance, if True it delays file opening until first emit() is called. </li>
    </ul> 
</div>

<p> If one of 'backupCount' or maxBytes is zero rollover never occurred. </p>


<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
doRollover() | does the rollover.
emit(record) |  outputs the record to file.


<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Example</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
from logging.handlers import RotatingFileHandler
import secrets

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)


rotatingFH = RotatingFileHandler(filename="./rotatingLogs/Applog", mode='a', maxBytes=500, backupCount=3)
logger.addHandler(rotatingFH)

for i in range(500):
    token = secrets.token_hex(16)
    logger.debug(f'generated  16 Bytes Token  [{token}]')



{% endhighlight %}
</div>

<p> <strong> Output will contain following files : </strong> </p>

<div class="result"><p class="result-header"><b>Applog</b></p>
<pre class="result-content">
generated  16 Bytes Token  [8abf0109f121b04568aab159ded090bd]
generated  16 Bytes Token  [c884bfe7dcee4aa5388ac30225ab01e3]
generated  16 Bytes Token  [cc681d83da6bd3ef29984073f8ea4f02]
generated  16 Bytes Token  [95902918c90542a8d4a23a2af2925013]
</pre></div>

<br/>


<div class="result"><p class="result-header"><b>Applog.1</b></p>
<pre class="result-content">
generated  16 Bytes Token  [dc6c1b5e41bba3ef71149368f17254aa]
generated  16 Bytes Token  [60acecadb240d5a711550037f6a86ced]
generated  16 Bytes Token  [7fd8dd05bfdf55af13bea50b9cefa968]
generated  16 Bytes Token  [b3aa6f496bf6b0d778cf21e007e45148]
generated  16 Bytes Token  [254874ed3c9da172480e0b2d6db826b4]
generated  16 Bytes Token  [349ecd087d95a50f7c697d8b884a17df]
generated  16 Bytes Token  [90f4e4dbf32c547ed1521c42dda1fb51]
generated  16 Bytes Token  [2bf603744e082d34a017a45040af7541]
</pre></div>


<br/>

<div class="result"><p class="result-header"><b>Applog.2</b></p>
<pre class="result-content">
generated  16 Bytes Token  [37c1868862c72e8511ae0dd70eeaee11]
generated  16 Bytes Token  [1e06db98e768974db10cbf4df249c278]
generated  16 Bytes Token  [fdbdaaa41aa04b088f8fe1b656a93934]
generated  16 Bytes Token  [3884f76be7188b7cf99ef26040bc1a72]
generated  16 Bytes Token  [fbf7cd0d63e44bbf3994b9efd60532ee]
generated  16 Bytes Token  [5237a766e43f9d7d1060936b4706cf98]
generated  16 Bytes Token  [600b34989d60ea35646f25c92b1f92fe]
generated  16 Bytes Token  [80edd4c3f05baec93a54579a1174fcd0]
</pre></div>

<br/>


<div class="result"><p class="result-header"><b>Applog.3</b></p>
<pre class="result-content">
generated  16 Bytes Token  [f5db50a9211bb734add1042745f35c05]
generated  16 Bytes Token  [6c0db89b49ff5bb8f5cf5d92e4eea834]
generated  16 Bytes Token  [8cb9d8460f4a357a6d3f45870d0cb7f6]
generated  16 Bytes Token  [f41636a5bde61b3b5bdd09f4a3be1738]
generated  16 Bytes Token  [eb8476b43ca54786d3d7740fbb2d2dda]
generated  16 Bytes Token  [ea744dc26e9ee61985f9f4c4247e47d4]
generated  16 Bytes Token  [2c0978b8c0270c25254113069534b744]
generated  16 Bytes Token  [6d874a5e998d615564831ec67f442ac6]
</pre></div>

<br/>


{% include callout.html content="**Note** : Older log file exceeding backupCount are deleted automatically." type="primary" %} 

<hr/>




### TimedRotatingFileHandler

<p> Rotates log file based on given time interval.</p>

<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor </strong> </li>
    </ul> 
</div>

<p id="tut-cons"> TimedRotatingFileHandler(filename, when='h', interval=1, backupCount=0, encoding=None, delay=False, utc=False, atTime=None) </p>

<p> Returns a new instance of the TimedRotatingFileHandler class. Rotation of file happens based on 'when' and 'interval' parameters.</p>

<div id="tut-content"> 
    <ul>
        <li> <strong> filename : </strong> Given filename is opened and used as stream for logging. </li>
        <li> <strong> when : </strong> Can have one of the following possible value.  </li>
    </ul> 
</div>

value      |  Type of Interval           |  how atTime is used
:--- | :--- | :---
'S'        |  Seconds                    | ignored
'M'        |  Minutes                    | ignored
'H'        |  Hours                      | ignored
'D'        |  Days                       | ignored
'W0'-'W6'  |  Weekday(0=Monday)          | used for setting initial rollover time
'midnight' |  Rollover at midnight if atTime not specified else atTime is used   | used for setting initial rollover time

<div id="tut-content"> 
    <ul>
        <li> <strong> interval : </strong> Numeric value according value set in 'when'.</li>
        <li> <strong> utc : </strong> If set to true UTC time is used otherwise local time is used. </li>
        <li> <strong> backupCount :  </strong> Value > zero determines no of backup files to be kept. If more than backupCount log file is created oldest one is deleted. Deletion logic uses interval to determine which file to delete, changing interval will leave old file un-deleted. </li>
        <li> <strong> delay :  </strong> Default False opens the file when creating a FileHandler instance, if True it delays file opening until first emit() is called. </li>
        <li> <strong> atTime : </strong> If given must be an instance of datetime.time which specifies time of the day when rollover of the file occurs. </li>
    </ul> 
</div>


<p> Calculation of initial rollover is calculated when handler is initialized, calculation of subsequent rollover is only done when rollover occurs while emitting output. </p>

<p> For example if  rollover is configured for every minute. It will only create rollover for each minute if and only if there is at least one emit of record per minute.  </p>


<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
doRollover() | Does the rollover
emit(record) | Output the record to file.


<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Example </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
from logging.handlers import TimedRotatingFileHandler
import secrets
import random
import time

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)


timedrotateFH = TimedRotatingFileHandler(filename="./timedRotatingLogs/Applog", when='S', interval=2, backupCount=3)
logger.addHandler(timedrotateFH)

for i in range(45):
    time.sleep(random.uniform(0.05, 0.2))
    token = secrets.token_hex(16)
    logger.debug(f'generated  16 Bytes Token  [{token}]')



{% endhighlight %}
</div>

<p> <strong> Output will contain following files : </strong> </p>

<div class="result"><p class="result-header"><b>Applog</b></p>
<pre class="result-content">
generated  16 Bytes Token  [b631fdb68a68f1e27e2a99de17a0dca1]
generated  16 Bytes Token  [4a58daaccd9f3165ed4d40dcb0c2f559]
generated  16 Bytes Token  [8d9ca71833a163acc11da648c055dcc9]
generated  16 Bytes Token  [b5eae34b8b14764ac983f4b2d690e7a6]
generated  16 Bytes Token  [0bdaf09f425daacdadcd9eb02af017f0]

</pre></div>

<br/>


<div class="result"><p class="result-header"><b>Applog.2020-05-19_21-00-18</b></p>
<pre class="result-content">
generated  16 Bytes Token  [ffdf52db0c5f427ea746414b3779855a]
generated  16 Bytes Token  [e019d634a7ba29fe99134b9ff74dd701]
generated  16 Bytes Token  [2a56855eabbe11035c0712afd3e94686]
generated  16 Bytes Token  [47f0ebba0014847ddfa5c255696a8c9b]
generated  16 Bytes Token  [cdf0e0ef07e7eb602cd22bf3db357698]
generated  16 Bytes Token  [c1711fbb4f0c4cc3591d52073cf25d6e]
generated  16 Bytes Token  [2628316549d6ae9a2c9cb17784878d39]
</pre></div>

<br/>

<div class="result"><p class="result-header"><b>Applog.2020-05-19_21-00-20</b></p>
<pre class="result-content">
generated  16 Bytes Token  [d438cb42e34baafa1d08f027d0d1a826]
generated  16 Bytes Token  [4c145f2fd42a41894e77be10879fb5f0]
generated  16 Bytes Token  [1cf1cb5094d23da9b9bf0a1b036b751c]
generated  16 Bytes Token  [b50447ccb73ff552d021059d85469159]
generated  16 Bytes Token  [80e1ea68754528e4d303ec980be7f4f3]
generated  16 Bytes Token  [0bfabe6a118741ea718f06df873d8682]
generated  16 Bytes Token  [8dc1d562bc855ceabf0f468a7985b1a9]
generated  16 Bytes Token  [5f5844f6f2fdfb3d757fb41b0bd99c88]
generated  16 Bytes Token  [dd337aab9aeb8479e2da1a3bf011123c]
generated  16 Bytes Token  [9b579c7d86eb1c7f5a5e68001f58409c]
generated  16 Bytes Token  [fec9889e117d8935f9b2b860796adbd1]
generated  16 Bytes Token  [29e946e206436c11caf44fb4640b6ac7]
generated  16 Bytes Token  [9377a529b99ba508d60df981d2cfcf4d]
generated  16 Bytes Token  [4c700b5cf85eb9e674fec1c4f06d378d]
generated  16 Bytes Token  [9aad015f97a257cf809f0030d91a312b]
</pre></div>

<br/>

<div class="result"><p class="result-header"><b>Applog.2020-05-19_21-00-22</b></p>
<pre class="result-content">
generated  16 Bytes Token  [ec22cf6cc5ea890342aadc0f6937d14b]
generated  16 Bytes Token  [315886cf95c13f36d972070584abcb31]
generated  16 Bytes Token  [4739e88014fdcf734cd0669f535dd2f1]
generated  16 Bytes Token  [2f06ea9085a1c531d2c10df5dfc0a7df]
generated  16 Bytes Token  [67d256471cc351d6a01a16e31a56e0c9]
generated  16 Bytes Token  [1130b948613cfdb0ce6ebcbc4f649273]
generated  16 Bytes Token  [97d7874df62e558e7414789d04fc530a]
generated  16 Bytes Token  [0b931098f3f001e8be31d60bb4bfb0ac]
generated  16 Bytes Token  [fbb1458505982a6df98156b5d02e41e8]
generated  16 Bytes Token  [24c0e78a0ed63cfaf4f11e8802f4a8f2]
generated  16 Bytes Token  [71e3c4c4bba3f85a93b988577ceb13ef]
generated  16 Bytes Token  [bc0072aa27ce4e03a431eb5a11c68c80]
generated  16 Bytes Token  [3434c440cd7c8273e64864dcf6967ca1]
generated  16 Bytes Token  [0dd64cf3f2cda8d091846016c01b1e19]
generated  16 Bytes Token  [68023ffbb6c8a7c7ce2c4333b70d232f]
</pre></div>


<hr/>



### SMTPHandler

<p> Sends logging message to email address via SMTP. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor </strong> </li>
    </ul> 
</div>

<p id="tut-cons"> SMTPHandler(mailhost, fromaddr, toaddrs, subject, credentials=None,  secure=None, timeout=1.0) </p>

<p> Returns a new instance of the SMTPHandler class initialized with from and to addresses and subject line of the email. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> mailhost : </strong> For SMTP port a string representing hostname is used , or else Tuple(hostname, port). </li>
        <li> <strong> toaddrs : </strong> list of string which contains email addresses to whom email of log message to be send. </li>
        <li> <strong> credentials : </strong> Takes Tuple(username, password) for authentication. </li>
        <li> <strong> secure : </strong> If credentials argument provided secure argument specify to the use of secure protocol (TLS) in Tuple(keyFile,) or Tuple(keyFile, certificateFile). </li>
        <li> <strong> timeout : </strong> communication timeout with SMTP server. </li>
    </ul> 
</div>


<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
emit(record) | formats the record and sends to specified email addresses.
getSubject(record) | defines subject for record, it can be override to return custom subject based on conditions.


<hr/>



### NullHandler

<p> Discards LogRecords sent to it. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor </strong> </li>
    </ul> 
</div>

<p id="tut-cons"> NullHandler() </p>

<p> Returns instance of  NullHandler which is a 'no-op' handler. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
emit(record) | it does nothing.
handle(record) | it does nothing.
createLock() | returns None for the lock, because no underlying I/O to which access needs to be serialized.


<hr/>



### MemoryHandler

<p> Buffers logging records in memory which can periodically be transferred to target handler. </p>



<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor</strong> </li>
    </ul> 
</div>

<p id="tut-cons"> MemoryHandler(capacity, flushLevel=ERROR, target=None, flushOnClose=True) </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> capacity : </strong> defines maximum number of logging records to be buffered. </li>
        <li> <strong> flushLevel : </strong> By default set to ERROR, flushes buffer when Error is raised. </li>
        <li> <strong> target :  </strong> target handler to handler LogRecords when flush is executed. </li>
        <li> <strong> flushOnClose : </strong> By default True flushes buffered LogRecords to target handler. </li>
    </ul> 
</div>


<br/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
shouldFlush(record) | returns True if buffer is holding maximum number of records. 
flush() | Sends buffered record to target and clears the buffer if target exists.
setTarget(target) | sets the target handler for this handler.
emit(record) | Appends record to buffer.If shouldFlush() returns true, call flush() to process the buffer.
close() | calls flush(), sets target to None and clears the buffer.



<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Example </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
from logging.handlers import MemoryHandler
import secrets

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

fileHandler = logging.FileHandler(filename='FileHandlerErrors.log', mode='a+')
nullHandler = logging.NullHandler()
memoryHndlr = MemoryHandler(capacity=15, target=nullHandler, flushOnClose=False)

logger.addHandler(memoryHndlr)


for i in range(5000):
    token = secrets.token_hex(16)
    logger.debug(f'generated  16 Bytes Token  [{token}]')



try:
    1/0
except ZeroDivisionError:
    memoryHndlr.setTarget(fileHandler)
    logger.error('Division by zero attempted!')
    memoryHndlr.setTarget(nullHandler)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>FileHandlerErrors.log</b></p>
<pre class="result-content">
generated  16 Bytes Token  [52304d8b6c57e9d89870bc5dff633af8]
generated  16 Bytes Token  [d8591fe81bf6f75d85dc0ebe10b10999]
generated  16 Bytes Token  [575d1c06fe737578e06e28e1542dbb79]
generated  16 Bytes Token  [a5bc2ccc214e725846fb76feb05343ad]
generated  16 Bytes Token  [5ed652c71132ad641a4c976d90c7f24e]
Division by zero attempted!
</pre></div>

<hr/>






### WatchedFileHandler

<p> Watches for the log file changes, if file is moved or removed it closes and reopens the file. It watches the file it is logging to, intended to use for Unix/Linux only. file change happens when UNIX programs such as newsyslog and logrotate performs log rotation. </p>



<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor</strong> </li>
    </ul> 
</div>

<p id="tut-cons"> WatchedFileHandler(filename, mode='a', encoding=None, delay=False) </p>

<p> Returns a new instance of the WatchedFileHandler class. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> filename : </strong> given filename is opened and used as stream for logging. </li>
        <li> <strong> mode : </strong> Default 'a' is used if not given. </li>
        <li> <strong> encoding : </strong> If given used as file encoding or system default encoding is used. </li>
        <li> <strong> delay : </strong> Default False opens the file when creating a FileHandler instance, if True it delays file opening until first emit() is called.</li>
    </ul> 
</div>


<br/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
reopenIfNeeded() | Checks to see if file has changed. If changed existing stream is flushed and closed and re-opened again.
emit(record) | outputs the record by calling first reopenIfNeeded().

<hr/>



### QueueHandler

<p> A Multi threaded handler in which handler works on separate thread from the thread which performs logging. It improves response time for handlers which take more time to process such as SMTPHandlers.
</p>



<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor</strong> </li>
    </ul> 
</div>

<p id="tut-cons"> QueueHandler(queue) </p>

<p> Returns a new instance of the QueueHandler class with The instance initialized with the queue to send messages to. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> queue : </strong> Can be any queue like object (SimpleQueue instance). </li>
    </ul> 
</div>


<br/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
emit(record) | Enqueue the result of preparing LogRecord. If the queue is full handleError() method is called to handle the error.
prepare(record) | Prepares the record for queuing , object returned by this method is enqueued. <br/> It formats message, argument and exception information if present.<br/> It removes unpickleable items from the record. <br/>This method can be override for converting the record to a dict or JSON string or send a modified copy of record while leaving original copy intact.
enqueue(record) | Enqueue the record on the queue using put_nowait(). Method can be customized as per requirement.


<hr/>


#### QueueListener


<p> A Multi threaded handler in which handler works on separate thread from the thread which performs logging. It improves response time for handlers which take more time to process such as SMTPHandlers.
</p>



<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor</strong> </li>
    </ul> 
</div>

<p id="tut-cons"> QueueListener(queue, *handlers, respect_handler_level=False) </p>

<p> Returns a new instance of the QueueListener class initialized with queue to send message to and list of handlers which handles entries placed on queue. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> queue : </strong> Can be any queue like object (SimpleQueue instance). </li>
        <li> <strong> respect_handler_level : </strong> If passed True matches handler level with message level before passing message to handler. Default False will pass every message to each handler. </li>
        <li> <strong> *handlers : </strong> handlers which handles the queue entries. </li>
    </ul> 
</div>

<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
dequeue(block) | Dequeue a record and return it, optionally block argument. <br/> <strong>block : </strong> determines the get() call on queue is blocking or non-blocking. <br/> It uses get() method of queue which is by default blocking which can be override to customize behaviour.
prepare(record) | Prepare a record for handling. <br/> By default it returns the record passed as it is.It can be override to manipulate the record before passing it to the handler.
handle(record) | Handles the record. It loops through the handlers offering record to handler. It passes the same record returned from prepare().
start() | Starts the listener which is a background thread to monitor queue for LogRecord to process.
stop()  | Stops the listener. <br/> It asks the thread to stop and then wait for the thread to stop. <br/> If this method is not called before your application exits, there may be some record left on queue which will remain un-processed.
enqueue_sentinel() | Writes a sentinel to the queue to tell the listener to quit. <br/> It uses put_nowait() by default.



<br/>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from logging.handlers import QueueHandler, QueueListener
import queue
import logging
import sys

logQueue = queue.SimpleQueue()
qHandler = QueueHandler(logQueue)

handler = logging.StreamHandler(sys.stdout)  # Here StreamHandler can be replaced with SMTPHandler.
listener = QueueListener(logQueue, handler)


logger = logging.getLogger()
logger.addHandler(qHandler)


listener.start()

logger.warning('=========     A message through queue     =========')
logger.warning('+++++++++   Second message through queue   +++++++++ ')

listener.stop()



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
=========     A message through queue     =========
+++++++++   Second message through queue   +++++++++ 
</pre></div>

<hr/>



### SocketHandler

<p> Sends logging output to network socket. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor</strong> </li>
    </ul> 
</div>

<p id="tut-cons"> SocketHandler(host, port) </p>

<p> Returns new instance of SocketHandler class. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> host : </strong> Host address. </li>
        <li> <strong> port : </strong> If specified as None uses Unix domain socket using value provided in host, otherwise TCP socket is used.</li>
    </ul> 
</div>

<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
close() | Closes the socket.
emit() | Pickles the record.\__dict__ and writes to socket in binary format.<br/> If error occurred in communication with socket , it drops packet silently. <br/> If connection lost previously it re-establishes the connection. <br/> At receiving end makeLogRecord() function is used for un-pickling the record.
handleError() |  Handles error occurred while executing emit(). <br/> Mostly the cause of the error is a lost connection which can be handled by closing the socket which can be retry on next event.
makeSocket() | Factory method which allows subclasses to define the precise type of socket. <br/> By default it creates a TCP socket (socket.SOCK_STREAM).
makePickle(record) | pickles record.\__dict__  in binary format with prefix, and returns it ready for transmission across the socket.
send(packet) | Send a pickled byte-string message to the socket. <br/> It allows partial send which can happen when network is busy.
createSocket() | Tries to create the socket, on failure uses exponential back-off algorithm.<br/> On initial failure, the handler will drop the message it was trying to send. Subsequent message sent to same instance will wait until timeout expires. <br/> Default initial delay is 1 sec, after that on failure it doubles the delay until in reaches maximum 30 sec.


<p> <strong> Timeout behaviour can be controlled by using following attributes of handler : </strong> </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> retryStart : </strong> (initial delay) default 1.0 sec. </li>
        <li> <strong> retryFactor : </strong> (multiplier) default is 2.0 sec. </li>
        <li> <strong> retryMax : </strong> (maximum delay) default is 30.0 sec. </li>
    </ul> 
</div>

<hr/>


### DatagramHandler

<p> Subclass of SocketHandler which sends logging messages over UDP sockets. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor</strong> </li>
    </ul> 
</div>

<p id="tut-cons"> DatagramHandler(host, port) </p>

<p> Returns new instance of datagramHandler which communicates with remote machine with given host and port. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> host : </strong> Host address. </li>
        <li> <strong> port : </strong> If port is specified as None Unix domain socket is created otherwise, a UDP socket is created.</li>
    </ul> 
</div>

<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
emit() | Pickles the record.__dict__ and writes to the socket in binary.<br/>If there is an error with socket, drops package silently.<br/> To unpickle the record at receiving end into LogRecord use makeLogRecord() function.
makeSocket() | Factory method of SocketHandler which is overridden to create UDP socket (socket.SOCK_DGRAM).
send(s) | Send a pickled byte-string to a socket. Format of byte-string is same as SocketHandler.makePickle().


<hr/>




### HTTPHandler

<p> Supports sending logging message to a web server using GET and POST method. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor</strong> </li>
    </ul> 
</div>

<p id="tut-cons"> HTTPHandler(host, url, method='GET', secure=False, credentials=None, context=None) </p>

<p> Returns a new instance of the HTTPHandler class. </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> host : </strong> Defined as host:port combination. </li>
        <li> <strong> method :  </strong> Default 'GET' is used, it can be give as 'POST'.</li>
        <li> <strong> secure : </strong> If set to 'True' HTTPS is used for secure connection. </li>
        <li> <strong> credentials : </strong> If specified must be Tuple(userId, password) which will be used for authentication. </li>
    </ul> 
</div>

<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Methods </strong> </li>
    </ul> 
</div>


Method | Explanation
:--- | :---
mapLogRecord(record) | Returns the dictionary based record which is sent to URL-encoded.<br/> Default implementation returns record.\__dict__.<br/> It can be override to send only subset of record.\__dict__ to web server.
emit(record) | Sends the record to the Web server as a URL-encoded dictionary.


{% include callout.html content="**Note** : setting formatter() for HTTPHandler() has no effect , for customization of record mapLogRecord() is needs to be override." type="primary" %} 

<hr/>



## Filters 

<p> Filters can be used by handlers and loggers for more specific filtering from filtering record based on log level. </p>


### Filter class

<p> Filtering log message based on logger hierarchy. </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor</strong> </li>
    </ul> 
</div>

<p id="tut-cons"> Filter(name='') </p>

<p> Returns an instance of the filter class. </p>


<div id="tut-content"> 
    <ul>
        <li> Base Filter class only allows events which are below the a certain point in the logger hierarchy. For e.g. A filter is initialized with 'A.B' will allow events logged by 'A.B.X', 'A.B.X.Y', 'A.B.Z' but not the 'A.P', 'B.Q'. </li>
        <li> If initialized name with empty string all events are passed. </li>
        <li> Filter attached to handler before an event is emitted by the handler. </li>
        <li> Filter attached to logger before an event is logged using methods like info(), debug() etc.</li>
    </ul> 
</div>


<hr/>


<div id="tut-content"> 
    <ul>
        <li> Project Structure  </li>
    </ul> 
</div>
<div id="tut-img">
    <img src="/images/tutorials/python/LoggingWithFilters.png" class="tut-img" alt="python logo">
</div>

<br/>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> ModuleA2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
logger = logging.getLogger(__name__)


def hello_module():
    logger.info('Message from packageA1 -> ModuleA2')



{% endhighlight %}
</div>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> ModuleB2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
logger = logging.getLogger(__name__)


def hello_module():
    logger.info('Message from packageB1 -> ModuleB2')


{% endhighlight %}
</div>




<p> <i class="fa fa-file-text" aria-hidden="true"></i> ModuleM1.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
logger = logging.getLogger(__name__)


def hello_module():
    logger.info('Message from ModuleM1.')

{% endhighlight %}
</div>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> LoggingWithFilter.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
import sys

from appLogging.packageA1 import ModuleA2
from appLogging.packageB1 import ModuleB2
from packageB import ModuleM1

logger = logging.getLogger()
logger.setLevel(logging.INFO)


# adding Handler
sh = logging.StreamHandler(stream=sys.stdout)
sh.setLevel(logging.INFO)


# adding filter
onlyAppLogging = logging.Filter('appLogging')
sh.addFilter(onlyAppLogging)

# attaching handler
logger.addHandler(sh)

logger.info('Hierarchy 1 is created')

# Invoking functions
ModuleA2.hello_module()
ModuleB2.hello_module()
ModuleM1.hello_module()



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Message from packageA1 -> ModuleA2
Message from packageB1 -> ModuleB2
</pre></div>

<hr/>


### Filter with custom business logic

<p> By creating subclass of logging.Filter class and overriding filter method, business logic to filter records can be customized. </p>

<p> Customized filters can also be used fro : </p>

<div id="tut-content"> 
    <ul>
        <li> Counting how many records were processed by a particular logger or handler. </li>
        <li> Adding, changing or removing attributes in the LogRecord being processed. </li>
    </ul> 
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Syntax of filter method</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from logging import LogRecord


def filter(record: LogRecord) -> int:
    pass

{% endhighlight %}
</div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Attributes of LogRecord </strong> </li>
    </ul> 
</div>

Attribute          | Meaning
:--- | :---
args               | Variable positional arguments passed to logging method which is used to format message
created            | Unix timestamp of when log record was created
exc_info           | Exception information pass in format of sys.exc_info()
exc_text           | Cached formatted exception
filename           | Name of file
funcName           | Function name
levelname          | Logging level name
levelno            | Logging level numeric
lineno             | Line number where logging method was invoked.
module             | Module name
msecs              | Millisecond portion of time when log was created
msg                | message passed to logging method
name               | Name of the logger instance
pathname           | Full path name of source file
process            | Process ID of program
processName        | Name of Process
relativeCreated    | Milliseconds in time of when message logged relative to time when module was loaded.
stack_info         | Stack information of call
thread             | Thread id
threadName         | Thread name

<br/>

<div id="tut-content"> 
    <ul>
        <li> <strong>Filtering record based on message content</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
import sys
from logging import LogRecord


class CustomFilter(logging.Filter):

    def filter(self, record: LogRecord) -> int:

        print(f'\n{"*"*8} Filter received LogRecord : {"*"*8}\n')

        for attr in [a for a in dir(record) if not a.startswith('__')]:
            print(f'{attr} : {getattr(record, attr)}')

        if 'Failure' in record.msg:
            return 1
        return 0


logger = logging.getLogger('CustomFilterLogger')
logger.setLevel(logging.DEBUG)

# Creating Handler
sh = logging.StreamHandler()
sh.setLevel(logging.DEBUG)

# Adding Filter
cf = CustomFilter()
sh.addFilter(cf)

# Adding formatter
logFormat = logging.Formatter('%(asctime)s : %(levelname)s : %(name)s : %(message)s')
sh.setFormatter(logFormat)

logger.addHandler(sh)


# Logging record
def custom_filter_demo():
    code = 1590
    logger.debug('Client connection Failure : %s', code, stack_info=True, extra={'POD': 'AACXXX'})


custom_filter_demo()


#
# Logging Exception
def custom_filter_demo2():
    try:
        1/0
    except ZeroDivisionError:
        logger.warning('Divide by Zero attempted', exc_info=sys.exc_info(), stack_info=True)


custom_filter_demo2()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">2020-05-23 09:46:02,122 : DEBUG : CustomFilterLogger : Client connection Failure : 1590
Stack (most recent call last):
  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LoggingWithContextFilter.py", line 48, in &lt;module>
    custom_filter_demo()
  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LoggingWithContextFilter.py", line 45, in custom_filter_demo
    logger.debug('Client connection Failure : %s', code, stack_info=True, extra={'POD': 'AACXXX'})
</pre>
<pre class="result-content">

******** Filter received LogRecord : ********

POD : AACXXX
args : (1590,)
created : 1590207362.1229954
exc_info : None
exc_text : None
filename : LoggingWithContextFilter.py
funcName : custom_filter_demo
getMessage : &lt;bound method LogRecord.getMessage of &lt;LogRecord: CustomFilterLogger, 10, /home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LoggingWithContextFilter.py, 45, "Client connection Failure : %s">>
levelname : DEBUG
levelno : 10
lineno : 45
module : LoggingWithContextFilter
msecs : 122.99537658691406
msg : Client connection Failure : %s
name : CustomFilterLogger
pathname : /home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LoggingWithContextFilter.py
process : 5289
processName : MainProcess
relativeCreated : 3.4301280975341797
stack_info : Stack (most recent call last):
  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LoggingWithContextFilter.py", line 48, in &lt;module>
    custom_filter_demo()
  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LoggingWithContextFilter.py", line 45, in custom_filter_demo
    logger.debug('Client connection Failure : %s', code, stack_info=True, extra={'POD': 'AACXXX'})
thread : 139877265205056
threadName : MainThread

******** Filter received LogRecord : ********

args : ()
created : 1590207362.1236613
exc_info : (&lt;class 'ZeroDivisionError'>, ZeroDivisionError('division by zero'), &lt;traceback object at 0x7f37b6611a00>)
exc_text : None
filename : LoggingWithContextFilter.py
funcName : custom_filter_demo2
getMessage : &lt;bound method LogRecord.getMessage of &lt;LogRecord: CustomFilterLogger, 30, /home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LoggingWithContextFilter.py, 57, "Divide by Zero attempted">>
levelname : WARNING
levelno : 30
lineno : 57
module : LoggingWithContextFilter
msecs : 123.66127967834473
msg : Divide by Zero attempted
name : CustomFilterLogger
pathname : /home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LoggingWithContextFilter.py
process : 5289
processName : MainProcess
relativeCreated : 4.096031188964844
stack_info : Stack (most recent call last):
  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LoggingWithContextFilter.py", line 60, in &lt;module>
    custom_filter_demo2()
  File "/home/asha/PycharmProjects/pythonEx/06_ModuleAndPackage/appLogging/LoggingWithContextFilter.py", line 57, in custom_filter_demo2
    logger.warning('Divide by Zero attempted', exc_info=sys.exc_info(), stack_info=True)
thread : 139877265205056
threadName : MainThread</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Creating subclass of the filter is not required, any function ( callable) can be with same signature of filter method can be replaced on Filter object.</strong> </li>
    </ul> 
</div>

<p> Replacing following code in above example produces same result. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
import sys
from logging import LogRecord, Filter

def custom_filter(record: LogRecord) -> int:

    print(f'\n{"*"*8} Filter received LogRecord : {"*"*8}\n')

    for attr in [a for a in dir(record) if not a.startswith('__')]:
        print(f'{attr} : {getattr(record, attr)}')

    if 'Failure' in record.msg:
        return 1
    return 0



f1 = Filter()
f1.filter = custom_filter


{% endhighlight %}
</div>


<hr/>


## LoggerAdapter

<p> Adds contextual information to log message. </p>

<div id="tut-content"> 
    <ul>
        <li> To add contextual information Object of LoggerAdapter class can be wrapped around logger instance. </li>
        <li> It has same logging methods (debug(), info() etc.) for logging as the logger object have. </li>
        <li> LoggerAdapter's logging methods (debug(), info() etc.) delegates call to logger objects logging methods after invoking process() method. </li>
    </ul> 
</div>

<p> Syntax of debug() logging method of LoggerAdapter class : </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def debug(self, msg, /, *args, **kwargs):
    msg, kwargs = self.process(msg, kwargs)
    self.logger.debug(msg, *args, **kwargs)


{% endhighlight %}
</div>


<div id="tut-content"> 
    <ul>
        <li>  By default process() method returns given argument as it is, but it can be override to get insert contextual information. </li>
        <li> Inside process() method key-values of dictionary passed using 'extra' parameter is used for formatting custom message. </li>
        <li> While invoking logging methods of LoggerAdapter class, it requires to pass dictionary object with set of key which is used to format custom message, but their values can vary. </li>
    </ul> 
</div>


<hr/>

<div id="tut-content"> 
    <ul>
        <li> Example </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging


class MyAppLogAdapter(logging.LoggerAdapter):
    def process(self, msg, kwargs):
        return f"[ {self.extra['clientId']} ]  {msg} ", kwargs


logger = logging.getLogger('appLogginngAdapter')
logger.setLevel(logging.DEBUG)

# adding Handler
sh = logging.StreamHandler()
sh.setLevel(logging.DEBUG)

# Adding formatter
logFormat = logging.Formatter('%(asctime)s : %(levelname)s : %(name)s : %(message)s')
sh.setFormatter(logFormat)

# adding handler to logger
logger.addHandler(sh)

clientInfo = {'clientId': '1cv21vvc21vbctztxymn12pa'}
loggerAdapter = MyAppLogAdapter(logger, extra=clientInfo)

loggerAdapter.debug('Login Attempted')

logger.debug('Normal Log message')

clientInfo['clientId'] = '1z3x2c1as1ca21a5s4a21sxc'
loggerAdapter.debug('Login Attempted')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">2020-05-23 13:57:44,518 : DEBUG : appLogginngAdapter : [ 1cv21vvc21vbctztxymn12pa ]  Login Attempted 
2020-05-23 13:57:44,518 : DEBUG : appLogginngAdapter : Normal Log message
2020-05-23 13:57:44,519 : DEBUG : appLogginngAdapter : [ 1z3x2c1as1ca21a5s4a21sxc ]  Login Attempted</pre></div>

<hr/>




## Formatter

<p> Returns formatted string by replacing LogRecord object's attributes values with keys specified in log format. </p>


### Formatter class

<p> When application requires special formatting, custom formatter object of Format class is created. </p>

#### Constructor

<p id="tut-cons"> Formatter(fmt=None, datefmt=None, style='%') </p>


<div id="tut-content"> 
    <ul>
        <li> <strong> fmt : </strong> Default none uses raw message. Format can be specified using formatting params described in basicConfig(). </li>
        <li> <strong> datefmt : </strong> If not given by default uses '%Y-%m-%d %H:%M:%S. It is same datetime format used with DateTime object. </li>
        <li> <strong> style : </strong> Default is '%' and can be one of '%', '$' or '{'. <br/>  <strong> '%'  : </strong> uses  %(&lt;dictionary key>)s styled string substitution. <br/> <strong> '$' : </strong> uses  Template('$key').substitute(key=&lt;dictionary key>) styled string substitution.<br/> <strong> '{' : </strong> uses  '{0}'.format(&lt;dictionary key>) or '{&lt;dictionary key>}' </li>
    </ul> 
</div>



#### Methods


Method  | Exmplanation
:--- | :---
format(record) | Returns log message in string by replacing LogRecord information with specified format.
formatTime(record, datefmt=None) | It is called from format() method which returns formatted time if format string contains '(asctime)'.
formatException(exc_info) | It's called from format() when logging method with exception information is called. By default uses traceback.print_exception() to format exception.
formatStack(stack_info) | It's called from format() when logging method with stack trace is called. By default formats the specified stack information returned by traceback.print_stack().


#### Attributes

<div id="tut-content"> 
    <ul>
        <li> <strong>  converter : </strong> By default time.localtime() is used for creation of time for log record. It can have one of two values time.localtime() or time.gmtime(). </li>
    </ul> 
</div>


<hr/>


#### Example

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
import sys
import time

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler(sys.stdout)

# formatting using '{'
cf = logging.Formatter('{asctime} : {levelname} : {name} : {message}', style='{')
handler.setFormatter(cf)

# Add handler
logger.addHandler(handler)

applogger = logging.getLogger('MyAppLogger')
applogger.debug("A message using { formatter  configuration.")

# formatting using '$'
df = logging.Formatter('$asctime : $levelname : $name : $message', style='$')
handler.setFormatter(df)

df.converter = time.gmtime

applogger.debug("A message using $ formatter  configuration.")




{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-05-23 15:25:00,732 : DEBUG : MyAppLogger : A message using { formatter  configuration.
2020-05-23 09:55:00,732 : DEBUG : MyAppLogger : A message using $ formatter  configuration.
</pre></div>

<hr/>



## Configuring Logging


### Using Python code

<p> Creating logger, handler, formatter objects in python code and setting handler and formatter to logger object. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
import sys

# create logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

# create console handler and set level to debug
ch = logging.StreamHandler(sys.stdout)
ch.setLevel(logging.WARNING)

# create formatter
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

# add formatter to ch
ch.setFormatter(formatter)

# add ch to logger
logger.addHandler(ch)

# 'application' code
logger.debug('debug message')
logger.info('info message')
logger.warning('warn message')
logger.error('error message')
logger.critical('critical message')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-05-23 15:41:18,524 - __main__ - WARNING - warn message
2020-05-23 15:41:18,524 - __main__ - ERROR - error message
2020-05-23 15:41:18,524 - __main__ - CRITICAL - critical message
</pre></div>

<hr/>




### Using logging.config file 

<p> Create a logging.config file and reading it using logging.config.fileconfig() function.</p>

<p> <i class="fa fa-file-text" aria-hidden="true"></i> logging.conf </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

[loggers]
keys=root,module1

[handlers]
keys=consoleHandler

[formatters]
keys=simpleFormatter

[logger_root]
level=DEBUG
handlers=consoleHandler

[logger_module1]
level=DEBUG
handlers=consoleHandler
qualname=module1
propagate=0

[handler_consoleHandler]
class=StreamHandler
level=DEBUG
formatter=simpleFormatter
args=(sys.stdout,)

[formatter_simpleFormatter]
format=%(asctime)s - %(name)s - %(levelname)s - %(message)s
qualname= module1

{% endhighlight %}
</div>


<p> <i class="fa fa-file-text" aria-hidden="true"></i> Module2.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
from logging.config import fileConfig

fileConfig('logging.conf')

# create logger
logger = logging.getLogger('module1')

# 'application' code
logger.debug('debug message')
logger.info('info message')
logger.warning('warn message')
logger.error('error message')
logger.critical('critical message')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-05-23 15:55:25,175 - module1 - DEBUG - debug message
2020-05-23 15:55:25,176 - module1 - INFO - info message
2020-05-23 15:55:25,176 - module1 - WARNING - warn message
2020-05-23 15:55:25,176 - module1 - ERROR - error message
2020-05-23 15:55:25,176 - module1 - CRITICAL - critical message
</pre></div>

<hr/>


### Using Dictionary [Recommended]

<p> Create a dictionary of configuration and passing it to dictconfig() function.</p>

<div id="tut-content"> 
    <ul>
        <li> Configuration can be provided in YAML, JSON format or in python dictionary stored using pickle. </li>
        <li> YAML is recommended and widely accepted for storing dictionary. </li>
    </ul> 
</div>

<hr/>

#### Dictionary confing using YAML

<p> <i class="fa fa-file-text" aria-hidden="true"></i> logging.yml </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight yml %}

version: 1
formatters:
  simple:
    format: '%(asctime)s : %(name)s : %(levelname)s : %(message)s'
handlers:
  console:
    class: logging.StreamHandler
    level: DEBUG
    formatter: simple
    stream: ext://sys.stdout
loggers:
  module1:
    level: DEBUG
    handlers: [console]
    propagate: no
root:
  level: DEBUG
  handlers: [console]


{% endhighlight %}
</div>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> DictConfigYAML.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
from logging.config import dictConfig
import os
import yaml    # pip install pyyaml

path = 'logging.yml'
if os.path.exists(path):
    with open(path, 'rt') as f:
        config = yaml.safe_load(f.read())
    dictConfig(config)

# create logger
logger = logging.getLogger('module1')

# 'application' code
logger.debug('debug message')
logger.info('info message')
logger.warning('warn message')
logger.error('error message')
logger.critical('critical message')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-05-23 16:08:03,234 : module1 : DEBUG : debug message
2020-05-23 16:08:03,234 : module1 : INFO : info message
2020-05-23 16:08:03,234 : module1 : WARNING : warn message
2020-05-23 16:08:03,234 : module1 : ERROR : error message
2020-05-23 16:08:03,234 : module1 : CRITICAL : critical message
</pre></div>

<hr/>



#### Dictionary confing using JSON

<p> <i class="fa fa-file-text" aria-hidden="true"></i> logging.json </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight json %}

{
  "logging": {

    "version": 1,

    "disable_existing_loggers": true,

    "formatters": {
      "simple": {
        "format": "%(asctime)s : %(name)s : %(levelname)s : %(message)s"
      }
    },

    "handlers":{
      "console": {
        "class": "logging.StreamHandler",
        "level": "DEBUG",
        "formatter": "simple",
        "stream": "ext://sys.stdout"
      }
    },

    "loggers": {
      "module1": {
        "level": "DEBUG",
        "handlers": ["console"],
        "propagate": false
      }
    },

    "root": {
       "level": "DEBUG",
       "handlers": ["console"]
    }

  }
  
}

{% endhighlight %}
</div>



<p> <i class="fa fa-file-text" aria-hidden="true"></i> DictConfigJSON.py </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

import logging
from logging.config import dictConfig
import os
import json

path = 'logging.json'
if os.path.exists(path):
    with open(path, 'r') as f:
        config = json.load(f)
    dictConfig(config["logging"])

# create logger
logger = logging.getLogger('module1')

# 'application' code
logger.debug('debug message')
logger.info('info message')
logger.warning('warn message')
logger.error('error message')
logger.critical('critical message')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
2020-05-23 17:56:38,598 : module1 : DEBUG : debug message
2020-05-23 17:56:38,598 : module1 : INFO : info message
2020-05-23 17:56:38,598 : module1 : WARNING : warn message
2020-05-23 17:56:38,599 : module1 : ERROR : error message
2020-05-23 17:56:38,599 : module1 : CRITICAL : critical message
</pre></div>

<hr/>


{% include links.html %}
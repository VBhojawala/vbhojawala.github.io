---
title: Logging
layout: tutorial
tags: []
sidebar: python_sidebar
permalink: python_logging.html
folder: python
prev_section: 
prev_section_title: 
prev: python_module_package_import.html
prev_title: Module, Package and Import
next: 
next_title: 
next_section: 
next_section_title: 
summary: Logging functions.
---


## Logging

<p> Module provides functions and classes for logging an event.  </p>

### Levels of logging 

<p> Levels of logging in order of increasing level </p>

 Level     |                 Usage
 :--- | :---
 DEBUG | Very detailed information how your function or program works.When resolving issue other programmer should be able to understand internal working. e.g. value of each variable in each iteration
 INFO | Confirmation log which indicates program is behaving as expected. e.g. method started with params, ended successfully with params
 WARNING | Indication of unexpected event occurred such as high work load which can cause problems.But program is working as expected. Or Invalid login attempts made to the application.
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
                <li> <strong> extra : </strong> It is used for passing a dictionary which is used for populating __dict__ of the LogRecord.</li>
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


Attrib name    |     format          |    Description
:--- | :--- |
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

print('It\'s sunny outside.')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
It's sunny outside.
Quoting inside "Double quotes".
</pre></div>

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


{% include links.html %}
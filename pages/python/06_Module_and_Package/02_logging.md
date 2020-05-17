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




{% include links.html %}
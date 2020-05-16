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


{% include callout.html content="**Note** : Default logging level is set to warning which means only message with warning or higher level (below of WARNING in above table) messages will appear. " type="primary" %} 

<hr/>


### Logging method for each logging level

level    | method
:--- | :---
DEBUG    | debug(msg, *args, **kwargs)
INFO     | info(msg, *args, **kwargs)
WARNING  | warning(msg, *args, **kwargs)
ERROR    | error(msg, *args, **kwargs)
CRITICAL | critical(msg, *args, **kwargs)




{% include links.html %}
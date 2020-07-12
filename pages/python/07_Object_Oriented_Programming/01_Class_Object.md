---
title: Class and Object
layout: tutorial
last_modified_at: 2020-07-12
tags: [python, Object_Oriented_Programming, Class, Object, Instance, Constructor, __init__(), self, cls, class_variable, instance_variable, class_method, instance_method, static_method, classmethod_decorator,  staticmethod_decorator, __dict__, type(), Mutability_of_Attributes, Access_Modifiers, Name_Mangling, Name_Mangling_Multiple_inheritance, getter_setter_methods, Class_name_Aliasing, Object_Attribute_in_list_comprehension]
sidebar: python_sidebar
permalink: python_class_object.html
folder: python
prev_section: python_module_package_import.html
prev_section_title: Module, Package and Import 
prev: 
prev_title: 
next: 
next_title: 
next_section: 
next_section_title: 
summary: Python Object Oriented Programming, Class and Object, Constructor, class and instance variable, class static and instance methods, Name Mangling, introspecting class and Object, Mutability of attributes of class. 
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/N_mW6UrT1aA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> <hr/>

## Class and Object

### Class


<div id="tut-content"> 
    <ol>    
        <li> Acts as a template for creating Objects. </li>
        <li> Defines attributes and methods for Objects. </li>
        <li> Collection of common attributes and methods of related objects. </li>
    </ol>
</div>

<hr/>

### Object

<div id="tut-content"> 
    <ol>    
        <li> Is an instance of a class. </li>
        <li> It can be a real world thing which can be feel, touch or seen and can be interacted, for example ATM machine. </li>
        <li> It contains facts about object (data) and how can object interact can be interacted (methods). </li>
        <li> It can holds state of real world entity such as switch can be ON or OFF. </li>
    </ol>
</div>

{% include callout.html content="Objects can be associated with each other and they interact with each other through methods." type="primary" %} 

<hr/>


### Creating Python Class and Object

<div id="tut-content"> 
    <ul>
        <li> Class Name should be in CapWords.</li>
        <li> Module name (Python file name) is not required to be as same the name of class. </li>
        <li> Multiple class can be defined withing single Module (Single Python file).</li>
    </ul> 
</div>

<hr/>

### Defining Class and Creating Object


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:  # Defining Class
    pass

b1 = BankAccount()  # Creating Object
print(b1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<&zwj;__main__.BankAccount object at 0x7f3eb6402bb0>
</pre></div>

<hr/>


### Constructor ( \_\_init\_\_() method ) of Class

<div id="tut-content"> 
    <ul>
        <li> <strong> Constructor : </strong> Constructs new object and configure it according to the given values. </li>
        <li> __init__() method acts as a constructor for class. </li>
        <li> By default and mandatory first argument of __init__() method is ' self '. </li>
        <li> ' self ' refers to current object which is being created. </li>
        <li> ' self ' is an implicit argument, which means while creating new object it's passed implicitly by Python. </li>
    </ul> 
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Defining constructor and passing argument </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    def __init__(self, accNo):
        print(f'Creating new BankAccount : {accNo}')
        self.accNo = accNo


# Using positional arguments
b1 = BankAccount(100120220121)

# Using keyword arguments
b1 = BankAccount(accNo=181218712121)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Creating new BankAccount : 100120220121
Creating new BankAccount : 181218712121
</pre></div>


{% include callout.html content="**Note** : For Constructor's poistional and keyword arguments same rules applies as explained in functions. " type="primary" %} 

<hr/>




### Types of Variables in Class

#### Class variable

<div id="tut-content"> 
    <ul>
        <li> Variables defined at class level are called as class variable and for each object of class their value remains same as defined in class definition. </li>
        <li> Class variables can be accessed  using instance(Object) of class and also without creating instance(Object) of class. </li>
        <li> Changing class variable value are visible to it's all object. </li>
    </ul> 
</div>

<hr/>

#### Instance variable

<div id="tut-content"> 
    <ul>
        <li> Variables attached to instance (Object / self) inside __init__() method are called as instance variables. </li>
        <li> For each object of class instance variable values are assigned as per constructor arguments passed when creating an object. </li>
        <li> Instance variable can be accessed using object of the class only. </li>
    </ul> 
</div>


<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Defining and Accessing Class and Instance Variable </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'  # Class Variable

    def __init__(self, accNo):
        self.accNo = accNo  # Instance Variable


# Accessing Class variable without creating instance
print('Bank Name :', BankAccount.BANK_NAME)

# Accessing Instance and class variable using objects
b1 = BankAccount(100120220121)

print('Class Variable BANK_NAME :', b1.BANK_NAME)
print('Instance Variable accNo :', b1.accNo)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Bank Name : ABC Bank
Class Variable BANK_NAME : ABC Bank
Instance Variable accNo : 100120220121
</pre></div>

<hr/>


### Types of Methods in Class

#### Instance method 

<div id="tut-content"> 
    <ul>
        <li> Accesses and modify instance variables. </li>
        <li> It can be accessed on instance of class only. </li>
        <li> It can call other instance, class or static methods of class. </li>
        <li> <strong> self : </strong> is first implicit argument which is passed to each instance method of the class. </li>
        <li> self refers to current object, the object on which instance method is invoked is passed as self argument implicitly.</li>
    </ul> 
</div>

<hr/>


#### Class method

<div id="tut-content"> 
    <ul>
        <li> Defined using @classmethod decorator and accesses and modifies class variables. </li>
        <li> Can be invoked without creating an instance of class. </li>
        <li> It can also be accessed using object of class. </li>
        <li> It can call other class or static method of class. </li>
        <li> <strong> cls : </strong> cls is defined as the first argument to each class class method of the class. </li>
        <li> cls refers to the current class on which method or attribute is being refereed. </li>
    </ul> 
</div>

<hr/>


#### Static method

<div id="tut-content"> 
    <ul>
        <li> It is defined using @staticmethod decorator. </li>
        <li> Static methods servers as utility methods which performs operations only on given parameters to method. </li>
        <li> It can be accessed without creating an instance of class. </li>
        <li> It can also be accessed using object of class. </li>
        <li> It can call other static method of class. </li>
    </ul> 
</div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Defining and accessing Instance, Class and Static Methods</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'
    INTEREST_RATE = 4.5

    def __init__(self, accNo, name):
        self.accNo = accNo
        self.name = name

    def get_name(self):  # Instance method
        return self.name

    @classmethod
    def get_interest_rate(cls):  # Class Method
        return cls.INTEREST_RATE

    @classmethod
    def set_interest_rate(cls, new_rate):  # Class Method
        cls.INTEREST_RATE = new_rate

    @staticmethod
    def check_eligibility(age):  # Static Method
        if age >= 13:
            return True
        return False

    def account_info(self, age):  # Instance method calling other methods
        print('Name :', self.get_name())
        print('Account No :', self.accNo)
        print(f'check_eligibility({age}) :', BankAccount.check_eligibility(age))
        print(f'Interest Rate : {BankAccount.get_interest_rate()}%')


{% endhighlight %}
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Accessing Static Method using Class</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('check_eligibility(15) :', BankAccount.check_eligibility(15))
print('check_eligibility(10) :', BankAccount.check_eligibility(10))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
check_eligibility(15) : True
check_eligibility(10) : False
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Accessing Static Method using an Object</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

b1 = BankAccount(100120220121, 'Rachel Schneider')
print('check_eligibility(15) :', b1.check_eligibility(15))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
check_eligibility(15) : True
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong> Accessing Class Method</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Interest rate :', BankAccount.get_interest_rate())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Interest rate : 4.5
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Accessing Class Method using an Object</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

b1 = BankAccount(100120220121, 'Rachel Schneider')
print('Interest rate :', b1.get_interest_rate())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Interest rate : 4.5
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Accessing Instance method </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

b1 = BankAccount(100120220121, 'Rachel Schneider')
print('Name :', b1.get_name())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Name : Rachel Schneider
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Instance Method Calling other methods</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

b1.account_info(age=25)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Name : Rachel Schneider
Account No : 100120220121
check_eligibility(25) : True
Interest Rate : 4.5%
</pre></div>

<hr/>


#### How self argument is passed internally when invoking an instance method?

<p> Inernally instance.instance_method() call is converted to Class.insetance_method(instance). </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:

    def __init__(self, accNo, name):
        self.accNo = accNo
        self.name = name

    def get_name(self):  # Instance method
        return self.name


b1 = BankAccount(100120220121, 'Rachel Schneider')

print('Name :', b1.get_name())
#  internally converted to
print('Name :', BankAccount.get_name(b1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Name : Rachel Schneider
Name : Rachel Schneider
</pre></div>

<hr/>


#### Referring class variable inside instance method

<div id="tut-content"> 
    <ul>
        <li> Class variable can be accessed inside instance method using ClassName.VARIABLE_NAME. </li>
        <li> Class variable can also be accessed using self.CLASS_VARIABLE as a fallback of accessing instance variable. Means self.CLASS_VARIABLE will first check for instance variable if not found it will look for class variable. </li>
        <li> But modifying value using self.CLASS_VARIABLE it will create an instance variable , instead of assigning value to class variable.</li>
        <li> Title </li>
    </ul> 
</div>

{% include callout.html content="**Note** : It is better to always refer class variable with ClassName instead of self. " type="primary" %} 

<hr/>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'

    def __init__(self, accNo):
        self.accNo = accNo

    @classmethod
    def get_bankname_cls(cls):
        return cls.BANK_NAME

    def get_bankname_self(self):
        return self.BANK_NAME

    def set_bankname_self(self, name):
        self.BANK_NAME = name  # It will create new instance Variable


b1 = BankAccount(13015241211289)

{% endhighlight %}
</div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong>Accessing Class variable using self.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('get_bankname_self() :', b1.get_bankname_self())
print('get_bankname_cls()  :', BankAccount.get_bankname_cls())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
get_bankname_self() : ABC Bank
get_bankname_cls()  : ABC Bank
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Modifying Class variable using self</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

# Modifying class variable value using self
print("\nExecuting : set_bankname_self('XYZ Bank')")
b1.set_bankname_self('XYZ Bank')


# Accessing class variable
print('\nAccessing variables after creating instance variable of same name as class variable name\n')
print('get_bankname_self() :', b1.get_bankname_self()) 
print('get_bankname_cls()  :', BankAccount.get_bankname_cls())



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Executing : set_bankname_self('XYZ Bank')

Accessing variables after creating instance variable of same name as class variable name

get_bankname_self() : XYZ Bank
get_bankname_cls()  : ABC Bank
</pre></div>

<hr/>



###  Introspecting Class and Object

<div id="tut-content"> 
    <ul>
        <li> <strong> __dict__ : </strong> is a special attribute which contains  attributes ( data and methods )that instance(Object) or class holds. Each instance(object) has it own __dict__. </li>
        <li> __dict__ of class contains class variable, Static methods, class methods, instance method. </li>
        <li> __dict__ of object contains instance variables. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    """ Base class for Bank Accounts."""
    BANK_NAME = 'ABC Bank'

    def __init__(self, accNo, name):
        self.accNo = accNo
        self.name = name

    @classmethod
    def get_bankname_cls(cls):
        return cls.BANK_NAME

    @staticmethod
    def check_eligibility(age):  # Static Method
        if age >= 13:
            return True
        return False

    def get_accno(self):
        return self.accNo


b1 = BankAccount(100120220121, 'Rachel Schneider')
b2 = BankAccount(13512124151010, 'Ben Tyson')


{% endhighlight %}
</div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Comparing dictionary of Class and Object</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('BankAccount :', BankAccount.__dict__.keys())
print('b1 :', b1.__dict__.keys())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
BankAccount : dict_keys(['__module__', '__doc__', 'BANK_NAME', '__init__', 'get_bankname_cls', 'check_eligibility', 'get_accno', '__dict__', '__weakref__'])
b1 : dict_keys(['accNo', 'name'])
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Comparing dictionary of two objects </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('b1 :', b1.__dict__)
print('b2 :', b2.__dict__)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b1 : {'accNo': 100120220121, 'name': 'Rachel Schneider'}
b2 : {'accNo': 13512124151010, 'name': 'Ben Tyson'}
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong>Accessing attribute using __dict__ </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Account No :', b1.accNo)
# Is same as
print('Account No :', b1.__dict__['accNo'])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Account No : 100120220121
Account No : 100120220121
</pre></div>

<hr/>


### type(obj)

<p> Returns the Class of given object. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:

    def __init__(self, accNo, name):
        self.accNo = accNo
        self.name = name


b1 = BankAccount(100120220121, 'Rachel Schneider')

print('Class Name:', b1.__class__)
# OR
print('Class Name:', type(b1))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Class Name: <class '__main__.BankAccount'>
Class Name: <class '__main__.BankAccount'>
</pre></div>

<hr/>


### Mutability of Attributes of Class and Object

#### Replacing attribute of class 

<div id="tut-content"> 
    <ul>
        <li> Attributes of Class or Objects are just dictionary entry. </li>
        <li> Data attribute can be replaced with method attributes and method attributes can be replaced with data attributes. </li>
    </ul> 
</div>

{% include callout.html content="**Note** :Following example is just for demonstration purpose only. In any scenario replacing data attributes with method attribute or vice versa must be avoided." type="primary" %} 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'

    def __init__(self, accNo):
        self.accNo = accNo


def get_accno(self):
    return self.accNo


# Replacing Data attribute with method
BankAccount.BANK_NAME = get_accno

b1= BankAccount(12101241202121)
print('BANK_NAME() :', b1.BANK_NAME())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
BANK_NAME() : 12101241202121
</pre></div>

<hr/>



#### Assigning value to undefined instance variable of an Object

<p> When undefined instance variable is assigned value new entry of <&zwj;variable_name : value> is created in object's __dict__ attribute and original class and other objects remains un-affected.</p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'

    def __init__(self, accNo):
        self.accNo = accNo


b1 = BankAccount(13015241211289)
b2 = BankAccount(14787848787878)

print('b1 Before :', b1.__dict__)
print('b2 Before :', b2.__dict__)

b1.name = 'Rachel Schneider'

print('b1 After  :', b1.__dict__)
print('b2 After  :', b2.__dict__)

print('Name :', b1.name)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b1 Before : {'accNo': 13015241211289}
b2 Before : {'accNo': 14787848787878}
b1 After  : {'accNo': 13015241211289, 'name': 'Rachel Schneider'}
b2 After  : {'accNo': 14787848787878}
Name : Rachel Schneider
</pre></div>

<hr/>


#### Adding a Class variable After defining Class

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'

    def __init__(self, accNo):
        self.accNo = accNo


b1 = BankAccount(13015241211289)
b2 = BankAccount(10541215898713)

BankAccount.INTEREST_RATE = 4.6

print('BankAccount.INTEREST_RATE :', BankAccount.INTEREST_RATE)
print('b1.INTEREST_RATE :', b1.INTEREST_RATE)
print('b2.INTEREST_RATE :', b2.INTEREST_RATE)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
BankAccount.INTEREST_RATE : 4.6
b1.INTEREST_RATE : 4.6
b2.INTEREST_RATE : 4.6
</pre></div>

<hr/>



#### Adding class method after creating class definition

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'

    def __init__(self, accNo):
        self.accNo = accNo


@classmethod
def get_bankname(cls):
    return cls.BANK_NAME


# Adding class method to existing class
BankAccount.get_bankname = get_bankname

# Accessing newly added method
print('Bank Name :', BankAccount.get_bankname())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Bank Name : ABC Bank
</pre></div>

<hr/>



#### Adding an instance method after defining class

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'

    def __init__(self, accNo):
        self.accNo = accNo


def get_accno(self):
    return self.accNo


# Assigning method at class definition level
BankAccount.get_accno = get_accno

b1 = BankAccount(13015241211289)
b2 = BankAccount(10541215898712)


print('b1.get_accno() :', b1.get_accno())
print('b2.get_accno() :', b2.get_accno())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b1.get_accno() : 13015241211289
b2.get_accno() : 10541215898712
</pre></div>

<hr/>



#### Assigning instance method to an instance of class

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'

    def __init__(self, accNo):
        self.accNo = accNo


def get_accno(self):
    def wrapper():
        return self.accNo
    return wrapper


b1 = BankAccount(13015241211289)
b1 = BankAccount(10541215898712)

b1.get_accno = get_accno(b1)

print('b1.__dict__ :', b1.__dict__)
print('\nb2.__dict__ :', b2.__dict__)
print('\nBankAccount.__dict__ :', BankAccount.__dict__)

print('\nb1.get_accno() :', b1.get_accno())



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b1.__dict__ : {'accNo': 10541215898712, <div id='tut-highlight'>'get_accno': <&zwj;function get_accno.<&zwj;locals>.wrapper at 0x7f6f775cdf70></div>}

b2.__dict__ : {'accNo': 10541215898712}

BankAccount.__dict__ : {'__module__': '__main__', 'BANK_NAME': 'ABC Bank', '__init__': <&zwj;function BankAccount.__init__ at 0x7f6f775da0d0>, '__dict__': <&zwj;attribute '__dict__' of 'BankAccount' objects>, '__weakref__': <attribute '__weakref__' of 'BankAccount' objects>, '__doc__': None}

b1.get_accno() : 10541215898712
</pre></div>

<hr/>


### Access Modifiers

<p> There are no access modifier in python. That means all the variable declared in class by default 'Public'. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'

    def __init__(self, accNo):
        self.accNo = accNo


b1 = BankAccount(13015241211289)
b1 = BankAccount(13502015241547)

print('Acc No before :', b1.accNo)
b1.accNo = 14002145412524
print('Acc No after  :', b1.accNo)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Acc No before : 13502015241547
Acc No after  : 14002145412524
</pre></div>

<hr/>


#### Name Mangling

<div id="tut-content"> 
    <ul>
        <li> Python does not have any access modifier , means variable can't be private. however Python has mechanism by which developers can avoid direct access to private variables. </li>
        <li> Using Name Mangling pseudo private variable and methods(function) can be created </li>
        <li> attach __ before variable name or method to make it pseudo private. </li>
        <li> Pseudo private attribute can not be accessed directly using given name beginning with '__' directly. </li>
        <li> However it is not completely private , it can be accessed using  obj._CLASSNAME__ATTIBNAME.</li>
    </ul> 
</div>


{% include callout.html content="While declaring attribute beginning with '\__' their names are automatically modified with obj/class._CLASSNAME__ATTIBNAME which can be  viewed using \__dict__ attribute." type="primary" %}

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccount:
    BANK_NAME = 'ABC Bank'

    def __init__(self, accNo):
        self.accNo = accNo
        self.__amount = 0

    def deposit(self, amount):
        self.__amount += amount
        self.__print_account()

    def withdraw(self, amount):
        self.__amount -= amount

    def __print_account(self):
        print('Account :', self.accNo)
        print('Current Balance :', self.__amount)

    def get_amount(self):
        return self.__amount

b1 = BankAccount(12341054100878)
b1.deposit(500)

{% endhighlight %}
</div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Accessing pseudo private attribute with their name will result in AttributeError</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('b1.amount :', b1.amount)
print('b1.__amount :', b1.__amount)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 1, in <&zwj;module>
AttributeError: 'BankAccount' object has no attribute 'amount'
Traceback (most recent call last):
  File "<&zwj;input>", line 1, in <&zwj;module>
AttributeError: 'BankAccount' object has no attribute '__amount'</pre>
</div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Accessing Pseudo private attribute using mangled name</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('b1._BankAccount__amount :', b1._BankAccount__amount)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b1._BankAccount__amount : 500
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Introspecting Object with Pseudo private attribute</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('BankAccount :', BankAccount.__dict__.keys())
print('b1 :', b1.__dict__.keys())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
BankAccount : dict_keys(['__module__', 'BANK_NAME', '__init__', 'deposit', 'withdraw', <div id='tut-highlight'>'_BankAccount__print_account'</div>, 'get_amount', '__dict__', '__weakref__', '__doc__'])
b1 : dict_keys(['accNo', <div id='tut-highlight'>'_BankAccount__amount'</div>])
</pre></div>


{% include callout.html content="**Note** : Python programmers suggests not to use 'double underscore'. instead use 'single underscore' if attribute (data or method) needs to be marked as private for developers reference." type="primary" %} 

<hr/>


#### Name Mangling with Multiple Inheritance

<p> Pre-pending __ to variable name also avoids name collision in subclass with multiple parents having attribute with same name. </p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class LandVehicles:

    def __init__(self, maxspeed=150) -> None:
        super().__init__()
        self.__maxspeed = maxspeed


class WaterVehicles:

    def __init__(self, maxspeed=60) -> None:
        super().__init__()
        self.__maxspeed = maxspeed


class AmphibiousVehicles(LandVehicles, WaterVehicles):

    def __init__(self) -> None:
        super().__init__()

v1 = AmphibiousVehicles()

print(v1.__dict__.keys())


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
dict_keys(['_WaterVehicles__maxspeed', '_LandVehicles__maxspeed'])
</pre></div>

<hr/>


### Getter and Setter method for data attributes 

<p> Python does not use convention of getter setter like other language such as Java because of readability. Python has special methods and decorators for intercepting attribute access without needing to invoke getter and setter methods on object and they are explained in next section.</p>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

b1.set_amount(25000)
b1.get_amount()

# vs

b1.amount = 25000
b1.amount


{% endhighlight %}
</div>

<hr/>


### Class name aliasing

<p> Class can be assigned to a variable for aliasing and used for creating objects. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Person:

    def __init__(self, name, bgroup, phno):
        self.name = name
        self.bgroup = bgroup
        self.phno = phno


pp = Person

p1 = pp('Nancy', 'O+', 1131321)

print('type(p1) :', type(p1))

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
type(p1) : <&zwj;class '__main__.Person'>
</pre></div>

<hr/>


### Using Object's Attribute in list comprehension

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from decimal import *


class Employee():

    def __init__(self, name,  address,salary):
        self.name = name
        self.address = address
        self.salary = salary


e1 = Employee('Joseph L. Asher', '4540 Post Avenue, New York', Decimal('80000'))
e2 = Employee('Holly J. Rosier', '4592 Sundown Lane, Austin, California',  Decimal('60000'))
e4 = Employee('John M. Pitts', ' 1145 Lincoln Street Camden, California', Decimal('75000'))
e3 = Employee('Aimee S. Davis', '3618 Coventry Court Baton Rouge, New York', Decimal('110000'))
e5 = Employee('Seth K. Pruitt', '3574 Station Street Berkeley, New York', Decimal('65000'))

empDB = [e1, e2, e3, e4, e5]

# filtering data
print('Employees from NewYork having salary > 70,000')
print([e.name for e in empDB if 'New York' in e.address and e.salary > 70_000])


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Employees from NewYork having salary > 70,000
['Joseph L. Asher', 'Aimee S. Davis']
</pre></div>

<hr/>

{% include links.html %}
---
title: Intercepting Attribute Access
layout: tutorial
last_modified_at: 2020-07-14
tags: [python, Object_Oriented_Programming, __getattribute__(), __setattr__(), __delattr__(), __getattr__(), getattr(), setattr(), delattr(), Derived_attribute, Property, Property_Constructor, Read-Only_Property, Derived_attribute_property, Property_Decorator, Descriptors, Descriptor_Protocol, __get__(), __set__(), __delete__(), Data_descriptor, Non-Data_descriptor, Read-Only_descriptor, Instance_Method_Descriptor, Class_Method_Descriptor, Static_Method_descriptor, Mixing_Descriptor_Attrib_Dunders, Descriptor_vs_Property,Object_Composition,Attribute_Access_delegation]
sidebar: python_sidebar
permalink: python_intercepting_attribute_access.html
folder: python
prev_section:
prev_section_title:  
prev:  python_class_object.html
prev_title: Class and Object
next: 
next_title: 
next_section: 
next_section_title: 
summary: Python intercepting attribute access using __getattribute__, __setattr__, __delattr__, __getattr__,  property() method and @property decorator, Descriptor protocol methods, Data descriptors, Non-data descriptors, readonly descriptors, mixing property and descriptors. 
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/o4DLmb8LkXI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> <hr/>


## Intercepting attribute access using magic / dunder / special methods

{% include callout.html content="It is called 'dunder method' which is a short form 'double underscore - method - double underscore'." type="primary" %} 


### \__getattribute__(self, name)   
<p> It is invoked when accessing any attribute (data or method) of the class. It returns value of attribute if given attribute 'name' is found. </p>
<hr/>

### \__setattr__(self, name, value) 
<p> It is invoked when setting any attribute (data or method) of the class. </p>
<hr/>

### \__delattr__(self, name)    
<p> It is invoked when deleting any attribute (data or method) of the class. </p>
<hr/>

### \__getattr__(self, name)      
<p> A fallback method which is invoked when attribute (data or method) is not found in class. It is used for derived attribute like age from date from birth.</p>

<div id="tut-content"> 
    <ul>
        <li> __getattr__() is invoked only when no matching attribute is found in class and must raise AttributeError in case of unknown attribute access. </li>
        <li> Be cautious to use __getattribute__() and __getattr__(), if not properly used results in maximum recursion error. </li>
    </ul> 
</div>

<hr/>





<div id="tut-content"> 
    <ul>
        <li> <strong> Example 1 </strong> </li>
    </ul> 
</div>

<div id="tut-content"> 
    <ul>
        <li> object class is implicitly inherited by all classes and it provides default implementation for many dunders. </li>
        <li> When overriding one of the above method in user defined class, in order to access default implementation of object class object.method() is invoked. </li>
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

    def __init__(self, accNo):
        self.accNo = accNo

    def __getattribute__(self, name):
        print(f'getting {name} ....')
        return object.__getattribute__(self, name)

    def __setattr__(self, name, value):
        print(f'Setting {name} -> {value}')
        object.__setattr__(self, name, value)

    def __delattr__(self, name):
        print(f'Deleting {name} ...')
        object.__delattr__(self, name)


b1 = BankAccount(1215451202)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<div id='tut-highlight'> Setting accNo -> 1215451202 </div>
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __len__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __len__ ....
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Accessing attribute </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print(f'b1 -> {b1.accNo}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<div id='tut-highlight'>getting accNo ....
b1 -> 1215451202</div>
getting __class__ ....
getting __class__ ....
getting __len__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __len__ ....
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Modifying attribute </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

b1.accNo = 135696894158


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<div id='tut-highlight'>Setting accNo -> 135696894158</div>
getting __class__ ....
getting __class__ ....
getting __len__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __len__ ....
</pre></div>

<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Deleting Attribute </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

del b1.accNo

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<div id='tut-highlight'>Deleting accNo ...</div>
getting __class__ ....
getting __class__ ....
getting __len__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __len__ ....
</pre></div>

<hr/>


## Methods for attribute access 

{% include callout.html content="Following methods are useful for accessing / modifying attributes of object programmatically." type="primary" %} 

 method                       |  Python Method
 :--- | :---
\__getattribute__(self, name)    | getattr(object: Any, attribute: str, default: Any)
\__setattr__(self, name, value)  | setattr(object: Any, attribute: str, value: Any)
\__delattr__(self, name)         | delattr(object: Any, attribute: str)

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

    def __getattribute__(self, name):
        print(f'getting {name} ....')
        return object.__getattribute__(self, name)

    def __setattr__(self, name, value):
        print(f'Setting {name} -> {value}')
        object.__setattr__(self, name, value)

    def __delattr__(self, name):
        print(f'Deleting {name} ...')
        object.__delattr__(self, name)

b1 = BankAccount(1215451202)

{% endhighlight %}
</div>

<hr/>



### getattr(object, attribute, default)  
<p> It returns attribute value from  given object. If default parameter value is given and attribute is not found, it returns default value </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('getattr(b1, \'accNo\') :', getattr(b1, 'accNo'))
print('getattr(b1, \'undefined\') :', getattr(b1, 'undefined', 'A Default value'))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<div id='tut-highlight'>getting accNo ....
getattr(b1, 'accNo') : 1215451202
getting undefined ....
getattr(b1, 'undefined') : A Default value</div>
getting __class__ ....
getting __class__ ....
getting __len__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __len__ ....
</pre></div>

<hr/>


### setattr(object, attribute, value) 
<p> It Modifies / Create attribute on given object.</p> 


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Before b1.accNo :', b1.accNo)
setattr(b1, 'accNo', 1352211541)
print('After b1.accNo :', b1.accNo)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<div id='tut-highlight'>getting accNo ....
Before b1.accNo : 1215451202
Setting accNo -> 1352211541
getting accNo ....
After b1.accNo : 1352211541</div>
getting __class__ ....
getting __class__ ....
getting __len__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __len__ ....
</pre></div>

<hr/>


### delattr(object, attribute) 
<p> Removes given attribute from object. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

delattr(b1, 'accNo')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<div id='tut-highlight'>Deleting accNo ...</div>
getting __class__ ....
getting __class__ ....
getting __len__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __class__ ....
getting __len__ ....
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Example 2 : Using __getattr__() for derived attribute.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date

class BankAccountAC:
    def __init__(self, dob: date, phno,  amount):
        self.dob = dob
        self.amount = amount
        self.phno = phno

    def __getattribute__(self, name: str) -> Any:
        if name in ['amount', 'phno', 'dob']:
            print(f'Getting attribute {name} ....')
            return object.__getattribute__(self, name)   # use of self.name will result in infinite loop
        elif name in ['withdraw', 'deposit', 'delete_phno']:
            return object.__getattribute__(self, name)
        else:
            return object.__getattr__(self, name)

    def __getattr__(self, name):
        if name == 'age':
            return date.today().year - self.dob.year
        else:
            raise AttributeError(f'Attribute {name} did not found !')

    def __setattr__(self, name: str, value: Any) -> None:
        if name in ['amount', 'phno', 'dob']:
            print(f'Setting {name} attribute ...')
            object.__setattr__(self, name, value)
        else:
            raise AttributeError

    def __delattr__(self, name: str) -> None:
        if 'amount' in name:
            raise AttributeError(name + ' is private attribute!')
        else:
            print(f'Deleting {name} attribute ....')

    def deposit(self, x):
        self.amount += x

    def withdraw(self, x):
        self.amount -= x

    def delete_phno(self):
        del self.phno

b1 = BankAccountAC(date(1991, 11, 24), 789_112_4410, 500)

print('\nCreating Object :')
b1 = BankAccountAC(date(1991, 11, 24), 789_112_4410, 500)

print('\nGetting attribute :')
print(b1.amount)

print('\nSetting attribute :')
b1.amount = 2000

print('\nAccessing method attribute :')
b1.deposit(500)
b1.withdraw(200)

print('\nAccessing  derived attribute using __getattr__() :')
print('Age :', b1.age)

print('\ndeleting attribute :')
b1.delete_phno()


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Creating Object :
Setting dob attribute ...
Setting amount attribute ...
Setting phno attribute ...

Getting attribute :
Getting attribute amount ....
500

Setting attribute :
Setting amount attribute ...

Accessing method attribute :
Getting attribute amount ....
Setting amount attribute ...
Getting attribute amount ....
Setting amount attribute ...

Accessing  derived attribute using __getattr__() :
Getting attribute dob ....
Age : 29

deleting attribute :
Deleting phno attribute ....

</pre></div>

<hr/>


## Property

<div id="tut-content"> 
    <ul>
        <li> It allows intercepting attributes access on per attribute wise. </li>
        <li> Property acts as a proxy around private variable for setting, getting and deleting a particular attribute. </li>
    </ul> 
</div>


### Constructor

<p id='tut-cons'> property(getter, setter, delmethod, docString) </p>

<div id="tut-content"> 
    <ul>
        <li> <strong> getter : </strong> Getter method of attribute </li>
        <li> <strong> setter : </strong> Setter method of attribute</li>
        <li> <strong> delmethod : </strong> Delete method of attribute </li>
        <li> <strong> docString : </strong> Doc-String for property. </li>
    </ul> 
</div>


{% include callout.html content=" To Block the access of setting attribute or deleting attribute we need to pass None to specific argument. " type="primary" %} 

{% include callout.html content="**Note** : passing None to all get, set and del attribute will raise error as it does not make any sense." type="primary" %} 


<hr/>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccountP1:
    def __init__(self, amount):
        self.__amount = amount

    def get_amount(self):
        print('Getting Amount')
        return self.__amount

    def set_amount(self, amount):
        print('Setting Amount')
        self.__amount = amount

    def del_amount(self):
        print('Deleting amount')
        del self.__amount

    amount = property(get_amount, set_amount, del_amount, "Property of amount")


b2 = BankAccountP1(1500)
b2.amount = 2500
print('b2.amount :', b2.amount)
del b2.amount

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Setting Amount
Getting Amount
b2.amount : 2500
Deleting amount
</pre></div>

{% include callout.html content="**Note** : To see the Doc-String of property in PyCharm place cursor on attribute and press Ctrl+ Q . " type="primary" %} 

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Read-Only Property </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BankAccountR1:
    def __init__(self, amount):
        self.__amount = amount

    def get_amount(self):
        print('Getting Amount')
        return self.__amount

    amount = property(get_amount, None, None, "Property of amount")

br1 = BankAccountR1(1500)
print('br1.amount :', br1.amount)

# Trying to modify or delete will raise an error
br1.amount = 2500
del br1.amount

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Getting Amount
br1.amount : 1500
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 1, in <&zwj;module>
AttributeError: can't set attribute</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 1, in <&zwj;module>
AttributeError: can't delete attribute</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Property for derived attribute </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}
from datetime import date

class BankAccountD1:
    def __init__(self, dob):
        self.dob = dob

    def get_age(self):
        print('Calculating Age .....')
        return date.today().year - self.dob.year

    age = property(get_age, None, None, "Property of Age.")


bd1 = BankAccountD1(date(1991, 11, 24))

# Accessing derived attribute
print('Age :', bd1.age)

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Calculating Age .....
Age : 29
</pre></div>

<hr/>



### Property Decorator

<p> Property of attribute can be set using @property decorator which uses  same property(getter, setter, delmethod, docString) method explained in previous section internally. </p>


<div id="tut-content"> 
    <ul>
        <li> Set @property on getter method with name PROPERTY_NAME by which attribute must be accessed. </li>
        <li> Set @PROPERTY_NAME.setter on the method with PROPERTY_NAME name for setter method of attribute. </li>
        <li> Set @PROPERTY_NAME.deleter on the method with PROPERTY_NAME name for delete method of attribute. </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class BnakAccountP2:

    def __init__(self, amount):
        self.__amount = amount

    @property
    def amount(self):
        """ property of amount"""
        print('Getting Amount')
        return self.__amount

    @amount.setter
    def amount(self, amount):
        print('Setting Amount')
        self.__amount = amount

    @amount.deleter
    def amount(self):
        print('Deleting amount')
        del self.__amount


b3 = BnakAccountP2(88000)

b3.amount = 55000
print('b3.amount :', b3.amount)
del b3.amount


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
It's sunny outside.
Quoting inside "Double quotes".
</pre></div>

<hr/>


### Defining property methods outside of class

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

def autoprop(name):

    def get_attrib(self):
        print(f'Getting  {name} ...')
        return getattr(self, '__'+name)

    def set_attrib(self, value):
        print(f'Setting  {name} ...')
        setattr(self, '__'+name, value)

    return property(get_attrib, set_attrib, None, None)


def len_prop(name, length):

    def get_prop(self):
        print(f'Getting  {name} ...')
        return getattr(self, '__'+name)

    def set_prop(self, value):

        print(f'Setting  {name} ...')
        if type(value) is int or type(value) is str:
            if len(str(value)) != length:
                raise ValueError(f'Length of {name} must be = {length}')
        else:
            raise ValueError('Invalid Value passed')

        if isinstance(value, int):
            setattr(self, '__'+name, value)
            return

        if type(value) is str and value.isdecimal():
            setattr(self, '__' + name, int(value))
        else:
            raise ValueError('Invalid Value passed')

    return property(get_prop, set_prop, None, None)


class Person2:

    name = autoprop('name')
    phno = len_prop('phno', 10)
    address = autoprop('address')

    def __init__(self, name, phno, address) -> None:
        self.name = name
        self.phno = phno
        self.address = address


p2 = Person2('Vikram', 7897456412, '12/ABC xyz')

print('\nGetting Attribute Value')
print('p2.name    :', p2.name)
print('p2.address :', p2.address)
print('p2.phno    :', p2.phno)

print('\nAssigning new value to attribute :')
p2.phno = '7979764122'
print('p2.phno    :', p2.phno)

print('\nPassing invalid Values :')

# Passing value having length greater or smaller than required length
p2.phno = 8788787
p2.phno = 87887878971

# Passing Invalid Values
p2.phno = '88478.1254'
p2.phno = True


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Setting  name ...
Setting  phno ...
Setting  address ...

Getting Attribute Value
Getting  name ...
p2.name    : Vikram
Getting  address ...
p2.address : 12/ABC xyz
Getting  phno ...
p2.phno    : 7897456412

Assigning new value to attribute :
Setting  phno ...
Getting  phno ...
p2.phno    : 7979764122

Passing invalid Values :
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 1, in <&zwj;module>
  File "/home/asha/PycharmProjects/pythonEx/07_OOP/classes/Property.py", line 203, in set_prop
    raise ValueError(f'Length of {name} must be = {length}')
ValueError: Length of phno must be = 10

Traceback (most recent call last):
  File "<&zwj;input>", line 1, in <&zwj;module>
  File "/home/asha/PycharmProjects/pythonEx/07_OOP/classes/Property.py", line 214, in set_prop
    raise ValueError('Invalid Value passed')
ValueError: Invalid Value passed</pre></div>

<hr/>



### Property decorator for derived attribute

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

from datetime import date


class Person:

    def __init__(self,name,  dob: date) -> None:
        self.name = name
        self.dob = dob

    @property
    def age(self):
        return date.today().year - self.dob.year


p1 = Person('Kevin', date(1995, 5, 21))
print(f'{p1.name}\'s age is {p1.age}')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Kevin's age is 25
</pre></div>

<hr/>



## Descriptors 

<p> Descriptor is an object attribute whose attribute access methods are overridden by methods of descriptor protocol.</p>

{% include callout.html content="Descriptor is the fundamental way to intercept attribute access which is used by other functionality such as property, slots, @staticmethod, @classmethod decorators and super()." type="primary" %} 

<div id="tut-content"> 
    <ul>
        <li> Descriptors are defined with separate class. </li>
        <li> Any class having one of below descriptor protocol methods becomes descriptor. </li>
    </ul> 
</div>

### Descriptor Protocol Methods

#### \__get__(self, instance, owner)
<p> Intercepts access to the value of attribute. </p>

<hr/>

#### \__set__(self, instance, value)
<p> Intercepts value assignment to attribute. </p>

<hr/>

#### \__delete__(self, instance) 
<p> Intercepts attribute delete. </p>

<hr/>

<p> Method Arguments : </p>
<div id="tut-content"> 
    <ul>
        <li> <strong> self : </strong> an object of the descriptor class which is attached to target class.</li>
        <li> <strong> instance :</strong> an object of the target class on which attribute operation is performed. </li>
        <li> <strong> owner :</strong> target class of an instance on which operation is performed. </li>
    </ul> 
</div>

<hr/>

### Types of Descriptors

#### Data descriptor
<p> Descriptor with __set__() or __delete() is called as data descriptor. </p>
<hr/>


#### Non-Data descriptor
<p> Descriptor with only __get__() method is called as Non-Data descriptor. They are used for methods in mostly. </p>
<hr/>



<div id="tut-content"> 
    <ul>
        <li> <strong> Understanding descriptor methods</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Descriptor1:

    def __get__(self, instance, owner):
        print('\nGetting attribute....')
        print(f' self -> {self} \n instance -> {instance} \n owner -> {owner}')

    def __set__(self, instance, value):
        print('\nsetting value ........')
        print(f' self -> {self} \n instance -> {instance} \n value -> {value}')

    def __delete__(self, instance):
        print('\ndeleting the attribute ....')
        print(f'instance  -> {instance}')



class Person1:

    name = Descriptor1()

    def __init__(self, name):
        self.name = name


p1 = Person1('Andrew')

p1.name

p1.name = 'Sam'

delattr(p1, 'name')



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
setting value ........
 self -> <classes.Descriptors.Descriptor1 object at 0x7f92ec1bd5b0> 
 instance -> <classes.Descriptors.Person1 object at 0x7f92ec1ad5b0> 
 value -> Andrew

Getting attribute....
 self -> <classes.Descriptors.Descriptor1 object at 0x7f92ec1bd5b0> 
 instance -> <classes.Descriptors.Person1 object at 0x7f92ec1ad5b0> 
 owner -> <class 'classes.Descriptors.Person1'>

setting value ........
 self -> <classes.Descriptors.Descriptor1 object at 0x7f92ec1bd5b0> 
 instance -> <classes.Descriptors.Person1 object at 0x7f92ec1ad5b0> 
 value -> Sam

deleting the attribute ....
instance  -> <classes.Descriptors.Person1 object at 0x7f92ec1ad5b0>
</pre></div>

<hr/>


### Creating a generic descriptor


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Descriptor2:

    def __init__(self, attrname, value=None):
        self.attrname = attrname
        self.val = value

    def __get__(self, instance, owner):
        print(f'Getting attribute value -> {self.attrname}')
        return instance.__dict__[self.attrname]

    def __set__(self, instance, value):
        print(f'Setting attribute -> {self.attrname} with value -> {value}')
        instance.__dict__[self.attrname] = value


class Person2:

    name = Descriptor2('_name')

    def __init__(self, name) -> None:
        self._name = name


p1 = Person2('Alex')
p2 = Person2('Mike')

print('Getting attribute value :')
print('p1.name :', p1.name)
print('p2.name :', p2.name)

print('\nChanging attribute value :')
print('Before p1.name :', p1.name)
p1.name = 'Kevin'
print('After p1.name :', p1.name)



{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Getting attribute value :
Getting attribute value -> _name
p1.name : Alex
Getting attribute value -> _name
p2.name : Mike

Changing attribute value :
Getting attribute value -> _name
Before p1.name : Alex
Setting attribute -> _name with value -> Kevin
Getting attribute value -> _name
After p1.name : Kevin
</pre></div>

<hr/>


<div id="tut-content"> 
    <ul>
        <li> <strong> Introspecting Descriptor object </strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('Person2.__dict__ :', Person2.__dict__.keys())
print('p1.__dict__ :', p1.__dict__.keys())
print('p2.__dict__ :', p2.__dict__.keys())
print('Accessing Descriptor Object :', type(Person2.__dict__['name']))
print('Descriptor Object __dict__ :', Person2.__dict__['name'].__dict__.keys())
print('Invoking Descriptor method p2 :', Person2.__dict__['name'].__get__(p2, Person2))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Person2.__dict__ : dict_keys(['__module__', 'name', '__init__', '__dict__', '__weakref__', '__doc__'])
p1.__dict__ : dict_keys(['_name'])
p2.__dict__ : dict_keys(['_name'])
Accessing Descriptor Object : <class 'classes.Descriptors.Descriptor2'>
Descriptor Object __dict__ : dict_keys(['attrname', 'val'])
Getting attribute value -> _name
Invoking Descriptor method p2 : Mike
</pre></div>

<hr/>



### ReadOnly Descriptor

<p> If __set__ method of descriptor does not allow modification it becomes readonly descriptor. </p>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class AccountNumber:

    def __init__(self, attrname, value=None):
        self.attrname = attrname
        self.val = value

    def __get__(self, instance, owner):
        return instance.__dict__[self.attrname]

    def __set__(self, instance, value):
        raise AttributeError('ReadOnly Attribute!')

    def __del__(self, instance):
        raise AttributeError('ReadOnly Attribute!')


class BankAccount2:

    acc_no = AccountNumber('_accountnumber')

    def __init__(self, accno) -> None:
        self._accountnumber = accno


b2 = BankAccount2(10014545455)
b3 = BankAccount2(97874545452)

print('b2.ACCNO :', b2.acc_no)
print('b3.ACCNO :', b3.acc_no)

print('Setting attribute will result in Error :')
b2.acc_no = 150000

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
b2.ACCNO : 10014545455
b3.ACCNO : 97874545452
Setting attribute will result in Error :
</pre><pre id='tut-output-error' class="result-content">Traceback (most recent call last):
  File "<&zwj;input>", line 2, in <&zwj;module>
  File "/home/asha/PycharmProjects/pythonEx/07_OOP/classes/Descriptors.py", line 126, in __set__
    def __set__(self, instance, value):
AttributeError: ReadOnly Attribute!</pre></div>

<hr/>



### Non-Data Descriptor
<p>A Descriptor is Non-Data Descriptor if it is overriding only __get__() method of descriptor protocol.</p>

#### Descriptor for Instance Method
{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class InstanceMDesc:

    def __init__(self, func, name) -> None:
        self.func = func
        self.name = name

    def __get__(self, instance, owner):
        print(f'Invoking {self.name} function')

        def inner_func(*args, **kwargs):
            return self.func(instance, *args, **kwargs)

        return inner_func


class Person5:

    def __init__(self, fname, lname):
        self.fname = fname
        self.lname = lname

    def get_fname(self):
        return self.fname

    def get_full_name(self):
        return self.fname + ' ' + self.lname

    get_full_name = InstanceMDesc(get_full_name, 'get_full_name')


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Invoking get_full_name function
get_full_name() : Ben Jackson
</pre></div>

<hr/>



#### Descriptor for Class Method


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class ClassMDesc:

    def __init__(self, func, name) -> None:
        self.func = func
        self.name = name

    def __get__(self, instance, owner):

        if owner is None:
            owner = type(instance)

        def inner_func(*args, **kwargs):
            print(f'Invoking {self.name} function with ({args}, {kwargs})')
            return self.func(owner, *args, **kwargs)
        return inner_func


class BankAccount3:

    INTEREST_RATE = 4.6

    def set_interest_rate(cls, rate):
        cls.INTEREST_RATE = rate

    set_interest_rate = ClassMDesc(set_interest_rate, 'set_interest_rate')


print(type(BankAccount3.set_interest_rate))

print('Before INTEREST_RATE', BankAccount3.INTEREST_RATE)
BankAccount3.set_interest_rate(4.8)
print('After INTEREST_RATE', BankAccount3.INTEREST_RATE)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
<class 'function'>
Before INTEREST_RATE 4.8
Invoking set_interest_rate function with ((4.8,), {})
After INTEREST_RATE 4.8
</pre></div>

<hr/>


#### Descriptor for Static Method

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class StaticMDesc:

    def __init__(self, func, name) -> None:
        self.func = func
        self.name = name

    def __get__(self, instance, owner):
        print(f'Invoking Static Method {self.name} .....')
        return self.func


class BankAccount4:

    def check_eligibility(age):
        if age >= 13:
            return True
        return False

    check_eligibility = StaticMDesc(check_eligibility, 'check_eligibility')


print('check_eligibility(15) :', BankAccount4.check_eligibility(15))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Invoking Static Method check_eligibility .....
check_eligibility(15) : True
</pre></div>


{% include callout.html content="**Note** : Now that we know the Descriptor we can implement out own Property function which takes get , set and delete function as argument and returns the instance of Descriptor class. <br/> **Hint** : Methods taken as argument is set to instance and invoked on call of \__get__ , \__set__ and \__delete__. " type="primary" %} 
<hr/>


## Mixing Descriptors and Dunders for intercepting attribute access

<div id="tut-content"> 
    <ul>
        <li> Access to the Descriptor objects in class are intercepted by __getattribute__() method. </li>
        <li> Overriding __getattribute__() prevents automatic descriptor calls if not redirected to Object.__getattribute() which invokes default implementation and same goes for other descriptor protocol methods. </li>
        <li> Internally b1.amount for descriptor access is converted in to BankAccountM.__dict__['amount'].__get__(b1, BankAccountM).</li>
    </ul> 
</div>


{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class DescriptorG:

    def __init__(self, attrname, value=None):
        self.attrname = attrname
        self.val = value

    def __get__(self, instance, owner):
        print(f'[DESCRIPTOR] Getting attribute value -> {self.attrname}')
        return instance.__dict__[self.attrname]

    def __set__(self, instance, value):
        print(f'[DESCRIPTOR] Setting attribute -> {self.attrname} with value -> {value}')
        instance.__dict__[self.attrname] = value


class BankAccountM:

    amount = DescriptorG('_amount')

    def __init__(self, acc_no, name, amount) -> None:
        self.acc_no = acc_no
        self.name = name
        self._amount = amount

    def __getattribute__(self, name):
        print(f'[__getattribute__] getting {name} ....')
        return object.__getattribute__(self, name)

    def __setattr__(self, name, value):
        print(f'Setting {name} -> {value}')
        object.__setattr__(self, name, value)

    def __delattr__(self, name):
        print(f'Deleting {name} ...')
        object.__delattr__(self, name)

b1 = BankAccountM(156465122, 'Aaron', 500)

print('\nAccessing descriptor attribute')
print('b1.amount :', b1.amount)

print('\nDirectly Accessing Descriptor')
print(BankAccountM.__dict__['amount'].__get__(b1, BankAccountM))


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Setting acc_no -> 156465122
Setting name -> Aaron
Setting _amount -> 500

Accessing descriptor attribute
<div id='tut-highlight'>[__getattribute__] getting amount ....
[DESCRIPTOR] Getting attribute value -> _amount</div>
[__getattribute__] getting __dict__ ....
b1.amount : 500

Directly Accessing Descriptor
<div id='tut-highlight'>[DESCRIPTOR] Getting attribute value -> _amount</div>
[__getattribute__] getting __dict__ ....
500
[__getattribute__] getting __class__ ....
[__getattribute__] getting __class__ ....
[__getattribute__] getting __len__ ....
[__getattribute__] getting __class__ ....
[__getattribute__] getting __class__ ....
[__getattribute__] getting __class__ ....
[__getattribute__] getting __class__ ....
[__getattribute__] getting __class__ ....
[__getattribute__] getting __len__ ....

</pre></div>

<hr/>


## Descriptor vs  \_\_[get-set-del]attr\_\_()
<div id="tut-content"> 
    <ul>
        <li> Descriptor can be applied to per attribute bases whereas __[get-set-del]attr__() intercepts all data and method attribute access. </li>
        <li> Descriptor method calls are made by __[get-set-del]attr__(). </li>
    </ul> 
</div>

<hr/>

## Descriptor VS Property
<div id="tut-content"> 
    <ul>
        <li> Property is more flexible : we can pass none to block fset which will not allow modification of attrib, to do the same we must define __set__() in descriptor and raise attribute error manually. </li>
        <li> Descriptor is fundamental way of intercepting attribute access and it is used by property.Property function provides abstraction (hides lower level implementation details) over Descriptors.  </li>
        <li> Descriptor has more broad use cases than property. </li>
    </ul> 
</div>

<hr/>


## Object Composition and attribute access delegation

<div id="tut-content"> 
    <ul>
        <li> <strong> Delegating attribute access (data, method) access using __getattr__() dunder and getattr() method.</strong> </li>
    </ul> 
</div>

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

class Car:

    def __init__(self, engine) -> None:
        self.engine = engine

    def __getattr__(self, item):
        return getattr(self.engine, item)


class Engine:
    def __init__(self, type, cc) -> None:
        self.type = type
        self.cc = cc

    def start(self):
        print('Starting the car')

    def stop(self):
        print('Stopping the car')

    def __str__(self):
       return f'Engine type -> {self.type} , CC -> {self.cc}'


e1 = Engine('VEE', 2000)
c1 = Car(e1)

print('\nAccessing data attribute of delegated object')
print('c1.type :', c1.type)

print('\nAccessing method attribute of delegated object')
c1.start()
c1.stop()

{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
Accessing data attribute of delegated object
c1.type : VEE

Accessing method attribute of delegated object
Starting the car
Stopping the car
</pre></div>

<hr/>

<div id="tut-content"> 
    <ul>
        <li> <strong>Accessing Dunder / special / magic methods of delegated object </strong> </li>
    </ul> 
</div>

{% include callout.html content="**Note** : While delegating attribute access of the object dunder methods are not intercepted by __getattr__() Dunder needs to be defined manually. Dunder methods can be added manually or thorough inheritance / Mixin." type="primary" %} 

{% assign code_block = code_block | plus: 1 %}
{% assign code_block_id = "code-block-" | append: code_block %}
{% assign code_header_id = "code-header-" | append: code_block %}
<div id="{{ code_block_id }}" class="code-block">
<p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
{% highlight python %}

print('e1 :', e1)
print('c1 :', c1)


{% endhighlight %}
</div>

<div class="result"><p class="result-header"><b>Output</b></p>
<pre class="result-content">
e1 : Engine type -> VEE , CC -> 2000
c1 : <classes.Car.Car object at 0x7f5ef44cefa0>
</pre></div>




<hr/>

{% include links.html %}
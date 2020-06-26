---
title: Install and Configure Python and Pycharm
layout: tutorial
sidebar: python_sidebar
permalink: python_install_python_pycharm.html
folder: python
prev_section:
prev_section_title:
prev:
prev_title:
next: python_hello_world.html
next_title: Hello World!
next_section:
next_section_title:
datatable: true
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/a35zYMchHPE" allowfullscreen></iframe>
</div>

## Install Python

<ul id="profileTabs" class="nav-tab-profile ">
    <li class="active"><a href="#Linux" data-toggle="tab">Linux</a></li>
    <li><a href="#Windows" data-toggle="tab">Windows</a></li>
    <li><a href="#Mac" data-toggle="tab">Mac</a></li>
</ul>

<div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="Linux">
    <h3>Linux (Ubuntu)</h3>

<div id="tut-content"> 
    <ol>
        <li> Checking Python 3 version  </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_version_linux.png" class="tut-img" alt="python version linux">
        </div> <br/>
        
        <li> Install required tools for Python  </li>
        {% assign code_block = code_block | plus: 1 %}
        {% assign code_block_id = "code-block-" | append: code_block %}
        {% assign code_header_id = "code-header-" | append: code_block %}
        <div id="{{ code_block_id }}" class="code-block">
        <p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
        {% highlight shell %} sudo apt-get install zlib1g-dev libssl-dev libffi-dev {% endhighlight %}
        </div>

        <li> Checking Python Versions  </li>
        
        <a href="https://www.python.org/ftp/python/" target="_blank">python.org/ftp/python/</a>

        <div id="tut-img">
            <img src="/images/tutorials/python/python_linux_site1.png" class="tut-img" alt="python_linux_site1">
        </div>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_linux_site2.png" class="tut-img" alt="python_linux_site2">
        </div> <br/>

        <li> Execute following command with target Python version  </li>
        {% assign code_block = code_block | plus: 1 %}
        {% assign code_block_id = "code-block-" | append: code_block %}
        {% assign code_header_id = "code-header-" | append: code_block %}
        <div id="{{ code_block_id }}" class="code-block">
        <p id= "{{ code_header_id }}" class="code-header" data-toggle="tooltip" data-original-title="Copy to ClipBoard"><b>Copy</b></p><script type="text/javascript">copyHover("{{ code_block_id }}", "{{ code_header_id }}")</script>
        {% highlight shell %}cd /opt
sudo wget https://www.python.org/ftp/python/3.8.3/Python-3.8.3.tgz
sudo tar -xzf Python-3.8.3.tgz
cd Python-3.8.3
sudo ./configure --enable-optimizations
sudo make altinstall
cd ..
sudo rm Python-3.8.3.tgz 
        {% endhighlight %}
        </div>

        <li> Verifying installation and locate python interpreter path  </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_linux_verify.png" class="tut-img" alt="python_linux_verify">
        </div> <br/>
    </ol> 
</div>

</div>

<div role="tabpanel" class="tab-pane" id="Windows">
    <h3>Windows</h3>
    <div id="tut-content"> 
    <ol>    
        <li> Go to python for Windows download website  </li>
        <a href="https://www.python.org/downloads/windows/" target="_blank">python.org/downloads/windows/</a> <br/> <br/>

        <li> Select the Python version to be installed</li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_windows_site1.png" class="tut-img" alt="python_windows_site1">
        </div> <br/>

        <li> Scroll down and download the installer file</li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_windows_site2.png" class="tut-img" alt="python_windows_site2">
        </div> <br/>

        <li> Open the Installer and check 'Select Add Python X.X to PATH'</li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_windows_installer.png" class="tut-img" alt="python_windows_installer">
        </div> <br/>

        <div id="tut-img">
            <img src="/images/tutorials/python/python_windows_complete.png" class="tut-img" alt="python_windows_complete">
        </div> <br/>

        <li> Checking Python version and python interpreter path </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_windows_check.png" class="tut-img" alt="python_windows_check">
        </div> <br/>

    </ol>
    </div>
</div>


<div role="tabpanel" class="tab-pane" id="Mac">
    <h3>Mac</h3>
    <div id="tut-content"> 
    <ol>    
        <li> Go to python for MacOs download website  </li>
        <a href="https://www.python.org/downloads/mac-osx/" target="_blank">www.python.org/downloads/mac-osx/</a> <br/> <br/>

        <li> Select the Python version to be installed</li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_mac_website1.png" class="tut-img" alt="python_mac_website1">
        </div> <br/>

        <li> Scroll Down the page, download and start the python installer</li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_mac_website2.png" class="tut-img" alt="python_mac_website1">
        </div> <br/>

        <li> Complete the setup and install certificates </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_mac_setup.png" class="tut-img" alt="python_mac_setup">
        </div> <br/>

        <li> Double click on install certificate file </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_mac_install_certi.png" class="tut-img" alt="python_mac_install_certificate">
        </div> <br/>

        <li> Verifying installation and checking interpreter path </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_mac_verify.png" class="tut-img" alt="python_mac_verify">
        </div> <br/>

        <li> Alternate path : Interpreter path ‘usr/local/bin/pythonX.X’ can also be used alternatively. </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/python_mac_alternate.png" class="tut-img" alt="python_mac_alternate">
        </div> <br/>

    </ol>
</div>

</div>
</div>

<hr/>


## Install PyCharm



<div id="tut-content"> 
    <ol>    
        <li> Go to PyCharm download site and Download the Community Edition </li>
        <a href="https://www.jetbrains.com/pycharm/download/" target="_blank">jetbrains.com/pycharm/download/</a> <br/> <br/>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_download_site1.png" class="tut-img" alt="pycharm_download_site1">
        </div> <br/>

        <li> Download and install the PyCharm </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_download_site2.png" class="tut-img" alt="pycharm_download_site2">
        </div> <br/>

        <li> Open Pycharm and click on Create New Project </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_welcome.png" class="tut-img" alt="pycharm_welcome">
        </div> <br/>


        <li> Give the name of New Project </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_project_name.png" class="tut-img" alt="pycharm_project_name">
        </div> <br/>

        <li> Select Auto detected Python Interpreter for Virtual Environment </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_select_python_interpreter.png" class="tut-img" alt="pycharm_select_python_interpreter">
        </div> <br/>

        <p>  Or Manually selecting Python Interpreter for Virtual Environment  </p>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_python_interpreter1.png" class="tut-img" alt="pycharm_python_interpreter1">
        </div> <br/>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_python_interpreter2.png" class="tut-img" alt="pycharm_python_interpreter2">
        </div> <br/>


        <li> Click on Create  </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_create_project_env.png" class="tut-img" alt="pycharm_create_project_env">
        </div> <br/>


        <li> Creating new Python file  </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_new_python_file.png" class="tut-img" alt="pycharm_new_python_file">
        </div> <br/>

        <li> Giving file name  </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_new_filename.png" class="tut-img" alt="pycharm_new_filename">
        </div> <br/>

        <li> write print() statement and Execute it in console using  shortcut : Alt + Shift + E   </li>
        <div id="tut-img">
            <img src="/images/tutorials/python/pycharm_execute_print.png" class="tut-img" alt="pycharm_execute_print">
        </div> <br/>




    </ol>
</div>

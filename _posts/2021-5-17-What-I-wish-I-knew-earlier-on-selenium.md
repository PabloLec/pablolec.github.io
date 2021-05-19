---
published: true
layout: post
title: What I wish I knew earlier on Selenium
subtitle: Tips and best practices I learned on working with Selenium.
tags: selenium scraping tips
---

Let's share some tips regarding Selenium in Python that I learned during my multiple times working with it.
My main usage of Selenium is web automation. I nearly never used it as a web testing framework. Hence, my recommendations might best suit my type of user.

<!--more-->
<hr>

# Drivers

Drivers may be your first headache with Selenium. Most common choices are, of course, chrome and gecko. My personal go to is gecko driver, it find it faster and more reliable as it rarely failed to execute my scripts regardless of its version.
For its installation, again, you have multiple choices.

Either you just download its [latest release](https://github.com/mozilla/geckodriver/releases) and provide the binary path in your script:

`driver = webdriver.Firefox(executable_path='YOUR_DRIVER_PATH')`

You can also avoid manually setting its path by placing your binary in your environment path.

`export PATH=$PATH:YOUR_DRIVER_PATH`

Then, just use your driver method without setting its executable path argument.

If you’re an Ubuntu user, my favorite procedure is using [apt](https://www.ubuntuupdates.org/package/ubuntu_mozilla_security/bionic/main/base/firefox-geckodriver) to ease the process and get frequent updates:

`sudo apt install firefox-geckodriver`

Whether you choose one way to do it or another, be careful when you update your driver and/or Selenium. Try to back up your previous binary and downgrade your current one if you encounter any unexpected issue.
Although, you should not use regular `time.sleep` prefer using Selenium built-in methods to avoid random failures related to explicit timing.

<hr>

# Wait commands

In your first tinker scripts, it might tempt you to use `time.sleep` to slow down the execution. Resource loading and general Javascript execution often takes some time and you do not want to click something that is not yet in viewport.


### Implicit waits

Implicit waits set global duration to wait before timing out.
You can set it with:

```python
driver = webdriver.Firefox()
driver.implicitly_wait(5) # in seconds
```

Then, the driver default behavior will be to wait 5 seconds before throwing a `TimeoutException` when you execute a command.

### Explicit waits

Explicit waits are condition based instructions. I prefer to work with these even if a small global implicit wait of one or two seconds might be useful. 
You’ll need to use the WebDriverWait object and declare your instructions like so:

```python
from selenium.webdriver.support.ui import WebDriverWait

element = WebDriverWait(driver, 10).until(YOUR_CONDITION)
```

Regarding the condition part, you will work with expected_conditions modules, often shorten to EC.

```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located(YOUR_ELEMENT)
    )
```

`expected_condtions` offers a lot of useful methods, there surely is one that fits your needs.
Take a look at the full list:

- title_is
- title_contains
- presence_of_element_located
- visibility_of_element_located
- visibility_of
- presence_of_all_elements_located
- text_to_be_present_in_element
- text_to_be_present_in_element_value
- frame_to_be_available_and_switch_to_it
- invisibility_of_element_located
- element_to_be_clickable
- staleness_of
- element_to_be_selected
- element_located_to_be_selected
- element_selection_state_to_be
- element_located_selection_state_to_be
- alert_is_present

<hr>

# XPath

XPath, or XML Path Language, is a syntax for finding elements on a web page using XML path expression. It can be used to search though HTML DOM but also in other types of documents using a XML-like structure.

XPath will be your most powerful ally to find any tricky element. I end up using it over all other built-in methods.
A simple XPath query looks like this : 

``` python
link = driver.find_element_by_xpath("//TAGNAME[@ATTRIBUTE='VALUE']")

# Or with actual values
link = driver.find_element_by_xpath("//a[@href='https://www.google.com']")
```

But XPath can be a lot more useful than simple attribute/value queries. You can specify multiple conditions, search in a subelement, search contained substrings, etc.
I like to think of it as SQL queries, sometimes with the readability of regex.

Here are some examples:

``` python

### <a href="https://pablolec.github.io/myexamplelink">Follow this link !</a>

link = driver.find_element_by_xpath("//*[contains(text(),"Follow")]")
link = driver.find_element_by_xpath("//*[contains(@href,"myexamplelink")]")

# Note that I use "*" as in regex to match any tag name.

### <input type="submit" name="loginButton">
### <input type="input" name="loginButton">

buttons = driver.find_elements_by_xpath("//input[@type='submit' and @name='loginButton']")
# "//input[@type='submit'][@name='loginButton']" would work too.
# Find only the first button.
buttons = driver.find_elements_by_xpath("//input[@type='submit' or @name='loginButton']")
# Find both buttons.

### <label id="logIn">foo</label>
### <label id="logOut">bar</label>
### <label id="userLog">baz</label>

buttons = driver.find_elements_by_xpath("//label[starts-with(@id,'log')]")
# Find only the first two labels.
button = driver.find_element_by_xpath("//label[ends-with(@id,'Log')]")
# Find last label.

# XPath is case sensitive but several solutions exists.
# You can use functions 'lower-case' and 'upper-case' but I'd rather use 'matches':# <b>Hello World</b>

hello = driver.find_element_by_xpath("//b[matches(text(), 'hello world')]")

### <div id="container"> <span> <h1>My Text</h1> </span> </text>

container = driver.find_element_by_xpath("//*[text()='My Text']//ancestor::div")
# Will search in all ancestors (parents, grand-parents, etc.).
# Here, it will find the container div.

header = driver.find_element_by_xpath("//*[@id='container']//child::h1")
# You can also search in all childs.

span = container.find_element_by_xpath(".//span")
# As you can see, you can also search within a previous element.
# You"ll have to replace the driver object by this element and add a dot at the beginning of your expression.
```

And there are many more things you can do with XPath. 
Note that there are 3 versions of XPath, by default, Selenium will use your browser’s version and if it cannot find it, it will use XPath 1.0.  
To learn more, you can give a read to [W3Schools tutorial](https://www.w3schools.com/xml/xpath_intro.asp) and [LambdaTest guide](https://www.lambdatest.com/blog/complete-guide-for-using-xpath-in-selenium-with-examples/).

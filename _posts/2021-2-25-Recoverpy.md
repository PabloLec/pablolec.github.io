---
published: true
---
<p style="text-align: center;">
![demo]({{site.baseurl}}https://raw.githubusercontent.com/PabloLec/recoverpy/main/docs/assets/demo.gif)
</p>
* * *

Hi ! :grinning:

I finally pushed my first attempt to make a decent repo.

The idea bloomed a few weeks ago when I had to face a feared situation. Data loss.

I had freshly installed Ubuntu ARM64 to replace 32-bits Raspbian on a Raspberry PI 4. I preserved /home/ folder, but I had to give some adjustments to various homemade scripts.

I try to be a back-up kind of guy. For this Raspberry, the /home/ folder gets tarballed and stored in Google Drive daily. This time, that didn’t do the trick. I was probably 200 lines deep, 2 hours in modifying my obscure script. My misery came from typing a ‘>‘ instead of a pipe in the console. My beloved script was gone, overwritten.

Oops.

There are a lot of utilities/ways to retrieve deleted files but when the file still exists, only its content is overwritten, the solution was well hidden.
After a few hours of despair, this kind of occasion where you feel like the only fool to search your queries, I eventually found what I was looking for.

To find a file matching our pattern:

	grep -a -b SEARCHED_STRING PARTITION

- grep: print lines matching a pattern
- a: Process a binary file as if it were text
- b: Print the 0-based byte offset within the input file before each line of output.



To display its content:

	dd if=PARTITION count=1 status=none skip=BLOCK_NUMBER

- dd: convert and copy a file
- if=PARTITION: read from PARTITION instead of stdin
- count=1: copy only 1 input block
- status=none: avoid useless verbosity
- skip=BLOCK_NUMBER: skip to the desired block

So with the combination of those two commands, you can retrieve your precious one, even a temporary file saved by the system, your IDE, etc.

I wanted to ease the entire process, in particular by presenting the search results more clearly.

As the grep/dd procedure could only work in a Linux environment, I skipped a heavy GUI and preferred a console-based UI. A CUI or TUI, as I came to learn.

Searching for a library to build the UI with, I frequently came across [curses](https://docs.python.org/3/howto/curses.html) and [urwid](https://github.com/urwid/urwid).

Both seemed to do the job, but taking a closer look, they are quite heavy libraries with relatively steep learning curves.

I wanted more of a Tkinter than a PyQt.

Eventually, I found [py_cui](https://github.com/jwlodek/py_cui) which is based upon curses but looked a lot easier to work with.

So here it is, my little data recovery utility and its console-based UI.

The utility wraps the grep search with the dd display, then saves the selected result.
Multiple results can also be selected, concatenated, and saved in a single file. That can be useful to 
recover a text file larger than one partition block.

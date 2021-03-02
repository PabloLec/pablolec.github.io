---
published: true
layout: post
title: Recoverpy
category: Repository
tags: [repository, utility]
---

{:refdef: style="text-align: center;"}
![demo](https://raw.githubusercontent.com/PabloLec/recoverpy/main/docs/assets/demo.gif)
{: refdef}

<!--more-->
<hr>

Hi ! :grinning:

I finally pushed my first attempt to make a decent repo.

The idea bloomed a few weeks ago when I had to face a feared situation. Data loss.

I had freshly installed Ubuntu ARM64 to replace 32-bits Raspbian on a Raspberry PI 4. I preserved `/home/` folder, but I had to give some adjustments to various homemade scripts.

I try to be a back-up kind of guy. For this Raspberry, the `/home/` folder gets tarballed and stored in Google Drive daily. This time, that didn’t do the trick. I was probably 200 lines deep, 2 hours in modifying my obscure script. My misery came from typing a `>` instead of a pipe in the console. My beloved script was gone, overwritten.

:mask: Oops.

There are a lot of utilities/ways to retrieve deleted files but to get an existing file content back, the solution was well hidden.
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

<hr>

:thought_balloon: **Follow-ups**

- The UI faces some bugs regarding mouse integration. It possibly has more to do with py_cui than my poor implementation of it. I will try to push some fixes on py_cui repo.
- Thereupon, py_cui will continue to evolve. My next action on recoverpy will certainly be a more complete usage of py_cui capabilities.
- My handling of multi-threading and multi-processing may be improved to speed up the search. I've managed to work with the GIL and obtain acceptable performances. Still, I will try to improve it if I receive pertinent feedback.

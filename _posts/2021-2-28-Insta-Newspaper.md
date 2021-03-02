---
published: true
---
{:refdef: style="text-align: center;"}
![demo](https://raw.githubusercontent.com/PabloLec/insta_newspaper/main/docs/assets/demo.gif)
{: refdef}

<!--more-->
<hr>

Last year, I have done a lot of web automation using Selenium.

Every dev dream is to automate everything, at least that’s mine. I’d like to have a cron job for every boring and redundant thing I might do.

So, when I started tinkering with web automation, ideas started rushing. Now, dozens of scripts and a few bots later, I wanted to do some nice, clean and shareable project with Selenium.

I had the idea of an Instagram bot that would post newspaper front pages of today’s date, except 100 years earlier. Then it evolved in just posting today’s date newspaper from different years. I thought it could be interesting to revive day-to-day news from 1914, 1939, 1945, or even 1830.

Being french, I created an IG account aimed at the french public, with, of course, french newspapers.

<hr>

First, we need some archive images to scrap and post.

I found the Bibliothèque Nationale de France [digital library website](https://gallica.bnf.fr/). Exactly what I was looking for, you can browse by title, year, date. It contains a lot of gems, some headlines are 200+ years old.

Scraping with the help of URL parameters, you quickly have access to front pages images which you can save locally. So far, we only need the help of `requests` library. Depending on the complexity of the website and its dynamic behavior, you may also appreciate an HTML parser like `bs4`.

Once we have our local copy, we need to format it for IG using `cv2`. The main constraints are :

- Either 1:1 or 4:5, we’ll use a 4:5 ratio, portrait format which fits best for a newspaper.

- Max resolution of 1080 x 1350

- Pictures have badly looking white watermarks at the bottom. We’ll remove it and credit the source in the caption.

To remove the watermark, we’ll simply subtract its fixed height, which is 40px.
```
new_height = height - 40	 
image = image[0:new_height, 0:width]
```

Then, we'll resize to a 4:5 ratio and add dark borders on the size to avoid deformations.
```
background_color = [37, 37, 37]

desired_width = float(new_height) * 0.8
border_width = int((desired_width - width) / 2)

# Add left and right borders
image = cv2.copyMakeBorder(
		image,
		0,
		0,
		border_width,
		border_width,
		cv2.BORDER_CONSTANT,
		value=background_color,
)

image = cv2.resize(image, (1080, 1350))
```

Our image is now ready for upload. The whole posting process is done easily with Selenium. The only caveat on this type of website is code obfuscation. It is rare to find elements with nicely named classes or ids. I usually try to search by contained text rather than attributes.

For example, clicking on "Next" button looks like:
```
next_button = wait.until(
    ec.element_to_be_clickable(
        (
            By.XPATH,
            "//button[contains(text(), '{next}')]".format(
            next=self.string_dict[self.language]["next"]
            ),
        )
    )
)
next_button.click()
```

The only other problem you might face is uploading your file. There is always a hidden input, just click on the designated upload button to enable its JS events and then send your location string to the hidden input:
```
hidden_input = self.driver.find_element_by_xpath(
            "//input[@accept='image/jpeg']"
)
hidden_input.send_keys(file_location)
```

Automating Instagram actions is easier than working with other major social platforms. Prefer logging in using cookies to bypass most security triggers.


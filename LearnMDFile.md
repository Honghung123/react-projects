# This is Header - Max font size by using '#'
## Getting start(Medium header font size by using '##')
### Title by using '###'
#### Smaller '####'
##### Tiny '#####'

### Style font 
- Make a unordered list by using "\*", "\+" or "\-" all are the same
1. Make a ordered list by using number 1,2,3,..., using nested list by using TAB
    - **Using '\*\* \*\* or \_\_ \_\_' for bolding font**
        - *Using \*  \* or \_ \_  for italic font*
- ~~This is strikethrough text~~ by using **\~\~ \~\~**
- ***Using both bold and italic style by using \*\*\* \*\*\****
1. **Using Subscript<sub>subscript</sub>**
1. **This is a <sup>superscript</sup> text**
2. **Use 3 or more than Asterisk for Horizontal line**
****
### Quoting code - Color hex
- > Text that is a quote by using \>Text
- The background color is `#ffffff` for light mode and `#000000` for dark mode.

### Link - Relative link - Image
- This is a link by using brakets \[Title represent for link\] for title and parenthesis (link) for link - [GitHub Pages](https://pages.github.com/).
- This is relative link using \\. or  \\.\. are [Relative](./docs/CONTRIBUTING.md) note that this MD file is the current started path 
- Using **\![alt name image if image error](link image/gif or relative link source file from your project ) for rendering image** ![Alternate name for image not rendered ](https://media.tenor.com/ym2raobKRlEAAAAC/kurumi-tokisaki-kurumi.gif)

>You can specify the theme an image is displayed for in Markdown by using the HTML <picture> element in combination with the prefers-color-scheme media feature. We distinguish between light and dark color modes, so there are two options available. You can use these options to display images optimized for dark or light backgrounds. This is particularly helpful for transparent PNG images.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>

[x] Using checked checkbox by using Brakets with x:  \[x\]
[ ] Using empty brackets for empty checkbox : [List](https://github.com/octo-org/octo-repo/issues/740) 
[ ] Using another empty bracket :tada:
[ ] \(Text in parenthesis) in checkbox by using \\
- Mention group or name by using @. Example: @Github/User Do you have any question?
- You can add emoji to your writing by typing :EMOJICODE: (:+1:)
- This is footnote[^1] 
- This is another footnote[^2]
- [^1]: My footnote but it start first

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.
 
 <!-- This content will not appear in the rendered Markdown -->
- This is comment by using \<!-- Comment \--> 
## Features
### Table
-  **Table by using \|  | for each column, seperate head and content by \-\-\- . To align content, Use \:\-\-\- for left align, \:\-\-\-\: for center and \-\-\-\: for right** 

| Left Header  | Second Center Header | Right Header  | Four Header | 
| :--- | :---: | ---:  |  :---: |
| Content   | Content   | Content  |  Content  |
| Content   | Content Cell  |  Content  |  Content |

<details>
<summary>Tips for collapsed sections</summary>
### Code Block
You can add text within a collapsed section. 
You can add an image or a code block, too.
```C++
  \\ This is code by using ``` Code  ```
   cout << "Hello World";
   string test() {
        return "notice the blank line before this function?";
    }
```
</details>
 
 ````
```
Look! You can see my backticks.
```
````
 
 ### Diagram
 ```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
 - [Visit here to learn about Diagram ](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)
 - [Mathematical Expression](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions)
 
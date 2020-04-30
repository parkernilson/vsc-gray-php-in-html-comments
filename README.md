# README for Gray PHP In HTML Comments

When PHP is nested within an HTML comment, it is still processed normally, so it is not grayed out, but this looks bad.

### **_So_**: this extension keeps \<?php and \?> tags lit up within html comments, but sets the rest of the body to match the surrounding comment.

## Features

Keeps \<?php and \?> tags lit up, but sets the php body to match the surrounding comment, making it less obtrusive:

![](https://github.com/parkernilson/vsc-gray-php-in-html-comments/blob/master/docs/gray-php-in-html-comment.gif?raw=true)

Here's what the same comment looks like without this plugin:

![](https://github.com/parkernilson/vsc-gray-php-in-html-comments/blob/master/docs/not-gray-php-in-html-comment.gif?raw=true)

## Release Notes

### 1.0.0

Initial release of Gray PHP In HTML Comments
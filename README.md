# README for Gray PHP In HTML Comments

When PHP is nested within an HTML comment, it is still processed by the PHP server. Because of this PHP is not grayed out by HTML comments, but this looks bad.

### **_So_**: this extension keeps \<?php and \?> tags lit up within html comments, but sets the rest of the body to match the surrounding comment.

NOTE: Even though this plugin will make some PHP look like it is commented out, PHP is **still processed** by the server unless it is commented out with **PHP comments**.

## Features

Keeps \<?php and \?> tags lit up, but sets the php body to match the surrounding comment, making it less obtrusive:

![](https://github.com/parkernilson/vsc-gray-php-in-html-comments/blob/master/docs/gray-php-in-html-comment.gif?raw=true)

Here's what the same comment looks like without this plugin:

![](https://github.com/parkernilson/vsc-gray-php-in-html-comments/blob/master/docs/not-gray-php-in-html-comment.gif?raw=true)

## Release Notes

### 1.0.0

Initial release of Gray PHP In HTML Comments

### 1.0.1 and 1.0.2

Tinkering with README
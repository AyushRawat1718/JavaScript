
# Document Object Manipulation (DOM)

DOM, which stands for Document Object Model, is a way for JavaScript to interact with web pages. 

It essentially creates a **tree-like** structure representing the HTML document, where each element in the HTML is a node in the tree. 

This allows **JavaScript to access and manipulate the structure, content, and style of the web page.**

### Example
```javascript   
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Learning</title>
    <style>
      div {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="bg-black">
      <h1 class="heading">DOM(Document Object Model) Structure</h1>
      <img src="dom.png" alt="dom-structure" />
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </body>
</html>

```

For the above HTML document, following would be the document object model to represent the HTML document 

![Document-object-model](https://github.com/AyushRawat1718/JavaScript/assets/143322694/66630e32-992c-4b01-9476-f902deae2446)

## Summary

* We treat the whole HTML page as a document and for manipulating the objects/content of the document we use the concept of Document Object Manipulation(DOM)

* There are various ways to get an object for manipulation  like `getElementById()`, `getElementsByClassName()` etc.

* Once we got the required object then we can perform required manipulation such as edit, remove, insert etc.
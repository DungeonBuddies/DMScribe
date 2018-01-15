### Indentation

When writing any block of code that is logically subordinate to the line immediately before and after it, that block should be indented two spaces more than the surrounding lines

* Increase the indent level for all blocks by one tab, and modify the tab preferences in your code editor to be two spaces
    * When a line opens a block, the next line starts one tab further in than the line that opened

        ```javascript
        // good:
        if(condition){
          action();
        }

        // bad:
        if(condition){
        action();
        }
        ```

    * When a line closes a block, that line starts at the same level as the line that opened the block
        ```javascript
        // good:
        if(condition){
          action();
        }

        // bad:
        if(condition){
          action();
          }
        ```

    * No two lines should ever have more or less than one tab difference in their indentation. Any number of mistakes in the above rules could lead to this, but one example would be:

        ```javascript
        // bad:
        transmogrify({
          a: {
            b: function(){
            }
        }});
        ```

    * use sublime's arrow collapsing as a guide. do the collapsing lines seem like they should be 'contained' by the line with an arrow on it?


### Variable names

* A single descriptive word is best.

    ```javascript
    // good:
    var animals = ['cat', 'dog', 'fish'];

    // bad:
    var targetInputs = ['cat', 'dog', 'fish'];
    ```

* Collections such as arrays and maps should have plural noun variable names, or descriptive collection names camel cased at the end of a single descriptive noun

    ```javascript
    // good:
    var animals = ['cat', 'dog', 'fish'];

    // bad:
    var animalList = ['cat', 'dog', 'fish'];

    // bad:
    var animal = ['cat', 'dog', 'fish'];
    ```

* Name your variables after their purpose, not their structure

    ```javascript
    // good:
    var animals = ['cat', 'dog', 'fish'];

    // bad:
    var array = ['cat', 'dog', 'fish'];
    ```


### Language constructs

* Do not use `for...in` statements with the intent of iterating over a list of numeric keys. Use a for-with-semicolons statement in stead.

  ```javascript
  // good:
  var list = ['a', 'b', 'c']
  for(var i = 0; i < list.length; i++){
    alert(list[i]);
  }

  // bad:
  var list = ['a', 'b', 'c']
  for(var i in list){
    alert(list[i]);
  }
  ```

* Never omit braces for statement blocks (although they are technically optional).
    ```javascript
    // good:
    for(key in object){
      alert(key);
    }

    // bad:
    for(key in object)
      alert(key);
    ```

* Always use `===` and `!==`, since `==` and `!=` will automatically convert types in ways you're unlikely to expect.

    ```javascript
    // good:

    // this comparison evaluates to false, because the number zero is not the same as the empty string.
    if(0 === ''){
      alert('looks like they\'re equal');
    }

    // bad:

    // This comparison evaluates to true, because after type coercion, zero and the empty string are equal.
    if(0 == ''){
      alert('looks like they\'re equal');
    }
    ```


### Semicolons

* Don't forget semicolons at the end of lines

  ```javascript
  // good:
  alert('hi');

  // bad:
  alert('hi')
  ```

* Semicolons are not required at the end of statements that include a block--i.e. `if`, `for`, `while`, etc.


  ```javascript
  // good:
  if(condition){
    response();
  }

  // bad:
  if(condition){
    response();
  };
  ```

* Misleadingly, a function may be used at the end of a normal assignment statement, and would require a semicolon (even though it looks rather like the end of some statement block).

  ```javascript
  // good:
  var greet = function(){
    alert('hi');
  };

  // bad:
  var greet = function(){
    alert('hi');
  }
  ```


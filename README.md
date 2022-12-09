# Flayout

**NOTE: This is in Alpha, still under development.**


Fluid Layout provides a simple approach to implement resizable panes with a few lines of Javascript and CSS using the standard [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

# Why?
Because I haven't found anything simple, lightweight and scalable. Seems like people tend to over-engineer things nowadays.

# Usage

This is still under development but I kind of like publishing code as I work so anyone can see the progress in a "real-time" way.
So.. so far only this way:

1. Install the library.
```
npm i -S @bitlib/flayout
```
2. Add the module import.
```
    <script type="module">
      import { FLayout } from './node_modules/@bitlib/flayout/index.js';

      FLayout.init();
    </script>
```
3. Include the CSS.
```
    <link rel="stylesheet" href="./node_modules/@bitlib/flayout/styles.css" type="text/css" />
```
4. Use the following layout model.
```
    <div class="flayout-group">
      <div class="flayout-pane">
        One pane
      </div>
      <div class="flayout-pane">
        Another pane
      </div>
    </div>
```
Clue: You can nest more `flayout-group` and `flayout-pane` so that way you get more than just 2 panes.

All this will change and improve.

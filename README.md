# Flayout

**NOTE: This is in Alpha, still under development.**


Fluid Layout provides a simple approach to implement resizable panes with a few lines of Javascript and CSS

# Why?
Because I haven't found anything simple, lightweight and scalable. Seems like people tend to over-engineer things nowadays.
So this is just so solve a personal need that I decided to publish.

# Usage

This is still under development but I kind of like publishing code as I work so anyone can see the progress in a "real-time" way.
So.. so far this are the setup steps:

1. Install the library.
```
npm i -S @bitlib/flayout
```
2. Add the script.
```
  <script src="./node_modules/@bitlib/flayout/dist/flayout.umd.min.js"></script>
```
3. Include the CSS.
```
  <link rel="stylesheet" href="./node_modules/@bitlib/flayout/dist/flayout.min.css" type="text/css" />

```
4. Use the following layout model.
```
    <div class="flayout-main">
      <div class="flayout-pane">
        One pane
      </div>
      <div class="flayout-drag"></div>
      <div class="flayout-pane">
        Another pane
      </div>
    </div>
```
5. Initialize it with `flayout.init()` at any point of your app.

```
  <script>
    flayout.init();
  </script>
```

All this will be improved.

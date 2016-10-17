## Aik Examples

List of examples which you can run using [Aik](https://github.com/d4rkr00t/aik).

### Get Started

Install [Aik](https://github.com/d4rkr00t/aik) globally. Then clone the repo and follow instructions.

```sh
npm install -g aik

git clone git@github.com:d4rkr00t/aik-examples.git

cd aik-examples
```

### Table of Content

* [Thinking in React](#thinking-in-react)
* [Simple Counter in Cycle.js](#simple-counter-in-cyclejs)
* [Weather App RxJS](#weather-app-rxjs)
* [TodoMVC](#todomvc)

## Thinking in React

[Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) tutorial from official react web site.

![Thinking in React](/thinking-in-react/preview.png)

```sh
# Run
# -r optional for react hot load
# -c enables css modules
aik thinking-in-react/src/index.js -r -c

# Build
aik thinking-in-react/src/index.js --build thinking-in-react/dist
```

## Simple Counter in Cycle.js

Just the simplest counter using [cycle.js](http://cycle.js.org/).

![Simple Counter in Cycle.js](/simple-counter-cyclejs/preview.png)

```sh
# Run
aik simple-counter-cyclejs/src/index.js

# Build
aik simple-counter-cyclejs/src/index.js --build simple-counter-cyclejs/dist
```

## Weather App RxJS

Based on blog post ["Understanding Reactive Programming and RxJS"](https://auth0.com/blog/understanding-reactive-programming-and-rxjs/).

![Weather App RxJS](/weather-app-rxjs/preview.png)

Before run you have to get an API key as described in the blog or you can go straight to [get api key page](https://home.openweathermap.org/api_keys).
Then add key to file **weather-app-rxjs/src/key.js** like this:

```js
export default 'your_api_key';
```

```sh
# Run
aik weather-app-rxjs/src/index.js

# Build
aik weather-app-rxjs/src/index.js --build weather-app-rxjs/dist
```

## TodoMVC

![TodoMVC](/todomvc-vue/preview.png)

Fork of some implementations of [TodoMVC](http://todomvc.com/).

### Vue
```sh
# Run
aik todomvc-vue/src/index.js

# Build
aik todomvc-vue/src/index.js --build todomvc-vue/dist
```

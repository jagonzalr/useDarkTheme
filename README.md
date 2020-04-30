[![npm version](https://badge.fury.io/js/use-dark-theme.svg)](https://badge.fury.io/js/use-dark-theme)

# useDarkTheme

Implement dark theme with [React hooks](https://reactjs.org/docs/hooks-intro.html), [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) and [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)

## Getting started

`npm install --save use-dark-theme`

## Usage

```
const [theme, setTheme] = useDarkTheme()
theme === 'dark' ? setTheme('light') : setTheme('dark')
```

You can force to be dark mode on load `const [theme, setTheme] = useDarkTheme(true)`

The default css classes are `light` and `dark`. This classes are added to the body.

The default `storageKey` for `localStorage` is `useDarkTheme`

To overwrite the defaults pass an object:

```
const [theme, setTheme] = useDarkTheme(true, {
	darkClass: 'dark-mode',
	lightClass: 'light-mode',
	storageKey: 'myStorageKey'
})
```

or

```
const [theme, setTheme] = useDarkTheme(null, {
	darkClass: 'dark-mode',
	lightClass: 'light-mode',
	storageKey: 'myStorageKey'
})
```

Full example can be found [here](https://github.com/jagonzalr/useDarkTheme/blob/master/demo/App.jsx)

Example for flashing on load can be found [here](https://github.com/jagonzalr/useDarkTheme/blob/master/demo/index.html)

## Demo

```
git clone git@github.com:jagonzalr/useDarkTheme.git
cd useDarkTheme
npm intall
npm start
```

## License

useDarkTheme is [MIT licensed](./LICENSE).

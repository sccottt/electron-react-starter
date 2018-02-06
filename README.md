# Electron React Starter
Boilerplate for Electron + React apps.

*Note: Scripts are set up to be run on macOS (but maybe work on Windows?).*


## Install

First, clone the repo via git:

```bash
$ git clone https://github.com/sccottt/electron-react-starter.git your-project-name
```

Then, install dependencies:

```bash
$ cd your-project-name
$ git install
```

## Dev using the browser

Build & watch the application using [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/). This can be useful for quick CSS injection.

```bash
$ npm run dev:web
```


## Build for Electron

Watch for changes in the `app/src/` folder and rebuild `app/build` in real time:

```bash
$ npm run dev
```

Rebuild the `app/build` folder for Electron a single time:

```bash
$ npm run build
```


## Run in Electron

Run the build in Electron, using dev environment. This is typically run while `npm run dev` is running in another Terminal tab.

```bash
$ npm start
```


## Package using Electron

Create a native application for macOS or Windows. These scripts rebuild the `app/build/` folder for production and run [Electron Packager](https://github.com/electron-userland/electron-packager) to create native applications.

```bash
$ npm run package
```

```bash
$ npm run package:win
```

Packaging an application for Windows (using macOS) requires [Wine](https://www.winehq.org) be installed.


### Package configuration

The package script can be configured in the `package.json` file inside the namespace `packageApp`:

```js
{
  "name": "electron-react-starter",
  ...
  "packageApp": {
    "outputFolder": "packages",
    "zip": false,
    "appIcon": {
      "mac": "resources/app-icon.icns",
      "win": "resources/app-icon.ico"
    },
    "arch": "x64",
    "winePath": "/Applications/Wine Stable.app"
  },
  ...
}
```

##### Config values
- `outputFolder` [string]: the name of the folder packaged apps will be created in (default: `"packages"`)
- `zip` [boolean]: automatically create a date-stamped zip file of the packaged app (default: `false`)
- `appIcon` [object]: paths to Mac and Windows app icons (default: `undefined`)
- `arch` [string]: processor architecture (default: `"x64"`)
- `winePath` [string]: path to [Wine](https://www.winehq.org) application, which must be installed in order to package for Windows



## Other scripts

Fix permissions to the scripts in the `scripts` folder so they're executable.

```bash
$ npm run enable-scripts
```

Clear the `node_modules` folder and reinstall all modules:

```bash
$ npm run reinstall
```

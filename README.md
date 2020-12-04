# grunt-workbox

> Grunt plugin for integrating Workbox

### Grunt
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-workbox --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-workbox');
```

## Tasks

### Overview
In your project's Gruntfile, add a section named `generateSW`, `injectManifest` or `copyWorkboxLibraries` to the data object passed into `grunt.initConfig()`.

### The "generateSW" task

```js
grunt.initConfig({
    generateSW: {
        default: {
            swDest: 'dist/web/sw.js',
            globDirectory: 'dist/web',
            globPatterns: ['**/*.{js,css,html,png}']
        }
    }
})
```

This task creates a list of URLs to precache, referred to as a "precache manifest", based on the options you provide.

It also takes in additional options that configures the service worker's behavior, like any `runtimeCaching` rules it should use.

Based on the precache manifest and the additional configuration, it writes a ready-to-use service worker file to disk at `swDest`.

The options for this task are documented in the [Workbox Reference Docs](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build). Please read their documentation carefully. 


### The "injectManifest" task

```js
grunt.initConfig({
    injectManifest: {
        default: {
            swSrc: 'dist/web/sw.js.template',
            swDest: 'dist/web/sw.js',
            injectionPoint: '<% MANIFEST FILES %>',
            globDirectory: 'dist/web',
            globPatterns: ['**/*.{js,css,html,png}']
        }
    }
})
```

This task creates a list of URLs to precache, referred to as a "precache manifest", based on the options you provide.

The manifest is injected into the `swSrc` file, and the placeholder string `injectionPoint` determines where in the file the manifest should go.

The final service worker file, with the manifest injected, is written to disk at `swDest`.

The options for this task are documented in the [Workbox Reference Docs](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build). Please read their documentation carefully. 


### The "copyWorkboxLibraries" task

```js
grunt.initConfig({
    copyWorkboxLibraries: {
        default: {
            destDirectory: 'dist/web',
        }
    }
})
```

This task copies over a set of runtime libraries used by Workbox into a local directory, which should be deployed alongside your service worker file.

As an alternative to deploying these local copies, you could instead use Workbox from its official CDN URL.

This method is exposed for the benefit of developers using `injectManifest()` who would prefer not to use the CDN copies of Workbox. Developers using `generateSW()` don't need to explicitly use this task.

The options for this task are documented in the [Workbox Reference Docs](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build). Please read their documentation carefully. 

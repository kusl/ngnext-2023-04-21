Thu May 11 07:36:39 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.3Gi       2.2Gi       862Mi        11Gi        12Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
1.2G	.
```
```bash
yarn run v1.22.19
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 16.0.0
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.1
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.0
@angular-devkit/build-angular   16.0.0
@angular-devkit/core            16.0.0
@angular-devkit/schematics      16.0.0
@angular/cdk                    16.0.0
@angular/cli                    16.0.0
@angular/material               16.0.0
@schematics/angular             16.0.0
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.60s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001486
Installed version:  1.0.30001486
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001486
Installed version:  1.0.30001486
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.1/angular-webpack/3741724f385cfa1d7de602792f7cd89d28652b10.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.1/angular-webpack/3741724f385cfa1d7de602792f7cd89d28652b10/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1928.017155 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 337 KiB {179} [emitted] (name: main)
asset styles.css 106 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 338 KiB = runtime.js 912 bytes main.js 337 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 107 KiB = runtime.js 912 bytes styles.css 106 KiB
chunk {179} (runtime: runtime) main.js (main) 2.56 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [564] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [670] 2.53 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1045 ms (resolving: 316 ms, restoring: 0 ms, integration: 0 ms, building: 729 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1060 ms (resolving: 31 ms, restoring: 0 ms, integration: 0 ms, building: 1029 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1061 ms (resolving: 113 ms, restoring: 0 ms, integration: 0 ms, building: 948 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.439029 ms
<t> runtime requirements.chunks: 0.447081 ms
<t> runtime requirements.entries: 1.58225 ms
<t> runtime requirements.modules: 0.104089 ms
<t> runtime requirements.chunks: 0.032304 ms
<t> runtime requirements.entries: 0.13039 ms
<t> finish module profiles: 6.991966 ms
<t> compute affected modules: 0.004429 ms
<t> finish modules: 18.138665 ms
<t> report dependency errors and warnings: 4.345518 ms
<t> optimize dependencies: 10.258427 ms
<t> create chunks: 3.69237 ms
<t> compute affected modules with chunk graph: 0.002887 ms
<t> optimize: 27.560218 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 7.599968 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 456.814317 ms
<t> runtime requirements.modules: 0.258499 ms
<t> runtime requirements.chunks: 0.078546 ms
<t> runtime requirements.entries: 0.451525 ms
<t> runtime requirements: 0.974482 ms
<t> hashing: initialize hash: 0.007603 ms
<t> hashing: sort chunks: 0.049658 ms
<t> hashing: hash runtime modules: 0.997415 ms
<t> hashing: hash chunks: 1.191847 ms
<t> hashing: hash digest: 0.014573 ms
<t> hashing: process full hash modules: 0.218727 ms
<t> hashing: 2.573603 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.058403 ms
<t> module assets: 0.167223 ms
<t> create chunk assets: 2.902928 ms
<t> process assets: 8254.099715 ms

LOG from webpack.Compiler
<t> make hook: 5864.806782 ms
<t> finish make hook: 0.116428 ms
<t> finish compilation: 29.541527 ms
<t> seal compilation: 8768.73741 ms
<t> afterCompile hook: 0.141273 ms
<t> emitAssets: 4.361321 ms
<t> emitRecords: 0.077359 ms
<t> done hook: 155.49764 ms
<t> beginIdle: 0.360205 ms

LOG from webpack.Compilation.ModuleProfile
     | 57 ms (parallelism 5.6) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 56 ms (parallelism 5.6) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 75 ms (parallelism 5.5) resolve to new modules > ./src/main.ts
     | 131 ms (parallelism 2.5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 115 ms (parallelism 8.9) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 129 ms (parallelism 8.8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 174 ms (parallelism 9.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    1161 ms resolve to new modules
     | 174 ms (parallelism 9.6) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    206 ms resolve to existing modules
     |  | 188 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 188 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 33 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 33 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 172 ms (parallelism 5.5) build modules > ./src/styles.scss?ngGlobalStyle
     | 172 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 67 ms (parallelism 5.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 67 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 133 ms (parallelism 5.4) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 146 ms (parallelism 8.7) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 185 ms (parallelism 8.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 143 ms (parallelism 8.7) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 145 ms (parallelism 8.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 146 ms (parallelism 8.7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 50 ms (parallelism 11.3) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 83 ms (parallelism 12) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 81 ms (parallelism 10.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 74 ms (parallelism 10.4) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 76 ms (parallelism 10.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 71 ms (parallelism 10.4) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 83 ms (parallelism 10.2) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 82 ms (parallelism 13.3) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 88 ms (parallelism 13) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 1647 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 140 ms (parallelism 5.2) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 82 ms (parallelism 13.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 81 ms (parallelism 13.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1371 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 217 ms (parallelism 4.4) build modules > ./src/main.ts
     |  | 48 ms (parallelism 11.4) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 304 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 3789 ms build modules
+ 19 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (562 real resolves with 0 cached but invalid, 1260 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.027307 ms
<t> figure out provided exports: 12.011009 ms
    95% of exports of modules have been determined (15 no declared exports, 258 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.658997 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.355241 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.194428 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.524992 ms
<t> trace exports usage in graph: 5.100549 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.764605 ms
<t> visitModules: visiting: 2.660191 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.740611 ms
<t> connectChunkGroups: 0.003439 ms
<t> cleanup: 0.001333 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.036974 ms
<t> modules: 2.598963 ms
<t> queue: 0.006823 ms
<t> maxSize: 0.047627 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.126303 ms
<t> sort relevant modules: 0.140449 ms
<t> find modules to concatenate: 5.741004 ms
<t> sort concat configurations: 0.037949 ms
<t> create concatenated modules: 5.237958 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 274.284255 ms
<t> optimize asset: polyfills.js: 691.698064 ms
<t> optimize asset: main.js: 7488.933755 ms
<t> optimize js assets: 7565.935865 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 19.993433 ms
<t> optimize css assets: 27.550495 ms

LOG from webpack.FileSystemInfo
    823 new snapshots created
    0% root snapshot uncached (0 / 1260)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4070) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 59% (221/374) entries shared via 10 shared snapshots (29 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 18% (213/1194) entries shared via 10 shared snapshots (38 times referenced)
    Managed files snapshot optimization: 79% (3336/4203) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3891/4498) entries shared via 194 shared snapshots (776 times referenced)

2023-05-11 07:37:27: webpack 5.80.0 compiled in 16573 ms (80c7c316aacbb514)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 661.399357 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 33.454615 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1133 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.067753 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.883334 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.165078 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 2.980112 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.158984 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.401159 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.638897 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.06792 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/keycodes.mjs': 1.113958 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/merge.js': 1.577949 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduler|request=|./intervalProvider': 2.434632 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 10.041372 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.240979 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 226.215453 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.16 kB |                84.68 kB
styles.css          | styles        | 105.84 kB |                 9.52 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.90 kB |               105.39 kB

Build at: 2023-05-11T11:37:29.147Z - Hash: 80c7c316aacbb514 - Time: 18493ms
Done in 20.52s.
```
Thu May 11 07:37:47 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.28
info New version: 0.0.29
Done in 0.13s.

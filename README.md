Fri May 26 06:23:49 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.9Gi       1.9Gi       722Mi       9.4Gi        10Gi
Swap:          8.0Gi       9.0Mi       8.0Gi
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
    

Angular CLI: 16.0.2
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.3
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.2
@angular-devkit/build-angular   16.0.2
@angular-devkit/core            16.0.2
@angular-devkit/schematics      16.0.2
@angular/cdk                    16.0.1
@angular/cli                    16.0.2
@angular/material               16.0.1
@schematics/angular             16.0.2
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.55s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001489
Installed version:  1.0.30001489
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001489
Installed version:  1.0.30001489
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.3/angular-webpack/53029f61c9b37c733f43bfd58121edd2b643270d.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.3/angular-webpack/53029f61c9b37c733f43bfd58121edd2b643270d/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1851.368485 ms
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
chunk {179} (runtime: runtime) main.js (main) 2.57 MiB [initial] [rendered]
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
    916 ms (resolving: 143 ms, restoring: 0 ms, integration: 0 ms, building: 773 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1020 ms (resolving: 31 ms, restoring: 0 ms, integration: 0 ms, building: 989 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1021 ms (resolving: 109 ms, restoring: 0 ms, integration: 0 ms, building: 912 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.415519 ms
<t> runtime requirements.chunks: 0.438359 ms
<t> runtime requirements.entries: 1.545171 ms
<t> runtime requirements.modules: 0.026638 ms
<t> runtime requirements.chunks: 0.015124 ms
<t> runtime requirements.entries: 0.12626 ms
<t> finish module profiles: 7.319525 ms
<t> compute affected modules: 0.006951 ms
<t> finish modules: 17.946301 ms
<t> report dependency errors and warnings: 4.101263 ms
<t> optimize dependencies: 9.928682 ms
<t> create chunks: 3.299067 ms
<t> compute affected modules with chunk graph: 0.00289 ms
<t> optimize: 24.532854 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.103185 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 514.870645 ms
<t> runtime requirements.modules: 0.256619 ms
<t> runtime requirements.chunks: 0.129424 ms
<t> runtime requirements.entries: 0.52172 ms
<t> runtime requirements: 1.308056 ms
<t> hashing: initialize hash: 0.008499 ms
<t> hashing: sort chunks: 0.04988 ms
<t> hashing: hash runtime modules: 1.021167 ms
<t> hashing: hash chunks: 1.240011 ms
<t> hashing: hash digest: 0.038294 ms
<t> hashing: process full hash modules: 0.259554 ms
<t> hashing: 2.727324 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.06479 ms
<t> module assets: 0.1906 ms
<t> create chunk assets: 3.291294 ms
<t> process assets: 8090.161653 ms

LOG from webpack.Compiler
<t> make hook: 5864.212658 ms
<t> finish make hook: 0.112612 ms
<t> finish compilation: 29.407451 ms
<t> seal compilation: 8662.80473 ms
<t> afterCompile hook: 0.202388 ms
<t> emitAssets: 5.311842 ms
<t> emitRecords: 0.080518 ms
<t> done hook: 180.850627 ms
<t> beginIdle: 0.380998 ms

LOG from webpack.Compilation.ModuleProfile
     | 64 ms (parallelism 6.1) resolve to new modules > ./src/main.ts
     | 53 ms (parallelism 3.5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 131 ms (parallelism 8.2) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 147 ms (parallelism 11.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 56 ms (parallelism 14.1) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1015 ms resolve to new modules
     | 135 ms (parallelism 11.8) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    170 ms resolve to existing modules
     |  | 174 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 174 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 41 ms (parallelism 6.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 41 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 159 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
     | 159 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 133 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 106 ms (parallelism 2.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 158 ms (parallelism 8.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 145 ms (parallelism 10.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 154 ms (parallelism 8.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 156 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 157 ms (parallelism 8.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 48 ms (parallelism 15.9) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 51 ms (parallelism 12.6) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 90 ms (parallelism 11.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 94 ms (parallelism 11.2) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 91 ms (parallelism 11.1) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 91 ms (parallelism 11) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 92 ms (parallelism 11.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 94 ms (parallelism 11.5) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 94 ms (parallelism 12) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 1778 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 134 ms (parallelism 5.7) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 85 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 85 ms (parallelism 12.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1499 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 68 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 68 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 216 ms (parallelism 4.3) build modules > ./src/main.ts
<i>  | 275 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4002 ms build modules
+ 21 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (562 real resolves with 0 cached but invalid, 1254 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.052333 ms
<t> figure out provided exports: 11.447463 ms
    95% of exports of modules have been determined (15 no declared exports, 258 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.668088 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.139117 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.959301 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.49865 ms
<t> trace exports usage in graph: 5.045563 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.573611 ms
<t> visitModules: visiting: 2.277756 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.356845 ms
<t> connectChunkGroups: 0.003195 ms
<t> cleanup: 0.001319 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.043275 ms
<t> modules: 2.462909 ms
<t> queue: 0.004838 ms
<t> maxSize: 0.036115 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.117314 ms
<t> sort relevant modules: 0.142925 ms
<t> find modules to concatenate: 5.874864 ms
<t> sort concat configurations: 0.046671 ms
<t> create concatenated modules: 5.449243 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 239.352885 ms
<t> optimize asset: polyfills.js: 693.4495 ms
<t> optimize asset: main.js: 7297.265557 ms
<t> optimize js assets: 7380.086213 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 16.716762 ms
<t> optimize css assets: 22.532719 ms

LOG from webpack.FileSystemInfo
    823 new snapshots created
    0% root snapshot uncached (0 / 1254)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4070) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 54% (201/374) entries shared via 9 shared snapshots (28 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 18% (220/1194) entries shared via 10 shared snapshots (39 times referenced)
    Managed files snapshot optimization: 79% (3336/4203) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3897/4498) entries shared via 195 shared snapshots (776 times referenced)

2023-05-26 06:24:43: webpack 5.80.0 compiled in 16391 ms (82154d871cf13960)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 697.605417 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 35.436025 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1133 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.111802 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.665234 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.144493 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.500751 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.11316 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 5.56223 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.16661 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.994063 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.070267 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.161804 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/platform.mjs': 1.20802 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/firstValueFrom.js': 1.43625 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/tap': 1.541174 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduler|request=|./intervalProvider': 2.263322 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 10.696192 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.34978 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 243.598939 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.19 kB |                84.76 kB
styles.css          | styles        | 105.81 kB |                 9.54 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.89 kB |               105.49 kB

Build at: 2023-05-26T10:24:45.949Z - Hash: 82154d871cf13960 - Time: 18676ms
Done in 20.73s.
```
Fri May 26 06:25:03 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.47
info New version: 0.0.48
Done in 0.12s.

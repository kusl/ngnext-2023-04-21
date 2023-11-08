Wed Nov  8 04:44:43 PM EST 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.7Gi       1.4Gi       328Mi       9.2Gi       9.9Gi
Swap:          8.0Gi       750Mi       7.3Gi
System Storage
833M	.
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
    

Angular CLI: 17.0.0
Node: 20.9.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 17.0.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.0
@angular-devkit/build-angular   17.0.0
@angular-devkit/core            17.0.0
@angular-devkit/schematics      17.0.0
@schematics/angular             17.0.0
rxjs                            7.8.0
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.55s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
```bash
Latest version:     1.0.30001561
Installed version:  1.0.30001561
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.0/angular-webpack/5b35ef2d3c704dc7c6826e76959377bc42ad3a9e.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/17.0.0/angular-webpack/5b35ef2d3c704dc7c6826e76959377bc42ad3a9e/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1841.208518 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 342 KiB {179} [emitted] (name: main)
asset styles.css 83.3 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 343 KiB = runtime.js 912 bytes main.js 342 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 84.2 KiB = runtime.js 912 bytes styles.css 83.3 KiB
chunk {179} (runtime: runtime) main.js (main) 2.79 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 29.8 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 115 modules [607] 2.76 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1100 ms (resolving: 32 ms, restoring: 1 ms, integration: 0 ms, building: 1067 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 85.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 85.4 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1293 ms (resolving: 28 ms, restoring: 0 ms, integration: 0 ms, building: 1265 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1215 ms (resolving: 29 ms, restoring: 1 ms, integration: 0 ms, building: 1185 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.388428 ms
<t> runtime requirements.chunks: 0.442543 ms
<t> runtime requirements.entries: 1.447868 ms
<t> runtime requirements.modules: 0.02502 ms
<t> runtime requirements.chunks: 0.014631 ms
<t> runtime requirements.entries: 0.157816 ms
<t> finish module profiles: 6.107579 ms
<t> compute affected modules: 0.006549 ms
<t> finish modules: 15.833341 ms
<t> report dependency errors and warnings: 7.120861 ms
<t> optimize dependencies: 10.211101 ms
<t> create chunks: 3.106675 ms
<t> compute affected modules with chunk graph: 0.003866 ms
<t> optimize: 23.47362 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 9.256623 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 464.75002 ms
<t> runtime requirements.modules: 0.25859 ms
<t> runtime requirements.chunks: 0.081034 ms
<t> runtime requirements.entries: 0.566087 ms
<t> runtime requirements: 1.114426 ms
<t> hashing: initialize hash: 0.008232 ms
<t> hashing: sort chunks: 0.051369 ms
<t> hashing: hash runtime modules: 1.08287 ms
<t> hashing: hash chunks: 1.183178 ms
<t> hashing: hash digest: 0.015776 ms
<t> hashing: process full hash modules: 0.21053 ms
<t> hashing: 2.652943 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.066948 ms
<t> module assets: 0.16206 ms
<t> create chunk assets: 2.919084 ms
<t> process assets: 4154.907626 ms

LOG from webpack.Compiler
<t> make hook: 4715.741174 ms
<t> finish make hook: 0.109449 ms
<t> finish compilation: 29.12715 ms
<t> seal compilation: 4674.523835 ms
<t> afterCompile hook: 0.12128 ms
<t> emitAssets: 4.552028 ms
<t> emitRecords: 0.071207 ms
<t> done hook: 110.860069 ms
<t> beginIdle: 0.367585 ms

LOG from webpack.Compilation.ModuleProfile
     | 65 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
    437 ms resolve to new modules
<i>  |  | 226 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 226 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 202 ms (parallelism 5.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 202 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 192 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 149 ms (parallelism 1.7) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i>  |  | 214 ms (parallelism 7.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 213 ms (parallelism 7.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 196 ms (parallelism 9.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 211 ms (parallelism 7.4) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
<i>  |  | 212 ms (parallelism 7.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 209 ms (parallelism 7.8) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
<i>  |  | 209 ms (parallelism 8.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 76 ms (parallelism 8.8) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 46 ms (parallelism 9) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 79 ms (parallelism 8.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 54 ms (parallelism 13.6) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 77 ms (parallelism 8.7) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 42 ms (parallelism 18.4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2188 ms build modules > 23 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 176 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 79 ms (parallelism 8.7) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 41 ms (parallelism 19) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 471 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 234 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 73 ms (parallelism 12.6) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 318 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 160 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 160 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 3592 ms build modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (564 real resolves with 0 cached but invalid, 1267 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.128288 ms
<t> figure out provided exports: 9.159689 ms
    95% of exports of modules have been determined (15 no declared exports, 260 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.652525 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.190887 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.01983 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.506255 ms
<t> trace exports usage in graph: 5.240874 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.582864 ms
<t> visitModules: visiting: 2.250012 ms
    267 queue items processed (123 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.300776 ms
<t> connectChunkGroups: 0.003061 ms
<t> cleanup: 0.001246 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.044196 ms
<t> modules: 2.201479 ms
<t> queue: 0.004298 ms
<t> maxSize: 0.032581 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.955643 ms
<t> sort relevant modules: 0.125625 ms
<t> find modules to concatenate: 5.07623 ms
<t> sort concat configurations: 0.040053 ms
<t> create concatenated modules: 5.694839 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 171.542333 ms
<t> optimize asset: polyfills.js: 622.81177 ms
<t> optimize asset: main.js: 3418.83754 ms
<t> optimize js assets: 3478.928949 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.319471 ms
<t> optimize css assets: 11.873626 ms

LOG from webpack.FileSystemInfo
    827 new snapshots created
    0% root snapshot uncached (0 / 1267)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 130 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3439/4090) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (214/389) entries shared via 11 shared snapshots (28 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 21% (255/1205) entries shared via 18 shared snapshots (44 times referenced)
    Managed files snapshot optimization: 79% (3328/4224) entries shared via 182 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3908/4502) entries shared via 193 shared snapshots (781 times referenced)

2023-11-08 16:45:25: webpack 5.89.0 compiled in 11247 ms (4c15fa58af22b5a1)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1278.42576 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 59.509379 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1138 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.440279 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 4.260754 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.010882 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.196198 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.573439 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.123435 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.269715 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.12896 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/retryWhen.js': 1.561857 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/windowToggle': 1.81417 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|6fbab3001b309b4f|runtime': 10.649968 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.020468 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 210.222288 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1138 items, 1 files, 41 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 341.79 kB |                86.08 kB
styles.css          | styles        |  83.31 kB |                 8.13 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 458.96 kB |               105.36 kB

Build at: 2023-11-08T21:45:28.188Z - Hash: 4c15fa58af22b5a1 - Time: 13765ms
Done in 15.48s.
```

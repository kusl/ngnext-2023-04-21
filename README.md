Thu May  4 04:46:08 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       6.3Gi       1.8Gi       1.0Gi       7.2Gi       7.6Gi
Swap:          8.0Gi       4.8Gi       3.2Gi
System Storage
1.3G	.
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
    

Angular CLI: 16.0.0-rc.1
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.0-rc.2
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.0-rc.1
@angular-devkit/build-angular   16.0.0-rc.1
@angular-devkit/core            16.0.0-rc.1
@angular-devkit/schematics      16.0.0-rc.1
@angular/cdk                    16.0.0-rc.1
@angular/cli                    16.0.0-rc.1
@angular/material               16.0.0-rc.1
@schematics/angular             16.0.0-rc.1
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.65s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001482
Installed version:  1.0.30001481
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "@types/node@*".
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "ts-node@>=10".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "@types/node@*".
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "ts-node@>=10".
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001482
Installed version:  1.0.30001482
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.0/angular-webpack/eb5a6403dd03b3fce76037d1ce502c5d1f8ba913.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.0/angular-webpack/eb5a6403dd03b3fce76037d1ce502c5d1f8ba913/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2506.409036 ms
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
  ./src/main.ts + 114 modules [670] 2.52 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1193 ms (resolving: 181 ms, restoring: 0 ms, integration: 0 ms, building: 1012 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1350 ms (resolving: 41 ms, restoring: 0 ms, integration: 0 ms, building: 1309 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1352 ms (resolving: 134 ms, restoring: 0 ms, integration: 0 ms, building: 1218 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.729545 ms
<t> runtime requirements.chunks: 0.744069 ms
<t> runtime requirements.entries: 2.770252 ms
<t> runtime requirements.modules: 0.048119 ms
<t> runtime requirements.chunks: 0.028208 ms
<t> runtime requirements.entries: 0.228339 ms
<t> finish module profiles: 15.722184 ms
<t> compute affected modules: 0.006099 ms
<t> finish modules: 21.583573 ms
<t> report dependency errors and warnings: 4.683486 ms
<t> optimize dependencies: 12.117809 ms
<t> create chunks: 3.554763 ms
<t> compute affected modules with chunk graph: 0.002931 ms
<t> optimize: 29.250923 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 11.710142 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 733.663006 ms
<t> runtime requirements.modules: 0.269161 ms
<t> runtime requirements.chunks: 0.084187 ms
<t> runtime requirements.entries: 0.506309 ms
<t> runtime requirements: 1.269512 ms
<t> hashing: initialize hash: 0.007794 ms
<t> hashing: sort chunks: 0.058072 ms
<t> hashing: hash runtime modules: 1.179412 ms
<t> hashing: hash chunks: 1.311389 ms
<t> hashing: hash digest: 0.030948 ms
<t> hashing: process full hash modules: 0.285735 ms
<t> hashing: 3.001822 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.09546 ms
<t> module assets: 0.218578 ms
<t> create chunk assets: 3.526679 ms
<t> process assets: 9107.059842 ms

LOG from webpack.Compiler
<t> make hook: 7349.261736 ms
<t> finish make hook: 0.148429 ms
<t> finish compilation: 42.059388 ms
<t> seal compilation: 9908.13129 ms
<t> afterCompile hook: 0.197191 ms
<t> emitAssets: 5.440489 ms
<t> emitRecords: 0.095507 ms
<t> done hook: 174.535867 ms
<t> beginIdle: 0.454276 ms

LOG from webpack.Compilation.ModuleProfile
     | 36 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 35 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 90 ms (parallelism 6.2) resolve to new modules > ./src/main.ts
     | 131 ms (parallelism 2.2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 35 ms (parallelism 8.2) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 212 ms (parallelism 9.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 37 ms (parallelism 17.2) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 37 ms (parallelism 17.2) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 37 ms (parallelism 17.2) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     | 41 ms (parallelism 16.7) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     | 41 ms (parallelism 16.7) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 46 ms (parallelism 19.6) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
<i> 1288 ms resolve to new modules
     | 71 ms (parallelism 14) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    99 ms resolve to existing modules
<i>  |  | 220 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 220 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 62 ms (parallelism 6.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 62 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 202 ms (parallelism 6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 202 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 186 ms (parallelism 6.1) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  |  | 230 ms (parallelism 6.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 222 ms (parallelism 8.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 232 ms (parallelism 6.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
<i>  |  | 229 ms (parallelism 6.7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
<i>  |  | 230 ms (parallelism 6.6) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 51 ms (parallelism 15.5) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 78 ms (parallelism 12.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 120 ms (parallelism 11) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 119 ms (parallelism 10.6) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 114 ms (parallelism 10.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 113 ms (parallelism 10.8) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 113 ms (parallelism 10.8) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 120 ms (parallelism 11.1) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 121 ms (parallelism 11.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2329 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 165 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 122 ms (parallelism 11.7) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 122 ms (parallelism 11.7) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1842 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 142 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 142 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 223 ms (parallelism 4.8) build modules > ./src/main.ts
     |  | 37 ms (parallelism 17.2) build modules > ./src/app/name-editor/name-editor.component.ts
<i>  | 314 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 5119 ms build modules
+ 17 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (562 real resolves with 0 cached but invalid, 1215 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.506912 ms
<t> figure out provided exports: 13.925111 ms
    95% of exports of modules have been determined (15 no declared exports, 258 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.776493 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.548541 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.486949 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.545446 ms
<t> trace exports usage in graph: 6.466041 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.695394 ms
<t> visitModules: visiting: 2.488179 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.569983 ms
<t> connectChunkGroups: 0.002903 ms
<t> cleanup: 0.001214 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.040408 ms
<t> modules: 2.779498 ms
<t> queue: 0.005494 ms
<t> maxSize: 0.043478 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.224826 ms
<t> sort relevant modules: 0.174847 ms
<t> find modules to concatenate: 6.726749 ms
<t> sort concat configurations: 0.048252 ms
<t> create concatenated modules: 7.262559 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 331.037826 ms
<t> optimize asset: polyfills.js: 1023.391398 ms
<t> optimize asset: main.js: 8198.080786 ms
<t> optimize js assets: 8288.636337 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 16.327952 ms
<t> optimize css assets: 18.805603 ms

LOG from webpack.FileSystemInfo
    823 new snapshots created
    0% root snapshot uncached (0 / 1215)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4070) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 62% (231/374) entries shared via 11 shared snapshots (30 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 19% (231/1194) entries shared via 11 shared snapshots (39 times referenced)
    Managed files snapshot optimization: 79% (3336/4203) entries shared via 184 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 90% (4030/4498) entries shared via 197 shared snapshots (776 times referenced)

2023-05-04 04:47:26: webpack 5.80.0 compiled in 19785 ms (2bebe8a34b15d8b6)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 954.706992 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 42.2907 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1133 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.133919 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 2.909177 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.230627 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 2.021243 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.339457 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 4.536428 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.526791 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 4.684291 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.148921 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.307307 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/keycodes.mjs': 1.603991 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/operators/combineLatestWith.js': 1.551444 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/util/NotFoundError.js': 2.329453 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduled|request=|../symbol/iterator': 2.592019 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 11.722052 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.255041 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 318.625937 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.32 kB |                84.77 kB
styles.css          | styles        | 105.84 kB |                 9.52 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 477.05 kB |               105.48 kB

Build at: 2023-05-04T08:47:29.138Z - Hash: 2bebe8a34b15d8b6 - Time: 22178ms
Done in 24.76s.
```
Thu May  4 04:47:51 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.15
info New version: 0.0.16
Done in 0.16s.

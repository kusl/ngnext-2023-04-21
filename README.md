Tue Jun  6 06:38:21 AM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.5Gi       2.7Gi       582Mi       9.0Gi        10Gi
Swap:          8.0Gi       174Mi       7.8Gi
System Storage
692M	.
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
    

Angular CLI: 16.0.4
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.4
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.4
@angular-devkit/build-angular   16.0.4
@angular-devkit/core            16.0.4
@angular-devkit/schematics      16.0.4
@angular/cdk                    16.0.3
@angular/material               16.0.3
@schematics/angular             16.0.4
rxjs                            7.8.0
typescript                      5.0.4
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001495
Installed version:  1.0.30001494
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
Latest version:     1.0.30001495
Installed version:  1.0.30001495
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.4/angular-webpack/075384f5c90ebfa62494135e8210b7fc4365cb9a.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.0.4/angular-webpack/075384f5c90ebfa62494135e8210b7fc4365cb9a/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1877.103713 ms
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
    989 ms (resolving: 160 ms, restoring: 0 ms, integration: 0 ms, building: 829 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 115 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 115 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [262] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1092 ms (resolving: 31 ms, restoring: 0 ms, integration: 0 ms, building: 1061 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1091 ms (resolving: 121 ms, restoring: 1 ms, integration: 0 ms, building: 969 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.402189 ms
<t> runtime requirements.chunks: 0.412434 ms
<t> runtime requirements.entries: 1.496338 ms
<t> runtime requirements.modules: 0.070956 ms
<t> runtime requirements.chunks: 0.016011 ms
<t> runtime requirements.entries: 0.135345 ms
<t> finish module profiles: 7.011544 ms
<t> compute affected modules: 0.004896 ms
<t> finish modules: 18.389209 ms
<t> report dependency errors and warnings: 4.329113 ms
<t> optimize dependencies: 10.118136 ms
<t> create chunks: 3.408623 ms
<t> compute affected modules with chunk graph: 0.002451 ms
<t> optimize: 24.836971 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 11.031162 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 572.617618 ms
<t> runtime requirements.modules: 0.260814 ms
<t> runtime requirements.chunks: 0.082373 ms
<t> runtime requirements.entries: 0.476605 ms
<t> runtime requirements: 1.21614 ms
<t> hashing: initialize hash: 0.008968 ms
<t> hashing: sort chunks: 0.059775 ms
<t> hashing: hash runtime modules: 1.048339 ms
<t> hashing: hash chunks: 1.216015 ms
<t> hashing: hash digest: 0.017297 ms
<t> hashing: process full hash modules: 0.236709 ms
<t> hashing: 2.710222 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.065578 ms
<t> module assets: 0.183028 ms
<t> create chunk assets: 3.00951 ms
<t> process assets: 7906.450084 ms

LOG from webpack.Compiler
<t> make hook: 5771.095535 ms
<t> finish make hook: 0.109562 ms
<t> finish compilation: 29.768123 ms
<t> seal compilation: 8537.450377 ms
<t> afterCompile hook: 0.100859 ms
<t> emitAssets: 3.95952 ms
<t> emitRecords: 0.062161 ms
<t> done hook: 150.34006 ms
<t> beginIdle: 0.367579 ms

LOG from webpack.Compilation.ModuleProfile
     | 32 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 31 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 78 ms (parallelism 6.2) resolve to new modules > ./src/main.ts
     | 103 ms (parallelism 2.9) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 130 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 126 ms (parallelism 12.7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    1019 ms resolve to new modules
     | 126 ms (parallelism 12.7) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    169 ms resolve to existing modules
     |  | 191 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 191 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 173 ms (parallelism 5.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 173 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 46 ms (parallelism 6.7) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
     | 46 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 56 ms (parallelism 6.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 56 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 149 ms (parallelism 5.7) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 157 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 142 ms (parallelism 10.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 152 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 151 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 149 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 76 ms (parallelism 13.1) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 81 ms (parallelism 10.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 72 ms (parallelism 10.1) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 74 ms (parallelism 10.1) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 77 ms (parallelism 10.2) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 73 ms (parallelism 10.1) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 85 ms (parallelism 12.9) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 90 ms (parallelism 12.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 1596 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 148 ms (parallelism 5.6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 81 ms (parallelism 12.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 80 ms (parallelism 12.9) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1374 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 191 ms (parallelism 4.3) build modules > ./src/main.ts
     | 275 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 3719 ms build modules
+ 20 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (562 real resolves with 0 cached but invalid, 1261 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.326857 ms
<t> figure out provided exports: 11.525729 ms
    95% of exports of modules have been determined (15 no declared exports, 258 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.733162 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.862778 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.095379 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.461398 ms
<t> trace exports usage in graph: 5.090477 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.617319 ms
<t> visitModules: visiting: 2.427478 ms
    269 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.508715 ms
<t> connectChunkGroups: 0.003265 ms
<t> cleanup: 0.001204 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035487 ms
<t> modules: 2.50143 ms
<t> queue: 0.004819 ms
<t> maxSize: 0.035518 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.112222 ms
<t> sort relevant modules: 0.145535 ms
<t> find modules to concatenate: 5.89979 ms
<t> sort concat configurations: 0.04336 ms
<t> create concatenated modules: 5.653119 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 227.436948 ms
<t> optimize asset: polyfills.js: 630.076035 ms
<t> optimize asset: main.js: 7152.784446 ms
<t> optimize js assets: 7230.67182 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 19.012101 ms
<t> optimize css assets: 23.980206 ms

LOG from webpack.FileSystemInfo
    823 new snapshots created
    0% root snapshot uncached (0 / 1261)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 124 timestamps 22 hashes 22 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3433/4070) entries shared via 3 shared snapshots (560 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (207/374) entries shared via 9 shared snapshots (27 times referenced)
    Managed items info in cache: 77 items
    Managed items snapshot optimization: 19% (231/1194) entries shared via 12 shared snapshots (40 times referenced)
    Managed files snapshot optimization: 79% (3334/4203) entries shared via 183 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 87% (3891/4498) entries shared via 194 shared snapshots (776 times referenced)

2023-06-06 06:39:00: webpack 5.80.0 compiled in 16199 ms (1f6eccb9e4e52632)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 685.08146 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 35.459565 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1133 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.157705 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 1.888788 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.042863 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.122525 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 1.212921 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 3.385085 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 1.72544 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.075973 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/cdk/fesm2022/keycodes.mjs': 1.183502 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/switchScan': 1.413728 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/scheduler|request=|./immediateProvider': 2.30737 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|292fab71983e1e33|runtime': 10.4089 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.306964 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 224.282259 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1133 items, 1 files, 38 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.07 kB |                84.74 kB
styles.css          | styles        | 105.81 kB |                 9.54 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 476.78 kB |               105.46 kB

Build at: 2023-06-06T10:39:02.694Z - Hash: 1f6eccb9e4e52632 - Time: 18160ms
Done in 20.02s.
```

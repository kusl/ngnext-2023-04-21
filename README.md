Sun Aug 13 09:29:27 PM EDT 2023

# Angular 16?


This project is live at [https://kusl.github.io/ngnext-2023-04-21/](https://kusl.github.io/ngnext-2023-04-21/ "next!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.8Gi       3.4Gi       524Mi       8.1Gi        10Gi
Swap:          8.0Gi        59Mi       7.9Gi
System Storage
798M	.
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
    

Angular CLI: 16.2.0
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.0
@angular-devkit/build-angular   16.2.0
@angular-devkit/core            16.2.0
@angular-devkit/schematics      16.2.0
@schematics/angular             16.2.0
rxjs                            7.8.0
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.41s.
```
Latest version:     1.0.30001520
Installed version:  1.0.30001519
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001520
Installed version:  1.0.30001520
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --base-href https://kusl.github.io/ngnext-2023-04-21/ --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.0/angular-webpack/ae918b2961f5ab3a159e1f63f56c21683a0cc343.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/ngnext-2023-04-21/.angular/cache/16.2.0/angular-webpack/ae918b2961f5ab3a159e1f63f56c21683a0cc343/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2039.25318 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|@angular/localize/init
asset main.js 338 KiB {179} [emitted] (name: main)
asset styles.css 82.2 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.8 KiB [emitted]
asset runtime.js 912 bytes {666} [emitted] (name: runtime)
Entrypoint main 339 KiB = runtime.js 912 bytes main.js 338 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 912 bytes polyfills.js 33 KiB
Entrypoint styles 83.1 KiB = runtime.js 912 bytes styles.css 82.2 KiB
chunk {179} (runtime: runtime) main.js (main) 2.63 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 114 modules [368] 2.59 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1000 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 960 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 84.2 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.2 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle [554] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle styles
    1245 ms (resolving: 35 ms, restoring: 0 ms, integration: 0 ms, building: 1210 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/ngnext-2023-04-21/src/styles.scss?ngGlobalStyle styles
    1163 ms (resolving: 36 ms, restoring: 1 ms, integration: 0 ms, building: 1126 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.49 KiB [entry] [rendered]
  runtime modules 2.49 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.443435 ms
<t> runtime requirements.chunks: 0.399746 ms
<t> runtime requirements.entries: 1.565004 ms
<t> runtime requirements.modules: 0.026327 ms
<t> runtime requirements.chunks: 0.015409 ms
<t> runtime requirements.entries: 0.124316 ms
<t> finish module profiles: 10.57394 ms
<t> compute affected modules: 0.230821 ms
<t> finish modules: 21.19481 ms
<t> report dependency errors and warnings: 4.511407 ms
<t> optimize dependencies: 12.053582 ms
<t> create chunks: 5.132323 ms
<t> compute affected modules with chunk graph: 0.109599 ms
<t> optimize: 27.53151 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.826948 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 572.681158 ms
<t> runtime requirements.modules: 0.231013 ms
<t> runtime requirements.chunks: 0.346752 ms
<t> runtime requirements.entries: 1.074331 ms
<t> runtime requirements: 2.438155 ms
<t> hashing: initialize hash: 0.009159 ms
<t> hashing: sort chunks: 0.099613 ms
<t> hashing: hash runtime modules: 1.526756 ms
<t> hashing: hash chunks: 2.086506 ms
<t> hashing: hash digest: 0.040161 ms
<t> hashing: process full hash modules: 0.154726 ms
<t> hashing: 4.467794 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.060888 ms
<t> module assets: 0.278844 ms
<t> create chunk assets: 5.257919 ms
<t> process assets: 4358.471118 ms

LOG from webpack.Compiler
<t> make hook: 6384.672162 ms
<t> finish make hook: 0.199468 ms
<t> finish compilation: 36.940248 ms
<t> seal compilation: 5002.370193 ms
<t> afterCompile hook: 0.246342 ms
<t> emitAssets: 4.000581 ms
<t> emitRecords: 0.062253 ms
<t> done hook: 149.489188 ms
<t> beginIdle: 0.816661 ms

LOG from webpack.Compilation.ModuleProfile
     | 69 ms (parallelism 3.3) resolve to new modules > ./src/main.ts
     | 41 ms (parallelism 3.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 155 ms (parallelism 8) resolve to new modules > ./src/app/name-editor/name-editor.component.ts
     | 156 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 37 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/bidi.mjs
     | 37 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/platform.mjs
     | 37 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/keycodes.mjs
     | 50 ms (parallelism 19.5) resolve to new modules > ./node_modules/@angular/cdk/fesm2022/cdk.mjs
    1063 ms resolve to new modules
     | 156 ms (parallelism 11.2) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    186 ms resolve to existing modules
<i>  |  | 223 ms (parallelism 5.4) build modules > ./node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle
<i>  | 223 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 199 ms (parallelism 5.7) build modules > ./src/styles.scss?ngGlobalStyle
     | 199 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 161 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 43 ms (parallelism 1.8) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 175 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 159 ms (parallelism 10) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 170 ms (parallelism 8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 169 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 167 ms (parallelism 8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 60 ms (parallelism 12.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 97 ms (parallelism 13.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 83 ms (parallelism 11.5) build modules > ./node_modules/@angular/cdk/fesm2022/coercion.mjs
     |  | 87 ms (parallelism 11.4) build modules > ./node_modules/@angular/cdk/fesm2022/a11y.mjs
     |  | 85 ms (parallelism 11.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 88 ms (parallelism 11.7) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 98 ms (parallelism 13.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
     |  | 101 ms (parallelism 13.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 1826 ms build modules > 22 x javascript/esm with javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 160 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 91 ms (parallelism 14.1) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 92 ms (parallelism 14.1) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1537 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 238 ms (parallelism 5.1) build modules > ./src/main.ts
<i>  | 297 ms build modules > 5 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 141 ms (parallelism 6.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 141 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 4249 ms build modules
+ 21 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (563 real resolves with 0 cached but invalid, 1211 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.537843 ms
<t> figure out provided exports: 10.194868 ms
    95% of exports of modules have been determined (15 no declared exports, 259 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 4.932128 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.16366 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.383452 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.570135 ms
<t> trace exports usage in graph: 6.246222 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.818501 ms
<t> visitModules: visiting: 2.901506 ms
    268 queue items processed (122 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.589684 ms
<t> connectChunkGroups: 0.08561 ms
<t> cleanup: 0.035774 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.033804 ms
<t> modules: 2.969163 ms
<t> queue: 0.005839 ms
<t> maxSize: 0.042685 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.224454 ms
<t> sort relevant modules: 0.142281 ms
<t> find modules to concatenate: 6.043621 ms
<t> sort concat configurations: 0.037987 ms
<t> create concatenated modules: 5.552495 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 245.291559 ms
<t> optimize asset: polyfills.js: 703.157243 ms
<t> optimize asset: main.js: 3587.81042 ms
<t> optimize js assets: 3685.601018 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 15.000062 ms
<t> optimize css assets: 21.328772 ms

LOG from webpack.FileSystemInfo
    825 new snapshots created
    0% root snapshot uncached (0 / 1211)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 134 timestamps 23 hashes 23 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/17) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 84% (3440/4082) entries shared via 3 shared snapshots (561 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 61% (237/389) entries shared via 12 shared snapshots (31 times referenced)
    Managed items info in cache: 79 items
    Managed items snapshot optimization: 21% (247/1203) entries shared via 14 shared snapshots (42 times referenced)
    Managed files snapshot optimization: 79% (3340/4220) entries shared via 183 shared snapshots (759 times referenced)
    Managed missing snapshot optimization: 90% (4029/4500) entries shared via 197 shared snapshots (776 times referenced)

2023-08-13 21:30:04: webpack 5.88.2 compiled in 13448 ms (446db8dd480c0a04)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/ngnext-2023-04-21/node_modules/webpack/lib/, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1136.416571 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 50.744521 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1136 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/ngnext-2023-04-21|request=|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/prebuilt-themes/purple-green.css?ngGlobalStyle': 1.103989 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.095577 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/core/fesm2022/core.mjs': 3.850056 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/forms/fesm2022/forms.mjs': 3.132753 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/material/fesm2022/core.mjs': 2.03655 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/router/fesm2022/router.mjs': 2.339774 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/http.mjs': 1.155636 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular/common/fesm2022/common.mjs': 2.186921 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/index.js': 1.09091 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js': 1.555362 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/ngnext-2023-04-21/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/ngnext-2023-04-21/src/main.ts|bdcffb4806b02a7f|runtime': 10.983345 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.321799 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 247.091323 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1136 items, 1 files, 39 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 337.71 kB |                84.93 kB
styles.css          | styles        |  82.22 kB |                 8.09 kB
polyfills.js        | polyfills     |  33.00 kB |                10.69 kB
runtime.js          | runtime       | 912 bytes |               520 bytes

| Initial Total | 453.82 kB |               104.22 kB

Build at: 2023-08-14T01:30:07.029Z - Hash: 446db8dd480c0a04 - Time: 15920ms
Done in 17.70s.
```

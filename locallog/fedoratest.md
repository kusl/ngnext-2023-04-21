```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
27 06 2023 14:32:58.454:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
27 06 2023 14:32:58.456:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
27 06 2023 14:32:58.459:INFO [launcher]: Starting browser Firefox
27 06 2023 14:33:00.333:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket qPxEtv9XrzsoG5DJAAAB with id 8629703
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
27 06 2023 14:33:00.639:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 8629703
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.056 secs)
27 06 2023 14:33:00.699:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 56 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:273 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
27 06 2023 14:33:00.761:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 63 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:335 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.14 secs)
27 06 2023 14:33:00.783:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:357 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.164 secs)
27 06 2023 14:33:00.827:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:402 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.191 secs / 0.164 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:406 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.191 secs / 0.164 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.32s.
```

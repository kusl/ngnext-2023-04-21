```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
20 08 2023 21:59:34.659:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
20 08 2023 21:59:34.661:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 08 2023 21:59:34.664:INFO [launcher]: Starting browser Firefox
20 08 2023 21:59:35.820:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket yrWsKSkSZlyVwwl9AAAB with id 72004239
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
20 08 2023 21:59:36.262:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 72004239
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.074 secs)
20 08 2023 21:59:36.345:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 74 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:699 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.097 secs)
20 08 2023 21:59:36.367:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:721 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.122 secs)
20 08 2023 21:59:36.393:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:747 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.14 secs)
20 08 2023 21:59:36.453:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:808 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.193 secs / 0.14 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:811 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.193 secs / 0.14 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 17.62s.
```

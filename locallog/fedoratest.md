```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
12 01 2024 15:12:41.025:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
12 01 2024 15:12:41.027:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
12 01 2024 15:12:41.030:INFO [launcher]: Starting browser Firefox
12 01 2024 15:12:42.816:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket 668qiR-5m4SLFmLrAAAB with id 32901190
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
12 01 2024 15:12:43.421:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 32901190
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.06 secs)
12 01 2024 15:12:43.480:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 60 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:482 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.115 secs)
12 01 2024 15:12:43.538:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 55 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:539 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.138 secs)
12 01 2024 15:12:43.573:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:574 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.157 secs)
12 01 2024 15:12:43.587:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:589 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.169 secs / 0.157 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:594 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.169 secs / 0.157 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.87s.
```

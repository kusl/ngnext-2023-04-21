```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
30 06 2023 12:21:32.997:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 06 2023 12:21:32.999:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 06 2023 12:21:33.002:INFO [launcher]: Starting browser Firefox
30 06 2023 12:21:34.385:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket YylLuR1oVfsZ5_DRAAAB with id 51374224
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
30 06 2023 12:21:34.747:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 51374224
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
30 06 2023 12:21:34.868:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 119 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:889 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.138 secs)
30 06 2023 12:21:34.893:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:913 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.156 secs)
30 06 2023 12:21:34.918:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:938 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.164 secs)
30 06 2023 12:21:34.921:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:942 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.176 secs / 0.164 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:947 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.176 secs / 0.164 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.87s.
```

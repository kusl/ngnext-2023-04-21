```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
29 01 2024 23:14:02.038:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
29 01 2024 23:14:02.042:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 01 2024 23:14:02.046:INFO [launcher]: Starting browser Firefox
29 01 2024 23:14:03.889:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket BelJ07q0TnVCLx1CAAAB with id 80890296
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
29 01 2024 23:14:04.437:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 80890296
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.095 secs)
29 01 2024 23:14:04.532:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 95 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:523 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
29 01 2024 23:14:04.559:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:550 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.147 secs)
29 01 2024 23:14:04.589:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:580 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.156 secs)
29 01 2024 23:14:04.606:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:597 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.156 secs)
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

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:602 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.156 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 13.31s.
```

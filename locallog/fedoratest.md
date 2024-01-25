```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
25 01 2024 16:24:17.868:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 01 2024 16:24:17.871:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 01 2024 16:24:17.873:INFO [launcher]: Starting browser Firefox
25 01 2024 16:24:20.222:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket daXfThMJLBXPFRM0AAAB with id 38843438
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
25 01 2024 16:24:20.893:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 38843438
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.049 secs)
25 01 2024 16:24:20.965:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 49 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:111 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.112 secs)
25 01 2024 16:24:21.015:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 63 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:160 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.135 secs)
25 01 2024 16:24:21.040:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:185 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.155 secs)
25 01 2024 16:24:21.061:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:207 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.155 secs)
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

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:3:213 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.155 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.15s.
```

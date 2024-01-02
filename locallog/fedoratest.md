```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
02 01 2024 18:45:56.915:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
02 01 2024 18:45:56.917:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
02 01 2024 18:45:56.920:INFO [launcher]: Starting browser Firefox
02 01 2024 18:45:58.781:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket Ma63fwIKdSwh2cu3AAAB with id 18348100
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
02 01 2024 18:45:59.409:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 18348100
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.079 secs)
02 01 2024 18:45:59.464:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 79 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:568 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.099 secs)
02 01 2024 18:45:59.493:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:597 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.125 secs)
02 01 2024 18:45:59.529:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:632 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.135 secs)
02 01 2024 18:45:59.531:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:635 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.129 secs / 0.135 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:644 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.129 secs / 0.135 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.13s.
```

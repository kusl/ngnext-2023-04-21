```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
10 11 2023 00:14:33.244:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 11 2023 00:14:33.246:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 11 2023 00:14:33.248:INFO [launcher]: Starting browser Firefox
10 11 2023 00:14:34.449:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket k6HqZZ92EaH_xPXRAAAB with id 65613578
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
10 11 2023 00:14:34.921:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 65613578
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.058 secs)
10 11 2023 00:14:34.983:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 58 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:750 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.082 secs)
10 11 2023 00:14:35.006:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:772 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.103 secs)
10 11 2023 00:14:35.026:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:792 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.113 secs)
10 11 2023 00:14:35.045:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:811 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.125 secs / 0.113 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:814 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.125 secs / 0.113 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.15s.
```

```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
10 12 2023 01:30:48.034:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 12 2023 01:30:48.036:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 12 2023 01:30:48.038:INFO [launcher]: Starting browser Firefox
10 12 2023 01:30:49.311:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket ssj7KUv3sVImRjL0AAAB with id 82787785
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
10 12 2023 01:30:49.777:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 82787785
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.04 secs)
10 12 2023 01:30:49.824:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:801 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.089 secs)
10 12 2023 01:30:49.874:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 49 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:851 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.106 secs)
10 12 2023 01:30:49.891:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:868 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.123 secs)
10 12 2023 01:30:49.912:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:890 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.143 secs / 0.123 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:899 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.143 secs / 0.123 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.27s.
```

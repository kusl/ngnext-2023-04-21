```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
16 10 2023 06:34:22.203:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
16 10 2023 06:34:22.205:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 10 2023 06:34:22.208:INFO [launcher]: Starting browser Firefox
16 10 2023 06:34:23.437:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket iZk31NptvSi4iFzqAAAB with id 85370628
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
16 10 2023 06:34:23.976:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 85370628
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.078 secs)
16 10 2023 06:34:24.058:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 78 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:871 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
16 10 2023 06:34:24.090:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:902 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
16 10 2023 06:34:24.111:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:923 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.124 secs)
16 10 2023 06:34:24.127:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:940 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.154 secs / 0.124 secs)
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

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:946 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.154 secs / 0.124 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.24s.
```

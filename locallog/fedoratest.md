```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
05 11 2023 05:47:50.458:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
05 11 2023 05:47:50.460:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 11 2023 05:47:50.462:INFO [launcher]: Starting browser Firefox
05 11 2023 05:47:51.586:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket 34ip5vRpjJRTI_o_AAAB with id 99008257
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
05 11 2023 05:47:52.017:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 99008257
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.077 secs)
05 11 2023 05:47:52.096:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 77 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:650 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.094 secs)
05 11 2023 05:47:52.117:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:670 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.111 secs)
05 11 2023 05:47:52.139:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:693 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.121 secs)
05 11 2023 05:47:52.157:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:710 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.142 secs / 0.121 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:713 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.142 secs / 0.121 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.73s.
```

```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
01 12 2023 17:22:03.017:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
01 12 2023 17:22:03.018:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
01 12 2023 17:22:03.021:INFO [launcher]: Starting browser Firefox
01 12 2023 17:22:04.320:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket AuNv9RFh3h8TJdiMAAAB with id 86172587
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
01 12 2023 17:22:04.898:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 86172587
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.068 secs)
01 12 2023 17:22:04.964:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 68 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:958 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.09 secs)
01 12 2023 17:22:04.988:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:982 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.113 secs)
01 12 2023 17:22:05.014:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:8 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.124 secs)
01 12 2023 17:22:05.035:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:29 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.139 secs / 0.124 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:32 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.139 secs / 0.124 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.98s.
```

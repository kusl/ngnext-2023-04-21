```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
08 01 2024 12:51:09.836:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
08 01 2024 12:51:09.838:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 01 2024 12:51:09.841:INFO [launcher]: Starting browser Firefox
08 01 2024 12:51:12.192:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket q7zr-8kDUHb1V7InAAAB with id 62783588
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
08 01 2024 12:51:12.802:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 62783588
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.04 secs)
08 01 2024 12:51:12.862:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:40 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.092 secs)
08 01 2024 12:51:12.902:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 52 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:80 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.117 secs)
08 01 2024 12:51:12.926:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:105 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.136 secs)
08 01 2024 12:51:12.949:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:128 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.149 secs / 0.136 secs)
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
Elapsed Time: 0:3:133 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.149 secs / 0.136 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.05s.
```

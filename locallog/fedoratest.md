```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
11 10 2023 03:28:52.370:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
11 10 2023 03:28:52.372:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 10 2023 03:28:52.375:INFO [launcher]: Starting browser Firefox
11 10 2023 03:28:53.669:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket HkHjh8kP2XsbcJNsAAAB with id 95016485
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
11 10 2023 03:28:54.236:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 95016485
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.065 secs)
11 10 2023 03:28:54.303:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 65 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:948 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.082 secs)
11 10 2023 03:28:54.325:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:970 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.104 secs)
11 10 2023 03:28:54.350:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:994 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.111 secs)
11 10 2023 03:28:54.359:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:4 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.126 secs / 0.111 secs)
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

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:7 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.126 secs / 0.111 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.07s.
```

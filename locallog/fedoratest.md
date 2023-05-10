```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
10 05 2023 00:04:47.320:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 05 2023 00:04:47.322:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 05 2023 00:04:47.325:INFO [launcher]: Starting browser Firefox
10 05 2023 00:04:48.548:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket -oDdbx6ml9rBPCrmAAAB with id 38653120
Firefox 112.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
10 05 2023 00:04:48.881:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 38653120
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.121 secs)
10 05 2023 00:04:48.999:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 121 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:691 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.143 secs)
10 05 2023 00:04:49.034:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:725 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.164 secs)
10 05 2023 00:04:49.052:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:743 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.174 secs)
10 05 2023 00:04:49.073:INFO [Firefox 112.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:765 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.194 secs / 0.174 secs)
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

 - [1mFirefox 112.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:768 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.194 secs / 0.174 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.49s.
```

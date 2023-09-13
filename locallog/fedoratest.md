```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
13 09 2023 13:13:27.808:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
13 09 2023 13:13:27.810:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 09 2023 13:13:27.813:INFO [launcher]: Starting browser Firefox
13 09 2023 13:13:28.976:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket 76tb0rV1ww_BFPS1AAAB with id 9276342
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
13 09 2023 13:13:29.932:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 9276342
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.071 secs)
13 09 2023 13:13:30.003:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 71 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:207 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.095 secs)
13 09 2023 13:13:30.031:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:234 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.111 secs)
13 09 2023 13:13:30.049:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:252 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.12 secs)
13 09 2023 13:13:30.060:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:263 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.137 secs / 0.12 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:275 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.137 secs / 0.12 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.51s.
```

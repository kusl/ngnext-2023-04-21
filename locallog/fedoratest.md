```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
28 09 2023 13:37:34.856:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 09 2023 13:37:34.858:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 09 2023 13:37:34.861:INFO [launcher]: Starting browser Firefox
28 09 2023 13:37:36.075:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket cKCFzWiCMo12cv3BAAAB with id 83105188
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
28 09 2023 13:37:36.645:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 83105188
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.047 secs)
28 09 2023 13:37:36.696:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 47 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:851 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.096 secs)
28 09 2023 13:37:36.755:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 49 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:910 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.113 secs)
28 09 2023 13:37:36.767:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:922 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.126 secs)
28 09 2023 13:37:36.780:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:936 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.14 secs / 0.126 secs)
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

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:943 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.14 secs / 0.126 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 17.15s.
```

```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
09 11 2023 23:52:33.219:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 11 2023 23:52:33.220:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 11 2023 23:52:33.223:INFO [launcher]: Starting browser Firefox
09 11 2023 23:52:34.461:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket -Qz3MxeeAMbhu8p6AAAB with id 18640243
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
09 11 2023 23:52:34.860:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 18640243
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.071 secs)
09 11 2023 23:52:34.936:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 71 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:729 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.089 secs)
09 11 2023 23:52:34.955:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:747 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.104 secs)
09 11 2023 23:52:34.967:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:760 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.112 secs)
09 11 2023 23:52:34.982:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:774 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.123 secs / 0.112 secs)
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
Elapsed Time: 0:1:778 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.123 secs / 0.112 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.25s.
```

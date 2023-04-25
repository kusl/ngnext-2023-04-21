```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
25 04 2023 01:57:23.576:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 04 2023 01:57:23.578:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 04 2023 01:57:23.595:INFO [launcher]: Starting browser Firefox
25 04 2023 01:57:24.904:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket FYoNoc9Tii83KJf0AAAB with id 26421117
Firefox 112.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
25 04 2023 01:57:25.323:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 26421117
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.082 secs)
25 04 2023 01:57:25.398:INFO [Firefox 112.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 82 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:836 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.137 secs)
25 04 2023 01:57:25.462:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 55 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:900 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.155 secs)
25 04 2023 01:57:25.480:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:918 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.173 secs)
25 04 2023 01:57:25.503:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:941 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.182 secs / 0.173 secs)
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

 - [1mFirefox 112.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:946 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.182 secs / 0.173 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.75s.
```

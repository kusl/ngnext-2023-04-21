```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
04 12 2023 21:29:02.676:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
04 12 2023 21:29:02.677:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 12 2023 21:29:02.680:INFO [launcher]: Starting browser Firefox
04 12 2023 21:29:03.920:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket IY5Bz0gXx-Q4XSSDAAAB with id 7639206
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
04 12 2023 21:29:04.292:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 7639206
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.071 secs)
04 12 2023 21:29:04.363:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 71 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:715 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.09 secs)
04 12 2023 21:29:04.389:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:741 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.106 secs)
04 12 2023 21:29:04.397:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:748 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.113 secs)
04 12 2023 21:29:04.420:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:771 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.129 secs / 0.113 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:775 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.129 secs / 0.113 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.47s.
```

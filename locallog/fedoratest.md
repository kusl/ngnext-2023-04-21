```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
15 11 2023 22:57:17.071:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
15 11 2023 22:57:17.073:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 11 2023 22:57:17.076:INFO [launcher]: Starting browser Firefox
15 11 2023 22:57:18.758:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket -SkII3JZlAvFfy2AAAAB with id 12688081
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
15 11 2023 22:57:19.311:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 12688081
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.036 secs)
15 11 2023 22:57:19.352:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:301 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.075 secs)
15 11 2023 22:57:19.393:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:342 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.089 secs)
15 11 2023 22:57:19.408:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:357 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.101 secs)
15 11 2023 22:57:19.424:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:374 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.119 secs / 0.101 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:381 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.119 secs / 0.101 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.19s.
```

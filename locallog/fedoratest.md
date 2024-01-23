```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
23 01 2024 07:39:18.569:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
23 01 2024 07:39:18.571:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 01 2024 07:39:18.574:INFO [launcher]: Starting browser Firefox
23 01 2024 07:39:20.397:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket iSXsnQ0AjgZfJCESAAAB with id 70404533
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
23 01 2024 07:39:21.067:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 70404533
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.046 secs)
23 01 2024 07:39:21.115:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:574 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.088 secs)
23 01 2024 07:39:21.163:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 42 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:621 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.113 secs)
23 01 2024 07:39:21.197:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:655 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.13 secs)
23 01 2024 07:39:21.211:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:670 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.148 secs / 0.13 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:676 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.148 secs / 0.13 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.61s.
```

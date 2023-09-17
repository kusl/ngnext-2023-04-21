```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
17 09 2023 11:44:44.213:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 09 2023 11:44:44.215:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 09 2023 11:44:44.217:INFO [launcher]: Starting browser Firefox
17 09 2023 11:44:45.491:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket -mjhBHNeN1fjUiYWAAAB with id 11732502
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
17 09 2023 11:44:45.890:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 11732502
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.073 secs)
17 09 2023 11:44:45.972:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 73 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:774 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.092 secs)
17 09 2023 11:44:45.985:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:787 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.107 secs)
17 09 2023 11:44:46.002:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:805 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
17 09 2023 11:44:46.021:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:824 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.133 secs / 0.114 secs)
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

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:828 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.133 secs / 0.114 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.61s.
```

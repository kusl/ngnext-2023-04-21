```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
30 12 2023 07:44:48.768:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 12 2023 07:44:48.770:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 12 2023 07:44:48.773:INFO [launcher]: Starting browser Firefox
30 12 2023 07:44:50.592:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket 3odVRmytJJGtzRjgAAAB with id 30942974
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
30 12 2023 07:44:51.208:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 30942974
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.081 secs)
30 12 2023 07:44:51.302:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 81 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:548 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.107 secs)
30 12 2023 07:44:51.305:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:550 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.135 secs)
30 12 2023 07:44:51.336:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:581 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.145 secs)
30 12 2023 07:44:51.338:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:584 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.132 secs / 0.145 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:589 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.132 secs / 0.145 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.00s.
```

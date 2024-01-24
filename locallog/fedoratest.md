```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
24 01 2024 12:05:02.394:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
24 01 2024 12:05:02.396:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 01 2024 12:05:02.405:INFO [launcher]: Starting browser Firefox
24 01 2024 12:05:04.649:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket rSBySvOQLOZZdFCHAAAB with id 6623174
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
24 01 2024 12:05:05.466:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 6623174
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.112 secs)
24 01 2024 12:05:05.566:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 112 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:219 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.149 secs)
24 01 2024 12:05:05.609:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 37 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:262 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.195 secs)
24 01 2024 12:05:05.653:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:306 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.213 secs)
24 01 2024 12:05:05.670:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:323 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.223 secs / 0.213 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:3:349 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.223 secs / 0.213 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 21.03s.
```

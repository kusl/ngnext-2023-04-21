```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
12 01 2024 11:31:19.205:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
12 01 2024 11:31:19.207:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
12 01 2024 11:31:19.210:INFO [launcher]: Starting browser Firefox
12 01 2024 11:31:20.972:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket y-89bDmp3NgO5JMvAAAB with id 44802775
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
12 01 2024 11:31:21.548:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 44802775
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.046 secs)
12 01 2024 11:31:21.602:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:412 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.095 secs)
12 01 2024 11:31:21.650:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 49 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:461 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
12 01 2024 11:31:21.674:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:484 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.147 secs)
12 01 2024 11:31:21.703:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:514 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.164 secs / 0.147 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:525 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.164 secs / 0.147 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.93s.
```

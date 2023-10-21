```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
20 10 2023 20:55:59.248:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
20 10 2023 20:55:59.250:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 10 2023 20:55:59.253:INFO [launcher]: Starting browser Firefox
20 10 2023 20:56:00.401:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket HVzyGG5ZmoQsNb-GAAAB with id 15544579
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
20 10 2023 20:56:01.334:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 15544579
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.041 secs)
20 10 2023 20:56:01.372:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:137 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.078 secs)
20 10 2023 20:56:01.416:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 37 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:181 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.091 secs)
20 10 2023 20:56:01.435:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:201 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.104 secs)
20 10 2023 20:56:01.447:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:212 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.116 secs / 0.104 secs)
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

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:218 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.116 secs / 0.104 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.50s.
```

```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
09 01 2024 22:30:00.016:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 01 2024 22:30:00.018:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 01 2024 22:30:00.021:INFO [launcher]: Starting browser Firefox
09 01 2024 22:30:01.949:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket EAHh3pXtc4Twfo9TAAAB with id 27328590
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
09 01 2024 22:30:02.602:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 27328590
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.061 secs)
09 01 2024 22:30:02.668:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 61 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:665 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.126 secs)
09 01 2024 22:30:02.743:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 65 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:741 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.158 secs)
09 01 2024 22:30:02.771:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:768 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.191 secs)
09 01 2024 22:30:02.820:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:817 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.22 secs / 0.191 secs)
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
Elapsed Time: 0:2:822 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.22 secs / 0.191 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.70s.
```

```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
03 01 2024 15:19:54.680:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
03 01 2024 15:19:54.683:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 01 2024 15:19:54.686:INFO [launcher]: Starting browser Firefox
03 01 2024 15:19:56.907:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket F-NZI5od08FYvhFbAAAB with id 45550841
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
03 01 2024 15:19:57.686:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 45550841
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.046 secs)
03 01 2024 15:19:57.761:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:114 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.109 secs)
03 01 2024 15:19:57.833:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 63 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:186 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.143 secs)
03 01 2024 15:19:57.868:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:222 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.186 secs)
03 01 2024 15:19:57.887:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:241 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.203 secs / 0.186 secs)
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
Elapsed Time: 0:3:246 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.203 secs / 0.186 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 20.93s.
```

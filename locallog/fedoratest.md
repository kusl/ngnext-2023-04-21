```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
30 06 2023 14:45:14.248:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 06 2023 14:45:14.250:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 06 2023 14:45:14.253:INFO [launcher]: Starting browser Firefox
30 06 2023 14:45:15.543:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket 038719x468dE-e-uAAAB with id 557200
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
30 06 2023 14:45:15.830:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 557200
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.121 secs)
30 06 2023 14:45:15.954:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 121 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:726 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.14 secs)
30 06 2023 14:45:15.980:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:751 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.177 secs)
30 06 2023 14:45:16.023:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 37 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:795 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.189 secs)
30 06 2023 14:45:16.032:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:804 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.209 secs / 0.189 secs)
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

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:814 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.209 secs / 0.189 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.86s.
```

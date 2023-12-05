```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
05 12 2023 15:21:00.492:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
05 12 2023 15:21:00.493:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 12 2023 15:21:00.496:INFO [launcher]: Starting browser Firefox
05 12 2023 15:21:01.747:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket QhOi_91SDv7moVjPAAAB with id 85091480
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
05 12 2023 15:21:02.126:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 85091480
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.04 secs)
05 12 2023 15:21:02.164:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:683 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.079 secs)
05 12 2023 15:21:02.220:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:738 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.095 secs)
05 12 2023 15:21:02.238:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:756 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.105 secs)
05 12 2023 15:21:02.248:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:767 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.124 secs / 0.105 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:769 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.124 secs / 0.105 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.46s.
```

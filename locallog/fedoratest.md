```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
28 12 2023 21:48:28.128:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 12 2023 21:48:28.130:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 12 2023 21:48:28.133:INFO [launcher]: Starting browser Firefox
28 12 2023 21:48:30.018:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket kutE8-G4XVL4rf-hAAAB with id 14963685
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
28 12 2023 21:48:30.718:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 14963685
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.042 secs)
28 12 2023 21:48:30.774:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 42 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:660 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.088 secs)
28 12 2023 21:48:30.794:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:679 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.111 secs)
28 12 2023 21:48:30.816:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:702 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.136 secs)
28 12 2023 21:48:30.851:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:736 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.135 secs / 0.136 secs)
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
Elapsed Time: 0:2:741 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.135 secs / 0.136 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 8.78s.
```

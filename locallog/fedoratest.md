```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
09 12 2023 14:48:49.474:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 12 2023 14:48:49.475:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 12 2023 14:48:49.478:INFO [launcher]: Starting browser Firefox
09 12 2023 14:48:50.806:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket pK2ZmrAlZ6wt55djAAAB with id 97889186
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
09 12 2023 14:48:51.292:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 97889186
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.071 secs)
09 12 2023 14:48:51.359:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 71 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:897 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.096 secs)
09 12 2023 14:48:51.387:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:925 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
09 12 2023 14:48:51.401:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:938 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.127 secs)
09 12 2023 14:48:51.425:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:963 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.135 secs / 0.127 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:966 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.135 secs / 0.127 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.13s.
```

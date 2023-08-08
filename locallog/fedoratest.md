```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
07 08 2023 23:46:25.818:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
07 08 2023 23:46:25.820:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
07 08 2023 23:46:25.824:INFO [launcher]: Starting browser Firefox
07 08 2023 23:46:26.995:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket G4AQzi4kJ4YG4-ZwAAAB with id 57189316
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
07 08 2023 23:46:27.376:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 57189316
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.065 secs)
07 08 2023 23:46:27.439:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 65 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:645 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.08 secs)
07 08 2023 23:46:27.451:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:657 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.095 secs)
07 08 2023 23:46:27.483:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:689 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.102 secs)
07 08 2023 23:46:27.486:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:693 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.112 secs / 0.102 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:696 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.112 secs / 0.102 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.83s.
```

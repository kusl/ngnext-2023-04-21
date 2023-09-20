```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
20 09 2023 14:07:07.215:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
20 09 2023 14:07:07.217:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 09 2023 14:07:07.219:INFO [launcher]: Starting browser Firefox
20 09 2023 14:07:08.403:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket 8dGss1DOokS5-pKbAAAB with id 20146145
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
20 09 2023 14:07:08.849:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 20146145
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.036 secs)
20 09 2023 14:07:08.887:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:682 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.074 secs)
20 09 2023 14:07:08.931:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 38 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:727 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.102 secs)
20 09 2023 14:07:08.960:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:755 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.116 secs)
20 09 2023 14:07:08.973:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:768 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.126 secs / 0.116 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:774 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.126 secs / 0.116 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 17.75s.
```

```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
04 11 2023 23:10:37.214:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
04 11 2023 23:10:37.215:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 11 2023 23:10:37.217:INFO [launcher]: Starting browser Firefox
04 11 2023 23:10:38.561:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket yBF4UN0EceCnAMibAAAB with id 53783434
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
04 11 2023 23:10:39.152:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 53783434
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.037 secs)
04 11 2023 23:10:39.206:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 37 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:3 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.085 secs)
04 11 2023 23:10:39.250:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 48 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:48 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.103 secs)
04 11 2023 23:10:39.266:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:64 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.118 secs)
04 11 2023 23:10:39.282:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:79 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.14 secs / 0.118 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:91 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.14 secs / 0.118 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.13s.
```

```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
19 12 2023 10:51:59.852:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
19 12 2023 10:51:59.854:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
19 12 2023 10:51:59.857:INFO [launcher]: Starting browser Firefox
19 12 2023 10:52:01.484:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket H1Q4tTIx6JBMXmCVAAAB with id 51180990
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
19 12 2023 10:52:02.069:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 51180990
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.044 secs)
19 12 2023 10:52:02.103:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:267 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.095 secs)
19 12 2023 10:52:02.151:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:315 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.117 secs)
19 12 2023 10:52:02.170:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:333 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.133 secs)
19 12 2023 10:52:02.186:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:349 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.119 secs / 0.133 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:353 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.119 secs / 0.133 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.11s.
```

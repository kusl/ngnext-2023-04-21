```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
20 12 2023 08:59:12.690:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
20 12 2023 08:59:12.692:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 12 2023 08:59:12.694:INFO [launcher]: Starting browser Firefox
20 12 2023 08:59:14.606:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket r-9-FMcR5RHttE21AAAB with id 13810236
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
20 12 2023 08:59:15.293:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 13810236
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.057 secs)
20 12 2023 08:59:15.331:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 57 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:655 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.117 secs)
20 12 2023 08:59:15.379:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 60 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:704 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.147 secs)
20 12 2023 08:59:15.407:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:732 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.179 secs)
20 12 2023 08:59:15.444:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:769 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.156 secs / 0.179 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:777 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.156 secs / 0.179 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.74s.
```

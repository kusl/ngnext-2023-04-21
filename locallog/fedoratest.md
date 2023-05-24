```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
24 05 2023 05:27:25.568:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
24 05 2023 05:27:25.570:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 05 2023 05:27:25.574:INFO [launcher]: Starting browser Firefox
24 05 2023 05:27:26.802:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket DsQzDzyzxNPVrtUnAAAB with id 36509418
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
24 05 2023 05:27:27.098:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 36509418
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.103 secs)
24 05 2023 05:27:27.204:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 103 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:661 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.119 secs)
24 05 2023 05:27:27.225:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:682 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.138 secs)
24 05 2023 05:27:27.251:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:709 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.146 secs)
24 05 2023 05:27:27.261:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:719 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.168 secs / 0.146 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:725 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.168 secs / 0.146 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.74s.
```

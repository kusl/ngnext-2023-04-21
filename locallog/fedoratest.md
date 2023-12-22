```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
22 12 2023 10:10:10.876:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
22 12 2023 10:10:10.878:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 12 2023 10:10:10.881:INFO [launcher]: Starting browser Firefox
22 12 2023 10:10:12.708:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket 07wNw-_0NjPhaFugAAAB with id 30015377
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
22 12 2023 10:10:13.366:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 30015377
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.078 secs)
22 12 2023 10:10:13.456:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 78 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:594 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.101 secs)
22 12 2023 10:10:13.479:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:618 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.135 secs)
22 12 2023 10:10:13.517:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:656 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.149 secs)
22 12 2023 10:10:13.530:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:669 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.167 secs / 0.149 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:675 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.167 secs / 0.149 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.17s.
```

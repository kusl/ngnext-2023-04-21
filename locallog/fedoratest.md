```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
08 11 2023 16:45:40.378:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
08 11 2023 16:45:40.380:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 11 2023 16:45:40.384:INFO [launcher]: Starting browser Firefox
08 11 2023 16:45:42.103:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket QdY5ZSIamwHCBrgWAAAB with id 99630209
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
08 11 2023 16:45:42.671:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 99630209
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.072 secs)
08 11 2023 16:45:42.741:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 72 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:388 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.094 secs)
08 11 2023 16:45:42.767:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:414 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.109 secs)
08 11 2023 16:45:42.775:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:423 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.116 secs)
08 11 2023 16:45:42.783:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:431 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.115 secs / 0.116 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:436 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.115 secs / 0.116 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 14.65s.
```

```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
22 01 2024 17:54:36.876:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
22 01 2024 17:54:36.878:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 01 2024 17:54:36.881:INFO [launcher]: Starting browser Firefox
22 01 2024 17:54:38.567:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket 8B4bysRz1KqsMnPKAAAB with id 41664394
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
22 01 2024 17:54:39.218:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 41664394
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.045 secs)
22 01 2024 17:54:39.267:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:403 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.104 secs)
22 01 2024 17:54:39.334:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 59 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:470 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.128 secs)
22 01 2024 17:54:39.361:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:496 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.147 secs)
22 01 2024 17:54:39.376:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:512 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.178 secs / 0.147 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:534 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.178 secs / 0.147 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.20s.
```

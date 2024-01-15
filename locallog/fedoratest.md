```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
15 01 2024 10:35:28.790:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
15 01 2024 10:35:28.792:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 01 2024 10:35:28.795:INFO [launcher]: Starting browser Firefox
15 01 2024 10:35:30.703:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket zkCyq4G_978AoBCeAAAB with id 20259400
Firefox 121.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
15 01 2024 10:35:31.343:INFO [Firefox 121.0 (Linux x86_64)]: Starting tests 20259400
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.043 secs)
15 01 2024 10:35:31.388:INFO [Firefox 121.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:612 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.102 secs)
15 01 2024 10:35:31.456:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should create the app]: Success: 59 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:680 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.129 secs)
15 01 2024 10:35:31.482:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:707 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.152 secs)
15 01 2024 10:35:31.515:INFO [Firefox 121.0 (Linux x86_64) | AppComponent | should render title]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:740 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.176 secs / 0.152 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 121.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:746 min/sec/ms


Firefox 121.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.176 secs / 0.152 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.71s.
```

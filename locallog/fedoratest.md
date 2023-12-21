```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
21 12 2023 17:23:31.675:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 12 2023 17:23:31.677:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 12 2023 17:23:31.686:INFO [launcher]: Starting browser Firefox
21 12 2023 17:23:33.992:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket hr1VFrsYhFUcAb7wAAAB with id 29025802
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
21 12 2023 17:23:34.628:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 29025802
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.044 secs)
21 12 2023 17:23:34.690:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:35 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.113 secs)
21 12 2023 17:23:34.746:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 69 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:90 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.137 secs)
21 12 2023 17:23:34.767:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:111 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.162 secs)
21 12 2023 17:23:34.808:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:153 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.183 secs / 0.162 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:3:158 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.183 secs / 0.162 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.74s.
```

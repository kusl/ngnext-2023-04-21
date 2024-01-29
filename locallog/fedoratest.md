```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
28 01 2024 20:41:27.537:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 01 2024 20:41:27.539:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 01 2024 20:41:27.543:INFO [launcher]: Starting browser Firefox
28 01 2024 20:41:29.111:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket u-ux4VlSCMf9IEcbAAAB with id 38802827
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
28 01 2024 20:41:29.672:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 38802827
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.102 secs)
28 01 2024 20:41:29.778:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 102 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:259 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.122 secs)
28 01 2024 20:41:29.813:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:294 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.142 secs)
28 01 2024 20:41:29.829:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:309 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.151 secs)
28 01 2024 20:41:29.836:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:317 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.167 secs / 0.151 secs)
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

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:321 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.167 secs / 0.151 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.62s.
```

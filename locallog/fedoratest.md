```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
27 01 2024 16:26:00.588:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
27 01 2024 16:26:00.590:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
27 01 2024 16:26:00.593:INFO [launcher]: Starting browser Firefox
27 01 2024 16:26:02.216:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket A-Cc2hNni6xAMHiYAAAB with id 73396551
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
27 01 2024 16:26:02.769:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 73396551
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.099 secs)
27 01 2024 16:26:02.883:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 99 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:324 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.124 secs)
27 01 2024 16:26:02.906:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:346 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.143 secs)
27 01 2024 16:26:02.932:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:372 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.153 secs)
27 01 2024 16:26:02.934:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:375 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.153 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:386 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.172 secs / 0.153 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.83s.
```

```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
05 11 2023 20:33:48.732:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
05 11 2023 20:33:48.734:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 11 2023 20:33:48.736:INFO [launcher]: Starting browser Firefox
05 11 2023 20:33:49.900:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket fUWGFZpFj7HVwzccAAAB with id 46819843
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
05 11 2023 20:33:50.344:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 46819843
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.032 secs)
05 11 2023 20:33:50.400:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:680 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.084 secs)
05 11 2023 20:33:50.431:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 52 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:712 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.104 secs)
05 11 2023 20:33:50.451:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:731 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.118 secs)
05 11 2023 20:33:50.466:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:747 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.126 secs / 0.118 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:752 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.126 secs / 0.118 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.80s.
```

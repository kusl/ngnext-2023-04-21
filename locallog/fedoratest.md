```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
05 11 2023 07:17:23.984:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
05 11 2023 07:17:23.985:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 11 2023 07:17:23.988:INFO [launcher]: Starting browser Firefox
05 11 2023 07:17:25.158:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket P-GTqhKyqnCXRFcAAAAB with id 2039417
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
05 11 2023 07:17:25.667:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 2039417
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.05 secs)
05 11 2023 07:17:25.716:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 50 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:743 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.063 secs)
05 11 2023 07:17:25.733:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:760 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.078 secs)
05 11 2023 07:17:25.747:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:774 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.084 secs)
05 11 2023 07:17:25.756:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:784 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.093 secs / 0.084 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:788 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.093 secs / 0.084 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.75s.
```

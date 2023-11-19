```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
19 11 2023 11:01:15.879:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
19 11 2023 11:01:15.881:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
19 11 2023 11:01:15.884:INFO [launcher]: Starting browser Firefox
19 11 2023 11:01:17.080:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket 0pwEjhsSbTUxvDDuAAAB with id 43801022
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
19 11 2023 11:01:17.474:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 43801022
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.035 secs)
19 11 2023 11:01:17.512:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:644 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.067 secs)
19 11 2023 11:01:17.548:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:679 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.085 secs)
19 11 2023 11:01:17.564:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:695 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.103 secs)
19 11 2023 11:01:17.588:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:719 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.115 secs / 0.103 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:723 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.115 secs / 0.103 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.40s.
```

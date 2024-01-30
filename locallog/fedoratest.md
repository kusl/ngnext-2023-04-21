```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
30 01 2024 17:15:11.130:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 01 2024 17:15:11.133:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 01 2024 17:15:11.136:INFO [launcher]: Starting browser Firefox
30 01 2024 17:15:12.898:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket W6SFAGZhScCvzKPkAAAB with id 47346496
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
30 01 2024 17:15:13.499:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 47346496
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.048 secs)
30 01 2024 17:15:13.540:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 48 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:423 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
30 01 2024 17:15:13.602:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 50 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:486 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.132 secs)
30 01 2024 17:15:13.631:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:514 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.151 secs)
30 01 2024 17:15:13.653:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:537 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.157 secs / 0.151 secs)
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

 - [1mFirefox 122.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:542 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.157 secs / 0.151 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.03s.
```

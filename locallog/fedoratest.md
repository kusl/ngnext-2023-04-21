```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
06 06 2023 08:08:15.305:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
06 06 2023 08:08:15.306:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 06 2023 08:08:15.309:INFO [launcher]: Starting browser Firefox
06 06 2023 08:08:16.875:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket wjyZSCEbjm5-GH-VAAAB with id 99355434
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
06 06 2023 08:08:17.257:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 99355434
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.051 secs)
06 06 2023 08:08:17.308:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:14 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.102 secs)
06 06 2023 08:08:17.361:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:67 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.118 secs)
06 06 2023 08:08:17.384:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:90 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.131 secs)
06 06 2023 08:08:17.397:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:104 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.151 secs / 0.131 secs)
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

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:116 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.151 secs / 0.131 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.85s.
```

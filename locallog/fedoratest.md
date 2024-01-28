```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
28 01 2024 18:45:26.923:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 01 2024 18:45:26.926:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 01 2024 18:45:26.930:INFO [launcher]: Starting browser Firefox
28 01 2024 18:45:28.482:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket ILNbfuBrh1U_TCGBAAAB with id 55327036
Firefox 122.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
28 01 2024 18:45:28.995:INFO [Firefox 122.0 (Linux x86_64)]: Starting tests 55327036
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.076 secs)
28 01 2024 18:45:29.076:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should render title]: Success: 76 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:180 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.097 secs)
28 01 2024 18:45:29.094:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:198 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.116 secs)
28 01 2024 18:45:29.131:INFO [Firefox 122.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:236 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.128 secs)
28 01 2024 18:45:29.133:INFO [Firefox 122.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:238 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.146 secs / 0.128 secs)
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
Elapsed Time: 0:2:248 min/sec/ms


Firefox 122.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.146 secs / 0.128 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 9.76s.
```

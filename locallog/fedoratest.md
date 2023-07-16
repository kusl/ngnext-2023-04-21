```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
16 07 2023 07:30:03.988:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
16 07 2023 07:30:03.990:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 07 2023 07:30:03.992:INFO [launcher]: Starting browser Firefox
16 07 2023 07:30:05.267:INFO [Firefox 115.0 (Linux x86_64)]: Connected on socket 8onO4RkupEf3GBc_AAAB with id 63012229
Firefox 115.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
16 07 2023 07:30:05.682:INFO [Firefox 115.0 (Linux x86_64)]: Starting tests 63012229
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.123 secs)
16 07 2023 07:30:05.803:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: Success: 123 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:832 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.162 secs)
16 07 2023 07:30:05.845:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should render title]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:873 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.179 secs)
16 07 2023 07:30:05.883:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:911 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.186 secs)
16 07 2023 07:30:05.883:INFO [Firefox 115.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:912 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.203 secs / 0.186 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 115.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:915 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.203 secs / 0.186 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 11.00s.
```

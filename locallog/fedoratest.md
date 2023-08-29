```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
29 08 2023 14:20:38.686:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
29 08 2023 14:20:38.689:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 08 2023 14:20:38.691:INFO [launcher]: Starting browser Firefox
29 08 2023 14:20:39.912:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket bUBTEf0EHuobS7yJAAAB with id 34776711
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
29 08 2023 14:20:40.335:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 34776711
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.033 secs)
29 08 2023 14:20:40.361:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:705 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.065 secs)
29 08 2023 14:20:40.398:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:741 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.079 secs)
29 08 2023 14:20:40.411:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:754 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.093 secs)
29 08 2023 14:20:40.428:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:771 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.096 secs / 0.093 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:776 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.096 secs / 0.093 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.04s.
```

```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
30 11 2023 14:24:41.822:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 11 2023 14:24:41.824:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 11 2023 14:24:41.826:INFO [launcher]: Starting browser Firefox
30 11 2023 14:24:43.057:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket WfWr_RGUIGoAAGKOAAAB with id 27511382
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
30 11 2023 14:24:43.438:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 27511382
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.078 secs)
30 11 2023 14:24:43.520:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 78 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:726 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
30 11 2023 14:24:43.547:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:753 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.118 secs)
30 11 2023 14:24:43.568:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:773 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.129 secs)
30 11 2023 14:24:43.581:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:786 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.149 secs / 0.129 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:795 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.149 secs / 0.129 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.88s.
```

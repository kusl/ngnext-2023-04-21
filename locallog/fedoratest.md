```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
08 09 2023 00:49:30.770:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
08 09 2023 00:49:30.772:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 09 2023 00:49:30.775:INFO [launcher]: Starting browser Firefox
08 09 2023 00:49:31.992:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket JzsjWBmIaOua9ocTAAAB with id 59254490
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
08 09 2023 00:49:32.495:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 59254490
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.042 secs)
08 09 2023 00:49:32.535:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 42 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:780 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.081 secs)
08 09 2023 00:49:32.566:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:811 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.099 secs)
08 09 2023 00:49:32.585:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:831 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.116 secs)
08 09 2023 00:49:32.606:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:851 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.114 secs / 0.116 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:857 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.114 secs / 0.116 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.81s.
```

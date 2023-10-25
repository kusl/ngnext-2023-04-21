```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
25 10 2023 15:05:49.780:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 10 2023 15:05:49.782:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 10 2023 15:05:49.785:INFO [launcher]: Starting browser Firefox
25 10 2023 15:05:50.960:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket L4F49_0LKZ3nrYFsAAAB with id 63766559
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
25 10 2023 15:05:51.478:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 63766559
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.039 secs)
25 10 2023 15:05:51.535:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:801 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.082 secs)
25 10 2023 15:05:51.585:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:850 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.107 secs)
25 10 2023 15:05:51.594:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:859 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.127 secs)
25 10 2023 15:05:51.616:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:881 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.158 secs / 0.127 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:904 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.158 secs / 0.127 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 17.05s.
```

```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
16 09 2023 20:55:13.664:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
16 09 2023 20:55:13.665:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 09 2023 20:55:13.668:INFO [launcher]: Starting browser Firefox
16 09 2023 20:55:14.861:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket SLJVQ9sR4CSll3ELAAAB with id 6407977
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
16 09 2023 20:55:15.278:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 6407977
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.031 secs)
16 09 2023 20:55:15.305:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:653 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.061 secs)
16 09 2023 20:55:15.336:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:684 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.073 secs)
16 09 2023 20:55:15.350:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:698 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.089 secs)
16 09 2023 20:55:15.371:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:720 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.095 secs / 0.089 secs)
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

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:724 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.095 secs / 0.089 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.06s.
```

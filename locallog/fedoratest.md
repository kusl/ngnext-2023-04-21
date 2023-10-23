```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
23 10 2023 08:53:13.347:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
23 10 2023 08:53:13.348:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 10 2023 08:53:13.351:INFO [launcher]: Starting browser Firefox
23 10 2023 08:53:14.949:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket bQ4ORlhnXm4VNbzFAAAB with id 38804644
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
23 10 2023 08:53:15.584:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 38804644
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.068 secs)
23 10 2023 08:53:15.649:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 68 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:314 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.089 secs)
23 10 2023 08:53:15.674:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:339 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.11 secs)
23 10 2023 08:53:15.694:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:359 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.117 secs)
23 10 2023 08:53:15.709:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:374 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.127 secs / 0.117 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:377 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.127 secs / 0.117 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.03s.
```

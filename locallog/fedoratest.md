```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
26 05 2023 06:24:59.639:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
26 05 2023 06:24:59.641:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 05 2023 06:24:59.644:INFO [launcher]: Starting browser Firefox
26 05 2023 06:25:00.925:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket An4GyMzZOqml1iDhAAAB with id 98192578
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
26 05 2023 06:25:01.308:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 98192578
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.117 secs)
26 05 2023 06:25:01.418:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 117 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:796 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.141 secs)
26 05 2023 06:25:01.443:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:821 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.161 secs)
26 05 2023 06:25:01.470:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:847 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.174 secs)
26 05 2023 06:25:01.490:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:868 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.185 secs / 0.174 secs)
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

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:873 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.185 secs / 0.174 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 15.49s.
```

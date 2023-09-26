```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
26 09 2023 07:00:16.702:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
26 09 2023 07:00:16.704:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 09 2023 07:00:16.726:INFO [launcher]: Starting browser Firefox
26 09 2023 07:00:17.904:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket TfiOwRaun88jOwW2AAAB with id 33369877
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
26 09 2023 07:00:18.225:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 33369877
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.064 secs)
26 09 2023 07:00:18.292:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 64 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:603 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.081 secs)
26 09 2023 07:00:18.307:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:619 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.097 secs)
26 09 2023 07:00:18.322:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:633 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.105 secs)
26 09 2023 07:00:18.334:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:646 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.111 secs / 0.105 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:651 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.111 secs / 0.105 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.43s.
```

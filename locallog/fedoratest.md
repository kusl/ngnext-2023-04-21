```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
26 11 2023 21:27:35.796:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
26 11 2023 21:27:35.797:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 11 2023 21:27:35.799:INFO [launcher]: Starting browser Firefox
26 11 2023 21:27:37.062:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket vlcvOE_Q2K290UiUAAAB with id 86811182
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
26 11 2023 21:27:37.591:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 86811182
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.06 secs)
26 11 2023 21:27:37.649:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 60 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:880 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.076 secs)
26 11 2023 21:27:37.674:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:905 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.1 secs)
26 11 2023 21:27:37.695:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:926 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.109 secs)
26 11 2023 21:27:37.704:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:935 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.119 secs / 0.109 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:943 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.119 secs / 0.109 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.93s.
```

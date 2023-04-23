```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
23 04 2023 13:04:06.615:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
23 04 2023 13:04:06.616:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 04 2023 13:04:06.619:INFO [launcher]: Starting browser Firefox
23 04 2023 13:04:07.806:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket 08aNqvFPJvtyREgTAAAB with id 59964255
Firefox 112.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
23 04 2023 13:04:08.133:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 59964255
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.103 secs)
23 04 2023 13:04:08.255:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 103 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:652 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.138 secs)
23 04 2023 13:04:08.277:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:674 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.158 secs)
23 04 2023 13:04:08.304:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:702 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.167 secs)
23 04 2023 13:04:08.317:INFO [Firefox 112.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:714 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.186 secs / 0.167 secs)
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

 - [1mFirefox 112.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:718 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.186 secs / 0.167 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 5.84s.
```

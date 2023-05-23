```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
23 05 2023 00:55:46.944:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
23 05 2023 00:55:46.947:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 05 2023 00:55:46.950:INFO [launcher]: Starting browser Firefox
23 05 2023 00:55:48.719:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket 7-2pczofHdBjtzmKAAAB with id 29864890
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
23 05 2023 00:55:48.962:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 29864890
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.054 secs)
23 05 2023 00:55:49.017:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 54 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:90 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.094 secs)
23 05 2023 00:55:49.075:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:148 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.107 secs)
23 05 2023 00:55:49.088:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:161 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.125 secs)
23 05 2023 00:55:49.105:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:179 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.146 secs / 0.125 secs)
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

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:183 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.146 secs / 0.125 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.03s.
```

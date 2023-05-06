```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
06 05 2023 03:16:04.935:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
06 05 2023 03:16:04.937:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 05 2023 03:16:04.940:INFO [launcher]: Starting browser Firefox
06 05 2023 03:16:06.550:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket VFDNNnVvcG8Qw96KAAAB with id 11499121
Firefox 112.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
06 05 2023 03:16:07.022:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 11499121
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.139 secs)
06 05 2023 03:16:07.120:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 139 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:202 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.166 secs)
06 05 2023 03:16:07.148:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:230 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.2 secs)
06 05 2023 03:16:07.187:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:269 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.211 secs)
06 05 2023 03:16:07.209:INFO [Firefox 112.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:291 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.189 secs / 0.211 secs)
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

 - [1mFirefox 112.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:297 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.189 secs / 0.211 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 20.80s.
```

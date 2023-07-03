```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
03 07 2023 10:29:06.215:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
03 07 2023 10:29:06.217:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 07 2023 10:29:06.220:INFO [launcher]: Starting browser Firefox
03 07 2023 10:29:07.676:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket IjA-0NdmA-eC2xB4AAAB with id 57831261
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
03 07 2023 10:29:08.206:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 57831261
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.099 secs)
03 07 2023 10:29:09.204:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 99 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:3 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.122 secs)
03 07 2023 10:29:09.206:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:4 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.154 secs)
03 07 2023 10:29:09.207:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:5 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.164 secs)
03 07 2023 10:29:09.207:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:6 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (1.003 secs / 0.164 secs)
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

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:3:11 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (1.003 secs / 0.164 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 11.66s.
```

```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
23 06 2023 07:41:06.895:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
23 06 2023 07:41:06.897:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 06 2023 07:41:06.900:INFO [launcher]: Starting browser Firefox
23 06 2023 07:41:08.392:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket X55ZSH0qMg3P1IRWAAAB with id 84967186
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
23 06 2023 07:41:08.884:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 84967186
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.125 secs)
23 06 2023 07:41:08.993:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 125 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:111 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.149 secs)
23 06 2023 07:41:09.026:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:143 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.189 secs)
23 06 2023 07:41:09.066:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:183 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.201 secs)
23 06 2023 07:41:09.083:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:200 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.205 secs / 0.201 secs)
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
Elapsed Time: 0:2:208 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.205 secs / 0.201 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 17.28s.
```

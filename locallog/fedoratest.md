```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
11 08 2023 17:47:26.451:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
11 08 2023 17:47:26.453:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 08 2023 17:47:26.455:INFO [launcher]: Starting browser Firefox
11 08 2023 17:47:27.544:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket Tc6Cx0xBz_QvphyjAAAB with id 67218144
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
11 08 2023 17:47:28.139:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 67218144
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.058 secs)
11 08 2023 17:47:28.209:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 58 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:770 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.074 secs)
11 08 2023 17:47:28.218:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:778 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.086 secs)
11 08 2023 17:47:28.229:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:789 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.093 secs)
11 08 2023 17:47:28.240:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:801 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.103 secs / 0.093 secs)
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

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:805 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.103 secs / 0.093 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.05s.
```

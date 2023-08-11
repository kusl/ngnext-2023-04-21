```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
11 08 2023 01:59:40.449:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
11 08 2023 01:59:40.451:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 08 2023 01:59:40.454:INFO [launcher]: Starting browser Firefox
11 08 2023 01:59:42.059:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket YIb5ivBkeT8BveWlAAAB with id 4375163
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
11 08 2023 01:59:42.527:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 4375163
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.049 secs)
11 08 2023 01:59:42.581:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 49 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:146 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.069 secs)
11 08 2023 01:59:42.600:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:165 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.078 secs)
11 08 2023 01:59:42.611:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:176 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.082 secs)
11 08 2023 01:59:42.621:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:187 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.097 secs / 0.082 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:191 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.097 secs / 0.082 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.52s.
```

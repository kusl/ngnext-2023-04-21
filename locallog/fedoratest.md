```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
09 08 2023 18:25:38.540:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 08 2023 18:25:38.542:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 08 2023 18:25:38.545:INFO [launcher]: Starting browser Firefox
09 08 2023 18:25:39.693:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket lOqUhDVtWl-vWWM_AAAB with id 28223165
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
09 08 2023 18:25:40.226:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 28223165
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.076 secs)
09 08 2023 18:25:40.301:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 76 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:775 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
09 08 2023 18:25:40.325:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:798 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.117 secs)
09 08 2023 18:25:40.351:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:824 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.126 secs)
09 08 2023 18:25:40.368:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:841 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.144 secs / 0.126 secs)
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

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:846 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.144 secs / 0.126 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 15.18s.
```

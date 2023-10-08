```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
08 10 2023 11:08:53.466:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
08 10 2023 11:08:53.468:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 10 2023 11:08:53.471:INFO [launcher]: Starting browser Firefox
08 10 2023 11:08:54.731:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket 3GgEGZSkvLnO-Nn-AAAB with id 11093455
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
08 10 2023 11:08:55.166:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 11093455
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.032 secs)
08 10 2023 11:08:55.196:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:761 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.062 secs)
08 10 2023 11:08:55.237:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:801 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.075 secs)
08 10 2023 11:08:55.241:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:805 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.085 secs)
08 10 2023 11:08:55.253:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:818 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.098 secs / 0.085 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:831 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.098 secs / 0.085 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.08s.
```

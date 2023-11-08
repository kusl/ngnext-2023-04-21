```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
08 11 2023 12:40:12.306:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
08 11 2023 12:40:12.307:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 11 2023 12:40:12.310:INFO [launcher]: Starting browser Firefox
08 11 2023 12:40:13.531:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket jasaWQgK1wGzcHOBAAAB with id 14148466
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
08 11 2023 12:40:13.912:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 14148466
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.048 secs)
08 11 2023 12:40:13.956:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 48 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:661 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.067 secs)
08 11 2023 12:40:13.993:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:698 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.079 secs)
08 11 2023 12:40:13.999:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:703 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.085 secs)
08 11 2023 12:40:14.000:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:705 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.09 secs / 0.085 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:709 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.09 secs / 0.085 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.21s.
```

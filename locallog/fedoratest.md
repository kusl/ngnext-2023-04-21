```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
10 11 2023 10:19:10.558:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 11 2023 10:19:10.560:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 11 2023 10:19:10.562:INFO [launcher]: Starting browser Firefox
10 11 2023 10:19:11.783:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket mFu47CO2JAY6q1oMAAAB with id 24277880
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
10 11 2023 10:19:12.228:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 24277880
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.058 secs)
10 11 2023 10:19:12.294:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 58 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:746 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.078 secs)
10 11 2023 10:19:12.319:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:771 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
10 11 2023 10:19:12.332:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:784 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.108 secs)
10 11 2023 10:19:12.344:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:797 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.12 secs / 0.108 secs)
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

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:803 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.12 secs / 0.108 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.89s.
```

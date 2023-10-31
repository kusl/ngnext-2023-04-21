```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
30 10 2023 22:20:31.502:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 10 2023 22:20:31.504:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 10 2023 22:20:31.508:INFO [launcher]: Starting browser Firefox
30 10 2023 22:20:32.861:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket 2eLeaOcTnNxk1gJcAAAB with id 24537831
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
30 10 2023 22:20:33.345:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 24537831
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.034 secs)
30 10 2023 22:20:33.395:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:910 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.077 secs)
30 10 2023 22:20:33.429:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:944 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.096 secs)
30 10 2023 22:20:33.454:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:969 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
30 10 2023 22:20:33.473:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:989 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.131 secs / 0.114 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:994 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.131 secs / 0.114 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.31s.
```

```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
08 06 2023 10:27:13.502:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
08 06 2023 10:27:13.504:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 06 2023 10:27:13.507:INFO [launcher]: Starting browser Firefox
08 06 2023 10:27:14.780:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket rg0w7KffkfRBxCENAAAB with id 50639590
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
08 06 2023 10:27:15.241:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 50639590
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
08 06 2023 10:27:15.346:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 114 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:861 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.137 secs)
08 06 2023 10:27:15.371:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:885 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.173 secs)
08 06 2023 10:27:15.413:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:928 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.182 secs)
08 06 2023 10:27:15.432:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:947 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.192 secs / 0.182 secs)
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

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:950 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.192 secs / 0.182 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.10s.
```

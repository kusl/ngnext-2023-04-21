```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
27 11 2023 10:37:53.921:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
27 11 2023 10:37:53.922:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
27 11 2023 10:37:53.924:INFO [launcher]: Starting browser Firefox
27 11 2023 10:37:55.191:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket PbwRyAXJj6e5CkU0AAAB with id 12865477
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
27 11 2023 10:37:55.664:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 12865477
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.033 secs)
27 11 2023 10:37:55.701:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:791 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.077 secs)
27 11 2023 10:37:55.745:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:835 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.099 secs)
27 11 2023 10:37:55.771:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:861 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.12 secs)
27 11 2023 10:37:55.793:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:883 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.145 secs / 0.12 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:902 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.145 secs / 0.12 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.77s.
```

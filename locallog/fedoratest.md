```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
22 09 2023 16:16:20.910:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
22 09 2023 16:16:20.912:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 09 2023 16:16:20.915:INFO [launcher]: Starting browser Firefox
22 09 2023 16:16:22.232:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket Q2UwgwYl5W5F8aM7AAAB with id 62466266
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
22 09 2023 16:16:22.865:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 62466266
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.077 secs)
22 09 2023 16:16:22.944:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 77 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:46 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
22 09 2023 16:16:22.962:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:65 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.126 secs)
22 09 2023 16:16:22.989:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:91 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.134 secs)
22 09 2023 16:16:22.999:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:101 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.144 secs / 0.134 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:113 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.144 secs / 0.134 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.89s.
```

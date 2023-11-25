```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
25 11 2023 14:22:28.003:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 11 2023 14:22:28.004:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 11 2023 14:22:28.007:INFO [launcher]: Starting browser Firefox
25 11 2023 14:22:29.242:INFO [Firefox 120.0 (Linux x86_64)]: Connected on socket 1Hc9ViaVve7Z6C8DAAAB with id 63212478
Firefox 120.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
25 11 2023 14:22:29.611:INFO [Firefox 120.0 (Linux x86_64)]: Starting tests 63212478
[1A[2KFirefox 120.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.057 secs)
25 11 2023 14:22:29.671:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 57 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:694 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 120.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.074 secs)
25 11 2023 14:22:29.688:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:711 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 120.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.095 secs)
25 11 2023 14:22:29.707:INFO [Firefox 120.0 (Linux x86_64) | AppComponent | should render title]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:730 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.102 secs)
25 11 2023 14:22:29.730:INFO [Firefox 120.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:753 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.121 secs / 0.102 secs)
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

 - [1mFirefox 120.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:757 min/sec/ms


Firefox 120.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.121 secs / 0.102 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.90s.
```

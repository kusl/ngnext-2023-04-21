```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
21 05 2023 23:19:16.952:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 05 2023 23:19:16.954:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 05 2023 23:19:16.957:INFO [launcher]: Starting browser Firefox
21 05 2023 23:19:18.626:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket d-Z6WqFWW97nRdm3AAAB with id 12985859
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
21 05 2023 23:19:19.186:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 12985859
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.169 secs)
21 05 2023 23:19:19.337:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 169 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:397 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.197 secs)
21 05 2023 23:19:19.391:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:450 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.236 secs)
21 05 2023 23:19:19.412:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:471 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.248 secs)
21 05 2023 23:19:19.432:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:492 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.249 secs / 0.248 secs)
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
Elapsed Time: 0:2:497 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.249 secs / 0.248 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.13s.
```

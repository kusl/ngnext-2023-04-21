```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
17 11 2023 08:33:40.754:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 11 2023 08:33:40.756:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 11 2023 08:33:40.758:INFO [launcher]: Starting browser Firefox
17 11 2023 08:33:42.403:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket Bu8K8OA-LMr1vryVAAAB with id 60500177
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
17 11 2023 08:33:42.831:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 60500177
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.029 secs)
17 11 2023 08:33:42.855:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:111 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.059 secs)
17 11 2023 08:33:42.894:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:151 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.079 secs)
17 11 2023 08:33:42.913:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:169 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.095 secs)
17 11 2023 08:33:42.934:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:190 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.103 secs / 0.095 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:193 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.103 secs / 0.095 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.82s.
```

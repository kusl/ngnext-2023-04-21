```bash
yarn run v1.22.21
$ ng test --karma-config karma.conf.js
17 11 2023 07:15:48.755:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 11 2023 07:15:48.756:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 11 2023 07:15:48.758:INFO [launcher]: Starting browser Firefox
17 11 2023 07:15:50.044:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket CFWTJY7QqA-GMU9aAAAB with id 10032000
Firefox 119.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
17 11 2023 07:15:50.545:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 10032000
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.036 secs)
17 11 2023 07:15:50.593:INFO [Firefox 119.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:850 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.069 secs)
17 11 2023 07:15:50.636:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:892 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.087 secs)
17 11 2023 07:15:50.638:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:894 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
17 11 2023 07:15:50.669:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should render title]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:926 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.126 secs / 0.114 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
   * should render title : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:930 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.126 secs / 0.114 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 10.89s.
```

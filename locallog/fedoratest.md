```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
25 05 2023 06:18:44.994:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 05 2023 06:18:44.998:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 05 2023 06:18:45.001:INFO [launcher]: Starting browser Firefox
25 05 2023 06:18:46.389:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket 6LLp2Z8mfWRG-i7OAAAB with id 47989280
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
25 05 2023 06:18:46.772:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 47989280
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.063 secs)
25 05 2023 06:18:46.825:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 63 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:851 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.114 secs)
25 05 2023 06:18:46.882:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:908 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.132 secs)
25 05 2023 06:18:46.911:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:938 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.157 secs)
25 05 2023 06:18:46.922:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:949 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.159 secs / 0.157 secs)
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

 - [1mFirefox 113.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:961 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.159 secs / 0.157 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.72s.
```

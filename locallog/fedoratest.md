```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
20 07 2023 14:00:46.678:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
20 07 2023 14:00:46.680:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 07 2023 14:00:46.683:INFO [launcher]: Starting browser Firefox
20 07 2023 14:00:48.063:INFO [Firefox 115.0 (Linux x86_64)]: Connected on socket sVAgqBuDqzrirAtRAAAB with id 10549513
Firefox 115.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
20 07 2023 14:00:48.502:INFO [Firefox 115.0 (Linux x86_64)]: Starting tests 10549513
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.117 secs)
20 07 2023 14:00:48.604:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 117 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:937 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.155 secs)
20 07 2023 14:00:48.639:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should render title]: Success: 38 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:972 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.173 secs)
20 07 2023 14:00:48.657:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:990 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.184 secs)
20 07 2023 14:00:48.674:INFO [Firefox 115.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:7 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.173 secs / 0.184 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 115.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:11 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.173 secs / 0.184 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 16.70s.
```

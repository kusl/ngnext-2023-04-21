```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
13 09 2023 11:26:05.705:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
13 09 2023 11:26:05.707:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 09 2023 11:26:05.709:INFO [launcher]: Starting browser Firefox
13 09 2023 11:26:06.967:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket 5uXvzswfSyzuRerFAAAB with id 69277596
Firefox 117.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
13 09 2023 11:26:07.484:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 69277596
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.041 secs)
13 09 2023 11:26:07.533:INFO [Firefox 117.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:841 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.082 secs)
13 09 2023 11:26:07.573:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:880 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.112 secs)
13 09 2023 11:26:07.603:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should render title]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:911 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.13 secs)
13 09 2023 11:26:07.625:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:932 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.151 secs / 0.13 secs)
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

 - [1mFirefox 117.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:944 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.151 secs / 0.13 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 17.00s.
```

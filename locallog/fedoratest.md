```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
30 06 2023 07:14:03.954:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 06 2023 07:14:03.956:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 06 2023 07:14:03.959:INFO [launcher]: Starting browser Firefox
30 06 2023 07:14:05.786:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket P7ZjYoMp74hscFU6AAAB with id 57909520
Firefox 114.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
30 06 2023 07:14:06.083:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 57909520
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.063 secs)
30 06 2023 07:14:06.150:INFO [Firefox 114.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 63 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:209 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.108 secs)
30 06 2023 07:14:06.207:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:266 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.129 secs)
30 06 2023 07:14:06.229:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:288 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.153 secs)
30 06 2023 07:14:06.273:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should render title]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:333 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.191 secs / 0.153 secs)
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

 - [1mFirefox 114.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:2:336 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.191 secs / 0.153 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.42s.
```

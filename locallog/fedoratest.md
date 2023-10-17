```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
16 10 2023 22:06:38.082:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
16 10 2023 22:06:38.084:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 10 2023 22:06:38.087:INFO [launcher]: Starting browser Firefox
16 10 2023 22:06:39.311:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket CQH2_6kLywCY6AvhAAAB with id 73630976
Firefox 118.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
16 10 2023 22:06:39.806:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 73630976
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.056 secs)
16 10 2023 22:06:39.876:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should render title]: Success: 56 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:807 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.074 secs)
16 10 2023 22:06:39.889:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:821 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.088 secs)
16 10 2023 22:06:39.904:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:835 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.098 secs)
16 10 2023 22:06:39.915:INFO [Firefox 118.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:847 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.111 secs / 0.098 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m
   * should create the app : [32mok[39m
 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:852 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.111 secs / 0.098 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 7.22s.
```

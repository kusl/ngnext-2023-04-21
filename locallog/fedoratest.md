```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
04 05 2023 07:48:07.226:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
04 05 2023 07:48:07.228:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 05 2023 07:48:07.231:INFO [launcher]: Starting browser Firefox
04 05 2023 07:48:08.452:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket bxUSxOg6Pp6RG36UAAAB with id 72605615
Firefox 112.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
04 05 2023 07:48:08.746:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 72605615
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.06 secs)
04 05 2023 07:48:08.817:INFO [Firefox 112.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 60 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:602 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.118 secs)
04 05 2023 07:48:08.878:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should render title]: Success: 58 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:663 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.139 secs)
04 05 2023 07:48:08.905:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:690 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.157 secs)
04 05 2023 07:48:08.931:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:717 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.186 secs / 0.157 secs)
[32mTOTAL: 4 SUCCESS[39m
TOTAL: 4 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNameEditorComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should render title : [32mok[39m
   * should create the app : [32mok[39m
   * should have as title 'ngnext-2023-04-21' : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:720 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.186 secs / 0.157 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.62s.
```

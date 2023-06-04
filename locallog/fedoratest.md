```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
03 06 2023 22:48:27.420:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
03 06 2023 22:48:27.422:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 06 2023 22:48:27.426:INFO [launcher]: Starting browser Firefox
03 06 2023 22:48:28.735:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket XRYRJO9gNq-xaSFhAAAB with id 56189552
Firefox 113.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
03 06 2023 22:48:29.165:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 56189552
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.085 secs)
03 06 2023 22:48:29.265:INFO [Firefox 113.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 85 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:862 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.145 secs)
03 06 2023 22:48:29.318:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 60 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:915 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.169 secs)
03 06 2023 22:48:29.333:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:931 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.199 secs)
03 06 2023 22:48:29.365:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should render title]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:963 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.204 secs / 0.199 secs)
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
Elapsed Time: 0:1:969 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.204 secs / 0.199 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 15.81s.
```

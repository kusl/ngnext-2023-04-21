```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
01 09 2023 20:15:52.412:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
01 09 2023 20:15:52.414:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
01 09 2023 20:15:52.417:INFO [launcher]: Starting browser Firefox
01 09 2023 20:15:53.611:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket oGYeihbUGR0cJcaiAAAB with id 61413343
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
01 09 2023 20:15:54.098:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 61413343
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.058 secs)
01 09 2023 20:15:54.156:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 58 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:757 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.076 secs)
01 09 2023 20:15:54.182:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:783 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.099 secs)
01 09 2023 20:15:54.202:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:802 min/sec/ms[22m[39m
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.107 secs)
01 09 2023 20:15:54.215:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:816 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.121 secs / 0.107 secs)
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

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:821 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.121 secs / 0.107 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 17.02s.
```

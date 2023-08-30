```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
30 08 2023 10:18:27.033:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 08 2023 10:18:27.035:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 08 2023 10:18:27.037:INFO [launcher]: Starting browser Firefox
30 08 2023 10:18:28.249:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket 3O9mR55SAFKCC3QhAAAB with id 83819659
Firefox 116.0 (Linux x86_64): Executed 0 of 4[32m SUCCESS[39m (0 secs / 0 secs)
30 08 2023 10:18:28.635:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 83819659
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 4[32m SUCCESS[39m (0 secs / 0.054 secs)
30 08 2023 10:18:28.699:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should render title]: Success: 54 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:681 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould render title
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 4[32m SUCCESS[39m (0 secs / 0.07 secs)
30 08 2023 10:18:28.712:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should have as title 'ngnext-2023-04-21']: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:693 min/sec/ms[22m[39m
    [32m✓ [39mshould have as title 'ngnext-2023-04-21'
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 4[32m SUCCESS[39m (0 secs / 0.087 secs)
30 08 2023 10:18:28.731:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:712 min/sec/ms[22m[39m
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0 secs / 0.094 secs)
30 08 2023 10:18:28.740:INFO [Firefox 116.0 (Linux x86_64) | NameEditorComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:722 min/sec/ms[22m[39m

  NameEditorComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.111 secs / 0.094 secs)
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

 - [1mFirefox 116.0 (Linux x86_64)[22m: 4 tests
   - [32m4 ok[39m
Elapsed Time: 0:1:731 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 4 of 4[32m SUCCESS[39m (0.111 secs / 0.094 secs)
[32mTOTAL: 4 SUCCESS[39m

Done in 6.86s.
```

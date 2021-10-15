# security dmeo
* 需要下载Parallel 包
* ``` sudo apt install paraller ```
* 测试命令：
* ```  cat test.sh | parallel -j 2 ```
* 测试完后需要Reset， 否则就需要记住之前的状态。 初始状态globalVal 值为 3
* 查询globalval命令：
* ``` dfx canister --network ic call main getVal ```
* reset globalVal 命令：
* ``` dfx canister --network ic call main reset ```

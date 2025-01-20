const express = require("express"); //expressを使う
const app = express(); //expressでアプリを起動

const port = process.env.PORT || 3000;
// GETメソッドが来た時の処理
//"/" = ルート
app.get("/fib", (req, res) => {
    //クエリパラメータnの取得
    const n = req.query.n

    //フィボナッチ数を計算
    const result = fibonacci(n)

    //jsonの返却
    res.json({
        //フィボナッチ数を返す
        result: result.toString()
    })
});

//サーバの構築
app.listen(port, () => {
    console.log("サーバ構築完了");
});

/*
//フィボナッチ数を計算する関数
const memo = {}
function fibonacci(n){
    //フィボナッチ数を計算
    if(n === 1 || n === 2){
        return BigInt(1);
    } 
    if(n in memo){
        return memo[n]
    }else{
        memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return memo[n]
    }
        //再起を利用して計算
        //return fibonacci(n - 1) + fibonacci(n - 2);



}
*/
function fibonacci(n) {
    // 入力をBigInt型に変換
    n = BigInt(n);

    // フィボナッチ数の基底ケース
    if (n === 1n || n === 2n) {
        return 1n;
    }

    // 初期値
    let prev1 = 1n; // F(1)
    let prev2 = 1n; // F(2)
    let current = 0n;

    // ループで計算
    for (let i = 3n; i <= n; i++) {
        current = prev1 + prev2; // F(n) = F(n-1) + F(n-2)
        prev2 = prev1; // 更新
        prev1 = current; // 更新
    }

    return current;
}
const express = require("express"); //expressを使う
const app = express(); //expressでアプリを起動
const fibonacci = require("./fibonacci") 
const checkQuery = require("./checkquery")

// GETメソッドが来た時の処理
//"/" = ルート
app.get("/fib", (req, res) => {
    //クエリパラメータnの取得
    const n = req.query.n;

    const  check_n = checkQuery(n)

    if(check_n === false){
        return res.status(400).json({
            "status": 400,
            "message": "Bad request"
        });
    }
   

    //フィボナッチ数を計算
    const result = fibonacci(n)

    //正常なjsonの返却
    res.json({
        //フィボナッチ数を返す
        result: result.toString()
    })
});

//サーバの構築
// テスト環境では listen を実行しない
if(process.env.NODE_ENV !== 'test') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}


module.exports = app;

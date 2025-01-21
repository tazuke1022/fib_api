const request = require("supertest"); //supertest →HTTPリクエストのテストに特化したツール
const app = require("./index"); // index.jsをインポート

describe ("fib_test", () => {
//テストブロック
//非同期処理：主にHTTPリクエストの処理を行うをする際に使用：この処理が終わらなくても他の処理を実行できる処理
    it ("test1", async () => {
        //1.HTTPリクエストをおくる
        //2.レスポンスを受け取る
        const response = await request(app).get("/fib").query({n : 10});
        //3.レスポンスの値が期待する値と（自分で指定する）一致するか
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ result: "55" });
    });

    //入力が文字列の場合
    it ("test2", async () => {
        const response = await request(app).get("/fib").query({n : "abc"});
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual({ 
            "status": 400,
            "message": "Bad request"
         });
    });

    //入力がマイナスの時
    it ("test3", async () => {
        const response = await request(app).get("/fib").query({n : "-1"});
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual({ 
            "status": 400,
            "message": "Bad request"
         });

    });

    //入力が少数の時
    it ("test4", async () => {
        const response = await request(app).get("/fib").query({n : "1.5"});
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual({ 
            "status": 400,
            "message": "Bad request"
         });

    });

    //入力が文字列＋数の時
    it ("test5", async () => {
        const response = await request(app).get("/fib").query({n : "123abc"});
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual({ 
            "status": 400,
            "message": "Bad request"
         });

    });


    //入力が大きい値の場合
    it ("test6", async () => {
        const response = await request(app).get("/fib").query({n : "1000"});
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ 
            result: "43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875"
         });

    });
 

});


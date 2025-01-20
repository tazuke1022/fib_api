//フィボナッチ数を計算する関数
function fibonacci(n){
    //フィボナッチ数を計算
    if(n === 1){
        return 1;
    } else if (n === 2){
        return 1;
    } else{
        //再起を利用して計算
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
}



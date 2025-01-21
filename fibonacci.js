function fibonacci(n) {
    n = BigInt(n); // nをBigInt型に変換（大きな数を扱うため）

    // 行列の掛け算を行う関数
    function matrixMultiply(a, b) {
        return [
            // 行列の掛け算: a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]
            [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
            [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
        ];
    }

    // 行列の累乗を計算する関数
    function matrixPower(matrix, power) {
        let result = [
            [1n, 0n], // 単位行列（最初の結果として使う）
            [0n, 1n]
        ];

        // powerが0より大きい間、累乗を繰り返す
        while (power > 0n) {
            if (power % 2n === 1n) {
                result = matrixMultiply(result, matrix); // powerが奇数のときは、resultにmatrixを掛ける
            }
            matrix = matrixMultiply(matrix, matrix); // matrixを自分自身と掛ける
            power /= 2n; // powerを半分にする
        }
        return result; // 最終的に計算された行列を返す
    }

    // フィボナッチ数列の最初の値
    if (n === 1n) return 1n; // F(1)は1

    const baseMatrix = [
        [1n, 1n], // フィボナッチ数列に対応する行列
        [1n, 0n]
    ];

    // n-1回累乗した結果行列を取得
    const resultMatrix = matrixPower(baseMatrix, n - 1n);
    
    // 行列の[0][0]要素がF(n)に相当するので、それを返す
    return resultMatrix[0][0];
}

module.exports = fibonacci; // この関数を外部に公開


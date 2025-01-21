/*
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
    */
function fibonacci(n) {
    n = BigInt(n);

    // 行列累乗を使用してフィボナッチ数を計算
    function matrixMultiply(a, b) {
        return [
            [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
            [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
        ];
    }

    function matrixPower(matrix, power) {
        let result = [
            [1n, 0n],
            [0n, 1n]
        ]; // 単位行列

        while (power > 0n) {
            if (power % 2n === 1n) {
                result = matrixMultiply(result, matrix);
            }
            matrix = matrixMultiply(matrix, matrix);
            power /= 2n;
        }
        return result;
    }

    if (n === 1n) return 1n;

    const baseMatrix = [
        [1n, 1n],
        [1n, 0n]
    ];

    const resultMatrix = matrixPower(baseMatrix, n - 1n);
    return resultMatrix[0][0]; // F(n) を返す
}


module.exports = fibonacci;


//大規模な開発に対応できるように、フィボナッチ関数を別ファイルで作成
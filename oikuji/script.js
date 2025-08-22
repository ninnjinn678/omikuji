function omikujishow() {
    // 3種類の画像を配列に用意
    var omikujiImages = [
        "おみくじ-2_01 小-03.png",   // 大吉
        "おみくじ-2_01 小-04.png",  // 中吉
        "おみくじ-2_01 小-05.png"   // 小吉
    ];

    // 0〜2のランダムな整数を取得
    var number = Math.floor(Math.random() * omikujiImages.length);

    // 画像を切り替える
    var resultImage = document.getElementById("resultImage");
    resultImage.src = omikujiImages[number];
}
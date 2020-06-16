//You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candles are of height  and there are  such candles.


function birthdayCakeCandles(ar) {
    let max = 0
    let count = 0
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i]
        }
    }
    for (let j = 0; j < ar.length; j++) {
        if (ar[j] == max) {
            count++
            console.log(count)
        }
    }
    return count
}
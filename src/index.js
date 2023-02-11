// You should implement your task here.

module.exports = function towelSort(arr) {
    const result = [];
    if (arr == null) {
        return [];
    }
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            let n = arr[i].length;

            for (n = 0; n < arr[i].length; n++) {
                result.push(arr[i][n]);
            }
        } else {
            for (n = arr[i].length - 1; 0 <= n; n--) {
                result.push(arr[i][n]);
            }
        }
    }
    return result;
};

const beautifyNumber = (num) => {
    let numStr = num.toString();
    let rHalf,
        lHalf,
        amountToSlice = 2;

    if (numStr.split('').length > 5) {
        amountToSlice = 3;
    }

    rHalf = numStr.slice(amountToSlice);
    lHalf = numStr.slice(0, amountToSlice);
    numStr = `${lHalf},${rHalf}`;

    return numStr;
};

export { beautifyNumber };

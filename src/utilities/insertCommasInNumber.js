const insertCommasInNumber = (number) => {
    // Convert the number to a string
    const numberString = number.toString();

    // Split the string into integer and decimal parts (if any)
    const numberStringArr = numberString.split('.');

    // Regex to insert commas, as thousands separators
    numberStringArr[0] = numberStringArr[0].replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ',',
    );

    // Join the integer and decimal parts (if any)
    return numberStringArr.join('.');
};

export { insertCommasInNumber };

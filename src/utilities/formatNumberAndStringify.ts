const formatNumberAndStringify = (number: number): string => {
    return new Intl.NumberFormat().format(number);
};

export { formatNumberAndStringify };

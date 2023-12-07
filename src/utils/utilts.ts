export const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
        return `${str.substring(0, maxLength - 3)}...`;
    }
    return str;
};

export default { truncateString };

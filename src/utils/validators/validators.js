export const required = value => {
    return !value && "Field is required";
}

export const maxLengthCreator = length => value => {
    return value.length > length && `Max length is ${length} symbols`;
}
export const errorCodeResponses = {
    500: "An error occurred. Please try again!"
}

export const isFieldAbsent = (fields) => {
    let fieldAbsent = false;

    for (let field of fields) {
        if (!field.value) {
            fieldAbsent = field;
            break;
        }
    }
    return fieldAbsent;
}
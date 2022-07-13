import {supabase} from "./models/index.js";

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

export const createBucket = async (bucketName) => {
    const {data, error} = await supabase.storage.getBucket(bucketName);

    if (error) {
        const {data, error} = await supabase.storage.createBucket('avatars');
        if (error) {
            return {error: error};
        }
        return {success: data};
    } else {
        return {success: data};
    }
}
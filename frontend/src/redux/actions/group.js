export const CREATE_GROUP = "CREATE_GROUP";
export const CREATE_GROUP_RESPONSE = "CREATE_GROUP_RESPONSE";

export const createGroup = (groupData) => ({
    type: CREATE_GROUP,
    groupData
});

export const createGroupResponse = (response) => ({
    type: CREATE_GROUP_RESPONSE,
    response
});
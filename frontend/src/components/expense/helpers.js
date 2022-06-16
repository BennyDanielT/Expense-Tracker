// https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page

import {useRef} from "react";

export function getBase64Image(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

export const dummyMembersData = [
    {
        label: "Will Smith",
        value: "will smith"
    },
    {
        label: "Johnny Depp",
        value: "johnny depp"
    },
    {
        label: "Agastha Christie",
        value: "agastha christie"
    }
];

export const dummyGroupData = [
    {
        label: "Group 1",
        value: "group 1"
    },
    {
        label: "Group 2",
        value: "group 2"
    },
    {
        label: "Group 3",
        value: "group 3"
    }
];

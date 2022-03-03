import getSkinCareData from "./getSkinCareData"

function getSkicareByIndex(index) {

    const skincare = getSkinCareData()

    return skincare[index]
}

export default getSkicareByIndex
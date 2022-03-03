import getFragrencesData from "./getFragrencesData"

function getPerfumeByIndex(index) {

    const perfumes = getFragrencesData()

    return perfumes[index]
}

export default getPerfumeByIndex
import getMakeupData from "./getMakeupData"

function getMakeupByIndex(index) {

    const makeup = getMakeupData()

    return makeup[index]
}

export default getMakeupByIndex
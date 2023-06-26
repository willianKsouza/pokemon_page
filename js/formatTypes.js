export default function formatTypes(dataType) {
    if (Array.isArray(dataType)) {
        return dataType.map(item => item.type.name).join('/')
    }
    const { types } = dataType
    return types.map(item => item.type.name).join('/')

    // if (dataType.types.length === 2) {
    //  return `${dataType.types[0].type.name}/${dataType.types[1].type.name}` 
    // }else {
    //     return `${dataType.types[0].type.name}` 
    // }
}
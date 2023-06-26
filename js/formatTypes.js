export default function formatTypes(dataType) {
    if (Array.isArray(dataType)) {
        return dataType.map(item => item.type.name).join('/')
    }
    const { types } = dataType
    return types.map(item => item.type.name).join('/')
}
const fs = require('fs')

const addRespons = (hex, response, userId, _data) => {
const obj = {
hex: hex,
balasan: response,
creator: userId
}
_data.push(obj)
fs.writeFileSync('./database/respon.json', JSON.stringify(_data))

return true
}

const deleteRespons = (command, _data) => {
Object.keys(_data).forEach((i) => {
if (_data[i].hex === command) {
_data.splice(i, 1)
fs.writeFileSync('./database/respon.json', JSON.stringify(_data))
}
})
return true
}

const checkRespons = (commands, _data) => {
let status = false
Object.keys(_data).forEach((i) => {
if (_data[i].hex === commands) {
status = true
}
})

return status
}



module.exports = {
    addRespons,
    deleteRespons,
    checkRespons
}
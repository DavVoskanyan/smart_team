const Characteristic = require('../models/characteristic.model');

class CharacteristicRepository {
    static async getOneCharacteristic(searchParamsObject) {
        return await Characteristic.findOne({where: searchParamsObject});
    }
    static async getAllCharacteristics(searchParamsObject) {
        return await Characteristic.findAll({where: searchParamsObject});
    }
    static async createCharacteristic(characteristicDto) {
        await Characteristic.create(characteristicDto);
    }
    static async updateCharacteristic(searchParamsObject, updateParamsObject) {
        let characteristic = await Characteristic.findOne({where: searchParamsObject});
        await characteristic.update(updateParamsObject);
    }
    static async deleteCharacteristicById(characteristicId) {
        let characteristic = await Characteristic.findOne({where: {id: characteristicId}});
        await characteristic.update({ is_deleted: true, deletion_date: new Date() });
    }
}

module.exports = CharacteristicRepository;
const Interest = require('../models/interest.model');

class InterestRepository {
    static async getOneInterest(searchParamsObject) {
        return await Interest.findOne({where: searchParamsObject});
    }
    static async getAllInterests(searchParamsObject) {
        return await Interest.findAll({where: searchParamsObject});
    }
    static async createInterest(interestDto) {
        await Interest.create(interestDto);
    }
    static async updateInterest(searchParamsObject, updateParamsObject) {
        let interest = await Interest.findOne({where: searchParamsObject});
        await interest.update(updateParamsObject);
    }
    static async deleteInterestById(interestId) {
        let interest = await Interest.findOne({where: {id: interestId}});
        await interest.update({is_deleted: true, deletion_date: new Date()});
    }
}

module.exports = InterestRepository;
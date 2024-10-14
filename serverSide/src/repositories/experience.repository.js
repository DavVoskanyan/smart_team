const Experience = require('../models/experience.model');

class ExperienceRepository {
    static async getAllExperiences(searchParamsObject) {
        return await Experience.findAll({where: searchParamsObject});
    }
    static async createExperience(experienceDto) {
        await Experience.create(experienceDto);
    }
    static async updateExperience(searchParamsObject, updateParamsObject) {
        let experience = await Experience.findOne({where: searchParamsObject});
        await experience.update(updateParamsObject);
    }
    static async deleteExperienceById(experienceId) {
        let experience = await Experience.findOne({where: {id: experienceId}});
        await experience.update({is_deleted: true, deletion_date: new Date()});
    }
}

module.exports = ExperienceRepository;
const Sequelize = require("sequelize");

const authenticationService = require('../services/authenticationService');
const ResponseStatusCodeService = require("../services/ResponseStatusCodeService");

const UserForm = require('../forms/UserForm');
const InterestForm = require('../forms/InterestForm');
const CharacteristicForm = require('../forms/CharacteristicForm');
const ExperienceForm = require('../forms/ExperienceForm');

const UserRepository = require('../repositories/user.repository');
const InterestRepository = require('../repositories/interest.repository');
const CharacteristicRepository = require('../repositories/characteristic.repository');
const ExperienceRepository = require('../repositories/experience.repository');


class UsersController {
    static getUserById = async (req, res) => {
        let user = await UserRepository.getOneUser({id: parseInt(req.params.id)});
        let responseStatus = !!user
            ? ResponseStatusCodeService.OK
            : ResponseStatusCodeService.NOT_FOUND;

        return res
            .status(responseStatus)
            .json(user)
    }
    static getUserByEmail = async (req, res) => {
        let user = await UserRepository.getOneUser({email: req.params.email});
        let responseStatus = !!user
            ? ResponseStatusCodeService.OK
            : ResponseStatusCodeService.NOT_FOUND;

        return res
            .status(responseStatus)
            .json(user);
    }
    static getUsersByCompanyId = async (req, res) => {
        // let usersArray = UserRepository.getAllUsers({company_id: })
    }
    static getUsersByDepartmentId = async (req, res) => {}
    static getUserCharacteristicsByUserId = async (req, res) => {
        let characteristics = await CharacteristicRepository.getAllCharacteristics({user_id: Number(req.params.id)});

        let responseStatus = characteristics.length
            ? ResponseStatusCodeService.OK
            : ResponseStatusCodeService.NOT_FOUND;

        return res
            .status(responseStatus)
            .json(characteristics);
    }
    static getUserInterestsByUserId = async (req, res) => {
        let interests = await InterestRepository.getAllInterests({user_id: req.params.id});

        let responseStatus = interests.length
            ? ResponseStatusCodeService.OK
            : ResponseStatusCodeService.NOT_FOUND;

        return res
            .status(responseStatus)
            .json(interests);
    }
    static getUserExperiencesByUserId = async (req, res) => {
        let experiences = await ExperienceRepository.getAllExperiences({user_id: req.params.id});

        let responseStatus = experiences.length
            ? ResponseStatusCodeService.OK
            : ResponseStatusCodeService.NOT_FOUND;

        return res
            .status(responseStatus)
            .json(experiences);
    }

    static createUserCharacteristic = async (req, res) => {
        let characteristicFormInstance = new CharacteristicForm();
        characteristicFormInstance.loadData(req.body);

        if(!characteristicFormInstance.validate()) {
            return res
                .status(ResponseStatusCodeService.INVALID_DATA_PROVIDED)
                .json({message: 'Invalid data provided'});
        }

        await CharacteristicRepository.createCharacteristic(characteristicFormInstance.getDto());
        return res
            .status(ResponseStatusCodeService.OK)
            .json({status: true, message: 'Characteristic created successfully'});
    }
    static createUserInterest = async (req, res) => {
        let interestFormInstance = new InterestForm();
        interestFormInstance.loadData(req.body);

        if(!interestFormInstance.validate()) {
            return res
                .status(ResponseStatusCodeService.INVALID_DATA_PROVIDED)
                .json({message: 'Invalid data provided'});
        }

        await InterestRepository.createInterest(interestFormInstance.getDto());
        return res
            .status(ResponseStatusCodeService.OK)
            .json({status: true, message: 'Interest created successfully'});
    }
    static createUserExperience = async (req, res) => {
        let experienceFormInstance = new ExperienceForm();
        experienceFormInstance.loadData(req.body);

        if(!experienceFormInstance.validate()) {
            return res
                .status(ResponseStatusCodeService.INVALID_DATA_PROVIDED)
                .json({message: 'Invalid data provided'});
        }

        await ExperienceRepository.createExperience(experienceFormInstance.getDto());
        return res
            .status(ResponseStatusCodeService.OK)
            .json({status: true, message: 'Experience created successfully'});
    }

    static changeUserCharacteristic = async (req, res) => {
        await CharacteristicRepository.updateCharacteristic(
            {id: req.body.id},
            {title: req.body.title}
        );
        return res
            .status(ResponseStatusCodeService.OK)
            .json({message: 'Characteristic updated successfully'});
    }
    static changeUserInterest = async (req, res) => {
        await InterestRepository.updateInterest(
            {id: req.body.id},
            {title: req.body.title}
        );
        return res
            .status(ResponseStatusCodeService.OK)
            .json({message: 'Interest updated successfully'});
    }
    static changeUserExperience = async (req, res) => {
        await ExperienceRepository.updateExperience(
            {id: req.body.id},
            {
                title: req.body.title,
                position: req.body.position,
                work_start_date: req.body.work_start_date
            }
        );
        return res
            .status(ResponseStatusCodeService.OK)
            .json({message: 'Interest updated successfully'});
    }

    static deleteUserCharacteristicById = async (req, res) => {
        await CharacteristicRepository.deleteCharacteristicById(req.params.id);
        return res
            .status(ResponseStatusCodeService.OK)
            .json({message: 'Characteristic deleted successfully'});
    }
    static deleteUserInterestById = async (req, res) => {
        await InterestRepository.deleteInterestById(req.params.id);
        return res
            .status(ResponseStatusCodeService.OK)
            .json({message: 'Interest deleted successfully'})
    }
    static deleteUserExperienceById = async (req, res) => {
        await ExperienceRepository.deleteExperienceById(req.params.id);
        return res
            .status(ResponseStatusCodeService.OK)
            .json({message: 'Experience deleted successfully'})
    }
}

module.exports = UsersController;
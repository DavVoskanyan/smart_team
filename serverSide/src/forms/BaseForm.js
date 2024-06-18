class BaseForm {
    propertiesForDto = [];
    rules = {
        regexpValidation: [ ],
        requiredValidation: [ ]
    }

    loadData = (dto) => {
        Object.keys(dto).forEach(dtoKey => {
            this[dtoKey] = dto[dtoKey];
        });
    }

    validate = () => {
        let validationResult = true;

        this.rules.regexpValidation.forEach(rule => {
            if(rule.regex.test(this[rule.field])) { validationResult = false; }
        });
        this.rules.requiredValidation.forEach(requiredField => {
            if(!this[requiredField] || this[requiredField].trim() === '') { validationResult = false; }
        });

        return validationResult;
    }
    getDto = () => {
        let resultDto = {};
        this.propertiesForDto.forEach(property => resultDto[property] = this[property]);
        return resultDto;
    }
}

module.exports = BaseForm;
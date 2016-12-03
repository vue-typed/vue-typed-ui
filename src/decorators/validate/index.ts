import { ValidatorPropNameTmp } from './../../consts';

export function Validate(options): PropertyDecorator {

	return function (target: Object, key: string) {
		if (!target[ValidatorPropNameTmp]) {
			target[ValidatorPropNameTmp] = {}
		}

		var validate = {
			identifier: key,
			rules: [options]
		}

		if (target[ValidatorPropNameTmp][key]) {
			target[ValidatorPropNameTmp][key].rules.push(options)
		} else {
			target[ValidatorPropNameTmp][key] = validate
		}
	}

}
import * as _ from 'lodash'

export class Util {
	// http://stackoverflow.com/a/18368918/1586914
	static jsToString(obj) {
		//create an array that will later be joined into a string.
		var string = [];

		//is object
		//    Both arrays and objects seem to return "object"
		//    when typeof(obj) is applied to them. So instead
		//    I am checking to see if they have the property
		//    join, which normal objects don't have but
		//    arrays do.
		if (obj == undefined) {
			return String(obj);
		} else if (typeof (obj) == "object" && (obj.join == undefined)) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop))
					string.push(prop + ": " + this.jsToString(obj[prop]));
			};
			return "{" + string.join(",") + "}";

			//is array
		} else if (typeof (obj) == "object" && !(obj.join == undefined)) {
			for (var prop in obj) {
				string.push(this.jsToString(obj[prop]));
			}
			return "[" + string.join(",") + "]";

			//is function
		} else if (typeof (obj) == "function") {
			string.push(obj.toString())

			//all other values can be done with JSON.stringify
		} else {
			string.push(JSON.stringify(obj))
		}

		return string.join(",");
	}

	static upperFirst(str: string): string {
		return _.upperFirst(str);
	}

	static merge(obj: Object, src: Object) {
		return _.mergeWith(obj, src, function(objVal, srcVal) {
			if (_.isArray(objVal)) {
				return objVal.concat(srcVal);
			}
		})
	}

}
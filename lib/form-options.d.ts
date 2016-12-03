import { Vue } from 'vue/types/vue';
import { ComponentOptions } from 'vue/types/options'



export interface FormOptions extends ComponentOptions<Vue> {
	/**
	 * Validation success handler
	 * 
	 * @type {string}
	 * @memberOf FormOptions
	 */
		onSuccess?: string


	/**
	 * Validation error handler
	 * 
	 * @type {string}
	 * @memberOf FormOptions
	 */
		onError?: string


	/**
	 * Inline validation?
	 * 
	 * @type {boolean}
	 * @memberOf FormOptions
	 */
		validateInline?: boolean


		/**
		 * Replace root template
		 * 
		 * @type {boolean}
		 * @memberOf FormOptions
		 */
		replace?: boolean

		/**
		 * CSS class for generated form
		 * 
		 * @type {string}
		 * @memberOf FormOptions
		 */
		class? : string
}

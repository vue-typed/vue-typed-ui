/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop,
    Virtual,
    Mixin
} from "vue-typed"
import * as Vue from "vue"
export class _FormBase extends Virtual < Vue > () {

    /**
     * Fields validation object. See: http://semantic-ui.com/behaviors/form.html#specifying-validation-rules
     * 
     * @type {any}
     */
    @Prop()
    validator: any

    /**
     * Show validation message inline
     * 
     * @type {boolean}
     */
    @Prop({
        type: Boolean
    })
    validateInline: boolean

    /**
     * Width of fields label when displayed 'inline'.
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    labelWidth: string

    /**
     * Adds keyboard shortcut for enter key to submit form
     * 
     * @default true
     * @type {boolean}
     */
    @Prop({
        type: Boolean,
        default: true
    })
    keyboardShortcuts: boolean

}
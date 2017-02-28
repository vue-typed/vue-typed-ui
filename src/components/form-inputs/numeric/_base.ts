/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    FieldBase
} from "../../fields/field-base"
import {
    Prop,
    Virtual,
    Mixin
} from "vue-typed"
import * as Vue from "vue"
export class _NumericBase extends Mixin(FieldBase) {

    /**
     * Input element name
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    name: string

    /**
     * Input element placeholder
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    placeholder: string

    /**
     * v-model binding
     * 
     * @type {any}
     */
    @Prop()
    value: any

    /**
     * Thousands group separator
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    groupSeparator: string

    /**
     * Decimal group separator
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    decimalSeparator: string

    /**
     * Number of decimal places
     * 
     * @type {number}
     */
    @Prop({
        type: Number
    })
    decimalPlaces: number

    /**
     * Minimum value allowed
     * 
     * @type {number}
     */
    @Prop({
        type: Number
    })
    min: number

    /**
     * Maximum value allowed
     * 
     * @type {number}
     */
    @Prop({
        type: Number
    })
    max: number

    /**
     * Take only integer value
     * 
     * @default false
     * @type {boolean}
     */
    @Prop({
        type: Boolean,
        default: false
    })
    integer: boolean

    /**
     * Select text when receive focus
     * 
     * @default true
     * @type {boolean}
     */
    @Prop({
        type: Boolean,
        default: true
    })
    selectOnFocus: boolean

}
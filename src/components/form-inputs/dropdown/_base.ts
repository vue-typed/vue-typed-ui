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
export abstract class _DropdownBase extends FieldBase {

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
     * A selection dropdown can allow a user to search through a large list of choices.
     * 
     * @type {boolean}
     */
    @Prop({
        type: Boolean
    })
    search: boolean

    /**
     * A selection dropdown can allow multiple selections
     * 
     * @type {boolean}
     */
    @Prop({
        type: Boolean
    })
    multiple: boolean

    /**
     * Semantic UI dropdown settings. See: https://semantic-ui.com/modules/dropdown.html#/settings
     * 
     * @type {object}
     */
    @Prop({
        type: Object
    })
    settings: object

}


export enum _DropdownEvents {
    /**
     * Callback when selected item has been change
     */
    change = "change"
}
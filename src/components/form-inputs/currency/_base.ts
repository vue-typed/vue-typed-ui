/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop,
    Virtual
} from "vue-typed"
import {
    Numeric
} from "../numeric"

export abstract class _CurrencyBase extends Numeric {

    /**
     * Currency sign
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    sign: string

    /**
     * Currency sign position
     * 
     * @type {'left' | 'right'}
     */
    @Prop()
    signPos: 'left' | 'right'

}
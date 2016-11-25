/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop
} from "vue-typed"
import * as Vue from "vue"

export abstract class _FieldBaseBase extends Vue {

    /**
     * Field label text
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    label: string

    /**
     * Size of field
     * 
     * @type {number}
     */
    @Prop({
        type: Number
    })
    wide: number

    /**
     * Field layout style
     * 
     * @type {'default' | 'grouped' | 'inline'}
     */
    @Prop()
    kind: 'default' | 'grouped' | 'inline'

}
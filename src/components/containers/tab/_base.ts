/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop
} from "vue-typed"
import * as Vue from "vue"

export abstract class _TabBase extends Vue {

    /**
     * Tab style
     * 
     * @type {'standard' | 'menu' | 'pointing'}
     */
    @Prop()
    kind: 'standard' | 'menu' | 'pointing'

}
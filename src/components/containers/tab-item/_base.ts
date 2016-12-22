/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop
} from "vue-typed"
import * as Vue from "vue"

export abstract class _TabItemBase extends Vue {

    /**
     * Tab caption
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    caption: string

    /**
     * Set tab to active
     * 
     * @type {boolean}
     */
    @Prop({
        type: Boolean
    })
    active: boolean

    /**
     * Name of path
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    path: string

}
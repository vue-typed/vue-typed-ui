/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop
} from "vue-typed"
import * as Vue from "vue"

export abstract class _ViewSourceBase extends Vue {

    /**
     * Source code language. The list of supported language is available in th: http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html. Fill with `nohighlight` to disable highlighting.
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    lang: string

}
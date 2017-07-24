/**
 * PLEASE DO NOT EDIT THIS FILE (automatically generated from ./schema/props.json)
 */
import {
    Prop,
    Virtual,
    Mixin
} from "vue-typed"
import * as Vue from "vue"
export abstract class _ButtonBase extends Virtual < Vue > () {

    /**
     * Button icon
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    icon: string

    /**
     * Button icon position
     * 
     * @type {'left' | 'right'}
     */
    @Prop()
    iconPos: 'left' | 'right'

    /**
     * Semantic UI animation
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    animation: string

    /**
     * Set button disable
     * 
     * @type {'true' | 'false' | boolean}
     */
    @Prop()
    disabled: 'true' | 'false' | boolean

    /**
     * Button size
     * 
     * @type {'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'}
     */
    @Prop()
    size: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'

    /**
     * A button can be aligned to the left or right of its container
     * 
     * @type {'left' | 'right'}
     */
    @Prop()
    float: 'left' | 'right'

    /**
     * Button color name
     * 
     * @type {string}
     */
    @Prop({
        type: String
    })
    color: string

    /**
     * Button type
     * 
     * @default 'button'
     * @type {string}
     */
    @Prop({
        type: String,
        default: 'button'
    })
    type: string

    /**
     * Target URL when button clicked. If you are using vue-router then this attribute represents `to` attribute of `router-link` tag.
     * 
     * @type {string | Object}
     */
    @Prop()
    to: string | Object

    /**
     * If set to `true` then `to` attribute will always represents `href` attribute of `a` tag.
     * 
     * @type {boolean}
     */
    @Prop({
        type: Boolean
    })
    preventRouter: boolean

}


export enum _ButtonEvents {
    /**
     * Callback when button clicked
     */
    click = "click"
}
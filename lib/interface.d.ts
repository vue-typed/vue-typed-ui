/// <reference path="./semantic-ui.d.ts" />

export interface IAccordion {

    /**
     * Whether child content opacity should be animated (may cause performance issues with many child elements)
     */
    animateChildren: boolean

    /**
     * Close open nested accordion content when an element closes
     */
    closeNested: boolean

    /**
     * Allow active sections to collapse
     */
    collapsible: boolean

    /**
     * Duration in ms of opening animation
     */
    duration: number

    /**
     * Only allow one section open at a time
     */
    exclusive: boolean

    /**
     * Event on title that will cause accordion to open
     */
    on: string

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IAccordionItem {

    /**
     * Set accordion to active
     */
    active: boolean

    /**
     * Accordion title
     */
    title: string

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IButton {

    /**
     * Semantic UI animation
     */
    animation: string

    /**
     * Button color name
     */
    color: string

    /**
     * Set button disable
     */
    disabled: 'true' | 'false' | boolean

    /**
     * A button can be aligned to the left or right of its container
     */
    float: 'left' | 'right'

    /**
     * Button icon
     */
    icon: string

    /**
     * Button icon position
     */
    iconPos: 'left' | 'right'

    /**
     * Button size
     */
    size: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive'

    /**
     * Button type
     */
    type: string

    /**
     * Set loading state of the button.
     */
    loading(state: boolean): JQuery

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface ICalendar {

    /**
     * Enable user to clear the value by clicking clear button on the right side of control
     */
    canClear: boolean

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * Input element name
     */
    name: string

    /**
     * Input element placeholder
     */
    placeholder: string

    /**
     * JQuery object or selector for another calendar that represents the end date of a date range
     */
    rangeEnd: HTMLElement | JQuery | string

    /**
     * JQuery object or selector for another calendar that represents the start date of a date range
     */
    rangeStart: HTMLElement | JQuery | string

    /**
     * v-model binding
     */
    value: any

    /**
     * Size of field
     */
    wide: number
}

/// <reference path="./semantic-ui.d.ts" />

export interface ICheckbox {

    /**
     * Enable interaction with a checkbox
     */
    enabled: 'true' | 'false' | boolean

    /**
     * Checkbox style
     */
    kind: 'default' | 'slider' | 'toggle'

    /**
     * Input element name
     */
    name: string

    /**
     * Checked value
     */
    val: any

    /**
     * v-model binding
     */
    value: any

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface ICurrency {

    /**
     * Number of decimal places
     */
    decimalPlaces: number

    /**
     * Decimal group separator
     */
    decimalSeparator: string

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Thousands group separator
     */
    groupSeparator: string

    /**
     * Take only integer value
     */
    integer: boolean

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * Maximum value allowed
     */
    max: number

    /**
     * Minimum value allowed
     */
    min: number

    /**
     * Input element name
     */
    name: string

    /**
     * Input element placeholder
     */
    placeholder: string

    /**
     * Select text when receive focus
     */
    selectOnFocus: boolean

    /**
     * Currency sign
     */
    sign: string

    /**
     * Currency sign position
     */
    signPos: 'left' | 'right'

    /**
     * v-model binding
     */
    value: any

    /**
     * Size of field
     */
    wide: number
}

/// <reference path="./semantic-ui.d.ts" />

export interface IDate {

    /**
     * Enable user to clear the value by clicking clear button on the right side of control
     */
    canClear: boolean

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Date format
     */
    format: string

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * Input element name
     */
    name: string

    /**
     * Input element placeholder
     */
    placeholder: string

    /**
     * JQuery object or selector for another calendar that represents the end date of a date range
     */
    rangeEnd: HTMLElement | JQuery | string

    /**
     * JQuery object or selector for another calendar that represents the start date of a date range
     */
    rangeStart: HTMLElement | JQuery | string

    /**
     * v-model binding
     */
    value: any

    /**
     * Size of field
     */
    wide: number

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IDatetime {

    /**
     * Enable user to clear the value by clicking clear button on the right side of control
     */
    canClear: boolean

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Date format
     */
    format: string

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * Input element name
     */
    name: string

    /**
     * Input element placeholder
     */
    placeholder: string

    /**
     * JQuery object or selector for another calendar that represents the end date of a date range
     */
    rangeEnd: HTMLElement | JQuery | string

    /**
     * JQuery object or selector for another calendar that represents the start date of a date range
     */
    rangeStart: HTMLElement | JQuery | string

    /**
     * v-model binding
     */
    value: any

    /**
     * Size of field
     */
    wide: number

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IDropdown {

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * A selection dropdown can allow multiple selections
     */
    multiple: boolean

    /**
     * Input element name
     */
    name: string

    /**
     * Input element placeholder
     */
    placeholder: string

    /**
     * A selection dropdown can allow a user to search through a large list of choices.
     */
    search: boolean

    /**
     * Semantic UI dropdown settings. See: https://semantic-ui.com/modules/dropdown.html#/settings
     */
    settings: object

    /**
     * v-model binding
     */
    value: any

    /**
     * Size of field
     */
    wide: number

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IDropdownItem {

    /**
     * Dropdown item value
     */
    value: any

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IField {

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * Size of field
     */
    wide: number

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IFieldBase {

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * Size of field
     */
    wide: number
}

/// <reference path="./semantic-ui.d.ts" />

export interface IFieldsGroup {

    /**
     * Field label text
     */
    label: string

    /**
     * Size of field
     */
    wide: number

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IFieldsInline {

    /**
     * Field label text
     */
    label: string

    /**
     * Size of field
     */
    wide: number

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IForm {

    /**
     * Adds keyboard shortcut for enter key to submit form
     */
    keyboardShortcuts: boolean

    /**
     * Width of fields label when displayed 'inline'.
     */
    labelWidth: string

    /**
     * Show validation message inline
     */
    validateInline: boolean

    /**
     * Fields validation object. See: http://semantic-ui.com/behaviors/form.html#specifying-validation-rules
     */
    validator: any

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IHeader {

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IInput {

    /**
     * Css class(es) applied to input component
     */
    css: string

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Name of icon to be displayed
     */
    icon: string

    /**
     * Icon position
     */
    iconPos: 'left' | 'right' | string

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * Input element name
     */
    name: string

    /**
     * Input element is password element
     */
    password: boolean

    /**
     * Input element placeholder
     */
    placeholder: string

    /**
     * Select text when receive focus
     */
    selectOnFocus: boolean

    /**
     * v-model binding
     */
    value: any

    /**
     * Size of field
     */
    wide: number

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IMenuBase {

    /**
     * Display menu as sidebar
     */
    sidebar: 'vertical' | 'horizontal'

    /**
     * JQuery object or selector to be attached as sidebar toggle
     */
    sidebarToggle: HTMLElement | JQuery | string
}

/// <reference path="./semantic-ui.d.ts" />

export interface IMenuDropdown {

    /**
     * Trigger dropdown on hover.
     */
    hover: boolean

    /**
     * Dropdown icon
     */
    icon: string

    /**
     * Dropdown title/label.
     */
    label: string

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IMenuHorizontal {

    /**
     * Display as secondary menu. See: http://semantic-ui.com/collections/menu.html#secondary-menu
     */
    secondary: boolean

    /**
     * Display menu as sidebar
     */
    sidebar: 'vertical' | 'horizontal'

    /**
     * JQuery object or selector to be attached as sidebar toggle
     */
    sidebarToggle: HTMLElement | JQuery | string

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IMenuItem {

    /**
     * Replace slot with this content
     */
    content: string

    /**
     * Name of icon to be displayed
     */
    icon: string

    /**
     * If set to `true` then `to` attribute will always represents `href` attribute of `a` tag.
     */
    preventRouter: boolean

    /**
     * Target URL when menu item clicked. If you are using vue-router then this attribute represents `to` attribute of `router-link` tag.
     */
    to: string | Object

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IMenuVertical {

    /**
     * Display menu as sidebar
     */
    sidebar: 'vertical' | 'horizontal'

    /**
     * JQuery object or selector to be attached as sidebar toggle
     */
    sidebarToggle: HTMLElement | JQuery | string

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IMessage {

    /**
     * Add close icon choose to hide message.
     */
    closable: boolean

    /**
     * Icon appears on the left of message contens.
     */
    icon: string

    /**
     * Message variations.
     */
    kind: 'default' | 'compact' | 'floating'

    /**
     * Semantic UI transition on closing message.
     */
    transition: string

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IModal {

    /**
     * Allow second modal to be opened on top of the first modal.
     */
    allowMultiple: boolean

    /**
     * Attach hide event to another element
     */
    attachHide: string

    /**
     * Attach refresh event to another element
     */
    attachRefresh: string

    /**
     * Attach show event to another element
     */
    attachShow: string

    /**
     * Attach toggle event to another element
     */
    attachToggle: string

    /**
     * First input in modal will receive focus when shown.
     */
    autofocus: boolean

    /**
     * Setting to false will not allow you to close the modal by clicking on the dimmer.
     */
    closable: boolean

    /**
     * Header icon.
     */
    icon: string

    /**
     * Named transition to use when animating menu in and out, full list can be found in ui transitions docs.
     */
    transition: SemanticUI.AnimationNames

    /**
     * Hides the modal
     */
    hide(): JQuery

    /**
     * Refreshes centering of modal on page
     */
    refresh(): JQuery

    /**
     * Shows the modal
     */
    show(): JQuery

    /**
     * Target element
     */
    target(): JQuery

    /**
     * Toggles the modal
     */
    toggle(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface INumeric {}

/// <reference path="./semantic-ui.d.ts" />

export interface INumericBase {

    /**
     * Number of decimal places
     */
    decimalPlaces: number

    /**
     * Decimal group separator
     */
    decimalSeparator: string

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Thousands group separator
     */
    groupSeparator: string

    /**
     * Take only integer value
     */
    integer: boolean

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * Maximum value allowed
     */
    max: number

    /**
     * Minimum value allowed
     */
    min: number

    /**
     * Input element name
     */
    name: string

    /**
     * Input element placeholder
     */
    placeholder: string

    /**
     * Select text when receive focus
     */
    selectOnFocus: boolean

    /**
     * v-model binding
     */
    value: any

    /**
     * Size of field
     */
    wide: number

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IPusher {

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IRadio {

    /**
     * Input element name
     */
    name: string

    /**
     * Checked value
     */
    val: any

    /**
     * v-model binding
     */
    value: any

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface IRadioGroup {

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * Name of radio group
     */
    name: string

    /**
     * Size of field
     */
    wide: number

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface ISegment {

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface ITab {

    /**
     * Tab style
     */
    kind: 'standard' | 'menu' | 'pointing'

    /**
     * Changes tab to path
     */
    changeTab(path: string)

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface ITabItem {

    /**
     * Set tab to active
     */
    active: boolean

    /**
     * Tab caption
     */
    caption: string

    /**
     * Name of path
     */
    path: string

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface ITime {

    /**
     * Enable user to clear the value by clicking clear button on the right side of control
     */
    canClear: boolean

    /**
     * Disabled field
     */
    disabled: boolean

    /**
     * Date format
     */
    format: string

    /**
     * Field layout style
     */
    kind: 'default' | 'grouped' | 'inline'

    /**
     * Field label text
     */
    label: string

    /**
     * Input element name
     */
    name: string

    /**
     * Input element placeholder
     */
    placeholder: string

    /**
     * JQuery object or selector for another calendar that represents the end date of a date range
     */
    rangeEnd: HTMLElement | JQuery | string

    /**
     * JQuery object or selector for another calendar that represents the start date of a date range
     */
    rangeStart: HTMLElement | JQuery | string

    /**
     * v-model binding
     */
    value: any

    /**
     * Size of field
     */
    wide: number

    /**
     * Target element
     */
    target(): JQuery
}

/// <reference path="./semantic-ui.d.ts" />

export interface ITree {

    /**
     * HTML child tag name. Default is `li`.
     */
    childTag: string

    /**
     * A property name of data model represents children property. Children property must be in array type contains list of `model`.
     */
    children: string

    /**
     * A property name of data model represents content of tree view.
     */
    content: string

    /**
     * Indicate that the content is in HTML format. If set true then `content` property will be ignored, you'll need to supply `htmlContent` property instead.
     */
    html: boolean

    /**
     * Html content that displayed on tree content area. You must set `html` property to `true` to use this property.
     */
    htmlContent: string

    /**
     * Data model to populate.
     */
    model: any

    /**
     * HTML parent tag name. Default is `ul`.
     */
    parentTag: string

    /**
     * Target element
     */
    target(): JQuery
}


export class Components {

    /**
     * Get instance of Accordion from [ref]
     */
    accordion(ref: string): IAccordion

    /**
     * Get instance of AccordionItem from [ref]
     */
    accordionItem(ref: string): IAccordionItem

    /**
     * Get instance of Button from [ref]
     */
    button(ref: string): IButton

    /**
     * Get instance of Calendar from [ref]
     */
    calendar(ref: string): ICalendar

    /**
     * Get instance of Checkbox from [ref]
     */
    checkbox(ref: string): ICheckbox

    /**
     * Get instance of Currency from [ref]
     */
    currency(ref: string): ICurrency

    /**
     * Get instance of Date from [ref]
     */
    date(ref: string): IDate

    /**
     * Get instance of Datetime from [ref]
     */
    datetime(ref: string): IDatetime

    /**
     * Get instance of Dropdown from [ref]
     */
    dropdown(ref: string): IDropdown

    /**
     * Get instance of DropdownItem from [ref]
     */
    dropdownItem(ref: string): IDropdownItem

    /**
     * Get instance of Field from [ref]
     */
    field(ref: string): IField

    /**
     * Get instance of FieldBase from [ref]
     */
    fieldBase(ref: string): IFieldBase

    /**
     * Get instance of FieldsGroup from [ref]
     */
    fieldsGroup(ref: string): IFieldsGroup

    /**
     * Get instance of FieldsInline from [ref]
     */
    fieldsInline(ref: string): IFieldsInline

    /**
     * Get instance of Form from [ref]
     */
    form(ref: string): IForm

    /**
     * Get instance of Header from [ref]
     */
    header(ref: string): IHeader

    /**
     * Get instance of Input from [ref]
     */
    input(ref: string): IInput

    /**
     * Get instance of MenuBase from [ref]
     */
    menuBase(ref: string): IMenuBase

    /**
     * Get instance of MenuDropdown from [ref]
     */
    menuDropdown(ref: string): IMenuDropdown

    /**
     * Get instance of MenuHorizontal from [ref]
     */
    menuHorizontal(ref: string): IMenuHorizontal

    /**
     * Get instance of MenuItem from [ref]
     */
    menuItem(ref: string): IMenuItem

    /**
     * Get instance of MenuVertical from [ref]
     */
    menuVertical(ref: string): IMenuVertical

    /**
     * Get instance of Message from [ref]
     */
    message(ref: string): IMessage

    /**
     * Get instance of Modal from [ref]
     */
    modal(ref: string): IModal

    /**
     * Get instance of Numeric from [ref]
     */
    numeric(ref: string): INumeric

    /**
     * Get instance of NumericBase from [ref]
     */
    numericBase(ref: string): INumericBase

    /**
     * Get instance of Pusher from [ref]
     */
    pusher(ref: string): IPusher

    /**
     * Get instance of Radio from [ref]
     */
    radio(ref: string): IRadio

    /**
     * Get instance of RadioGroup from [ref]
     */
    radioGroup(ref: string): IRadioGroup

    /**
     * Get instance of Segment from [ref]
     */
    segment(ref: string): ISegment

    /**
     * Get instance of Tab from [ref]
     */
    tab(ref: string): ITab

    /**
     * Get instance of TabItem from [ref]
     */
    tabItem(ref: string): ITabItem

    /**
     * Get instance of Time from [ref]
     */
    time(ref: string): ITime

    /**
     * Get instance of Tree from [ref]
     */
    tree(ref: string): ITree
}
export interface Modal {

    /**
     * Shows the modal
     */
    show(): void

    /**
     * Hides the modal
     */
    hide(): void

    /**
     * Toggles the modal
     */
    toggle(): void

    /**
     * Refreshes centering of modal on page
     */
    refresh(): void

}


export interface Tab {

    /**
     * Changes tab to path
     * 
     * @param {string} path Tab path name
     */
    changeTab(path: string): void

}


export interface Button {

    /**
     * Set loading state of the button.
     * 
     * @param {boolean} state State of loading (true | false)
     */
    loading(state: boolean): void

}

export class VueTypedUIMethods {

    modal(element: string | HTMLElement | JQuery): Modal
    tab(element: string | HTMLElement | JQuery): Tab
    button(element: string | HTMLElement | JQuery): Button

}
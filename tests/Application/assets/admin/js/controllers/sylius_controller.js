'use strict';

import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['input', 'placeholder', 'preview', 'previewClearButton', 'container'];

    connect() {
        this.clear();

        this.previewClearButtonTarget.addEventListener('click', () => this.clear());

        this.inputTarget.addEventListener('change', (event) => this.onInputChange(event));

        this._dispatchEvent('dropzone:connect');
    }

    clear() {
        this.inputTarget.value = '';
        this.inputTarget.style.display = 'block';
        this.placeholderTarget.style.display = 'block';
        this.previewTarget.style.display = 'none';

        this.containerTarget.innerHTML = '';

        const collectionsElements = document.querySelectorAll('[data-form-collection="item"]')

        collectionsElements.forEach(seletor => {
            if (null !== seletor) {
                const imageDiv = seletor.querySelector('[id="dropzone-image-view"]');
                if (null !== imageDiv && imageDiv.firstChild) {
                    seletor.remove();
                }
            }
        });

        this._dispatchEvent('dropzone:clear');
    }

    onInputChange(event) {
        Array.from(event.target.files).forEach(file => {
            if (typeof file === 'undefined') {
                return;
            }

            this.inputTarget.style.display = 'none';
            this.placeholderTarget.style.display = 'none';

            this.previewTarget.style.display = 'flex';
            this.containerTarget.style.display = 'flex';
            this.containerTarget.style.flexWrap = 'wrap';

            if (file.type && file.type.indexOf('image') !== -1) {
                const previewHolder = document.createElement('div');
                previewHolder.style.display = 'flex';
                previewHolder.style.alignItems = 'center';
                previewHolder.style.marginRight = '20px';

                const preview = document.createElement('div');
                preview.classList.add('dropzone-preview-image');
                previewHolder.appendChild(preview);

                const name = document.createElement('div');
                name.classList.add('dropzone-preview-filename');
                name.textContent = file.name;
                previewHolder.appendChild(name);

                this.containerTarget.appendChild(previewHolder);
                document.querySelector('[data-form-collection="add"]').click();
                const collectionsElement = document.querySelector('[data-form-collection="item"]:last-child')
                this._populateImagePreview(file, preview, collectionsElement);
            }

            this._dispatchEvent('dropzone:change', file);
        })
    }

    _populateImagePreview(file, imageTarget, collectionTarget) {
        if (typeof FileReader === 'undefined') {
            return;
        }

        const reader = new FileReader();

        reader.addEventListener('load', (event) => {

            imageTarget.style.display = 'block';
            imageTarget.style.backgroundImage = 'url("' + event.target.result + '")';

            const img = document.createElement("img");
            img.src =  event.target.result;
            const imageDiv = collectionTarget.querySelector('[id="dropzone-image-view"]');
            imageDiv.appendChild(img);
        });

        reader.readAsDataURL(file);
    }

    _dispatchEvent(name, payload = null, canBubble = false, cancelable = false) {
        const userEvent = document.createEvent('CustomEvent');
        userEvent.initCustomEvent(name, canBubble, cancelable, payload);

        this.element.dispatchEvent(userEvent);
    }
}

class Modal {
    constructor(modalElement) {
        this.modalElement = modalElement;
        this.overlay = modalElement.nextElementSibling;
        this.closeButton = modalElement.querySelector('.close');
        this.modalBody = modalElement.querySelector('.modal-body');
        this.isOpen = false;

        this.closeButton.addEventListener('click', this.closeModal.bind(this));
        this.overlay.addEventListener('click', this.closeModal.bind(this));
    }

    openModal() {
        this.modalElement.style.display = 'block';
        setTimeout(() => {
            this.overlay.style.opacity = '1';
            this.modalElement.querySelector('.modal-body').style.transform = 'translateY(0%)';
            this.isOpen = true;
            document.body.style.overflow = 'hidden';
        }, 10);
    }

    closeModal() {
        this.overlay.style.opacity = '0';
        this.modalElement.querySelector('.modal-body').style.transform = 'translateY(-200%)';
        this.isOpen = false;
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            this.modalElement.style.display = 'none';
        }, 500);
    }
}

const modalElements = document.querySelectorAll('.modal-up');
const modals = Array.from(modalElements).map(modalElement => new Modal(modalElement));

const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', () => {
        const activeAccordionItemHeader = document.querySelector('.accordion-item-header.active');

        // Open an item closing others
        if (activeAccordionItemHeader && activeAccordionItemHeader !== accordionItemHeader) {
            activeAccordionItemHeader.classList.toggle('active');
            activeAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        // Open accordion body
        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;

        }
    })
})

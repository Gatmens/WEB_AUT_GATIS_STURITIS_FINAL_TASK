describe('scenario', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/date-picker');
    });
    it('Set the date using the calendar widget to - 28th of February, 2013 and time to 12:00', () => {
        cy.get('#dateAndTimePickerInput')

        cy.get('.react-datepicker__month-dropdown-container').click();
        cy.get('.react-datepicker__month-option').contains('February').click();

        cy.get('.react-datepicker__year-dropdown-container').click();
        cy.get('.react-datepicker__year-option').contains('2013').click();

        cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();

        cy.get('.react-datepicker__time-list-item').contains(time).click();
    });

    it('should select February 28, 2013, at 12:00 PM in Date And Time Picker', () => {
        cy.get('#dateAndTimePickerInput').should('have.value', 'February 28, 2013 12:00 PM');
    });
});

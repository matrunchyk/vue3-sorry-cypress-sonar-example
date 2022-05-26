/// <reference types="cypress" />
import {formatDate, nlToBr} from "../../src/helpers";

describe('Unit Tests', () => {
    context('helpers.ts', () => {
        it('converts newlines to <br>s', async () => {
            expect(nlToBr("line 1\nline 2")).eq('line 1<br>line 2')
        });

        it('formats human readable post date', async () => {
            const date = new Date(2021, 3, 25, 11, 4, 55, 0);
            const now = new Date(2022, 5, 25, 0, 0, 0, 0).getTime()
            cy.clock(now)

            expect(formatDate(date)).eq('about 1 year ago');
        });
    });
});

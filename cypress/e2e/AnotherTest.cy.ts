///<reference types="cypress" />

import { contains } from "cypress/types/jquery";
import { get, invoke } from "cypress/types/lodash";
import { it } from "mocha";

describe('My suite', () => {
    beforeEach(() => {

    })


    it('First Test using as', () => {
        cy.visit('https://demo.guru99.com/test/newtours/index.php');
        cy.contains('REGISTER').as('MyOption');
        cy.get('@MyOption').invoke('text').
            then((TEXTO) => {
                cy.log('My texto is ' + TEXTO)
            })
        cy.get('@MyOption').click();
        // cy.get('select[name="country"]').scrollIntoView()
        // cy.wait(6000);
    });

    it('My first test finding chindren', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('select[name="country"]').scrollIntoView()
        cy.get('select[name="country"]').as('CountryOption')
        cy.get('@CountryOption').should('exist').should('have.length.above', 0)
        cy.get('@CountryOption').children().its('length')
            .then((Cantidad) => {
                cy.log('La cantidad de Paises es ' + Cantidad.toString())
            })
        cy.get('@CountryOption').select('BARBADOS').should('have.value', "BARBADOS");
        cy.get('@CountryOption').children().eq(5).invoke('text')
            .then((position) => {
                cy.log('En la position 5 esta el pais ' + position)
            })

    });

    it('Test using Closest', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.wait(5000)
        cy.get('select[name="country"]').closest('select').find('option:not([value="ALGERIA"])')
            .eq(1)
            .invoke('text')
            .then((Option1) => {
                cy.log('La opcion mas cerca de ALGERIA es: ' + Option1)
            })

    });

    it('Test Using Contains', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.wait(5000)
        cy.get('tbody').contains('First').click().should('be.visible').invoke('text')
            .then((CampoName) => {
                cy.log('La opcion que tiene el valor es: ' + CampoName)
            })

    });

    it('Test using Document', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.wait(3000)
        cy.document().url().then((url) => {
            cy.log('La url es :' + url)
        })
    });

    it('Test using eq', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('select[name="country"]').find('option').eq(2).invoke('text')
            .then((PositionValue) => {
                cy.log('El valor que esta en la posicion 2 es : ' + PositionValue)
            })

    });

    it('Test using Filter', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('select[name="country"]').find('option')
        .filter(':contains(ANTARCTICA)').should('exist')            
    });

    it('Testing using Find()', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('select[name="country"]').children().its('length')
        .then((cantidad)=>{
            cy.log('Se encontraron: '+ cantidad.toString())
        })
        
    });

    it('Testing using First()', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('select[name="country"]').find('option').last().invoke('text')
        .then((primerElemento)=>{
            cy.log('El primer elemento de la lista es ' + primerElemento)
        })
    });

    it('Testing Using Focused()', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('input[name="address1"]').click();
        cy.focused();
        
    });

    it('Testing a loop', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('select[name="country"]').as('pais').find('option')
        .each((option,index)=>{
            if (option.text()==='ALGERIA') {
                cy.log('Position '+ `${index}  'Pais '  ${option.text()}`)
            }
            
        })
    });

    it('Testing usin Hash()', () => {
        cy.visit('https://www.ejemplo.com/pagina#seccion')
        cy.hash().should('eq','seccion')
    });

    it.skip('Testing using Invoke()', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('input[name="submit"]').as('BotonEnviar').scrollIntoView().should('be.visible')
        cy.get('@BotonEnviar').invoke('attr','type').should('equal','submit')
    });

    it('Testing using Location()', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.location('origin')
        .then((HOST)=>{
            cy.log(HOST)
        })
    });

    it('Testing using Next()', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('select[name="country"]').find('option').eq(7).next().invoke('text')
        .then((cercano)=>{
            cy.log(cercano)
        })

    });

    it('Testing using NextAll()', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('select[name="country"]').as('paisSelected').find('option[value=YEMEN]')
        .nextAll()
        .each((option,index)=>{
            cy.log( `Paises despues  ${index} : ${option.text()}`)
        })
    });

    it('Testing using nextUntil', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php');
      
        cy.get('select[name="country"] option[value=ANGOLA]')
        .then($angolaOption => {
          cy.get('select[name="country"] option')
          .first().nextUntil($angolaOption)
          .each(($option, index) => {
            cy.log(`${index} : ${$option.text()}`);
          });
        });
      });
      //testing other
      it.only('Testing using NOT()', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php');
      
        cy.get('select[name="country"] option').not('value=ANGOLA')
        .each(($option,index)=>{
            cy.log(`${index} : ${$option.text()}`)
        })
        
      });
      
})
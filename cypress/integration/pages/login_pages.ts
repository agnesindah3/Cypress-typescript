import { JsxEmit } from "typescript"

export class LoginPage{
    txt_username = '#user-name' // variabel berisi atribute #user-name
    txt_password = '#password' // variabel berisi atribute #password
    btn_login = '#login-button' // variabel berisi atribute #login-button

    navigate(url: string){ // mengarahkan ke url 
        cy.visit(url)
    }
    inputUsername(username: string){ // input username sesuai dengan atribute dari variabel
        cy.get(this.txt_username).type(username)
    }
    inputPassword(password: string){ // input passowrd sesuai dengan atribute dari variabel
        cy.get(this.txt_password).type(password)
    }
    clickLogin(){ // click button login berdasarkan atribute dari variabel 
        cy.get(this.btn_login).click()
    }
    assertLogin(){ // mendapatkan sesuatu setelah login berhasil
        cy.get('.title').should('be.visible') // atribute html dengan class title harus tampil
        cy.get('.peek').should('be.visible') // atribute html dengan class css peek harus tampil
        cy.contains('Products').should('contain','Products') // atribute html yang memiliki kata Prodcuts harus memiliki data Products
    }
    assertLoginFail(){ // mendapatkan sesuatu setelah login gagal
        cy.get('[data-test="error"]').should('be.visible') // atribute html yang mengandung data-test="error" harus tampil
    }
    login(url : string,username : string,password : string){  // fungsi untukk login (group)
        this.navigate(url)
        this.inputUsername(username)
        this.inputPassword(password)
        this.clickLogin()
    }
}

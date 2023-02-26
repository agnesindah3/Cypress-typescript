import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage() // memanggil class LoginPage()
let dashboardPage = new DashboardPage() //menanggil class DashboardPage()
const URL = 'https://www.saucedemo.com/' // url

it('Test LOGIN', () => { // unit testing pada fungsi login dengan data yang valid
    loginPage.login(URL,'standard_user','secret_sauce') // login page dengan parameter
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => { // unite testing pada fungsi invalid pass
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => { // unit testing ketika login berhasil
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})


it('Test Sauce Demo Sauce labs product backpack add to cart', () => { 
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addToCart() 
})


it('Test Sauce Demo Sauce labs product backpack remove from cart', () => { 
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.removeFromCart() 
})

const { By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');


class VehicleInsurance {
    constructor(driver) {
        this.driver = driver;
        this.linkauto = '#nav_automobile';
        this.inputMake = '#make > option[value="BMW"]';
        this.engineperformance = '#engineperformance';
        this.dateofmanufacture = '#dateofmanufacture';
        this.numberofseat = '#numberofseats>option[value="5"]';
        this.fuel = '#fuel>option[value="Gas"]';
        this.listprice = '#listprice';
        this.licenseplatenumber = '#licenseplatenumber';
        this.annualmileage = '#annualmileage';

        this.nextenterinsurantdata = '#nextenterinsurantdata';
        this.firstname = '#firstname';
        this.lastname = '#lastname';
        this.birthdate = '#birthdate';
        this.streetaddress = '#streetaddress';
        this.country = '#country>option[value="Brazil"]';
        this.zipcode = '#zipcode';
        this.city = '#city';
        this.occupation = '#occupation>option[value="Employee"]';
        this.radiocheck = ".field:nth-child(10) .ideal-radiocheck-label:nth-child(1) > .ideal-check";
        this.website = '#website';
        this.nextenterproductdata = '#nextenterproductdata';

        this.startdate = '#startdate';
        this.insurancesum = '#insurancesum>option[value="10000000"]';
        this.meritrating = '#meritrating>option[value="Super Bonus"]';
        this.damageinsurance = '#damageinsurance>option[value="Full Coverage"]';
        this.radiocheckr = ".field:nth-child(5) .ideal-radiocheck-label:nth-child(1)";
        this.courtesycar = '#courtesycar>option[value="Yes"]';
        this.nextselectpriceoption = '#nextselectpriceoption';

        this.choosePrice = ".choosePrice:nth-child(4)";
        this.nextsendquote = '#nextsendquote';

        this.email = '#email';
        this.phone = '#phone';
        this.username = '#username';
        this.password = '#password';
        this.confirmpassword = '#confirmpassword';
        this.comments = '#Comments';

        this.sendemail = '#sendemail';
        this.tinsurancesum = 'insurancesum';
        this.sweetalert = '.sweet-alert > h2';
    }

    async url() {
        return await this.driver.get('http://sampleapp.tricentis.com/101/app.php');
    }

    async EnterVehicleData() {
        await this.driver.wait(until.elementLocated(By.css(this.linkauto)), 5000);
        await this.driver.findElement(By.css(this.linkauto)).click();
        await this.driver.sleep(2000)
        await this.driver.findElement(By.css(this.inputMake)).click()
        await this.driver.findElement(By.css(this.engineperformance)).sendKeys('1000', Key.RETURN);
        await this.driver.findElement(By.css(this.dateofmanufacture)).sendKeys('01/01/2020', Key.RETURN);
        await this.driver.findElement(By.css(this.numberofseat)).click();
        await this.driver.findElement(By.css(this.fuel)).click();
        await this.driver.findElement(By.css(this.listprice)).sendKeys('1000', Key.RETURN);
        await this.driver.findElement(By.css(this.licenseplatenumber)).sendKeys('0', Key.RETURN);
        await this.driver.findElement(By.css(this.annualmileage)).sendKeys('1000', Key.RETURN);
    }

    async EnterInsurantData() {
        await this.driver.findElement(By.css(this.nextenterinsurantdata)).click();
        await this.driver.findElement(By.css(this.firstname)).sendKeys('teste', Key.RETURN);
        await this.driver.findElement(By.css(this.lastname)).sendKeys('teste', Key.RETURN);
        await this.driver.findElement(By.css(this.birthdate)).sendKeys('01/01/2000', Key.RETURN);
        await this.driver.findElement(By.css(this.streetaddress)).sendKeys('teste', Key.RETURN);
        await this.driver.findElement(By.css(this.country)).click();
        await this.driver.findElement(By.css(this.zipcode)).sendKeys('0000', Key.RETURN);
        await this.driver.findElement(By.css(this.city)).sendKeys('teste', Key.RETURN);
        await this.driver.findElement(By.css(this.occupation)).click();
        await this.driver.findElement(By.css(this.radiocheck)).click()
        await this.driver.findElement(By.css(this.website)).sendKeys('teste.com', Key.RETURN);
        await this.driver.findElement(By.css(this.nextenterproductdata)).click();
    }

    async EnterProductData() {
        await this.driver.findElement(By.css(this.startdate)).sendKeys('01/01/2030', Key.RETURN);
        await this.driver.findElement(By.css(this.insurancesum)).click();
        await this.driver.findElement(By.css(this.meritrating)).click();
        await this.driver.findElement(By.css(this.damageinsurance)).click();
        await this.driver.findElement(By.css(this.radiocheckr)).click()
        await this.driver.findElement(By.css(this.courtesycar)).click();
        await this.driver.findElement(By.css(this.nextselectpriceoption)).click();
    }

    async SelectPriceOption() {
        await this.driver.findElement(By.css(this.choosePrice)).click()
        await this.driver.findElement(By.css(this.nextsendquote)).click();

    }

    async FillQuote() {
        await this.driver.findElement(By.css(this.email)).sendKeys('teste@teste.com', Key.RETURN);
        await this.driver.findElement(By.css(this.phone)).sendKeys('00000000', Key.RETURN);
        await this.driver.findElement(By.css(this.username)).sendKeys('teste', Key.RETURN);
        await this.driver.findElement(By.css(this.password)).sendKeys('Password1', Key.RETURN);
        await this.driver.findElement(By.css(this.confirmpassword)).sendKeys('Password1', Key.RETURN);
        await this.driver.findElement(By.css(this.comments)).sendKeys('teste', Key.RETURN);
    }

    async SendQuote() {
        await this.driver.findElement(By.css(this.sendemail)).click();
    }

    async ValidateMessage(messageStr) {
        const element = await this.driver.findElement(By.id(this.tinsurancesum));
        await this.driver.sleep(15000);
        let text = await this.driver.findElement(By.css(this.sweetalert)).getText();
        expect(await text).to.equal(messageStr);

    }
}

module.exports = VehicleInsurance;
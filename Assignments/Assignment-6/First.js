const prompt=require('prompt-sync')();
class Phone{
    constructor(model,price,date)
    {
        this.model=model;
        this.price=price;
        this.date=date;
    }
    getDetails()
    {
        console.log("model:"+this.model);
        console.log("price:"+this.price);
        console.log("Date:"+this.date);

    }
}
let model=prompt('')
let date=new Date() ;
let phone=new Phone(model,"$2500000",date.getFullYear()+"-"+date.getMonth()+1+"-"+date.getDate());

phone.getDetails();
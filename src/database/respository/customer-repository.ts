import {CustomerModel, ICustomer} from '../model'


export class CustomerRepository {

    async createCustomer({
        email,
        password,
        salt,
        phone,}:ICustomer)

        {
       try {
        const customer = new CustomerModel({
            email,
            password,
            salt,
            phone
        })

        
        const customerResult = await customer.save()
         return customerResult

       } catch (error) {
        console.log(error)
       } 
    }

    async FindCustomer ({email}:{email:string}){
        const existingCustomer = await CustomerModel.findOne({email})
        return existingCustomer
    }

}